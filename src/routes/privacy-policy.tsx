import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Lock, Eye, FileText, Database, Server, RefreshCw, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Devisha Industries" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Devisha Industries. Learn how we handle your personal data, CAD files, engineering drawings, and technical RFQs with utmost confidentiality.",
      },
      {
        name: "keywords",
        content:
          "Privacy Policy, Devisha Industries, data protection, confidentiality, CAD drawing protection, engineering NDA, Pune",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/privacy-policy" },
      {
        property: "og:title",
        content: "Privacy Policy | Devisha Industries",
      },
      {
        property: "og:description",
        content:
          "Read the Privacy Policy of Devisha Industries. Learn how we handle your personal data, CAD files, engineering drawings, and technical RFQs with utmost confidentiality.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "Devisha Industries - Privacy Policy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      {
        name: "twitter:title",
        content: "Privacy Policy | Devisha Industries",
      },
      {
        name: "twitter:description",
        content:
          "Read the Privacy Policy of Devisha Industries. Learn how we handle your personal data, CAD files, engineering drawings, and technical RFQs with utmost confidentiality.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/privacy-policy",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const lastUpdated = "October 2026";

  const policySections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            When you interact with DEVISHA Industries through our website, contact forms, or direct communications, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Direct Contact Information:</strong> Name, professional email address, phone number, company name, and job title.
            </li>
            <li>
              <strong>Technical Project Details:</strong> RFQs (Request for Quotations), 2D/3D CAD drawings (STEP, IGES, DXF, DWG, PDF), bill of materials (BOM), engineering specifications, and project timeline requirements.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> IP address, browser type, operating system, referring URLs, and website usage statistics collected via standard analytics tools to improve site performance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "2. Intellectual Property & Confidentiality (NDAs)",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            As an engineering design and manufacturing solutions provider, we recognize the critical commercial value of your proprietary product designs and engineering drawings.
          </p>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-slate-800">
            <p className="font-semibold text-primary mb-1">Our Confidentiality Commitment:</p>
            <p className="text-sm">
              All CAD models, manufacturing specifications, tolerances, and proprietary drawings submitted to DEVISHA are treated with the highest degree of confidentiality. We are always willing to execute mutual or unilateral Non-Disclosure Agreements (NDAs) prior to project evaluation.
            </p>
          </div>
          <p>
            Your technical data will never be shared, repurposed, or displayed publicly without your explicit written authorization.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>We use the information collected solely for legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Evaluating engineering feasibility and preparing detailed cost estimates and quotations.</li>
            <li>Fulfilling contracted engineering design, prototyping, fabrication, and manufacturing engagements.</li>
            <li>Communicating regarding RFQ submissions, technical queries, and milestone deliverables.</li>
            <li>Responding to customer support, career, and vendor partnership inquiries.</li>
            <li>Maintaining operational security, preventing fraudulent activity, and complying with legal obligations.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: Server,
      title: "4. Information Sharing & Third Parties",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            <strong>We do not sell, rent, or trade your personal or business information to third-party marketers or data brokers.</strong>
          </p>
          <p>We may share information only in the following limited situations:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Trusted Service Providers:</strong> Secure infrastructure providers (e.g., website hosting, encrypted email servers) who adhere to strict data security standards.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by applicable Indian or international laws, regulatory authorities, or court orders.
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: Database,
      title: "5. Data Security & Storage",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            We implement robust administrative, technical, and physical security measures to safeguard your information against unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            Access to client project files and CAD databases is restricted exclusively to authorized engineering and production personnel who need the information to perform their assigned work.
          </p>
        </div>
      ),
    },
    {
      icon: RefreshCw,
      title: "6. Cookies & Web Tracking",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            Our website uses standard session cookies and analytical tools (such as Google Tag Manager) to analyze user engagement, ensure navigation functionality, and optimize user experience.
          </p>
          <p>
            You can configure your browser to block or alert you about cookies; however, some sections of the website may not function correctly without essential cookies.
          </p>
        </div>
      ),
    },
    {
      icon: ShieldCheck,
      title: "7. Your Rights",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request the deletion of your contact data from our active records, subject to retention obligations required by law or active contracts.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Legal & Transparency"
        title="Privacy Policy"
        lead="Our commitment to safeguarding your privacy, CAD drawings, technical project data, and personal information."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  Effective Version
                </span>
                <p className="mt-2 text-xs text-slate-500">
                  Last updated: <span className="font-medium text-slate-700">{lastUpdated}</span>
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
              >
                <Mail className="size-3.5 text-primary" />
                Contact Privacy Officer
              </Link>
            </div>
          </Reveal>

          <div className="space-y-8">
            {policySections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Reveal key={idx}>
                  <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        {section.title}
                      </h2>
                    </div>
                    {section.content}
                  </div>
                </Reveal>
              );
            })}

            {/* Contact Card */}
            <Reveal>
              <div className="rounded-xl border border-primary/20 bg-slate-900 p-8 text-white shadow-md">
                <h2 className="text-xl font-semibold text-white">8. Privacy Inquiries & Contact</h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  If you have questions, feedback, or concerns regarding this Privacy Policy or wish to request an NDA before sending your drawings, please contact us directly:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Location</p>
                      <p className="text-sm font-medium text-white">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Email</p>
                      <a
                        href="mailto:info@devishaindustries.com"
                        className="text-sm font-medium text-white hover:text-cyan-300 transition-colors underline underline-offset-2"
                      >
                        info@devishaindustries.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Phone</p>
                      <a
                        href="tel:+918888159134"
                        className="text-sm font-medium text-white hover:text-cyan-300 transition-colors underline underline-offset-2"
                      >
                        +91 88881 59134
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
