import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons matching the reference image exactly
// ============================================================================

function GearCogIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function TriangleRulerIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Outer Right Triangle */}
      <polygon points="3 21 21 21 3 3" strokeWidth="2" />
      {/* Inner Cutout Triangle */}
      <polygon points="6 18 15 18 6 9" strokeWidth="1.6" />
      {/* Measurement Ticks */}
      <line x1="9" y1="18" x2="9" y2="21" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="12" y2="21" strokeWidth="1.5" />
      <line x1="15" y1="18" x2="15" y2="21" strokeWidth="1.5" />
      <line x1="18" y1="18" x2="18" y2="21" strokeWidth="1.5" />
    </svg>
  );
}

function ProductCubeIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" strokeWidth="2" />
      <path d="M 12 22.7 L 12 12" strokeWidth="1.6" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" strokeWidth="1.6" />
    </svg>
  );
}

function DedicatedTeamIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Center Person */}
      <circle cx="12" cy="7" r="3" strokeWidth="1.8" />
      <path d="M 7 19 C 7 14.5 17 14.5 17 19" strokeWidth="1.8" />
      {/* Left Person */}
      <circle cx="5" cy="10" r="2.2" strokeWidth="1.6" />
      <path d="M 1 20 C 1 16.5 8 16.5 8 20" strokeWidth="1.6" />
      {/* Right Person */}
      <circle cx="19" cy="10" r="2.2" strokeWidth="1.6" />
      <path d="M 16 20 C 16 16.5 23 16.5 23 20" strokeWidth="1.6" />
    </svg>
  );
}

function FactoryPlantIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 2 20 L 2 10 L 7 13 L 7 10 L 12 13 L 12 5 L 18 5 L 18 20 Z" strokeWidth="1.8" />
      <rect x="5" y="16" width="3" height="4" />
      <rect x="13" y="14" width="3" height="6" />
      <line x1="20" y1="9" x2="22" y2="9" />
      <line x1="20" y1="13" x2="22" y2="13" />
      <line x1="20" y1="17" x2="22" y2="17" />
    </svg>
  );
}

interface EngagementItem {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const engagementOptions: EngagementItem[] = [
  {
    no: "01",
    icon: GearCogIcon,
    title: "Engineering Services",
    description: "Use DEVISHA for a specific engineering task or design assignment.",
  },
  {
    no: "02",
    icon: TriangleRulerIcon,
    title: "Design-to-Manufacturing",
    description: "Entrust complete engineering and manufacturing coordination to one partner.",
  },
  {
    no: "03",
    icon: ProductCubeIcon,
    title: "Product Development",
    description: "Engage DEVISHA for concept-to-production product development.",
  },
  {
    no: "04",
    icon: DedicatedTeamIcon,
    title: "Dedicated Engineering Team",
    description: "Build an extended engineering team through dedicated DEVISHA resources.",
  },
  {
    no: "05",
    icon: FactoryPlantIcon,
    title: "Manufacturing Support",
    description: "Use DEVISHA engineering and vendor capabilities for production execution.",
  },
];

export function WorkWithDevishaSection() {
  return (
    <section id="engagement" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10 lg:pb-12">
          {/* Left Eyebrow + Title */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                ENGAGEMENT
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Work With DEVISHA Your Way
            </h2>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-[#0284c7] pl-4 py-1 space-y-1">
              {["FLEXIBLE", "COLLABORATION", "REAL", "OUTCOMES"].map((line) => (
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
        {/* TOP-CENTER CIRCLE & BRANCHING CONNECTOR DIAGRAM (DESKTOP) */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative max-w-[1200px] mx-auto">
          {/* SVG Canvas for Hub and Continuous Branching Connector Rays */}
          <div className="relative w-full h-[220px]">
            <svg
              viewBox="0 0 1200 220"
              className="w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                {/* Soft Radial Glow for Central Circle */}
                <radialGradient id="hubOrbitGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#f0f9ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* ----------------- BRANCHING CONNECTOR PATHS ----------------- */}
              {/* Branch 01 (to Far Left Column: x=120, y=220) */}
              <path
                d="M 525 90 Q 480 120 400 120 L 160 120 Q 120 120 120 160 L 120 220"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />
              <circle cx="120" cy="220" r="2.5" fill="#0284c7" />

              {/* Branch 02 (to Mid Left Column: x=360, y=220) */}
              <path
                d="M 550 145 C 500 175 360 155 360 220"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />
              <circle cx="360" cy="220" r="2.5" fill="#0284c7" />

              {/* Branch 03 (to Center Column: x=600, y=220) */}
              <line
                x1="600"
                y1="165"
                x2="600"
                y2="220"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />
              <circle cx="600" cy="220" r="2.5" fill="#0284c7" />

              {/* Branch 04 (to Mid Right Column: x=840, y=220) */}
              <path
                d="M 650 145 C 700 175 840 155 840 220"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />
              <circle cx="840" cy="220" r="2.5" fill="#0284c7" />

              {/* Branch 05 (to Far Right Column: x=1080, y=220) */}
              <path
                d="M 675 90 Q 720 120 800 120 L 1040 120 Q 1080 120 1080 160 L 1080 220"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />
              <circle cx="1080" cy="220" r="2.5" fill="#0284c7" />

              {/* ----------------- CENTRAL HUB GRAPHICS ----------------- */}
              {/* Outer Radial Glow */}
              <circle cx="600" cy="90" r="88" fill="url(#hubOrbitGlow)" />

              {/* Outer Thin Ring */}
              <circle cx="600" cy="90" r="75" stroke="#bae6fd" strokeWidth="1.5" />

              {/* Secondary Dashed Ring */}
              <circle
                cx="600"
                cy="90"
                r="68"
                stroke="#bae6fd"
                strokeWidth="1"
                strokeDasharray="4 3"
              />

              {/* Main White Body */}
              <circle cx="600" cy="90" r="62" fill="#ffffff" stroke="#e0f2fe" strokeWidth="1.5" />

              {/* Cardinal Accent Dots */}
              <circle cx="600" cy="15" r="2.5" fill="#0284c7" />
              <circle cx="600" cy="165" r="2.5" fill="#0284c7" />
              <circle cx="525" cy="90" r="2.5" fill="#0284c7" />
              <circle cx="675" cy="90" r="2.5" fill="#0284c7" />
            </svg>

            {/* Central Hub Text Overlay */}
            <div className="absolute left-1/2 top-[90px] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-center select-none pointer-events-none z-10">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-slate-800 leading-tight">
                WAYS
              </p>
              <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-slate-800 leading-tight">
                TO WORK
              </p>
              <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-slate-800 leading-tight">
                TOGETHER
              </p>
            </div>
          </div>

          {/* 5 Evenly Aligned Items Row directly underneath connector endpoints */}
          <div className="grid grid-cols-5 w-full pt-1">
            {engagementOptions.map((item, idx) => (
              <Reveal key={item.no} delay={idx * 60} className="flex flex-col items-center text-center px-2">
                {/* 1. Number Marker */}
                <span className="font-mono text-sm font-bold text-[#0284c7] tracking-tight mb-3 select-none">
                  {item.no}
                </span>

                {/* 2. Large Circular Engineering Icon */}
                <div className="size-20 rounded-full border border-sky-100 ring-8 ring-sky-50/80 bg-white flex items-center justify-center text-[#0284c7] shadow-sm transition-transform duration-300 hover:scale-105">
                  <item.icon className="size-8" />
                </div>

                {/* 3. Title */}
                <h3 className="font-display text-[17px] font-bold text-slate-900 tracking-tight mt-5 leading-snug">
                  {item.title}
                </h3>

                {/* 4. Small Blue Underline Accent */}
                <div className="h-[2px] w-8 bg-[#0284c7] my-3 transition-all duration-300 hover:w-12" />

                {/* 5. Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal max-w-[210px] mx-auto">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET RESPONSIVE VIEW (< 1024px)                 */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-8">
          {/* Mobile Central Hub Banner */}
          <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 text-center">
            <div className="h-[2px] w-8 bg-[#0284c7] mx-auto mb-2" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
              WAYS TO WORK TOGETHER
            </p>
          </div>

          {/* 5 Engagement Options Stacked / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {engagementOptions.map((item, idx) => (
              <Reveal key={item.no} delay={idx * 50}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <span className="font-mono text-sm font-bold text-[#0284c7] mb-2">
                    {item.no}
                  </span>
                  <div className="size-16 rounded-full border border-sky-100 ring-8 ring-sky-50/80 bg-white flex items-center justify-center text-[#0284c7] shadow-sm mb-4">
                    <item.icon className="size-7" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <div className="h-[2px] w-6 bg-[#0284c7] my-2" />
                  <p className="text-xs leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
