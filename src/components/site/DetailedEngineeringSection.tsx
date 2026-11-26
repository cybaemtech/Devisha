import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons matching the reference image exactly
// ============================================================================

function ModelCubeIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" strokeWidth="2" />
      <path d="M 12 22.7 L 12 12" strokeWidth="1.6" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" strokeWidth="1.6" />
    </svg>
  );
}

function DetailDocIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
      <polyline points="14 2 14 8 20 8" strokeWidth="1.8" />
      <line x1="8" y1="13" x2="16" y2="13" strokeWidth="1.6" />
      <line x1="8" y1="17" x2="13" y2="17" strokeWidth="1.6" />
    </svg>
  );
}

function GearValidateIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function EnhanceDeliverIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bars */}
      <rect x="3" y="14" width="4" height="7" rx="0.5" />
      <rect x="10" y="10" width="4" height="11" rx="0.5" />
      <rect x="17" y="6" width="4" height="15" rx="0.5" />
      {/* Upward trending arrow */}
      <path d="M4 10l6-5 6 3 5-5" strokeWidth="1.8" />
      <polyline points="18 3 21 3 21 6" strokeWidth="1.8" />
    </svg>
  );
}

interface BulletItem {
  title: string;
  description: string;
}

interface StageColumn {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bullets: BulletItem[];
}

const engineeringStages: StageColumn[] = [
  {
    no: "01",
    icon: ModelCubeIcon,
    title: "Model & Visualize",
    bullets: [
      {
        title: "3D CAD Modelling",
        description: "Accurate component, assembly and product models for engineering validation and manufacturing.",
      },
      {
        title: "2D Manufacturing Drawings",
        description: "Production-ready drawings with dimensions, notes and manufacturing details.",
      },
      {
        title: "General Arrangement Drawings",
        description: "Overall equipment dimensions, component locations and installation arrangements.",
      },
    ],
  },
  {
    no: "02",
    icon: DetailDocIcon,
    title: "Detail & Define",
    bullets: [
      {
        title: "Fabrication Drawings",
        description: "Detailed drawings for cutting, bending, welding, fabrication and assembly operations.",
      },
      {
        title: "Sheet-Metal Detailing",
        description: "Components and assemblies engineered around bend requirements and production processes.",
      },
      {
        title: "Assembly & Exploded Views",
        description: "Documentation that clearly communicates component relationships and production sequence.",
      },
    ],
  },
  {
    no: "03",
    icon: GearValidateIcon,
    title: "Validate & Optimize",
    bullets: [
      {
        title: "Bill of Materials Support",
        description: "Structured component and material information supporting procurement and manufacturing.",
      },
      {
        title: "Tolerance & Fitment Review",
        description: "Critical dimensions, tolerances, interfaces and assembly requirements reviewed.",
      },
      {
        title: "Design for Manufacturing (DFM)",
        description: "Reviews focused on simplifying manufacturing and improving production efficiency.",
      },
      {
        title: "Design for Assembly (DFA)",
        description: "Improving component architecture and assembly methods to simplify production.",
      },
    ],
  },
  {
    no: "04",
    icon: EnhanceDeliverIcon,
    title: "Enhance & Deliver",
    bullets: [
      {
        title: "Value Engineering",
        description: "Design and material optimization improving manufacturability while controlling cost.",
      },
      {
        title: "Deliverables",
        description: "3D Models • 2D Drawings • Fabrication • Assembly Drawings • BOM • Documentation.",
      },
    ],
  },
];

export function DetailedEngineeringSection() {
  return (
    <section id="detailed-engineering" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                DETAILED ENGINEERING DESIGN
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Precision Beyond the Concept
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Concept design defines what a product should be. Detailed engineering defines exactly how it will be manufactured.
            </p>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["CONCEPTS", "DETAILED", "FOR REAL-WORLD", "MANUFACTURING"].map((line) => (
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
        {/* 4-COLUMN WORKFLOW DIAGRAM & DETAILED CONTENT               */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Desktop Continuous Connecting Line with Small Circular Chevron Badges */}
          <div className="hidden lg:block absolute left-0 right-0 top-[52px] -translate-y-1/2 pointer-events-none z-0">
            {/* Continuous thin light-blue line */}
            <div className="w-full h-[1.5px] bg-[#bae6fd]" />

            {/* Circular Chevron Badge 1 (Between Col 1 & Col 2 at 25%) */}
            <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full border border-sky-300 bg-white flex items-center justify-center text-[#0284c7] shadow-sm">
              <ChevronRight className="size-3.5 stroke-[2.5]" />
            </div>

            {/* Circular Chevron Badge 2 (Between Col 2 & Col 3 at 50%) */}
            <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full border border-sky-300 bg-white flex items-center justify-center text-[#0284c7] shadow-sm">
              <ChevronRight className="size-3.5 stroke-[2.5]" />
            </div>

            {/* Circular Chevron Badge 3 (Between Col 3 & Col 4 at 75%) */}
            <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full border border-sky-300 bg-white flex items-center justify-center text-[#0284c7] shadow-sm">
              <ChevronRight className="size-3.5 stroke-[2.5]" />
            </div>
          </div>

          {/* 4 Columns Grid with Vertical Separators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative z-10">
            {engineeringStages.map((stage, idx) => (
              <Reveal
                key={stage.no}
                delay={idx * 70}
                className={`flex flex-col px-5 sm:px-6 ${
                  idx < engineeringStages.length - 1 ? "lg:border-r lg:border-slate-200/80" : ""
                }`}
              >
                {/* Top: Ghost Number + Circular Icon Container */}
                <div className="relative flex items-center justify-center w-full min-h-[105px]">
                  {/* Large subtle ghost number behind/beside the circle */}
                  <span className="absolute left-1/2 -translate-x-[95px] sm:-translate-x-[110px] font-mono text-5xl sm:text-6xl font-extrabold text-slate-200 select-none tracking-tighter">
                    {stage.no}
                  </span>

                  {/* Circular Icon Badge */}
                  <div className="size-24 sm:size-26 rounded-full border border-sky-100 ring-8 ring-sky-50/80 bg-white flex items-center justify-center text-[#0284c7] shadow-sm relative z-10 transition-transform duration-300 hover:scale-105">
                    <stage.icon className="size-8 sm:size-9" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-[19px] font-bold text-slate-900 tracking-tight text-center mt-5 leading-snug">
                  {stage.title}
                </h3>

                {/* Small Blue Underline Accent */}
                <div className="h-[2px] w-8 bg-[#0284c7] my-3 mx-auto transition-all duration-300 hover:w-12" />

                {/* Detailed Bullets List */}
                <div className="mt-4 space-y-4 flex-1">
                  {stage.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-left">
                      {/* Solid Blue Dot Marker */}
                      <div className="size-2 rounded-full bg-[#0284c7] mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-snug">
                          {bullet.title}
                        </p>
                        <p className="mt-0.5 text-xs sm:text-[12.5px] leading-relaxed text-slate-600 font-normal">
                          {bullet.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
