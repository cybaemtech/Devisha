import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, CardGrid, TagGrid, CTABand } from "@/components/site/Layout";
import { MissionVisionValuesSection } from "@/components/site/MissionVisionValuesSection";
import { WorkWithDevishaSection } from "@/components/site/WorkWithDevishaSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Engineering Design & Manufacturing Company | Devisha Industries" },
      {
        name: "description",
        content:
          "We are Pune-based engineering design and manufacturing company supporting product development, vendor development and production PAN India",
      },
      {
        name: "keywords",
        content:
          "Engineering Design and Manufacturing, engineering design company, manufacturing company Pune, product development, vendor development, production PAN India, Devisha Industries",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/about" },
      {
        property: "og:title",
        content: "Engineering Design & Manufacturing Company | Devisha Industries",
      },
      {
        property: "og:description",
        content:
          "We are Pune-based engineering design and manufacturing company supporting product development, vendor development and production PAN India",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "Devisha Industries - Engineering Design & Manufacturing Company" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      {
        name: "twitter:title",
        content: "Engineering Design & Manufacturing Company | Devisha Industries",
      },
      {
        name: "twitter:description",
        content:
          "We are Pune-based engineering design and manufacturing company supporting product development, vendor development and production PAN India",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/about",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About DEVISHA"
        title="Engineering Design and Manufacturing Company"
        lead="An engineering-led design and manufacturing solutions company supporting industrial customers from initial concept through production readiness."
      />

      <Section
        title="Practical engineering, manufacturing understanding"
        lead="Our approach combines practical engineering knowledge with manufacturing understanding, helping customers create products that are technically sound, cost-effective and easier to manufacture."
      >
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
      </Section>

      <MissionVisionValuesSection />

      <Section
        tone="navy"
        eyebrow="Vendor Development & Plant Consultancy"
        title="Strengthening the Manufacturing Ecosystem"
        lead="One window between Customer → Engineering → Vendor → Manufacturing → Quality → Delivery."
      >
        <TagGrid
          tone="navy"
          items={[
            "Vendor Identification",
            "Vendor Development",
            "Technical Vendor Evaluation",
            "Drawing & Requirement Coordination",
            "Manufacturing Process Planning",
            "Production Planning",
            "Quality Coordination",
            "Vendor Follow-Up",
            "Delivery Coordination",
            "Cost Optimization",
            "Technical Problem Resolution",
            "Plant Production Support",
          ]}
        />
      </Section>

      <WorkWithDevishaSection />

      <CTABand />
    </Layout>
  );
}
