## Git

[Git Commands](./git-commands)


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
eyJoaXN0b3J5IjpbMTcwMjY2Mjg5MywxMzQ4NDg2NTAxLDE1MT
Q3MzQwNjksLTg0MDQ3MDAxOCwtNTQ3MDA1MDkxLC03ODMwNDM1
NDIsMTE5MjA4MTA5MCwxMzI3NTM0MTIzLDE4OTM4ODc5MDQsLT
E3MjAyMTA2MzEsLTU1NzI5NzIwNSwtNTMzNzI3MDU3LC0xNzM3
MDMyNjg4LDk1ODc3NjgzOCwxMzExNDMyNDY1XX0=
-->