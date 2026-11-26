import React from "react";
import { Reveal } from "./Reveal";

const leftFeatures = [
  {
    no: "01",
    title: "Production-Ready Design",
    description: "Manufacturing feasibility, assembly requirements and commercial realities considered from day one.",
  },
  {
    no: "02",
    title: "Complete Engineering Support",
    description: "From concept and detailed design to manufacturing coordination.",
  },
  {
    no: "03",
    title: "Flexible Engagement",
    description: "Complete projects, individual engineering services or dedicated technical resources.",
  },
] as const;

const rightFeatures = [
  {
    no: "04",
    title: "Cost Optimization",
    description: "Value engineering, material utilization and vendor coordination.",
  },
  {
    no: "05",
    title: "Manufacturing Understanding",
    description: "Design decisions made considering real production processes.",
  },
  {
    no: "06",
    title: "Reliable Quality",
    description: "Defined processes and inspection discipline support consistent output.",
  },
] as const;

export function WhyDevishaSection() {
  return (
    <section id="why-devisha" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                WHY DEVISHA
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Engineering Thinking with Practical Manufacturing Insight
            </h2>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-[#0284c7] pl-4 py-1 space-y-1">
              {["PRACTICAL", "ENGINEERING", "REAL-WORLD", "IMPACT"].map((line) => (
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
        {/* CENTRAL ORBIT / CIRCULAR ENGINEERING DIAGRAM (DESKTOP)     */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative my-4">
          <div className="relative w-full max-w-[1200px] mx-auto h-[540px]">
            {/* SVG Connecting Arcs, Rays and Central Orbit Background */}
            <svg
              viewBox="0 0 1200 540"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              <defs>
                {/* Soft Radial Glow for Central Circle */}
                <radialGradient id="centerOrbitGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#f0f9ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* ----------------- LEFT ARCS & CONNECTIONS ----------------- */}
              {/* Outer Left Elliptical Arc running through nodes 01 -> 02 -> 03 */}
              <path
                d="M 390 90 A 210 210 0 0 0 390 450"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />

              {/* Curved ray from node 01 (390, 90) to central hub (525, 200) */}
              <path
                d="M 390 90 Q 485 120 525 200"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Straight ray from node 02 (330, 270) to central hub (480, 270) */}
              <line
                x1="330"
                y1="270"
                x2="480"
                y2="270"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Curved ray from node 03 (390, 450) to central hub (525, 340) */}
              <path
                d="M 390 450 Q 485 420 525 340"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Left Accent Dots */}
              <circle cx="390" cy="90" r="2.5" fill="#0284c7" />
              <circle cx="330" cy="270" r="2.5" fill="#0284c7" />
              <circle cx="390" cy="450" r="2.5" fill="#0284c7" />
              <circle cx="435" cy="165" r="2.5" fill="#0284c7" />
              <circle cx="435" cy="375" r="2.5" fill="#0284c7" />

              {/* ----------------- RIGHT ARCS & CONNECTIONS ----------------- */}
              {/* Outer Right Elliptical Arc running through nodes 04 -> 05 -> 06 (Max X is 870) */}
              <path
                d="M 810 90 A 210 210 0 0 1 810 450"
                stroke="#bae6fd"
                strokeWidth="1.6"
              />

              {/* Curved ray from node 04 (810, 90) to central hub (675, 200) */}
              <path
                d="M 810 90 Q 715 120 675 200"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Straight ray from node 05 (870, 270) to central hub (720, 270) */}
              <line
                x1="870"
                y1="270"
                x2="720"
                y2="270"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Curved ray from node 06 (810, 450) to central hub (675, 340) */}
              <path
                d="M 810 450 Q 715 420 675 340"
                stroke="#bae6fd"
                strokeWidth="1.4"
              />

              {/* Right Accent Dots */}
              <circle cx="810" cy="90" r="2.5" fill="#0284c7" />
              <circle cx="870" cy="270" r="2.5" fill="#0284c7" />
              <circle cx="810" cy="450" r="2.5" fill="#0284c7" />
              <circle cx="765" cy="165" r="2.5" fill="#0284c7" />
              <circle cx="765" cy="375" r="2.5" fill="#0284c7" />

              {/* ----------------- CENTRAL ORBIT HUB ----------------- */}
              {/* Outer Subtle Glow Ring */}
              <circle cx="600" cy="270" r="145" fill="url(#centerOrbitGlow)" />

              {/* Outer Dashed Orbit Ring */}
              <circle
                cx="600"
                cy="270"
                r="125"
                stroke="#bae6fd"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* Main White Hub Body */}
              <circle
                cx="600"
                cy="270"
                r="115"
                fill="#ffffff"
                stroke="#e0f2fe"
                strokeWidth="2"
              />

              {/* Cardinal Accent Dots around the Central Hub */}
              <circle cx="600" cy="155" r="2.5" fill="#0284c7" />
              <circle cx="600" cy="385" r="2.5" fill="#0284c7" />
              <circle cx="485" cy="270" r="2.5" fill="#0284c7" />
              <circle cx="715" cy="270" r="2.5" fill="#0284c7" />
            </svg>

            {/* Central Text Content Block */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full flex flex-col items-center justify-center text-center select-none pointer-events-none z-10">
              <div className="h-[2px] w-8 bg-[#0284c7] mb-3" />
              <div className="space-y-0.5">
                <p className="font-display text-[15px] font-extrabold tracking-[0.2em] text-slate-800 leading-snug">
                  FROM
                </p>
                <p className="font-display text-[15px] font-extrabold tracking-[0.2em] text-slate-800 leading-snug">
                  IDEAS TO
                </p>
                <p className="font-display text-[15px] font-extrabold tracking-[0.2em] text-slate-800 leading-snug">
                  IMPACT
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-100 space-y-0.5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                  ENGINEERING INSIGHT
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                  IN EVERY SOLUTION
                </p>
              </div>
            </div>

            {/* ----------------- LEFT 3 FEATURE ITEMS ----------------- */}
            {/* Item 01 (Top Left) */}
            <div className="absolute left-0 top-[40px] w-[340px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {leftFeatures[0].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {leftFeatures[0].description}
              </p>
            </div>
            {/* Node 01 */}
            <div className="absolute left-[366px] top-[66px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              01
            </div>

            {/* Item 02 (Middle Left) */}
            <div className="absolute left-0 top-[220px] w-[280px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {leftFeatures[1].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {leftFeatures[1].description}
              </p>
            </div>
            {/* Node 02 */}
            <div className="absolute left-[306px] top-[246px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              02
            </div>

            {/* Item 03 (Bottom Left) */}
            <div className="absolute left-0 top-[400px] w-[340px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {leftFeatures[2].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {leftFeatures[2].description}
              </p>
            </div>
            {/* Node 03 */}
            <div className="absolute left-[366px] top-[426px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              03
            </div>

            {/* ----------------- RIGHT 3 FEATURE ITEMS ----------------- */}
            {/* Node 04 */}
            <div className="absolute left-[786px] top-[66px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              04
            </div>
            {/* Item 04 (Top Right) */}
            <div className="absolute left-[850px] top-[40px] w-[350px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {rightFeatures[0].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {rightFeatures[0].description}
              </p>
            </div>

            {/* Node 05 */}
            <div className="absolute left-[846px] top-[246px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              05
            </div>
            {/* Item 05 (Middle Right) */}
            <div className="absolute left-[910px] top-[220px] w-[290px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {rightFeatures[1].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {rightFeatures[1].description}
              </p>
            </div>

            {/* Node 06 */}
            <div className="absolute left-[786px] top-[426px] size-12 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-base ring-4 ring-sky-50/90 z-20">
              06
            </div>
            {/* Item 06 (Bottom Right) */}
            <div className="absolute left-[850px] top-[400px] w-[350px] text-left">
              <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
              <h3 className="font-display text-[16px] font-bold text-slate-900 tracking-tight">
                {rightFeatures[2].title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                {rightFeatures[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET RESPONSIVE VIEW (< 1024px)                 */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-8">
          {/* Central Orbit Mobile Banner */}
          <div className="rounded-2xl border border-sky-100 bg-sky-50/40 p-6 text-center">
            <div className="h-[2px] w-8 bg-[#0284c7] mx-auto mb-2" />
            <p className="font-display text-base font-extrabold tracking-[0.2em] text-slate-800">
              FROM IDEAS TO IMPACT
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold mt-1">
              ENGINEERING INSIGHT IN EVERY SOLUTION
            </p>
          </div>

          {/* 6 Feature Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...leftFeatures, ...rightFeatures].map((item, idx) => (
              <Reveal key={item.no} delay={idx * 50}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <div className="size-10 rounded-full border-2 border-sky-400 bg-white flex items-center justify-center shadow-sm text-[#0284c7] font-bold font-mono text-sm flex-shrink-0">
                    {item.no}
                  </div>
                  <div className="flex-1">
                    <div className="h-[2px] w-6 bg-[#0284c7] mb-1.5" />
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">
                      {item.description}
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
