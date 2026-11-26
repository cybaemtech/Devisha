import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CircuitBoard,
  Cog,
  Factory,
  Layers,
  PencilRuler,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, Section, CardGrid, TagGrid, CTABand } from "@/components/site/Layout";
import { Reveal, Counter } from "@/components/site/Reveal";
const HeroAnimation = lazy(() =>
  import("@/components/site/HeroAnimation").then((m) => ({ default: m.HeroAnimation }))
);
const EngineeringServicesSection = lazy(() =>
  import("@/components/site/EngineeringServicesSection").then((m) => ({ default: m.EngineeringServicesSection }))
);
const EngineeringWorkflowSection = lazy(() =>
  import("@/components/site/EngineeringWorkflowSection").then((m) => ({ default: m.EngineeringWorkflowSection }))
);
const EngineeringJourney = lazy(() =>
  import("@/components/site/EngineeringJourney").then((m) => ({ default: m.EngineeringJourney }))
);
const IndustriesSection = lazy(() =>
  import("@/components/site/IndustriesSection").then((m) => ({ default: m.IndustriesSection }))
);
const WhyDevishaSection = lazy(() =>
  import("@/components/site/WhyDevishaSection").then((m) => ({ default: m.WhyDevishaSection }))
);
const QualitySection = lazy(() =>
  import("@/components/site/QualitySection").then((m) => ({ default: m.QualitySection }))
);
import logo from "@/assets/devisha-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Industrial Engineering Design & Manufacturing Services | Devisha Industries" },
      {
        name: "description",
        content:
          "We deliver industrial engineering design, product development, sheet metal engineering and manufacturing support for OEMs from concept to production.",
      },
      {
        name: "keywords",
        content:
          "Industrial Engineering Services, industrial engineering design, product development, sheet metal engineering, manufacturing support, OEMs, Devisha Industries",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/" },
      {
        property: "og:title",
        content: "Industrial Engineering Design & Manufacturing Services | Devisha Industries",
      },
      {
        property: "og:description",
        content:
          "We deliver industrial engineering design, product development, sheet metal engineering and manufacturing support for OEMs from concept to production.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "Devisha Industries - Industrial Engineering Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      {
        name: "twitter:title",
        content: "Industrial Engineering Design & Manufacturing Services | Devisha Industries",
      },
      {
        name: "twitter:description",
        content:
          "We deliver industrial engineering design, product development, sheet metal engineering and manufacturing support for OEMs from concept to production.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  "Engineering Design",
  "Product Development",
  "Detailed Design",
  "Sheet-Metal Engineering",
  "Electrical Enclosures",
  "Manufacturing Support",
  "Engineering Resource Provision",
];

const services = [
  {
    icon: PencilRuler,
    title: "Engineering Design",
    body: "2D drawings, 3D CAD modelling, GA and fabrication drawings, BOM support, DFM and design optimization.",
  },
  {
    icon: Layers,
    title: "Detailed Engineering",
    body: "Production-ready packages: sheet-metal detailing, tolerance review, exploded views, DFA and value engineering.",
  },
  {
    icon: Boxes,
    title: "Product Development & NPD",
    body: "Requirement study, concept development, prototype coordination, validation and production readiness.",
  },
  {
    icon: Cog,
    title: "Sheet-Metal Engineering",
    body: "Cabinets, enclosures, machine covers, frames and canopies designed for cutting, bending, welding and assembly.",
  },
  {
    icon: CircuitBoard,
    title: "Electrical Enclosures",
    body: "PCC, MCC, HT, APFC, PLC and DG synchronizing panel enclosures engineered around your equipment layout.",
  },
  {
    icon: Factory,
    title: "CNC & Manufacturing",
    body: "Laser cutting, press-brake bending, MIG/TIG welding, drilling, tapping, fastener insertion and assembly.",
  },
  {
    icon: Zap,
    title: "Genset Engineering",
    body: "Generator canopies, acoustic enclosures, containers, layouts and complete fabrication documentation.",
  },
  {
    icon: Users,
    title: "Engineering Resources",
    body: "Dedicated, project-based, remote, onsite or hybrid engineers embedded into your engineering team.",
  },
];

const workflow = [
  ["01", "Requirement Study", "Application, specifications, materials, tolerances, quantities and delivery."],
  ["02", "Engineering Design", "Concept, 3D models, detailed drawings, GA layouts and documentation."],
  ["03", "Prototype & Validation", "Prototype manufacturing, fitment checks and engineering modifications."],
  ["04", "Production Planning", "Manufacturing route, vendors, quality checkpoints and delivery."],
  ["05", "Manufacturing", "Cutting, bending, welding, machining and assembly coordination."],
  ["06", "Quality Verification", "Dimensional, fitment and visual checks at defined stages."],
  ["07", "Production & Delivery", "Manufacturing coordination through final production and dispatch."],
];


function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="surface-navy relative overflow-hidden pt-36 pb-20 md:pt-40 md:pb-28">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div
          className="absolute -right-32 top-10 size-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-blue)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blueprint">
              Innovation in Every Fold
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-primary-foreground md:text-6xl">
              Engineering Precision.{" "}
              <span className="text-metal">Manufacturing Intelligence.</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-primary-foreground/90 md:text-xl">
              One Engineering Partner from Concept to Production
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 md:text-base">
              We provide engineering design, product development, sheet metal engineering and
              manufacturing support for OEMs and industrial businesses. From concepts and CAD
              models to production-ready drawings, fabrication and manufacturing coordination, we
              help turn engineering requirements into manufacturable products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Discuss Your Engineering Requirement <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="lg">
                <Link to="/resources">Hire Engineering Resources</Link>
              </Button>
            </div>
          </div>
          {isDesktop && (
            <Reveal delay={200} className="hidden lg:block">
              <Suspense fallback={<div className="aspect-[4/3] w-full rounded-xl bg-navy-deep border border-primary-foreground/15" />}>
                <HeroAnimation />
              </Suspense>
            </Reveal>
          )}
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <div className="relative overflow-hidden border-y border-border bg-card py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...highlights, ...highlights].map((h, i) => (
            <span
              key={`${h}-${i}`}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About DEVISHA"
        title="Innovation in Every Fold
"
        lead="DEVISHA Industries is an engineering design and manufacturing services company in Pune, supporting OEMs and industrial businesses with product development, detailed engineering, sheet metal design and manufacturing coordination."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Mission",
              body: "To deliver dependable engineering, design and manufacturing support that improves product quality, manufacturability and execution speed.",
            },
            {
              title: "Vision",
              body: "To become a trusted engineering partner recognized for practical innovation, engineering excellence, quality and long-term customer relationships.",
            },
            {
              title: "Values",
              body: "Quality • Fair Pricing • On-Time Delivery • Craftsmanship • Safety • Technical Ownership • Customer Satisfaction",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="panel-card h-full p-7">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <TagGrid
            items={[
              "Product Engineering",
              "Detailed Engineering Design",
              "Sheet-Metal Engineering",
              "Electrical & Industrial Enclosures",
              "Product Development",
              "CNC & Fabrication Support",
              "Vendor Development",
              "Production Coordination",
              "Engineering Resource Provision",
            ]}
          />
        </div>
      </Section>

      {/* SERVICES */}
      <Suspense fallback={null}>
        <EngineeringServicesSection />
      </Suspense>

      {/* WORKFLOW */}
      <Suspense fallback={null}>
        <EngineeringWorkflowSection />
      </Suspense>

      {/* CAPACITY COUNTERS */}
      <Section
        eyebrow="Facility & Process Capability"
        title="Ready for Industrial Fabrication Projects"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { v: 6000, s: " sq.ft", l: "Fabrication Shop Capacity" },
            { v: 100, s: " HP", l: "Power Capacity Reference" },
            { v: 20, s: " mm", l: "Laser Cutting Range (0.5-20)" },
            { v: 3200, s: " mm", l: "Bending Length Range" },
            { v: 160, s: " Ton", l: "Bending Force Capability" },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 70}>
              <div className="panel-card h-full p-6">
                <p className="font-display text-3xl font-semibold text-primary">
                  <Counter value={c.v} suffix={c.s} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{c.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <TagGrid
            items={[
              "Profile Cutting",
              "CNC Laser Cutting",
              "CNC Press Brake Bending",
              "MIG Welding",
              "TIG Welding",
              "Drilling",
              "Tapping",
              "Fastener Insertion",
              "Assembly Support",
            ]}
          />
        </div>
      </Section>

      {/* ENGINEERING JOURNEY */}
      <Section
        eyebrow="Engineering Journey"
        title="One Partner. From Engineering Idea to Manufacturing Reality."
      >
        <Suspense fallback={null}>
          <EngineeringJourney />
        </Suspense>
      </Section>

      {/* INDUSTRIES */}
      <Suspense fallback={null}>
        <IndustriesSection />
      </Suspense>

      {/* WHY DEVISHA */}
      <Suspense fallback={null}>
        <WhyDevishaSection />
      </Suspense>

      {/* FOUNDER */}
      <Section tone="navy" eyebrow="Leadership" title="Engineering Experience Behind DEVISHA">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-lg border border-primary-foreground/12 bg-primary-foreground/5 p-8 backdrop-blur">
              <h3 className="font-display text-2xl text-primary-foreground">
                Pravin Shashikant Deolalikar
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-blueprint">
                Founder - DEVISHA
              </p>
              <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
                DEVISHA is led by hands-on engineering and manufacturing experience covering product
                design, product development, sheet-metal fabrication, CNC operations, vendor
                development, production and plant leadership. With{" "}
                <span className="font-semibold text-primary-foreground">
                  <Counter value={16} suffix="+" /> years
                </span>{" "}
                of industry experience, the leadership approach combines engineering knowledge with
                practical manufacturing understanding.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <TagGrid
              tone="navy"
              items={[
                "Plant Operations",
                "Product Development & NPD",
                "Electrical Panel Systems",
                "Sheet-Metal Fabrication",
                "CNC Programming",
                "Vendor Development",
                "Project Execution",
                "Team Leadership",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      {/* QUALITY */}
      <Suspense fallback={null}>
        <QualitySection />
      </Suspense>

      {/* FINAL MESSAGE */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <img src={logo} alt="DEVISHA logo" className="mx-auto h-20 w-auto animate-float-slow" />
            <h2 className="mt-8 text-3xl font-semibold md:text-4xl">
              Engineering Is More Than Creating a Drawing.
            </h2>
            <p className="mt-5 text-muted-foreground">
              It is about understanding how a product will be manufactured, assembled, optimized and
              delivered. At DEVISHA, we combine engineering design, manufacturing knowledge and
              flexible technical resources to help industrial businesses move confidently from idea
              to production.
            </p>
            <p className="mt-6 font-display text-xl text-primary">
              Engineering Ideas into Manufacturing Reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="steel" size="lg">
                <Link to="/resources">
                  <Wrench /> Request Engineering Resources
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
      <div className="sr-only">
        <ShieldCheck />
      </div>
    </Layout>
  );
}
