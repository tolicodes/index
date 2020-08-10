## Git
### List all remotes in directory
```bash
for dir in *; do
  ( cd "${dir%/*}" && git config --get remote.origin.url )
done
```

### Get All clone urls in directory
```bash
for dir in *; do
  ( cd "${dir%/*}" && echo "git clone $(git config --get remote.origin.url)" )
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

### Get All Unpushed Repos
```bash
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

### Overwrite Origin
```
git remote rm origin
git remote add origin ORIGIN
git config master.remote origin
git config master.merge refs/heads/master
```

### Push All Branches
```
git push --all
```

### No Need to set upstream branch
```
git config --global branch.autosetupmerge always
```

## General
### Loop over directory and execute command
#### Recursive
```bash
dirs=$(find . -type d 2>/dev/null | cut -c 3-)

# needed for zsh
setopt sh_word_split

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
dirs=($dirs)   # split to array
IFS=$SAVEIFS   # Restore IFS

for dir in $dirs; do
	originalDir=$(pwd)
	cd $dir
	COMMAND ##### REPLACE THIS
	cd $originalDir
done
```

Replace `COMMAND` with your command

#### Example:
```bash
dirs=$(find . -type d 2>/dev/null | cut -c 3-)

# needed for zsh
setopt sh_word_split

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
dirs=($dirs)   # split to array
IFS=$SAVEIFS   # Restore IFS

for dir in $dirs; do
	originalDir=$(pwd)
	cd $dir
	pwd ### REPLACE THIS
	cd $originalDir
done
```

#### Immediate Dir
```bash
dirs=$(find . -maxdepth 1 -type d 2>/dev/null | cut -c 3-)

# needed for zsh
setopt sh_word_split

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
dirs=($dirs)   # split to array
IFS=$SAVEIFS   # Restore IFS

for dir in $dirs; do
	originalDir=$(pwd)
	cd $dir
	COMMAND #### REPLACE THIS
	cd $originalDir
done
```

### Check if File Exists
```bash
if test -f "FILE"; then
    YOURCOMMAND
fi
```

Example:
```bash
if test -f "package.json"; then
    echo $FILE
fi
```

### Find all directories in a folder
#### Recursive:
```bash
find . -type d | cut -c 3-
```

#### 1 level:
```bash
find . -maxdepth 1 -type d | cut -c 3-
```

#### Ignoring Permission Errors
```bash
find . -maxdepth 1 -type d -print 2>/dev/null | cut -c 3-
```

### Make array out of new lines
```bash
items="Item 1
Item 2
Item 3"

# needed for zsh
setopt sh_word_split

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
items=($items)   # split to array
IFS=$SAVEIFS   # Restore IFS

for item in $items; do
	COMMAND #### REPLACE THIS
done
```

Example
```bash
items="Item 1
Item 2
Item 3"

# needed for zsh
setopt sh_word_split

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
items=($items)   # split to array
IFS=$SAVEIFS   # Restore IFS

for item in $items; do
	echo $item #### REPLACE THIS
done
```

### Make Function with Flags
```bash
function FUNCTIONNAME { #### REPLACE FUNCTIONNAME with your function name
	while test $# -gt 0; do # For each argument
	  case "$1" in
	    -h|--help)
	      echo "-h, --help                show brief help"
	      echo "-f					      boolean flag command -f"
		  echo "--action ACTION			  flag with value"
	      exit 0
	      ;;
	    -f)
	      shift
	      FLAG=true #### CHANGE THIS
	      ;;
	    --action*) #### CHANGE THIS
		  shift
	      ACTION=`echo $1 | sed -e 's/^[^=]*=//g'`
	      ;;
	    *)
		  shift
	      ARGS=`echo $1`
	      break
	      ;;
	  esac
	done
	
	[[ FLAG ]] && echo "Flagged"
	[[ ACTION ]] && echo "ACTION: $ACTION"
	[[ ARGS ]] && echo $ARGS
}

FUNCTIONNAME -f --action testing word
```

## App Shortcuts
### iTerm
- Split Vertically: Command+D
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMTg4MDE1ODMsLTU0NzAwNTA5MSwtNz
gzMDQzNTQyLDExOTIwODEwOTAsMTMyNzUzNDEyMywxODkzODg3
OTA0LC0xNzIwMjEwNjMxLC01NTcyOTcyMDUsLTUzMzcyNzA1Ny
wtMTczNzAzMjY4OCw5NTg3NzY4MzgsMTMxMTQzMjQ2NV19
-->