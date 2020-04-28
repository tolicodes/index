# @infragen/generator-add-jest

1. should run `yarn add --dev jest`
2. should add scripts to watch and start tests in `package.json`

   ```json
   {
      "scripts": {
        "test": "jest --config jest.config.json",
        "test:watch": "yarn test --watch",
        "test:debug": "DEBUG=* yarn test --verbose",
        "test:watch:debug": "yarn test:debug --watch",
        "test:integration": "USE_REAL_API=true yarn test",
        "test:integration:watch": "yarn test:integration --watch",
        "test:integration:debug": "DEBUG=* yarn run test:integration --verbose",
        "test:integration:debug:watch": "yarn run test:integration:debug --watch",
      }
   };
   ```

3. should create a `jest.config.json` file

   ```json
   {
     "testEnvironment": "node",
   };
   ```

4. should run `yarn add --dev @types/jest ts-jest` if we are using TS
5. should add transform to the `jest.config.json` file if we are using TS

   ```json
   {
     "testEnvironment": "node",
     "transform": {
       "^.+\\.tsx?$": "ts-jest"
     }
   }
   ```

6. if in lerna monorepo root add to `jest.config.json`

   ```json
   {
     "watchPlugins": ["jest-watch-lerna-packages"]
   }
   ```

7. run

   ```bash
   yarn add --dev jest-watch-lerna-packages
   ```
