import React, { useState, useEffect, useRef } from "react";
import { ChevronsRight } from "lucide-react";

// Exact DEVISHA brand palette extracted from logo
const BRAND_BLUE = "#0062b8";
const BRAND_SILVER = "#64748b";

interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Your Idea",
    description: "Sketches, specifications and functional requirements.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Lightbulb base */}
        <path d="M19 35h10M21 39h6M22 43h4" />
        <path d="M24 7a12 12 0 0 0-9 20c2.2 2.5 3.5 5.8 3.5 9h11c0-3.2 1.3-6.5 3.5-9a12 12 0 0 0-9-20z" />
        {/* Rays */}
        <line x1="24" y1="2" x2="24" y2="4.5" />
        <line x1="10" y1="10" x2="12" y2="12" />
        <line x1="38" y1="10" x2="36" y2="12" />
        <line x1="4" y1="21" x2="7" y2="21" />
        <line x1="44" y1="21" x2="41" y2="21" />
        {/* Filament */}
        <path d="M21 21a3 3 0 0 1 6 0c0 2-3 3-3 5" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Engineering",
    description: "Concept converts into a structured CAD wireframe.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Top pivot circle and handle */}
        <line x1="24" y1="3" x2="24" y2="6.5" strokeWidth="2.2" />
        <circle cx="24" cy="10" r="3.5" />
        {/* Compass Legs */}
        <line x1="22" y1="13" x2="11" y2="42" strokeWidth="2" />
        <line x1="26" y1="13" x2="37" y2="42" strokeWidth="2" />
        {/* Horizontal adjustment wing/arc */}
        <path d="M15 29 Q24 33.5 33 29" strokeWidth="1.7" />
        <line x1="14" y1="29" x2="34" y2="29" strokeWidth="1.5" />
        <circle cx="24" cy="29" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Detailed Design",
    description: "Wireframe becomes a detailed 3D assembly.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Top Face */}
        <polygon points="24,6 40,15 24,24 8,15" fill="currentColor" fillOpacity="0.04" />
        {/* Left Face */}
        <polygon points="8,15 24,24 24,42 8,33" fill="currentColor" fillOpacity="0.06" />
        {/* Right Face */}
        <polygon points="40,15 24,24 24,42 40,33" fill="currentColor" fillOpacity="0.02" />
        <line x1="24" y1="24" x2="24" y2="42" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Prototype",
    description: "The product separates into an exploded, buildable view.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Exploded top piece */}
        <polygon points="24,5 34,10.5 24,16 14,10.5" strokeWidth="2" />
        <polygon points="14,10.5 24,16 24,22 14,16.5" strokeWidth="2" />
        <polygon points="34,10.5 24,16 24,22 34,16.5" strokeWidth="2" />
        {/* Bottom left separated piece */}
        <polygon points="12,27 20,31.5 12,36 4,31.5" strokeWidth="1.7" />
        <polygon points="4,31.5 12,36 12,42 4,37.5" strokeWidth="1.7" />
        <polygon points="20,31.5 12,36 12,42 20,37.5" strokeWidth="1.7" />
        {/* Bottom right wireframe piece */}
        <polygon points="36,27 44,31.5 36,36 28,31.5" strokeWidth="1.7" strokeDasharray="3 2" />
        <polygon points="28,31.5 36,36 36,42 28,37.5" strokeWidth="1.7" strokeDasharray="3 2" />
        <polygon points="44,31.5 36,36 36,42 44,37.5" strokeWidth="1.7" strokeDasharray="3 2" />
        {/* Alignment lines */}
        <path d="M24 22 L24 27" strokeDasharray="2 2" strokeWidth="1.4" />
        <path d="M19 14 L12 25" strokeDasharray="2 2" strokeWidth="1.4" />
        <path d="M29 14 L36 25" strokeDasharray="2 2" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Manufacturing",
    description: "Laser cutting → bending → welding → assembly.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Laser Head / Torch */}
        <rect x="20" y="5" width="8" height="11" rx="1.5" />
        <line x1="24" y1="16" x2="24" y2="22" strokeWidth="2.3" />
        <path d="M17 7h14" />
        <path d="M17 7v5h3" />
        {/* Laser beam */}
        <line x1="24" y1="22" x2="24" y2="34" strokeDasharray="2 2" strokeWidth="2.1" />
        {/* Metal Sheet */}
        <path
          d="M8 35 L19 35 L22 33.5 L26 33.5 L29 35 L40 35 L40 39 L8 39 Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <line x1="8" y1="35" x2="40" y2="35" strokeWidth="2" />
        {/* Sparks */}
        <line x1="21" y1="31" x2="16" y2="26" strokeWidth="1.6" />
        <line x1="27" y1="31" x2="32" y2="26" strokeWidth="1.6" />
        <circle cx="24" cy="34" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Finished Product",
    description: "A completed, production-ready industrial product.",
    icon: (
      <svg
        className="size-11 transition-colors duration-500"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Box Structure */}
        <polygon points="21,7 37,15 21,23 5,15" fill="currentColor" fillOpacity="0.04" />
        <polygon points="5,15 21,23 21,41 5,33" fill="currentColor" fillOpacity="0.06" />
        <polygon points="37,15 21,23 21,41 37,33" fill="currentColor" fillOpacity="0.02" />
        {/* Verified Badge */}
        <circle cx="33" cy="33" r="8" fill="white" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M29.5 33 L32 35.5 L36.5 30.5"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function EngineeringJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Trigger when user scrolls to this section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reveal steps slowly one by one when section enters view
  useEffect(() => {
    if (!isInView) return;

    // Reveal step 1 right away
    setRevealedCount(1);
    setActiveStep(0);

    // Stagger subsequent steps slowly one-by-one (every 850ms)
    const timers: NodeJS.Timeout[] = [];
    for (let i = 2; i <= journeySteps.length; i++) {
      const timer = setTimeout(() => {
        setRevealedCount(i);
        setActiveStep(i - 1);
      }, (i - 1) * 850);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isInView]);

  // Once all steps are revealed, slowly auto-cycle through them one-by-one (unless hovered)
  useEffect(() => {
    if (!isInView || revealedCount < journeySteps.length || isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isInView, revealedCount, isHovered]);

  const handleStepHover = (index: number) => {
    // Only allow hover on revealed steps
    if (index < revealedCount) {
      setIsHovered(true);
      setActiveStep(index);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-7xl pt-4 pb-6 select-none"
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Dot Wave Decorative Canvas */}
      <div
        className={`pointer-events-none absolute -bottom-10 -left-10 size-64 transition-opacity duration-1000 ${
          isInView ? "opacity-15" : "opacity-0"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${BRAND_BLUE} 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom left, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-10 -right-10 size-64 transition-opacity duration-1000 ${
          isInView ? "opacity-15" : "opacity-0"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${BRAND_BLUE} 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom right, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom right, black 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Desktop / Large Screen Timeline View */}
      <div className="hidden lg:block">
        {/* Top Circles Row - Reveal slowly step-by-step */}
        <div className="grid grid-cols-6 items-center">
          {journeySteps.map((item, index) => {
            const isRevealed = index < revealedCount;
            const isActive = activeStep === index && isRevealed;

            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-out"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? "translateY(0) scale(1)" : "translateY(28px) scale(0.92)",
                  pointerEvents: isRevealed ? "auto" : "none",
                }}
                onMouseEnter={() => handleStepHover(index)}
              >
                <div
                  className={`group relative flex size-20 items-center justify-center rounded-full transition-all duration-500 ${
                    isActive ? "scale-105" : "bg-transparent"
                  }`}
                >
                  {/* Animated Circular Stroke in exact DEVISHA logo blue */}
                  <svg
                    className="pointer-events-none absolute -inset-1 size-[calc(100%+8px)] -rotate-90 z-20"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={BRAND_BLUE}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className={`transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-95 [stroke-dashoffset:0] drop-shadow-[0_0_5px_rgba(0,98,184,0.35)]"
                          : "opacity-0 [stroke-dashoffset:283]"
                      }`}
                      style={{
                        strokeDasharray: "283",
                      }}
                    />
                  </svg>

                  {/* Icon */}
                  <div
                    className="relative z-10 transition-all duration-500"
                    style={{
                      color: isActive ? BRAND_BLUE : BRAND_SILVER,
                      transform: isActive ? "scale(1.06)" : "scale(1)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Connecting Chevron between circles */}
                {index < journeySteps.length - 1 && (
                  <div
                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-3 z-20 flex items-center justify-center transition-all duration-500"
                    style={{
                      color: isActive || activeStep === index + 1 ? BRAND_BLUE : BRAND_SILVER,
                      opacity: index + 1 < revealedCount ? (isActive || activeStep === index + 1 ? 0.9 : 0.4) : 0,
                      transform: index + 1 < revealedCount ? "scale(1)" : "scale(0.5)",
                    }}
                  >
                    <ChevronsRight className="size-4.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Horizontal Connector Line & Indicator Nodes */}
        <div className="relative mt-8 mb-6">
          {/* Base connector line expanding step-by-step as each step reveals */}
          <div
            className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1.5px] z-0 transition-all duration-700 ease-out"
            style={{
              background: `linear-gradient(to right, transparent, rgba(100,116,139,0.25) 20%, rgba(0,98,184,0.35) 50%, rgba(100,116,139,0.25) 80%, transparent)`,
              transform: `scaleX(${revealedCount > 0 ? (revealedCount - 1) / (journeySteps.length - 1) : 0})`,
              transformOrigin: "left",
            }}
          />

          {/* Grid of Nodes aligned directly below each circle */}
          <div className="relative z-10 grid grid-cols-6">
            {journeySteps.map((item, index) => {
              const isRevealed = index < revealedCount;
              const isActive = activeStep === index && isRevealed;

              return (
                <div
                  key={`node-${item.step}`}
                  className="flex justify-center cursor-pointer transition-all duration-500"
                  style={{
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? "scale(1)" : "scale(0.3)",
                    pointerEvents: isRevealed ? "auto" : "none",
                  }}
                  onMouseEnter={() => handleStepHover(index)}
                >
                  <div
                    className="flex size-3.5 items-center justify-center rounded-full border transition-all duration-500"
                    style={{
                      borderColor: isActive ? BRAND_BLUE : "rgba(100,116,139,0.4)",
                      backgroundColor: isActive ? BRAND_BLUE : "#ffffff",
                      boxShadow: isActive
                        ? `0 0 0 4px rgba(0,98,184,0.2), 0 0 8px rgba(0,98,184,0.35)`
                        : `0 0 0 2px rgba(100,116,139,0.1)`,
                      transform: isActive ? "scale(1.25)" : "scale(1)",
                    }}
                  >
                    <div
                      className="size-1 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: isActive ? "#ffffff" : BRAND_BLUE,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Descriptions Row */}
        <div className="grid grid-cols-6 gap-3">
          {journeySteps.map((item, index) => {
            const isRevealed = index < revealedCount;
            const isActive = activeStep === index && isRevealed;

            return (
              <div
                key={`text-${item.step}`}
                className="group flex flex-col items-center text-center px-1 cursor-pointer transition-all duration-700 ease-out"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? "translateY(0)" : "translateY(24px)",
                  pointerEvents: isRevealed ? "auto" : "none",
                }}
                onMouseEnter={() => handleStepHover(index)}
              >
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <span
                    className="font-display text-2xl font-bold tracking-tight transition-all duration-300"
                    style={{
                      color: BRAND_BLUE,
                      transform: isActive ? "scale(1.06)" : "scale(1)",
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    {item.step}
                  </span>

                  {/* Accent Underline */}
                  <div
                    className="my-2 h-[2px] rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: BRAND_BLUE,
                      width: isActive ? "2.25rem" : "1.5rem",
                      opacity: isActive ? 1 : 0.45,
                      boxShadow: isActive ? `0 0 8px rgba(0,98,184,0.4)` : "none",
                    }}
                  />

                  {/* Step Title */}
                  <h3
                    className="text-base font-bold tracking-tight transition-colors duration-300"
                    style={{
                      color: isActive ? BRAND_BLUE : "#0f172a",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-1.5 text-xs leading-relaxed max-w-[170px] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Responsive View */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {journeySteps.map((item, index) => {
          const isRevealed = index < revealedCount;
          const isActive = activeStep === index && isRevealed;

          return (
            <div
              key={`mobile-${item.step}`}
              className="panel-card group relative flex flex-col items-center p-6 text-center transition-all duration-700 cursor-pointer"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(24px)",
                borderColor: isActive ? "rgba(0,98,184,0.4)" : undefined,
                boxShadow: isActive ? "0 4px 20px -2px rgba(0,98,184,0.15)" : undefined,
                pointerEvents: isRevealed ? "auto" : "none",
              }}
              onMouseEnter={() => handleStepHover(index)}
            >
              {/* Compact Circle Icon Badge */}
              <div className="relative flex size-20 items-center justify-center rounded-full bg-transparent">
                {/* Animated Circular Stroke */}
                <svg
                  className="pointer-events-none absolute -inset-1 size-[calc(100%+8px)] -rotate-90 z-20"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={BRAND_BLUE}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className={`transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-95 [stroke-dashoffset:0] drop-shadow-[0_0_5px_rgba(0,98,184,0.35)]"
                        : "opacity-0 [stroke-dashoffset:283]"
                    }`}
                    style={{
                      strokeDasharray: "283",
                    }}
                  />
                </svg>

                <div
                  className="relative z-10 transition-transform duration-300"
                  style={{
                    color: isActive ? BRAND_BLUE : BRAND_SILVER,
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Number and accent */}
              <div className="mt-4 flex flex-col items-center">
                <span
                  className="font-display text-2xl font-bold tracking-tight"
                  style={{ color: BRAND_BLUE }}
                >
                  {item.step}
                </span>
                <div
                  className="my-2 h-[2px] rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: BRAND_BLUE,
                    width: isActive ? "2.25rem" : "1.5rem",
                    opacity: isActive ? 1 : 0.45,
                  }}
                />
              </div>

              {/* Title & Description */}
              <h3
                className="text-base font-bold transition-colors duration-300"
                style={{ color: isActive ? BRAND_BLUE : "#0f172a" }}
              >
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
