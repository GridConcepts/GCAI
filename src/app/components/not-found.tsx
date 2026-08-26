import { ArrowRight } from "lucide-react";
import { Logo } from "./grid-concepts-homepage";

const sans = "font-['Inter',sans-serif]";
const display = "font-['Lora',serif]";

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f9faf5]">
      <header className="border-b border-[#1d2720]/10 bg-[#f9faf5]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-6 md:px-12 lg:px-20">
          <a href="/" aria-label="Grid Concepts home">
            <Logo />
          </a>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-[560px] text-center">
          <p className={`${display} text-[80px] leading-none text-[#92ad39] sm:text-[110px]`}>404</p>
          <h1 className={`${display} mt-4 text-[30px] leading-[1.2] tracking-[-.02em] text-[#1d2720] sm:text-[38px]`}>
            This page is not found.
          </h1>
          <p className={`${sans} mt-5 text-[16px] leading-[1.7] text-[#586058]`}>
            Visit the Grid Concepts homepage instead.
          </p>
          <a
            href="/"
            className={`${sans} group mt-9 inline-flex items-center gap-3 bg-[#1d2720] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-[#92ad39]`}
          >
            Back to homepage
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#dfe3d8] bg-[#f9faf5] py-6">
        <p className={`${sans} text-center text-[11px] text-[#8f978b]`}>
          © 2026 Grid Concepts Pty Ltd. Melbourne, Australia.
        </p>
      </footer>
    </main>
  );
}
