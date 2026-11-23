import { useEffect, useState } from "react";
import { ArrowRight, Check, MapPin, Sparkles, Users, CalendarDays } from "lucide-react";
import { ContactSection, Footer } from "../grid-concepts-homepage";
import {
  claudeFaqs,
  claudeServices,
  claudeSystems,
  claudeUseCases,
  rolloutSteps,
  whyClaude,
  whyUs,
} from "./claude-content";
import {
  Chips,
  ClosingBand,
  CtaPair,
  CustomersGrid,
  Eyebrow,
  FaqList,
  LogoStrip,
  MobileStickyCta,
  PrimaryCta,
  SectionTitle,
  SlimHeader,
  TestimonialSlider,
  display,
  sans,
  usePageSetup,
} from "./shared";

// Layout D - "Claude Specialists": Grid Concepts as a Melbourne-based
// Claude specialist agency for small businesses.

/* ------------------------------------------------------------------ */
/* Hero visual: Claude in the centre, connected to every system.       */
/* Cycles through example questions until the visitor picks a system. */
/* ------------------------------------------------------------------ */

const orbitCss = `
@keyframes gc-orbit-dash { to { stroke-dashoffset: -8; } }
.gc-orbit-active { stroke-dasharray: 2 2; animation: gc-orbit-dash 1.2s linear infinite; }
@keyframes gc-orbit-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(146,173,57,.45); } 50% { box-shadow: 0 0 0 14px rgba(146,173,57,0); } }
.gc-orbit-core { animation: gc-orbit-pulse 3s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .gc-orbit-active, .gc-orbit-core { animation: none; } }
`;

function ClaudeOrbit() {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const count = claudeSystems.length;

  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % count), 4500);
    return () => window.clearInterval(t);
  }, [touched, count]);

  const sys = claudeSystems[active];
  const pos = claudeSystems.map((_, i) => {
    const angle = (-90 + (360 / count) * i) * (Math.PI / 180);
    return { x: 50 + 37 * Math.cos(angle), y: 50 + 37 * Math.sin(angle) };
  });

  return (
    <div className="bg-[#10252a] p-4 sm:p-7">
      <style>{orbitCss}</style>
      <div className="flex items-center justify-between gap-3">
        <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#b4cc66]`}>Claude, connected to your business</p>
        <p className={`${sans} text-[10px] text-[#899b96]`}>Tap a system</p>
      </div>

      <div className="relative mx-auto mt-6 aspect-square w-full max-w-[500px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth=".3" />
          {pos.map((p, i) => (
            <line
              key={claudeSystems[i].id}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke={i === active ? "#92ad39" : "rgba(255,255,255,.18)"}
              strokeWidth={i === active ? 0.7 : 0.35}
              className={i === active ? "gc-orbit-active" : ""}
            />
          ))}
        </svg>

        {/* Claude at the centre */}
        <div className="gc-orbit-core absolute left-1/2 top-1/2 flex aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#f9faf5] text-center">
          <Sparkles className="size-[22%] text-[#71872b]" aria-hidden="true" />
          <p className={`${display} mt-1 text-[clamp(16px,4.6vw,26px)] leading-none text-[#1d2720]`}>Claude</p>
          <p className={`${sans} mt-1 text-[clamp(8px,2vw,10px)] font-semibold uppercase tracking-[.12em] text-[#71872b]`}>AI assistant</p>
        </div>

        {/* Systems around it */}
        {claudeSystems.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setTouched(true);
                setActive(i);
              }}
              style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}
              className={`absolute w-[24%] min-w-[78px] -translate-x-1/2 -translate-y-1/2 border px-1.5 py-1.5 text-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92ad39] sm:py-2 ${
                isActive ? "border-[#92ad39] bg-[#92ad39] text-[#17220d]" : "border-white/15 bg-[#163238] text-white hover:border-white/40"
              }`}
            >
              <span className={`${sans} block text-[11px] font-semibold leading-tight sm:text-[12px]`}>{s.label}</span>
              <span className={`${sans} mt-0.5 block text-[9px] leading-tight sm:text-[10px] ${isActive ? "text-[#2b3a0d]" : "text-[#9fb0ab]"}`}>{s.tools}</span>
            </button>
          );
        })}
      </div>

      {/* Example conversation for the selected system */}
      <div aria-live="polite" className="mt-5 space-y-3">
        <div className="ml-auto w-fit max-w-[88%] bg-white/10 px-4 py-3">
          <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.14em] text-[#9fb0ab]`}>You ask</p>
          <p className={`${sans} mt-1 text-[14px] leading-6 text-white`}>{sys.prompt}</p>
        </div>
        <div className="max-w-[92%] bg-[#f9faf5] px-4 py-3">
          <p className={`${sans} flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#71872b]`}>
            <Sparkles size={12} aria-hidden="true" /> Claude, using {sys.label.toLowerCase()}
          </p>
          <p className={`${sans} mt-1 text-[14px] leading-6 text-[#1d2720]`}>{sys.answer}</p>
        </div>
        <p className={`${sans} text-[11px] text-[#899b96]`}>Example conversation with sample data.</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[#f9faf5]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <Eyebrow>Melbourne's Claude specialists for small business</Eyebrow>
          <h1 className={`${display} mt-6 max-w-[15ch] text-balance text-[42px] leading-[1.06] tracking-[-.035em] text-[#1d2720] sm:text-[56px] lg:text-[62px]`}>
            Claude, connected to everything your business runs on.
          </h1>
          <p className={`${sans} mt-7 max-w-[530px] text-[17px] leading-[1.7] text-[#586058]`}>
            We're a Melbourne team that sets up Claude for small businesses and connects it to your accounting, CRM, email and files. So it answers from your real information and takes real work off your plate.
          </p>
          <div className="mt-9"><CtaPair /></div>
          <ul className={`${sans} mt-8 grid max-w-[540px] gap-3 text-[13px] text-[#3d473e] sm:grid-cols-3`}>
            <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-[#92ad39]" />Based in Melbourne</li>
            <li className="flex items-center gap-2"><Users size={16} className="shrink-0 text-[#92ad39]" />Meet us in person</li>
            <li className="flex items-center gap-2"><CalendarDays size={16} className="shrink-0 text-[#92ad39]" />Helping SMEs since 2010</li>
          </ul>
          <p className={`${sans} mt-6 max-w-[540px] border-l-2 border-[#92ad39] pl-4 text-[14px] leading-6 text-[#3d473e]`}>
            Clients including <b className="font-semibold text-[#1d2720]">Metropole</b> and <b className="font-semibold text-[#1d2720]">GM Law</b> already use Claude.
          </p>
        </div>
        <div className="min-w-0"><ClaudeOrbit /></div>
      </div>
    </section>
  );
}

function WhyClaudeWhyUs() {
  return (
    <section className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>Why Claude</Eyebrow>
          <SectionTitle className="max-w-[18ch]">A capable AI assistant. Even better when it knows your business.</SectionTitle>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whyClaude.map((w) => (
            <div key={w.title} className="border-t-2 border-[#92ad39] bg-[#fbfcf8] p-7">
              <h3 className={`${display} text-[22px] leading-[1.2] text-[#1d2720]`}>{w.title}</h3>
              <p className={`${sans} mt-3 text-[14px] leading-6 text-[#586058]`}>{w.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 border-t border-[#dfe3d8] pt-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Why a Melbourne Claude specialist</Eyebrow>
            <SectionTitle className="mt-6 max-w-[14ch]">Licences are easy. Making Claude useful is the work.</SectionTitle>
          </div>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title}>
                <h3 className={`${sans} flex items-center gap-2 text-[15px] font-semibold text-[#1d2720]`}><Check size={17} className="text-[#92ad39]" />{w.title}</h3>
                <p className={`${sans} mt-2 text-[14px] leading-6 text-[#586058]`}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[#10252a]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.85fr] md:gap-16">
          <div>
            <Eyebrow tone="dark">What we do</Eyebrow>
            <SectionTitle tone="dark" className="mt-6 max-w-[15ch]">Everything you need to put Claude to work.</SectionTitle>
          </div>
          <p className={`${sans} self-end text-[16px] leading-7 text-[#c8d3d0]`}>Pick one service or all four. We start with whatever saves you the most time first.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {claudeServices.map((s, i) => (
            <article key={s.title} className="flex flex-col border-b border-r border-white/12 p-7">
              <p className={`${display} text-[28px] leading-none text-[#92ad39]`}>0{i + 1}</p>
              <h3 className={`${display} mt-6 text-[22px] leading-[1.2] text-white`}>{s.title}</h3>
              <p className={`${sans} mt-4 text-[14px] leading-6 text-[#b8c7c6]`}>{s.text}</p>
              <ul className="mt-6 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className={`${sans} flex gap-3 text-[12px] leading-5 text-[#aab8b4]`}><span className="mt-2 h-px w-3 shrink-0 bg-[#92ad39]" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="bg-[#f1f3eb]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>Claude at work</Eyebrow>
          <div>
            <SectionTitle className="max-w-[17ch]">Three Claude workflows small businesses use every day.</SectionTitle>
            <p className={`${sans} mt-6 max-w-[560px] text-[16px] leading-7 text-[#586058]`}>Each one sits on a connected data foundation like the ones we've built for our clients, two of whom already use Claude.</p>
          </div>
        </div>
        <div className="mt-14 space-y-6">
          {claudeUseCases.map((uc, i) => (
            <article key={uc.id} className="grid border border-[#d8ded0] bg-white lg:grid-cols-[1fr_1fr_.9fr]">
              <div className="p-7 sm:p-8">
                <span className={`${display} text-[26px] text-[#92ad39]`}>0{i + 1}</span>
                <h3 className={`${display} mt-3 text-[25px] leading-[1.2] tracking-[-.02em] text-[#1d2720]`}>{uc.title}</h3>
                <p className={`${sans} mt-3 text-[13px] font-semibold text-[#53661c]`}>Great for: {uc.forWho}</p>
                <p className={`${sans} mt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#a1654b]`}>Today</p>
                <p className={`${sans} mt-2 text-[14px] leading-6 text-[#586058]`}>{uc.before}</p>
              </div>
              <div className="border-t border-[#d8ded0] bg-[#10252a] p-7 sm:p-8 lg:border-t-0">
                <p className={`${sans} flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#b4cc66]`}><Sparkles size={12} aria-hidden="true" /> With Claude connected</p>
                <ul className="mt-4 space-y-3">
                  {uc.claudeDoes.map((d) => (
                    <li key={d} className={`${sans} flex gap-3 text-[14px] leading-6 text-[#e3e8df]`}><Check size={16} className="mt-1 shrink-0 text-[#92ad39]" />{d}</li>
                  ))}
                </ul>
                <p className={`${sans} mt-5 text-[12px] leading-5 text-[#899b96]`}>You approve before anything is sent or changed.</p>
              </div>
              <div className="flex flex-col gap-5 border-t border-[#d8ded0] bg-[#fbfcf8] p-7 sm:p-8 lg:border-l lg:border-t-0">
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Systems connected</p>
                  <div className="mt-3"><Chips items={uc.systems} /></div>
                </div>
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Data Claude uses</p>
                  <div className="mt-3"><Chips items={uc.data} /></div>
                </div>
                <div className="mt-auto border-l-2 border-[#92ad39] pl-4">
                  {uc.foundation.usesClaude && (
                    <p className={`${sans} mb-2 inline-flex items-center gap-1.5 bg-[#1d2720] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#cfe28a]`}>
                      <Sparkles size={11} aria-hidden="true" /> {uc.foundation.client} uses Claude
                    </p>
                  )}
                  <p className={`${sans} text-[13px] leading-5 text-[#3d473e]`}>{uc.foundation.text}</p>
                  <a href={uc.foundation.href} className={`${sans} group mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-[#53661c] hover:text-[#1d2720]`}>
                    Read the {uc.foundation.client} case study <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rollout() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>How we roll Claude out</Eyebrow>
          <SectionTitle className="max-w-[16ch]">Start small. Prove it works. Then grow.</SectionTitle>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {rolloutSteps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-[#92ad39] pt-5">
              <p className={`${sans} text-[11px] font-semibold text-[#71872b]`}>Step {i + 1}</p>
              <h3 className={`${display} mt-3 text-[21px] leading-tight text-[#1d2720]`}>{s.title}</h3>
              <p className={`${sans} mt-3 text-[14px] leading-6 text-[#586058]`}>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12"><PrimaryCta /></div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#10252a]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.55fr_1.45fr] md:px-12 md:py-28">
        <Eyebrow tone="dark">What clients say</Eyebrow>
        <TestimonialSlider tone="dark" />
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="bg-[#f9faf5]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.8fr] md:gap-16">
          <SectionTitle className="max-w-[16ch]">Some of the customers who already trust us</SectionTitle>
          <p className={`${sans} self-end text-[16px] leading-7 text-[#586058]`}>Australian businesses and organisations we've helped with data, systems and AI.</p>
        </div>
        <div className="mt-12"><CustomersGrid /></div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-12 md:py-28">
        <div>
          <Eyebrow>Claude questions</Eyebrow>
          <SectionTitle className="mt-6 max-w-[12ch]">What small businesses ask us about Claude.</SectionTitle>
        </div>
        <FaqList items={claudeFaqs} />
      </div>
    </section>
  );
}

export function SmbLandingD() {
  usePageSetup("Claude Specialists for Small Business in Melbourne | Grid Concepts");
  return (
    <main className="min-h-screen bg-[#f9faf5] pb-[76px] md:pb-0">
      <SlimHeader />
      <Hero />
      <section className="border-t border-[#dfe3d8] bg-white py-10"><div className="mx-auto max-w-[1180px] px-6 md:px-12"><LogoStrip label="Australian businesses we work with include" /></div></section>
      <WhyClaudeWhyUs />
      <Services />
      <UseCases />
      <Rollout />
      <Testimonials />
      <Customers />
      <Faq />
      <ContactSection source="Small business landing page D - Claude (paid ads)" />
      <ClosingBand title="Put Claude to work in your business." text="Book a free 30-minute consultation with our Melbourne team. We'll show you what Claude could do with your systems. No obligation." />
      <p className={`${sans} bg-[#1d2720] px-6 pt-8 text-center text-[11px] leading-5 text-[#8f978b]`}>
        Claude is a product of Anthropic. Grid Concepts is an independent consultancy and is not affiliated with or endorsed by Anthropic.
      </p>
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
