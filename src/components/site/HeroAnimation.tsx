import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-engineering.mp4";
import { cn } from "@/lib/utils";

const stages = [
  "2D Drawing",
  "3D CAD Model",
  "Flat Pattern",
  "Fabricated Part",
  "Finished Product",
];

export function HeroAnimation({ className }: { className?: string } = {}) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % stages.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary-foreground/15 bg-navy-deep shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      <video
        className="absolute inset-0 size-full object-cover opacity-80"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label="Animated engineering sequence from CAD drawing to finished industrial enclosure"
      />
      <div className="blueprint-grid-dark absolute inset-0 opacity-70" aria-hidden />

      {/* CAD dimension overlay */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden
      >
        <rect
          x="90"
          y="70"
          width="220"
          height="160"
          stroke="oklch(0.7 0.16 245)"
          strokeWidth="1.2"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-draw"
          opacity="0.85"
        />
        <line x1="90" y1="252" x2="310" y2="252" stroke="oklch(0.7 0.16 245)" strokeWidth="0.7" opacity="0.7" />
        <line x1="90" y1="246" x2="90" y2="258" stroke="oklch(0.7 0.16 245)" strokeWidth="0.7" opacity="0.7" />
        <line x1="310" y1="246" x2="310" y2="258" stroke="oklch(0.7 0.16 245)" strokeWidth="0.7" opacity="0.7" />
        <text x="185" y="266" fill="oklch(0.7 0.16 245)" fontSize="9" fontFamily="monospace">
          1200 mm
        </text>
        <line x1="66" y1="70" x2="66" y2="230" stroke="oklch(0.7 0.16 245)" strokeWidth="0.7" opacity="0.7" />
        <text
          x="60"
          y="155"
          fill="oklch(0.7 0.16 245)"
          fontSize="9"
          fontFamily="monospace"
          transform="rotate(-90 60 155)"
        >
          800 mm
        </text>
      </svg>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 overflow-hidden bg-navy-deep/70 px-4 py-3 backdrop-blur">
        {stages.map((s, i) => (
          <span
            key={s}
            className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-500 md:text-xs ${
              i === stage ? "text-blueprint" : "text-primary-foreground/35"
            }`}
          >
            {s}
            
          </span>
        ))}
      </div>
    </div>
  );
}
