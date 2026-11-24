import { Check, X } from "lucide-react";
import { dimitryTeamPortrait, valTeamPortrait } from "../../../imports/images";
import { ContactSection, Footer } from "../grid-concepts-homepage";
import { testimonials, useCases } from "./content";
import {
  CaseStudyLink,
  Chips,
  ClosingBand,
  CtaPair,
  CustomersGrid,
  Eyebrow,
  FaqList,
  IntegrationMap,
  MobileStickyCta,
  PrimaryCta,
  SectionTitle,
  SlimHeader,
  SystemsFlow,
  TestimonialSlider,
  display,
  sans,
  usePageSetup,
} from "./shared";

// Layout C - "Proof First": trust-led. Real businesses before any pitch.

const stats = [
  { value: "2010", label: "helping Australian businesses since" },
  { value: "8", label: "specialists in our Melbourne team" },
  { value: "340%", label: "more practice visits for one client" },
];

function Hero() {
  const t = testimonials[0];
  return (
    <section className="bg-[#f9faf5]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div className="flex flex-col">
          <Eyebrow>For Australian small businesses</Eyebrow>
          <h1 className={`${display} mt-6 max-w-[17ch] text-balance text-[40px] leading-[1.07] tracking-[-.035em] text-[#1d2720] sm:text-[54px] lg:text-[60px]`}>
            Businesses like yours already use AI with us. Here's how it works.
          </h1>
          <p className={`${sans} mt-7 max-w-[540px] text-[17px] leading-[1.7] text-[#586058]`}>
            We're a Melbourne team that connects the tools small businesses already use, so information is in one place and AI can take real work off your plate. Practical, plain English, and no big IT project.
          </p>
          <div className="mt-9"><CtaPair /></div>
          <div className="mt-12 grid grid-cols-3 border-t border-[#dfe3d8] pt-7">
            {stats.map((s, i) => (
              <div key={s.label} className={`${i > 0 ? "border-l border-[#dfe3d8] pl-4 sm:pl-6" : "pr-4"}`}>
                <p className={`${display} text-[30px] leading-none text-[#1d2720] sm:text-[38px]`}>{s.value}</p>
                <p className={`${sans} mt-2 text-[12px] leading-4 text-[#657067]`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <figure className="relative bg-[#10252a] p-8 sm:p-10">
            <span className={`${display} block text-[72px] leading-[.6] text-[#92ad39]`} aria-hidden="true">“</span>
            <blockquote className={`${display} mt-4 text-[22px] italic leading-[1.4] text-white sm:text-[25px]`}>{t.quote}</blockquote>
            <figcaption className={`${sans} mt-6 text-[12px] text-[#c8d3d0]`}><b className="text-white">{t.company}</b> · {t.descriptor}</figcaption>
            <span className="absolute -bottom-3 -right-3 size-10 bg-[#92ad39]" aria-hidden="true" />
          </figure>
          <div className="border border-[#d8ded0] bg-white p-6">
            <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Who you'll talk to</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { name: "Val Melamed", role: "Partner, Marketing & Strategy", photo: valTeamPortrait },
                { name: "Dimitry Rybkin", role: "Partner, Technology & Operations", photo: dimitryTeamPortrait },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <img src={p.photo} alt={p.name} className="size-12 shrink-0 object-cover object-top" />
                  <div className="min-w-0">
                    <p className={`${display} text-[15px] leading-tight text-[#1d2720]`}>{p.name}</p>
                    <p className={`${sans} mt-1 text-[12px] leading-4 text-[#657067]`}>{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="border-t border-[#dfe3d8] bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-[1fr_.8fr] md:gap-16">
          <SectionTitle className="max-w-[16ch]">Some of the customers who already trust us</SectionTitle>
          <p className={`${sans} self-end text-[16px] leading-7 text-[#586058]`}>Law firms, clinics, builders, manufacturers, educators and charities. Different industries, same problem: good people stuck copying data between systems.</p>
        </div>
        <div className="mt-12"><CustomersGrid /></div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="bg-[#f1f3eb]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <Eyebrow>Client stories</Eyebrow>
        <SectionTitle className="mt-6 max-w-[18ch]">Three real problems. Three practical fixes.</SectionTitle>
        <div className="mt-14 space-y-8">
          {useCases.map((uc) => (
            <article key={uc.id} className="border border-[#d8ded0] bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8ded0] px-7 py-5 sm:px-9">
                <div>
                  <p className={`${display} text-[22px] text-[#1d2720]`}>{uc.client}</p>
                  <p className={`${sans} text-[12px] text-[#657067]`}>{uc.clientDetail}</p>
                </div>
                <div className="flex items-end gap-3">
                  <p className={`${display} text-[40px] leading-none text-[#53661c]`}>{uc.stat.value}</p>
                  <p className={`${sans} max-w-[150px] pb-1 text-[11px] leading-4 text-[#657067]`}>{uc.stat.label}</p>
                </div>
              </div>
              <div className="px-7 pt-7 sm:px-9">
                <h3 className={`${display} text-[26px] leading-[1.2] tracking-[-.02em] text-[#1d2720] sm:text-[30px]`}>{uc.title}</h3>
                <p className={`${sans} mt-2 text-[13px] font-semibold text-[#53661c]`}>Relevant if you're in: {uc.forWho.toLowerCase()}</p>
              </div>
              <div className="mt-7 grid gap-px bg-[#d8ded0] md:grid-cols-2">
                <div className="bg-[#fbfcf8] p-7 sm:p-9">
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#a1654b]`}>Before</p>
                  <p className={`${sans} mt-3 text-[15px] leading-7 text-[#3d473e]`}>{uc.problem}</p>
                </div>
                <div className="bg-[#fbfcf8] p-7 sm:p-9">
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>After</p>
                  <ul className="mt-3 space-y-2.5">
                    {uc.whatWeDo.map((w) => (
                      <li key={w} className={`${sans} flex gap-3 text-[14px] leading-6 text-[#3d473e]`}><Check size={16} className="mt-1 shrink-0 text-[#92ad39]" />{w}</li>
                    ))}
                  </ul>
                  <p className={`${sans} mt-4 text-[14px] font-semibold leading-6 text-[#1d2720]`}>{uc.result}</p>
                </div>
              </div>
              <div className="grid gap-6 border-t border-[#d8ded0] p-7 sm:p-9 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>What we connected</p>
                  <div className="mt-3"><SystemsFlow uc={uc} /></div>
                </div>
                <div>
                  <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] text-[#71872b]`}>Data that moves</p>
                  <div className="mt-3"><Chips items={uc.data} /></div>
                </div>
              </div>
              <div className="border-t border-[#d8ded0] px-7 py-5 sm:px-9"><CaseStudyLink uc={uc} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.85fr] md:gap-16">
          <div>
            <Eyebrow>How we connect it</Eyebrow>
            <SectionTitle className="mt-6 max-w-[16ch]">Works with the systems you already use.</SectionTitle>
          </div>
          <p className={`${sans} self-end text-[16px] leading-7 text-[#586058]`}>
            Accounting, CRM, email, online store, job software and spreadsheets. We connect them into one view of your business, then AI tools can work from real, up-to-date information.
          </p>
        </div>
        <div className="mt-14"><IntegrationMap /></div>
      </div>
    </section>
  );
}

const fit = [
  "You have 5 to 200 staff",
  "You use three or more business apps",
  "Someone spends hours copying data or building reports",
  "You want AI to save real time, not just write emails",
];
const notFit = [
  "You want a chatbot installed by Friday with no planning",
  "You're happy with a fully manual, spreadsheet-only setup",
  "You're looking for the cheapest possible offshore build",
];

function IsThisForYou() {
  return (
    <section className="border-t border-[#dfe3d8] bg-[#f9faf5]">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-24">
        <SectionTitle className="max-w-[16ch]">Is this right for your business?</SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="border-t-2 border-[#92ad39] bg-white p-7 sm:p-9">
            <p className={`${display} text-[22px] text-[#1d2720]`}>A great fit if...</p>
            <ul className="mt-5 space-y-3">
              {fit.map((f) => (
                <li key={f} className={`${sans} flex gap-3 text-[15px] leading-6 text-[#3d473e]`}><Check size={18} className="mt-0.5 shrink-0 text-[#92ad39]" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-[#c9d1bd] bg-white p-7 sm:p-9">
            <p className={`${display} text-[22px] text-[#1d2720]`}>Probably not a fit if...</p>
            <ul className="mt-5 space-y-3">
              {notFit.map((f) => (
                <li key={f} className={`${sans} flex gap-3 text-[15px] leading-6 text-[#657067]`}><X size={18} className="mt-0.5 shrink-0 text-[#a1a89c]" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10"><PrimaryCta /></div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#10252a]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.55fr_1.45fr] md:px-12 md:py-28">
        <div>
          <Eyebrow tone="dark">More from our clients</Eyebrow>
        </div>
        <TestimonialSlider tone="dark" />
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-12 md:py-28">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mt-6 max-w-[12ch]">Good questions to ask any partner.</SectionTitle>
        </div>
        <FaqList />
      </div>
    </section>
  );
}

export function SmbLandingC() {
  usePageSetup("Small Businesses Using AI With Grid Concepts | Grid Concepts");
  return (
    <main className="min-h-screen bg-[#f9faf5] pb-[76px] md:pb-0">
      <SlimHeader />
      <Hero />
      <Customers />
      <Stories />
      <Systems />
      <IsThisForYou />
      <Testimonials />
      <Faq />
      <ContactSection source="Small business landing page C (paid ads)" />
      <ClosingBand title="Talk to a real person. It's free." text="Book a 30-minute consultation with one of our partners and get practical ideas for your business, whether or not you work with us." />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
