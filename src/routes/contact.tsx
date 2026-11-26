import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Mail, Building2, Navigation, Clock, ExternalLink, Compass } from "lucide-react";
import { Layout, PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DEVISHA | Let's Engineer Your Next Product" },
      {
        name: "description",
        content:
          "Share your drawing, RFQ or job description with DEVISHA, Pune. Engineering, manufacturing, resource provision and vendor partnership enquiries welcome.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devishaindustries.com/contact" },
      { property: "og:title", content: "Contact DEVISHA | Let's Engineer Your Next Product" },
      {
        property: "og:description",
        content:
          "Share your drawing, RFQ or job description with DEVISHA, Pune. Engineering, manufacturing, and vendor partnership enquiries welcome.",
      },
      { property: "og:image", content: "https://devishaindustries.com/engineering-concept.png" },
      { property: "og:image:alt", content: "Contact DEVISHA Industries" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devisha_01" },
      { name: "twitter:title", content: "Contact DEVISHA | Let's Engineer Your Next Product" },
      {
        name: "twitter:description",
        content:
          "Share your drawing, RFQ or job description with DEVISHA, Pune. Engineering, manufacturing, and vendor partnership enquiries welcome.",
      },
      { name: "twitter:image", content: "https://devishaindustries.com/engineering-concept.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://devishaindustries.com/contact",
      },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Engineering Design",
  "Detailed Engineering",
  "Product Development",
  "Sheet-Metal Design",
  "Electrical Enclosure Design",
  "Genset / Generator Design",
  "Manufacturing Support",
  "Vendor Development",
  "Engineering Resource Provision",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    resource: "",
    start: "",
    duration: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's Engineer Your Next Product"
        lead="Whether you require a single drawing, detailed product engineering, sheet-metal design, manufacturing support or an extended engineering team, DEVISHA is ready to discuss your requirement."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              className="panel-card space-y-5 p-7"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);

                const data = new FormData();
                Object.entries(formData).forEach(([key, val]) => {
                  data.append(key, val);
                });
                if (file) {
                  data.append("file", file);
                }

                try {
                  const response = await fetch("/api/contact.php", {
                    method: "POST",
                    body: data,
                  });

                  const jsonResult: { success?: boolean; error?: string; details?: string; userMailSent?: boolean; userMailError?: string } | null = await response.json().catch(() => null);

                  if (response.ok && jsonResult && jsonResult.success) {
                    if (jsonResult.userMailSent === false) {
                      toast.warning("Requirement received", {
                        description: `Form submitted. Note: Auto-reply to your email failed (${jsonResult.userMailError || 'SMTP error'}).`,
                      });
                    } else {
                      toast.success("Requirement received", {
                        description: "A confirmation thank-you email from noreply@devishaindustries.com has been sent to your inbox.",
                      });
                    }
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      service: "",
                      description: "",
                      resource: "",
                      start: "",
                      duration: "",
                    });
                    setFile(null);
                  } else {
                    const errorMsg = jsonResult?.error || jsonResult?.details || "Submission failed. Please contact info@devishaindustries.com directly.";
                    toast.error("Submission failed", {
                      description: errorMsg,
                    });
                  }
                } catch (error) {
                  toast.error("An error occurred", {
                    description: "Could not connect to the server.",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus:ring-1 focus:ring-ring text-foreground"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us what you are working on"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="resource">Required Resource Type</Label>
                  <Input
                    id="resource"
                    name="resource"
                    value={formData.resource}
                    onChange={handleChange}
                    placeholder="e.g. Sheet-metal engineer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start">Expected Start Date</Label>
                  <Input
                    id="start"
                    name="start"
                    type="date"
                    value={formData.start}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Project Duration</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 3 months"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload Drawing / RFQ / JD</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Requirement"}
              </Button>
            </form>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={80}>
              <div className="panel-card overflow-hidden p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">Engineering HQ</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Open Today
                  </span>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  <div className="flex gap-2.5 rounded-lg border border-border/50 bg-muted/40 p-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground text-xs">Location</p>
                      <p className="text-xs">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 rounded-lg border border-border/50 bg-muted/40 p-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground text-xs">Direct Email</p>
                      <a href="mailto:info@devishaindustries.com" className="text-xs hover:text-primary hover:underline">
                        info@devishaindustries.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2.5 rounded-lg border border-border/50 bg-muted/40 p-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground text-xs">Business Hours</p>
                      <p className="text-xs">Mon - Sat: 9:00 AM - 6:30 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 rounded-lg border border-border/50 bg-muted/40 p-3">
                    <Compass className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground text-xs">Coordinates</p>
                      <p className="font-mono text-xs">18.5204° N, 73.8567° E</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Interactive Live Google Maps Container */}
                <div className="group relative mt-5 overflow-hidden rounded-xl border border-border bg-slate-950 shadow-md">
                  {/* Real Interactive Google Maps Embed */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <iframe
                      title="DEVISHA Industries HQ Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156647!2d73.7929268340156!3d18.524545043187216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9dce3e32!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full grayscale-[0.3] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
                    />

                    {/* Top Overlay Badge */}
                    <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-md border border-slate-700/80 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-200 shadow backdrop-blur-md">
                      <div className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-primary" />
                      </div>
                      <span className="font-medium">Pune Engineering Hub</span>
                    </div>
                  </div>

                  {/* Bottom Navigation Control Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-slate-900/95 p-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="size-3.5 text-primary" />
                      <span>Pune, Maharashtra, India</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.google.com/maps/dir//Pune,+Maharashtra,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded border border-border bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                      >
                        <Navigation className="size-3 text-primary" /> Directions
                      </a>
                      <a
                        href="https://maps.google.com/?q=Pune,+Maharashtra,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow transition-all hover:bg-primary/90"
                      >
                        <ExternalLink className="size-3" /> Full Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="panel-card p-7">
                <h3 className="font-display text-xl">Enquiry Types</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Engineering & Design Enquiry",
                    "Manufacturing Enquiry",
                    "Resource Provision Enquiry",
                    "Vendor / Partnership Enquiry",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Connect on Social Media
                  </h4>
                  <div className="mt-3">
                    <SocialLinks variant="light" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
