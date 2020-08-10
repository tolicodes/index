```bash
DATA_PATH="~/Library/Application Support/Code/User/globalStorage/yamajyn.commandlist"
setopt sh_word_split # For zsh

comms="$(grep -oE \"alias [a-zA-Z-]+\" ~/.zshrc | cut -d' ' -f2)"

for command in $comms; do
	echo `{"script":"$command","label":"$command"}`
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4Nzg3MDYzMDksMTEwNzc5NzU3MywtND
U0Mjk4OTM5XX0=
-->