# infragen

## generators

- [docker-compose-node-mysql-react](generators/docker-compose-node-mysql-react.md)
- [node-module](./generators/node-module.md)
- [codefresh](./generators/codefresh.md)
- [semantic-release](./generators/semantic-release.md)

## Backlog

- [2h] @infragen/add-dockerfile-cypress
- [30m] @infragen/generator-create-react-app - Write test definitions for MVP
- [30m] @infragen/generator-add-ts
- [30m] @infragen/generator-add-jest
- [30m] @infragen/generator-add-babel
- [30m] @infragen/generator-add-webpack
- [30m] @infragen/generator-create-react-app-boilerplate
- [30m] @infragen/generator-add-hover-fastify
- [2h] @infragen/generator-create-hover-react-app: Create tests using design pro as a reference app
- [4h] @infragen/add-cypress
- [30m] @infragen/generator-add-docker-compose
- [30m] @infragen/generator-add-docker-compose-cypress
- [2h] @infragen/add-codefresh-pipeline-cypress
- [2h] @infragen/add-pickle
- [30m] @infragen/generator-add-git-ignore
- [2h] @infragen/generator-add-styled-components
- [2h] @infragen/generator-create-node-package
- [2h] @infragen/generator-create-node-package
- [2h] @infragen/generator-create-infragen-package
- [2h] @infragen/generator-create-infragen-package - Re-scaffold all @infragen packages in the app using Node Package Generator
- [1h] @infragen - Talk to Jeff/Kerry about Live Streaming Coding
- [2h] @infragen/generator-add-react-boilerplate
- [2h] @infragen/generator-create-react-app
  - should have @infragen/generator-add-ts, @infragen/generator-add-babel, @infragen/generator-add-jest, @infragen/generator-add-webpack, @infragen/generator-add-react-boilerplate
- [2h]: @infragen/generator-create-hover-react-app
  - Look through Kerry's text to see what else I need
- [2h] @infragen/util-add-apollo
- [2h] @infragen/generator-add-codefresh-jest-tests-pipeline
- [2h] @infragen/generator-add-codefresh-jest-tests-pipeline - Get @infragen tests to run in CI
- [4h] @infragen/generator-add-codefresh-deploy-frontend-app-pipeline
- [2h] @infragen/generator-add-xstate
- [2h] @infragen/generator-add-react-router
- [1h] @infragen/generator-create-github-project - should link the origin of the local directory to the Github project
  - use @infragen/util-test-git-repo-operations
- [8h] @infragen/presets - Develop presets engine
- [8h] @infragen/step-overlay
- [2h] @infragen/cli - should run a generator using `infragen run <generatorName>`
- [4h] @infragen/generator - Get generator interactions `when` to work
- [4h] @infragen/add-commitizen
- [1h] @infragen-add-commitiezen - Add to @infragen
- [30m] @infragen/generator-add-prettier
- [8h] @infragen/step-template-config-files
  - should extend template config file (YML, JSON), should create new config file, should copy config files and template them using variables (wildcard match), should use env variables

## Icebox

- [4h] @infragen/generator-lerna-utils
  - should go to folder for package in lerna
    - ex: lerna goto @infragen/util-test-cli
  - should add a project (dev or regular) in current project for lerna
    - lerna add find-project-root --scope=@infragen/utils => yarn run add find-project-root
- [2h] @infragen - Refactor tests to use "stringContaining" instead of "stringMatching"
- [2h] @infragen/util-send-inputs-to-cli - should stop sending input if the write stream is closed
- [2h] @infragen - figure out why I have to do --runInBand or it times out
- [2h] @infragen - Make sure all TS Errors are taken care of
- [2h] @infragen - Clean unsused dependencies
- [2h] @infragen - Fix all @ts-ignore
- [2h] @infragen/util-test-cli - make it easier to use ts-node with nodeScript
- [2h] @infragen/create-hover-node-app
  - should have node-orm https://typeorm.io/#/
- [2h] @infragen/add-codefresh-pipeline-vault-boilerplate
  - should generate vault boilerplate
- Status Page
- [?] @infragen/generator-k8s-policy
- [?] @infragen/gui
  - should support text and multiple choice for a generator
  - GUI: list all projects and sub projects and generators/presets they have active

## Unsorted

- Find better way to reset Git Repo (@infragen/generator-create-gitub-project afterEach)
- Find out out why we need to do done instead of regular async/await (@infragen/generator-create-github-project afterEach)
- Remove @types/babel from test-cli PR and @babel/preset-env
- Implement Yarn Workspaces

### QA

- Clean up existing testing YMLs and standardize

## Research

- Lighthouse by google chrome and conform to it (CLI)
- [Super simple reference app react-app](https://github.com/hoverinc/home-page-hack8/blob/master/package.json)
- [Check out TSDX](https://github.com/jaredpalmer/tsdx)
- [Check Razzle](https://github.com/jaredpalmer/razzle)
- [Check out Nix](https://nixos.org/nix/)
- [Check out hover-javascript](https://github.com/hoverinc/hover-javascript/tree/master/src/config) [eslint](https://github.com/hoverinc/hover-javascript/blob/master/src/config/helpers/eslint.js)
- Check out stuff based on hover-javascript [graphql](https://github.com/hoverinc/hover-graphql) [blueprint](https://github.com/hoverinc/blueprint) (design-tokens)[https://github.com/hoverinc/design-tokens]
- Dockerfile generate, docker-compose, fastify
- Vorpal for CLI
- Look for a documentation solution for TS
- https://strap.githubapp.com/
- https://github.com/boxen
- https://github.blog/2015-06-30-scripts-to-rule-them-all/
- https://tuple.app/pair-programming-guide
