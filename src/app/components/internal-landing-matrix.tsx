import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Logo } from "./grid-concepts-homepage";
import { usePageSetup } from "./smb-landing/shared";

// Internal reference page for the paid-traffic landing pages.
// Not linked from the site, excluded from the sitemap, and served with noindex.

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";

type Variant = {
  code: string;
  name: string;
  path: string;
  context: string;
  focus: string;
  audience: string;
  chatgptAngle: string;
  googleAngle: string;
  keywords: string[];
  questions: { q: string; where: string }[];
};

const variants: Variant[] = [
  {
    code: "A",
    name: "Straight Answer",
    path: "/small-business-a",
    context: "Problem, fix, proof. A short, direct page for owners who already sense their tools are the problem.",
    focus: "Making AI useful by connecting the software a small business already uses. Leads with pain points (double entry, no full picture, ChatGPT not saving time).",
    audience: "Curious but sceptical owners who searched or asked about using AI in their business.",
    chatgptAngle: "Owner asks ChatGPT how to use AI in their business or why AI isn't saving time.",
    googleAngle: "Broad AI-for-small-business and automation searches.",
    keywords: [
      "AI for small business",
      "how to use AI in my small business",
      "AI consultant for small business",
      "small business automation Melbourne",
      "AI integration services Australia",
      "integrate ChatGPT with business software",
      "stop double data entry",
      "connect CRM and accounting software",
      "AI readiness for small business",
      "business process automation SME",
    ],
    questions: [
      { q: "Can AI work with the software I already use?", where: "Hero, Your systems" },
      { q: "Why isn't ChatGPT saving my business time yet?", where: "Sound familiar?, FAQ" },
      { q: "Do I need to replace my current systems?", where: "Your systems, FAQ" },
      { q: "What does it look like in a business like mine?", where: "3 use cases" },
      { q: "How does it work, and what does it cost?", where: "How it works, FAQ" },
    ],
  },
  {
    code: "B",
    name: "Show the Map",
    path: "/small-business-b",
    context: "Visual-first. The interactive systems map is the hero, so visitors see their own tools on screen within seconds.",
    focus: "Systems integration: which tools connect, what data moves between them, and what that unlocks. Use cases shown as systems-to-result flows.",
    audience: "Owners and operations managers searching for a specific integration or a single customer view.",
    chatgptAngle: "Owner asks ChatGPT how to connect two named tools (e.g. Xero and HubSpot) or get one view of customers.",
    googleAngle: "Tool-specific integration searches with high intent.",
    keywords: [
      "Xero HubSpot integration",
      "MYOB integration specialist",
      "connect Shopify to Xero",
      "integrate CRM with accounting software",
      "Microsoft 365 integration small business",
      "single customer view",
      "data integration services Australia",
      "system integration consultant Melbourne",
      "connect business apps",
      "workflow automation for small business",
    ],
    questions: [
      { q: "Which of my systems can be connected?", where: "Hero map, Works with what you've got" },
      { q: "What data moves between my accounting, CRM and email?", where: "Hero map detail panel, use case flows" },
      { q: "How do I get one view of every customer?", where: "Use case 02, Hero map" },
      { q: "Will it work with my industry or job software?", where: "Systems list, FAQ" },
      { q: "What can AI do once my systems are connected?", where: "Hero map (AI layer), FAQ" },
    ],
  },
  {
    code: "C",
    name: "Proof First",
    path: "/small-business-c",
    context: "Trust-led. Client quote, stats and the people you'll talk to come first, then the customer wall and before-and-after stories.",
    focus: "Credibility: real Australian clients, real results (340%, 6 systems, 0 new subscriptions), and an honest fit check.",
    audience: "Owners comparing providers and wary of \"AI agencies\". Often mid-funnel or returning.",
    chatgptAngle: "Owner asks ChatGPT for recommended AI consultants or examples of small businesses using AI.",
    googleAngle: "Provider-comparison and industry-specific searches.",
    keywords: [
      "AI consultants Melbourne",
      "AI agency for small business",
      "AI implementation partner Australia",
      "small business AI case studies",
      "data and AI consultancy",
      "AI for law firms Australia",
      "AI for healthcare practices",
      "AI for professional services firms",
      "CRM automation for law firms",
      "best AI consultant for SMEs",
    ],
    questions: [
      { q: "Who else uses Grid Concepts, and what results did they get?", where: "Hero, Customers, Client stories" },
      { q: "Is this right for a business my size?", where: "Is this right for your business?, FAQ" },
      { q: "Who will I actually be working with?", where: "Hero (Who you'll talk to)" },
      { q: "What did other businesses connect, and what changed?", where: "Client stories (before / after)" },
      { q: "How is this different from another AI agency?", where: "Hero, Is this right for you?, FAQ" },
    ],
  },
  {
    code: "D",
    name: "Claude Specialists",
    path: "/small-business-d",
    context: "Melbourne-based Claude specialist agency for small businesses. Hero visual shows Claude in the centre, connected to every internal system, with example questions and answers.",
    focus: "Setting up Claude and connecting it to accounting, CRM, email, files and job software. Local, in-person team; services, rollout steps and Claude-specific FAQs.",
    audience: "Owners who already know (or are curious about) Claude and want a local expert to set it up properly.",
    chatgptAngle: "Owner asks ChatGPT about Claude, Claude vs ChatGPT, or how to connect an AI assistant to their business systems.",
    googleAngle: "Claude-specific and \"Claude + Melbourne / consultant\" searches.",
    keywords: [
      "Claude AI consultant Melbourne",
      "Claude specialist agency",
      "Claude for small business",
      "Claude AI setup for business",
      "Anthropic Claude integration",
      "connect Claude to Xero",
      "Claude MCP connector developer",
      "Claude Team plan setup",
      "Claude AI training for staff",
      "AI assistant for small business Melbourne",
    ],
    questions: [
      { q: "Who can set up Claude for my business in Melbourne?", where: "Hero, Why a Melbourne Claude specialist" },
      { q: "Can Claude connect to my accounting, CRM and email?", where: "Hero visual, Services, FAQ" },
      { q: "What would Claude actually do in my business?", where: "Hero example chats, Claude at work" },
      { q: "Is my data safe with Claude?", where: "Why Claude, FAQ" },
      { q: "What does it cost and how do we start?", where: "How we roll Claude out, FAQ" },
    ],
  },
];

const shared = [
  ["Primary CTA", "Complimentary Consultation (Microsoft Bookings, opens in new tab)"],
  ["Secondary CTA", "Get in touch (scrolls to the Contact section with form, address and phone)"],
  ["Form source tag", "\"Small business landing page A / B / C (paid ads)\" and \"Small business landing page D - Claude (paid ads)\" in the contact webhook payload. A gclid on the lead means it came from Google Ads."],
  ["Tracking", "gclid and msclkid stored and sent with the form; OpenAI pixel conversion fires on form submit"],
  ["Indexing", "All landing pages and this matrix are noindex and excluded from the sitemap"],
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(
          () => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          },
          () => undefined,
        );
      }}
      className={`${sans} inline-flex items-center gap-1.5 border border-[#cfd7c5] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#53661c] transition hover:border-[#92ad39]`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy keywords"}
    </button>
  );
}

const rowLabel = `${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`;

export function InternalLandingMatrix() {
  usePageSetup("Landing Page Matrix | Grid Concepts (internal)");
  return (
    <main className="min-h-screen bg-[#f9faf5] text-[#1d2720]">
      <header className="border-b border-[#1d2720]/10 bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Logo />
          <span className={`${sans} bg-[#1d2720] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.14em] text-white`}>Internal · not indexed</span>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-5 pb-6 pt-12 md:px-10">
        <p className={rowLabel}>Paid traffic · ChatGPT Ads &amp; Google Ads</p>
        <h1 className={`${display} mt-4 text-[38px] leading-[1.1] tracking-[-.03em] sm:text-[48px]`}>Small business landing page matrix</h1>
        <p className={`${sans} mt-4 max-w-[70ch] text-[15px] leading-7 text-[#586058]`}>
          Four variants: A to C are the same offer built for different first questions a cold visitor brings; D positions us as Melbourne's Claude specialists. Use the keywords to build ad groups and to keep ad copy matched to the page it lands on.
        </p>
      </section>

      {/* Matrix: one column per variant, one row per attribute */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 md:px-10">
        <div className="overflow-x-auto border border-[#d8ded0] bg-white">
          <table className={`${sans} w-full min-w-[1240px] border-collapse text-left align-top`}>
            <thead>
              <tr className="border-b border-[#d8ded0] bg-[#1d2720] text-white">
                <th className="w-[160px] px-5 py-5 align-bottom"><span className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#b4cc66]">Variant</span></th>
                {variants.map((v) => (
                  <th key={v.code} className="border-l border-white/10 px-5 py-5 align-top">
                    <div className="flex items-baseline gap-3">
                      <span className={`${display} text-[34px] leading-none text-[#92ad39]`}>{v.code}</span>
                      <span className={`${display} text-[22px] font-normal leading-tight`}>{v.name}</span>
                    </div>
                    <a href={v.path} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-normal text-[#cfe28a] hover:text-white">
                      gridconcepts.com.au{v.path} <ExternalLink size={12} />
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[13px] leading-6 text-[#3d473e]">
              <tr className="border-b border-[#e4e8dc]">
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>Context</span></th>
                {variants.map((v) => <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">{v.context}</td>)}
              </tr>
              <tr className="border-b border-[#e4e8dc]">
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>Main focus</span></th>
                {variants.map((v) => <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">{v.focus}</td>)}
              </tr>
              <tr className="border-b border-[#e4e8dc]">
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>Best audience</span></th>
                {variants.map((v) => <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">{v.audience}</td>)}
              </tr>
              <tr className="border-b border-[#e4e8dc]">
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>Channel fit</span></th>
                {variants.map((v) => (
                  <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">
                    <p><b className="font-semibold text-[#1d2720]">ChatGPT Ads:</b> {v.chatgptAngle}</p>
                    <p className="mt-2"><b className="font-semibold text-[#1d2720]">Google Ads:</b> {v.googleAngle}</p>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#e4e8dc]">
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>10 keywords</span></th>
                {variants.map((v) => (
                  <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">
                    <ol className="space-y-1">
                      {v.keywords.map((k, i) => (
                        <li key={k} className="flex gap-2.5">
                          <span className="w-5 shrink-0 text-right tabular-nums text-[#9aa294]">{i + 1}</span>
                          <span className="text-[#1d2720]">{k}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4"><CopyButton text={v.keywords.join("\n")} /></div>
                  </td>
                ))}
              </tr>
              <tr>
                <th className="bg-[#f6f8ef] px-5 py-5 align-top"><span className={rowLabel}>5 key questions answered</span></th>
                {variants.map((v) => (
                  <td key={v.code} className="border-l border-[#e4e8dc] px-5 py-5 align-top">
                    <ol className="space-y-3">
                      {v.questions.map((q, i) => (
                        <li key={q.q} className="flex gap-2.5">
                          <span className="w-5 shrink-0 text-right tabular-nums text-[#9aa294]">{i + 1}</span>
                          <span>
                            <span className="block font-semibold text-[#1d2720]">{q.q}</span>
                            <span className="block text-[12px] text-[#7a8279]">Answered in: {q.where}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`${sans} mt-3 text-[12px] text-[#7a8279]`}>On a narrow screen, scroll the table sideways.</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
        <h2 className={`${display} text-[26px]`}>Shared across all variants</h2>
        <dl className="mt-5 grid border-t border-[#d8ded0]">
          {shared.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-[#d8ded0] py-3.5 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className={rowLabel}>{k}</dt>
              <dd className={`${sans} text-[14px] text-[#3d473e]`}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
