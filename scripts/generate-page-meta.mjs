// Emits a static copy of the SPA shell per route with its own title, description
// and canonical, so crawlers that skip JS see page-specific meta.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const pages = [
  {
    path: "state-of-ai-report",
    title: "The State of AI for Victorian Small & Medium Business | Grid Concepts",
    description:
      "Plain-English report on AI for Victorian small business: adoption statistics, chat vs agents, why pilots fail, and a 100-day readiness roadmap.",
  },
  {
    path: "case-studies/gm-law",
    title: "GM Law Case Study: CRM Automation Without New Subscriptions | Grid Concepts",
    description:
      "How Grid Concepts rebuilt a Brisbane law firm's lead calculator in Keap and swapped Parsey for Zapier, fixing two broken integrations with zero new software costs.",
  },
  {
    path: "case-studies/metropole",
    title: "Metropole Case Study: A Central Customer View From 6 Disconnected Systems | Grid Concepts",
    description:
      "How Grid Concepts unified Metropole's CRM, marketing, eCommerce, analytics, webinar and ticketing data into one Central Customer View, queryable by humans and AI agents alike.",
  },
  {
    path: "case-studies/orthodontics-australia",
    title: "Orthodontics Australia Case Study: 340% More Practice Visits | Grid Concepts",
    description:
      "How Grid Concepts rebuilt Orthodontics Australia's Find an Orthodontist tool as a Laravel application with proper specialist-to-practice data modelling and Google geolocation search, growing practice visits 340%.",
  },
];

for (const { path, title, description } of pages) {
  const url = `https://gridconcepts.com.au/${path}`;
  const out = html
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  mkdirSync(`dist/${path}`, { recursive: true });
  writeFileSync(`dist/${path}/index.html`, out);
  console.log(`Wrote dist/${path}/index.html`);
}
