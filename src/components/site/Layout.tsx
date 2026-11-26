import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { FileUp } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CustomCursor } from "./CustomCursor";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <Button asChild variant="steel" size="sm" className="shadow-lg">
          <Link to="/contact">
            <FileUp /> Upload Drawing / RFQ
          </Link>
        </Button>
        <Button asChild variant="hero" className="shadow-lg">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="surface-navy relative overflow-hidden pt-36 pb-20 md:pt-40">
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueprint">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-primary-foreground md:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/70 md:text-lg">{lead}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  tone?: "light" | "muted" | "navy";
}) {
  const toneClass =
    tone === "navy"
      ? "surface-navy"
      : tone === "muted"
        ? "bg-secondary/60"
        : "bg-background";
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${toneClass}`}>
      {tone === "navy" && <div className="blueprint-grid-dark absolute inset-0" aria-hidden />}
      <div className="relative mx-auto max-w-7xl px-5">
        {(eyebrow || title) && (
          <Reveal className="max-w-3xl">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`laser-heading mt-3 text-3xl font-semibold md:text-4xl ${
                  tone === "navy" ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {title}
              </h2>
            )}
            {lead && (
              <p
                className={`mt-4 text-base leading-relaxed ${
                  tone === "navy" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {lead}
              </p>
            )}
          </Reveal>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function TagGrid({ items, tone = "light" }: { items: string[]; tone?: "light" | "navy" }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 25}>
          <span
            className={`inline-flex rounded-full border px-4 py-1.5 text-sm transition-colors ${
              tone === "navy"
                ? "border-primary-foreground/20 text-primary-foreground/80 hover:border-blueprint hover:text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {item}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <article className="panel-card h-full p-6">
            <div className="mb-4 h-px w-10 bg-[image:var(--gradient-blue)]" />
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            {item.body && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="surface-navy relative overflow-hidden py-20">
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-primary-foreground md:text-4xl">
            Have a Product to Design? Need Manufacturing Support?
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            Tell us what you are working on. Our team can review your requirement and recommend the
            right engagement model.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild variant="onNavy" size="lg">
              <Link to="/resources">Request Engineering Resources</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
