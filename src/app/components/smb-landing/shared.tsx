import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Logo } from "../grid-concepts-homepage";
import {
  BOOKING_URL,
  PRIMARY_CTA,
  SECONDARY_CTA,
  aiTools,
  customers,
  faqs,
  systemGroups,
  testimonials,
  type Customer,
  type UseCase,
} from "./content";

export const sans = "font-['Inter',sans-serif]";
export const display = "font-['Lora',serif]";

export type Tone = "light" | "dark";

/* ------------------------------------------------------------------ */
/* Page setup: title, noindex (ad landing pages stay out of search),    */
/* and scrolling to a #hash on first load.                              */
/* ------------------------------------------------------------------ */

export function usePageSetup(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);
    const id = window.location.hash.slice(1);
    const t = id ? window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0) : undefined;
    return () => {
      document.title = previousTitle;
      meta.remove();
      if (t) window.clearTimeout(t);
    };
  }, [title]);
}

/* ------------------------------------------------------------------ */
/* Calls to action                                                      */
/* ------------------------------------------------------------------ */

type ButtonTone = "dark" | "green" | "light";

const primaryStyles: Record<ButtonTone, string> = {
  dark: "bg-[#1d2720] text-white hover:bg-[#92ad39]",
  green: "bg-[#92ad39] text-[#17220d] hover:bg-white",
  light: "bg-white text-[#1d2720] hover:bg-[#1d2720] hover:text-white",
};

export function PrimaryCta({ tone = "dark", label = PRIMARY_CTA, className = "" }: { tone?: ButtonTone; label?: string; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`${sans} group inline-flex w-fit items-center gap-3 px-6 py-4 text-[13px] font-semibold transition ${primaryStyles[tone]} ${className}`}
    >
      {label} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </a>
  );
}

export function SecondaryCta({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  const styles =
    tone === "dark"
      ? "border-white/30 text-white hover:border-[#92ad39] hover:text-[#cfe28a]"
      : "border-[#92ad39] text-[#53661c] hover:bg-[#92ad39] hover:text-white";
  return (
    <a href="#get-in-touch" className={`${sans} inline-flex w-fit items-center gap-2 border px-6 py-[15px] text-[13px] font-semibold transition ${styles} ${className}`}>
      {SECONDARY_CTA}
    </a>
  );
}

export function CtaPair({ tone = "light", primaryTone }: { tone?: Tone; primaryTone?: ButtonTone }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <PrimaryCta tone={primaryTone ?? (tone === "dark" ? "green" : "dark")} />
      <SecondaryCta tone={tone} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Slim header: logo + CTAs only, no full menu for paid traffic.        */
/* ------------------------------------------------------------------ */

export function SlimHeader({ tone = "light" }: { tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur ${dark ? "border-white/10 bg-[#10252a]/95" : "border-[#1d2720]/10 bg-[#f9faf5]/95"}`}>
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-12 lg:px-20">
        <a href="/" aria-label="Grid Concepts home" className="shrink-0">
          <Logo inverse={dark} />
        </a>
        <div className="flex items-center gap-5">
          <a href="#get-in-touch" className={`${sans} hidden text-[12px] font-semibold transition sm:block ${dark ? "text-[#c8d3d0] hover:text-white" : "text-[#465047] hover:text-[#6d8226]"}`}>
            {SECONDARY_CTA}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className={`${sans} whitespace-nowrap px-3.5 py-2.5 text-[11px] font-semibold transition sm:px-4 sm:text-[12px] ${dark ? "bg-[#92ad39] text-[#17220d] hover:bg-white" : "bg-[#1d2720] text-white hover:bg-[#92ad39]"}`}
          >
            <span className="sm:hidden">Free consultation</span>
            <span className="hidden sm:inline">{PRIMARY_CTA}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* Sticky bottom bar on phones, so the primary CTA is always one tap away. */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#1d2720] px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))] md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className={`${sans} text-[12px] leading-4 text-[#c8d3d0]`}>
          Free 30-minute call
          <br />
          <span className="text-white">No obligation</span>
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={`${sans} bg-[#92ad39] px-4 py-3 text-[12px] font-semibold text-[#17220d]`}>
          {PRIMARY_CTA}
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section headings                                                     */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return <p className={`${sans} text-[11px] font-semibold uppercase tracking-[.18em] ${tone === "dark" ? "text-[#b4cc66]" : "text-[#71872b]"}`}>{children}</p>;
}

export function SectionTitle({ children, tone = "light", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <h2 className={`${display} text-balance text-[33px] leading-[1.14] tracking-[-.03em] sm:text-[44px] ${tone === "dark" ? "text-white" : "text-[#1d2720]"} ${className}`}>
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Integration map: the systems they use, connected through one view,  */
/* with AI on top. Click a system to see what data moves.              */
/* ------------------------------------------------------------------ */

const flowCss = `
@keyframes gc-flow-right { to { background-position: 20px 0; } }
@keyframes gc-flow-left { to { background-position: -20px 0; } }
@keyframes gc-flow-down { to { background-position: 0 20px; } }
.gc-flow { height: 2px; background-image: repeating-linear-gradient(90deg, currentColor 0 8px, transparent 8px 20px); animation: gc-flow-right 1.1s linear infinite; }
.gc-flow.gc-left { animation-name: gc-flow-left; }
.gc-flow-v { width: 2px; background-image: repeating-linear-gradient(180deg, currentColor 0 8px, transparent 8px 20px); animation: gc-flow-down 1.1s linear infinite; }
@media (prefers-reduced-motion: reduce) { .gc-flow, .gc-flow-v { animation: none; } }
`;

export function IntegrationMap({ tone = "light" }: { tone?: Tone }) {
  const [selected, setSelected] = useState(systemGroups[1].id);
  const dark = tone === "dark";
  const active = systemGroups.find((g) => g.id === selected) ?? systemGroups[0];
  const left = systemGroups.slice(0, 3);
  const right = systemGroups.slice(3);

  const card = (isActive: boolean) =>
    `w-full text-left border px-4 py-3.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92ad39] ${
      isActive
        ? dark
          ? "border-[#92ad39] bg-[#92ad39]/15"
          : "border-[#92ad39] bg-[#eef2dc]"
        : dark
          ? "border-white/15 bg-white/[.04] hover:border-white/35"
          : "border-[#d8ded0] bg-white hover:border-[#a9bd6a]"
    }`;

  const systemButton = ({ id, label, tools }: { id: string; label: string; tools: string[] }) => {
    const isActive = id === selected;
    return (
      <button key={id} type="button" onClick={() => setSelected(id)} aria-pressed={isActive} className={card(isActive)}>
        <span className={`${sans} block text-[13px] font-semibold ${dark ? "text-white" : "text-[#1d2720]"}`}>{label}</span>
        <span className={`${sans} mt-1 block text-[11px] leading-4 ${dark ? "text-[#aab8b4]" : "text-[#657067]"}`}>{tools.join(" · ")}</span>
      </button>
    );
  };

  const lineColor = (id: string) => (id === selected ? "text-[#92ad39]" : dark ? "text-white/20" : "text-[#c9d1bd]");

  const hub = (
    <div className={`flex h-full flex-col ${dark ? "bg-[#f9faf5] text-[#1d2720]" : "bg-[#1d2720] text-white"}`}>
      <div className="bg-[#92ad39] px-5 py-4 text-[#17220d]">
        <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em]`}>Then AI can help</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {aiTools.map((tool) => (
            <span key={tool} className={`${sans} bg-white/70 px-2 py-1 text-[11px] font-semibold`}>{tool}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-5 py-6">
        <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] ${dark ? "text-[#71872b]" : "text-[#b4cc66]"}`}>Grid Concepts connects it</p>
        <p className={`${display} mt-3 text-[24px] leading-[1.15]`}>One trusted view of your business</p>
        <ul className={`${sans} mt-4 space-y-1.5 text-[12px] ${dark ? "text-[#3d473e]" : "text-[#c8d3d0]"}`}>
          {["Customers & contacts", "Jobs & bookings", "Invoices & payments", "Every conversation"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 shrink-0 bg-[#92ad39]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <style>{flowCss}</style>

      {/* Desktop: systems on both sides, flowing into the hub */}
      <div className="hidden grid-cols-[1fr_250px_1fr] lg:grid">
        <div className="flex flex-col justify-between gap-3 py-2">
          {left.map((g) => (
            <div key={g.id} className="flex items-center">
              <div className="w-[230px] shrink-0">{systemButton(g)}</div>
              <div className={`gc-flow min-w-6 flex-1 ${lineColor(g.id)}`} aria-hidden="true" />
            </div>
          ))}
        </div>
        {hub}
        <div className="flex flex-col justify-between gap-3 py-2">
          {right.map((g) => (
            <div key={g.id} className="flex items-center">
              <div className={`gc-flow gc-left min-w-6 flex-1 ${lineColor(g.id)}`} aria-hidden="true" />
              <div className="w-[230px] shrink-0">{systemButton(g)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone & tablet: systems grid flowing down into the hub */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          {systemGroups.map((g) => systemButton(g))}
        </div>
        <div className="flex justify-center">
          <div className="gc-flow-v h-9 text-[#92ad39]" aria-hidden="true" />
        </div>
        {hub}
      </div>

      {/* Detail for the selected system */}
      <div aria-live="polite" className={`mt-5 grid gap-5 border p-5 sm:grid-cols-[.8fr_1fr_1fr] sm:p-6 ${dark ? "border-white/15 bg-white/[.03]" : "border-[#d8ded0] bg-[#fbfcf8]"}`}>
        <div>
          <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] ${dark ? "text-[#b4cc66]" : "text-[#71872b]"}`}>Selected</p>
          <p className={`${display} mt-2 text-[22px] leading-tight ${dark ? "text-white" : "text-[#1d2720]"}`}>{active.label}</p>
        </div>
        <div>
          <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] ${dark ? "text-[#b4cc66]" : "text-[#71872b]"}`}>Data that moves</p>
          <p className={`${sans} mt-2 text-[14px] leading-6 ${dark ? "text-[#c8d3d0]" : "text-[#3d473e]"}`}>{active.data}</p>
        </div>
        <div>
          <p className={`${sans} text-[10px] font-semibold uppercase tracking-[.16em] ${dark ? "text-[#b4cc66]" : "text-[#71872b]"}`}>What it unlocks</p>
          <p className={`${sans} mt-2 text-[14px] leading-6 ${dark ? "text-[#c8d3d0]" : "text-[#3d473e]"}`}>{active.unlocks}</p>
        </div>
      </div>
      <p className={`${sans} mt-3 text-[12px] ${dark ? "text-[#899b96]" : "text-[#7a8279]"}`}>Tap a system to see what we connect. Don't see yours? If it has an export or an API, we can almost always work with it.</p>
    </div>
  );
}

/* Flat list of every tool, grouped. */
export function SystemsList({ tone = "light" }: { tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {systemGroups.map((g) => (
        <div key={g.id} className={`border-t pt-4 ${dark ? "border-white/15" : "border-[#d8ded0]"}`}>
          <p className={`${sans} text-[12px] font-semibold ${dark ? "text-white" : "text-[#1d2720]"}`}>{g.label}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {g.tools.map((tool) => (
              <span key={tool} className={`${sans} border px-2.5 py-1 text-[12px] ${dark ? "border-white/15 text-[#c8d3d0]" : "border-[#d8ded0] bg-white text-[#3d473e]"}`}>{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Use case pieces                                                      */
/* ------------------------------------------------------------------ */

export function Chips({ items, tone = "light" }: { items: string[]; tone?: Tone }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className={`${sans} border px-2.5 py-1 text-[12px] ${tone === "dark" ? "border-white/15 text-[#c8d3d0]" : "border-[#d8ded0] bg-white text-[#3d473e]"}`}>{item}</span>
      ))}
    </div>
  );
}

export function SystemsFlow({ uc, tone = "light" }: { uc: UseCase; tone?: Tone }) {
  const dark = tone === "dark";
  const box = `${sans} border px-3 py-2 text-[12px] ${dark ? "border-white/15 bg-white/[.04] text-white" : "border-[#d8ded0] bg-white text-[#1d2720]"}`;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {uc.systems.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className={box}>{s}</span>
          {i < uc.systems.length - 1 && <ArrowRight size={14} className="text-[#92ad39]" aria-hidden="true" />}
        </span>
      ))}
      <ArrowRight size={14} className="text-[#92ad39]" aria-hidden="true" />
      <span className={`${sans} bg-[#92ad39] px-3 py-2 text-[12px] font-semibold text-[#17220d]`}>{uc.short}</span>
    </div>
  );
}

export function CaseStudyLink({ uc, tone = "light" }: { uc: UseCase; tone?: Tone }) {
  return (
    <a href={uc.href} className={`${sans} group inline-flex items-center gap-2 text-[12px] font-semibold transition ${tone === "dark" ? "text-[#cfe28a] hover:text-white" : "text-[#53661c] hover:text-[#1d2720]"}`}>
      Read the {uc.client} case study <ArrowRight size={14} className="transition group-hover:translate-x-1" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Customers                                                            */
/* ------------------------------------------------------------------ */

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function LogoMark({ customer, tone = "light", size = "md", monogramOnly = false }: { customer: Customer; tone?: Tone; size?: "sm" | "md"; monogramOnly?: boolean }) {
  const [failed, setFailed] = useState(false);
  const dark = tone === "dark";
  const h = size === "sm" ? "max-h-[30px]" : "max-h-[40px]";
  if (customer.logo && !failed) {
    return (
      <img
        src={customer.logo}
        alt={`${customer.name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`block ${h} max-w-[150px] object-contain object-left ${dark ? "brightness-0 invert" : ""}`}
      />
    );
  }
  // Wordmark stand-in until the real logo file is supplied.
  if (monogramOnly) {
    return <span className={`${display} flex size-11 items-center justify-center text-[16px] ${dark ? "bg-white/10 text-[#cfe28a]" : "bg-[#eef2dc] text-[#53661c]"}`}>{initials(customer.name)}</span>;
  }
  return (
    <span className="flex items-center gap-2.5">
      <span className={`${display} flex size-9 shrink-0 items-center justify-center text-[14px] ${dark ? "bg-white/10 text-[#cfe28a]" : "bg-[#eef2dc] text-[#53661c]"}`}>{initials(customer.name)}</span>
      <span className={`${display} text-[15px] leading-tight ${dark ? "text-white" : "text-[#1d2720]"}`}>{customer.name}</span>
    </span>
  );
}

export function LogoStrip({ tone = "light", label = "Trusted by Australian businesses including" }: { tone?: Tone; label?: string }) {
  const dark = tone === "dark";
  const list = customers.slice(0, 8);
  return (
    <div>
      <p className={`${sans} text-center text-[11px] font-semibold uppercase tracking-[.16em] ${dark ? "text-[#899b96]" : "text-[#7a8279]"}`}>{label}</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="gc-marquee flex w-max items-center gap-12">
          {[...list, ...list].map((c, i) => (
            <div key={`${c.name}-${i}`} className="shrink-0 opacity-80" aria-hidden={i >= list.length}>
              <LogoMark customer={c} tone={tone} size="sm" />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes gc-marquee{to{transform:translateX(-50%)}}.gc-marquee{animation:gc-marquee 40s linear infinite}.gc-marquee:hover{animation-play-state:paused}@media (prefers-reduced-motion: reduce){.gc-marquee{animation:none;flex-wrap:wrap;width:auto;justify-content:center}}`}</style>
    </div>
  );
}

export function CustomersGrid({ tone = "light" }: { tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <div className={`grid border-l border-t sm:grid-cols-2 lg:grid-cols-4 ${dark ? "border-white/12" : "border-[#d8ded0]"}`}>
      {customers.map((c) => {
        const inner = (
          <>
            <div className="flex h-[48px] items-center"><LogoMark customer={c} tone={tone} monogramOnly /></div>
            <div className="mt-auto pt-6">
              <p className={`${display} text-[16px] leading-tight ${dark ? "text-white" : "text-[#1d2720]"}`}>{c.name}</p>
              <p className={`${sans} mt-2 flex flex-wrap gap-x-2 text-[12px] ${dark ? "text-[#aab8b4]" : "text-[#657067]"}`}>
                <span>{c.industry}</span>
                <span aria-hidden="true">·</span>
                <span>{c.size}</span>
              </p>
              {c.href && <p className={`${sans} mt-3 text-[11px] font-semibold ${dark ? "text-[#cfe28a]" : "text-[#53661c]"}`}>Read case study →</p>}
            </div>
          </>
        );
        const cls = `flex min-h-[170px] flex-col border-b border-r p-6 transition ${dark ? "border-white/12" : "border-[#d8ded0] bg-white"}`;
        return c.href ? (
          <a key={c.name} href={c.href} className={`${cls} ${dark ? "hover:bg-white/[.04]" : "hover:bg-[#f6f8ef]"}`}>{inner}</a>
        ) : (
          <div key={c.name} className={cls}>{inner}</div>
        );
      })}
      <div className={`flex min-h-[170px] flex-col justify-between border-b border-r p-6 ${dark ? "border-white/12 bg-[#92ad39]/10" : "border-[#d8ded0] bg-[#eef2dc]"}`}>
        <p className={`${display} text-[20px] leading-tight ${dark ? "text-white" : "text-[#1d2720]"}`}>Your business could be next.</p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={`${sans} text-[12px] font-semibold ${dark ? "text-[#cfe28a]" : "text-[#53661c]"}`}>Book a {PRIMARY_CTA} →</a>
      </div>
    </div>
  );
}

export function CustomersTable() {
  return (
    <div className="relative overflow-x-auto border border-[#d8ded0] bg-white">
      <table className={`${sans} w-full min-w-[560px] border-collapse text-left`}>
        <thead>
          <tr className="border-b border-[#d8ded0] bg-[#f6f8ef] text-[10px] font-semibold uppercase tracking-[.14em] text-[#71872b]">
            <th className="px-5 py-3 font-semibold">Customer</th>
            <th className="px-5 py-3 font-semibold">Industry</th>
            <th className="px-5 py-3 font-semibold">Size</th>
            <th className="px-5 py-3 font-semibold"><span className="sr-only">Case study</span></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name} className="border-b border-[#e4e8dc] last:border-b-0">
              <td className="px-5 py-4">
                <div className="flex min-h-[36px] items-center">
                  {c.logo ? (
                    <span className="flex items-center gap-4"><LogoMark customer={c} size="sm" /><span className="sr-only">{c.name}</span></span>
                  ) : (
                    <LogoMark customer={c} size="sm" />
                  )}
                </div>
              </td>
              <td className="px-5 py-4 text-[13px] text-[#3d473e]">{c.industry}</td>
              <td className="px-5 py-4 text-[13px] text-[#3d473e]">{c.size}</td>
              <td className="px-5 py-4 text-right">
                {c.href && <a href={c.href} className="whitespace-nowrap text-[12px] font-semibold text-[#53661c] hover:text-[#1d2720]">Case study →</a>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials slider                                                  */
/* ------------------------------------------------------------------ */

export function TestimonialSlider({ tone = "dark" }: { tone?: Tone }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dark = tone === "dark";
  const count = testimonials.length;
  const go = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => window.clearInterval(t);
  }, [paused, count]);

  return (
    <div
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-out motion-reduce:transition-none" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((t, i) => (
            <figure key={i} className="w-full shrink-0 pr-1" aria-hidden={i !== index} aria-roledescription="slide" aria-label={`${i + 1} of ${count}`}>
              <span className={`${display} block text-[72px] leading-[.6] ${dark ? "text-[#92ad39]" : "text-[#92ad39]"}`} aria-hidden="true">“</span>
              <blockquote className={`${display} mt-4 max-w-[30ch] text-balance text-[25px] italic leading-[1.35] tracking-[-.015em] sm:text-[34px] ${dark ? "text-white" : "text-[#1d2720]"}`}>
                {t.quote}
              </blockquote>
              <figcaption className={`${sans} mt-7 flex items-center gap-3 text-[13px] ${dark ? "text-[#c8d3d0]" : "text-[#586058]"}`}>
                <span className="h-px w-7 bg-[#92ad39]" />
                <span>
                  <b className={dark ? "text-white" : "text-[#1d2720]"}>{t.name}</b> · {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-9 flex items-center gap-4">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous testimonial" className={`flex size-10 items-center justify-center border transition ${dark ? "border-white/25 text-white hover:border-[#92ad39]" : "border-[#c9d1bd] text-[#1d2720] hover:border-[#92ad39]"}`}>
          <ChevronLeft size={18} />
        </button>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next testimonial" className={`flex size-10 items-center justify-center border transition ${dark ? "border-white/25 text-white hover:border-[#92ad39]" : "border-[#c9d1bd] text-[#1d2720] hover:border-[#92ad39]"}`}>
          <ChevronRight size={18} />
        </button>
        <div className="ml-2 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 transition-all ${i === index ? "w-8 bg-[#92ad39]" : dark ? "w-4 bg-white/25" : "w-4 bg-[#c9d1bd]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export function FaqList({ tone = "light" }: { tone?: Tone }) {
  const dark = tone === "dark";
  return (
    <div className={`border-t ${dark ? "border-white/15" : "border-[#d8ded0]"}`}>
      {faqs.map((f, i) => (
        <details key={f.q} className={`group border-b ${dark ? "border-white/15" : "border-[#d8ded0]"}`} open={i === 0}>
          <summary className={`flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden`}>
            <span className={`${display} text-[19px] leading-snug sm:text-[21px] ${dark ? "text-white" : "text-[#1d2720]"}`}>{f.q}</span>
            <Plus size={20} className="mt-1 shrink-0 text-[#92ad39] transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className={`${sans} max-w-[68ch] pb-6 text-[15px] leading-7 ${dark ? "text-[#c8d3d0]" : "text-[#586058]"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA band                                                     */
/* ------------------------------------------------------------------ */

export function ClosingBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-[#92ad39]">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6 py-20 text-center md:py-24">
        <h2 className={`${display} max-w-[18ch] text-balance text-[36px] leading-[1.1] tracking-[-.035em] text-[#18200c] sm:text-[50px]`}>{title}</h2>
        <p className={`${sans} mt-6 max-w-[560px] text-[16px] leading-7 text-[#34400f]`}>{text}</p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <PrimaryCta tone="dark" />
          <a href="#get-in-touch" className={`${sans} px-4 py-3 text-[13px] font-semibold text-[#283309] underline decoration-[#283309]/50 underline-offset-4 transition hover:text-white`}>{SECONDARY_CTA}</a>
        </div>
      </div>
    </section>
  );
}
