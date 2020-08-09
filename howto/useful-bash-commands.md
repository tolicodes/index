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
eyJoaXN0b3J5IjpbMTI2MDk1MDQ1NiwtMTczNzAzMjY4OCw5NT
g3NzY4MzgsMTMxMTQzMjQ2NV19
-->