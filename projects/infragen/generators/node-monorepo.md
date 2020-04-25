# @infragen/generator-create-node-monorepo

1. should run the create-github-project generator
2. should run create-node-module generator
3. should run `yarn init`
4. setup package.json for the base project with the name provided in the create-github-project generator"
5. should install lerna globally `npm i -g lerna`
6. should run `lerna init`
7. should set the npmClient to yarn in `lerna.json`

   ```json
   {
     "npmClient": "yarn"
   };
   ```

8. should ask for the names of our packages and how we want to organize our packages and writes it to lerna.json

9. should run add-ts generator

10. should run add-jest generator
