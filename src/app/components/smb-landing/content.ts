// Copy and data shared by the three small business landing page variants
// (/small-business-a, -b, -c) built for ChatGPT ads traffic.

export const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled=true";

export const PRIMARY_CTA = "Complimentary Consultation";
export const SECONDARY_CTA = "Get in touch";

/* ------------------------------------------------------------------ */
/* Systems small business owners already use                          */
/* ------------------------------------------------------------------ */

export type SystemGroup = {
  id: string;
  label: string;
  tools: string[];
  data: string;
  unlocks: string;
};

export const systemGroups: SystemGroup[] = [
  {
    id: "accounting",
    label: "Accounting",
    tools: ["Xero", "MYOB", "QuickBooks"],
    data: "Invoices, payments, quotes and who owes what",
    unlocks: "Chase overdue invoices automatically and see real profit per customer.",
  },
  {
    id: "crm",
    label: "CRM & sales",
    tools: ["HubSpot", "Salesforce", "Keap", "Pipedrive"],
    data: "Contacts, enquiries, deals and follow-up dates",
    unlocks: "Every new lead lands in one place and nobody forgets to follow up.",
  },
  {
    id: "email",
    label: "Email & calendar",
    tools: ["Microsoft 365", "Outlook", "Gmail", "Mailchimp"],
    data: "Emails, meetings, newsletters and who opened what",
    unlocks: "See every conversation with a customer next to their jobs and invoices.",
  },
  {
    id: "store",
    label: "Online store & bookings",
    tools: ["Shopify", "WooCommerce", "Square", "Booking apps"],
    data: "Orders, bookings, products and payments",
    unlocks: "Know which customers come back, and what brought them in the first time.",
  },
  {
    id: "industry",
    label: "Job & practice software",
    tools: ["Actionstep", "ServiceM8", "simPRO", "Practice systems"],
    data: "Jobs, matters, appointments and staff time",
    unlocks: "Update a job once and have the CRM, invoices and reports follow along.",
  },
  {
    id: "sheets",
    label: "Spreadsheets & web forms",
    tools: ["Excel", "Google Sheets", "Website forms"],
    data: "The lists and trackers that hold the business together",
    unlocks: "Retire the copy-paste spreadsheets and keep the numbers you rely on.",
  },
];

export const aiTools = ["ChatGPT", "Microsoft Copilot", "Custom AI assistants"];

/* ------------------------------------------------------------------ */
/* Use cases, each tied to an existing case study                      */
/* ------------------------------------------------------------------ */

export type UseCase = {
  id: string;
  short: string;
  title: string;
  forWho: string;
  problem: string;
  whatWeDo: string[];
  systems: string[];
  data: string[];
  result: string;
  stat: { value: string; label: string };
  client: string;
  clientDetail: string;
  href: string;
};

export const useCases: UseCase[] = [
  {
    id: "double-entry",
    short: "No more double entry",
    title: "Stop typing the same details into three different systems.",
    forWho: "Law firms, accountants, real estate and other service businesses",
    problem:
      "A new enquiry comes in through the website. Someone retypes it into the practice software, then again into the email list. Follow-ups depend on someone remembering, and leads quietly go missing when a connection breaks.",
    whatWeDo: [
      "Connect your website forms, practice software and CRM so details are entered once.",
      "Send only the data each step needs, so you stay under subscription limits.",
      "Set up automatic follow-ups and thank-you emails, with AI drafting replies for review.",
    ],
    systems: ["Website forms", "Actionstep", "Keap", "Zapier"],
    data: ["Contact details", "Matter status", "Referrer", "Settlement outcome"],
    result:
      "Leads stop going missing, referrers are thanked automatically, and it runs on tools the firm already pays for.",
    stat: { value: "0", label: "new software subscriptions needed" },
    client: "GM Law",
    clientDetail: "Brisbane law firm · conveyancing, leasing & estate planning",
    href: "/case-studies/gm-law",
  },
  {
    id: "one-view",
    short: "One view of every customer",
    title: "See every customer, every touchpoint, in one place.",
    forWho: "Businesses that sell through events, webinars, email and an online store",
    problem:
      "Sales lives in the CRM, newsletters in Mailchimp, purchases in the store, and event tickets somewhere else. Each tool holds a slice of the same customer, so nobody can answer a simple question: what actually led to this sale?",
    whatWeDo: [
      "Pull all your customer data into one central customer view.",
      "Match the same person across every system, so duplicates disappear.",
      "Let your team (and AI tools) ask plain-English questions of the joined-up data.",
    ],
    systems: ["SuiteCRM", "Mailchimp", "Thryv", "Google Analytics", "WebinarJam", "Humanitix"],
    data: ["Enquiries & deals", "Email opens", "Purchases", "Webinar attendance", "Event tickets"],
    result:
      "The team can see which webinars, content and events move someone towards buying, and AI has trusted data to work from.",
    stat: { value: "6", label: "disconnected systems joined into one view" },
    client: "Metropole",
    clientDetail: "National property investment advisory",
    href: "/case-studies/metropole",
  },
  {
    id: "find-you",
    short: "Help customers find you",
    title: "Help customers find the right person, at the right location, faster.",
    forWho: "Clinics, multi-location practices and member organisations",
    problem:
      "Staff, locations and services are listed in several places and don't match. One specialist working from three clinics shows up as three near-identical listings, which confuses customers and search engines alike.",
    whatWeDo: [
      "Build one clean source of truth for your people, locations and services.",
      "Power a simple search tool so customers see the closest, most relevant option.",
      "Structure the information so Google and AI assistants like ChatGPT can understand it.",
    ],
    systems: ["Member database", "Practice listings", "Google location search", "Website"],
    data: ["Specialists", "Practice addresses", "Services", "Opening details"],
    result:
      "Customers get one accurate answer instead of duplicates, and more of them end up booking with a practice.",
    stat: { value: "340%", label: "more visits to practices from the Finder" },
    client: "Orthodontics Australia",
    clientDetail: "Consumer arm of the Australian Society of Orthodontists",
    href: "/case-studies/orthodontics-australia",
  },
];

/* ------------------------------------------------------------------ */
/* Customers                                                            */
/* Sizes confirmed by Grid Concepts (Metropole and Orthodontics Australia still estimates). */
/* ------------------------------------------------------------------ */

export type Customer = {
  name: string;
  industry: string;
  size: string;
  logo?: string;
  // "opaque": logo file has a solid background (JPG/GIF), so it can't be recoloured for dark sections.
  // "onDark": logo is light-coloured and needs a dark backing on light sections.
  // "asIs": logo is self-contained (e.g. its own dark background), shown unchanged everywhere.
  logoStyle?: "opaque" | "onDark" | "asIs";
  href?: string;
};

export const customers: Customer[] = [
  { name: "Metropole Property Strategists", industry: "Property investment", size: "50-100 staff", logo: "https://metropole.com.au/wp-content/themes/metropole-theme/assets/images/2025/Metropole_primary_logo.svg", href: "/case-studies/metropole" },
  { name: "GM Law", industry: "Legal services", size: "10-15 staff", logo: "https://www.gmlaw.com.au/wp-content/uploads/2020/02/GMLaw-logo.svg", href: "/case-studies/gm-law" },
  { name: "Orthodontics Australia", industry: "Healthcare", size: "Member body, national", logo: "https://orthodonticsaustralia.org.au/wp-content/themes/oa2023/img/logo.svg", href: "/case-studies/orthodontics-australia" },
  { name: "Mornington Vet", industry: "Veterinary", size: "5-10 staff", logo: "https://morningtonvetclinic.com.au/wp-content/uploads/2022/10/MVC-logo.svg" },
  { name: "InvestLink Group", industry: "Financial services", size: "5-10 staff", logo: "https://www.investlinkgroup.com.au/wp-content/uploads/2022/09/Investlink_Logo_FullColour_RGB.svg" },
  { name: "PrintForce", industry: "Printing", size: "10-50 staff", logo: "https://online.printforce.com.au/images/logo.png" },
  { name: "Eggler Institute of Technology", industry: "Education & training", size: "5-10 staff", logo: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_480,h_91/https://www.eit.global/wp-content/uploads/2024/12/eggler-logo-optimized.gif", logoStyle: "opaque" },
  { name: "HeartKids", industry: "Not-for-profit", size: "10-25 staff", logo: "https://www.heartkids.org.au/wp-content/uploads/2024/05/HeartKids_logo_small.png?x72718" },
  { name: "Kingston Water Tanks", industry: "Manufacturing", size: "2-5 staff", logo: "/logos/kingston-water-tanks.jpg", logoStyle: "asIs" },
  { name: "Verona Homes", industry: "Home building", size: "10-50 staff", logo: "https://veronahomes.com.au/wp-content/uploads/2023/03/logored.png" },
  { name: "Applied Cleansing Solutions", industry: "Industrial cleaning", size: "5-15 staff", logo: "https://appliedcleansing.com.au/wp-content/themes/acs-theme/img/logo.png" },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                         */
/* ------------------------------------------------------------------ */

export type Testimonial = { quote: string; company: string; descriptor: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "We were paying for software that didn't talk to each other & some of it we didn't need. Grid Concepts connected what we already had, and now the marketing communications are enabled without double-handling the data. We didn't have to buy a single new subscription.",
    company: "GM Law",
    descriptor: "Professional services firm",
  },
  {
    quote:
      "For the first time we can see the whole customer journey in one place. We can now see the complete picture, even if it is years in leadup to a sale! The team stopped arguing which numbers were right and started asking better questions.",
    company: "Metropole",
    descriptor: "Property advisory",
  },
  {
    quote:
      "They explained everything in plain English and started small. Within a few weeks we had something useful running, not a 40-page strategy document.",
    company: "Orthodontics Australia",
    descriptor: "Healthcare association",
  },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                 */
/* ------------------------------------------------------------------ */

export const faqs: { q: string; a: string }[] = [
  {
    q: "We're a small business. Is this really for us?",
    a: "Yes. Most of the businesses we work with have between 5 and 100 staff. If you use three or more business apps and find yourself copying information between them, there is almost always a quick win. We size the work to your business, not the other way around.",
  },
  {
    q: "Do I need to replace the software I already use?",
    a: "Almost never. We start with the tools you already pay for, like Xero, MYOB, HubSpot, Outlook or your industry software, and connect them. Often we can remove a paid add-on along the way, as we did for GM Law.",
  },
  {
    q: "What happens in the Complimentary Consultation?",
    a: "It is a free 30-minute call with one of our partners, by video or phone. We ask about your business, the tools you use and where time is being lost. You leave with two or three practical ideas you can act on, whether or not you work with us. There is no obligation and no hard sell.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on how many systems are involved and what you want them to do. After the consultation we give you a fixed quote for a clearly defined first step, so you know the cost before anything starts. Many first projects are small and pay for themselves in time saved.",
  },
  {
    q: "How long until we see results?",
    a: "A first connection or automation is usually running within a few weeks. Bigger pieces of work are broken into stages, with a practical 100-day roadmap, so you see progress early instead of waiting months for one big launch.",
  },
  {
    q: "Is our customer data safe?",
    a: "We only move the data each step needs, use secure connections and role-based access, and document where everything goes. You own the accounts and the integrations, so you are never locked in to us. We work within the Australian Privacy Act and can help you set simple rules for using AI with customer information.",
  },
  {
    q: "We already use ChatGPT. What's different about this?",
    a: "On its own, ChatGPT only knows what you paste into it. When your systems are connected and your data is clean, AI tools can answer questions from your real customers, jobs and invoices, draft follow-ups with the right details, and build reports in seconds. We set up that foundation and the guardrails around it.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. We're based in Melbourne and work with businesses across Australia, including clients in Brisbane and nationally. Most work happens online. If you are in Melbourne we are happy to meet face to face.",
  },
];
