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
  // Paid-traffic landing pages (ChatGPT ads). Kept out of search with noindex.
  {
    path: "small-business-a",
    title: "AI for Small Business: Connect the Tools You Already Use | Grid Concepts",
    description:
      "Grid Concepts connects the tools Australian small businesses already use, like Xero, MYOB, HubSpot and Outlook, so AI can save real time. Book a complimentary consultation.",
    noindex: true,
  },
  {
    path: "small-business-b",
    title: "Connect Your Business Tools, Then Add AI | Grid Concepts",
    description:
      "See how Grid Concepts connects your accounting, CRM, email and job software into one view so AI has something useful to work with. Book a complimentary consultation.",
    noindex: true,
  },
  {
    path: "small-business-c",
    title: "Small Businesses Using AI With Grid Concepts | Grid Concepts",
    description:
      "Australian small businesses use Grid Concepts to connect their systems and put AI to work. See real client stories and book a complimentary consultation.",
    noindex: true,
  },
];

for (const { path, title, description, noindex } of pages) {
  const url = `https://gridconcepts.com.au/${path}`;
  const out = html
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace("</title>", noindex ? `</title>\n    <meta name="robots" content="noindex, follow" />` : "</title>");
  mkdirSync(`dist/${path}`, { recursive: true });
  writeFileSync(`dist/${path}/index.html`, out);
  console.log(`Wrote dist/${path}/index.html`);
}
