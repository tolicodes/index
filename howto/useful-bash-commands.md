## Git
### List all remotes in directory
```
for dir in *; do
  ( cd "${dir%/*}" && git config --get remote.origin.url )
done
```

### Get All clone urls in directory
```
for dir in *; do
  ( cd "${dir%/*}" && echo "git clone $(git config --get remote.origin.url)" )
done
```

### Loop over All Git Repos in Folder
```
find . -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null
```

If you want only want repos immediately in this directory
```
find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null
```

### Get All Unpushed Repos
```
for dir in *; do
  ( echo $dir && cd "${dir%/*}" && echo $(git branch --no-merged) )
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
Recursive
```
dirs=$(find . -type d | cut -c 3-)

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
nadmes=($dirs) # split to array $names
IFS=$SAVEIFS   # Restore IFS

for dir in dirs; do
  ( cd "${dir%/*}" && COMMAND )
done
```

Example
```
dirs=$(find . -type d 2>/dev/null | cut -c 3-) 
for dir in $dirs; do
  ( cd "${dir%/*}" && echo pwd )
done
```

One level:
```
for dir in *; do
  ( cd "${dir%/*}" && COMMAND )
done
```

### Check if File Exists
```sh
if test -f "FILE"; then
    YOURCOMMAND
fi
```

Example:
```
if test -f "package.json"; then
    echo $FILE
fi
```

### Find all directories in a folder
Recursive:
```
find . -type d | cut -c 3-
```

1 level:
```
find . -maxdepth 1 -type d | cut -c 3-
```

### Make array out of new lines
```
names="Item 1
Item 2
Item 3"

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
names=($names) # split to array $names
IFS=$SAVEIFS   # Restore IFS

for name in names; do
    echo $name
done
```

## App Shortcuts
### iTerm
- Split Vertically: Command+D
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NTc5NjI0OTAsLTU1NzI5NzIwNSwtNT
MzNzI3MDU3LC0xNzM3MDMyNjg4LDk1ODc3NjgzOCwxMzExNDMy
NDY1XX0=
-->