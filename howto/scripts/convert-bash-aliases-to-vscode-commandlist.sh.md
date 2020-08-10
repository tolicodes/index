```bash
setopt sh_word_split # For zsh

commands=$(grep -oE "alias [a-zA-Z-]+" ~/.zshrc | cut -d' ' -f2)

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQyOTIzNjA0MV19
-->