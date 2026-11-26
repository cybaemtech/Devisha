import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

let sharedObserver: IntersectionObserver | null = null;
const revealListeners = new Map<Element, () => void>();

function getSharedObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = revealListeners.get(entry.target);
            if (cb) {
              cb();
              revealListeners.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );
  }
  return sharedObserver;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) {
      setShown(true);
      return;
    }

    revealListeners.set(el, () => setShown(true));
    observer.observe(el);

    return () => {
      revealListeners.delete(el);
      observer.unobserve(el);
    };
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) return;

    revealListeners.set(el, () => {
      setN(0);
      const start = performance.now();
      const dur = 1200;
      let lastUpdate = 0;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        if (t - lastUpdate > 30 || p === 1) {
          setN(value * (1 - Math.pow(1 - p, 3)));
          lastUpdate = t;
        }
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(el);

    return () => {
      revealListeners.delete(el);
      observer.unobserve(el);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
