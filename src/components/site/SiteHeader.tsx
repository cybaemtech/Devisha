import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/devisha-logo.png";
import { SocialLinks } from "@/components/site/SocialLinks";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Engineering Services", to: "/services" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 text-slate-900 shadow-md backdrop-blur-xl"
          : "bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-24 md:h-28 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DEVISHA engineering design manufacturing logo"
            width="380"
            height="112"
            fetchPriority="high"
            className="h-20 sm:h-24 md:h-24 lg:h-28 w-auto max-w-[280px] md:max-w-[380px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-slate-700 hover:text-primary"
                  : "text-white/90 hover:text-white",
              )}
              activeProps={{
                className: scrolled
                  ? "!text-primary font-semibold underline underline-offset-8 decoration-2 decoration-primary"
                  : "!text-white font-semibold underline underline-offset-8 decoration-2 decoration-blueprint",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="steel" size="sm">
            <Link to="/resources">Hire an Engineer</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={cn(
            "rounded-md border p-2 lg:hidden transition-colors",
            scrolled
              ? "border-slate-300 text-slate-800 hover:bg-slate-100"
              : "border-white/20 text-white hover:bg-white/10",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div
          className={cn(
            "border-t px-5 py-4 backdrop-blur-xl lg:hidden transition-all",
            scrolled
              ? "border-slate-200 bg-white/95 text-slate-900 shadow-lg"
              : "border-white/10 bg-[#091527]/95 text-white",
          )}
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                )}
                activeProps={{
                  className: scrolled
                    ? "!text-primary !bg-slate-100 font-semibold"
                    : "!text-white !bg-white/15 font-semibold",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button asChild variant="steel" size="sm" className="flex-1">
                <Link to="/resources" onClick={() => setOpen(false)}>Hire an Engineer</Link>
              </Button>
              <Button asChild variant="hero" size="sm" className="flex-1">
                <Link to="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
              </Button>
            </div>
            <div className="mt-4 border-t border-border/40 pt-3 flex justify-center">
              <SocialLinks variant={scrolled ? "light" : "dark"} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
