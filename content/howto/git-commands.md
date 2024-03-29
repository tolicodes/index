# Git
## List all remotes in directory
```bash
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "git config --get remote.origin.url"
```

## Get All clone urls in directory
```bash
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "echo \"git clone \$(git config --get remote.origin.url)\""
```

### Loop over All Git Repos in Folder

#### One Level Down
```bash
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "COMMAND" ### REPLACE THIS

```
Replace `COMMAND` with your command

### Example: Print Paths
```bash
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "pwd" 
```

## Get All Unmerged Changed In Repos
```bash
setopt sh_word_split # For zsh
dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
    unclean=$(git status --porcelain)
    unpushed=$(git log --branches --not --remotes)
    [[ $unclean || $unpushed ]] && echo $dir
	cd $originalPwd
done
```

## Save Changes In All Uncommitted Repos
```bash
setopt sh_word_split # For zsh
dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
    unclean=$(git status --porcelain)
    unpushed=$(git log --branches --not --remotes)
    [[ $unclean || $unpushed ]] && git add . && git commit -m "Uncommited Changes" && git push --all
	cd $originalPwd
done
```

## Delete All Git Repos
```bash
setopt sh_word_split # For zsh

function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "cd .. && rm -rf \$dir" 
```

## Sync dotfiles in All Git Repos
```bash
setopt sh_word_split # For zsh

dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)

# store dotfiles here
[[ ! -d dotfiles ]] && mkdir dotfiles
dotfiles_path=$(cd dotfiles && pwd)

for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
	ignored=$(git status --ignored)
	for file in $ignored; do
		if [[ -f $file ]]; then
			new_location="$dotfiles_path/$dir/$(dirname $file)"
			mkdir -p $new_location
			cp $file $new_location
		fi
	done
	cd $originalPwd
done
```

Copy the files to Google Drive:
```bash
# NYC ITT acct
cp -r dotfiles ~/Google\ Drive\ \(adz@nycitt.com\)/ALL\ -\ Toli/

# ToliCodes
cp -r dotfiles ~/Google\ Drive/ALL\ -\ Toli/

# Dropbox
cp -r dotfiles ~/ToliCodes\ Dropbox/Anatoliy\ Zaslavskiy/ALL
```

Wait for files to sync

On new computer
```bash
cp ~/Google\ Drive/ALL\ -\ Toli/dotfiles/* .

cp -r ~/ToliCodes\ Dropbox/Anatoliy\ Zaslavskiy/ALL/dotfiles/* .
```

You can also put this in a script and on a cron job to auto backup

```bash
env EDITOR=nano crontab -e
```

Paste:
```
*/10 * * * * ~/Sites/backupEnv.sh
```

## Overwrite Origin
```bash
git remote rm origin
git remote add origin ORIGIN
git config master.remote origin
git config master.merge refs/heads/master
```

## Push All Branches
```bash
git push --all
```

## No Need to set upstream branch
```bash
git config --global branch.autosetupmerge always
```

## Stash and Rebase
Before rebasing you need to stash. Then you reapply the stash.
In case there is a rebase conflict, you want to correct that conflict
and then continue (it will do a `git add .` and `git rebase --continue`
for you)

```bash
# Get current branch name
function current_branch() {
  git branch | awk '/^\* / { print $2 }'
}

function git-stash-rebase () {
  [[ $1 == '-r' ]] && \
    git add . && git rebase --continue || \
    { git stash --include-untracked && \
      { git fetch && git rebase origin/$(current_branch) || { echo "Merge files then run gacap -r" && return 1 } } && \
      git stash apply || { echo "Merge files then run gacap -r" && return 1 } }
}
```

## Dealing With Upstream
Sometimes there is no upstream set we can use these functions to set it:

```bash
# Get current branch name
function current_branch() {
  git branch | awk '/^\* / { print $2 }'
}

# Does the repo have an upstream set?
function has_upstream() {
  branch=$(test $1 && echo $1 || current_branch)
  upstream=$(git ls-remote origin $branch)
  test $upstream && echo "TRUE"
}

# The repo does not have an upstream set?
function has_no_upstream() {
  [[ ! $(has_upstream) ]]
}

# Sets upstream if there is no upstream to the current branch name
function git_set_upstream() {
  has_no_upstream && git push --set-upstream origin $(current_branch)
}
```

## Add, Commit, Push
```bash
# Add, Commit, Push
# usage: gacp (does a git commit) which may trigger a commit hook (like commitizen)
# gacp Message (does a git commit -m "Message")
# depends on: git_set_upstream, has_no_upstream, has_upstream, current_branch
function gacp() {
	# we want to stash and rebase before pulling so that we don't get conflicts (see Stash and Rebase)
  git-stash-rebase $1 || { echo "fail" && return 1 }
  git add .
	# if we passed in a message we use it. Otherwise just git commit
  [[ $1 ]] && git commit -m $1 || git commit
  # we want to make sure there's an upstream. If not we set it (see Dealing with Upstream)
	git_set_upstream
  git push
}
alias git-add-commit-push=gacp
```

## Add, Commit Amend with No Message, Push
If we want to amend the previous commit with no message

```bash
# Add, Commit Amend with No Message, Push
# If we want to amend the previous commit with no message
# depends on: git_set_upstream, has_no_upstream, has_upstream, current_branch
function gacap() {
  git-stash-rebase $1 || { echo "fail" && return 1 }
  git add .
	# If we are using commit hooks we want to ignore them
	# This needs to be run inline for some reason (if we set
	# HUSKY_SKIP_HOOKS elsewhere it does not work)
	# no-edit is so that it doesn't ask for a message
  HUSKY_SKIP_HOOKS=1 git commit --amend --no-edit
	# we want to make sure there's an upstream. If not we set it (see Dealing with Upstream)
	git_set_upstream
	# We need to force push because we are rewriting history
  git push -f
}
alias git-add-amend-commit-push=gacap
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NDUwMDY5NjYsLTIxMzY5Mjk1NTksMT
U2Njc3MTY3MCw2MDA4MjU1NCwxNDAyNTUyNDEyLDE5MDU0OTQ1
NTYsLTE1MDI5OTg5NzAsNDc2MjIwNTYyXX0=
-->