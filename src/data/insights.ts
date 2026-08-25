export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
};

/** Keep in sync with Markdown posts under blog/src/content/blog/ */
export const insightPosts: InsightPost[] = [
  {
    slug: "connecting-ai-tools-to-simpro-and-xero",
    title: "Connecting AI tools to simPRO and Xero: what is realistic today",
    description:
      "A plain answer on connecting AI tools to simPRO and Xero in 2026 — what already works out of the box, what needs a build, and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "how-much-does-an-ai-agent-cost",
    title: "How much does an AI agent actually cost?",
    description:
      "A plain answer to how much does an AI agent actually cost for a small business — what drives the price, realistic ranges, and how to avoid an open-ended bill.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "questions-to-ask-an-ai-agency",
    title: "Questions to ask an AI agency before you hire one",
    description:
      "The questions to ask an AI agency before you hire one — on data ownership, pricing, governance and proof — so you can tell real expertise from a reseller with a slide deck.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "automating-quoting-scheduling-after-hours-enquiries",
    title: "Automating quoting, scheduling and after-hours enquiries for service businesses",
    description:
      "A plain-English look at automating quoting, scheduling and after-hours enquiries for service businesses — what actually works, what it costs, and where to start.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "is-your-business-ai-ready",
    title: "Most businesses are not AI-ready — how to tell",
    description:
      "A plain-English way to check whether your business is AI-ready, before you spend on tools you do not need yet.",
    dateLabel: "Aug 2026",
  },
  {
    slug: "state-of-ai-victorian-smes",
    title: "The State of AI for Victorian SMEs",
    description:
      "Why the gap is not ambition but foundation — and what the 2026 readiness signals actually mean.",
    dateLabel: "Jul 2026",
  },
  {
    slug: "fix-the-data-first",
    title: "Fix the data first — then AI works",
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
