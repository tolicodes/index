# How to Set up Semantic Release in Codefresh and Trigger Netlify Deploy

1. Install Netlify CLI `npm i -g netlify-cli`
2. Get a [personal access token](https://app.netlify.com/user/applications/personal) as save it to your `.zshrc` as `export NETLIFY_AUTH_TOKEN=thetoken`
3. Source your `zshrc`: `source .zshrc`
4. Run `netlify init` in your repo
5. For build command enter nothing
6. For directory enter the build directory (ex: `build` or `_site`)
7. In the Netlify GUI go to Settings>Domain Management and add your custom domain
8. Go to Build & Deploy > Builds > Check Stop builds (to only allow manual builds)
9. In CI environment you need to run `netlify deploy --prod`

Make your CI file (ex: `codefresh.yml`). Make sure you add your personal access token to the environment as `NETLIFY_AUTH_TOKEN`

```yml
version: "1.0"
stages:
  - "clone"
  - "release"

steps:
  clone:
    title: "Cloning repository"
    type: "git-clone"
    repo: "${{CF_REPO_OWNER}}/${{CF_REPO_NAME}}"
    revision: "${{CF_BRANCH}}"
    git: "github"
    stage: "clone"

  release:
    title: Release new version and add to changelog
    stage: "release"
    type: freestyle
    working_directory: "./${{CF_REPO_NAME}}"
    arguments:
      image: "node:latest"
      commands:
        - yarn
        # So it doesn't ask for fingerprint
        - mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config
        - yarn semantic-release
        - npm install netlify-cli -g
        - yarn build
        - netlify deploy --prod
    when:
      branch:
        only:
          - master
```