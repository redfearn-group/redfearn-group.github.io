import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = join(__dirname, "..", "src", "posts");

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new-post -- "Post Title Here"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-")
  .slice(0, 60)
  .replace(/-+$/, "");

const date = new Date().toISOString().split("T")[0];
const filename = `${date}-${slug}.md`;
const filepath = join(POSTS_DIR, filename);

if (existsSync(filepath)) {
  console.error(`Already exists: ${filepath}`);
  process.exit(1);
}

mkdirSync(POSTS_DIR, { recursive: true });

const template = `---
title: "${title.replace(/"/g, '\\"')}"
description: ""
date: ${date}
tags: []
ogSlug: "post-${slug}"
---

`;

writeFileSync(filepath, template);
console.log(`Created ${filepath}`);
