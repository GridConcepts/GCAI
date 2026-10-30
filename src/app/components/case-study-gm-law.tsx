import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Menu, X } from "lucide-react";
import { Logo } from "./grid-concepts-homepage";

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";
const gmLawLogo = "https://www.gmlaw.com.au/wp-content/uploads/2020/02/GMLaw-logo.svg";

const navLinks = [
  ["Approach", "/#approach"],
  ["Capabilities", "/#services"],
  ["Our story", "/#story"],
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
  "The calculator had stopped talking to the website.",
  "It had also stopped talking to the CRM, so new leads were quietly vanishing instead of landing in the mailing database.",
  "The options on offer were too thin to give clients a genuinely useful estimate.",
  "GM Law wanted better visibility - not just a ping when someone filled out the calculator, but a heads-up when they actually received their PDF and saw the pricing.",
];

const calculatorWins = [
  ["No new costs", "What used to be a separate paid service now lived inside a tool they were already paying for."],
  ["A better calculator", "More detail, more useful estimates."],
  ["A connection that actually held", "The Keap integration stopped falling over."],
];

const funnel = [
  ["1", "Lead arrives", "A prospective buyer or seller finds the site and fills out a form."],
  ["2", "Team review", "A team member reviews the lead and adds them to Actionstep as a client."],
  ["3", "Agent added", "If the client is tied to a successful purchase or sale, the referring Real Estate Agent is added to Keap."],
  ["4", "Thank-you and nudge", "If that agent has referred clients more than once in a year, Keap sends a thank-you email and prompts the team to invite them into the referral program."],
];

const comparison = [
  ["Data volume", "Pushed across too much data, forcing the team to clear out Keap to stay under their subscription limit.", "Works off the Actionstep ID system, so only the data the automation needs moves across."],
  ["Accuracy", "Sent data incorrectly from time to time.", "Data flow mapped against the Actionstep documentation, so each field lands where it should."],
  ["Control", "Set up by an Actionstep staffer, so that person effectively controlled any change.", "Owned by GM Law. No middleman, no waiting on someone else to make a change."],
];

export function GmLawCaseStudy() {
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
                <Eyebrow>CASE STUDY - CRM &amp; MARKETING AUTOMATION</Eyebrow>
                <h1 className={`${display} mt-6 text-[40px] leading-[1.1] tracking-[-.035em] sm:text-[58px]`}>GM Law: smarter marketing automation without the bloated software bill.</h1>
                <p className={`${sans} mt-7 max-w-[600px] text-[17px] leading-7 text-[#586058]`}>Two broken integrations, one clear ask: fix the automation without signing up for yet another expensive subscription.</p>
              </div>
              <div className="border border-[#d8ded0] bg-white p-7">
                <img src={gmLawLogo} alt="GM Law logo" className="h-[52px] max-w-[190px] object-contain object-left" />
                <dl className={`${sans} mt-7 space-y-4 text-[13px]`}>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">CLIENT</dt><dd className="mt-1 text-[#344039]">Brisbane law firm, team of 10-15</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">FOCUS</dt><dd className="mt-1 text-[#344039]">Conveyancing, commercial leasing, estate planning</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">STACK</dt><dd className="mt-1 text-[#344039]">Keap, Actionstep, Unbounce, Zapier</dd></div>
                  <div><dt className="text-[11px] font-semibold tracking-[.14em] text-[#71872b]">WEBSITE</dt><dd className="mt-1"><a href="https://www.gmlaw.com.au" target="_blank" rel="noreferrer" className="text-[#53661c] underline underline-offset-4">gmlaw.com.au</a></dd></div>
                </dl>
              </div>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              <Stat value="30+ yrs" label="of conveyancing, leasing and estate planning" />
              <Stat value="2" label="broken integrations fixed" />
              <Stat value="$0" label="in new software subscriptions added" />
            </div>
          </div>
        </section>

        {/* About + situation */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:px-12 md:py-24">
            <Eyebrow>THE SITUATION</Eyebrow>
            <div className={`${sans} space-y-5 text-[16px] leading-7 text-[#586058]`}>
              <p>GM Law is a Brisbane law firm that has been looking after conveyancing, commercial leasing and estate planning for over 30 years. With a team of 10-15 and a reputation that keeps clients coming back, they had the trust - they just needed their tech to keep up.</p>
              <p>Like a lot of established small businesses, GM Law had accumulated a stack of paid tools that were supposed to work together - and mostly didn't. They came to Grid Concepts with two separate problems and one clear ask: fix the automation without signing up for yet another expensive subscription.</p>
            </div>
          </div>
        </section>

        {/* Challenge 1 */}
        <section className="bg-[#f1f3eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 01</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[18ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>A broken lead calculator.</h2>
            <p className={`${sans} mt-6 max-w-[640px] text-[16px] leading-7 text-[#586058]`}>The heart of GM Law's website was a handy calculator. Visitors could enter a few details - buying or selling, rough transaction price, location - and instantly get an estimate of government fees plus GM Law's commission. Great in theory. In practice, it had fallen apart.</p>

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
                  <Node label="Website calculator" sub="Buying or selling, price, location" tone="broken" />
                  <Connector vertical broken />
                  <div className="grid grid-cols-2 gap-3">
                    <Node label="Website" sub="Disconnected" tone="broken" />
                    <Node label="CRM (Keap)" sub="Leads vanishing" tone="broken" />
                  </div>
                  <Connector vertical broken />
                  <Node label="No visibility on PDF delivery" tone="broken" />
                </div>
              </div>
            </div>

            <div className="mt-5 border border-[#d8ded0] bg-white p-7 md:p-9">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>WHAT WE DID</p>
              <p className={`${sans} mt-4 max-w-[720px] text-[15px] leading-7 text-[#586058]`}>At the time, our team was working with Unbounce, a small-business-friendly tool for building custom lead forms. Rather than reach for something new and pricey, we noticed GM Law was already paying for Keap - so we built the calculator inside their existing CRM and wired it up to Unbounce.</p>
              <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
                <Node label="Unbounce" sub="Custom lead form" />
                <Connector />
                <Node label="Calculator" sub="Built inside Keap" tone="accent" />
                <Connector />
                <Node label="Keap CRM" sub="Leads land in the mailing database" tone="accent" />
                <Connector />
                <Node label="PDF estimate" sub="Fees plus commission" />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {calculatorWins.map(([title, body]) => (
                <div key={title} className="border border-[#d8ded0] bg-white p-6">
                  <Check size={18} className="text-[#92ad39]" />
                  <h3 className={`${display} mt-4 text-[22px] leading-[1.2] tracking-[-.02em]`}>{title}</h3>
                  <p className={`${sans} mt-3 text-[14px] leading-6 text-[#657067]`}>{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 border-l-4 border-[#92ad39] bg-white p-6 md:p-8">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>AN UPFRONT TRADE-OFF</p>
              <p className={`${sans} mt-3 max-w-[760px] text-[15px] leading-7 text-[#465047]`}>The calculator relies on roughly 60 PDF price versions, and since Keap isn't built to generate those automatically, they need updating by hand. GM Law wasn't fazed - prices only shift once or twice a year, so it was a fair swap for the savings.</p>
            </div>
          </div>
        </section>

        {/* Challenge 2 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow>CHALLENGE 02</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[20ch] text-[35px] leading-[1.15] tracking-[-.03em] sm:text-[46px]`}>A referral funnel they could actually control.</h2>
            <p className={`${sans} mt-6 max-w-[640px] text-[16px] leading-7 text-[#586058]`}>GM Law had a smart automation in mind, moving a lead from first enquiry all the way to a thank-you for the referring agent.</p>

            <ol className="mt-12 grid gap-4 md:grid-cols-4">
              {funnel.map(([n, title, body]) => (
                <li key={n} className="border border-[#d8ded0] bg-[#f9faf5] p-6">
                  <span className={`${display} text-[26px] leading-none text-[#92ad39]`}>0{n}</span>
                  <h3 className={`${display} mt-4 text-[21px] leading-[1.2] tracking-[-.02em]`}>{title}</h3>
                  <p className={`${sans} mt-3 text-[13px] leading-6 text-[#657067]`}>{body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-14 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#9a7442]`}>THE CATCH</p>
                <p className={`${sans} mt-4 text-[15px] leading-7 text-[#586058]`}>GM Law was running Actionstep connected to Keap through Parsey - a chain of paid services that is a lot to carry for a small business, and one that was causing headaches of its own.</p>
              </div>
              <div>
                <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>WHAT WE DID</p>
                <p className={`${sans} mt-4 text-[15px] leading-7 text-[#586058]`}>We swapped Parsey for Zapier, a more capable platform for the kind of layered automation GM Law wanted to build. The deciding factor was control: GM Law planned to spin up a whole series of automations off their Actionstep data, and needed to tweak things whenever they liked. Zapier works off the ID system in the Actionstep database, so once we had dug through the Actionstep documentation and pinned down the right IDs, our team had full command of the data flow.</p>
              </div>
            </div>

            <div className="mt-12 overflow-hidden border border-[#d8ded0]">
              <div className={`${sans} grid grid-cols-[.6fr_1fr_1fr] bg-[#1d2720] text-[11px] font-semibold tracking-[.14em] text-white`}>
                <div className="p-4" />
                <div className="p-4 text-[#e0c39f]">PARSEY</div>
                <div className="p-4 text-[#b4cc66]">ZAPIER</div>
              </div>
              {comparison.map(([label, before, after]) => (
                <div key={label} className={`${sans} grid grid-cols-[.6fr_1fr_1fr] border-t border-[#dfe3d8] text-[13px] leading-6`}>
                  <div className="bg-[#f1f3eb] p-4 font-semibold text-[#344039]">{label}</div>
                  <div className="bg-[#faf3ea] p-4 text-[#6b5233]">{before}</div>
                  <div className="bg-[#f1f5e2] p-4 text-[#344039]">{after}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-[#d8ded0] bg-[#f9faf5] p-7 md:p-9">
              <p className={`${sans} text-[11px] font-semibold tracking-[.14em] text-[#71872b]`}>THE CONNECTED FLOW</p>
              <div className="mt-6 flex flex-col md:flex-row md:items-stretch">
                <Node label="Website form" sub="Lead captured" />
                <Connector />
                <Node label="Actionstep" sub="Client record" tone="accent" />
                <Connector />
                <Node label="Zapier" sub="GM Law controls the logic" tone="dark" />
                <Connector />
                <Node label="Keap" sub="Agent, thank-you and invite" tone="accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="bg-[#1d2720]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
            <Eyebrow light>THE RESULT</Eyebrow>
            <h2 className={`${display} mt-5 max-w-[22ch] text-[35px] leading-[1.15] tracking-[-.03em] text-white sm:text-[46px]`}>Two problems solved, zero new subscriptions added.</h2>
            <p className={`${sans} mt-7 max-w-[680px] text-[16px] leading-7 text-[#c3cbbf]`}>GM Law ended up with a more detailed lead calculator that reliably feeds their CRM, plus a referral funnel they own outright and can reshape whenever the business calls for it. More importantly, they came away with a foundation built for what's next - the automations they haven't even thought of yet.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[["More useful calculator", "Richer estimates that reliably feed the CRM."], ["A funnel they own", "Change it whenever the business calls for it."], ["A base to build on", "Ready for the automations still to come."]].map(([t, b]) => (
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
            <h2 className={`${display} max-w-[20ch] text-[34px] leading-[1.15] tracking-[-.03em] text-[#1d2720] sm:text-[44px]`}>Tools that should work together, but don't?</h2>
            <p className={`${sans} mt-5 max-w-[520px] text-[16px] leading-7 text-[#1d2720]/80`}>Start with a free AI-Readiness Data Check, or tell us what is not connecting.</p>
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
