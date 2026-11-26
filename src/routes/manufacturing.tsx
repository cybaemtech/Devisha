import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, CardGrid, TagGrid, CTABand } from "@/components/site/Layout";
import { Reveal, Counter } from "@/components/site/Reveal";
import { QualityAssuranceSection } from "@/components/site/QualityAssuranceSection";
import { ProcessCapabilitiesSection } from "@/components/site/ProcessCapabilitiesSection";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Industrial Fabrication & Manufacturing Services | Devisha Industries" },
      {
        name: "description",
        content:
          "We provide industrial manufacturing with CNC cutting, bending, MIG & TIG welding, fabrication, enclosures, assembly and production support for OEM.",
      },
      {
        name: "keywords",
        content:
          "Industrial Fabrication & Manufacturing Services, CNC laser cutting, CNC bending, industrial sheet metal fabrication, MIG welding, TIG welding, drilling and tapping, fabrication drawings, stainless steel fabrication, Devisha Industries",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/manufacturing" },
      {
        property: "og:title",
        content: "Industrial Fabrication & Manufacturing Services | Devisha Industries",
      },
      {
        property: "og:description",
        content:
          "We provide industrial manufacturing with CNC cutting, bending, MIG & TIG welding, fabrication, enclosures, assembly and production support for OEM.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      {
        property: "og:image:alt",
        content: "Industrial Fabrication & Manufacturing Services | Devisha Industries",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      {
        name: "twitter:title",
        content: "Industrial Fabrication & Manufacturing Services | Devisha Industries",
      },
      {
        name: "twitter:description",
        content:
          "We provide industrial manufacturing with CNC cutting, bending, MIG & TIG welding, fabrication, enclosures, assembly and production support for OEM.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/manufacturing",
      },
    ],
  }),
  component: Manufacturing,
});

function Manufacturing() {
  return (
    <Layout>
      <PageHero
        eyebrow="Manufacturing"
        title="Engineering Supported by Manufacturing Capability"
        lead="DEVISHA supports industrial fabrication and manufacturing with engineering-led process coordination."
      />

      <ProcessCapabilitiesSection />

      <Section tone="navy" eyebrow="Facility" title="Ready for Industrial Fabrication Projects">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { v: 6000, s: " sq.ft", l: "Fabrication Shop Capacity" },
            { v: 100, s: " HP", l: "Power Capacity Reference" },
            { v: 20, s: " mm", l: "Laser Cutting Range (0.5-20)" },
            { v: 3200, s: " mm", l: "Bending Length Range" },
            { v: 160, s: " Ton", l: "Bending Force Capability" },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 70}>
              <div className="h-full rounded-lg border border-primary-foreground/12 bg-primary-foreground/5 p-6 backdrop-blur">
                <p className="font-display text-3xl font-semibold text-blueprint">
                  <Counter value={c.v} suffix={c.s} />
                </p>
                <p className="mt-2 text-sm text-primary-foreground/65">{c.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Electrical Enclosures"
        title="Engineered Protection for Critical Electrical Systems"
        lead="Requirement → Layout → Enclosure Design → Detailed Drawings → Fabrication → Assembly Support."
      >
        <TagGrid
          items={[
            "PCC Panels",
            "MCC Panels",
            "HT Panels",
            "APFC Panels",
            "PLC Panels",
            "DG Synchronizing Panels",
            "Control Cabinets",
            "Automation Cabinets",
            "Distribution Enclosures",
            "Customized Electrical Enclosures",
          ]}
        />
      </Section>

      <QualityAssuranceSection />

      <CTABand />
    </Layout>
  );
}
