import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Engineering Vector Icons for the 8 Process Steps
// ============================================================================

function LaserCuttingIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Laser nozzle top */}
      <path d="M12 2v6" strokeWidth="2.2" />
      <line x1="8" y1="2" x2="16" y2="2" strokeWidth="2" />
      {/* Laser focal sparks */}
      <path d="M12 11l-3 4M12 11l3 4M12 11l-4 1M12 11l4 1M12 11v5" strokeWidth="1.5" />
      {/* Base sheet cutting line */}
      <line x1="4" y1="20" x2="20" y2="20" strokeWidth="2" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PressBrakeBendingIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Downward punch arrow */}
      <polyline points="7 6 12 11 17 6" strokeWidth="2" />
      <line x1="12" y1="2" x2="12" y2="10" strokeWidth="2" />
      {/* Lower V-die bend */}
      <polyline points="4 15 12 21 20 15" strokeWidth="2.2" />
      <line x1="4" y1="18" x2="12" y2="23" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="20" y1="18" x2="12" y2="23" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}

function WeldingTorchIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Welding handle and curved torch nozzle */}
      <path d="M19 5l-7 7" strokeWidth="2.2" />
      <path d="M12 12c-2 2-4 3-6 4" strokeWidth="2" />
      {/* Arc sparks */}
      <path d="M4 18l-2 3M6 20l2 2M3 16l-2-1M6 15l2-1" strokeWidth="1.6" />
      <circle cx="5" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

function DrillingTapIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Drill bit shank & flutes */}
      <rect x="9" y="2" width="6" height="4" rx="1" strokeWidth="2" />
      <path d="M10 6v10l2 4 2-4V6" strokeWidth="2" />
      <line x1="10" y1="9" x2="14" y2="11" strokeWidth="1.5" />
      <line x1="10" y1="12" x2="14" y2="14" strokeWidth="1.5" />
      <line x1="10" y1="15" x2="14" y2="17" strokeWidth="1.5" />
    </svg>
  );
}

function FastenerBoltNutIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bolt head */}
      <rect x="7" y="3" width="10" height="4" rx="0.8" strokeWidth="2" />
      {/* Bolt shaft */}
      <path d="M9 7v13a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7" strokeWidth="1.8" />
      <line x1="9" y1="11" x2="15" y2="11" strokeWidth="1.2" />
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="1.2" />
      <line x1="9" y1="17" x2="15" y2="17" strokeWidth="1.2" />
      {/* Separate Nut */}
      <circle cx="19" cy="17" r="3" strokeWidth="1.8" />
      <circle cx="19" cy="17" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MachiningGearIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function AssemblyCubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function ProductionCoordinationIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="16" height="19" rx="2" />
      <path d="M8 2h8a1 1 0 0 1 1 1v2H7V3a1 1 0 0 1 1-1z" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="13" y2="18" />
    </svg>
  );
}

interface CapabilityStep {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isUpper?: boolean;
}

const capabilitySteps: CapabilityStep[] = [
  {
    no: "01",
    icon: LaserCuttingIcon,
    title: "CNC Laser Cutting",
    description: "Precision profile cutting for sheet-metal parts with repeatability and clean edge finish.",
    isUpper: true,
  },
  {
    no: "02",
    icon: PressBrakeBendingIcon,
    title: "CNC Press Brake Bending",
    description: "Precision bending for components, cabinets, enclosures and complex geometries.",
    isUpper: false,
  },
  {
    no: "03",
    icon: WeldingTorchIcon,
    title: "MIG & TIG Welding",
    description: "Welding support for industrial components and fabricated assemblies.",
    isUpper: true,
  },
  {
    no: "04",
    icon: DrillingTapIcon,
    title: "Drilling & Tapping",
    description: "Secondary machining operations for component and assembly preparation.",
    isUpper: false,
  },
  {
    no: "05",
    icon: FastenerBoltNutIcon,
    title: "Fastener Insertion",
    description: "Fastener installation supporting efficient sheet-metal assembly.",
    isUpper: true,
  },
  {
    no: "06",
    icon: MachiningGearIcon,
    title: "Machining Support",
    description: "Coordination of machining requirements for engineered components.",
    isUpper: false,
  },
  {
    no: "07",
    icon: AssemblyCubeIcon,
    title: "Assembly Support",
    description: "Support for fabrication, mechanical assembly and product readiness.",
    isUpper: true,
  },
  {
    no: "08",
    icon: ProductionCoordinationIcon,
    title: "Production Coordination",
    description: "Vendors, checkpoints, quality verification and dispatch readiness.",
    isUpper: false,
  },
];

export function ProcessCapabilitiesSection() {
  return (
    <section id="capabilities" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                CNC &amp; FABRICATION
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
Industrial Sheet Metal Fabrication Capabilities
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Advanced equipment. Skilled expertise. Reliable results.<br className="hidden sm:inline" />
              From components to complete assemblies.
            </p>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-[#0284c7] pl-4 py-1 space-y-1">
              {["PRECISION", "FABRICATION", "SCALABLE SOLUTIONS", "REAL IMPACT"].map((line) => (
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
        {/* SINUSOIDAL CONTINUOUS WAVE DIAGRAM (DESKTOP >= 1024px)     */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative max-w-[1240px] mx-auto h-[540px] my-2">
          {/* SVG Canvas for the Smooth Connecting Wave and Node Orbits */}
          <svg
            viewBox="0 0 1200 520"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
          >
            <defs>
              {/* Marker Arrow for Terminal Arc to Node 08 */}
              <marker
                id="coordArrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M 0 2 L 6 5 L 0 8 z" fill="#0284c7" />
              </marker>
            </defs>

            {/* ----------------- SMOOTH CONTINUOUS ALTERNATING U/S CURVES ----------------- */}
            {/* 01 -> 02 (Dipping U-curve) */}
            <path
              d="M 113 106 C 195 106, 220 263, 230 263"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 02 -> 03 (Rising Inverted-U curve) */}
            <path
              d="M 230 263 C 240 263, 265 106, 347 106"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 03 -> 04 (Dipping U-curve) */}
            <path
              d="M 403 106 C 485 106, 510 263, 520 263"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 04 -> 05 (Rising Inverted-U curve) */}
            <path
              d="M 520 263 C 530 263, 555 106, 637 106"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 05 -> 06 (Dipping U-curve) */}
            <path
              d="M 693 106 C 775 106, 800 263, 810 263"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 06 -> 07 (Rising Inverted-U curve) */}
            <path
              d="M 810 263 C 820 263, 845 106, 927 106"
              stroke="#0284c7"
              strokeWidth="1.6"
              fill="none"
            />
            {/* 07 -> 08 (Dipping U-curve - Dotted) */}
            <path
              d="M 983 106 C 1065 106, 1090 263, 1100 263"
              stroke="#0284c7"
              strokeWidth="1.6"
              strokeDasharray="3 3"
              fill="none"
            />

            {/* ----------------- EXACT CIRCULAR CONNECTION POINTS AT CIRCLE EDGES ----------------- */}
            <circle cx="113" cy="106" r="3" fill="#0284c7" />
            <circle cx="230" cy="263" r="3" fill="#0284c7" />
            <circle cx="347" cy="106" r="3" fill="#0284c7" />
            <circle cx="403" cy="106" r="3" fill="#0284c7" />
            <circle cx="520" cy="263" r="3" fill="#0284c7" />
            <circle cx="637" cy="106" r="3" fill="#0284c7" />
            <circle cx="693" cy="106" r="3" fill="#0284c7" />
            <circle cx="810" cy="263" r="3" fill="#0284c7" />
            <circle cx="927" cy="106" r="3" fill="#0284c7" />
            <circle cx="983" cy="106" r="3" fill="#0284c7" />
            <circle cx="1100" cy="263" r="3" fill="#0284c7" />

            {/* Concentric Subtle Orbit around Node 08 */}
            <circle cx="1100" cy="295" r="44" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* ----------------- 01: CNC Laser Cutting (Upper, x=85, y=90) ----------------- */}
          <div className="absolute left-[85px] top-[15px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">01</span>
          </div>
          <div className="absolute left-[85px] top-[90px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <LaserCuttingIcon className="size-6" />
          </div>
          <div className="absolute left-[85px] top-[144px] -translate-x-1/2 w-[110px] text-center z-10">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[0]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[0]?.description}
            </p>
          </div>

          {/* ----------------- 02: CNC Press Brake Bending (Lower, x=230, y=295) ----------------- */}
          <div className="absolute left-[230px] top-[295px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <PressBrakeBendingIcon className="size-6" />
          </div>
          <div className="absolute left-[230px] top-[338px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">02</span>
          </div>
          <div className="absolute left-[230px] top-[374px] -translate-x-1/2 w-[124px] text-center">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[1]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[1]?.description}
            </p>
          </div>

          {/* ----------------- 03: MIG & TIG Welding (Upper, x=375, y=90) ----------------- */}
          <div className="absolute left-[375px] top-[15px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">03</span>
          </div>
          <div className="absolute left-[375px] top-[90px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <WeldingTorchIcon className="size-6" />
          </div>
          <div className="absolute left-[375px] top-[144px] -translate-x-1/2 w-[110px] text-center z-10">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[2]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[2]?.description}
            </p>
          </div>

          {/* ----------------- 04: Drilling & Tapping (Lower, x=520, y=295) ----------------- */}
          <div className="absolute left-[520px] top-[295px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <DrillingTapIcon className="size-6" />
          </div>
          <div className="absolute left-[520px] top-[338px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">04</span>
          </div>
          <div className="absolute left-[520px] top-[374px] -translate-x-1/2 w-[124px] text-center">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[3]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[3]?.description}
            </p>
          </div>

          {/* ----------------- 05: Fastener Insertion (Upper, x=665, y=90) ----------------- */}
          <div className="absolute left-[665px] top-[15px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">05</span>
          </div>
          <div className="absolute left-[665px] top-[90px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <FastenerBoltNutIcon className="size-6" />
          </div>
          <div className="absolute left-[665px] top-[144px] -translate-x-1/2 w-[110px] text-center z-10">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[4]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[4]?.description}
            </p>
          </div>

          {/* ----------------- 06: Machining Support (Lower, x=810, y=295) ----------------- */}
          <div className="absolute left-[810px] top-[295px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <MachiningGearIcon className="size-6" />
          </div>
          <div className="absolute left-[810px] top-[338px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">06</span>
          </div>
          <div className="absolute left-[810px] top-[374px] -translate-x-1/2 w-[124px] text-center">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[5]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[5]?.description}
            </p>
          </div>

          {/* ----------------- 07: Assembly Support (Upper, x=955, y=90) ----------------- */}
          <div className="absolute left-[955px] top-[15px] -translate-x-1/2">
            <span className="font-mono text-2xl font-bold text-sky-400">07</span>
          </div>
          <div className="absolute left-[955px] top-[90px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <AssemblyCubeIcon className="size-6" />
          </div>
          <div className="absolute left-[955px] top-[144px] -translate-x-1/2 w-[110px] text-center z-10">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[6]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[6]?.description}
            </p>
          </div>

          {/* ----------------- 08: Production Coordination (Terminal, x=1100, y=295) ----------------- */}
          <div className="absolute left-[1100px] top-[295px] -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border-2 border-sky-300 bg-white shadow-lg shadow-sky-100/60 flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <ProductionCoordinationIcon className="size-6" />
          </div>
          <div className="absolute left-[1100px] top-[340px] -translate-x-1/2">
            <div className="size-1.5 rounded-full bg-[#0284c7] mx-auto mb-1" />
          </div>
          <div className="absolute left-[1100px] top-[356px] -translate-x-1/2 w-[130px] text-center">
            <h3 className="font-display text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
              {capabilitySteps[7]?.title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 font-normal">
              {capabilitySteps[7]?.description}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TABLET VIEW (< 1024px)                            */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilitySteps.map((step, idx) => (
              <Reveal key={step.no} delay={idx * 50}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <div className="size-12 rounded-full border border-sky-200 bg-sky-50/50 flex flex-col items-center justify-center text-[#0284c7] flex-shrink-0">
                    <span className="font-mono text-[10px] font-bold text-sky-600 leading-none mb-0.5">
                      {step.no}
                    </span>
                    <step.icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                      {step.description}
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
