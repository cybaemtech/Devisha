import React from "react";
import { Reveal } from "./Reveal";

// Technical blueprint line icons matching reference image
function DocumentIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function MonitorCADIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 8l5 4 5-4" />
      <path d="M7 12l5 4 5-4" />
    </svg>
  );
}

function PrototypeCubeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2l9 4.9v10.2L12 22 3 17.1V6.9L12 2z" />
      <path d="M12 22V12" />
      <path d="M21 6.9l-9 5.1-9-5.1" />
    </svg>
  );
}

function PlanningPalletIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <line x1="2" y1="14" x2="22" y2="14" />
      <line x1="4" y1="14" x2="4" y2="19" />
      <line x1="12" y1="14" x2="12" y2="19" />
      <line x1="20" y1="14" x2="20" y2="19" />
      <line x1="2" y1="19" x2="22" y2="19" />
    </svg>
  );
}

function ManufacturingPressIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="4" rx="1" />
      <path d="M8 7 L10 15 L14 15 L16 7" />
      <rect x="7" y="15" width="10" height="3" />
      <rect x="4" y="18" width="16" height="3" rx="1" />
    </svg>
  );
}

function QualityShieldIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function DeliveryTruckIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

interface WorkflowItem {
  no: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const workflowSteps: Record<"01" | "02" | "03" | "04" | "05" | "06" | "07", WorkflowItem> = {
  "01": {
    no: "01",
    icon: DocumentIcon,
    title: "Requirement Study",
    description: "Application, specifications, materials, tolerances, quantities and delivery.",
  },
  "02": {
    no: "02",
    icon: MonitorCADIcon,
    title: "Engineering Design",
    description: "Concept, 3D models, detailed drawings, GA layouts and documentation.",
  },
  "03": {
    no: "03",
    icon: PrototypeCubeIcon,
    title: "Prototype & Validation",
    description: "Prototype manufacturing, fitment checks and engineering modifications.",
  },
  "04": {
    no: "04",
    icon: PlanningPalletIcon,
    title: "Production Planning",
    description: "Manufacturing route, vendors, quality checkpoints and delivery.",
  },
  "05": {
    no: "05",
    icon: ManufacturingPressIcon,
    title: "Manufacturing",
    description: "Cutting, bending, welding, machining and assembly coordination.",
  },
  "06": {
    no: "06",
    icon: QualityShieldIcon,
    title: "Quality Verification",
    description: "Dimensional, fitment and visual checks at defined stages.",
  },
  "07": {
    no: "07",
    icon: DeliveryTruckIcon,
    title: "Production & Delivery",
    description: "Manufacturing coordination through final production and dispatch.",
  },
};

export function EngineeringWorkflowSection() {
  return (
    <section id="workflow" className="surface-navy relative overflow-hidden py-18 md:py-24 select-none">
      {/* Blueprint Grid Canvas */}
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />

      {/* Ambient Blue Radial Glows */}
      <div
        className="absolute -left-24 top-1/4 size-[550px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-blue)" }}
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-10 size-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-blue)" }}
        aria-hidden
      />

      {/* Subtle CAD Wireframe Accents in Lower Corners */}
      <div className="absolute bottom-0 left-0 w-80 h-64 opacity-20 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 300 240" fill="none" stroke="#38bdf8" strokeWidth="0.8" className="w-full h-full">
          <path d="M 20 190 L 130 130 L 240 180 L 130 240 Z" strokeDasharray="3 3" />
          <path d="M 20 190 L 20 95 L 130 35 L 130 130 Z" />
          <path d="M 130 35 L 240 85 L 240 180" />
          <ellipse cx="75" cy="115" rx="22" ry="14" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-64 opacity-20 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 300 240" fill="none" stroke="#38bdf8" strokeWidth="0.8" className="w-full h-full">
          <path d="M 80 190 L 185 130 L 290 180 L 185 240 Z" strokeDasharray="3 3" />
          <path d="M 185 130 L 185 45 L 290 95 L 290 180 Z" />
          <circle cx="238" cy="135" r="18" />
          <circle cx="238" cy="135" r="28" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#38bdf8] font-semibold">
                DESIGN-TO-MANUFACTURING
              </span>
              <div className="h-[1px] w-10 bg-[#38bdf8]/40" />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
              One Connected Engineering Workflow
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
              From Concept to Completed Part - engineered for manufacturability at every stage.
            </p>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* INTEGRATED SCHEMATIC WORKFLOW DIAGRAM (Desktop)           */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative w-full">
          <svg
            viewBox="0 0 1200 490"
            className="w-full h-auto overflow-visible select-none"
            fill="none"
          >
            <defs>
              {/* Glowing Ray Filter */}
              <filter id="ray-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.9" />
                <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#0284c7" floodOpacity="0.6" />
              </filter>

              {/* Node Glow Filter */}
              <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* ======================================================= */}
            {/* CONTINUOUS WORKFLOW RAY                                 */}
            {/* Starts at 01 (80, 30) -> 02 (340, 30) -> 03 (600, 30)   */}
            {/* -> 04 (860, 30) -> extends straight to 1060 ->          */}
            {/* curves down through (1140, 150) -> returns left from    */}
            {/* 1060 to 05 (820, 270) -> 06 (520, 270) -> 07 (220, 270) */}
            {/* ======================================================= */}
            <path
              d="M 80 30 L 1060 30 C 1140 30, 1140 270, 1060 270 L 220 270"
              stroke="#0284c7"
              strokeWidth="2.75"
              strokeLinecap="round"
              filter="url(#ray-glow)"
            />
            <path
              d="M 80 30 L 1060 30 C 1140 30, 1140 270, 1060 270 L 220 270"
              stroke="#e0f2fe"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Directional Arrowheads directly on the ray */}
            {/* 01 -> 02 Arrow */}
            <g transform="translate(210, 30)">
              <polygon points="-5,-4 4,0 -5,4" fill="#38bdf8" />
            </g>
            {/* 02 -> 03 Arrow */}
            <g transform="translate(470, 30)">
              <polygon points="-5,-4 4,0 -5,4" fill="#38bdf8" />
            </g>
            {/* 03 -> 04 Arrow */}
            <g transform="translate(730, 30)">
              <polygon points="-5,-4 4,0 -5,4" fill="#38bdf8" />
            </g>

            {/* Downward Arrow on Right U-Turn Curve */}
            <g transform="translate(1120, 150)">
              <polygon points="-4,-5 0,4 4,-5" fill="#38bdf8" />
            </g>

            {/* 05 -> 06 Leftward Arrow */}
            <g transform="translate(670, 270)">
              <polygon points="5,-4 -4,0 5,4" fill="#38bdf8" />
            </g>
            {/* 06 -> 07 Leftward Arrow */}
            <g transform="translate(370, 270)">
              <polygon points="5,-4 -4,0 5,4" fill="#38bdf8" />
            </g>

            {/* ======================================================= */}
            {/* CIRCULAR NUMBERED NODES DIRECTLY ON THE RAY             */}
            {/* ======================================================= */}
            {/* Node 01 */}
            <circle cx="80" cy="30" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="80" y="35" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">01</text>

            {/* Node 02 */}
            <circle cx="340" cy="30" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="340" y="35" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">02</text>

            {/* Node 03 */}
            <circle cx="600" cy="30" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="600" y="35" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">03</text>

            {/* Node 04 */}
            <circle cx="860" cy="30" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="860" y="35" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">04</text>

            {/* Node 05 */}
            <circle cx="820" cy="270" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="820" y="275" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">05</text>

            {/* Node 06 */}
            <circle cx="520" cy="270" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="520" y="275" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">06</text>

            {/* Node 07 */}
            <circle cx="220" cy="270" r="23" fill="#070e24" stroke="#38bdf8" strokeWidth="2.5" filter="url(#node-glow)" />
            <text x="220" y="275" fill="#38bdf8" fontSize="13.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">07</text>

            {/* ======================================================= */}
            {/* STAGE CONTENT BLOCKS (Positioned Below Respective Node) */}
            {/* ======================================================= */}
            {/* Stage 01 Content (Below Node 01 at x=80) */}
            <foreignObject x="68" y="58" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <DocumentIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["01"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["01"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 02 Content (Below Node 02 at x=340) */}
            <foreignObject x="328" y="58" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <MonitorCADIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["02"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["02"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 03 Content (Below Node 03 at x=600) */}
            <foreignObject x="588" y="58" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <PrototypeCubeIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["03"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["03"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 04 Content (Below Node 04 at x=860, ends at x=1040, well before curve at x=1060-1140) */}
            <foreignObject x="848" y="58" width="195" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <PlanningPalletIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["04"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal">
                  {workflowSteps["04"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 05 Content (Below Node 05 at x=820) */}
            <foreignObject x="808" y="298" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <ManufacturingPressIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["05"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["05"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 06 Content (Below Node 06 at x=520) */}
            <foreignObject x="508" y="298" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <QualityShieldIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["06"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["06"].description}
                </p>
              </div>
            </foreignObject>

            {/* Stage 07 Content (Below Node 07 at x=220) */}
            <foreignObject x="208" y="298" width="220" height="180">
              <div className="flex flex-col items-start pt-1">
                <div className="w-[1.5px] h-5 bg-[#38bdf8]/40 ml-3 mb-2" />
                <div className="text-[#38bdf8] mb-2">
                  <DeliveryTruckIcon className="size-5" />
                </div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-tight leading-snug">
                  {workflowSteps["07"].title}
                </h3>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-[12.5px] leading-relaxed text-slate-300/80 font-normal pr-3">
                  {workflowSteps["07"].description}
                </p>
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Mobile / Tablet View: Vertical Connected Flow */}
        <div className="block lg:hidden space-y-6 relative pl-6 border-l-2 border-[#38bdf8]/40 ml-4">
          {[
            workflowSteps["01"],
            workflowSteps["02"],
            workflowSteps["03"],
            workflowSteps["04"],
            workflowSteps["05"],
            workflowSteps["06"],
            workflowSteps["07"],
          ].map((item, idx) => (
            <Reveal key={item.no} delay={idx * 50} className="relative">
              {/* Circular node on the vertical timeline */}
              <div className="absolute -left-[35px] top-0 size-8 rounded-full bg-[#070e24] border-2 border-[#38bdf8] flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <span className="font-mono text-xs font-bold text-[#38bdf8]">
                  {item.no}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <item.icon className="size-4 text-[#38bdf8]" />
                  <h3 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="h-[1px] w-6 bg-[#38bdf8]/60 my-1.5" />
                <p className="text-xs leading-relaxed text-slate-300/80 font-normal">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
