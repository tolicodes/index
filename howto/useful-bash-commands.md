## Git
### List all remotes in directory
```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} config --get remote.origin.url \;
```

## General
### Loop over directory and execute command
find . -type d -depth 1 -exec command1 \; -exec && git config --get remote.origin.url  \; -exec&& cd .. \;
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NjAwMTIwMTZdfQ==
-->