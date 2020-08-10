module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it')({
    replaceLink: function (link) {
      return link.replace('.md', '/index.html');
    }
  }).use(require('markdown-it-replace-link'));

  eleventyConfig.setLibrary("md", markdownIt);
};
