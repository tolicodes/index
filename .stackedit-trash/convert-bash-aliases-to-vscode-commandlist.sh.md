```bash
DATA_PATH="$HOME/Library/Application Support/Code/User/globalStorage/yamajyn.commandlist"

setopt sh_word_split # For zsh

comms=$(grep -oE 'alias [a-zA-Z-]+' ~/.zshrc | cut -d' ' -f2)

for  command  in  $comms; do
	echo  "{\"script\":\"$command\",\"label\":\"$command\"}" > "$DATA_PATH/$command.json"
done
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NDk3OTQzMzZdfQ==
-->