module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it')({
    replaceLink: function (link) {
      return link.replace('.md', '/');
    }
  }).use(require('markdown-it-replace-link'));

  eleventyConfig.addPassthroughCopy({'content/analytics.js': 'analytics.js'});
  eleventyConfig.addTransform('private-clarity', function (content, outputPath) {
    const path = outputPath || this.outputPath || this.page?.outputPath || '';
    if (!String(path).endsWith('.html') || content.includes('data-toli-anonymous-clarity')) return content;
    return content + '\n<script defer data-toli-anonymous-clarity="1.0.2" src="/analytics.js" referrerpolicy="no-referrer"></script>\n';
  });
  eleventyConfig.setLibrary("md", markdownIt);
};
