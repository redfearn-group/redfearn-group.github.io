# redfearn.group

The Redfearn Group marketing site: portfolio, case studies, and the Insights blog. Built by Brady Redfearn.

**Live:** [redfearn.group](https://redfearn.group)

## Stack

Eleventy with Nunjucks templates and markdown content. No client framework. Every page is static HTML.

This is the one property not built on Astro. The three trackers are data-driven, reading YAML into typed tables; this site is content-driven, 16 markdown posts and a set of templates, plus RSS and generated OG card images. Eleventy fits that shape, so the split is deliberate rather than drift.

```
src/
  _data/            # site metadata
  _includes/        # layouts and partials
  case-studies/     # long-form work, markdown
  posts/            # Insights blog, markdown
  css/              # brand.css (vendored) + main.css
scripts/
  generate-og-images.mjs   # OG cards, rendered with resvg
  new-post.mjs             # scaffolds an Insights post
```

## Commands

```sh
npm run build      # static build to ./_site/
npm run og         # regenerate OG card images
npm run new-post   # scaffold an Insights post
```

For a dev server use `preview_start` with the `redfearn-group-site` entry in the workspace `.claude/launch.json` (port 8080), not `npm run dev`.

## Brand

`src/css/brand.css` is vendored from [redfearn-brand](https://github.com/redfearn-group/redfearn-brand) and must never be edited here. A `vendor-drift.yml` job fetches canonical on every push and pull request and fails the build if the copy differs. To change a token, edit it in the brand repo, run `node sync.mjs` there, push that repo first, then this one.

This site takes `brand.css` and nothing else. The brand repo also vendors a shared TypeScript kit, but those modules use `import.meta.env` and js-yaml and have no meaning in an Eleventy build.

Identity layer applies site-wide; case studies use the Content layer.

## Deployment

GitHub Actions to GitHub Pages on every push to `main`, served at the apex domain.
