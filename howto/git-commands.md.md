## Git
### List all remotes in directory
```bash
for dir in ;do cd "" && git config --get remote.origin.url )
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
function executeInAllDirs {
    
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllDirs "pwd"

```
Replace `COMMAND` with your command

#### Example
```bash
dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
	pwd ### REPLACE THIS
	cd $originalPwd
done
```

### Get All Unmerged Rep
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MzA3MjU1NzVdfQ==
-->