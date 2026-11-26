import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, CardGrid, TagGrid, CTABand } from "@/components/site/Layout";
import { DetailedEngineeringSection } from "@/components/site/DetailedEngineeringSection";
import { ProductDevelopmentSection } from "@/components/site/ProductDevelopmentSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Engineering Design Services | Devisha Industries" },
      {
        name: "description",
        content:
          "We facilitate engineering design services for OEMs and industrial businesses, including 3D CAD, detailed engineering, product development, sheet metal design and genset engineering.",
      },
      {
        name: "keywords",
        content:
          "Engineering design services, 3D CAD, detailed engineering, product development, sheet metal design, genset engineering, Devisha Industries",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/services" },
      { property: "og:title", content: "Engineering Design Services | Devisha Industries" },
      {
        property: "og:description",
        content:
          "We facilitate engineering design services for OEMs and industrial businesses, including 3D CAD, detailed engineering, product development, sheet metal design and genset engineering.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "Devisha Industries - Engineering Design Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      { name: "twitter:title", content: "Engineering Design Services | Devisha Industries" },
      {
        name: "twitter:description",
        content:
          "We facilitate engineering design services for OEMs and industrial businesses, including 3D CAD, detailed engineering, product development, sheet metal design and genset engineering.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/services",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Services"
        title="Engineering Design Expertise from Concept to Production"
        lead="Flexible engineering services ranging from individual design assignments to complete product-development and manufacturing-support engagements."
      />
      <Section
        eyebrow="Engineering Design"
        title="Turning Requirements into Production-Ready Engineering"
        lead="We transform concepts, sketches, specifications and existing designs into structured engineering documentation ready for development and manufacturing."
      >
        <TagGrid
          items={[
            "2D Engineering Drawings",
            "3D CAD Modelling",
            "General Arrangement Drawings",
            "Fabrication Drawings",
            "Assembly Drawings",
            "Component Drawings",
            "Manufacturing Documentation",
            "Bill of Material Support",
            "Design Modifications",
            "Engineering Documentation",
            "Design for Manufacturability",
            "Design Optimization",
          ]}
        />
      </Section>

      <DetailedEngineeringSection />

      <ProductDevelopmentSection />

      <Section
        tone="navy"
        eyebrow="Sheet-Metal Design & Engineering"
        title="Designed for Manufacturing"
        lead="We consider not only how a component looks in CAD, but how it will be cut, bent, welded, assembled and produced efficiently."
      >
        <TagGrid
          tone="navy"
          items={[
            "Industrial Cabinets",
            "Equipment Enclosures",
            "Electrical Cabinets",
            "Machine Covers",
            "Sheet-Metal Components",
            "Control Panels",
            "Fabricated Assemblies",
            "Bus Duct Structures",
            "Equipment Frames",
            "Generator Canopies",
            "Industrial Containers",
            "Custom Sheet-Metal Products",
          ]}
        />
        <div className="mt-8">
          <TagGrid
            tone="navy"
            items={[
              "3D Sheet-Metal Modelling",
              "Flat Pattern Development",
              "Bend Consideration",
              "Fabrication Drawings",
              "Assembly Detailing",
              "Manufacturing Feasibility Review",
              "Material Optimization",
              "Production Documentation",
            ]}
          />
        </div>
      </Section>

      <Section
        eyebrow="Genset Engineering"
        title="Engineering Support for Generator Systems"
        lead="Mechanical and sheet-metal design activities for generator manufacturers, OEMs and engineering companies - as complete project design or a dedicated genset design resource."
      >
        <TagGrid
          items={[
            "Generator Canopy Design",
            "Acoustic Enclosure Design Support",
            "DG Panel Enclosures",
            "Generator Container Design",
            "Sheet-Metal Structure Design",
            "Equipment Layout Development",
            "Fabrication Drawings",
            "Assembly Drawings",
            "3D CAD Modelling",
            "Production Documentation",
            "Design Modification",
            "Value Engineering",
          ]}
        />
      </Section>

      <CTABand />
    </Layout>
  );
}
