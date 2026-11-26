import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on desktop devices with fine pointer (mouse)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let targetScale = 1;
    let currentScale = 1;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Fast instant transform on precision inner dot (0ms latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Detect hover over interactive elements (buttons, links, cards)
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest("input, textarea, select, [contenteditable='true']")) {
          // Hide custom cursor over form inputs so standard beam cursor is clear
          if (dotRef.current) dotRef.current.style.opacity = "0";
          if (ringRef.current) ringRef.current.style.opacity = "0";
          return;
        } else {
          if (dotRef.current) dotRef.current.style.opacity = "1";
          if (ringRef.current) ringRef.current.style.opacity = "1";
        }

        const isInteractive = target.closest(
          "button, a, .panel-card, [role='button'], input[type='submit'], .interactive-hover"
        );
        targetScale = isInteractive ? 1.6 : 1;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      targetScale = 0.8;
      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(0.2)`;
        rippleRef.current.style.opacity = "0.7";
        requestAnimationFrame(() => {
          if (rippleRef.current) {
            rippleRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(2.2)`;
            rippleRef.current.style.opacity = "0";
          }
        });
      }
    };

    const onMouseUp = () => {
      targetScale = 1;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const loop = () => {
      // Smooth fluid lerp on outer ring
      ringX = lerp(ringX, mouseX, 0.2);
      ringY = lerp(ringY, mouseY, 0.2);
      currentScale = lerp(currentScale, targetScale, 0.2);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${currentScale})`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Small Sweet Inner Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed -left-1 -top-1 z-[9999] size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,180,216,0.8)] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* Smooth Delicate Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed -left-3 -top-3 z-[9998] size-6 rounded-full border border-cyan-400/50 bg-cyan-400/10 opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* Click Sweet Ripple */}
      <div
        ref={rippleRef}
        className="pointer-events-none fixed -left-4 -top-4 z-[9999] size-8 rounded-full border border-cyan-400/80 bg-cyan-400/20 opacity-0 transition-transform duration-500 ease-out will-change-transform"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />
    </>
  );
}
