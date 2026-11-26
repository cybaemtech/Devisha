import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons for the 6 Quality Stages
// ============================================================================

function ProcessDocGearIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Document */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="13" y2="13" />
      <line x1="8" y1="17" x2="11" y2="17" />
      {/* Gear at bottom right */}
      <circle cx="18" cy="18" r="2" />
      <path d="M18 14v1M18 21v1M14 18h1M21 18h1M15.2 15.2l.7.7M20.1 20.1l.7.7M15.2 20.8l.7-.7M20.1 15.9l.7-.7" strokeWidth="1.5" />
    </svg>
  );
}

function MaterialCubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function InspectionGearIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function VerificationSearchIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2.2" />
    </svg>
  );
}

function ImprovementShieldIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" strokeWidth="2" />
    </svg>
  );
}

function QualityPromiseChartIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="14" width="4" height="7" rx="0.5" />
      <rect x="10" y="10" width="4" height="11" rx="0.5" />
      <rect x="17" y="6" width="4" height="15" rx="0.5" />
      <path d="M4 10l6-5 6 3 5-5" strokeWidth="1.8" />
      <polyline points="18 3 21 3 21 6" strokeWidth="1.8" />
    </svg>
  );
}

interface QualityStage {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const qualityStages: QualityStage[] = [
  {
    no: "01",
    icon: ProcessDocGearIcon,
    title: "Process Control",
    description: "Defined engineering and manufacturing routes with clear project checkpoints.",
  },
  {
    no: "02",
    icon: MaterialCubeIcon,
    title: "Material Quality",
    description: "Material suitability, quality and traceability for industrial applications.",
  },
  {
    no: "03",
    icon: InspectionGearIcon,
    title: "In-Process Inspection",
    description: "Dimensional, fitment and visual checks during manufacturing.",
  },
  {
    no: "04",
    icon: VerificationSearchIcon,
    title: "Engineering Verification",
    description: "Drawings, assemblies and manufacturing considerations reviewed before production.",
  },
  {
    no: "05",
    icon: ImprovementShieldIcon,
    title: "Continuous Improvement",
    description: "Standardization, value engineering and production feedback loops.",
  },
  {
    no: "06",
    icon: QualityPromiseChartIcon,
    title: "Our Quality Promise",
    description: "High Precision • Competitive Cost\n• On-Time Delivery • Customer-Centric Support",
  },
];

export function QualityAssuranceSection() {
  return (
    <section id="quality" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                QUALITY ASSURANCE
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Quality Built into Every Stage
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Quality is not only a final inspection activity. DEVISHA focuses on engineering and manufacturing controls throughout project execution.
            </p>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-[#0284c7] pl-4 py-1 space-y-1">
              {["DISCIPLINE", "STANDARDS", "BETTER PRODUCTS", "LONGER PARTNERSHIPS"].map((line) => (
                <div
                  key={line}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0284c7]/80 font-medium leading-relaxed"
                >
                  {line}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* CIRCULAR QUALITY ASSURANCE HUB & 6 STAGES (DESKTOP)       */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative max-w-[1140px] mx-auto h-[580px] my-4">
          {/* SVG Canvas for Concentric Rings, Orbits, and Technical Connectors */}
          <svg
            viewBox="0 0 1140 580"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
          >
            <defs>
              {/* Outer soft glow radial gradient for central navy hub */}
              <radialGradient id="qualityHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.3" />
                <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ----------------- ORBIT RINGS & CONCENTRIC CIRCLES ----------------- */}
            {/* Outer Subtle Dashed Orbit */}
            <circle cx="570" cy="290" r="235" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="4 4" />

            {/* Main Orbit Ring (Where the 6 nodes reside, r=165) */}
            <circle cx="570" cy="290" r="165" stroke="#bae6fd" strokeWidth="1.2" />

            {/* Inner Dashed Concentric Ring */}
            <circle cx="570" cy="290" r="120" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />

            {/* Glow Aura behind Dark Navy Central Hub */}
            <circle cx="570" cy="290" r="100" fill="url(#qualityHubGlow)" />

            {/* Dark Navy Central Hub Disc */}
            <circle cx="570" cy="290" r="75" fill="#0b192c" stroke="#0284c7" strokeWidth="1.5" />

            {/* ----------------- TECHNICAL CONNECTOR LINES & DOTS ----------------- */}
            {/* 01: Top-Left (Node at x=475, y=147; Text at left) */}
            {/* Start at text dot, dogleg to node */}
            <polyline
              points="362,100 405,100 445,147 475,147"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="362" cy="100" r="2.8" fill="#0284c7" />

            {/* 02: Top-Right (Node at x=665, y=147; Text at right) */}
            <polyline
              points="665,147 695,147 735,100 778,100"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="778" cy="100" r="2.8" fill="#0284c7" />

            {/* 03: Middle-Left (Node at x=405, y=290; Text at left) */}
            <polyline
              points="320,290 405,290"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="320" cy="290" r="2.8" fill="#0284c7" />

            {/* 04: Middle-Right (Node at x=735, y=290; Text at right) */}
            <polyline
              points="735,290 820,290"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="820" cy="290" r="2.8" fill="#0284c7" />

            {/* 05: Bottom-Left (Node at x=475, y=433; Text at left) */}
            <polyline
              points="350,480 395,480 435,433 475,433"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="350" cy="480" r="2.8" fill="#0284c7" />

            {/* 06: Bottom-Right (Node at x=665, y=433; Text at right) */}
            <polyline
              points="665,433 705,433 745,480 778,480"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="778" cy="480" r="2.8" fill="#0284c7" />
          </svg>

          {/* Central Navy Hub Typography */}
          <div className="absolute left-[570px] top-[290px] -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center text-center select-none pointer-events-none z-20">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white leading-tight">
              QUALITY
            </p>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-sky-200 leading-tight mt-0.5">
              AT
            </p>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white leading-tight mt-0.5">
              DEVISHA
            </p>
            <div className="h-[1.5px] w-6 bg-[#38bdf8] mt-2" />
          </div>

          {/* ----------------- 6 CIRCULAR NUMBERED ICON NODES ----------------- */}
          {/* 01: Top-Left (x=475, y=147) */}
          <div className="absolute left-[475px] top-[147px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <ProcessDocGearIcon className="size-6" />
          </div>

          {/* 02: Top-Right (x=665, y=147) */}
          <div className="absolute left-[665px] top-[147px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <MaterialCubeIcon className="size-6" />
          </div>

          {/* 03: Middle-Left (x=405, y=290) */}
          <div className="absolute left-[405px] top-[290px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <InspectionGearIcon className="size-6" />
          </div>

          {/* 04: Middle-Right (x=735, y=290) */}
          <div className="absolute left-[735px] top-[290px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <VerificationSearchIcon className="size-6" />
          </div>

          {/* 05: Bottom-Left (x=475, y=433) */}
          <div className="absolute left-[475px] top-[433px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <ImprovementShieldIcon className="size-6" />
          </div>

          {/* 06: Bottom-Right (x=665, y=433) */}
          <div className="absolute left-[665px] top-[433px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/50 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <QualityPromiseChartIcon className="size-6" />
          </div>

          {/* ----------------- 6 CONTENT BLOCKS (3 LEFT, 3 RIGHT) ----------------- */}
          {/* 01: Top-Left (Process Control) */}
          <div className="absolute left-[60px] top-[70px] w-[290px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                01
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[0]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11">
              {qualityStages[0]?.description}
            </p>
          </div>

          {/* 02: Top-Right (Material Quality) */}
          <div className="absolute left-[795px] top-[70px] w-[290px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                02
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[1]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11">
              {qualityStages[1]?.description}
            </p>
          </div>

          {/* 03: Middle-Left (In-Process Inspection) */}
          <div className="absolute left-[20px] top-[260px] w-[290px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                03
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[2]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11">
              {qualityStages[2]?.description}
            </p>
          </div>

          {/* 04: Middle-Right (Engineering Verification) */}
          <div className="absolute left-[835px] top-[260px] w-[290px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                04
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[3]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11">
              {qualityStages[3]?.description}
            </p>
          </div>

          {/* 05: Bottom-Left (Continuous Improvement) */}
          <div className="absolute left-[30px] top-[450px] w-[310px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                05
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[4]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11">
              {qualityStages[4]?.description}
            </p>
          </div>

          {/* 06: Bottom-Right (Our Quality Promise) */}
          <div className="absolute left-[795px] top-[450px] w-[320px] text-left">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xl md:text-2xl font-bold text-sky-400">
                06
              </span>
              <div className="h-[1px] w-6 bg-slate-300" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {qualityStages[5]?.title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal pl-11 whitespace-pre-line">
              {qualityStages[5]?.description}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TABLET VIEW (< 1024px)                            */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-6">
          <div className="rounded-2xl border border-sky-100 bg-[#0b192c] p-6 text-center text-white shadow-md">
            <div className="h-[2px] w-6 bg-[#38bdf8] mx-auto mb-2" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em]">
              QUALITY AT DEVISHA
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-300 font-medium mt-1">
              DISCIPLINE • STANDARDS • BETTER PRODUCTS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualityStages.map((stage, idx) => (
              <Reveal key={stage.no} delay={idx * 50}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <div className="size-11 rounded-full border border-sky-200 bg-sky-50/50 flex flex-col items-center justify-center text-[#0284c7] flex-shrink-0">
                    <span className="font-mono text-[10px] font-bold text-sky-600 leading-none mb-0.5">
                      {stage.no}
                    </span>
                    <stage.icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal whitespace-pre-line">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
