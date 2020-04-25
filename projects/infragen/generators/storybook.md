# storybook

```bash
npx -p @storybook/cli sb init
yarn add --dev @storybook/preset-typescript @storybook/preset-typescript
```

Copy files from [storybook](./storybook/)

## Jest

Run

```
yarn add --dev @storybook/addon-jest
```

`package.json`

```
"scripts": {
  "test:generate-output": "jest --json --outputFile=.jest-test-results.json"
}
```

`.gitignore`

```
.jest-test-results.json
```

Run in the background

```
yarn test:generate-output -- --watch
```
