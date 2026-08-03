import svgPaths from "./svg-vcinlohbnv";
import imgHeroPhoto from "./5675133cc2a47ac8d7bb2d224b72a572a9a50200.png";
import imgDoorPhoto from "./f2a3a8593636b4d548b66e9abc61691a70647682.png";
import imgDoorPhoto1 from "./437db55220169d7534f7739dbfd727b73ffd0bca.png";
import imgImage1 from "./982001395152230f7b942ae58238d22b7d003e13.png";

function Logo() {
  return (
    <div className="h-[42px] relative shrink-0 w-[195px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 42">
        <g id="Logo">
          <path d={svgPaths.p33e65132} fill="var(--fill-0, #191919)" id="Vector" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2df517f0} fill="var(--fill-0, #92AD39)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[36px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-[#5a5a5a] text-[14px] whitespace-nowrap" data-name="Nav Links">
      <p className="relative shrink-0">Services</p>
      <p className="relative shrink-0">Profile</p>
      <p className="relative shrink-0">Case Studies</p>
      <p className="relative shrink-0">Insights</p>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#92ad39] content-stretch flex items-start overflow-clip px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="CTA Button">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Free Data Check</p>
    </div>
  );
}

function NavRow() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Nav Row">
      <Logo />
      <NavLinks />
      <CtaButton />
    </div>
  );
}

function NavbarL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navbar L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[80px] relative size-full">
          <NavRow />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e4e6dd] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[99px] shrink-0" data-name="Tag">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">{`DATA & TECHNOLOGY SPECIALISTS · MELBOURNE`}</p>
    </div>
  );
}

function PrimaryCta() {
  return (
    <div className="bg-[#92ad39] content-stretch flex items-start overflow-clip px-[32px] py-[16px] relative rounded-[10px] shrink-0" data-name="Primary CTA">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Request a Free AI-Readiness Data Check →</p>
    </div>
  );
}

function CtaRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-name="CTA Row">
      <PrimaryCta />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[15px] whitespace-nowrap">See our data work →</p>
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-name="Hero Left">
      <Tag />
      <div className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[54px] w-[min-content]">
        <p className="leading-[1.1] mb-0">Your AI Isn’t Failing.</p>
        <p className="leading-[1.1]">Your Data Is.</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[17px] w-[min-content]">83% of Australian businesses expect AI to reshape their operations this year - but only 3% have data clean enough to make it work. We fix the data and systems underneath, so AI delivers instead of disappoints.</p>
      <CtaRow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[13px] whitespace-nowrap">✓ No setup required · Results in 48 hours · Free, no obligation</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #92AD39)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">AI Readiness Data Check Score</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ecece8] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div className="absolute bg-[#92ad39] h-[6px] left-0 rounded-[3px] top-0 w-[24px]" data-name="Rectangle" />
    </div>
  );
}

function MetricDataQuality() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Metric: Data Quality">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[150px]">Data Quality</p>
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[12px] whitespace-nowrap">22%</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ecece8] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div className="absolute bg-[#92ad39] h-[6px] left-0 rounded-[3px] top-0 w-[37px]" data-name="Rectangle" />
    </div>
  );
}

function MetricSystemsIntegration() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Metric: Systems Integration">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[150px]">Systems Integration</p>
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[12px] whitespace-nowrap">34%</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ecece8] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div className="absolute bg-[#92ad39] h-[6px] left-0 rounded-[3px] top-0 w-[31px]" data-name="Rectangle" />
    </div>
  );
}

function MetricGovernanceSecurity() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Metric: Governance & Security">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[150px]">{`Governance & Security`}</p>
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[12px] whitespace-nowrap">28%</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ecece8] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div className="absolute bg-[#92ad39] h-[6px] left-0 rounded-[3px] top-0 w-[45px]" data-name="Rectangle" />
    </div>
  );
}

function MetricTeamAiSkills() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Metric: Team AI Skills">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[150px]">Team AI Skills</p>
      <Frame3 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[12px] whitespace-nowrap">41%</p>
    </div>
  );
}

function AiReadinessPanel() {
  return (
    <div className="absolute flex items-center justify-center left-[268px] top-[157px] w-[340px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="bg-white relative rounded-[16px] w-[340px]" data-name="AI Readiness Panel">
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
            <Header />
            <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[72px] whitespace-nowrap">31</p>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5a5a5a] text-[12px] whitespace-nowrap">out of 100 · Needs improvement</p>
            <MetricDataQuality />
            <MetricSystemsIntegration />
            <MetricGovernanceSecurity />
            <MetricTeamAiSkills />
          </div>
          <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_24px_0px_rgba(26,26,26,0.08)]" />
        </div>
      </div>
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[500px] relative rounded-[20px] w-[560px]" data-name="Hero Photo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgHeroPhoto} />
          <AiReadinessPanel />
        </div>
      </div>
    </div>
  );
}

function HeroRow() {
  return (
    <div className="content-stretch flex gap-[70px] items-center overflow-clip relative shrink-0 w-full" data-name="Hero Row">
      <HeroLeft />
      <HeroPhoto />
    </div>
  );
}

function HeroL() {
  return (
    <div className="bg-[#fbfcf7] relative shrink-0 w-full" data-name="Hero L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[80px] relative size-full">
          <HeroRow />
        </div>
      </div>
    </div>
  );
}

function StripRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[44px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Strip Row">
      <p className="relative shrink-0 text-[#6d8226] text-[13px]">Since 2010 we have serviced clients in:</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Property</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Technology</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Legal</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Medical</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Vets</p>
      <p className="relative shrink-0 text-[#8a8a8a] text-[14px]">Training</p>
    </div>
  );
}

function LogoStripL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo Strip L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[80px] py-[28px] relative size-full">
          <StripRow />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[720px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">THE PROBLEM</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">Most AI Initiatives Fail Before They Start</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[16px] text-center w-[min-content]">AI is only as useful as the data and systems behind it. Most Australian businesses are trying to bolt AI onto infrastructure that was never built for it - and it’s costing them in ways that compound.</p>
    </div>
  );
}

function Stat() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Stat: 37%">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[40px] whitespace-nowrap">37%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[16px] w-[min-content]">Start their search on AI, not Google</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Consumers are going straight to ChatGPT and Perplexity - bypassing Google entirely. If you’re not there, you don’t exist.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Stat2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Stat: 97%">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[40px] whitespace-nowrap">97%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[16px] w-[min-content]">Of company data falls short of quality standards</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Messy, duplicated, and disconnected data is the single most common reason AI pilots stall - long before anyone gets to ask whether the AI itself is any good.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Stat1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Stat: 76%">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[40px] whitespace-nowrap">76%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[16px] w-[min-content]">Have no AI strategy or roadmap at all</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Even though 83% expect AI to significantly affect their business within the year. It’s not apathy - it’s a missing plan.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Stats Row">
      <Stat />
      <Stat2 />
      <Stat1 />
    </div>
  );
}

function ProblemL() {
  return (
    <div className="bg-[#f6f7f1] relative shrink-0 w-full" data-name="Problem L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading />
          <StatsRow />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[16px] text-center whitespace-nowrap">This is where Grid Concepts starts - with clean data, the right systems, and a plan, not more tools.</p>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[720px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">TWO WAYS TO START</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">Fixing a Problem or Running a Pilot?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[16px] text-center w-[min-content]">Whichever brought you here, the first step is the same: find out if your data can support what you want AI to do. Both paths start with the free AI-Readiness Data Check.</p>
    </div>
  );
}

function DoorPhoto() {
  return (
    <div className="h-[190px] relative rounded-[12px] shrink-0 w-full" data-name="Door Photo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgDoorPhoto} />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.44px] whitespace-nowrap">FOR OWNERS FIXING A PROBLEM</p>
    </div>
  );
}

function Door() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Door">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[32px] relative size-full">
          <DoorPhoto />
          <Badge />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[min-content]">Something is costing you time or money</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Quotes go out slow. Enquiries sit unanswered overnight. Your team re-types the same data into three systems, and nobody trusts the CRM. We trace the problem to the data and systems underneath it - and fix those first, so the automation actually holds.</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">Start with a free data check →</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DoorPhoto1() {
  return (
    <div className="h-[190px] relative rounded-[12px] shrink-0 w-full" data-name="Door Photo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[145.08%] left-0 max-w-none top-[-7.75%] w-full" src={imgDoorPhoto1} />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.44px] whitespace-nowrap">FOR LEADERS EXPLORING AI</p>
    </div>
  );
}

function Door1() {
  return (
    <div className="bg-[#eef2dc] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Door">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[32px] relative size-full">
          <DoorPhoto1 />
          <Badge1 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[min-content]">The board wants an AI position</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Competitors are marketing AI features and you need more than a demo. We scope a structured 8–12 week pilot with defined success criteria, governance answered upfront, and a result you can put in front of the board. The Data Check is phase one - no pilot succeeds on messy data.</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">Scope a structured pilot →</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#92ad39] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DoorsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Doors Row">
      <Door />
      <Door1 />
    </div>
  );
}

function TwoWaysInL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Two Ways In L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading1 />
          <DoorsRow />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[900px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">OUR SERVICES</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">We Fix the Data First. Then Everything Else Works.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[16px] text-center w-[min-content]">Most agencies start with the campaign. We start with the data and systems underneath - because that’s where AI initiatives actually break down.</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[11px] whitespace-nowrap">Start here</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] whitespace-nowrap">{`Data & Technology`}</p>
      <Badge2 />
    </div>
  );
}

function DataTechnology() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Data & Technology">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[28px] py-[32px] relative size-full">
          <Header1 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">The foundation everything else needs.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Clean data, connected systems, and the infrastructure AI actually needs to perform. We start here because most AI initiatives fail before they start - not from a lack of tools, but from data that isn’t ready.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[min-content]">{`CRM & Marketing Automation · AI-Readiness Data Audits · Website Development · Reporting & Attribution`}</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">Start with a free data check →</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] whitespace-nowrap">{`Digital Strategy & Growth`}</p>
    </div>
  );
}

function DigitalStrategyGrowth() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Digital Strategy & Growth">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[28px] py-[32px] relative size-full">
          <Header2 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">The growth engine, AI-informed.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">SEO, performance marketing, and content strategy - built around what AI engines are surfacing, not just what Google ranked last year. Your existing digital presence, made ready for the way search works now.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[min-content]">Technical SEO · Performance Marketing · Content Strategy · Conversion Optimisation</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">See what’s possible →</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] whitespace-nowrap">AI Visibility</p>
    </div>
  );
}

function AiVisibility() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="AI Visibility">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[28px] py-[32px] relative size-full">
          <Header3 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">Be the brand AI recommends.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We track exactly where you appear - and don’t appear - across ChatGPT, Google AI Overviews, Perplexity, and Claude. Then we fix it. AEO, GEO, entity authority, structured data, and LLM optimisation.</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[13px] w-[min-content]">{`AI Citation Audit · AEO Campaign Management · Entity & Schema Optimisation · Competitor Benchmarking`}</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">Check your AI visibility →</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ServiceCardsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Service Cards Row">
      <DataTechnology />
      <DigitalStrategyGrowth />
      <AiVisibility />
    </div>
  );
}

function ServicesL() {
  return (
    <div className="bg-[#f6f7f1] relative shrink-0 w-full" data-name="Services L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading2 />
          <ServiceCardsRow />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[720px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">HOW IT WORKS</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">Your Path to AI That Actually Works</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5a5a5a] text-[16px] text-center whitespace-nowrap">From messy data to measurable results - in three clear steps.</p>
    </div>
  );
}

function Num() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[8px] shrink-0" data-name="Num">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">01</p>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Step 01">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[32px] relative size-full">
          <Num />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Free AI-Readiness Data Check</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We audit your data quality, systems, and governance against what AI actually needs to perform. You’ll see exactly where the gaps are - free, in 48 hours.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Num1() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[8px] shrink-0" data-name="Num">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">02</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Step 02">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[32px] relative size-full">
          <Num1 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">{`Custom Data & Systems Roadmap`}</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We build a prioritised plan to fix the data, integration, and governance gaps we found - then layer in the SEO, content, and AI-visibility work that depends on it.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Num2() {
  return (
    <div className="bg-[#eef2dc] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[8px] shrink-0" data-name="Num">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6d8226] text-[14px] whitespace-nowrap">03</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Step 03">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[32px] relative size-full">
          <Num2 />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">{`Execute & Track Results`}</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We implement the fixes, run the campaigns, and report monthly on what’s actually moving - data quality, system health, traffic, and AI citations.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function StepsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Steps Row">
      <Step />
      <Step1 />
      <Step2 />
    </div>
  );
}

function HowItWorksL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="How It Works L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading3 />
          <StepsRow />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[720px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">{`GOVERNANCE & OWNERSHIP`}</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">Your Data. Your Systems. Your Control.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[16px] text-center w-[min-content]">We build on what you own. No lock-in, no black boxes - and every governance question answered in writing before anything runs.</p>
    </div>
  );
}

function TrustYourDataStaysYours() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Trust: Your data stays yours">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[22px] whitespace-nowrap">I</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Your data stays yours</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We work inside your systems - your CRM, your accounts, your cloud. Nothing is moved into a platform you don’t control, and we document exactly what is shared with AI model providers.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TrustPrivacyActPostureInWriting() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Trust: Privacy Act posture, in writing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[22px] whitespace-nowrap">II</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Privacy Act posture, in writing</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Where your data lives, how client records are handled, and what never leaves your environment - answered upfront, in plain English, before any pilot or build starts.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TrustNoVendorLockIn() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Trust: No vendor lock-in">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic px-[28px] py-[32px] relative size-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[22px] whitespace-nowrap">III</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">No vendor lock-in</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">We pick the right tool for each job and switch as the field moves. Everything we build - integrations, dashboards, automations - belongs to you and keeps working if we part ways.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TrustRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Trust Row">
      <TrustYourDataStaysYours />
      <TrustPrivacyActPostureInWriting />
      <TrustNoVendorLockIn />
    </div>
  );
}

function GovernanceL() {
  return (
    <div className="bg-[#f6f7f1] relative shrink-0 w-full" data-name="Governance L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading4 />
          <TrustRow />
        </div>
      </div>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[8px] items-start leading-[normal] left-[80px] not-italic overflow-clip px-[28px] py-[24px] rounded-[14px] shadow-[0px_8px_24px_0px_rgba(26,26,26,0.12)] top-[298px] whitespace-nowrap" data-name="Quote Card">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1a1a] text-[18px]">“We talk about your data like it is our own.”</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[13px]">A local Melbourne team you can sit down with</p>
    </div>
  );
}

function PhotoBandL() {
  return (
    <div className="bg-[#dce0d2] h-[440px] overflow-clip relative shrink-0 w-full" data-name="Photo Band L">
      <div className="absolute h-[651px] left-0 top-[-130px] w-[1440px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <QuoteCard />
    </div>
  );
}

function Heading5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 w-[720px]" data-name="Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[11px] tracking-[0.88px] whitespace-nowrap">CASE STUDIES</p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">Real Results for Australian SMEs</p>
    </div>
  );
}

function CaseMultiLocationAlliedHealthGroup() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Case: Multi-Location Allied Health Group">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[28px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[12px] tracking-[0.48px] whitespace-nowrap">{`DATA & SYSTEMS CLEANUP`}</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Multi-Location Allied Health Group</p>
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[44px] whitespace-nowrap">↓ 94%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Drop in duplicate customer records</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">This group’s customer data was scattered across four disconnected systems - duplicated, outdated, and impossible to trust. We unified it into one clean source of truth, the foundation every AI tool and campaign now runs on.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function CaseMorningtonVetClinic() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Case: Mornington Vet Clinic">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[28px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[12px] tracking-[0.48px] whitespace-nowrap">SEO + AEO CAMPAIGN</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Mornington Vet Clinic</p>
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[44px] whitespace-nowrap">↑ 48%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Local qualified leads</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">A targeted AEO strategy helped this clinic rank prominently in Google AI Overviews for high-intent veterinary searches across the Mornington Peninsula.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function CaseOrthodonticsAustralia() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Case: Orthodontics Australia">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[28px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6d8226] text-[12px] tracking-[0.48px] whitespace-nowrap">AI VISIBILITY AUDIT + SEO</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[18px] w-[min-content]">Orthodontics Australia</p>
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6d8226] text-[44px] whitespace-nowrap">0%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Traffic loss during AI rollout</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">Proactive EEAT improvements and structured data implementation meant zero disruption when Google launched AI Overviews in Australia.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e6dd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(26,26,26,0.05)]" />
    </div>
  );
}

function CsCardsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="CS Cards Row">
      <CaseMultiLocationAlliedHealthGroup />
      <CaseMorningtonVetClinic />
      <CaseOrthodonticsAustralia />
    </div>
  );
}

function CaseStudiesL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Case Studies L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[52px] items-center p-[80px] relative size-full">
          <Heading5 />
          <CsCardsRow />
        </div>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[300px]" data-name="Email Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[15px] whitespace-nowrap">Enter your work email</p>
    </div>
  );
}

function CtaButton1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start overflow-clip px-[28px] py-[16px] relative rounded-[10px] shrink-0" data-name="CTA Button">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Claim My Free Data Check →</p>
    </div>
  );
}

function FormRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-name="Form Row">
      <EmailInput />
      <CtaButton1 />
    </div>
  );
}

function CtaInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-[760px]" data-name="CTA Inner">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d3314] text-[11px] tracking-[0.88px] whitespace-nowrap">FREE AI-READINESS DATA CHECK</p>
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[46px] text-center w-[min-content]">Find Out If Your Data Is Actually AI-Ready</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#2d3314] text-[16px] text-center w-[min-content]">Your free check takes 48 hours and shows exactly where your data, systems, and governance stand - plus what’s blocking AI from delivering real results.</p>
      <FormRow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2d3314] text-[13px] whitespace-nowrap">No credit card. No commitment. Just clarity.</p>
    </div>
  );
}

function CtaL() {
  return (
    <div className="bg-[#92ad39] relative shrink-0 w-full" data-name="CTA L">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[80px] relative size-full">
          <CtaInner />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[42px] relative shrink-0 w-[195px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 42">
        <g id="Logo">
          <path d={svgPaths.p33e65132} fill="var(--fill-0, #191919)" id="Vector" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2df517f0} fill="var(--fill-0, #92AD39)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BrandCol() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[340px]" data-name="Brand Col">
      <Logo1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5a5a5a] text-[14px] w-[min-content]">AI-ready data, systems, and marketing for Australian businesses. We fix what’s underneath so AI - and everything else - actually works.</p>
    </div>
  );
}

function ServicesCol() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Services Col">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1a1a] text-[13px]">Services</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">AI-Readiness Data Check</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">AI Strategy Consulting</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">AEO Campaign Management</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">AI-Ready Websites</p>
    </div>
  );
}

function CompanyCol() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Company Col">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1a1a] text-[13px]">Company</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">About Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">Case Studies</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">Blog</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">Contact</p>
    </div>
  );
}

function ContactCol() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contact Col">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1a1a1a] text-[13px]">Contact</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">1300 976 425</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">6D/596 North Rd</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a5a5a] text-[14px]">Ormond VIC 3204</p>
    </div>
  );
}

function FooterMain() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Footer Main">
      <BrandCol />
      <ServicesCol />
      <CompanyCol />
      <ContactCol />
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#e4e6dd] h-px relative shrink-0 w-full" data-name="Frame" />;
}

function CopyrightRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#8a8a8a] text-[13px] w-full whitespace-nowrap" data-name="Copyright Row">
      <p className="relative shrink-0">© 2026 Grid Concepts Pty Ltd. All rights reserved.</p>
      <p className="relative shrink-0">Privacy Policy · Terms of Service</p>
    </div>
  );
}

function FooterL() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer L">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[64px] px-[80px] relative size-full">
          <FooterMain />
          <Frame4 />
          <CopyrightRow />
        </div>
      </div>
    </div>
  );
}

export default function GridConceptsHomepageLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Grid Concepts — Homepage (Light)">
      <NavbarL />
      <HeroL />
      <LogoStripL />
      <ProblemL />
      <TwoWaysInL />
      <ServicesL />
      <HowItWorksL />
      <GovernanceL />
      <PhotoBandL />
      <CaseStudiesL />
      <CtaL />
      <FooterL />
    </div>
  );
}