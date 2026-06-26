// Generates public/sitemap.xml before dev and build.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://designforge123.lovable.app";

const categorySlugs = [
  "branding", "company-docs", "marketing", "hr-docs", "legal-docs", "office-docs", "certificates", "digital-services",
];

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.7", changefreq: "monthly" },
  { path: "/testimonials", priority: "0.6", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/careers", priority: "0.6", changefreq: "weekly" },
  { path: "/blog", priority: "0.6", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-conditions", priority: "0.3", changefreq: "yearly" },
  { path: "/cancellation-refund", priority: "0.3", changefreq: "yearly" },
  { path: "/shipping-delivery", priority: "0.3", changefreq: "yearly" },
];

const allPaths = [
  ...staticPaths,
  ...categorySlugs.map((slug) => ({ path: `/services/${slug}`, priority: "0.8", changefreq: "weekly" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...allPaths.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${allPaths.length} entries)`);
