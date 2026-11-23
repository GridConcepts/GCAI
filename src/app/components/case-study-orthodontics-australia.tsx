import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Menu, X } from "lucide-react";
import { Logo } from "./grid-concepts-homepage";

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";
const orthodonticsLogo = "https://orthodonticsaustralia.org.au/wp-content/themes/oa2023/img/logo.svg";

const navLinks = [
  ["Approach", "/#approach"],
  ["Capabilities", "/#services"],
  ["Our story", "/#story"],
  ["Case Studies", "/#case-studies"],
  ["Insights", "/insights/"],
  ["The State of AI Report", "/state-of-ai-report"],
  ["Contact", "/#get-in-touch"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#1d2720]/10 bg-[#f9faf5]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
        <a href="/" aria-label="Grid Concepts home"><Logo /></a>
        <nav className={`${sans} hidden items-center gap-6 text-[12px] font-medium text-[#465047] md:flex`}>
          {navLinks.map(([label, href]) => <a key={label} href={href} className="hover:text-[#6d8226]">{label}</a>)}
        </nav>
        <a href="/#contact" className={`${sans} hidden border border-[#92ad39] px-4 py-2 text-[12px] font-semibold text-[#53661c] transition hover:bg-[#92ad39] hover:text-white md:block`}>Take the Data Check</a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {open && (
        <nav className={`${sans} flex flex-col gap-4 border-t border-[#dfe3d8] bg-[#f9faf5] px-6 py-5 text-[13px] md:hidden`}>
          {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="/#contact" className="w-fit border border-[#92ad39] px-4 py-2 font-semibold text-[#53661c]">Take the Data Check</a>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`${sans} text-[11px] font-semibold tracking-[.18em] ${light ? "text-[#b4cc66]" : "text-[#71872b]"}`}>{children}</p>;
}

function Node({ label, sub, tone = "plain" }: { label: string; sub?: string; tone?: "plain" | "accent" | "broken" | "dark" }) {
  const styles = {
    plain: "border-[#d8ded0] bg-white text-[#1d2720]",
    accent: "border-[#92ad39] bg-[#f1f5e2] text-[#1d2720]",
    broken: "border-dashed border-[#c8a27a] bg-[#faf3ea] text-[#6b5233]",
    dark: "border-[#1d2720] bg-[#1d2720] text-white",
  }[tone];
  return (
    <div className={`${sans} border px-4 py-3 text-center md:flex-1 ${styles}`}>
      <p className="text-[13px] font-semibold leading-5">{label}</p>
      {sub && <p className="mt-0.5 text-[11px] leading-4 opacity-70">{sub}</p>}
    </div>
  );
}

function Connector({ broken = false, vertical = false }: { broken?: boolean; vertical?: boolean }) {
  const line = `2px ${broken ? "dashed" : "solid"} ${broken ? "#c8a27a" : "#92ad39"}`;
  return vertical ? (
    <div className="mx-auto h-7 w-px" style={{ borderLeft: line }} />
  ) : (
    <>
      <div className="mx-auto h-5 w-px md:hidden" style={{ borderLeft: line }} />
      <div className="my-auto hidden h-px w-8 shrink-0 md:block" style={{ borderTop: line }} />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-[#92ad39] pl-5">
      <p className={`${display} text-[34px] leading-none tracking-[-.03em] text-[#1d2720]`}>{value}</p>
      <p className={`${sans} mt-2 text-[12px] leading-5 text-[#657067]`}>{label}</p>
    </div>
  );
}

const problems = [
  "The old directory modelled orthodontists only - there was no separate concept of a practice.",
  "An orthodontist working across multiple clinics appeared as multiple, nearly identical listings instead of one.",
  "Patients comparing results in their area had to wade through duplicates of the same specialist to find genuinely different options.",
  "Those near-identical listings were also duplicate content from a search-engine standpoint - a problem for the exact pages meant to bring patients in.",
];

const wins = [
  ["One clean listing per specialist", "An orthodontist working from three clinics now appears once, with all three locations listed underneath - not three near-identical cards."],
  ["Real location search", "Google's geolocation API means a patient searching from their own postcode sees genuinely nearby practices, ranked by distance."],
  ["National coverage", "Hundreds of specialist practices across every state, all on one properly structured directory."],
];

export function OrthodonticsAustraliaCaseStudy() {
  return (
    <div className="min-h-screen bg-[#f9faf5] text-[#1d2720]">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-[#dfe3d8]">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-12 md:py-24">
            <a href="/#case-studies" className={`${sans} inline-flex items-center gap-2 text-[12px] font-semibold text-[#53661c] hover:text-[#6d8226]`}><ArrowLeft size={14} /> All case studies</a>
            <div className="mt-10 grid gap-12 md:grid-cols-[1.35fr_.65fr] md:items-end">
              <div>
                <Eyebrow>CASE STUDY - DATA &amp; DIGITAL EXPERIENCE</Eyebrow>
                <h1 className={`${display} mt-6 text-[40px] leading-[1.1] tracking-[-.035em] sm:text-[54px]`}>Orthodontics Australia: a Finder Tool built on a single source of truth.</h1>
                <p className={`${sans} mt-7 max-w-[600px] text-[17px] leading-7 text-[#586058]`}>The old directory modelled orthodontists, not practices - so one specialist working across multiple clinics showed up as several near-identical, confusing listings. We rebuilt it from the ground up.</p>
              </div>
              <div className="border border-[#d8ded0] bg-white p-7">
                <img src={orthodonticsLogo} alt="Orthodontics Australia logo" className="h-[42px] max-w-[190px] object-contain object-left" />
                <dl className={`${sans} mt-7 space-y-4 text-[13px]`}>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">CLIENT</dt><dd className="mt-1 text-[#344039]">Orthodontics Australia - the public-facing consumer arm of the Australian Society of Orthodontists</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">FOCUS</dt><dd className="mt-1 text-[#344039]">Connecting the public with ASO member orthodontists and their practices nationwide</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">STACK</dt><dd className="mt-1 text-[#344039]">Custom-built Laravel application, Google Geolocation API</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">WEBSITE</dt><dd className="mt-1"><a href="https://finder.orthodonticsaustralia.org.au" target="_blank" rel="noreferrer" className="text-[#53661c] underline underline-offset-4">finder.orthodonticsaustralia.org.au</a></dd></div>
                </dl>
              </div>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              <Stat value="340%" label="growth in visits to practices referred from the Finder" />
              <Stat value="Hundreds" label="of specialist practices covered nationally" />
              <Stat value="0" label="duplicate listings for a specialist at multiple practices" />
            </div>
          </div>
        </section>

        {/* About + situation */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:px-12 md:py-24">
            <Eyebrow>THE SITUATION</Eyebrow>
            <div className={`${sans} space-y-5 text-[16px] leading-7 text-[#586058]`}>
              <p>Orthodontics Australia is the public-facing consumer arm of the Australian Society of Orthodontists, the peak body representing specialist orthodontists across the country. Its "Find an Orthodontist" tool is the main way patients looking for genuine specialist care - rather than a general dentist offering orthodontic treatment - find an ASO member near them.</p>
              <p>The tool that was doing that job had a structural problem baked into its data model, not just its design. Grid Concepts came in to rebuild it properly, as a dedicated application rather than a patch on the old one.</p>
            </div>
          </div>
        </section>

        {/* Challenge 1 */}
        <section className="bg-[#f1f3eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 01</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[20ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>One specialist, multiple clinics, multiple identical cards.</h2>
            <p className={`${sans} mt-6 max-w-[640px] text-[16px] leading-7 text-[#586058]`}>The previous Finder only had one kind of record: the orthodontist. It had no separate concept of a practice - so when a specialist worked from more than one clinic, the only way to represent that was to duplicate them.</p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="border border-[#d8ded0] bg-white p-7">
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#9a7442]`}>WHAT WAS BROKEN</p>
                <ul className={`${sans} mt-5 space-y-4 text-[14px] leading-6 text-[#465047]`}>
                  {problems.map((item) => <li key={item} className="flex gap-3"><X size={16} className="mt-1 shrink-0 text-[#c8a27a]" />{item}</li>)}
                </ul>
              </div>
              <div className="border border-[#d8ded0] bg-white p-7">
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#9a7442]`}>BEFORE</p>
                <div className="mt-6 flex flex-col">
                  <Node label="Dr Example, Orthodontist" sub="One real specialist" tone="plain" />
                  <Connector vertical broken />
                  <div className="grid grid-cols-3 gap-3">
                    <Node label="Listing: Clinic A" sub="Same details" tone="broken" />
                    <Node label="Listing: Clinic B" sub="Same details" tone="broken" />
                    <Node label="Listing: Clinic C" sub="Same details" tone="broken" />
                  </div>
                  <Connector vertical broken />
                  <Node label="3 near-identical results, 1 real specialist" tone="broken" />
                </div>
              </div>
            </div>

            <div className="mt-5 border border-[#d8ded0] bg-white p-7 md:p-9">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>WHAT WE DID</p>
              <p className={`${sans} mt-4 max-w-[760px] text-[15px] leading-7 text-[#586058]`}>We designed and built an entirely new tool as a separate Laravel application, modelling orthodontists and practices as distinct, properly related records - one specialist can link to many practices, and one practice can host many specialists. A search now surfaces one listing per specialist, with every location they work from underneath it.</p>
              <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
                <Node label="Dr Example, Orthodontist" sub="One record" tone="plain" />
                <Connector />
                <Node label="Linked practices" sub="Clinic A, B, C" tone="accent" />
                <Connector />
                <Node label="One Finder listing" sub="All locations in one place" tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 2 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 02</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[22ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>A real search, not a static list.</h2>
            <p className={`${sans} mt-6 max-w-[680px] text-[16px] leading-7 text-[#586058]`}>Fixing the data model only matters if patients can actually find a nearby specialist quickly. The Finder needed to cover hundreds of practices across the whole of Australia and return genuinely relevant, nearby results - not an alphabetical list to scroll through.</p>

            <div className="mt-12 border border-[#d8ded0] bg-[#f9faf5] p-7 md:p-9">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>WHAT WE DID</p>
              <p className={`${sans} mt-4 max-w-[760px] text-[15px] leading-7 text-[#586058]`}>We integrated Google's Geolocation API directly into the new Laravel application, so a patient's search location drives real distance-based results across every state - not a flat, unfiltered directory of every practice in the country.</p>
              <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
                <Node label="Patient's location" sub="Postcode or suburb" />
                <Connector />
                <Node label="Google Geolocation API" sub="Distance calculated" tone="accent" />
                <Connector />
                <Node label="Hundreds of practices" sub="Nationwide" />
                <Connector />
                <Node label="Nearest specialists first" tone="dark" />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {wins.map(([title, body]) => (
                <div key={title} className="border border-[#d8ded0] bg-white p-6">
                  <Check size={18} className="text-[#92ad39]" />
                  <h3 className={`${display} mt-4 text-[22px] leading-[1.2] tracking-[-.02em]`}>{title}</h3>
                  <p className={`${sans} mt-3 text-[14px] leading-6 text-[#657067]`}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="bg-[#1d2720]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow light>THE RESULT</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[22ch] text-[35px] leading-[1.15] tracking-[-.03em] text-white sm:text-[46px]`}>340% more visits to practices, from a directory patients can actually trust.</h2>
            <p className={`${sans} mt-7 max-w-[680px] text-[16px] leading-7 text-[#c3cbbf]`}>Fixing the data model underneath the Finder turned a confusing, duplicate-ridden list into a directory that does one job well: putting a patient in front of the right specialist, close to home. Visits to practices referred from the tool have grown 340% since the rebuild.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[["340% more practice visits", "A clear, measurable lift in patients reaching real appointments, not just browsing a directory."], ["One record per specialist", "No more duplicate, near-identical listings - better for patients and better for search visibility."], ["Built to scale nationally", "A single Laravel application covering hundreds of practices across every state."]].map(([t, b]) => (
                <div key={t} className="border border-white/15 p-6">
                  <Check size={18} className="text-[#b4cc66]" />
                  <h3 className={`${display} mt-4 text-[22px] leading-[1.2] text-white`}>{t}</h3>
                  <p className={`${sans} mt-3 text-[14px] leading-6 text-[#a9b0a4]`}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#92ad39]">
          <div className="mx-auto flex max-w-[980px] flex-col items-center px-6 py-20 text-center">
            <h2 className={`${display} max-w-[20ch] text-[34px] leading-[1.15] tracking-[-.03em] text-[#1d2720] sm:text-[44px]`}>Is your directory or data model working against you?</h2>
            <p className={`${sans} mt-5 max-w-[520px] text-[16px] leading-7 text-[#1d2720]/80`}>Start with a free AI-Readiness Data Check, or tell us what isn't working.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/#contact" className={`${sans} bg-[#1d2720] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-black`}>Take the Data Check</a>
              <a href="/#get-in-touch" className={`${sans} border border-[#1d2720] px-6 py-3 text-[13px] font-semibold text-[#1d2720] transition hover:bg-[#1d2720] hover:text-white`}>Get in touch</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1d2720]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-12 sm:flex-row sm:items-end md:px-20">
          <div>
            <a href="/" aria-label="Grid Concepts home"><Logo inverse /></a>
            <p className={`${sans} mt-5 max-w-[310px] text-[12px] leading-5 text-[#a9b0a4]`}>Data, systems and digital growth for Australian businesses ready to make change stick.</p>
          </div>
          <div className="sm:text-right">
            <a href="tel:1300976425" className={`${display} text-[24px] tracking-[.03em] text-white transition hover:text-[#b4cc66]`}>1300 976 425</a>
            <address className={`${sans} mt-4 text-[12px] leading-5 not-italic text-[#a9b0a4]`}>Level 2, 1341 Dandenong Rd,<br />Chadstone, Victoria, 3148</address>
            <p className={`${sans} mt-5 text-[11px] text-[#8f978b]`}>© 2026 Grid Concepts Pty Ltd. Melbourne, Australia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
