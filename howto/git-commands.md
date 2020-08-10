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
dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)

# store dotfiles here
[[ ! -d dotfiles ]] && mkdir dotfiles
dotfiles_path=$(cd dotfiles && pwd)

for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
	ignored=$(git status --ignored)
	for file in $ignored; do
		if [[ -f $ignored ]]; then
			new_location="$dotfiles_path/$dir/$(dirname \"$file\")"
			mkdir -p $new_location
			cp $file $new_location
		fi
	done
	cd $originalPwd
done
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk2Njg3MDc1NCwxOTA1NDk0NTU2LC0xNT
AyOTk4OTcwLDQ3NjIyMDU2Ml19
-->