export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
};

/** Keep in sync with Markdown posts under blog/src/content/blog/ */
export const insightPosts: InsightPost[] = [
  {
    slug: "ai-data-governance-australia",
    title: "AI data governance in Australia: what to answer before any AI pilot",
    description:
      "A plain-English guide to AI data governance in Australia - the questions on data location, overseas AI vendors and automated decisions you need answered before you fund a pilot, not after.",
    dateLabel: "Sep 2026",
  },
  {
    slug: "how-to-structure-an-ai-pilot-for-professional-services",
    title: "How to structure an AI pilot for professional services (without pilot theatre)",
    description:
      "How to structure an AI pilot for professional services so it survives contact with the business - defined success criteria, data governance answered upfront, and a real path to production instead of pilot theatre.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "ai-agents-for-trades-and-field-service",
    title: "AI agents for trades and field service businesses",
    description:
      "A plain-English guide to AI agents for trades and field service businesses - which tasks they actually handle, what they cost to run, and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "how-geo-and-ai-overviews-changed-australia-local-business-websites",
    title: "How GEO and AI Overviews changed Australian local business websites in 2025–2026",
    description:
      "How GEO and AI Overviews have reshaped traffic for Australian local business websites in 2025-2026, based on real client data - and what actually still works.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "connecting-ai-tools-to-simpro-and-xero",
    title: "Connecting ActionStep and Keap: turning disconnected CRM data into a marketing engine",
    description:
      "The marketing case for connecting ActionStep and Keap - why practice data trapped in your CRM never reaches your marketing automation, and what changes once it does.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "how-much-does-an-ai-agent-cost",
    title: "How much does an AI agent actually cost?",
    description:
      "A plain answer to how much does an AI agent actually cost for a small business - what drives the price, realistic ranges, and how to avoid an open-ended bill.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "questions-to-ask-an-ai-agency",
    title: "Questions to ask an AI agency before you hire one",
    description:
      "The questions to ask an AI agency before you hire one - on data ownership, pricing, governance and proof - so you can tell real expertise from a reseller with a slide deck.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "automating-quoting-scheduling-after-hours-enquiries",
    title: "Automating quoting, scheduling and after-hours enquiries for service businesses",
    description:
      "A plain-English look at automating quoting, scheduling and after-hours enquiries for service businesses - what actually works, what it costs, and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "is-your-business-ai-ready",
    title: "Most businesses are not AI-ready - how to tell",
    description:
      "A plain-English way to check whether your business is AI-ready, before you spend on tools you do not need yet.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "state-of-ai-victorian-smes",
    title: "The State of AI for Victorian SMEs",
    description:
      "Why the gap is not ambition but foundation - and what the 2026 readiness signals actually mean.",
    dateLabel: "Jul 2026",
  },
  {
    slug: "fix-the-data-first",
    title: "Fix the data first - then AI works",
    description:
      "A practical view of why disconnected information quietly kills AI pilots before they start.",
    dateLabel: "Jul 2026",
  },
  {
    slug: "why-ai-pilots-fail",
    title: "Why most AI pilots fail to show financial benefit",
    description:
      "The pattern behind failed experiments: weak measurement, thin foundations, and no path from pilot to practice.",
    dateLabel: "Jun 2026",
  },
  {
    slug: "100-day-ai-roadmap",
    title: "A 100-day roadmap for practical AI readiness",
    description:
      "A staged path for SMEs: clarity on data, connections between systems, guardrails, and people.",
    dateLabel: "Jun 2026",
  },
];

export const insightsIndexPath = "/insights/";
export const insightPostPath = (slug: string) => `/insights/${slug}/`;
