import React from "react";
import { Reveal } from "./Reveal";

// ============================================================================
// Custom Vector Icons matching the reference image exactly
// ============================================================================

function MissionMountainFlagIcon({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Mountain Base Triangle */}
      <polygon points="24 16 38 40 10 40" strokeWidth="2.2" />
      {/* Mountain Ridge / Internal Peak Lines */}
      <path d="M 24 16 L 24 40" strokeDasharray="3 2" strokeWidth="1.2" />
      <path d="M 18 30 L 24 26 L 30 30" strokeWidth="1.6" />
      {/* Flag Pole at the Summit */}
      <line x1="24" y1="8" x2="24" y2="16" strokeWidth="2.2" />
      {/* Flag Banner */}
      <path d="M 24 8 L 34 11.5 L 24 15 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
    </svg>
  );
}

function VisionEyeIcon({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Radiating Vision Rays above eye */}
      <line x1="24" y1="8" x2="24" y2="12" strokeWidth="2" />
      <line x1="16" y1="11" x2="18.5" y2="14.5" strokeWidth="2" />
      <line x1="32" y1="11" x2="29.5" y2="14.5" strokeWidth="2" />
      {/* Eye Outline */}
      <path d="M 8 26 C 14 18 34 18 40 26 C 34 34 14 34 8 26 Z" strokeWidth="2.2" />
      {/* Iris & Pupil */}
      <circle cx="24" cy="26" r="6" strokeWidth="2" />
      <circle cx="24" cy="26" r="2.5" fill="currentColor" />
    </svg>
  );
}

function ValuesTeamStarIcon({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* 5-Pointed Star on Top */}
      <path
        d="M 24 6 L 25.5 10.5 L 30.2 10.5 L 26.4 13.3 L 27.9 17.8 L 24 15 L 20.1 17.8 L 21.6 13.3 L 17.8 10.5 L 22.5 10.5 Z"
        fill="currentColor"
        fillOpacity="0.2"
        strokeWidth="1.8"
      />
      {/* Central Leader Person */}
      <circle cx="24" cy="23" r="3.2" strokeWidth="2" />
      <path d="M 18 36 C 18 30.5 30 30.5 30 36" strokeWidth="2" />

      {/* Left Team Member */}
      <circle cx="14" cy="26" r="2.8" strokeWidth="1.8" />
      <path d="M 8 38 C 8 33.5 18 33.5 18 38" strokeWidth="1.8" />

      {/* Right Team Member */}
      <circle cx="34" cy="26" r="2.8" strokeWidth="1.8" />
      <path d="M 30 38 C 30 33.5 40 33.5 40 38" strokeWidth="1.8" />
    </svg>
  );
}

const valuesData = [
  {
    no: "01",
    icon: MissionMountainFlagIcon,
    title: "Mission",
    description:
      "To deliver dependable engineering, design and manufacturing support that improves product quality, manufacturability and execution speed.",
  },
  {
    no: "02",
    icon: VisionEyeIcon,
    title: "Vision",
    description:
      "To become a trusted engineering partner recognized for practical innovation, engineering excellence, quality and long-term customer relationships.",
  },
  {
    no: "03",
    icon: ValuesTeamStarIcon,
    title: "Our Values",
    description:
      "Quality • Fair Pricing • On-Time Delivery • Craftsmanship • Safety • Technical Ownership • Customer Satisfaction",
  },
];

export function MissionVisionValuesSection() {
  return (
    <section id="direction" className="relative bg-white py-16 md:py-24 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12 lg:pb-16">
          {/* Left Eyebrow + Title */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                DIRECTION
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Mission, Vision &amp; Values
            </h2>
          </Reveal>

          {/* Right Decorative Process Text */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["ENGINEERING", "A BETTER", "TOMORROW"].map((line) => (
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
        {/* 3-COLUMN CONNECTED FLOW (MISSION, VISION, VALUES)         */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Desktop Continuous Connecting Line with Solid Square Markers */}
          <div className="hidden lg:block absolute left-0 right-0 top-[60px] -translate-y-1/2 pointer-events-none z-0">
            {/* Continuous thin light-blue line */}
            <div className="w-full h-[1.5px] bg-[#bae6fd]" />

            {/* Square Blue Marker 1 (Between Column 1 and Column 2 at 33.3%) */}
            <div className="absolute left-[34%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-[#0284c7] shadow-sm" />

            {/* Square Blue Marker 2 (Between Column 2 and Column 3 at 66.6%) */}
            <div className="absolute left-[66%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-[#0284c7] shadow-sm" />
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {valuesData.map((item, idx) => (
              <Reveal key={item.no} delay={idx * 80} className="flex flex-col items-center text-center">
                {/* Top Row: Ghost Number + Circular Icon Container */}
                <div className="relative flex items-center justify-center w-full min-h-[120px]">
                  {/* Large subtle ghost number behind/beside the circle */}
                  <span className="absolute left-1/2 -translate-x-[110px] sm:-translate-x-[130px] font-mono text-5xl sm:text-6xl font-extrabold text-slate-200 select-none tracking-tighter">
                    {item.no}
                  </span>

                  {/* Large Circular Icon Badge */}
                  <div className="size-28 sm:size-32 rounded-full border border-sky-200 ring-8 ring-sky-50/80 bg-white flex items-center justify-center text-[#0284c7] shadow-sm relative z-10 transition-transform duration-300 hover:scale-105">
                    <item.icon className="size-11 sm:size-12" />
                  </div>
                </div>

                {/* Small Blue Accent Dash */}
                <div className="h-[2.5px] w-8 bg-[#0284c7] mt-6 mb-2" />

                {/* Heading */}
                <h3 className="font-display text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal max-w-sm mx-auto">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
