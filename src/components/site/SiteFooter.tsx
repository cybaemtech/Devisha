import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/devisha-logo.png";

import { SocialLinks } from "@/components/site/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="surface-navy relative overflow-hidden">
      <div className="blueprint-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="DEVISHA logo"
            width="320"
            height="96"
            loading="lazy"
            decoding="async"
            className="h-20 md:h-24 w-auto object-contain"
          />
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Engineering Ideas into Manufacturing Reality. Engineering • Design • Product
            Development • Manufacturing.
          </p>
          <p className="mt-4 font-display text-lg text-metal">"Innovation in Every Fold"</p>
          <div className="mt-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
              Follow & Connect
            </p>
            <SocialLinks variant="dark" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {[
              { l: "About", t: "/about" },
              { l: "Engineering Services", t: "/services" },
              { l: "Manufacturing", t: "/manufacturing" },
              { l: "Engineering Resources", t: "/resources" },
              { l: "Contact", t: "/contact" },
              { l: "Privacy Policy", t: "/privacy-policy" },
            ].map((i) => (
              <li key={i.t}>
                <Link to={i.t} className="transition-colors hover:text-primary-foreground">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-cyan-400" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-cyan-400" />
              <a
                href="mailto:info@devishaindustries.com"
                className="transition-colors hover:text-primary-foreground hover:underline"
              >
                info@devishaindustries.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-cyan-400" />
              <a
                href="tel:+918888159134"
                className="transition-colors hover:text-primary-foreground hover:underline"
              >
                +91 88881 59134
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} DEVISHA. Engineering • Design • Manufacturing.
        <span className="mx-2">|</span>
        <Link
          to="/privacy-policy"
          className="transition-colors hover:text-primary-foreground underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        <span className="mx-2">|</span>
        Designed By{" "}
        <a
          href="https://cybaemtech.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary-foreground"
        >
          Cybaem Tech
        </a>
      </div>
    </footer>
  );
}
