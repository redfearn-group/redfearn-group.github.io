import pluginRss from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import { existsSync } from "node:fs";
import { join } from "node:path";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy({ "src/og-cards": "og-cards" });

  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: false,
  });

  // Wrap every markdown table in a scroll container. A wide table must scroll
  // inside its own box; without this the page body scrolls sideways on mobile.
  md.renderer.rules.table_open = () => '<div class="tw"><table>\n';
  md.renderer.rules.table_close = () => "</table></div>\n";

  eleventyConfig.setLibrary("md", md);

  // Collections
  eleventyConfig.addCollection("caseStudies", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/case-studies/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Sorted by curated `order`, not date: reverse-chronological would bury the
  // dissertation and the MS thesis under the 2019 conference papers, and those
  // two degree works are the anchor of the section.
  eleventyConfig.addCollection("publications", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/papers/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  eleventyConfig.addFilter("stripDatePrefix", (slug) =>
    slug.replace(/^\d{4}-\d{2}-\d{2}-/, "")
  );

  // Gates every PDF link on the file actually being on disk. Only three of the
  // seven publications are postable at all: ACM holds copyright on four, and
  // what survives locally for those is the Version of Record, which may not be
  // posted. A path set in front matter ahead of a file landing renders nothing
  // rather than a dead link.
  eleventyConfig.addFilter("fileExists", (p) => {
    if (typeof p !== "string" || p === "") return false;
    return existsSync(join("src", p.replace(/^\//, "")));
  });

  eleventyConfig.addFilter("uniqueThemes", (items) => {
    const set = new Set();
    items.forEach((item) => (item.data.themes || []).forEach((t) => set.add(t)));
    return Array.from(set);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
