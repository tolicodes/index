# node-module

package.json

```json
{
  "scripts": {
    "start": "ts-node .",
    "test": "jest --config jest.config.json",
    "test:watch": "jest --config jest.config.json --watch",
    "sync-packages": "syncpack fix-mismatches",
    "test:debug": "DEBUG=* yarn test --verbose",
    "test:watch:debug": "yarn test:debug --watch",
    "test:integration": "USE_REAL_API=true yarn test",
    "test:integration:watch": "yarn test:integration --watch",
    "test:integration:debug": "DEBUG=* yarn run test:integration --verbose",
    "test:integration:debug:watch": "yarn run test:integration:debug --watch",
    "publish": "yarn run sync-packages && lerna run build && lerna exec --concurrency 1 -- npx --no-install semantic-release -e semantic-release-monorepo"
  }
}
```
