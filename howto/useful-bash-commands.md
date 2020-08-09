## Git
### List all remotes in directory
```
for dir in *; do
  ( cd "${dir%/*}" && git config --get remote.origin.url )
done
```

### Get All clone urls in directory
```
git@github.com:COVID-basic-needs/JS-frontend.git
git@github.com:TackleHunger/TackleHunger.git
git@github.com:tolicodes/activity-brainstorm.git
git@github.com:COVID-basic-needs/azure-functions.git
git@github.com:tolicodes/cf-kompose-plugin.git
git@github.com:COVID-basic-needs/convert-food-pantry-data.git
git@github.com:erxes/dev-docker.git
git@github.com:tolicodes/cloud-photo-viewer.git
git@github.com:tolicodes/electron-git.git
git@github.com:tolicodes/erxes.git
https://github.com/tolicodes/erxes-api
git@github.com:tolicodes/github-toolkit.git
https://github.com/tolicodes/hover-index
git@github.com:tolicodes/index.git
git@github.com:hoverinc/infragen.git
git@github.com:EricNiehaus/koinapp.git
git@github.com:chrissabaitis/koinapp-api.git
git@github.com:tolicodes/node-api-toolkit.git
git@github.com:tolicodes/node-cli-toolkit.git
git@github.com:numinar/numinar.git
git@github.com:tolicodes/principles.git
git@github.com:COVID-basic-needs/react-frontend.git
git@github.com:tolicodes/souleclipse.us.git
git@github.com:storybookjs/storybook.git
https://github.com/tolicodes/storybook-jest
git@github.com:tolicodes/tolicodes.com.git
git@github.com:tolicodes/tree.git
git@github.com:tolicodes/zoomevents.git

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
eyJoaXN0b3J5IjpbMTg3MDAxMzc0MywxMzExNDMyNDY1XX0=
-->