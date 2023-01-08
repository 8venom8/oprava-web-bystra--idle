module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("obrazky");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("contact.css");
    eleventyConfig.addPassthroughCopy("live.css");
    eleventyConfig.addPassthroughCopy("order.css");
    eleventyConfig.addPassthroughCopy("obrazky-live");
    eleventyConfig.addPassthroughCopy("obrazky-contact");
    eleventyConfig.addPassthroughCopy("obrazky-order");
    eleventyConfig.addPassthroughCopy(".htaccess");
   };

   return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

