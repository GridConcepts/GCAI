export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
};

/** Keep in sync with Markdown posts under blog/src/content/blog/ */
export const insightPosts: InsightPost[] = [
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
