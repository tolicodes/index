I have a repo full of interlinked markdown files. All I want to do is serve them up. However I experienced a lot of issues with linking and missing some files.

I had to:

Create a `.eleventy.js` file in the root

```js
module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it')({
    replaceLink: function (link) {
      return link.replace('.md', '/');
    }
  }).use(require('markdown-it-replace-link'));

  eleventyConfig.setLibrary("md", markdownIt);
};
```

Install the markdown packages

```bash
yarn add markdown-it markdown-it-replace-link
```

Install eleventy cli:
```bash
npm i -g @11ty/eleventy
```

Use a different build command:
```bash
eleventy --passthroughall --input content
```

