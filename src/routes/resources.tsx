import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Layout, PageHero, Section, CardGrid, TagGrid, CTABand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { DomainTalentSection } from "@/components/site/DomainTalentSection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Engineering Resource Provision | Hire Engineers | DEVISHA" },
      {
        name: "description",
        content:
          "Hire mechanical, sheet-metal, electrical panel, genset, CAD, NPD, production, quality and vendor development engineers - dedicated, project-based, remote, onsite or hybrid.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/resources" },
      { property: "og:title", content: "Engineering Resource Provision | DEVISHA" },
      {
        property: "og:description",
        content:
          "Extend your engineering team without increasing permanent overhead. Dedicated CAD, NPD, and manufacturing engineers from DEVISHA.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "DEVISHA - Engineering Resource Provision" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      { name: "twitter:title", content: "Engineering Resource Provision | DEVISHA" },
      {
        name: "twitter:description",
        content:
          "Extend your engineering team without increasing permanent overhead. Dedicated CAD, NPD, and manufacturing engineers from DEVISHA.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/resources",
      },
    ],
  }),
  component: Resources,
});

function Resources() {
  return (
    <Layout>
      <PageHero
        eyebrow="Engineering Resource Provision"
        title="Skilled Engineering Resources. Flexible Deployment."
        lead="Extend your engineering team without increasing permanent overhead. Resources work according to your defined processes, deliverables and project requirements."
      />

      {/* Redesigned Domain-Relevant Engineering Talent Section (5x2 Matrix Layout) */}
      <DomainTalentSection />

      <Section
        tone="navy"
        eyebrow="Engagement Models"
        title="Choose the Model That Fits Your Requirement"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Dedicated Resource", "A dedicated engineer assigned to your organization for an agreed period."],
            ["Project-Based Resource", "Resources deployed for a specific project, product or engineering assignment."],
            ["Short-Term Support", "Temporary additional capacity when your team needs it."],
            ["Long-Term Support", "Continuous design, development and production activities."],
            ["Remote Engineering", "Support delivered remotely using your communication and document processes."],
            ["On-Site Engineering", "Resources deployed at your facility for close production coordination."],
            ["Hybrid Support", "Remote design support combined with planned onsite coordination."],
            ["Managed Team", "DEVISHA provides technical coordination around deployed resources."],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="h-full rounded-lg border border-primary-foreground/12 bg-primary-foreground/5 p-6 backdrop-blur transition-colors hover:border-blueprint/60">
                <h3 className="text-base font-semibold text-primary-foreground">{t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/65">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Request a Resource</Link>
          </Button>
          <Button asChild variant="onNavy" size="lg">
            <Link to="/contact">Share Job Description</Link>
          </Button>
        </Reveal>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why DEVISHA"
        title="More Than Manpower - Engineering Understanding"
      >
        <CardGrid
          items={[
            { title: "Domain-Relevant Resources", body: "Aligned with engineering, design and manufacturing environments." },
            { title: "Flexible Capacity", body: "Increase or reduce engineering capacity based on project requirements." },
            { title: "Faster Deployment", body: "Avoid lengthy permanent recruitment for project-specific requirements." },
            { title: "Technical Coordination", body: "Management and technical coordination around deployed resources." },
            { title: "Project-Oriented Approach", body: "Resources remain focused on defined engineering deliverables." },
            { title: "Multiple Engagement Models", body: "Project-based, dedicated, remote, onsite or hybrid support." },
          ]}
        />
        <div className="mt-10">
          <TagGrid items={["Pune-Based Team", "OEM Experience", "Manufacturing-Aware Design", "NDA-Friendly Engagements"]} />
        </div>
      </Section>

      <CTABand />
    </Layout>
  );
}
