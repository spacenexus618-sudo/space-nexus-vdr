import type { MetadataRoute } from "next";

// Note: Google only reads /robots.txt at the root — this file (/kindora/robots.txt)
// has no effect on crawling. SEO-relevant rules live in app/robots.ts.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/kindora/",
      },
    ],
    sitemap: "https://spacenexus.net/kindora/sitemap.xml",
  };
}
