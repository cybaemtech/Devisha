import React from "react";
import {
  Boxes,
  Car,
  CircuitBoard,
  Cog,
  Factory,
  Layers,
  Sliders,
  Zap,
  Leaf,
  Bot,
} from "lucide-react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons for the 8 NPD Stages
// ============================================================================

function RequirementDocIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function ConceptBulbIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
    </svg>
  );
}

function Product3DCubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function PrototypeGearIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ValidationChecklistIcon({ className = "size-6" }: { className?: string }) {
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

function ImprovementChartIcon({ className = "size-6" }: { className?: string }) {
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

function ValueEngCogIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" strokeWidth="2" />
    </svg>
  );
}

function ProductionFlagIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" y1="22" x2="4" y2="2" strokeWidth="2" />
      <path d="M4 4h14l-3 5 3 5H4z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

interface NPDStep {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const npdSteps: NPDStep[] = [
  {
    no: "01",
    icon: RequirementDocIcon,
    title: "Requirement Study",
    description: "Application, performance, materials, constraints and commercial expectations.",
  },
  {
    no: "02",
    icon: ConceptBulbIcon,
    title: "Concept Development",
    description: "Functional requirements converted into practical engineering concepts.",
  },
  {
    no: "03",
    icon: Product3DCubeIcon,
    title: "3D Product Design",
    description: "Product architecture, components and assemblies developed in CAD.",
  },
  {
    no: "04",
    icon: PrototypeGearIcon,
    title: "Prototype Coordination",
    description: "Prototype manufacturing and supplier coordination support.",
  },
  {
    no: "05",
    icon: ValidationChecklistIcon,
    title: "Fitment & Validation",
    description: "Assembly, functionality and manufacturability reviewed.",
  },
  {
    no: "06",
    icon: ImprovementChartIcon,
    title: "Design Improvement",
    description: "Prototype observations and manufacturing feedback incorporated.",
  },
  {
    no: "07",
    icon: ValueEngCogIcon,
    title: "Value Engineering",
    description: "Material, processes and component architecture optimized.",
  },
  {
    no: "08",
    icon: ProductionFlagIcon,
    title: "Production Readiness",
    description: "Final engineering information prepared for repeat manufacturing.",
  },
];

const applications = [
  { label: "OEM Product Development", icon: Car },
  { label: "Industrial Equipment", icon: Cog },
  { label: "Electrical Products", icon: Zap },
  { label: "Sheet-Metal Products", icon: Layers },
  { label: "Control Systems", icon: Sliders },
  { label: "Equipment Enclosures", icon: Boxes },
  { label: "Generator Enclosures", icon: Factory },
  { label: "EV Infrastructure Products", icon: Leaf },
  { label: "Automation Products", icon: Bot },
];

export function ProductDevelopmentSection() {
  return (
    <section id="npd" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title + Subtitle */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                PRODUCT DEVELOPMENT &amp; NPD
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              From an Idea to a Production-Ready Product
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Engineering ideas into real-world solutions through a continuous and collaborative process.
            </p>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["IDEAS", "ENGINEERING", "MANUFACTURING", "REAL IMPACT"].map((line) => (
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
        {/* CIRCULAR PRODUCT DEVELOPMENT CYCLE (DESKTOP)              */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative max-w-[1140px] mx-auto h-[680px] my-6">
          {/* SVG Canvas for Gradient Ring, Orbit, and Projection Lines */}
          <svg
            viewBox="0 0 1140 680"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
          >
            <defs>
              {/* Radial gradient for the continuous fluid cycle ribbon */}
              <radialGradient id="cycleDonutGlow" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="85%" stopColor="#6366f1" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.05" />
              </radialGradient>

              {/* Linear gradient for smooth flowing circular ribbon */}
              <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="ribbonGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
              </linearGradient>

              {/* Marker Arrow for Orbit */}
              <marker
                id="orbitArrow"
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

            {/* ----------------- CONTINUOUS FLUID TORUS RIBBON ----------------- */}
            {/* Soft Glow Donut Ring */}
            <circle cx="570" cy="340" r="185" stroke="url(#cycleDonutGlow)" strokeWidth="68" />

            {/* Fluid Ribbon Arcs (Connecting the 8 nodes in a smooth wheel) */}
            <path
              d="M 570 155 A 185 185 0 0 1 701 471"
              stroke="url(#ribbonGrad1)"
              strokeWidth="48"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 701 471 A 185 185 0 0 1 570 155"
              stroke="url(#ribbonGrad2)"
              strokeWidth="48"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Outer Subtle Orbit Circle with Directional Arrows */}
            <circle
              cx="570"
              cy="340"
              r="230"
              stroke="#bae6fd"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />

            {/* Directional Chevron Arrows along orbit */}
            <path d="M 640 112 L 655 110 L 647 122" stroke="#0284c7" strokeWidth="1.6" fill="none" />
            <path d="M 798 270 L 800 285 L 788 280" stroke="#0284c7" strokeWidth="1.6" fill="none" />
            <path d="M 640 568 L 625 570 L 633 558" stroke="#0284c7" strokeWidth="1.6" fill="none" />
            <path d="M 342 410 L 340 395 L 352 400" stroke="#0284c7" strokeWidth="1.6" fill="none" />
            <path d="M 410 170 L 420 160 L 425 175" stroke="#0284c7" strokeWidth="1.6" fill="none" />

            {/* ----------------- CENTRAL HUB ----------------- */}
            <circle cx="570" cy="340" r="110" fill="#ffffff" stroke="#e0f2fe" strokeWidth="2" />
            <circle cx="570" cy="340" r="102" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />

            {/* ----------------- PROJECTION LINES TO TEXT CALLOUTS ----------------- */}
            {/* 01: Top-Left (Requirement Study) */}
            <line x1="570" y1="125" x2="420" y2="90" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="420" cy="90" r="2.5" fill="#0284c7" />

            {/* 02: Top-Right (Concept Development) */}
            <line x1="701" y1="209" x2="775" y2="120" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="775" cy="120" r="2.5" fill="#0284c7" />

            {/* 03: Right (3D Product Design) */}
            <line x1="755" y1="340" x2="860" y2="340" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="860" cy="340" r="2.5" fill="#0284c7" />

            {/* 04: Bottom-Right (Prototype Coordination) */}
            <line x1="701" y1="471" x2="835" y2="520" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="835" cy="520" r="2.5" fill="#0284c7" />

            {/* 05: Bottom Center (Fitment & Validation) */}
            <line x1="570" y1="525" x2="570" y2="600" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="570" cy="600" r="2.5" fill="#0284c7" />

            {/* 06: Bottom-Left (Design Improvement) */}
            <line x1="439" y1="471" x2="335" y2="530" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="335" cy="530" r="2.5" fill="#0284c7" />

            {/* 07: Left (Value Engineering) */}
            <line x1="385" y1="340" x2="305" y2="340" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="305" cy="340" r="2.5" fill="#0284c7" />

            {/* 08: Top-Left (Production Readiness) */}
            <line x1="439" y1="209" x2="325" y2="200" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="325" cy="200" r="2.5" fill="#0284c7" />
          </svg>

          {/* Central Hub Typography */}
          <div className="absolute left-[570px] top-[340px] -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] rounded-full flex flex-col items-center justify-center text-center select-none pointer-events-none z-20">
            <div className="h-[2px] w-6 bg-[#0284c7] mb-2" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800 leading-snug">
              PRODUCT
            </p>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800 leading-snug">
              DEVELOPMENT
            </p>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800 leading-snug">
              CYCLE
            </p>
            <div className="mt-2 pt-2 border-t border-sky-100 space-y-0.5">
              <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                IDEAS TODAY
              </p>
              <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                SOLUTIONS TOMORROW
              </p>
            </div>
          </div>

          {/* ----------------- 8 CIRCULAR NUMBERED NODES ON WHEEL ----------------- */}
          {/* 01: Top (x=570, y=155) */}
          <div className="absolute left-[570px] top-[155px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">01</span>
            <RequirementDocIcon className="size-5" />
          </div>

          {/* 02: Top-Right (x=701, y=209) */}
          <div className="absolute left-[701px] top-[209px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">02</span>
            <ConceptBulbIcon className="size-5" />
          </div>

          {/* 03: Right (x=755, y=340) */}
          <div className="absolute left-[755px] top-[340px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">03</span>
            <Product3DCubeIcon className="size-5" />
          </div>

          {/* 04: Bottom-Right (x=701, y=471) */}
          <div className="absolute left-[701px] top-[471px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">04</span>
            <PrototypeGearIcon className="size-5" />
          </div>

          {/* 05: Bottom (x=570, y=525) */}
          <div className="absolute left-[570px] top-[525px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">05</span>
            <ValidationChecklistIcon className="size-5" />
          </div>

          {/* 06: Bottom-Left (x=439, y=471) */}
          <div className="absolute left-[439px] top-[471px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">06</span>
            <ImprovementChartIcon className="size-5" />
          </div>

          {/* 07: Left (x=385, y=340) */}
          <div className="absolute left-[385px] top-[340px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">07</span>
            <ValueEngCogIcon className="size-5" />
          </div>

          {/* 08: Top-Left (x=439, y=209) */}
          <div className="absolute left-[439px] top-[209px] -translate-x-1/2 -translate-y-1/2 size-18 rounded-full border-2 border-sky-300 bg-white shadow-md flex flex-col items-center justify-center text-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
            <span className="font-mono text-[11px] font-bold text-slate-500 leading-none mb-0.5">08</span>
            <ProductionFlagIcon className="size-5" />
          </div>

          {/* ----------------- 8 EXTERNAL TEXT CALLOUTS ----------------- */}
          {/* 01: Top-Left Callout (Requirement Study) */}
          <div className="absolute left-[160px] top-[40px] w-[250px] text-right">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[0]?.title ?? "Requirement Study"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[0]?.description ?? ""}
            </p>
          </div>

          {/* 02: Top-Right Callout (Concept Development) */}
          <div className="absolute left-[790px] top-[70px] w-[250px] text-left">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[1]?.title ?? "Concept Development"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[1]?.description ?? ""}
            </p>
          </div>

          {/* 03: Right Callout (3D Product Design) */}
          <div className="absolute left-[880px] top-[305px] w-[240px] text-left">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[2]?.title ?? "3D Product Design"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[2]?.description ?? ""}
            </p>
          </div>

          {/* 04: Bottom-Right Callout (Prototype Coordination) */}
          <div className="absolute left-[855px] top-[480px] w-[250px] text-left">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[3]?.title ?? "Prototype Coordination"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[3]?.description ?? ""}
            </p>
          </div>

          {/* 05: Bottom-Center Callout (Fitment & Validation) */}
          <div className="absolute left-[570px] top-[600px] -translate-x-1/2 w-[280px] text-center">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[4]?.title ?? "Fitment & Validation"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[4]?.description ?? ""}
            </p>
          </div>

          {/* 06: Bottom-Left Callout (Design Improvement) */}
          <div className="absolute left-[70px] top-[480px] w-[250px] text-right">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[5]?.title ?? "Design Improvement"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[5]?.description ?? ""}
            </p>
          </div>

          {/* 07: Left Callout (Value Engineering) */}
          <div className="absolute left-[50px] top-[305px] w-[240px] text-right">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[6]?.title ?? "Value Engineering"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[6]?.description ?? ""}
            </p>
          </div>

          {/* 08: Top-Left Callout (Production Readiness) */}
          <div className="absolute left-[70px] top-[160px] w-[240px] text-right">
            <h3 className="font-display text-[15.5px] font-bold text-slate-900 tracking-tight">
              {npdSteps[7]?.title ?? "Production Readiness"}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
              {npdSteps[7]?.description ?? ""}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TABLET VIEW (< 1024px)                            */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-6">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 text-center">
            <div className="h-[2px] w-6 bg-[#0284c7] mx-auto mb-2" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
              PRODUCT DEVELOPMENT CYCLE
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold mt-1">
              IDEAS TODAY • SOLUTIONS TOMORROW
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {npdSteps.map((step, idx) => (
              <Reveal key={step.no} delay={idx * 50}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <div className="size-11 rounded-full border border-sky-200 bg-sky-50/50 flex flex-col items-center justify-center text-[#0284c7] flex-shrink-0">
                    <span className="font-mono text-[10px] font-bold text-slate-500 leading-none">
                      {step.no}
                    </span>
                    <step.icon className="size-4 mt-0.5" />
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

        {/* ========================================================= */}
        {/* APPLICATION PILL BAR                                      */}
        {/* ========================================================= */}
        <div className="mt-10 relative">
          {/* Horizontal Pills Grid */}
          <div className="flex flex-wrap gap-3">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <Reveal key={app.label} delay={idx * 30}>
                  <div className="flex items-center gap-2.5 rounded-xl border border-sky-100/90 bg-sky-50/40 hover:bg-sky-50 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors cursor-default">
                    <Icon className="size-4 text-[#0284c7]" />
                    <span>{app.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
