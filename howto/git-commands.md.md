## Git
### List all remotes in directory
```bash
for dir in *; do cd "" && git config --get remote.origin.url )
done
```

### Get All clone urls in directory
```bash
for dir in ;do cd $echo "git clone $(git config --get remote.origin.url)" )
done
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

#### Example: Print Dirs
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

### Get All Unmerged Changed In Repo
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


### Save Changes In All Uncomitted Repos
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

### Overwrite Origin
```bash
git remote rm origin
git remote add origin ORIGIN
git config master.remote origin
git config master.merge refs/heads/master
```

### Push All Branches
```bash
git push --all
```

### No Need to set upstream branch
```bash
git config --global branch.autosetupmerge always
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTA3MDgyMjYxLC0xNzkzNjIyODc5XX0=
-->