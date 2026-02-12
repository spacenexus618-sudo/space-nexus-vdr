import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/kindora/",
      },
    ],
    sitemap: "https://spaceaiapp.com/kindora/sitemap.xml",
  };
}
