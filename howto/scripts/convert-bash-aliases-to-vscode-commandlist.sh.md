```bash
DATA_PATH="~/Library/Application Support/Code/User/globalStorage/yamajyn.commandlist"
setopt sh_word_split # For zsh

commands=$(grep -oE "alias [a-zA-Z-]+" ~/.zshrc | cut -d' ' -f2)

for command in $commands; do
	echo `{"script":"$command","label":"$command"}`
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ1NDI5ODkzOV19
-->