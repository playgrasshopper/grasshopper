const markdownIt = require('markdown-it')
const htmlmin = require('html-minifier')
const sass = require('sass')

const md = new markdownIt({
  html: true,
})

module.exports = eleventyConfig => {
  const style = sass.compile('./src/sass/style.scss').css.toString()

  eleventyConfig.addWatchTarget('./src/sass/')
  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      })
      return minified
    }

    return content
  })

  eleventyConfig.addGlobalData('style', style)

  eleventyConfig.addFilter('markdown', content => {
    return md.render(content)
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
