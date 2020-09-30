# semantic-release-commitizen

Installs semantic release with commitizen

```bash
yarn add --dev @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/git @semantic-release/release-notes-generator cz-conventional-changelog husky semantic-release semantic-release-monorepo syncpack
```

## For NonMonoRepo
package.json

```json
{
  "scripts": {
    "publish": "yarn && semantic-release"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  }
}
```

.releaserc.json

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md"]
      }
    ],
    "@semantic-release/npm"
  ]
}
```

codefresh.yml

```yml
stages:
  - "publish"

steps:
  publish:
    title: Publish packages
    stage: "publish"
    type: freestyle
    working_directory: "./<your project></your>"
    arguments:
      image: "node:latest"
      commands:
        - yarn run publish
    when:
      branch:
        only:
          - master
```


## For Mono Repo
package.json

```json
{
  "scripts": {
    "sync-packages": "syncpack fix-mismatches",
    "publish": "yarn run sync-packages && lerna run build && lerna exec --concurrency 1 -- npx --no-install semantic-release -e semantic-release-monorepo"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  }
}
```

.releaserc.json

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md"]
      }
    ],
    "@semantic-release/npm"
  ]
}
```

codefresh.yml

```yml
stages:
  - "publish"

steps:
  publish:
    title: Publish packages
    stage: "publish"
    type: freestyle
    working_directory: "./<your project></your>"
    arguments:
      image: "node:latest"
      commands:
        - yarn run publish
    when:
      branch:
        only:
          - master
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbNzM0NTk5NzAyXX0=
-->