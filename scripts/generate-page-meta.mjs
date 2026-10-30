// Emits a static copy of the SPA shell for /state-of-ai-report with its own
// title, description and canonical, so crawlers that skip JS see page-specific meta.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const url = "https://gridconcepts.com.au/state-of-ai-report";
const title = "The State of AI for Victorian Small & Medium Business | Grid Concepts";
const description =
  "Plain-English report on AI for Victorian small business: adoption statistics, chat vs agents, why pilots fail, and a 100-day readiness roadmap.";
const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const out = html
  .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
  .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
  .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
  .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
  .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);

mkdirSync("dist/state-of-ai-report", { recursive: true });
writeFileSync("dist/state-of-ai-report/index.html", out);
console.log("Wrote dist/state-of-ai-report/index.html");
