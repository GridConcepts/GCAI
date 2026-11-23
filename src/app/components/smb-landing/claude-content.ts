// Copy for landing page D ("Claude Specialists"): Grid Concepts as a
// Melbourne-based Claude specialist agency for small businesses.
// Grid Concepts is independent of Anthropic; keep copy free of any
// partnership or endorsement claims.

/* Systems shown around Claude in the hero visual. Example chats use
   made-up sample data and are labelled as examples on the page. */
export type ClaudeSystem = {
  id: string;
  label: string;
  tools: string;
  prompt: string;
  answer: string;
};

export const claudeSystems: ClaudeSystem[] = [
  {
    id: "accounting",
    label: "Accounting",
    tools: "Xero · MYOB",
    prompt: "Which invoices are more than 30 days overdue?",
    answer: "7 invoices, $18,420 in total. The largest is Harbour Fitouts at $6,200 (41 days). Want me to draft polite reminder emails for each?",
  },
  {
    id: "crm",
    label: "CRM",
    tools: "HubSpot · Keap",
    prompt: "Which leads from last week haven't been contacted yet?",
    answer: "4 leads are waiting. Two came from the website form on Tuesday and asked about pricing. I've drafted a reply for each using your standard pricing notes.",
  },
  {
    id: "email",
    label: "Email & calendar",
    tools: "Outlook · Gmail",
    prompt: "Summarise my emails with Jamie this month. What did I promise?",
    answer: "Three threads. You promised a revised quote by Friday and an intro to your bookkeeper. The quote isn't in your sent items yet.",
  },
  {
    id: "files",
    label: "Files",
    tools: "SharePoint · Drive",
    prompt: "Find our latest price list and draft a quote for 40 units.",
    answer: "Using Price List v7 (updated 3 Nov), 40 units comes to $9,880 + GST with the volume discount. A draft quote is ready in your template.",
  },
  {
    id: "store",
    label: "Online store",
    tools: "Shopify · Square",
    prompt: "What were our top 5 products last month, and what's low on stock?",
    answer: "Top seller was the 5kg starter kit (212 orders). Two of the top five have under a week of stock left at the current sales rate.",
  },
  {
    id: "jobs",
    label: "Job software",
    tools: "ServiceM8 · simPRO",
    prompt: "Which jobs finish this week and still need an invoice?",
    answer: "5 jobs finish by Friday. 3 have no invoice yet, worth $11,350. I can create draft invoices in Xero for you to approve.",
  },
  {
    id: "sheets",
    label: "Spreadsheets",
    tools: "Excel · Sheets",
    prompt: "Compare this quarter's sales to the same quarter last year.",
    answer: "Up 14% overall. Repeat customers drove most of the growth, while new-customer sales were flat. Here's a one-page summary.",
  },
  {
    id: "forms",
    label: "Website forms",
    tools: "Enquiries · Bookings",
    prompt: "Sort today's enquiries by urgency and suggest who should reply.",
    answer: "6 enquiries today. One is a complaint about a delayed job and should go to you. The rest are quotes I've matched to the right team member.",
  },
];

export const whyClaude = [
  {
    title: "It writes like a person",
    text: "Claude is known for clear, careful writing. Quotes, follow-ups and reports sound like your business, not like a robot.",
  },
  {
    title: "It works with your real information",
    text: "With secure connectors, Claude can look things up in your accounting, CRM, email and files, instead of guessing from what you paste in.",
  },
  {
    title: "It's built with business data in mind",
    text: "On Claude's business plans, your conversations aren't used to train its models by default, and you control who can access what.",
  },
];

export const whyUs = [
  {
    title: "Local and in person",
    text: "We're a Melbourne team. Meet us at our Chadstone office or yours, on Melbourne time.",
  },
  {
    title: "We do the plumbing",
    text: "Anyone can sell you licences. We connect Claude to your systems and clean up the data underneath so the answers are right.",
  },
  {
    title: "Small business is our focus",
    text: "Since 2010 we've worked with Australian businesses of 2 to 100 staff. We size the work to you.",
  },
  {
    title: "Privacy done properly",
    text: "We set up permissions, usage rules and Australian Privacy Act considerations from day one.",
  },
];

export const claudeServices = [
  {
    title: "Claude setup & rollout",
    text: "We help you pick the right Claude plan, set up shared Projects with your documents and tone of voice, and write simple usage guidelines.",
    items: ["Plan selection & account setup", "Shared Projects & templates", "AI usage policy"],
  },
  {
    title: "Connect Claude to your systems",
    text: "We link Claude to the tools you already use through secure connectors, and build custom ones where none exist yet.",
    items: ["Accounting, CRM & email connectors", "Custom connectors (MCP)", "Data clean-up & permissions"],
  },
  {
    title: "Claude workflows",
    text: "We turn repeat jobs into reliable Claude workflows: enquiry replies, quotes, reports and reminders, with a human approving before anything goes out.",
    items: ["Enquiry & follow-up drafting", "Quotes & reports", "Reminders & summaries"],
  },
  {
    title: "Team training & support",
    text: "Hands-on sessions for your team using your own work, plus ongoing help as Claude adds new features.",
    items: ["In-person or online training", "Prompt & Project libraries", "Ongoing support"],
  },
];

export const rolloutSteps = [
  { title: "Complimentary Consultation", text: "30 minutes on how your business runs and where Claude could save the most time." },
  { title: "Connect & tidy", text: "We connect Claude to the key systems and fix the data it will rely on." },
  { title: "Pilot one workflow", text: "One real job, done with Claude, measured against how long it took before." },
  { title: "Train the team", text: "Practical sessions so everyone knows what Claude can do and what stays private." },
  { title: "Expand", text: "Add the next workflow once the first one is paying for itself." },
];

/* Use cases. Claude workflows we build, each linked to the case study of
   the data foundation underneath. GM Law and Metropole use Claude
   (confirmed); Orthodontics Australia is linked for the foundation only. */
export type ClaudeUseCase = {
  id: string;
  title: string;
  forWho: string;
  before: string;
  claudeDoes: string[];
  systems: string[];
  data: string[];
  foundation: { client: string; usesClaude?: boolean; text: string; href: string };
};

export const claudeUseCases: ClaudeUseCase[] = [
  {
    id: "enquiries",
    title: "Every enquiry answered the same day, in your voice",
    forWho: "Law firms, accountants, trades and other service businesses",
    before: "Enquiries arrive by web form and email. Someone checks the CRM, works out who the person is, then writes a reply from scratch. Busy weeks mean slow replies and lost work.",
    claudeDoes: [
      "Reads each new enquiry and checks the CRM for any history",
      "Drafts a tailored reply using your pricing notes and tone of voice",
      "Logs the enquiry and sets a follow-up reminder once you approve",
    ],
    systems: ["Website forms", "Outlook", "HubSpot or Keap", "Practice software"],
    data: ["Contact details", "Past matters or jobs", "Pricing notes", "Follow-up dates"],
    foundation: { client: "GM Law", usesClaude: true, text: "GM Law uses Claude. This workflow builds on the connected CRM foundation we delivered for them.", href: "/case-studies/gm-law" },
  },
  {
    id: "customer-view",
    title: "Ask Claude anything about any customer",
    forWho: "Businesses selling through events, webinars, email and an online store",
    before: "Each system holds a slice of the customer. Answering \"what's our history with this person?\" means opening five tools and a spreadsheet.",
    claudeDoes: [
      "Answers plain-English questions across all your customer data",
      "Spots who is ready to buy based on what they've engaged with",
      "Prepares a short brief before every sales call",
    ],
    systems: ["CRM", "Mailchimp", "Online store", "Webinar & event tools"],
    data: ["Enquiries & deals", "Email engagement", "Purchases", "Event attendance"],
    foundation: { client: "Metropole", usesClaude: true, text: "Metropole uses Claude. This workflow builds on the central customer view we created from their six systems.", href: "/case-studies/metropole" },
  },
  {
    id: "answers",
    title: "Accurate answers about your services, staff and locations",
    forWho: "Clinics, multi-location practices and member organisations",
    before: "Service details, staff and locations live in several places that don't match. Staff give different answers and customers get confused.",
    claudeDoes: [
      "Answers staff and customer questions from one approved source",
      "Drafts consistent replies about services, availability and locations",
      "Flags anything out of date so the source stays correct",
    ],
    systems: ["Practice listings", "Staff directory", "Website", "Shared files"],
    data: ["Services", "Practitioners", "Locations", "Opening details"],
    foundation: { client: "Orthodontics Australia", text: "Relies on a single source of truth like the one we built for Orthodontics Australia.", href: "/case-studies/orthodontics-australia" },
  },
];

export const claudeFaqs: { q: string; a: string }[] = [
  {
    q: "What is Claude, and how is it different from ChatGPT?",
    a: "Claude is an AI assistant made by Anthropic. Like ChatGPT it can write, summarise, analyse and answer questions. Many businesses choose Claude for its careful, natural writing, its ability to work through long documents, and its business plan controls. We're happy to talk through which tool suits your business, and some clients use both.",
  },
  {
    q: "Are you part of Anthropic?",
    a: "No. Grid Concepts is an independent Melbourne consultancy. We specialise in setting up and connecting Claude for small businesses, alongside the data and systems work we've done since 2010.",
  },
  {
    q: "Is our data safe with Claude?",
    a: "On Claude's business plans, your conversations aren't used to train models by default. We also set up who can access which systems, keep connections to the minimum data needed, and help you write simple rules for what should and shouldn't go into AI tools, in line with the Australian Privacy Act.",
  },
  {
    q: "Can Claude connect to Xero, MYOB, HubSpot or Microsoft 365?",
    a: "Usually, yes. Claude connects to other systems through connectors (built on an open standard called MCP). Some exist ready-made; for others we build a secure custom connector. On the consultation we'll check each of your systems.",
  },
  {
    q: "Do we have to replace our existing software?",
    a: "No. The whole point is to make Claude work with the tools you already pay for. Often we find a paid add-on you no longer need along the way.",
  },
  {
    q: "How much does it cost?",
    a: "There are two parts: Claude licences, paid to Anthropic per user per month, and our setup work, which we quote as a fixed price after the consultation. Many first projects are small and pay for themselves in time saved within a few months.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most businesses have Claude set up with a first connected workflow running within a few weeks. We start with one job that matters, prove it works, then expand.",
  },
  {
    q: "Can we meet you in person?",
    a: "Yes. We're based in Melbourne and happy to meet at our Chadstone office, at yours, or online. We also work with businesses across Australia.",
  },
];
