import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Menu, X } from "lucide-react";
import { Logo } from "./grid-concepts-homepage";

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";
const metropoleLogo = "https://metropole.com.au/wp-content/themes/metropole-theme/assets/images/2025/Metropole_primary_logo.svg";
const journeyIllustration = "/case-studies/metropole/customer-journey.svg";

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

const sources = [
  ["SuiteCRM", "Sales activity - every enquiry, call and deal stage"],
  ["Mailchimp", "Marketing automation - sends, opens and campaign history"],
  ["Thryv", "eCommerce - purchases and order history"],
  ["Google Analytics", "Website behaviour - sessions, pages and downloads"],
  ["WebinarJam", "Webinars - registrations and live attendance"],
  ["Humanitix", "Ticketing - event registrations and check-ins"],
];

const problems = [
  "Sales activity lived in SuiteCRM with no link to what that same person had opened in Mailchimp.",
  "Every purchase in Thryv was its own island - no connection back to the campaign, webinar or event that led to it.",
  "Google Analytics could show a session happened, but not whose session it was.",
  "WebinarJam knew who registered and attended; Humanitix knew who bought a ticket. Neither talked to the other, or to the CRM.",
  "No single dataset could answer a basic question: how did this client actually find Metropole, engage with them, and buy?",
];

const whatItSurfaces = [
  ["How clients actually purchase", "The real sequence of touchpoints that leads to a sale, not a guess based on the last channel touched."],
  ["How clients engage", "Which combination of webinars, content and events actually moves someone toward a decision."],
  ["Average time to enquiry", "How long it typically takes a new contact to raise their hand, measured from real first-touch data."],
  ["Average time to sale", "How long the full journey takes end to end, so the team can set realistic expectations and follow-up cadences."],
];

export function MetropoleCaseStudy() {
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
                <Eyebrow>CASE STUDY - DATA &amp; AI ENABLEMENT</Eyebrow>
                <h1 className={`${display} mt-6 text-[40px] leading-[1.1] tracking-[-.035em] sm:text-[54px]`}>Metropole: one Central Customer View, built from six disconnected systems.</h1>
                <p className={`${sans} mt-7 max-w-[600px] text-[17px] leading-7 text-[#586058]`}>Sales, marketing, ecommerce, analytics, webinars and events each held a different slice of the same client relationship. None of them talked to each other.</p>
              </div>
              <div className="border border-[#d8ded0] bg-white p-7">
                <img src={metropoleLogo} alt="Metropole logo" className="h-[42px] max-w-[190px] object-contain object-left" />
                <dl className={`${sans} mt-7 space-y-4 text-[13px]`}>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">CLIENT</dt><dd className="mt-1 text-[#344039]">National property investment advisory &amp; buyers agency</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">FOCUS</dt><dd className="mt-1 text-[#344039]">Property investment strategy, buyers agency, research &amp; education</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">STACK</dt><dd className="mt-1 text-[#344039]">SuiteCRM, Mailchimp, Thryv, Google Analytics, WebinarJam, Humanitix</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">WEBSITE</dt><dd className="mt-1"><a href="https://metropole.com.au" target="_blank" rel="noreferrer" className="text-[#53661c] underline underline-offset-4">metropole.com.au</a></dd></div>
                </dl>
              </div>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              <Stat value="6+" label="disconnected systems unified into one view" />
              <Stat value="1" label="Central Customer View dataset" />
              <Stat value="End-to-end" label="client journeys, first touchpoint to purchase" />
            </div>
          </div>
        </section>

        {/* About + situation */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:px-12 md:py-24">
            <Eyebrow>THE SITUATION</Eyebrow>
            <div className={`${sans} space-y-5 text-[16px] leading-7 text-[#586058]`}>
              <p>Metropole is a national property investment advisory and buyers agency, built on research, education and long-term strategy rather than one-off transactions. Over the years the business had accumulated the systems that usually come with that kind of growth: a sales CRM, marketing automation, an eCommerce platform, web analytics, a webinar platform and a ticketing system for live events.</p>
              <p>Each one held a genuinely useful slice of the client relationship. None of them shared a common thread. Grid Concepts came in to connect the moving parts and give the marketing team a single, reliable picture of each client - not another platform, a foundation the existing platforms could finally sit on.</p>
            </div>
          </div>
        </section>

        {/* Challenge 1 */}
        <section className="bg-[#f1f3eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 01</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[20ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>Six systems, no shared identifier.</h2>
            <p className={`${sans} mt-6 max-w-[640px] text-[16px] leading-7 text-[#586058]`}>Every one of these systems was doing its job. The problem was that none of them knew about the others, which meant nobody at Metropole could see the full shape of a single client relationship in one place.</p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="border border-[#d8ded0] bg-white p-7">
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#9a7442]`}>WHAT WAS DISCONNECTED</p>
                <ul className={`${sans} mt-5 space-y-4 text-[14px] leading-6 text-[#465047]`}>
                  {problems.map((item) => <li key={item} className="flex gap-3"><X size={16} className="mt-1 shrink-0 text-[#c8a27a]" />{item}</li>)}
                </ul>
              </div>
              <div className="border border-[#d8ded0] bg-white p-7">
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#9a7442]`}>BEFORE</p>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Node label="SuiteCRM" sub="Sales" tone="broken" />
                    <Node label="Mailchimp" sub="Marketing" tone="broken" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Node label="Thryv" sub="eCommerce" tone="broken" />
                    <Node label="Google Analytics" sub="Website" tone="broken" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Node label="WebinarJam" sub="Webinars" tone="broken" />
                    <Node label="Humanitix" sub="Events" tone="broken" />
                  </div>
                  <Connector vertical broken />
                  <Node label="No shared customer record" tone="broken" />
                </div>
              </div>
            </div>

            <div className="mt-5 border border-[#d8ded0] bg-white p-7 md:p-9">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>WHAT WE DID</p>
              <p className={`${sans} mt-4 max-w-[760px] text-[15px] leading-7 text-[#586058]`}>We didn't try to merge everything into one platform overnight. We took specific, high-value subsets of each dataset, normalised the fields so "the same thing" was recorded the same way across every system, and washed the records against a unique identifier so a person in SuiteCRM could be reliably matched to that same person in Mailchimp, Thryv, WebinarJam and Humanitix.</p>
              <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
                <Node label="6 source systems" sub="SuiteCRM, Mailchimp, Thryv + 3 more" />
                <Connector />
                <Node label="Normalise &amp; match" sub="Washed against a unique identifier" tone="dark" />
                <Connector />
                <Node label="Central Customer View" sub="One dataset, every touchpoint" tone="accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 2 / result */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 02</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[22ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>A dataset built for humans and AI agents alike.</h2>
            <p className={`${sans} mt-6 max-w-[680px] text-[16px] leading-7 text-[#586058]`}>The result is a Central Customer View that can be interrogated directly by the Metropole team, or queried by AI agents, to produce a detailed customer journey spanning that client's entire history with Metropole to date - every enquiry, every webinar attended, every asset downloaded, every event ticket, every campaign opened, right through to purchase.</p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {whatItSurfaces.map(([title, body]) => (
                <div key={title} className="border border-[#d8ded0] bg-[#f9faf5] p-6">
                  <Check size={18} className="text-[#92ad39]" />
                  <h3 className={`${display} mt-4 text-[20px] leading-[1.2] tracking-[-.02em]`}>{title}</h3>
                  <p className={`${sans} mt-3 text-[14px] leading-6 text-[#657067]`}>{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden border border-[#d8ded0]">
              <div className={`${sans} grid grid-cols-[1fr_1.4fr] bg-[#1d2720] text-[11px] font-semibold tracking-[.14em] text-white`}>
                <div className="p-4">SOURCE SYSTEM</div>
                <div className="p-4 text-[#b4cc66]">WHAT IT CONTRIBUTES TO THE VIEW</div>
              </div>
              {sources.map(([label, body]) => (
                <div key={label} className={`${sans} grid grid-cols-[1fr_1.4fr] border-t border-[#dfe3d8] text-[13px] leading-6`}>
                  <div className="bg-[#f1f3eb] p-4 font-semibold text-[#344039]">{label}</div>
                  <div className="bg-white p-4 text-[#586058]">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Illustration */}
        <section className="bg-[#f1f3eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>WHAT A SINGLE JOURNEY LOOKS LIKE</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[24ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>One real client, every touchpoint, in order.</h2>
            <p className={`${sans} mt-6 max-w-[720px] text-[16px] leading-7 text-[#586058]`}>Below is a real client journey pulled straight from the Central Customer View - newsletter signup to webinar to discovery call to purchase, with the actual gaps in between. It took 63 days from first contact to enquiry, and 86 to a signed Strategic Property Plan. The client's name, contact details and portfolio specifics are redacted.</p>
            <div className="mt-10 overflow-x-auto border border-[#d8ded0] bg-[#f9faf5] p-4 md:p-6">
              <img src={journeyIllustration} alt="A nine-step real client journey through Metropole's Central Customer View: a newsletter subscription, two separate website visits, a webinar registration, a callback enquiry, a discovery call, a confirmation email, a Strategic Property Plan purchase 86 days in and a returned fact-finder, with the client's name, email and portfolio details shown redacted." className="min-w-[980px]" />
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="bg-[#1d2720]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow light>THE RESULT</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[22ch] text-[35px] leading-[1.15] tracking-[-.03em] text-white sm:text-[46px]`}>One source of truth, instead of six partial ones.</h2>
            <p className={`${sans} mt-7 max-w-[680px] text-[16px] leading-7 text-[#c3cbbf]`}>Metropole's marketing team no longer has to stitch together a client's story by hand across six logins. The Central Customer View gives them - and the AI agents they're starting to build on top of it - one place to ask a question and get a real, end-to-end answer.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[["One Central Customer View", "Six systems, normalised and matched against a single identifier."], ["Full lifecycle visibility", "Every touchpoint, from first webinar to signed client, in sequence."], ["Ready for AI agents", "A dataset structured so it can be queried directly, not just reported on."]].map(([t, b]) => (
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
            <h2 className={`${display} max-w-[20ch] text-[34px] leading-[1.15] tracking-[-.03em] text-[#1d2720] sm:text-[44px]`}>Customer data scattered across too many tools?</h2>
            <p className={`${sans} mt-5 max-w-[520px] text-[16px] leading-7 text-[#1d2720]/80`}>Start with a free AI-Readiness Data Check, or tell us what isn't connecting.</p>
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
            <p className={`${sans} mt-5 text-[11px] text-[#8f978b]`}>© 2026 Grid Concepts Pty Ltd. Melbourne, Australia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
