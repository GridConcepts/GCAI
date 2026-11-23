import { Check } from "lucide-react";
import { heroImage } from "../../../imports/images";
import { ContactSection, Footer } from "../grid-concepts-homepage";
import { useCases } from "./content";
import {
  CaseStudyLink,
  Chips,
  ClosingBand,
  CtaPair,
  CustomersGrid,
  Eyebrow,
  FaqList,
  IntegrationMap,
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

// Layout A - "Straight Answer": problem, fix, proof. Short and direct.

function Hero() {
  return (
    <section className="bg-[#f9faf5]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-6 pb-14 pt-12 sm:px-12 lg:px-20 lg:py-20">
          <Eyebrow>For Australian small businesses</Eyebrow>
          <h1 className={`${display} mt-6 max-w-[15ch] text-balance text-[42px] leading-[1.06] tracking-[-.035em] text-[#1d2720] sm:text-[58px] lg:text-[64px]`}>
            Make AI work with the tools you already use.
          </h1>
          <p className={`${sans} mt-7 max-w-[520px] text-[17px] leading-[1.7] text-[#586058]`}>
            Xero, MYOB, HubSpot, Outlook, Shopify and those spreadsheets. We connect them so your information lives in one place, your team stops typing things twice, and AI can actually save you time.
          </p>
          <div className="mt-9">
            <CtaPair />
          </div>
          <ul className={`${sans} mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#586058]`}>
            {["Free 30-minute call", "No obligation", "Melbourne team since 2010"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check size={14} className="text-[#92ad39]" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[440px] overflow-hidden bg-[#d9dfcc] lg:min-h-[620px]">
          <img src={heroImage} alt="Small business owner reviewing connected data on a tablet" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#263121]/10" />
          <div className={`${sans} absolute bottom-5 left-5 right-5 bg-[#f9faf5] p-5 shadow-[0_14px_35px_rgba(22,31,22,.18)] sm:bottom-8 sm:left-auto sm:right-8 sm:w-[330px] sm:p-6`}>
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]">Your tools, connected</p>
            <ul className="mt-4 space-y-2.5">
              {["Xero invoices", "HubSpot contacts", "Outlook emails", "Job software"].map((t) => (
                <li key={t} className="flex items-center justify-between border-b border-[#e1e5db] pb-2 text-[13px] text-[#1d2720]">
                  {t}
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#53661c]"><Check size={13} /> Synced</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-[#1d2720] p-3.5 text-[12px] leading-5 text-[#c8d3d0]">
              <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#b4cc66]">Ask AI</span>
              <p className="mt-1 text-white">"Which customers haven't paid this month, and when did we last email them?"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  { title: "You type the same details twice", text: "A new customer goes into the CRM, then the accounting software, then a spreadsheet. Mistakes creep in and hours disappear." },
  { title: "You can't see the full picture", text: "Every app holds a slice of the customer. Answering \"how's the business going?\" means exporting reports and stitching them together." },
  { title: "You've tried ChatGPT, now what?", text: "It's clever, but it doesn't know your customers, jobs or invoices. So it stays a toy instead of something that saves real time." },
];

function SoundFamiliar() {
  return (
    <section className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>Sound familiar?</Eyebrow>
          <SectionTitle className="max-w-[18ch]">Most small businesses don't have an AI problem. They have a "nothing talks to each other" problem.</SectionTitle>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pains.map((p) => (
            <div key={p.title} className="border-t-2 border-[#92ad39] bg-[#fbfcf8] p-7">
              <h3 className={`${display} text-[23px] leading-[1.2] text-[#1d2720]`}>{p.title}</h3>
              <p className={`${sans} mt-4 text-[14px] leading-6 text-[#586058]`}>{p.text}</p>
            </div>
          ))}
        </div>
        <p className={`${sans} mt-10 max-w-[620px] text-[16px] leading-7 text-[#3d473e]`}>
          The good news: the fix doesn't start with buying more software. It starts with connecting what you already have.
        </p>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="bg-[#f1f3eb]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.85fr] md:gap-16">
          <div>
            <Eyebrow>The tools you already use</Eyebrow>
            <SectionTitle className="mt-6 max-w-[16ch]">Keep your software. We get it talking.</SectionTitle>
          </div>
          <p className={`${sans} self-end text-[16px] leading-7 text-[#586058]`}>
            We link your accounting, CRM, email, online store and job software into one trusted view of your business. Once the data is connected and clean, AI tools like ChatGPT and Copilot can work with it safely.
          </p>
        </div>
        <div className="mt-14"><IntegrationMap /></div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>What this looks like in practice</Eyebrow>
          <div>
            <SectionTitle className="max-w-[17ch]">Three ways connected systems save small businesses time.</SectionTitle>
            <p className={`${sans} mt-6 max-w-[560px] text-[16px] leading-7 text-[#586058]`}>Each one is based on real work we've done for Australian businesses.</p>
          </div>
        </div>
        <div className="mt-14 space-y-6">
          {useCases.map((uc, i) => (
            <article key={uc.id} className="grid border border-[#d8ded0] md:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col p-7 sm:p-9">
                <div className="flex items-baseline gap-3">
                  <span className={`${display} text-[26px] text-[#92ad39]`}>0{i + 1}</span>
                  <span className={`${sans} text-[11px] font-semibold uppercase tracking-[.14em] text-[#71872b]`}>{uc.short}</span>
                </div>
                <h3 className={`${display} mt-5 text-[27px] leading-[1.18] tracking-[-.02em] text-[#1d2720]`}>{uc.title}</h3>
                <p className={`${sans} mt-3 text-[13px] font-semibold text-[#53661c]`}>Great for: {uc.forWho}</p>
                <p className={`${sans} mt-5 text-[15px] leading-7 text-[#586058]`}>{uc.problem}</p>
                <div className="mt-auto pt-8"><div className="flex items-end gap-4 border-t border-[#dfe3d8] pt-6">
                  <p className={`${display} text-[44px] leading-none text-[#1d2720]`}>{uc.stat.value}</p>
                  <p className={`${sans} pb-1 text-[12px] leading-4 text-[#586058]`}>{uc.stat.label}<br /><span className="text-[#71872b]">{uc.client}</span></p>
                </div></div>
              </div>
              <div className="flex flex-col gap-6 border-t border-[#d8ded0] bg-[#fbfcf8] p-7 sm:p-9 md:border-l md:border-t-0">
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>What we do</p>
                  <ul className="mt-3 space-y-2.5">
                    {uc.whatWeDo.map((w) => (
                      <li key={w} className={`${sans} flex gap-3 text-[14px] leading-6 text-[#3d473e]`}><Check size={16} className="mt-1 shrink-0 text-[#92ad39]" />{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Systems connected</p>
                  <div className="mt-3"><Chips items={uc.systems} /></div>
                </div>
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Data that moves</p>
                  <div className="mt-3"><Chips items={uc.data} /></div>
                </div>
                <div className="border-l-2 border-[#92ad39] pl-4">
                  <p className={`${sans} text-[14px] leading-6 text-[#1d2720]`}>{uc.result}</p>
                  <div className="mt-3"><CaseStudyLink uc={uc} /></div>
                </div>
              </div>
            </article>
          ))}
        </div>
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
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>Our clients</Eyebrow>
          <div>
            <SectionTitle className="max-w-[16ch]">Some of the customers who already trust us</SectionTitle>
            <p className={`${sans} mt-6 max-w-[560px] text-[16px] leading-7 text-[#586058]`}>From 10-person firms to national organisations, across legal, health, property, education, trades and not-for-profit.</p>
          </div>
        </div>
        <div className="mt-14"><CustomersGrid /></div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Complimentary Consultation", text: "A free 30-minute call. Tell us how the business runs and where time is being lost. You'll leave with practical ideas either way." },
  { title: "A clear plan and fixed quote", text: "We map your systems in plain English and recommend the first step with the biggest payoff. You know the cost before anything starts." },
  { title: "Connect, then add AI", text: "We link your tools, clean up the data and set up the automations. Then we show your team how to use AI with it, safely." },
];

function HowItWorks() {
  return (
    <section className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle className="max-w-[16ch]">Three simple steps. No big IT project.</SectionTitle>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t-2 border-[#92ad39] pt-5">
              <p className={`${sans} text-[11px] font-semibold text-[#71872b]`}>Step {i + 1}</p>
              <h3 className={`${display} mt-3 text-[24px] leading-tight text-[#1d2720]`}>{s.title}</h3>
              <p className={`${sans} mt-3 text-[14px] leading-6 text-[#586058]`}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><PrimaryCta /></div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-[#f1f3eb]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-12 md:py-28">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <SectionTitle className="mt-6 max-w-[12ch]">Straight answers to common questions.</SectionTitle>
          <p className={`${sans} mt-6 text-[15px] leading-7 text-[#586058]`}>Something else on your mind? Ask us on the call.</p>
        </div>
        <FaqList />
      </div>
    </section>
  );
}

export function SmbLandingA() {
  usePageSetup("AI for Small Business: Connect the Tools You Already Use | Grid Concepts");
  return (
    <main className="min-h-screen bg-[#f9faf5] pb-[76px] md:pb-0">
      <SlimHeader />
      <Hero />
      <section className="border-t border-[#dfe3d8] bg-white py-10"><div className="mx-auto max-w-[1180px] px-6 md:px-12"><LogoStrip /></div></section>
      <SoundFamiliar />
      <Systems />
      <UseCases />
      <Testimonials />
      <Customers />
      <HowItWorks />
      <Faq />
      <ContactSection source="Small business landing page A (ChatGPT ads)" />
      <ClosingBand title="Ready to get your tools working together?" text="Book a free 30-minute consultation with a Grid Concepts partner. No jargon, no obligation, just practical next steps for your business." />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
