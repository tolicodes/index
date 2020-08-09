## Git
### List all remotes in directory
```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} config --get remote.origin.url \;
```

## General
### Loop over directory and execute command
```
for dir in .; do
  ( cd "${dir%/*}" && pwd )
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAxNDExNzIzMywxMzExNDMyNDY1XX0=
-->