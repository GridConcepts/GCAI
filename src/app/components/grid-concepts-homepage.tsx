import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Download, Menu, RotateCcw, X } from "lucide-react";
import {
  annaAndreevaTeamPortrait,
  antonSedninTeamPortrait,
  artemTeamPortrait,
  danTeamPortrait,
  dimitryPortrait,
  dimitryTeamPortrait,
  heroImage,
  igorApalkovTeamPortrait,
  igorSharapovTeamPortrait,
  valPortrait,
  valTeamPortrait,
} from "../../imports/images";
import svgPaths from "../../imports/GridConceptsHomepageLight/svg-vcinlohbnv";
import { insightPostPath, insightPosts, insightsIndexPath } from "../../data/insights";
import { getStoredClickIds } from "../../lib/click-ids";
const metropoleLogo = "https://metropole.com.au/wp-content/themes/metropole-theme/assets/images/2025/Metropole_primary_logo.svg";
const orthodonticsLogo = "https://orthodonticsaustralia.org.au/wp-content/themes/oa2023/img/logo.svg";
const gmLawLogo = "https://www.gmlaw.com.au/wp-content/uploads/2020/02/GMLaw-logo.svg";

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <div className="relative h-[31px] w-[145px]"><svg className="size-full" viewBox="0 0 195 42" fill="none"><path d={svgPaths.p33e65132} fill={inverse ? "#ffffff" : "#191919"} stroke={inverse ? "#ffffff" : "#191919"} /><path d={svgPaths.p2df517f0} fill="#92AD39" /></svg></div>;
}

function Header({ onCheck }: { onCheck: () => void }) {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[#1d2720]/10 bg-[#f9faf5]/90 backdrop-blur"><div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20"><Logo /><nav className={`${sans} hidden items-center gap-8 text-[12px] font-medium text-[#465047] md:flex`}><a href="#approach" className="hover:text-[#6d8226]">Approach</a><a href="#services" className="hover:text-[#6d8226]">Capabilities</a><a href="#story" className="hover:text-[#6d8226]">Our story</a><a href={insightsIndexPath} className="hover:text-[#6d8226]">Insights</a><a href="/state-of-ai-report" className="hover:text-[#6d8226]">The State of AI Report</a><a href="#contact" className="hover:text-[#6d8226]">Contact</a></nav><button type="button" onClick={onCheck} className={`${sans} hidden border border-[#92ad39] px-4 py-2 text-[12px] font-semibold text-[#53661c] transition hover:bg-[#92ad39] hover:text-white md:block`}>Take the Data Check</button><button type="button" onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle navigation">{open ? <X size={22} /> : <Menu size={22} />}</button></div>{open && <div className={`${sans} border-t border-[#1d2720]/10 bg-[#f9faf5] px-6 py-5 md:hidden`}><nav className="flex flex-col gap-4 text-[14px] text-[#465047]"><a onClick={() => setOpen(false)} href="#approach">Approach</a><a onClick={() => setOpen(false)} href="#services">Capabilities</a><a onClick={() => setOpen(false)} href="#story">Our story</a><a onClick={() => setOpen(false)} href={insightsIndexPath}>Insights</a><a href="/state-of-ai-report">The State of AI Report</a><a onClick={() => setOpen(false)} href="#contact">Contact</a><button onClick={() => { setOpen(false); onCheck(); }} className="w-fit border border-[#92ad39] px-4 py-2 font-semibold text-[#53661c]">Take the Data Check</button></nav></div>}</header>;
}

function Hero({ onCheck }: { onCheck: () => void }) {
  return <section className="bg-[#f9faf5]"><div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 lg:grid-cols-[1.08fr_.92fr]"><div className="flex flex-col justify-between px-6 pb-12 pt-14 sm:px-12 lg:px-20 lg:pb-16 lg:pt-20"><div><p className={`${sans} text-[11px] font-semibold tracking-[.2em] text-[#71872b]`}>DATA, SYSTEMS &amp; AI · MELBOURNE</p><h1 className={`${display} mt-8 max-w-[14ch] text-[43px] leading-[1.08] tracking-[-.035em] text-[#1d2720] sm:text-[58px] lg:text-[66px]`}>Thinking about AI? Integrate your data first.</h1><p className={`${sans} mt-8 max-w-[510px] text-[17px] leading-[1.7] text-[#586058]`}>Most AI projects fail because the business information underneath is a mess. We fix that first - then AI delivers.<br /><br />Since 2010 Grid Concepts has been helping Australian SMEs get their data, systems and marketing strategy working together - so technology creates progress, not more complexity.</p></div><div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center"><button onClick={onCheck} className={`${sans} group inline-flex w-fit items-center gap-4 bg-[#1d2720] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-[#92ad39]`}>Take the complimentary Data Check <ArrowRight size={16} className="transition group-hover:translate-x-1" /></button><p className={`${sans} text-[12px] leading-5 text-[#6b726c]`}>A practical 12-question snapshot.<br />No setup. No obligation.</p></div></div><div className="relative min-h-[460px] overflow-hidden bg-[#d9dfcc] lg:min-h-0"><img src={heroImage} alt="Professional reviewing data on a tablet" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[#263121]/10" /><div className={`${sans} absolute bottom-5 left-5 right-5 bg-[#f9faf5] p-5 shadow-[0_14px_35px_rgba(22,31,22,.18)] sm:bottom-8 sm:left-auto sm:right-8 sm:w-[320px] sm:p-6`}><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold tracking-[.16em] text-[#71872b]">SAMPLE DATA CHECK</p><p className="mt-2 text-[13px] text-[#586058]">Your AI-readiness score</p></div><p className={`${display} text-[36px] leading-none text-[#1d2720]`}>34<span className={`${sans} text-[13px] font-semibold`}>%</span></p></div><div className="mt-5 space-y-3">{[["Data quality","28"],["Systems integration","42"],["Governance","31"],["Your people","46"]].map(([label,value])=><div key={label}><div className="flex justify-between text-[10px] text-[#586058]"><span>{label}</span><span>{value}%</span></div><div className="mt-1.5 h-1 bg-[#e1e5db]"><div className="h-full bg-[#92ad39]" style={{ width: `${value}%` }} /></div></div>)}</div><p className="mt-5 border-t border-[#dfe3d8] pt-4 text-[11px] leading-5 text-[#586058]">Take the check to see where your business stands.</p></div></div></div></section>;
}

function Principle() { return <section id="approach" className="border-y border-[#dfe3d8] bg-white"><div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[.7fr_1.3fr] md:px-12 lg:py-28"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>OUR POINT OF VIEW</p><div><h2 className={`${display} max-w-[18ch] text-[35px] leading-[1.18] tracking-[-.03em] text-[#1d2720] sm:text-[47px]`}>Strong data foundations make the rest possible.</h2><p className={`${sans} mt-8 max-w-[660px] text-[17px] leading-[1.75] text-[#586058]`}>Our point of view is simple: get the data foundation right first. Connected, trusted information gives AI something useful to work with, makes marketing and operational decisions measurable, and creates the single customer view every business is trying to achieve.</p><div className="mt-10 grid gap-5 border-t border-[#dfe3d8] pt-6 sm:grid-cols-3">{[["01","Enable AI to produce quality outputs by setting up the right data foundations first"],["02","Make marketing & operations measurable"],["03","Build a single customer view"]].map(([n,t])=><div key={n}><p className={`${display} text-[26px] text-[#92ad39]`}>{n}</p><p className={`${sans} mt-2 text-[13px] leading-5 text-[#3d473e]`}>{t}</p></div>)}</div></div></div></section>; }

function Story() { return <section id="story" className="bg-[#f1f3eb]"><div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24"><div><div className="relative"><img src={valPortrait} alt="Val Melamed seated at a desk" className="aspect-[4/5] w-full object-cover object-top" /><div className="absolute -bottom-3 -right-3 size-12 bg-[#92ad39]" /></div><blockquote className={`${display} mt-7 border-l-2 border-[#92ad39] pl-5 text-[19px] italic leading-[1.5] text-[#273028]`}>“Grid Concepts is practical, Melbourne-based, and obsessed with the foundations that determine whether AI and data change actually sticks.”<footer className={`${sans} mt-3 text-[10px] font-semibold not-italic tracking-[.14em] text-[#71872b]`}>VAL MELAMED · PARTNER</footer></blockquote></div><div className="flex flex-col justify-center py-6 md:px-6"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>WHY GRID CONCEPTS EXISTS</p><h2 className={`${display} mt-7 max-w-[15ch] text-[35px] leading-[1.16] tracking-[-.03em] text-[#1d2720] sm:text-[45px]`}>Most SMEs are experimenting with AI. Very few have the connected data & people to make it work.</h2><p className={`${sans} mt-7 max-w-[480px] text-[16px] leading-[1.75] text-[#586058]`}>We kept getting questions from our clients about integrating AI into their businesses & the most efficient, risk averse way to do so. Grid Concepts exists to close this gap - with clear thinking, connected systems, and advice built around what a business actually needs.</p><p className={`${sans} mt-5 max-w-[480px] text-[16px] leading-[1.75] text-[#586058]`}>We are a small 8 person team of marketers & technologists who live and breathe data & AI. We believe in forming long lasting partnerships with our clients & therefore big advocates of demonstrating ongoing value, flexibility & pragmatic approach.</p></div></div></section>; }

const services = [
  { number: "I", eyebrow: "START HERE", title: "Data & Technology", text: "The foundation everything else needs. We audit your data quality, map your systems landscape, clean your CRM, and build the integrations that let AI actually function.", items: ["AI-readiness data audit", "CRM cleanup & systems integration", "Data governance framework", "Reporting & dashboard infrastructure"] },
  { number: "II", title: "Digital Strategy & Growth", text: "SEO, performance marketing, and content - rebuilt for how AI engines surface results. We help you rank in the places your clients are actually searching, including ChatGPT and Perplexity.", items: ["SEO & content strategy", "Performance marketing", "AI-era search optimisation", "Lead generation systems"] },
  { number: "III", title: "AI Visibility", text: "Be the brand AI recommends. We track and fix where you appear across ChatGPT, Perplexity, and Google AI Overviews - and build the structured data and authority signals that put you there.", items: ["AI citation tracking & monitoring", "Structured data & schema markup", "EEAT & authority building", "AI Overview optimisation"] },
];

function Services() { return <section id="services" className="bg-white"><div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>WHAT WE DO</p><div className="mt-7 grid gap-8 md:grid-cols-[1fr_.85fr] md:gap-20"><h2 className={`${display} max-w-[15ch] text-[39px] leading-[1.14] tracking-[-.035em] text-[#1d2720] sm:text-[52px]`}>We fix the data first. Then everything else works.</h2><p className={`${sans} max-w-[455px] self-center text-[16px] leading-7 text-[#586058]`}>Most agencies start with the tool. We start with the foundation. Our three service areas are sequenced deliberately - data and systems first, then strategy, then AI visibility. In that order.</p></div><div className="mt-16 grid overflow-hidden border border-[#d8ded0] md:grid-cols-3">{services.map((service, index) => <article key={service.number} className={`flex min-h-[420px] flex-col border-b border-[#d8ded0] p-8 last:border-b-0 md:border-b-0 md:border-r md:p-10 md:last:border-r-0 ${index === 0 ? "bg-[#0d2226] text-white" : "bg-[#fbfcf8]"}`}><div className="flex items-center gap-3"><p className={`${display} text-[30px] leading-none ${index === 0 ? "text-[#9cbd3a]" : "text-[#d2d4cc]"}`}>{service.number}</p>{service.eyebrow && <span className={`${sans} border border-[#9cbd3a] px-2 py-1 text-[10px] font-semibold tracking-[.12em] text-[#b7d052]`}>{service.eyebrow}</span>}</div><h3 className={`${display} mt-8 text-[25px] leading-[1.2] tracking-[-.02em] ${index === 0 ? "text-white" : "text-[#1d2720]"}`}>{service.title}</h3><p className={`${sans} mt-5 text-[14px] leading-6 ${index === 0 ? "text-[#b8c7c6]" : "text-[#586058]"}`}>{service.text}</p><ul className="mt-7 space-y-2.5">{service.items.map((item) => <li key={item} className={`${sans} flex gap-3 text-[12px] leading-5 ${index === 0 ? "text-[#b8c7c6]" : "text-[#657067]"}`}><span className="mt-2 h-px w-3 shrink-0 bg-[#92ad39]" />{item}</li>)}</ul></article>)}</div></div></section>; }

function StateOfAiTeaser() {
  const [active, setActive] = useState(0);
  const signals = [
    { label: "Data foundations", value: 26, detail: "The largest readiness gap: data businesses can trust and use." },
    { label: "Systems integration", value: 43, detail: "Core systems still need to share the customer picture." },
    { label: "People readiness", value: 28, detail: "Training and safe-use guidance determine whether change sticks." },
  ];
  const latestPosts = insightPosts.slice(0, 3);

  return (
    <section id="insights" className="border-t border-[#dfe3d8] bg-[#10252a]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col">
            <p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#b4cc66]`}>GRID CONCEPTS INSIGHTS · JULY 2026</p>
            <h2 className={`${display} mt-6 max-w-[12ch] text-[43px] leading-[1.08] tracking-[-.035em] text-white sm:text-[58px]`}>
              The State of AI for Victorian Small & Medium Business
            </h2>
            <p className={`${sans} mt-8 max-w-[530px] text-[17px] leading-7 text-[#c8d3d0]`}>
              The AI boom is moving from chatbots to digital workers. Our plain-English report shows why reliable data, connected systems, practical governance, and prepared people are the difference between experimentation and results.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/state-of-ai-report" className={`${sans} group inline-flex w-fit items-center gap-3 bg-[#92ad39] px-6 py-4 text-[12px] font-semibold text-[#17220d] transition hover:bg-white`}>
                Explore the full report <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a href={insightsIndexPath} className={`${sans} group inline-flex w-fit items-center gap-3 border border-white/25 px-6 py-4 text-[12px] font-semibold text-white transition hover:border-[#92ad39] hover:text-[#cfe28a]`}>
                Browse all insights <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="border border-white/15 bg-[#0b1b1e] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className={`${sans} text-[10px] font-semibold tracking-[.16em] text-[#b4cc66]`}>SME AI READINESS · 2026</p>
                <p className={`${display} mt-3 text-[31px] text-white`}>The gap is not ambition. It is foundation.</p>
              </div>
              <div className={`${sans} border border-[#92ad39]/50 px-3 py-2 text-[10px] font-semibold tracking-[.12em] text-[#cfe28a]`}>INTERACTIVE SIGNALS</div>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-[1fr_170px]">
              <div className="space-y-5">
                {signals.map((signal, index) => (
                  <button
                    key={signal.label}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`block w-full border-l-2 pl-4 text-left transition ${active === index ? "border-[#92ad39]" : "border-white/15 hover:border-[#b4cc66]"}`}
                  >
                    <div className="flex items-end justify-between gap-4">
                      <p className={`${sans} text-[12px] font-semibold ${active === index ? "text-white" : "text-[#aab8b4]"}`}>{signal.label}</p>
                      <p className={`${display} text-[25px] ${active === index ? "text-[#cfe28a]" : "text-[#899b96]"}`}>{signal.value}%</p>
                    </div>
                    <div className="mt-2 h-1.5 bg-white/10">
                      <div className="h-full bg-[#92ad39] transition-all duration-500" style={{ width: `${active === index ? signal.value : Math.max(signal.value - 12, 10)}%` }} />
                    </div>
                  </button>
                ))}
              </div>
              <a href="/state-of-ai-report" className="flex min-h-[170px] flex-col justify-between border border-white/10 bg-white/[.035] p-5 transition hover:border-[#92ad39]/60">
                <p className={`${display} text-[46px] leading-none text-white`}>
                  {signals[active].value}
                  <span className={`${sans} text-[14px] text-[#b4cc66]`}>%</span>
                </p>
                <p className={`${sans} text-[12px] leading-5 text-[#c8d3d0]`}>{signals[active].detail}</p>
                <p className={`${sans} text-[10px] font-semibold tracking-[.12em] text-[#b4cc66]`}>VIEW IN REPORT →</p>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
              <div className="border-r border-white/10 pr-4">
                <p className={`${display} text-[30px] text-white`}>1%</p>
                <p className={`${sans} mt-1 text-[10px] leading-4 text-[#aab8b4]`}>feel fully ready to run AI reliably at scale</p>
              </div>
              <div className="border-r border-white/10 px-4">
                <p className={`${display} text-[30px] text-white`}>95%</p>
                <p className={`${sans} mt-1 text-[10px] leading-4 text-[#aab8b4]`}>of pilots fail to show measurable financial benefit</p>
              </div>
              <div className="pl-4">
                <p className={`${display} text-[30px] text-white`}>100</p>
                <p className={`${sans} mt-1 text-[10px] leading-4 text-[#aab8b4]`}>days in a practical first-stage roadmap</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#b4cc66]`}>FROM THE INSIGHTS BLOG</p>
              <h3 className={`${display} mt-3 text-[28px] text-white sm:text-[34px]`}>Recent reading</h3>
            </div>
            <a href={insightsIndexPath} className={`${sans} group inline-flex items-center gap-2 text-[12px] font-semibold text-[#cfe28a] transition hover:text-white`}>
              View all insights <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <a
                key={post.slug}
                href={insightPostPath(post.slug)}
                className="group flex flex-col border border-white/12 bg-[#0b1b1e] p-6 transition hover:border-[#92ad39]/55"
              >
                <p className={`${sans} text-[10px] font-semibold tracking-[.14em] text-[#b4cc66]`}>{post.dateLabel}</p>
                <h4 className={`${display} mt-3 text-[22px] leading-[1.2] text-white`}>{post.title}</h4>
                <p className={`${sans} mt-4 text-[13px] leading-6 text-[#aab8b4]`}>{post.description}</p>
                <p className={`${sans} mt-auto pt-6 text-[11px] font-semibold tracking-[.12em] text-[#cfe28a] transition group-hover:text-white`}>
                  READ →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  { client: "Metropole", logo: metropoleLogo, type: "DATA & AI ENABLEMENT", title: "One connected foundation for AI-ready marketing.", text: "Metropole's data lived across fragmented systems, making it difficult to see the full customer picture or activate marketing with confidence. We connected the moving parts, established a clearer data foundation, and introduced practical AI capabilities for marketing teams.", outcome: "Fragmented systems → connected marketing intelligence" },
  { client: "Orthodontics Australia", logo: orthodonticsLogo, type: "DATA & DIGITAL EXPERIENCE", title: "A Finder Tool built on a single source of truth.", text: "Specialist, practice, and location data was spread across disconnected sources. We centralised the information and structured it for a purpose-built Finder Tool-making it easier for patients to find the right orthodontic provider.", outcome: "Specialist, practice & location data → one useful patient journey" },
  { client: "GM Law", logo: gmLawLogo, type: "CRM & MARKETING AUTOMATION", title: "Turning disconnected CRM systems into a marketing engine.", text: "GM Law's client and marketing data was split between Actionstep and Keap. We connected the systems, clarified the data flow, and used the foundation to automate relevant marketing workflows.", outcome: "Actionstep + Keap → connected CRM and automated workflows" },
];

function CaseStudies() { return <section className="border-t border-[#dfe3d8] bg-[#f1f3eb]"><div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>CASE STUDIES</p><div><h2 className={`${display} max-w-[15ch] text-[35px] leading-[1.16] tracking-[-.03em] text-[#1d2720] sm:text-[47px]`}>When the foundations connect, the work moves forward.</h2><p className={`${sans} mt-6 max-w-[560px] text-[16px] leading-7 text-[#586058]`}>Three examples of businesses turning disconnected information into better decisions, more useful tools, and practical marketing momentum.</p></div></div><div className="mt-16 grid gap-5 md:grid-cols-3">{caseStudies.map((study, index) => <article key={study.client} className="flex min-h-[390px] flex-col border border-[#d8ded0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a9bd6a] sm:p-7"><div className="flex items-start justify-between gap-3"><p className={`${sans} text-[10px] font-semibold tracking-[.14em] text-[#71872b]`}>{study.type}</p><span className={`${display} text-[22px] leading-none text-[#92ad39]`}>0{index + 1}</span></div><div className="mt-9 flex h-[58px] items-center"><img src={study.logo} alt={`${study.client} logo`} className="block max-h-[52px] max-w-[165px] object-contain object-left" onError={(event) => { event.currentTarget.style.display = "none"; }} /></div><h3 className={`${display} mt-6 text-[29px] leading-[1.15] tracking-[-.025em] text-[#1d2720]`}>{study.client}</h3><p className={`${sans} mt-4 text-[15px] font-semibold leading-6 text-[#344039]`}>{study.title}</p><p className={`${sans} mt-5 text-[14px] leading-6 text-[#657067]`}>{study.text}</p><div className="mt-auto border-t border-[#dfe3d8] pt-5"><p className={`${sans} text-[12px] leading-5 text-[#52611e]`}>{study.outcome}</p></div></article>)}</div></div></section>; }

function SystemsBand() { return <section className="bg-[#1d2720] px-6 py-16 sm:px-12 md:py-24"><div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 md:grid-cols-[365px_1fr] md:gap-20"><div className="relative mx-auto w-full max-w-[312px] md:mx-0 md:max-w-none"><img src={dimitryPortrait} alt="Dimitry Rybkin, Partner at Grid Concepts" className="aspect-[4/5] w-full object-cover object-top" /><div className="absolute -bottom-4 -left-4 size-12 bg-[#92ad39]" aria-hidden="true" /></div><div className="flex flex-col justify-center"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#b4ca68]`}>DATA FIRST</p><blockquote className={`${display} mt-7 max-w-[620px] text-[31px] italic leading-[1.3] tracking-[-.025em] text-white sm:text-[43px]`}>“Fix the data first-then the AI works, the agents stick, and the results are real.”</blockquote><div className={`${sans} mt-8 flex items-center gap-3 text-[12px] text-[#d3dcc0]`}><span className="h-px w-7 bg-[#92ad39]" /><span><b className="text-[#b4ca68]">Dimitry Rybkin</b> · Partner, Grid Concepts</span></div></div></div></section>; }

function Work({ onCheck }: { onCheck: () => void }) { const steps = [["Start with a Data Check","A concise view of where your data, systems, and AI readiness stand."],["Discovery Call","A complimentary 30-minute conversation about your business and challenges."],["Practical Roadmap","Clear priorities, expert guidance, and the next right moves for your team."]]; return <section className="bg-[#f9faf5]"><div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>HOW WE ENGAGE</p><h2 className={`${display} text-[35px] leading-[1.16] tracking-[-.03em] text-[#1d2720] sm:text-[47px]`}>Focused advice. A path you can use.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{steps.map(([t,d],i)=><div key={t} className="border-t-2 border-[#92ad39] pt-5"><p className={`${sans} text-[11px] text-[#71872b]`}>0{i+1}</p><h3 className={`${display} mt-4 text-[25px] text-[#1d2720]`}>{t}</h3><p className={`${sans} mt-3 text-[14px] leading-6 text-[#586058]`}>{d}</p>{i === 0 && <button type="button" onClick={onCheck} className={`${sans} group mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#657b24] transition hover:text-[#1d2720]`}>Take the Data Check <ArrowRight size={14} className="transition group-hover:translate-x-1" /></button>}{i === 1 && <a href="https://bookings.cloud.microsoft/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled=true" target="_blank" rel="noreferrer" className={`${sans} group mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#657b24] transition hover:text-[#1d2720]`}>Ready to book your Discovery Call? <ArrowRight size={14} className="transition group-hover:translate-x-1" /></a>}</div>)}</div></div></section>; }

const teamMembers = [
  { name: "Val Melamed", role: "Marketing & Strategy Direction", photo: valTeamPortrait },
  { name: "Dimitry Rybkin", role: "Technology & Operations Direction", photo: dimitryTeamPortrait },
  { name: "Igor Sharapov", role: "Campaign Management", photo: igorSharapovTeamPortrait },
  { name: "Anton Sednin", role: "Campaign Management", photo: antonSedninTeamPortrait },
  { name: "Igor Apalkov", role: "Design / UX", photo: igorApalkovTeamPortrait },
  { name: "Artem Arlychenkov", role: "Web Development", photo: artemTeamPortrait },
  { name: "Anna Andreeva", role: "Web Development", photo: annaAndreevaTeamPortrait },
  { name: "Dan Schoukin", role: "Video Production", photo: danTeamPortrait },
];

function Team() { return <section id="team" className="bg-[#f1f3eb]"><div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#71872b]`}>THE TEAM</p><div><h2 className={`${display} max-w-[15ch] text-[35px] leading-[1.16] tracking-[-.03em] text-[#1d2720] sm:text-[47px]`}>The people who make complex work feel practical.</h2><p className={`${sans} mt-6 max-w-[555px] text-[16px] leading-7 text-[#586058]`}>A connected team of strategy, data, technology, campaign, and design specialists-focused on making the next right move clear.</p></div></div><div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">{teamMembers.map((member, index) => <article key={member.name} className="group"><div className="relative overflow-visible"><div className="relative overflow-hidden bg-[#dce2d3]"><img src={member.photo} alt={`${member.name}, ${member.role} at Grid Concepts`} className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" /></div><span className={`absolute -bottom-3 ${index % 2 === 0 ? "-left-3" : "-right-3"} size-8 bg-[#92ad39]`} aria-hidden="true" /></div><h3 className={`${display} mt-6 text-[21px] leading-tight text-[#1d2720]`}>{member.name}</h3><p className={`${sans} mt-2 text-[11px] leading-5 text-[#657067]`}>{member.role}</p></article>)}</div></div></section>; }

function Closing({ onCheck }: { onCheck: () => void }) { return <section id="contact" className="bg-[#92ad39]"><div className="mx-auto flex max-w-[980px] flex-col items-center px-6 py-20 text-center md:py-28"><p className={`${sans} text-[11px] font-semibold tracking-[.18em] text-[#33410e]`}>START WITH CLARITY</p><h2 className={`${display} mt-7 max-w-[16ch] text-[40px] leading-[1.1] tracking-[-.035em] text-[#18200c] sm:text-[56px]`}>What could your business do with a more connected data foundation?</h2><p className={`${sans} mt-7 max-w-[570px] text-[16px] leading-7 text-[#34400f]`}>Take the complimentary Data Check, then book a 30-minute Discovery Call with a Grid Concepts expert to talk through the path forward.</p><button onClick={onCheck} className={`${sans} group mt-10 inline-flex items-center gap-4 bg-[#1d2720] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#1d2720]`}>Begin the Data Check <ArrowRight size={16} className="transition group-hover:translate-x-1" /></button><a href="https://bookings.cloud.microsoft/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled=true" target="_blank" rel="noreferrer" className={`${sans} group mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#283309] underline decoration-[#283309]/60 underline-offset-4 transition hover:text-white hover:decoration-white`}>Ready to book your Discovery Call? <ArrowRight size={14} className="transition group-hover:translate-x-1" /></a></div></section>; }

const questions = [
  ["How reliable is the data your business uses every day?", ["We trust it and keep it clean", "Mostly reliable, with some gaps", "It depends on the system", "We are not sure what to trust"]],
  ["Where does core customer data live?", ["One connected source of truth", "A main system and a few support tools", "Several partly connected systems", "Separate tools and spreadsheets"]],
  ["How often do duplicate records create issues?", ["Rarely", "Occasionally", "Often", "Frequently"]],
  ["How well do your CRM, marketing, sales and service systems connect?", ["Information flows automatically", "Important systems connect", "A few systems connect", "They operate separately"]],
  ["Can you see a customer journey from first enquiry to outcome?", ["Clearly and in real time", "Mostly, with manual reporting", "Only for some channels", "Not as one journey"]],
  ["When systems change, how reliable are your data processes?", ["Tested and documented", "Generally consistent", "Issues emerge afterwards", "It is ad hoc"]],
  ["Who owns the quality of critical business data?", ["Named owners and standards", "A small informal group", "Ownership moves around", "No clear owner"]],
  ["How confidently can you explain how customer data is used?", ["We have clear controls", "We are broadly compliant", "Visibility is limited", "We are unsure"]],
  ["How secure is access to data AI tools would need?", ["Role-based and reviewed", "Mostly controlled", "Controls are inconsistent", "Access is hard to track"]],
  ["What is your organisation's current approach to AI?", ["Clear use cases and guardrails", "Focused pilots", "Independent experiments", "We have not started"]],
  ["How prepared is your team to work with AI tools?", ["Training and guidance are in place", "Some people are confident", "Skills are uneven", "We need a foundation"]],
  ["How easily can you measure an AI initiative's value?", ["Baselines and outcomes are defined", "We can measure key outcomes", "Reporting is difficult", "We would struggle to tell"]],
] as const;

type PillarLevel = "strong" | "developing" | "foundation";

type PillarReport = {
  questions: string;
  questionFocus: string;
  strong: [string, string];
  developing: [string, string];
  foundation: [string, string];
};

const reportCopy: Record<string, PillarReport> = {
  "Data quality": {
    questions: "Questions 1–3",
    questionFocus: "how accurate, organised and easy to find your everyday business information is",
    strong: [
      "Your answers suggest your team can usually rely on the information they use every day. Customer details are kept in a main place, duplicate records are uncommon, and people are less likely to waste time checking whether a number or contact is correct.",
      "Keep it that way by making data housekeeping part of normal business. A quick regular check for duplicates, missing details and changes to the way new records are created will help you keep good information as the business grows."
    ],
    developing: [
      "Your answers suggest that your business has useful customer and business information, but it is not always easy to know which version is right. Some details may be held in more than one place, or the same customer may appear more than once. Your team can probably work around this today, but it takes extra checking and can make reports or new AI tools less reliable.",
      "A good place to start is with the information you use most often—for example, customer contact details, enquiries, sales status or service history. Decide which system is the main place to update each item, then put a simple process in place to spot duplicates and keep key fields complete. You do not need to replace every system to make a noticeable improvement."
    ],
    foundation: [
      "Your answers suggest that people in the business do not always have information they can trust or easily find. When customer details are spread across tools, or duplicates are common, it is easy to make decisions using an old or incomplete picture.",
      "Start small. Pick the customer information that matters most, agree where the correct version should live, and clean up a manageable group of records. That will give your team a better base before you add more reporting, automation or AI."
    ]
  },
  "Systems integration": {
    questions: "Questions 4–6",
    questionFocus: "how well your main business systems share information and support the customer journey",
    strong: [
      "Your answers suggest that the main systems in your business are doing a good job of sharing information. Your team can follow a customer from first enquiry through to the next step without needing to stitch together too many separate reports or spreadsheets.",
      "As you add new tools, keep a simple record of what information moves between systems and who looks after it. This will make it easier to see which new automation or AI ideas will genuinely save time, rather than creating another disconnected tool."
    ],
    developing: [
      "Your answers suggest that some of your key systems work together, but there are still gaps. Your team may need to export reports, copy details from one tool to another, or rely on someone knowing how a process works to see the full customer picture.",
      "Pick one important journey, such as how a new enquiry becomes a customer, and map the steps in plain English. Once you can see where information gets stuck or is copied by hand, you can choose a practical improvement instead of trying to connect every system at once."
    ],
    foundation: [
      "Your answers suggest that your core tools mostly operate on their own. This can leave your team re-entering information, chasing updates and relying on spreadsheets to understand what has happened with a customer or job.",
      "Begin by listing the tools your team uses every day and choose one process that matters most. Work out the basic information that needs to move between each step. This will give you a sensible starting point for improving how your systems work together."
    ]
  },
  "Governance & security": {
    questions: "Questions 7–9",
    questionFocus: "who is responsible for important information, who can access it and how it is used",
    strong: [
      "Your answers suggest that important business information has clear owners and sensible access controls. Your team has a good understanding of who is responsible for keeping data up to date, who needs access, and how customer information should be handled.",
      "Keep your approach simple and current as you try new tools. A short list of approved data sources, access levels and basic AI-use rules can help your team move quickly while keeping customer information protected."
    ],
    developing: [
      "Your answers suggest that your business has some good habits around customer information and access, but a few things may still depend on informal knowledge. This can become difficult when a staff member leaves, a new system is added or a team wants to try a new AI tool.",
      "A useful next step is to name the person responsible for each important set of information and make it easy to review who has access. A short, practical guide on what customer information can and cannot be used in AI tools will also give your team clearer boundaries."
    ],
    foundation: [
      "Your answers suggest that it is not always clear who looks after important information, who can access it, or how it should be used. That can make it hard to introduce new tools with confidence, especially when customer information is involved.",
      "Start with the information that is most important to your customers and your business. Decide who is accountable for it, who genuinely needs access, and the basic rules for keeping it safe. This is a practical first step before sharing that information with new systems or AI tools."
    ]
  },
  "Your people": {
    questions: "Questions 10–12",
    questionFocus: "how clear your team is on using AI, how confident they feel and how you measure whether it helps",
    strong: [
      "Your answers suggest that your team has a clear and practical approach to AI. People have guidance, useful work has been identified, and you have a way to tell whether a new tool is saving time, improving service or helping the business in another meaningful way.",
      "Keep linking AI training to real work rather than using it as a one-off exercise. Sharing what works, what does not and the results you are seeing will help the business build confidence and focus on the tools that make a genuine difference."
    ],
    developing: [
      "Your answers suggest that there is interest and growing confidence in AI, but the experience is not yet the same across the whole business. You may have a few people trying useful tools while others are unsure where to start or how to tell if the effort is paying off.",
      "Choose one or two everyday tasks where AI could help, then agree on what a good result looks like before you begin. Giving the team a simple guide and a clear way to measure the outcome will build confidence more effectively than trying to train everyone at once."
    ],
    foundation: [
      "Your answers suggest that AI is still new or unclear for much of the business. People may be experimenting on their own, unsure what is safe to use, or finding it hard to tell whether a tool is actually helping.",
      "Start with an open conversation about where AI could save time and what information should stay private. Then choose one small, low-risk task to test and decide how you will measure the result. This gives your team a comfortable way to learn before making bigger changes."
    ]
  }
};

const readinessCopy = {
  "Well positioned": {
    intro: "Your score suggests you have a good base for using AI in practical ways. The next step is to focus on the jobs where it can genuinely save time, improve service or help your team make better decisions. If you would value an outside view, you are welcome to book a complimentary Discovery Call to talk through the results—there is no pressure to turn it into a project.",
    closing: "You do not need more technology for the sake of it. Use this report to build on what is already working and tidy up the few areas that could slow you down. If it is useful, a Discovery Call is available to help you sense-check what to focus on next."
  },
  "Building momentum": {
    intro: "Your score suggests you already have some useful building blocks in place, along with a few gaps that could make AI harder to use well. The best next steps are likely to be a handful of practical improvements, not a big AI rollout. If you would like to talk through the options, you are welcome to book a complimentary Discovery Call.",
    closing: "You do not have to fix everything at once. Improving a few key areas where your people, systems and information meet can make future AI projects much easier and more useful. If an outside perspective would help, you can book a Discovery Call to discuss the right order for these steps."
  },
  "Foundation first": {
    intro: "Your score suggests that getting the basics in place will be more valuable than rushing into AI right now. This is not a judgement on your business—it simply shows that clearer information, better-connected processes and shared ways of working will help new technology deliver better results later. If you would like to talk through where to begin, a complimentary Discovery Call is available as a practical conversation, not a sales commitment.",
    closing: "The best next step is to choose one small foundation to improve and build from there. Use this report to decide where that starting point should be. If you would find it helpful, you can book a Discovery Call to talk through the results and possible next steps."
  }
} as const;

const getPillarLevel = (pillarScore: number): PillarLevel => pillarScore >= 70 ? "strong" : pillarScore >= 45 ? "developing" : "foundation";
const getStatus = (pillarScore: number) => pillarScore >= 70 ? "Strong" : pillarScore >= 45 ? "Developing" : "Needs attention";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char] ?? char));

function DataCheck({ close }: { close: () => void }) {
  const [at, setAt] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(12).fill(-1));
  const [done, setDone] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportError, setReportError] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const value = answers[at];
  const scoreFor = (indices: number[]) => Math.round((indices.reduce((sum, index) => sum + (answers[index] < 0 ? 0 : 4 - answers[index]), 0) / (indices.length * 4)) * 100);
  const pillars = [
    { label: "Data quality", score: scoreFor([0, 1, 2]), insight: "The information your business relies on every day." },
    { label: "Systems integration", score: scoreFor([3, 4, 5]), insight: "How well the systems behind your customer journey connect." },
    { label: "Governance & security", score: scoreFor([6, 7, 8]), insight: "Ownership, access, and responsible use of business data." },
    { label: "Your people", score: scoreFor([9, 10, 11]), insight: "Your team's readiness to put AI into useful practice." },
  ];
  const score = Math.round(pillars.reduce((sum, pillar) => sum + pillar.score, 0) / pillars.length);
  const readiness = score >= 75 ? "Well positioned" : score >= 50 ? "Building momentum" : "Foundation first";
  const q = questions[at];
  const restart = () => { setAt(0); setAnswers(Array(12).fill(-1)); setDone(false); setReportOpen(false); setReportSent(false); setReportError(""); setPreviewOpen(false); };

  const buildEmailHtml = (firstName: string, lastName: string, company: string, email: string) => {
    const safeName = escapeHtml(`${firstName} ${lastName}`.trim());
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const overview = readinessCopy[readiness];
    const emailLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="155" height="34" viewBox="0 0 195 42" role="img" aria-label="Grid Concepts"><path d="${svgPaths.p33e65132}" fill="#ffffff" stroke="#ffffff"/><path d="${svgPaths.p2df517f0}" fill="#92AD39"/></svg>`;
    const pillarRows = pillars.map(pillar => {
      const level = getPillarLevel(pillar.score);
      const detail = reportCopy[pillar.label];
      const status = getStatus(pillar.score);
      const barColor = level === "strong" ? "#92ad39" : level === "developing" ? "#bd963f" : "#bd7255";
      return `<tr><td style="padding:24px 0;border-bottom:1px solid #e1e5db;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;padding-right:18px;">
          <p style="margin:0;color:#71872b;font-size:10px;font-weight:700;letter-spacing:.14em;">${detail.questions.toUpperCase()}</p>
          <h2 style="margin:6px 0 3px;color:#1d2720;font-size:20px;font-weight:600;line-height:1.3;">${pillar.label}</h2>
          <p style="margin:0;color:#687269;font-size:12px;line-height:1.5;">Assesses ${detail.questionFocus}.</p>
        </td><td style="width:110px;vertical-align:top;text-align:right;white-space:nowrap;">
          <p style="margin:0;color:#1d2720;font-size:22px;font-weight:600;line-height:1;">${pillar.score}<span style="font-size:11px;color:#687269;">/100</span></p>
          <p style="margin:5px 0 0;color:${barColor};font-size:10px;font-weight:700;letter-spacing:.08em;">${status.toUpperCase()}</p>
        </td></tr></table>
        <div style="margin:14px 0 17px;height:5px;background:#e1e5db;"><div style="height:5px;background:${barColor};width:${pillar.score}%;"></div></div>
        <p style="margin:0 0 12px;color:#3f4a42;font-size:14px;line-height:1.7;">${detail[level][0]}</p>
        <p style="margin:0;color:#3f4a42;font-size:14px;line-height:1.7;">${detail[level][1]}</p>
      </td></tr>`;
    }).join("");

    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Detailed AI Data Check Report</title></head>
<body style="margin:0;padding:0;background:#f2f4ed;font-family:Arial,Helvetica,sans-serif;color:#1d2720;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4ed;padding:32px 12px;"><tr><td align="center"><table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background:#ffffff;">
<tr><td style="background:#1d2720;padding:26px 40px 30px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;">${emailLogo}</td><td style="vertical-align:top;text-align:right;"><p style="margin:3px 0 0;color:#b4cc66;font-size:9px;font-weight:700;letter-spacing:.15em;">DATA &amp; AI READINESS</p></td></tr></table><div style="margin-top:20px;height:1px;background:#ffffff;opacity:.18;"></div><h1 style="margin:18px 0 0;color:#ffffff;font-size:29px;font-weight:400;line-height:1.2;">Your Detailed AI Data Check Report</h1></td></tr>
<tr><td style="background:#10252a;padding:30px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="width:145px;vertical-align:top;"><p style="margin:0;color:#ffffff;font-size:50px;font-weight:400;line-height:1;">${score}<span style="font-size:15px;color:#b4cc66;">/100</span></p><p style="margin:13px 0 0;color:#b4cc66;font-size:10px;font-weight:700;letter-spacing:.12em;">${readiness.toUpperCase()}</p></td><td style="vertical-align:top;"><p style="margin:0;color:#b4cc66;font-size:10px;font-weight:700;letter-spacing:.16em;">AI-READINESS SCORE</p><p style="margin:9px 0 0;color:#ffffff;font-size:18px;line-height:1.45;">${overview.intro}</p></td></tr></table></td></tr>
<tr><td style="padding:24px 0 0;"><p style="margin:0;color:#71872b;font-size:13px;font-weight:700;letter-spacing:.14em;">YOUR FOUR-PILLAR ANALYSIS</p>${pillarRows}</td></tr>
<tr><td style="padding:32px 40px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#f2f5e8;border-left:3px solid #92ad39;padding:22px 24px;"><p style="margin:0;color:#1d2720;font-size:15px;line-height:1.7;">${overview.closing}</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:17px;"><tr><td style="vertical-align:middle;"><a href="https://outlook.office.com/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled" style="display:inline-block;background:#1d2720;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:.04em;padding:12px 18px;text-decoration:none;">Book a Discovery Call →</a></td><td style="vertical-align:middle;text-align:right;padding-left:16px;"><p style="margin:0;color:#586058;font-size:11px;line-height:1.5;">Prefer to talk it through?<br/><a href="tel:1300976425" style="color:#52631e;font-size:13px;font-weight:700;text-decoration:none;">Call 1300 976 425</a></p></td></tr></table></td></tr></table></td></tr>
<tr><td style="padding:20px 40px 28px;"><div style="border-top:1px solid #e1e5db;padding-top:17px;"><p style="margin:0 0 6px;color:#71872b;font-size:9px;font-weight:700;letter-spacing:.14em;">HOW YOUR SCORE IS CALCULATED</p><p style="margin:0;color:#687269;font-size:11px;line-height:1.55;">Your answers are grouped into four areas: your information, your systems, how safely information is handled, and how ready your team is to use AI. Each answer is given a score, then the four areas are averaged to give your overall result. This is a helpful guide to where you are today, not a formal audit.</p></div></td></tr>
<tr><td style="background:#1d2720;padding:24px 40px;"><p style="margin:0;color:#d5dbd0;font-size:11px;line-height:1.6;">Prepared for ${safeName || "you"} at ${safeCompany || "your business"}. Grid Concepts Pty Ltd · Melbourne, Australia · <a href="https://gridconcepts.com.au" style="color:#b4cc66;">gridconcepts.com.au</a></p><p style="margin:7px 0 0;color:#8f978b;font-size:10px;">Requested by ${safeEmail}. This email contains a personalised Data Check summary.</p></td></tr>
</table></td></tr></table></body></html>`;
  };

  const downloadPreviewHtml = () => {
    const html = buildEmailHtml("Jordan", "Taylor", "Example Business", "jordan@example.com");
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "grid-concepts-ai-data-check-email.html";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const submitReportRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReportSubmitting(true);
    setReportError("");
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "");
    const lastName = String(formData.get("lastName") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const WEBHOOK = "https://hook.eu2.make.com/vor5nln2rgelwqub1bpwc2jc7vqmlll8";
    const { gclid, msclkid } = getStoredClickIds();
    const payload = {
      firstName, lastName, company, email,
      website: String(formData.get("website") ?? ""),
      marketingConsent: formData.get("marketingConsent") === "on",
      gclid, msclkid,
      overallScore: score,
      dataQualityScore: pillars[0].score,
      systemsIntegrationScore: pillars[1].score,
      governanceScore: pillars[2].score,
      peopleScore: pillars[3].score,
      readiness,
      quizAnswers: answers,
      email_html: buildEmailHtml(firstName, lastName, company, email),
    };
    console.log("[DataCheck] Submitting to webhook:", WEBHOOK);
    console.log("[DataCheck] Payload:", payload);
    try {
      const response = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((networkError: unknown) => {
        const msg = networkError instanceof Error ? networkError.message : String(networkError);
        console.error("[DataCheck] Network/CORS error:", networkError);
        throw new Error(`Network error — the request could not reach Make.com. This is usually a CORS block or connectivity issue.\n\nDetail: ${msg}\n\nCheck the browser Console (F12 → Console) for more.`);
      });
      console.log("[DataCheck] Response status:", response.status, response.statusText);
      const responseText = await response.text().catch(() => "(could not read response body)");
      console.log("[DataCheck] Response body:", responseText);
      if (!response.ok) {
        throw new Error(`Webhook returned an error.\n\nStatus: ${response.status} ${response.statusText}\nBody: ${responseText || "(empty)"}\n\nCheck your Make.com scenario is active and the webhook module is listening.`);
      }
      console.log("[DataCheck] Success — webhook accepted the submission.");
      setReportSent(true);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error("[DataCheck] Submission failed:", msg);
      setReportError(msg);
    } finally {
      setReportSubmitting(false);
    }
  };

  return <><div className={`${sans} fixed inset-0 z-[100] flex items-end bg-[#1d2720]/50 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5`} role="dialog" aria-modal="true" aria-label="Complimentary Data Check"><div className="max-h-[94vh] w-full max-w-[960px] overflow-auto bg-[#f9faf5] shadow-2xl"><div className="flex items-center justify-between border-b border-[#dfe3d8] px-6 py-5"><div className="flex items-center gap-3"><span className="size-2 rounded-full bg-[#92ad39]" /><p className="text-[10px] font-semibold tracking-[.17em] text-[#71872b]">COMPLIMENTARY DATA CHECK</p></div><button type="button" onClick={close} aria-label="Close"><X size={20} /></button></div>{done ? <div className="px-6 py-9 sm:px-10 sm:py-11"><div className="grid gap-8 bg-[#10252a] p-7 text-white md:grid-cols-[.82fr_1.18fr] sm:p-9"><div><p className={`${display} text-[62px] leading-none`}>{score}<span className={`${sans} text-[17px] text-[#aac75c]`}> /100</span></p><p className={`${sans} mt-4 inline-flex bg-[#bd513f] px-3 py-1.5 text-[10px] font-semibold tracking-[.12em]`}>{readiness.toUpperCase()}</p></div><div><p className={`${sans} text-[11px] font-semibold tracking-[.16em] text-[#b4cc66]`}>YOUR AI-READINESS ANALYSIS</p><h2 className={`${display} mt-3 max-w-[18ch] text-[30px] leading-[1.15]`}>{score >= 50 ? "You have useful building blocks. Now connect them." : "Your foundations need attention before AI can deliver."}</h2><p className="mt-4 max-w-[520px] text-[14px] leading-6 text-[#c5d0ce]">This snapshot shows where to focus first. Your results point to practical opportunities across data, systems, governance, and the people who make change stick.</p></div></div><div className="mt-6 grid gap-4 sm:grid-cols-2">{pillars.map((pillar) => { const label = getStatus(pillar.score); return <div key={pillar.label} className="border border-[#dfe3d8] bg-white p-5"><div className="flex items-start justify-between gap-4"><div><p className={`${display} text-[19px] text-[#1d2720]`}>{pillar.label}</p><p className="mt-1 max-w-[230px] text-[11px] leading-4 text-[#687269]">{pillar.insight}</p></div><p className="shrink-0 text-[12px] font-semibold text-[#71872b]">{pillar.score}% · {label}</p></div><div className="mt-5 h-1.5 bg-[#e1e5db]"><div className={`h-full ${pillar.score >= 70 ? "bg-[#92ad39]" : pillar.score >= 45 ? "bg-[#bd963f]" : "bg-[#bd7255]"}`} style={{ width: `${pillar.score}%` }} /></div></div>})}</div><div className="mt-6 grid gap-5 md:grid-cols-2"><div className="bg-[#10252a] p-7 text-white"><p className="text-[10px] font-semibold tracking-[.16em] text-[#b4cc66]">NEXT STEP</p><h3 className={`${display} mt-4 text-[27px] leading-tight`}>Book your complimentary Discovery Call</h3><p className="mt-4 text-[14px] leading-6 text-[#c5d0ce]">Spend 30 minutes with a Grid Concepts expert discussing your challenges, systems, data, and the clearest path forward.</p><a href="https://outlook.office.com/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 bg-[#92ad39] px-5 py-3 text-[12px] font-semibold text-[#17220d] transition hover:bg-[#b4cc66]">Book your Discovery Call <ArrowRight size={15} /></a></div><div className="border border-[#dfe3d8] bg-[#fffefb] p-7"><p className="text-[10px] font-semibold tracking-[.16em] text-[#71872b]">DETAILED AI DATA CHECK REPORT</p><h3 className={`${display} mt-4 text-[27px] leading-tight text-[#1d2720]`}>Get your detailed analysis</h3><p className="mt-4 text-[14px] leading-6 text-[#586058]">Receive your full four-pillar results and a practical, prioritised action plan.</p>{reportSent ? <div className="mt-6 border-l-2 border-[#92ad39] bg-[#f2f5e8] p-4 text-[13px] leading-5 text-[#405016]">Thank you—your detailed AI Data Check report is on its way.</div> : reportOpen ? <form onSubmit={submitReportRequest} className="mt-6 grid gap-3"><div className="grid gap-3 sm:grid-cols-2"><input required name="firstName" placeholder="First name" className="border border-[#cfd7c5] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#92ad39]" /><input required name="lastName" placeholder="Last name" className="border border-[#cfd7c5] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#92ad39]" /></div><input required name="company" placeholder="Company name" className="border border-[#cfd7c5] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#92ad39]" /><input required type="email" name="email" placeholder="Work email" className="border border-[#cfd7c5] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#92ad39]" /><input required type="url" name="website" placeholder="Website (e.g. yourcompany.com.au)" className="border border-[#cfd7c5] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#92ad39]" /><label className="flex items-start gap-2 text-[11px] leading-4 text-[#586058]"><input required name="marketingConsent" type="checkbox" className="mt-0.5 accent-[#92ad39]" />I agree to receive my requested report and relevant communications from Grid Concepts. I can unsubscribe at any time.</label>{reportError && <pre role="alert" className="whitespace-pre-wrap rounded border border-[#e8b4ac] bg-[#fdf2f0] p-3 text-[11px] leading-5 text-[#a74436]">{reportError}</pre>}<button type="submit" disabled={reportSubmitting} className="mt-1 inline-flex items-center justify-center gap-2 bg-[#1d2720] px-5 py-3 text-[12px] font-semibold text-white hover:bg-[#52631e] disabled:cursor-not-allowed disabled:opacity-60">{reportSubmitting ? "Sending your request..." : "Get my detailed report"} <ArrowRight size={15} /></button></form> : <button type="button" onClick={() => setReportOpen(true)} className="mt-6 inline-flex items-center gap-3 border border-[#1d2720] px-5 py-3 text-[12px] font-semibold text-[#1d2720] transition hover:bg-[#1d2720] hover:text-white">Get your detailed AI Data Check report <ArrowRight size={15} /></button>}</div></div><button type="button" onClick={restart} className="mx-auto mt-8 flex items-center gap-2 text-[12px] font-semibold text-[#637827]"><RotateCcw size={14} /> Take the check again</button></div> : <div className="px-6 py-8 sm:px-12 sm:py-10"><div className="flex justify-between text-[11px] font-semibold tracking-[.1em] text-[#71872b]"><span>QUESTION {at + 1} / 12</span><span>{answers.filter(answer => answer >= 0).length} ANSWERED</span></div><div className="mt-3 h-px bg-[#dfe3d8]"><div className="h-full bg-[#92ad39] transition-all" style={{ width: `${((at + 1) / 12) * 100}%` }} /></div><p className="mt-8 text-[10px] font-semibold tracking-[.18em] text-[#71872b]">DATA &amp; AI READINESS</p><h2 className={`${display} mt-4 max-w-[560px] text-[29px] leading-[1.2] text-[#1d2720] sm:text-[36px]`}>{q[0]}</h2><div className="mt-7 space-y-2">{q[1].map((answer, index) => <button key={answer} type="button" onClick={() => { const next = [...answers]; next[at] = index; setAnswers(next); }} className={`flex w-full items-center gap-4 border px-4 py-4 text-left text-[14px] transition ${value === index ? "border-[#92ad39] bg-[#eef2df]" : "border-[#dfe3d8] bg-white hover:border-[#a7bd61]"}`}><span className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] ${value === index ? "border-[#92ad39] bg-[#92ad39] text-white" : "border-[#c8d0bd] text-[#71872b]"}`}>{value === index ? <Check size={14} /> : String.fromCharCode(65 + index)}</span>{answer}</button>)}</div><div className="mt-8 flex justify-between border-t border-[#dfe3d8] pt-5"><button type="button" onClick={() => setAt(Math.max(0, at - 1))} disabled={at === 0} className="text-[12px] font-semibold text-[#586058] disabled:opacity-30">Back</button><button type="button" disabled={value < 0} onClick={() => at === 11 ? setDone(true) : setAt(at + 1)} className="inline-flex items-center gap-2 bg-[#1d2720] px-5 py-3 text-[12px] font-semibold text-white disabled:opacity-30">{at === 11 ? "See my analysis" : "Continue"}<ArrowRight size={15} /></button></div></div>}</div></div>{previewOpen && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#10252a]/70 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label="Detailed AI Data Check report email preview"><div className="flex h-[92vh] w-full max-w-[760px] flex-col overflow-hidden bg-[#f2f4ed] shadow-2xl"><div className="flex items-center justify-between border-b border-[#dfe3d8] bg-[#1d2720] px-5 py-4 text-white"><div><p className="text-[10px] font-semibold tracking-[.16em] text-[#b4cc66]">EMAIL PREVIEW</p><p className={`${display} mt-1 text-[18px]`}>Detailed AI Data Check Report</p></div><div className="flex items-center gap-4"><button type="button" onClick={downloadPreviewHtml} className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#b4cc66] transition hover:text-white"><Download size={15} /> Download HTML</button><button type="button" onClick={() => setPreviewOpen(false)} aria-label="Close email preview" className="text-white transition hover:text-[#b4cc66]"><X size={20} /></button></div></div><iframe title="Detailed AI Data Check report preview" sandbox="" srcDoc={buildEmailHtml("Jordan", "Taylor", "Example Business", "jordan@example.com")} className="min-h-0 flex-1 bg-[#f2f4ed]" /></div></div>}</>;
}

const contactSolutions = [
  { label: "Complimentary 30min Discovery Call", value: "30 min discovery call" },
  { label: "AI Pilot for my company", value: "AI pilot" },
  { label: "AI consulting & a roadmap", value: "AI consultancy and roadmap" },
  { label: "AI Data foundation", value: "AI data foundation" },
  { label: "Custom AI integration project", value: "Custom AI integration project" },
  { label: "AI first website rebuild", value: "AI first website rebuild" },
  { label: "AI Search visibility / SEO / GEO", value: "AI search visibility" },
];

const contactIndustries = [
  { label: "Real Estate", value: "Real estate" },
  { label: "Legal", value: "Legal" },
  { label: "Multi-location professional services practice", value: "Multi location professional practice" },
  { label: "Other", value: "Other" },
];

const contactSteps = [
  "We review your message and research your business",
  "We schedule a complementary 30-minute Discovery Call",
  "Following the call - we will present an AI implementation plan",
  "You decide if it's a fit - no pressure",
];

const CONTACT_WEBHOOK = "https://hook.eu2.make.com/335wsoqp2hh64izx1pfppbg02y7ecjl2";

function ContactField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className={`${sans} text-[13px] font-medium text-[#1d2720]`}>{label}</span>
      {children}
    </label>
  );
}

const contactFieldClass = `${sans} border border-[#cfd7c5] bg-white px-3.5 py-3 text-[14px] text-[#1d2720] outline-none transition placeholder:text-[#93998d] focus:border-[#92ad39]`;

function ContactMeta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>{label}</p>
      <div className={`${sans} mt-1.5 text-[13px] leading-[1.6] text-[#3d473e]`}>{children}</div>
    </div>
  );
}

function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    const { gclid, msclkid } = getStoredClickIds();
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      solution: String(formData.get("solution") ?? ""),
      industry: String(formData.get("industry") ?? ""),
      message: String(formData.get("message") ?? ""),
      source: "GCAI Website Contact Section",
      page_url: window.location.href,
      gclid,
      msclkid,
    };
    try {
      const response = await fetch(CONTACT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status} ${response.statusText}`);
      setSubmitted(true);
    } catch (submitError) {
      const msg = submitError instanceof Error ? submitError.message : String(submitError);
      console.error("[ContactSection] Submission failed:", msg);
      setError("Something went wrong sending your message. Please try again, or call us directly on 1300 976 426.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-6 py-20 md:grid-cols-[1fr_.78fr] md:px-12 md:py-28">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className={`${display} max-w-[19ch] text-[35px] leading-[1.16] tracking-[-.03em] text-[#1d2720] sm:text-[45px]`}>
              Not sure where to start with AI &amp; just want to talk to a human being?
            </h2>
            <p className={`${sans} max-w-[46ch] text-[16px] leading-[1.7] text-[#586058]`}>
              Let&rsquo;s have a complementary 30min Discovery Call about your business &amp; your plans for AI. We&rsquo;ll also review your current workflows and pinpoint where AI can save time and drive revenue.
            </p>
            <p className={`${sans} max-w-[46ch] text-[16px] leading-[1.7] text-[#586058]`}>
              <a
                href="https://bookings.cloud.microsoft/book/YourComplimentaryDiscoveryCall@gridconcepts.com.au/?ismsaljsauthenabled=true"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#52631e] underline decoration-[#92ad39]/50 underline-offset-4 transition hover:text-[#1d2720]"
              >
                Grab a time on the calendar now
              </a>{" "}
              or request a call back via the form below and we&rsquo;ll reply within one business day.
            </p>
          </div>
          {submitted ? (
            <div className={`${sans} border-l-2 border-[#92ad39] bg-[#f2f5e8] p-5 text-[14px] leading-6 text-[#405016]`}>
              Thanks — your message is on its way to us. We&rsquo;ll reply within one business day.
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <ContactField label="Name">
                  <input required type="text" name="name" placeholder="Your name" className={contactFieldClass} />
                </ContactField>
                <ContactField label="Email">
                  <input required type="email" name="email" placeholder="you@company.com" className={contactFieldClass} />
                </ContactField>
                <ContactField label="Phone">
                  <input type="tel" name="phone" placeholder="Mobile or landline" className={contactFieldClass} />
                </ContactField>
                <ContactField label="Company">
                  <input type="text" name="company" placeholder="Your company" className={contactFieldClass} />
                </ContactField>
                <ContactField label="Interested in">
                  <select name="solution" defaultValue="" className={contactFieldClass}>
                    <option value="">Select a solution (optional)</option>
                    {contactSolutions.map((solution) => (
                      <option key={solution.value} value={solution.value}>{solution.label}</option>
                    ))}
                  </select>
                </ContactField>
                <ContactField label="Your industry">
                  <select name="industry" defaultValue="" className={contactFieldClass}>
                    <option value="">Select your industry (optional)</option>
                    {contactIndustries.map((industry) => (
                      <option key={industry.value} value={industry.value}>{industry.label}</option>
                    ))}
                  </select>
                </ContactField>
              </div>
              <ContactField label="Message">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business and what you'd like to automate..."
                  className={`${contactFieldClass} resize-y`}
                />
              </ContactField>
              {error && (
                <p className={`${sans} text-[13px] leading-5 text-[#a74436]`} role="alert">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className={`${sans} inline-flex h-12 w-full items-center justify-center gap-2 bg-[#1d2720] text-[13px] font-semibold text-white transition hover:bg-[#92ad39] disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {submitting ? "Sending..." : "Request a callback"}
              </button>
            </form>
          )}
        </div>
        <div className="border border-[#dfe3d8] bg-[#fbfcf8] p-7 sm:p-8">
          <h3 className={`${display} text-[22px] text-[#1d2720]`}>Get in Touch</h3>
          <p className={`${sans} mt-3 text-[13px] leading-[1.6] text-[#586058]`}>
            We typically respond within 24 hours. For urgent inquiries, call us directly on <b className="font-semibold text-[#1d2720]">1300 976 426</b>.
          </p>
          <div className="mt-7 flex flex-col gap-5">
            <ContactMeta label="PREFER A FACE TO FACE MEETING?">
              <a href="mailto:hello@gridconcepts.com.au" className="text-[#3d473e] transition hover:text-[#52631e]">
                We can come to your office in Melbourne or we can meet either at a Chadstone or Moorabbin location
              </a>
            </ContactMeta>
            <ContactMeta label="OUR OFFICE">Level 2, 1341 Dandenong Rd, Chadstone, VIC, 3148, Australia</ContactMeta>
            <ContactMeta label="RESPONSE TIME">Within 24 hours</ContactMeta>
          </div>
          <div className="mt-7 border-t border-[#dfe3d8] pt-7">
            <h4 className={`${sans} text-[14px] font-semibold text-[#1d2720]`}>What Happens Next?</h4>
            <ol className="mt-4 flex flex-col gap-3">
              {contactSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className={`${sans} mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#92ad39]/10 text-[11px] font-semibold text-[#52631e]`}>
                    {index + 1}
                  </span>
                  <span className={`${sans} text-[13px] leading-[1.6] text-[#3d473e]`}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() { return <footer className="bg-[#1d2720]"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-12 sm:flex-row sm:items-end md:px-20"><div><Logo inverse /><p className={`${sans} mt-5 max-w-[310px] text-[12px] leading-5 text-[#a9b0a4]`}>Data, systems and digital growth for Australian businesses ready to make change stick.</p></div><div className="sm:text-right"><a href="tel:1300976425" className={`${display} text-[24px] tracking-[.03em] text-white transition hover:text-[#b4cc66]`}>1300 976 425</a><address className={`${sans} mt-4 text-[12px] leading-5 not-italic text-[#a9b0a4]`}>6D/596 North Rd,<br />Ormond, Victoria, 3204</address><p className={`${sans} mt-5 text-[11px] text-[#8f978b]`}>© 2026 Grid Concepts Pty Ltd. Melbourne, Australia.</p></div></div></footer>; }

export function GridConceptsHomepage() { const [checking,setChecking]=useState(false); return <main className="min-h-screen bg-[#f9faf5]"><Header onCheck={()=>setChecking(true)} /><Hero onCheck={()=>setChecking(true)} /><Principle /><Story /><Services /><StateOfAiTeaser /><CaseStudies /><SystemsBand /><Work onCheck={()=>setChecking(true)} /><Team /><Closing onCheck={()=>setChecking(true)} /><ContactSection /><Footer />{checking && <DataCheck close={()=>setChecking(false)} />}</main>; }
