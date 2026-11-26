import React from "react";
import { Reveal } from "./Reveal";

// Precise custom line icons for the 8 industries matching reference image
function PowerIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 6 L8.5 13 L12.5 13 L11 18 L16.5 11 L12.5 11 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

function GeneratorIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <line x1="6" y1="3" x2="8" y2="6" />
      <line x1="16" y1="3" x2="18" y2="6" />
      <path d="M11 10 L9 13.5 L12 13.5 L10 16" />
      <circle cx="16" cy="12.5" r="2" />
    </svg>
  );
}

function EVCarIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 16 L3 16 C2.4 16 2 15.6 2 15 L2 12 C2 10.5 3 9 4.5 8.5 L7 7.5 C8 7.2 9 7 10 7 L14 7 C15.5 7 17 8 17.5 9.5 L19 13 L21 13 C21.6 13 22 13.4 22 14 L22 15 C22 15.6 21.6 16 21 16 L19 16" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
      <path d="M14 4 L11 9 L15 9 L13 13" strokeWidth="1.6" />
    </svg>
  );
}

function AutomationIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ProductCubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function FactoryPlantIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20 L2 9 L8 13 L8 9 L14 13 L14 4 L22 8 L22 20 Z" />
      <rect x="6" y="16" width="3" height="4" />
      <rect x="15" y="14" width="3" height="6" />
    </svg>
  );
}

function HVACFanIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5 C10.5 7 10 4 12 3 C14 4 13.5 7 12 9.5 Z" />
      <path d="M14.5 12 C17 10.5 20 10 21 12 C20 14 17 13.5 14.5 12 Z" />
      <path d="M12 14.5 C13.5 17 14 20 12 21 C10 20 10.5 17 12 14.5 Z" />
      <path d="M9.5 12 C7 13.5 4 14 3 12 C4 10 7 10.5 9.5 12 Z" />
    </svg>
  );
}

function BuildingsIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="9" height="18" rx="1" />
      <rect x="13" y="9" width="7" height="12" rx="1" />
      <line x1="7" y1="7" x2="8" y2="7" />
      <line x1="10" y1="7" x2="11" y2="7" />
      <line x1="7" y1="11" x2="8" y2="11" />
      <line x1="10" y1="11" x2="11" y2="11" />
      <line x1="7" y1="15" x2="8" y2="15" />
      <line x1="10" y1="15" x2="11" y2="15" />
      <line x1="16" y1="13" x2="17" y2="13" />
      <line x1="16" y1="17" x2="17" y2="17" />
    </svg>
  );
}

interface IndustryItem {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const leftIndustries: IndustryItem[] = [
  {
    no: "01",
    icon: PowerIcon,
    title: "Electrical & Power Systems",
    description: "Engineering and enclosure support for power distribution and electrical equipment.",
  },
  {
    no: "02",
    icon: GeneratorIcon,
    title: "Generator & Genset Industry",
    description: "Canopy, enclosure, container and associated mechanical engineering support.",
  },
  {
    no: "03",
    icon: EVCarIcon,
    title: "EV Infrastructure",
    description: "Sheet-metal and enclosure solutions for EV charging equipment.",
  },
  {
    no: "04",
    icon: AutomationIcon,
    title: "Industrial Automation",
    description: "Control cabinets and enclosure engineering for automation systems.",
  },
];

const rightIndustries: IndustryItem[] = [
  {
    no: "05",
    icon: ProductCubeIcon,
    title: "OEM Product Development",
    description: "Engineering support for organizations developing new industrial products.",
  },
  {
    no: "06",
    icon: FactoryPlantIcon,
    title: "Industrial Fabrication",
    description: "Design, detailing and production coordination for fabricated products.",
  },
  {
    no: "07",
    icon: HVACFanIcon,
    title: "HVAC & Equipment Manufacturing",
    description: "Cabinets, equipment covers and industrial sheet-metal solutions.",
  },
  {
    no: "08",
    icon: BuildingsIcon,
    title: "Plant & Manufacturing Operations",
    description: "Engineering, vendor and production-support services.",
  },
];

function IndustryRowItem({ item }: { item: IndustryItem }) {
  return (
    <div className="group flex items-start py-6 border-b border-slate-200/80 transition-colors">
      {/* Large subtle background number */}
      <span className="font-mono text-4xl sm:text-5xl font-extrabold text-slate-200 tracking-tighter w-14 sm:w-16 flex-shrink-0 select-none group-hover:text-[#0284c7]/30 transition-colors">
        {item.no}
      </span>

      {/* Vertical separator */}
      <div className="h-11 w-[1px] bg-slate-200 mx-3.5 sm:mx-5 flex-shrink-0 mt-1" />

      {/* Light-blue rounded icon container */}
      <div className="size-12 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center text-[#0284c7] flex-shrink-0 mr-4 mt-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <item.icon className="size-6" />
      </div>

      {/* Content Block */}
      <div className="flex-1 min-w-0 pr-2">
        {/* Small blue accent dash above title */}
        <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5 transition-all duration-300 group-hover:w-10" />

        {/* Title */}
        <h3 className="font-display text-[16px] sm:text-[17px] font-bold text-slate-900 tracking-tight transition-colors group-hover:text-[#0284c7]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                INDUSTRIES WE SERVE
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Engineering Across Industrial Applications
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Custom engineering and manufacturing solutions for diverse industrial needs.
            </p>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["DIVERSE", "INDUSTRIES", "COMMON GOAL", "A STRONGER TOMORROW"].map((line) => (
                <div
                  key={line}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 font-medium leading-relaxed"
                >
                  {line}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN LIST (4 Rows x 2 Columns)                        */}
        {/* ========================================================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 items-start">
          {/* Center Vertical Divider Line on Desktop/Tablet */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-200 -translate-x-1/2 pointer-events-none" />

          {/* Left Column (01 - 04) */}
          <div className="flex flex-col">
            {leftIndustries.map((item, idx) => (
              <Reveal key={item.no} delay={idx * 60}>
                <IndustryRowItem item={item} />
              </Reveal>
            ))}
          </div>

          {/* Right Column (05 - 08) */}
          <div className="flex flex-col">
            {rightIndustries.map((item, idx) => (
              <Reveal key={item.no} delay={idx * 60 + 30}>
                <IndustryRowItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
