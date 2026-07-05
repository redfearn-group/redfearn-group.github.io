import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "src", "og-cards");
const FONT_DIR = join(__dirname, "fonts");

mkdirSync(OUT_DIR, { recursive: true });

const W = 1200;
const H = 630;

// Rough width-per-character multipliers, tuned for Space Grotesk bold / IBM Plex Sans.
const wrapText = (text, fontSize, maxWidth, charWidthRatio = 0.56) => {
  const maxChars = Math.floor(maxWidth / (fontSize * charWidthRatio));
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
};

const escapeXml = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildSvg({ eyebrow, title, description }) {
  const titleLines = wrapText(title, 58, W - 160, 0.52).slice(0, 3);
  const descLines = description
    ? wrapText(description, 24, W - 160, 0.5).slice(0, 2)
    : [];

  const titleStartY = 300 - (titleLines.length - 1) * 33;
  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="80" y="${titleStartY + i * 66}">${escapeXml(line)}</tspan>`
    )
    .join("");

  const descStartY = titleStartY + titleLines.length * 66 + 20;
  const descTspans = descLines
    .map(
      (line, i) =>
        `<tspan x="80" y="${descStartY + i * 34}">${escapeXml(line)}</tspan>`
    )
    .join("");

  return `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#BF1E2E"/>
      <stop offset="100%" stop-color="#D97443"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="10%" r="70%">
      <stop offset="0%" stop-color="#151F42"/>
      <stop offset="100%" stop-color="#0A1128"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="5" fill="url(#bar)"/>

  <g transform="translate(80,72) scale(0.34)">
    <rect x="0" y="0" width="100" height="100" rx="8" fill="#BF1E2E"/>
    <g fill="#F7F4EF">
      <g transform="translate(-1.4960,79.1455) scale(0.083273,-0.083273)"><path d="M66 0V700H370Q436 700 485.0 677.0Q534 654 561.0 612.0Q588 570 588 513V501Q588 438 558.0 399.0Q528 360 484 342V324Q524 322 546.0 296.5Q568 271 568 229V0H436V210Q436 234 423.5 249.0Q411 264 382 264H198V0ZM198 384H356Q403 384 429.5 409.5Q456 435 456 477V487Q456 529 430.0 554.5Q404 580 356 580H198Z"/></g>
      <g transform="translate(45.8697,79.1455) scale(0.083273,-0.083273)"><path d="M308 -14Q236 -14 177.5 18.5Q119 51 84.5 113.5Q50 176 50 266V434Q50 569 126.0 641.5Q202 714 332 714Q461 714 531.5 645.5Q602 577 602 460V456H472V464Q472 501 456.5 531.0Q441 561 410.0 578.5Q379 596 332 596Q262 596 222.0 553.0Q182 510 182 436V264Q182 191 222.0 146.5Q262 102 334 102Q406 102 439.0 140.0Q472 178 472 236V246H306V358H602V0H480V67H462Q455 50 439.5 31.0Q424 12 393.0 -1.0Q362 -14 308 -14Z"/></g>
    </g>
  </g>
  <text x="126" y="96" font-family="Space Grotesk OG Bold" font-size="20" fill="#F7F4EF">Redfearn Group</text>

  ${
    eyebrow
      ? `<text x="80" y="185" font-family="IBM Plex Sans OG SemiBold" font-size="19" letter-spacing="3"
          fill="#BF1E2E">${escapeXml(eyebrow.toUpperCase())}</text>`
      : ""
  }

  <text font-family="Space Grotesk OG Bold" font-size="58" fill="#F7F4EF">${titleTspans}</text>

  <text font-family="IBM Plex Sans OG Light" font-size="24" fill="#B9BDD1">${descTspans}</text>

  <text x="80" y="${H - 55}" font-family="IBM Plex Sans OG Regular" font-size="17"
    letter-spacing="1" fill="#6B7280">redfearn.group</text>
</svg>`;
}

function renderCard(slug, data) {
  const svg = buildSvg(data);
  const resvg = new Resvg(svg, {
    font: {
      // Pre-instanced static weights, not the raw variable font files: resvg
      // cannot reliably instance a variable font to a requested font-weight,
      // it silently falls back to the file's default (light-ish) instance
      // regardless of what the SVG asks for. Each of these files is pinned
      // to one weight with a unique family name so there's no ambiguity.
      fontFiles: [
        join(FONT_DIR, "SpaceGroteskOGBold.ttf"),
        join(FONT_DIR, "IBMPlexSansOGSemiBold.ttf"),
        join(FONT_DIR, "IBMPlexSansOGRegular.ttf"),
        join(FONT_DIR, "IBMPlexSansOGLight.ttf"),
      ],
      loadSystemFonts: false,
      defaultFontFamily: "IBM Plex Sans OG Regular",
    },
    background: "#0A1128",
  });
  const png = resvg.render().asPng();
  writeFileSync(join(OUT_DIR, `${slug}.png`), png);
  console.log(`  og-cards/${slug}.png`);
}

console.log("Generating OG cards...");

// Static pages
renderCard("home", {
  eyebrow: "",
  title: "AI Systems That Ship, and Hold Up Under Scrutiny",
  description: "Brady Redfearn: AI Product and Technical Leadership, 16+ years.",
});
renderCard("work", {
  eyebrow: "Case Study Library",
  title: "16+ years of technical leadership, in evidence.",
  description: "Case studies in AI strategy, LLM agents, governance, and org transformation.",
});
renderCard("insights", {
  eyebrow: "Insights",
  title: "Thoughts on technology and the world we live in.",
  description: "",
});
renderCard("about", {
  eyebrow: "About",
  title: "Chaos is my fuel. Ambiguity is my playground.",
  description: "16+ years turning ambiguity into shipped systems.",
});
renderCard("contact", {
  eyebrow: "Contact",
  title: "Two ways in. Pick the one that's yours.",
  description: "",
});

// Case studies
const csDir = join(ROOT, "src", "case-studies");
for (const file of readdirSync(csDir)) {
  if (!file.endsWith(".md")) continue;
  const { data } = matter(readFileSync(join(csDir, file), "utf8"));
  renderCard(data.ogSlug || file.replace(".md", ""), {
    eyebrow: "Case Study",
    title: data.title,
    description: data.description,
  });
}

// Posts
const postsDir = join(ROOT, "src", "posts");
for (const file of readdirSync(postsDir)) {
  if (!file.endsWith(".md")) continue;
  const { data } = matter(readFileSync(join(postsDir, file), "utf8"));
  renderCard(data.ogSlug || file.replace(".md", ""), {
    eyebrow: "Insights",
    title: data.title,
    description: data.description,
  });
}

console.log("Done.");
