import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const routeMeta = {
  about: {
    title: "Engineering Design & Manufacturing Company | Devisha Industries",
    description:
      "We are Pune-based engineering design and manufacturing company supporting product development, vendor development and production PAN India",
    keywords:
      "Engineering Design and Manufacturing, engineering design company, manufacturing company Pune, product development, vendor development, production PAN India, Devisha Industries",
    url: "https://devishaindustries.com/about",
  },
  contact: {
    title: "Contact DEVISHA | Let's Engineer Your Next Product",
    description:
      "Share your drawing, RFQ or job description with DEVISHA, Pune. Engineering, manufacturing, and vendor partnership enquiries welcome.",
    url: "https://devishaindustries.com/contact",
  },
  manufacturing: {
    title: "Industrial Fabrication & Manufacturing Services | Devisha Industries",
    description:
      "We provide industrial manufacturing with CNC cutting, bending, MIG & TIG welding, fabrication, enclosures, assembly and production support for OEM.",
    keywords:
      "Industrial Fabrication & Manufacturing Services, CNC laser cutting, CNC bending, industrial sheet metal fabrication, MIG welding, TIG welding, drilling and tapping, fabrication drawings, stainless steel fabrication, Devisha Industries",
    url: "https://devishaindustries.com/manufacturing",
  },
  resources: {
    title: "Engineering Resource Provision | DEVISHA",
    description:
      "Extend your engineering team without increasing permanent overhead. Dedicated CAD, NPD, and manufacturing engineers from DEVISHA.",
    url: "https://devishaindustries.com/resources",
  },
  services: {
    title: "Engineering Design Services | Devisha Industries",
    description:
      "We facilitate engineering design services for OEMs and industrial businesses, including 3D CAD, detailed engineering, product development, sheet metal design and genset engineering.",
    keywords:
      "Engineering design services, 3D CAD, detailed engineering, product development, sheet metal design, genset engineering, Devisha Industries",
    url: "https://devishaindustries.com/services",
  },
  "privacy-policy": {
    title: "Privacy Policy | Devisha Industries",
    description:
      "Read the Privacy Policy of Devisha Industries. Learn how we handle your personal data, CAD files, engineering drawings, and technical RFQs with utmost confidentiality.",
    keywords:
      "Privacy Policy, Devisha Industries, data protection, confidentiality, CAD drawing protection, engineering NDA, Pune",
    url: "https://devishaindustries.com/privacy-policy",
  },
};

const source = join(process.cwd(), "dist", "index.html");
const baseHtml = await readFile(source, "utf-8");

for (const [route, meta] of Object.entries(routeMeta)) {
  const destinationDirectory = join(process.cwd(), "dist", route);
  await mkdir(destinationDirectory, { recursive: true });

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace Keywords if defined
  if (meta.keywords) {
    html = html.replace(
      /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
      `<meta name="keywords" content="${meta.keywords}" />`
    );
  }

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${meta.url}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${meta.url}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:image:alt" content="${meta.title}" />`
  );

  // Replace Twitter Card Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  // Remove WebSite schema from subpages so it only exists on the home page
  html = html.replace(
    /<!-- Website Schema -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/i,
    ""
  );

  await writeFile(join(destinationDirectory, "index.html"), html, "utf-8");
  await writeFile(join(process.cwd(), "dist", `${route}.html`), html, "utf-8");
}
