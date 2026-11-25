export type InsightPost = {
  slug: string;
  author: string;
  image: string;
  title: string;
  description: string;
  dateLabel: string;
};

export type InsightAuthor = {
  name: string;
  role: string;
  photo: string;
};

/**
 * Mirrors blog/src/data/authors.ts. Photo paths point at the blog's own
 * public assets, which the Astro build outputs under dist/insights/ - same
 * domain, so a plain absolute path works from this app too.
 */
const insightAuthors: Record<string, InsightAuthor> = {
  "Val Melamed": {
    name: "Val Melamed",
    role: "Partner, Grid Concepts",
    photo: "/insights/authors/val-melamed.jpg",
  },
  "Anton Sednin": {
    name: "Anton Sednin",
    role: "Campaign Management, Grid Concepts",
    photo: "/insights/authors/anton-sednin.jpg",
  },
};

export function getInsightAuthor(name: string): InsightAuthor {
  return insightAuthors[name] ?? { name, role: "Grid Concepts", photo: insightAuthors["Val Melamed"].photo };
}

/** Keep in sync with Markdown posts under blog/src/content/blog/ */
export const insightPosts: InsightPost[] = [
  {
    slug: "ai-for-real-estate-agents-open-home-follow-ups-and-vendor-reporting",
    author: "Val Melamed",
    image: "/insights/media/ai-for-real-estate-agents-open-home-follow-ups-and-vendor-reporting/market-pressure-stats.svg",
    title: "AI for real estate agents: open-home follow-ups and vendor reporting",
    description:
      "A plain-English look at AI for real estate agents - how it actually speeds up open-home follow-ups and vendor reporting, what still needs a human, and where to start.",
    dateLabel: "Nov 2026",
  },
  {
    slug: "ai-for-hospitality-venues-rostering-and-stock-takes",
    author: "Val Melamed",
    image: "/insights/media/ai-for-hospitality-venues-rostering-and-stock-takes/venue-pressure-stats.svg",
    title: "AI for hospitality venues: rostering and stock takes without the spreadsheet chaos",
    description:
      "A plain-English look at AI for hospitality venues - how it actually helps with rostering and stock takes, what still needs a human, and where a venue manager should start.",
    dateLabel: "Nov 2026",
  },
  {
    slug: "best-ai-for-text-generation-2026",
    author: "Anton Sednin",
    image: "/insights/media/best-ai-for-text-generation-2026/test-methodology-flow.svg",
    title: "Choosing the best AI for text generation in 2026 (comparative test)",
    description:
      "We tested Claude, Gemini, Copilot, DeepSeek and ChatGPT on real SEO writing tasks. See which AI wrote best in 2026 and why ChatGPT came last.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "how-long-should-an-ai-pilot-take",
    author: "Val Melamed",
    image: "/insights/media/how-long-should-an-ai-pilot-take/gartner-timelines.svg",
    title: "How long should an AI pilot take? Realistic timelines from discovery to go-live",
    description:
      "How long should an AI pilot take, realistically - the stages from discovery to go-live, what Gartner survey data actually shows, and why \"AI transformation in weeks\" claims rarely hold up.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "evaluating-ai-vendors-due-diligence-checklist",
    author: "Val Melamed",
    image: "/insights/media/evaluating-ai-vendors-due-diligence-checklist/gartner-scrap-stat.svg",
    title: "Evaluating AI vendors: a due-diligence checklist for professional services",
    description:
      "A due-diligence checklist for evaluating AI vendors in professional services - the data, model and contract questions a standard SaaS procurement process misses, and how to score the answers before you sign.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "data-quality-audit-checklist",
    author: "Val Melamed",
    image: "/insights/media/data-quality-audit-checklist/gartner-stats.svg",
    title: "Data quality audit: the checklist to run before any AI initiative",
    description:
      "A data quality audit checklist for COOs to run before any AI initiative - what Gartner data shows about skipping it, which fields to check first, and how to score a go/no-go decision.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "getting-staff-buy-in-for-an-ai-pilot",
    author: "Val Melamed",
    image: "/insights/media/getting-staff-buy-in-for-an-ai-pilot/survey-tiles.svg",
    title: "Getting staff buy-in for an AI pilot: a change-management checklist",
    description:
      "A practical checklist for getting staff buy-in for an AI pilot - why resistance is rising, what actually drives it, and the steps that get a pilot adopted instead of quietly ignored.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "build-vs-buy-ai-vendor-or-internal-team",
    author: "Val Melamed",
    image: "/insights/media/build-vs-buy-ai-vendor-or-internal-team/cost-comparison.svg",
    title: "Build vs. buy: choosing between an AI vendor and an internal team",
    description:
      "Build vs. buy for AI - a plain-cost comparison between hiring an internal team and engaging an AI vendor, and the questions that actually decide which one is right for your business.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "measuring-ai-pilot-roi",
    author: "Val Melamed",
    image: "/insights/media/measuring-ai-pilot-roi/mckinsey-gap.svg",
    title: "How to measure ROI on an AI pilot: metrics that survive board scrutiny",
    description:
      "How to measure ROI on an AI pilot with metrics that hold up at board level - the baseline, the financial attribution, and the risk indicators to report before you ask for scale-up budget.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "do-you-need-a-website-chatbot",
    author: "Val Melamed",
    image: "/insights/media/do-you-need-a-website-chatbot/chat-survey-stats.svg",
    title: "Do you need a website chatbot? What small businesses get wrong about AI chat",
    description:
      "Do you need a website chatbot? A plain-English look at what AI chat actually fixes, what it does not, and why it is usually not the first thing worth buying.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "ai-for-bookkeepers-and-accountants",
    author: "Val Melamed",
    image: "/insights/media/ai-for-bookkeepers-and-accountants/adoption.svg",
    title: "AI for bookkeepers and accountants: what is really automatable right now",
    description:
      "A plain-English look at AI for bookkeepers and accountants - which tasks like reconciliation, data entry and invoice matching are genuinely automatable now, and which still need a human.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "fixing-slow-lead-response-time",
    author: "Val Melamed",
    image: "/insights/media/fixing-slow-lead-response-time/going-cold-stats.svg",
    title: "Website enquiries going cold? Fixing slow lead response time before it costs you jobs",
    description:
      "A plain-English look at fixing slow lead response time - why website enquiries go cold, what the data says it costs you, and where to start before you lose the next job.",
    dateLabel: "Oct 2026",
  },
  {
    slug: "ai-crm-options-small-service-businesses",
    author: "Val Melamed",
    image: "/insights/media/ai-crm-options-small-service-businesses/ai-crm-features.svg",
    title: "AI CRM options for small service businesses: what actually matters",
    description:
      "A vendor-neutral look at AI CRM options for small service businesses - which AI features actually save time, which are marketing gloss, and what to check before you switch.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "chasing-unpaid-invoices-with-ai",
    author: "Val Melamed",
    image: "/insights/media/chasing-unpaid-invoices-with-ai/late-payment-stats.svg",
    title: "Chasing unpaid invoices: can AI actually speed up follow-ups?",
    description:
      "A plain-English look at chasing unpaid invoices with AI - what it actually speeds up, what still needs a human, and where to start if cash flow is the problem.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "ai-answering-service-vs-receptionist",
    author: "Val Melamed",
    image: "/insights/media/ai-answering-service-vs-receptionist/missed-call-stats.svg",
    title: "AI answering services vs. a real receptionist: what actually stops missed calls",
    description:
      "AI answering services vs. a real receptionist - a plain comparison of cost and capability, and what actually stops missed calls from costing you jobs.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "how-to-use-the-em-dash-in-2026",
    author: "Anton Sednin",
    image: "/insights/media/how-to-use-the-em-dash-in-2026/dash-types.svg",
    title: "How to use the em dash in 2026: why the web turned it off and what it means for your content",
    description:
      "Why top-ranking sites dropped the em dash in 2026, whether it affects SEO or AI detectors, and how to stop ChatGPT, Claude, Gemini and Copilot using it.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "ai-use-cases-buyers-agencies-property-advisory",
    author: "Val Melamed",
    image: "/insights/media/ai-use-cases-buyers-agencies-property-advisory/four-jobs.svg",
    title: "AI use cases for buyers agencies and property advisory firms",
    description:
      "A COO-level guide to AI use cases for buyers agencies and property advisory firms in Australia - what already works, the AML/CTF obligations landing on 1 July 2026, and how to pilot without pilot theatre.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "ai-implementation-partner-vs-consultancy",
    author: "Val Melamed",
    image: "/insights/media/ai-implementation-partner-vs-consultancy/project-failure-rates.svg",
    title: "AI implementation partner vs. consultancy: what's the difference",
    description:
      "AI implementation partner vs. consultancy - the real difference between a firm that hands you a strategy deck and one that builds, ships and stays accountable for the result.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "ai-data-governance-australia",
    author: "Val Melamed",
    image: "/insights/media/ai-data-governance-australia/three-governance-questions.svg",
    title: "AI data governance in Australia: what to answer before any AI pilot",
    description:
      "A plain-English guide to AI data governance in Australia - the questions on data location, overseas AI vendors and automated decisions you need answered before you fund a pilot, not after.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "how-to-structure-an-ai-pilot-for-professional-services",
    author: "Val Melamed",
    image: "/insights/media/how-to-structure-an-ai-pilot-for-professional-services/pilot-failure-stats.svg",
    title: "How to structure an AI pilot for professional services (without pilot theatre)",
    description:
      "How to structure an AI pilot for professional services so it survives contact with the business - defined success criteria, data governance answered upfront, and a real path to production instead of pilot theatre.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "ai-agents-for-trades-and-field-service",
    author: "Val Melamed",
    image: "/insights/media/ai-agents-for-trades-and-field-service/adoption-landscape.svg",
    title: "AI agents for trades and field service businesses",
    description:
      "AI agents for trades and field service: the four admin jobs worth automating, Australian adoption data, real client examples and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "how-geo-and-ai-overviews-changed-australia-local-business-websites",
    author: "Val Melamed",
    image: "/insights/media/how-geo-and-ai-overviews-changed-australia-local-business-websites/chatgpt-traffic-share.png",
    title: "How GEO and AI Overviews changed Australian local business websites in 2025–2026",
    description:
      "How GEO and AI Overviews have reshaped traffic for Australian local business websites in 2025-2026, based on real client data - and what actually still works.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "connecting-ai-tools-to-simpro-and-xero",
    author: "Val Melamed",
    image: "/insights/media/connecting-ai-tools-to-simpro-and-xero/client-journey-disconnected-vs-connected.png",
    title: "Connecting ActionStep and Keap: turning disconnected CRM data into a marketing engine",
    description:
      "The marketing case for connecting ActionStep and Keap - why practice data trapped in your CRM never reaches your marketing automation, and what changes once it does.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "how-much-does-an-ai-agent-cost",
    author: "Val Melamed",
    image: "/insights/media/how-much-does-an-ai-agent-cost/price-drivers.svg",
    title: "How much does an AI agent actually cost?",
    description:
      "A plain answer to how much does an AI agent actually cost for a small business - what drives the price, realistic ranges, and how to avoid an open-ended bill.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "questions-to-ask-an-ai-agency",
    author: "Val Melamed",
    image: "/insights/media/questions-to-ask-an-ai-agency/failure-rate-stats.png",
    title: "Questions to ask an AI agency before you hire one",
    description:
      "The questions to ask an AI agency before you hire one - on data ownership, pricing, governance and proof - so you can tell real expertise from a reseller with a slide deck.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "automating-quoting-scheduling-after-hours-enquiries",
    author: "Val Melamed",
    image: "/insights/media/automating-quoting-scheduling-after-hours-enquiries/speed-stats.svg",
    title: "Automating quoting, scheduling and after-hours enquiries for service businesses",
    description:
      "A plain-English look at automating quoting, scheduling and after-hours enquiries for service businesses - what actually works, what it costs, and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "is-your-business-ai-ready",
    author: "Val Melamed",
    image: "/insights/media/is-your-business-ai-ready/adoption-gap.svg",
    title: "Most businesses are not AI-ready - how to tell",
    description:
      "Is your business AI-ready? Ten plain-English signs that it is not, what AI-ready looks like, three real client cases, and a free ten-minute test.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "state-of-ai-victorian-smes",
    author: "Val Melamed",
    image: "/insights/media/state-of-ai-victorian-smes/three-signals.svg",
    title: "The State of AI for Victorian SMEs",
    description:
      "Why the gap is not ambition but foundation - and what the 2026 readiness signals actually mean.",
    dateLabel: "Jul 2026",
  },
  {
    slug: "fix-the-data-first",
    author: "Val Melamed",
    image: "/insights/media/fix-the-data-first/without-vs-with-basics.svg",
    title: "Fix the data first - then AI works",
    description:
      "A practical view of why disconnected information quietly kills AI pilots before they start.",
    dateLabel: "Jul 2026",
  },
  {
    slug: "why-ai-pilots-fail",
    author: "Val Melamed",
    image: "/insights/media/why-ai-pilots-fail/demo-vs-business-result.svg",
    title: "Why most AI pilots fail to show financial benefit",
    description:
      "The pattern behind failed experiments: weak measurement, thin foundations, and no path from pilot to practice.",
    dateLabel: "Jun 2026",
  },
  {
    slug: "100-day-ai-roadmap",
    author: "Val Melamed",
    image: "/insights/media/100-day-ai-roadmap/roadmap.svg",
    title: "A 100-day roadmap for practical AI readiness",
    description:
      "A staged path for SMEs: clarity on data, connections between systems, guardrails, and people.",
    dateLabel: "Jun 2026",
  },
];

export const insightsIndexPath = "/insights/";
export const insightPostPath = (slug: string) => `/insights/${slug}/`;
