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

### Overwrite Origin
```
git remote rm origin
git remote add origin git@github.com:tolicodes/infragen.git
git config master.remote origin
config master.merge refs/heads/master
```

## General
### Loop over directory and execute command
```
for dir in *; do
  ( cd "${dir%/*}" && COMMAND )
done
```

### Find all directories in a folder
```
find . -type d -maxdepth 1 -exec pwd \;
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTU4Nzc2ODM4LDEzMTE0MzI0NjVdfQ==
-->