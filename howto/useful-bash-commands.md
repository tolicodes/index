## Git
### List all remotes in directory
```

for dir in *; do
  ( cd "${dir%/*}" && git config --get remote.origin.url )
done
```

## General
### Loop over directory and execute command
```
for dir in *; do
  ( cd "${dir%/*}" && COMMAND )
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg2NzQ3Mjc0OCwxMzExNDMyNDY1XX0=
-->