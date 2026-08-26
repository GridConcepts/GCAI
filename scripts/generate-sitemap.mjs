// Generates dist/sitemap.xml from the site's static routes plus every
// markdown post in blog/src/content/blog/. Runs as part of `npm run build`,
// so the sitemap always reflects whatever content exists at build time —
// add a new .md file or a new route below and the next build picks it up.
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE = "https://gridconcepts.com.au";
const BLOG_DIR = join(ROOT, "blog", "src", "content", "blog");
const OUT_DIR = join(ROOT, "dist");
const OUT_FILE = join(OUT_DIR, "sitemap.xml");

// Static app routes (kept in sync with src/app/routes.tsx).
const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/state-of-ai-report", changefreq: "monthly", priority: "0.8" },
  { path: "/insights/", changefreq: "weekly", priority: "0.7" },
];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    fields[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return fields;
}

function loadBlogPosts() {
  if (!existsSync(BLOG_DIR)) return [];
  return readdirSync(BLOG_DIR)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((f) => {
      const slug = f.replace(/\.(md|mdx)$/, "");
      const raw = readFileSync(join(BLOG_DIR, f), "utf8");
      const fm = parseFrontmatter(raw);
      const date = fm.updatedDate || fm.pubDate;
      const lastmod = date ? new Date(date) : null;
      return {
        path: `/insights/${slug}/`,
        lastmod: lastmod && !Number.isNaN(lastmod.getTime()) ? lastmod.toISOString().slice(0, 10) : undefined,
        changefreq: "monthly",
        priority: "0.6",
      };
    });
}

function urlEntry({ path, lastmod, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${SITE}${path}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

const urls = [...staticRoutes, ...loadBlogPosts()];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlEntry).join("\n")}
</urlset>
`;

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, xml, "utf8");
console.log(`sitemap.xml written with ${urls.length} URLs -> ${OUT_FILE}`);
