import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons matching the reference image exactly
// ============================================================================

function ProcessDocGearIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="13" y2="13" />
      <line x1="8" y1="17" x2="11" y2="17" />
      {/* Small gear at bottom right */}
      <circle cx="17.5" cy="17.5" r="2" />
      <path d="M17.5 14.5v1M17.5 19.5v1M14.5 17.5h1M19.5 17.5h1M15.4 15.4l.7.7M18.9 18.9l.7.7M15.4 19.6l.7-.7M18.9 16.1l.7-.7" strokeWidth="1.4" />
    </svg>
  );
}

function MaterialCubesIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Top Cube */}
      <path d="M12 2l4 2.3v4.6L12 11.2 8 8.9V4.3L12 2z" />
      <path d="M12 11.2V6.6l4-2.3" />
      <path d="M12 6.6L8 4.3" />
      {/* Bottom Left Cube */}
      <path d="M8 12.8l4 2.3v4.6l-4 2.3-4-2.3v-4.6l4-2.3z" />
      <path d="M8 22v-4.6l4-2.3" />
      <path d="M8 17.4l-4-2.3" />
      {/* Bottom Right Cube */}
      <path d="M16 12.8l4 2.3v4.6l-4 2.3-4-2.3v-4.6l4-2.3z" />
      <path d="M16 22v-4.6l4-2.3" />
      <path d="M16 17.4l-4-2.3" />
    </svg>
  );
}

function InspectionSearchIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="7.5" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  );
}

function ChecklistDocIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="11" y1="7" x2="16" y2="7" />
      <line x1="11" y1="12" x2="16" y2="12" />
      <line x1="11" y1="17" x2="16" y2="17" />
      <polyline points="7 7 8 8 10 6" strokeWidth="1.6" />
      <polyline points="7 12 8 13 10 11" strokeWidth="1.6" />
      <polyline points="7 17 8 18 10 16" strokeWidth="1.6" />
    </svg>
  );
}

function ContinuousImprovementChartIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bars */}
      <rect x="3" y="14" width="4" height="7" rx="0.5" />
      <rect x="10" y="10" width="4" height="11" rx="0.5" />
      <rect x="17" y="6" width="4" height="15" rx="0.5" />
      {/* Upward trending arrow */}
      <path d="M4 10l6-5 6 3 5-5" strokeWidth="1.6" />
      <polyline points="18 3 21 3 21 6" strokeWidth="1.6" />
    </svg>
  );
}

function QualityBadgePromiseIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Scalloped badge / shield */}
      <path d="M12 2l2.4 2.1 3.2-.4 1.3 2.9 3 1.1-.3 3.2 2.1 2.4-1.1 3-2.4 2.1-.4 3.2-2.9 1.3-1.1 3-3.2-.3-2.4 2.1-3-1.1-2.1 2.4-3.2-.4-1.3-2.9-3-1.1.3-3.2L1.6 13.3l1.1-3 2.4-2.1.4-3.2 2.9-1.3 1.1-3 3.2.3z" />
      <polyline points="8.5 12.5 11 15 15.5 9.5" strokeWidth="2" />
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
    icon: MaterialCubesIcon,
    title: "Material Quality",
    description: "Material suitability, quality and traceability for industrial applications.",
  },
  {
    no: "03",
    icon: InspectionSearchIcon,
    title: "In-Process Inspection",
    description: "Dimensional, fitment and visual checks during manufacturing.",
  },
  {
    no: "04",
    icon: ChecklistDocIcon,
    title: "Engineering Verification",
    description: "Review of drawings, assemblies and manufacturing considerations before production.",
  },
  {
    no: "05",
    icon: ContinuousImprovementChartIcon,
    title: "Continuous Improvement",
    description: "Standardization, value engineering and lessons from production feedback.",
  },
  {
    no: "06",
    icon: QualityBadgePromiseIcon,
    title: "Our Quality Promise",
    description: "High Precision • Competitive Cost • On-Time Delivery • Customer-Centric Support",
  },
];

export function QualitySection() {
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

          {/* Right Decorative Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["CONTROL", "TODAY", "FOR A STRONGER", "TOMORROW"].map((line) => (
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
        {/* 6-STAGE HORIZONTAL CONNECTED WORKFLOW                     */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Desktop/Tablet Continuous Connecting Ray (Behind Circles) */}
          <div className="hidden lg:block absolute left-0 right-0 top-[116px] -translate-y-1/2 pointer-events-none z-0">
            <svg className="w-full h-10 overflow-visible" preserveAspectRatio="none">
              <defs>
                <marker
                  id="quality-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 6 5 L 0 8.5" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              {/* Main horizontal line from first node to past the 6th node */}
              <line
                x1="8%"
                y1="20"
                x2="97%"
                y2="20"
                stroke="#bae6fd"
                strokeWidth="2"
                markerEnd="url(#quality-arrow)"
              />

              {/* Small accent dots along the line between columns */}
              {[21, 37.5, 54, 70.5, 87].map((pos, idx) => (
                <circle
                  key={idx}
                  cx={`${pos}%`}
                  cy="20"
                  r="2.5"
                  fill="#0284c7"
                  opacity="0.8"
                />
              ))}
            </svg>
          </div>

          {/* Grid of 6 Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 relative z-10">
            {qualityStages.map((stage, idx) => (
              <Reveal key={stage.no} delay={idx * 70} className="flex flex-col items-center text-center">
                {/* 1. Icon Container */}
                <div className="size-16 rounded-2xl bg-sky-50/80 border border-sky-100 flex items-center justify-center text-[#0284c7] shadow-sm transition-transform duration-300 hover:scale-105">
                  <stage.icon className="size-7" />
                </div>

                {/* 2. Vertical Connector to circle */}
                <div className="w-[1.5px] h-6 bg-sky-300/80 my-0.5" />

                {/* 3. Numbered Circular Node */}
                <div className="relative size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-sm ring-4 ring-sky-50/80 z-10">
                  {stage.no}
                </div>

                {/* 4. Title */}
                <h3 className="font-display font-bold text-slate-900 text-[15px] sm:text-[16px] tracking-tight mt-5 leading-snug">
                  {stage.title}
                </h3>

                {/* 5. Description */}
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal max-w-[200px] sm:max-w-none">
                  {stage.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ENGINEERING LINEWORK & BLUEPRINT DETAILS           */}
        {/* ========================================================= */}
        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-t border-slate-100/80 relative">
          {/* Bottom Left Stacked Text */}
          <Reveal delay={200}>
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                ENGINEERED
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                QUALITY
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                AT EVERY STEP
              </p>
            </div>
          </Reveal>

          {/* Bottom Right CAD Blueprint Arc + Stacked Text */}
          <Reveal delay={300} className="self-end flex items-end gap-6 overflow-hidden">
            {/* Technical CAD Blueprint Line Art */}
            <div className="w-48 sm:w-64 h-24 sm:h-28 opacity-40 text-[#0284c7] select-none pointer-events-none relative -mb-6">
              <svg viewBox="0 0 260 120" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full">
                {/* Arc Flange Outline */}
                <path d="M 30 120 A 100 100 0 0 1 230 120" strokeWidth="1.2" />
                <path d="M 50 120 A 80 80 0 0 1 210 120" strokeDasharray="3 2" />
                <path d="M 75 120 A 55 55 0 0 1 185 120" />

                {/* Bolt Holes on Arc */}
                <circle cx="65" cy="85" r="5" fill="none" strokeWidth="1" />
                <circle cx="65" cy="85" r="7" strokeDasharray="2 2" strokeWidth="0.6" />
                <circle cx="130" cy="40" r="5" fill="none" strokeWidth="1" />
                <circle cx="130" cy="40" r="7" strokeDasharray="2 2" strokeWidth="0.6" />
                <circle cx="195" cy="85" r="5" fill="none" strokeWidth="1" />
                <circle cx="195" cy="85" r="7" strokeDasharray="2 2" strokeWidth="0.6" />

                {/* Dimension & Projection Lines */}
                <line x1="130" y1="5" x2="130" y2="35" strokeDasharray="2 2" strokeWidth="0.6" />
                <line x1="90" y1="20" x2="170" y2="20" strokeWidth="0.6" />
                <text x="175" y="18" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none">R2.5</text>

                <line x1="10" y1="90" x2="55" y2="90" strokeWidth="0.6" />
                <line x1="10" y1="80" x2="10" y2="100" strokeWidth="0.6" />
                <text x="5" y="98" fill="currentColor" fontSize="7" fontFamily="monospace" stroke="none" transform="rotate(-90 5,98)">Ø8.0</text>
              </svg>
            </div>

            {/* Stacked Text in Border */}
            <div className="border-l-2 border-slate-300 pl-3 py-1 text-left sm:text-right flex-shrink-0 mb-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                PRECISION
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                PEOPLE
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 leading-tight">
                PROCESS
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
