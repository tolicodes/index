# codefresh

codefresh.yml

```yml
version: "1.0"
stages:
  - "clone"
  - "build"
  - "test"
  - "publish"
steps:
  clone:
    type: "git-clone"
    description: "Cloning main repository..."
    repo: "<repo>"
    revision: "${{CF_BRANCH}}"
    stage: "clone"
  build:
    title: Build packages
    stage: "build"
    type: freestyle
    working_directory: "./<repo>"
    arguments:
      image: "node:latest"
      commands:
        - npm i -g lerna
        - yarn
        - lerna bootstrap
  test:
    title: Test packages
    stage: "test"
    type: freestyle
    working_directory: "./<repo>"
    arguments:
      image: "node:latest"
      commands:
        - yarn run test:debug
  publish:
    title: Publish packages
    stage: "publish"
    type: freestyle
    working_directory: "./<repo>"
    arguments:
      image: "node:latest"
      commands:
        - yarn run publish
    when:
      branch:
        only:
          - master
```
