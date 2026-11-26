import React from "react";
import { cn } from "@/lib/utils";

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/devisha-industries/",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/devisha.industries/",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devisha_industries/",
    icon: (
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/devisha_01",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@devisha_industries",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.186 24C5.467 24 0 18.675 0 12.125 0 5.576 5.467.25 12.186.25c6.643 0 11.956 5.176 12.107 11.876H21.78c-.146-5.281-4.34-9.377-9.594-9.377-5.32 0-9.67 4.349-9.67 9.376 0 5.028 4.35 9.377 9.67 9.377 4.188 0 7.822-2.613 9.096-6.526l2.392.834C22.046 20.916 17.484 24 12.186 24zm4.185-11.455c-.04-2.887-1.786-4.57-4.437-4.57-2.735 0-4.664 1.83-4.664 4.417 0 2.658 1.944 4.464 4.75 4.464 1.849 0 3.25-.79 3.916-2.203l-1.956-.99c-.332.748-1.096 1.05-1.96 1.05-1.393 0-2.394-.85-2.45-2.168h6.801zm-4.437-2.428c1.365 0 2.115.82 2.155 2.083h-4.32c.112-1.258.918-2.083 2.165-2.083z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  className?: string;
  variant?: "dark" | "light" | "outline";
}

export function SocialLinks({ className, variant = "dark" }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((item) => {
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow DEVISHA on ${item.name}`}
            title={`Follow DEVISHA on ${item.name}`}
            className={cn(
              "group relative flex size-9 items-center justify-center rounded-lg transition-all duration-200",
              variant === "dark" &&
                "border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/80 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-sm hover:shadow-cyan-500/20",
              variant === "light" &&
                "border border-border/70 bg-card text-foreground/80 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-sm",
              variant === "outline" &&
                "border border-slate-700 bg-slate-900/80 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-white hover:shadow-sm",
            )}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
