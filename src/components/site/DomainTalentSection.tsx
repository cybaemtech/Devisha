import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Engineering Vector Icons matching the 10 Talent Categories
// ============================================================================

function GearCogIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function LayersSheetMetalIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

function ElectricalPanelIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function GeneratorGensetIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 6V3h10v3" />
      <circle cx="9" cy="12.5" r="2.5" />
      <line x1="15" y1="10" x2="17" y2="10" />
      <line x1="15" y1="13" x2="17" y2="13" />
      <line x1="15" y1="16" x2="17" y2="16" />
      <line x1="1" y1="10" x2="3" y2="10" />
      <line x1="1" y1="15" x2="3" y2="15" />
      <line x1="21" y1="10" x2="23" y2="10" />
      <line x1="21" y1="15" x2="23" y2="15" />
    </svg>
  );
}

function TechnicalDraftingPenIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L19 9L15 22L12 18L9 22L5 9L12 2Z" />
      <circle cx="12" cy="11" r="2" />
      <line x1="12" y1="13" x2="12" y2="18" />
    </svg>
  );
}

function IsometricProductCubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function FactoryProductionIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20V9l5 3V9l5 3V4h10v16H2z" />
      <line x1="15" y1="9" x2="17" y2="9" />
      <line x1="15" y1="13" x2="17" y2="13" />
      <line x1="15" y1="17" x2="17" y2="17" />
    </svg>
  );
}

function QualityBadgeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8.5" r="5.5" />
      <circle cx="12" cy="8.5" r="2.5" strokeDasharray="2 2" />
      <path d="M8.2 13.5L7 22l5-3 5 3-1.2-8.5" />
    </svg>
  );
}

function VendorNetworkUsersIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CNCToolingDrillIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="7" y="2" width="10" height="4" rx="1" />
      <path d="M9 6v3l3 3 3-3V6" />
      <path d="M12 12v6l-2 3h4l-2-3v-6" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

interface TalentCategory {
  no: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const talentCategories: TalentCategory[] = [
  {
    no: "01",
    title: "Mechanical Design Engineers",
    icon: GearCogIcon,
    items: [
      "3D CAD Modelling",
      "Assembly Design",
      "Engineering Drawings",
      "Manufacturing Documentation",
    ],
  },
  {
    no: "02",
    title: "Sheet-Metal Design Engineers",
    icon: LayersSheetMetalIcon,
    items: [
      "Enclosure Design",
      "Sheet-Metal Components",
      "Fabrication Drawings",
      "Assembly Detailing",
      "Cabinet Design",
      "Flat Pattern Development",
      "Bend Development",
    ],
  },
  {
    no: "03",
    title: "Electrical Panel Design Engineers",
    icon: ElectricalPanelIcon,
    items: [
      "Electrical Enclosure Engineering",
      "Control Cabinet Design",
      "DG Synchronizing Panel Enclosures",
      "Panel Layout",
      "PCC / MCC / PLC Enclosures",
    ],
  },
  {
    no: "04",
    title: "Genset / Generator Design Engineers",
    icon: GeneratorGensetIcon,
    items: [
      "Generator Canopy Design",
      "Generator Container Design",
      "Fabrication & Assembly Documentation",
      "Acoustic Enclosure Engineering",
      "Equipment Layout",
    ],
  },
  {
    no: "05",
    title: "CAD Engineers / Draftsmen",
    icon: TechnicalDraftingPenIcon,
    items: [
      "2D Drafting",
      "Manufacturing Drawings",
      "Revision Management",
      "Drawing Conversion",
      "GA Drawings",
      "Engineering Documentation",
    ],
  },
  {
    no: "06",
    title: "Product Development Engineers",
    icon: IsometricProductCubeIcon,
    items: [
      "New Product Development",
      "Prototype Coordination",
      "Production Readiness",
      "Product Improvement",
      "Value Engineering",
    ],
  },
  {
    no: "07",
    title: "Production & Manufacturing Engineers",
    icon: FactoryProductionIcon,
    items: [
      "Process Planning",
      "Production Support",
      "Assembly Coordination",
      "Fabrication Coordination",
      "Manufacturing Documentation",
    ],
  },
  {
    no: "08",
    title: "Quality Engineers",
    icon: QualityBadgeIcon,
    items: [
      "Drawing Review",
      "Process Checkpoints",
      "Vendor Quality Coordination",
      "Dimensional Inspection Coordination",
      "Quality Documentation",
    ],
  },
  {
    no: "09",
    title: "Vendor Development Engineers",
    icon: VendorNetworkUsersIcon,
    items: [
      "Supplier Identification",
      "Vendor Coordination",
      "Quality Coordination",
      "Technical Evaluation",
      "Production Follow-up",
      "Delivery Management",
    ],
  },
  {
    no: "10",
    title: "CNC Programming / Production Support",
    icon: CNCToolingDrillIcon,
    items: [
      "CNC Process Coordination",
      "Bending Coordination",
      "Shop-Floor Technical Support",
      "Cutting Planning",
      "Production Documentation",
    ],
  },
];

export function DomainTalentSection() {
  return (
    <section id="talent-categories" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      {/* Subtle technical blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2, 132, 199, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ========================================================= */}
        {/* TOP HEADER: LEFT TITLE/LEAD + RIGHT 4-STEP STACK         */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-14">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                RESOURCE CATEGORIES
              </span>
              <div className="h-[1.5px] w-8 bg-[#0284c7]/50" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Domain-Relevant Engineering Talent
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Skilled experts across diverse engineering domains to support your entire product development and manufacturing journey.
            </p>
          </Reveal>

          {/* Right 4-step vertical process list & flow tagline */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="flex flex-col items-end gap-3.5">
              <div className="border-l-2 border-[#0284c7] pl-3.5 py-0.5 space-y-1">
                {["DESIGN", "DEVELOP", "MANUFACTURE", "DELIVER"].map((step) => (
                  <div
                    key={step}
                    className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0284c7] font-semibold leading-relaxed"
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium pt-1">
                IDEAS <span className="text-[#0284c7] mx-1">→</span> ENGINEERING <span className="text-[#0284c7] mx-1">→</span> REAL-WORLD IMPACT
              </div>
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* 5-COLUMN × 2-ROW COMPACT PANEL GRID (10 CATEGORIES)       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-5.5">
          {talentCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.no} delay={idx * 30} className="h-full">
                <article className="relative h-full bg-white rounded-2xl border border-sky-200/90 shadow-[0_2px_12px_rgba(2,132,199,0.04)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.12)] hover:border-[#0284c7] transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden group">
                  {/* Subtle Pale-Blue Geometric Corner Bevel (Bottom-Right) */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-sky-200/60 via-sky-100/25 to-transparent rounded-br-2xl pointer-events-none transition-opacity duration-300 group-hover:from-sky-300/70" />

                  {/* Corner Accent Line */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-sky-300/80" fill="none">
                      <path d="M 0 40 L 40 0" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                    </svg>
                  </div>

                  <div>
                    {/* Top Row: Large Blue Number + Circular Engineering Icon */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="font-mono text-3xl sm:text-[32px] font-bold text-[#0284c7] tracking-tight leading-none">
                        {cat.no}
                      </span>
                      {/* Large circular icon container matching reference */}
                      <div className="size-12 sm:size-13 rounded-full bg-[#f0f9ff] border border-sky-200/80 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] transition-all duration-300 shrink-0 shadow-sm">
                        <Icon className="size-6" />
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight leading-snug min-h-[44px] flex items-center">
                      {cat.title}
                    </h3>

                    {/* Thin blue divider below title */}
                    <div className="h-[1px] w-full bg-slate-200/80 group-hover:bg-sky-200 transition-colors my-3" />

                    {/* Capabilities Bullet List */}
                    <ul className="space-y-2 text-[12px] text-slate-600 font-normal leading-relaxed pb-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="size-1.5 rounded-full bg-[#0284c7] shrink-0 mt-1.5" />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM DIVIDER & TAGLINE BAR                              */}
        {/* ========================================================= */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-[1.5px] w-8 bg-[#0284c7]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
              ENGINEERING TALENT FOR A STRONGER TOMORROW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
