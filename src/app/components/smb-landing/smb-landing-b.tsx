import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { ContactSection, Footer } from "../grid-concepts-homepage";
import { useCases } from "./content";
import {
  CaseStudyLink,
  Chips,
  ClosingBand,
  CtaPair,
  CustomersTable,
  Eyebrow,
  FaqList,
  IntegrationMap,
  LogoStrip,
  MobileStickyCta,
  SectionTitle,
  SlimHeader,
  SystemsList,
  TestimonialSlider,
  display,
  sans,
  usePageSetup,
} from "./shared";

// Layout B - "Show the Map": visual-first. The integration diagram is the hero.

function Hero() {
  return (
    <section className="bg-[#10252a]">
      <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow tone="dark">AI for Australian small businesses</Eyebrow>
            <h1 className={`${display} mt-6 max-w-[16ch] text-balance text-[42px] leading-[1.06] tracking-[-.035em] text-white sm:text-[58px] lg:text-[66px]`}>
              Your business tools, finally talking to each other.
            </h1>
          </div>
          <div>
            <p className={`${sans} max-w-[480px] text-[17px] leading-[1.7] text-[#c8d3d0]`}>
              We connect the software you already pay for, so information flows on its own and AI has something useful to work with. Tap a tool below to see how.
            </p>
            <div className="mt-8"><CtaPair tone="dark" /></div>
          </div>
        </div>
        <div className="mt-14 md:mt-16"><IntegrationMap tone="dark" /></div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Works with what you've got</Eyebrow>
            <SectionTitle className="mt-6 max-w-[14ch]">No need to switch software.</SectionTitle>
            <p className={`${sans} mt-6 max-w-[440px] text-[16px] leading-7 text-[#586058]`}>
              These are the systems small businesses use most. If yours isn't listed but it can export data or has an API, we can almost always connect it.
            </p>
            <ul className="mt-8 space-y-3">
              {["Enter information once, use it everywhere", "Reports that build themselves", "AI that knows your customers and jobs"].map((t) => (
                <li key={t} className={`${sans} flex items-center gap-3 text-[14px] text-[#1d2720]`}><Check size={16} className="text-[#92ad39]" />{t}</li>
              ))}
            </ul>
          </div>
          <SystemsList />
        </div>
      </div>
    </section>
  );
}

function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const uc = useCases[active];
  return (
    <section className="border-t border-[#dfe3d8] bg-[#f1f3eb]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <Eyebrow>Real examples</Eyebrow>
        <SectionTitle className="mt-6 max-w-[20ch]">See exactly what gets connected, and what changes.</SectionTitle>

        <div role="tablist" aria-label="Use cases" className="mt-12 flex gap-1 overflow-x-auto border-b border-[#d8ded0]">
          {useCases.map((u, i) => (
            <button
              key={u.id}
              role="tab"
              type="button"
              id={`uc-tab-${u.id}`}
              aria-selected={i === active}
              aria-controls={`uc-panel-${u.id}`}
              onClick={() => setActive(i)}
              className={`${sans} -mb-px shrink-0 border-b-2 px-4 py-3 text-left text-[13px] font-semibold transition ${i === active ? "border-[#92ad39] text-[#1d2720]" : "border-transparent text-[#7a8279] hover:text-[#1d2720]"}`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[.14em] text-[#71872b]">0{i + 1}</span>
              {u.short}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`uc-panel-${uc.id}`} aria-labelledby={`uc-tab-${uc.id}`} className="grid gap-10 bg-white p-7 sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className={`${display} text-[29px] leading-[1.16] tracking-[-.02em] text-[#1d2720] sm:text-[34px]`}>{uc.title}</h3>
            <p className={`${sans} mt-3 text-[13px] font-semibold text-[#53661c]`}>Great for: {uc.forWho}</p>
            <p className={`${sans} mt-6 text-[15px] leading-7 text-[#586058]`}>{uc.problem}</p>
            <p className={`${sans} mt-8 text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>What we do</p>
            <ul className="mt-3 space-y-2.5">
              {uc.whatWeDo.map((w) => (
                <li key={w} className={`${sans} flex gap-3 text-[14px] leading-6 text-[#3d473e]`}><Check size={16} className="mt-1 shrink-0 text-[#92ad39]" />{w}</li>
              ))}
            </ul>
          </div>

          {/* The flow: systems -> data -> result */}
          <div className="flex flex-col">
            <div className="border border-[#d8ded0] bg-[#fbfcf8] p-5">
              <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>1 · Systems we connect</p>
              <div className="mt-3"><Chips items={uc.systems} /></div>
            </div>
            <div className="flex justify-center py-2 text-[#92ad39]"><ArrowDown size={18} aria-hidden="true" /></div>
            <div className="border border-[#d8ded0] bg-[#fbfcf8] p-5">
              <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>2 · Data that moves between them</p>
              <div className="mt-3"><Chips items={uc.data} /></div>
            </div>
            <div className="flex justify-center py-2 text-[#92ad39]"><ArrowDown size={18} aria-hidden="true" /></div>
            <div className="bg-[#1d2720] p-5 text-white">
              <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#b4cc66]`}>3 · The result</p>
              <p className={`${sans} mt-2 text-[14px] leading-6 text-[#e3e8df]`}>{uc.result}</p>
              <div className="mt-5 flex items-end gap-4 border-t border-white/10 pt-5">
                <p className={`${display} text-[42px] leading-none`}>{uc.stat.value}</p>
                <p className={`${sans} pb-1 text-[12px] leading-4 text-[#aab8b4]`}>{uc.stat.label}<br /><span className="text-[#cfe28a]">{uc.client} · {uc.clientDetail}</span></p>
              </div>
            </div>
            <div className="mt-5"><CaseStudyLink uc={uc} /></div>
          </div>
        </div>
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
          <p className={`${sans} self-end text-[16px] leading-7 text-[#586058]`}>Small and mid-sized Australian businesses and organisations, across a wide range of industries.</p>
        </div>
        <div className="mt-12"><CustomersTable /></div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <Eyebrow>In their words</Eyebrow>
        <div className="mt-8"><TestimonialSlider tone="light" /></div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-[#10252a]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-12 md:py-28">
        <div>
          <Eyebrow tone="dark">FAQ</Eyebrow>
          <SectionTitle tone="dark" className="mt-6 max-w-[12ch]">Before you book, you might be wondering...</SectionTitle>
        </div>
        <FaqList tone="dark" />
      </div>
    </section>
  );
}

export function SmbLandingB() {
  usePageSetup("Connect Your Business Tools, Then Add AI | Grid Concepts");
  return (
    <main className="min-h-screen bg-[#f9faf5] pb-[76px] md:pb-0">
      <SlimHeader tone="dark" />
      <Hero />
      <section className="border-t border-white/10 bg-[#0b1b1e] py-10"><div className="mx-auto max-w-[1180px] px-6 md:px-12"><LogoStrip tone="dark" /></div></section>
      <Systems />
      <UseCaseTabs />
      <Customers />
      <Testimonials />
      <Faq />
      <ClosingBand title="See your own systems mapped out." text="On a free 30-minute call we'll sketch how your tools could connect and where AI would save the most time. No obligation." />
      <ContactSection source="Small business landing page B (paid ads)" />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
