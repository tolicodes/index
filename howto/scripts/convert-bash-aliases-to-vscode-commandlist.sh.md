```bash
DATA_PATH=~/Library/Application Support/Code/User/globalStorage/yamajyn.commandlist
setopt sh_word_split # For zsh

commands=$(grep -oE "alias [a-zA-Z-]+" ~/.zshrc | cut -d' ' -f2)

for command in $command; do
	echo 
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjY3MDM0MzI3XX0=
-->