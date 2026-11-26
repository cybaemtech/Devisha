import type { Plugin } from "vite";

export const routeMeta: Record<
  string,
  { title: string; description: string; keywords?: string; url: string }
> = {
  "/about": {
    title: "Engineering Design & Manufacturing Company | Devisha Industries",
    description:
      "We are Pune-based engineering design and manufacturing company supporting product development, vendor development and production PAN India",
    keywords:
      "Engineering Design and Manufacturing, engineering design company, manufacturing company Pune, product development, vendor development, production PAN India, Devisha Industries",
    url: "https://devishaindustries.com/about",
  },
  "/services": {
    title: "Engineering Design Services | Devisha Industries",
    description:
      "We facilitate engineering design services for OEMs and industrial businesses, including 3D CAD, detailed engineering, product development, sheet metal design and genset engineering.",
    keywords:
      "Engineering design services, 3D CAD, detailed engineering, product development, sheet metal design, genset engineering, Devisha Industries",
    url: "https://devishaindustries.com/services",
  },
  "/manufacturing": {
    title: "Industrial Fabrication & Manufacturing Services | Devisha Industries",
    description:
      "We provide industrial manufacturing with CNC cutting, bending, MIG & TIG welding, fabrication, enclosures, assembly and production support for OEM.",
    keywords:
      "Industrial Fabrication & Manufacturing Services, CNC laser cutting, CNC bending, industrial sheet metal fabrication, MIG welding, TIG welding, drilling and tapping, fabrication drawings, stainless steel fabrication, Devisha Industries",
    url: "https://devishaindustries.com/manufacturing",
  },
  "/resources": {
    title: "Engineering Resource Provision | DEVISHA",
    description:
      "Extend your engineering team without increasing permanent overhead. Dedicated CAD, NPD, and manufacturing engineers from DEVISHA.",
    url: "https://devishaindustries.com/resources",
  },
  "/contact": {
    title: "Contact DEVISHA | Let's Engineer Your Next Product",
    description:
      "Share your drawing, RFQ or job description with DEVISHA, Pune. Engineering, manufacturing, and vendor partnership enquiries welcome.",
    url: "https://devishaindustries.com/contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Devisha Industries",
    description:
      "Read the Privacy Policy of Devisha Industries. Learn how we handle your personal data, CAD files, engineering drawings, and technical RFQs with utmost confidentiality.",
    keywords:
      "Privacy Policy, Devisha Industries, data protection, confidentiality, CAD drawing protection, engineering NDA, Pune",
    url: "https://devishaindustries.com/privacy-policy",
  },
};

export function devHtmlRouteMetaPlugin(): Plugin {
  return {
    name: "dev-html-route-meta-plugin",
    transformIndexHtml(html, ctx) {
      const rawUrl = ctx.originalUrl || ctx.path || "";
      const path = (rawUrl.split("?")[0] ?? "").replace(/\/+$/, "") || "/";
      const meta = routeMeta[path];

      if (!meta) {
        return html;
      }

      let transformed = html;

      // Replace Title
      transformed = transformed.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);

      // Replace Description
      transformed = transformed.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
        `<meta name="description" content="${meta.description}" />`
      );

      // Replace or inject Keywords
      if (meta.keywords) {
        transformed = transformed.replace(
          /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
          `<meta name="keywords" content="${meta.keywords}" />`
        );
      }

      // Replace Canonical Link
      transformed = transformed.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
        `<link rel="canonical" href="${meta.url}" />`
      );

      // Replace Open Graph Tags
      transformed = transformed.replace(
        /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:url" content="${meta.url}" />`
      );
      transformed = transformed.replace(
        /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:title" content="${meta.title}" />`
      );
      transformed = transformed.replace(
        /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:description" content="${meta.description}" />`
      );
      transformed = transformed.replace(
        /<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image:alt" content="${meta.title}" />`
      );

      // Replace Twitter Card Tags
      transformed = transformed.replace(
        /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:title" content="${meta.title}" />`
      );
      transformed = transformed.replace(
        /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:description" content="${meta.description}" />`
      );

      // Remove WebSite schema from subpages so it only exists on the home page
      transformed = transformed.replace(
        /<!-- Website Schema -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/i,
        ""
      );

      return transformed;
    },
  };
}
