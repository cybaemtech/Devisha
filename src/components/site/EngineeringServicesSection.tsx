import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { EngineeringIllustration } from "./EngineeringIllustration";

// Precise custom line icons matching the reference image
function CompassDraftIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M 12 7.2 L 5.5 21" />
      <path d="M 12 7.2 L 18.5 21" />
      <path d="M 8 15.5 L 16 15.5" />
      <circle cx="5.5" cy="21" r="0.75" fill="currentColor" />
      <circle cx="18.5" cy="21" r="0.75" fill="currentColor" />
    </svg>
  );
}

function LayersIsometricIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 2 7 L 12 12 L 22 7 Z" />
      <path d="M 2 12 L 12 17 L 22 12" />
      <path d="M 2 17 L 12 22 L 22 17" />
    </svg>
  );
}

function CubeIsometricIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 12 2 L 21 7.2 L 21 17.5 L 12 22.7 L 3 17.5 L 3 7.2 Z" />
      <path d="M 12 22.7 L 12 12" />
      <path d="M 21 7.2 L 12 12 L 3 7.2" />
    </svg>
  );
}

function GearEngineeringIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M 19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ElectricalEnclosureIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <rect x="7" y="5.5" width="10" height="5" rx="1" />
      <line x1="8" y1="14" x2="11" y2="14" />
      <line x1="8" y1="16.5" x2="13" y2="16.5" />
      <circle cx="16" cy="15.5" r="1.5" />
    </svg>
  );
}

function CNCToolpathIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 3 18 L 7.5 18 L 11 8.5 L 14.5 15 L 18 5 L 21.5 5" />
      <circle cx="21.5" cy="5" r="1.5" fill="currentColor" />
      <path d="M 4 21.5 L 20 21.5" strokeDasharray="2 2" strokeWidth="1.5" />
    </svg>
  );
}

function GensetVoltIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function TeamResourcesIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 16 21 v-2 a 4 4 0 0 0 -4 -4 H 6 a 4 4 0 0 0 -4 4 v 2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M 22 21 v-2 a 4 4 0 0 0 -3 -3.87" />
      <path d="M 16 3.13 a 4 4 0 0 1 0 7.75" />
    </svg>
  );
}

interface ServiceItem {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const serviceRows: [ServiceItem, ServiceItem][] = [
  [
    {
      number: "01",
      icon: CompassDraftIcon,
      title: "Engineering Design",
      description: "2D drawings, 3D CAD modelling, GA and fabrication drawings, BOM support, DFM and design optimization.",
    },
    {
      number: "02",
      icon: LayersIsometricIcon,
      title: "Detailed Engineering",
      description: "Production-ready packages: sheet-metal detailing, tolerance review, exploded views, DFA and value engineering.",
    },
  ],
  [
    {
      number: "03",
      icon: CubeIsometricIcon,
      title: "Product Development & NPD",
      description: "Requirement study, concept development, prototype coordination, validation and production readiness.",
    },
    {
      number: "04",
      icon: GearEngineeringIcon,
      title: "Sheet-Metal Engineering",
      description: "Cabinets, enclosures, machine covers, frames and canopies designed for cutting, bending, welding and assembly.",
    },
  ],
  [
    {
      number: "05",
      icon: ElectricalEnclosureIcon,
      title: "Electrical Enclosures",
      description: "PCC, MCC, HT, APFC, PLC and DG synchronizing panel enclosures engineered around your equipment layout.",
    },
    {
      number: "06",
      icon: CNCToolpathIcon,
      title: "CNC & Manufacturing",
      description: "Laser cutting, press-brake bending, MIG/TIG welding, drilling, tapping, fastener insertion and assembly.",
    },
  ],
  [
    {
      number: "07",
      icon: GensetVoltIcon,
      title: "Genset Engineering",
      description: "Generator canopies, acoustic enclosures, containers, layouts and complete fabrication documentation.",
    },
    {
      number: "08",
      icon: TeamResourcesIcon,
      title: "Engineering Resources",
      description: "Dedicated, project-based, remote, onsite or hybrid engineers embedded into your engineering team.",
    },
  ],
];

function ServiceBlock({ item }: { item: ServiceItem }) {
  return (
    <div className="group flex flex-col justify-between h-full pt-1 pb-2">
      <div>
        {/* Row 1: Number + Blue Icon */}
        <div className="flex items-center gap-3.5 mb-1.5">
          <span className="font-mono text-lg font-bold text-[#0284c7]">
            {item.number}
          </span>
          <div className="text-[#0284c7] transition-transform duration-300 group-hover:scale-110">
            <item.icon className="size-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-[16px] md:text-[17px] font-bold text-slate-900 tracking-tight transition-colors group-hover:text-[#0284c7]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs md:text-[13px] leading-relaxed text-slate-500 font-normal">
          {item.description}
        </p>
      </div>

      {/* Horizontal bottom separator */}
      <div className="mt-3 pt-2 border-b border-slate-200 group-hover:border-[#0284c7]/50 transition-colors" />
    </div>
  );
}

export function EngineeringServicesSection() {
  return (
    <section id="services" className="relative bg-white py-14 md:py-20 border-y border-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* TOP HEADER: LEFT TITLE/LEAD + RIGHT 4-STEP STACK         */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10">
          {/* Left Title & Description */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0284c7] font-semibold">
                OUR SERVICES
              </span>
              <div className="h-[1px] w-8 bg-[#0284c7]/40" />
            </div>

            <h2 className="laser-heading font-display text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
              Engineering Design Expertise from
              <br className="hidden sm:inline" /> Concept to Production
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              Flexible engineering services ranging from individual design assignments to complete product-development and manufacturing-support engagements.
            </p>
          </Reveal>

          {/* Right 4-step vertical process list */}
          <Reveal delay={100} className="self-start hidden md:block">
            <div className="border-l-2 border-slate-300 pl-4 py-1 space-y-1">
              {["DESIGN", "DEVELOP", "MANUFACTURE", "DELIVER"].map((step) => (
                <div
                  key={step}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 font-medium leading-relaxed"
                >
                  {step}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* MAIN BODY: LEFT ILLUSTRATION + TIMELINE + 2-COL SERVICES  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* ------------------------------------------------------- */}
          {/* LEFT COLUMN: Large Illustration + Slogan + CTA Button   */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Centered Large CAD Illustration */}
            <Reveal className="w-full flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/engineering-concept.webp"
                  alt="From Idea to Reality - Engineering & Manufacturing Reality"
                  className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </Reveal>

            {/* Slogan & CTA Button moved downward by ~30-35px */}
            <div className="mt-14 md:mt-16 space-y-4">
              <Reveal delay={120}>
                <div className="space-y-0.5">
                  <p className="font-mono text-xs md:text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    PRECISION ENGINEERING
                  </p>
                  <p className="font-mono text-xs md:text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    FOR A STRONGER TOMORROW
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <Button
                  asChild
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md shadow-sky-500/20 transition-all duration-300 hover:shadow-sky-600/30"
                >
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuss an Engineering Requirement <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* VERTICAL TIMELINE SEPARATOR (Desktop)                   */}
          {/* ------------------------------------------------------- */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative self-stretch py-1">
            <div className="relative h-full w-[1.5px] bg-[#0284c7]/40 flex flex-col justify-between items-center">
              {/* Top & bottom end dots */}
              <div className="size-1 rounded-full bg-[#0284c7] -mt-1" />
              <div className="size-1 rounded-full bg-[#0284c7] -mb-1" />

              {/* 4 Square Markers aligned with the 4 service rows */}
              <div className="absolute top-[5%] size-2.5 bg-[#0284c7] -translate-x-[4.5px]" />
              <div className="absolute top-[31%] size-2.5 bg-[#0284c7] -translate-x-[4.5px]" />
              <div className="absolute top-[57%] size-2.5 bg-[#0284c7] -translate-x-[4.5px]" />
              <div className="absolute top-[83%] size-2.5 bg-[#0284c7] -translate-x-[4.5px]" />
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT 2-COLUMN SERVICES GRID (4 Rows x 2 Columns)       */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-6 flex flex-col gap-y-6">
            {serviceRows.map(([leftItem, rightItem], rowIdx) => (
              <div key={leftItem.number} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                <Reveal delay={rowIdx * 60}>
                  <ServiceBlock item={leftItem} />
                </Reveal>
                <Reveal delay={rowIdx * 60 + 30}>
                  <ServiceBlock item={rightItem} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
