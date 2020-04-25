# Project Ideas

## GUI for Commitizen

- Tower like interface but it lets you pick stuff for prompts
- Built in electron
- Inspiration: https://www.electronjs.org/apps/metrogit (in angular)

### Commit Flow

#### New Commit

1. Select which files to commit.
   1. Files are organized in [tree](https://github.com/react-component/tree)
   2. Click into file to see [diff](https://github.com/otakustay/react-diff-view)
      1. Select [range of lines to commit](https://github.com/otakustay/react-diff-view#customize-gutter)
2. Select the type of change that you're committing (feat, fix, etc)
   1. Select radio
3. What is the scope of this change (e.g. component or file name):
   1. Auto pick `<package-name>/<filePath>` for first file path
   2. Previous components autosuggest (read git log)
4. Write a short, imperative tense description of the change (max 87 chars): (text)
   1. Automatically scan jest tests for new `it()` statements
5. Provide a longer description of the change: (press enter to skip)
6. Are there any breaking changes? (y/N) (checkbox)
7. Does this change affect any open issues?
   1. Add issue references (e.g. "fix #123", "re #123".):
   2. Pick JIRA issue
8. Show final commit message (ex: feat(queue): added debugging, writing tmp file, bug fix)

### Other features

- Automatically run `test:watch`. If a new test is passing suggest committing that test
- If contains multiple changed jest tests suggest splitting into multiple commits

### Append Commit

Allows to change the message
