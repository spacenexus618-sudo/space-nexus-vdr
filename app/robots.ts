import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://spacenexus.net";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/seo/", "/templates/", "/_next/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        userAgent: ["PerplexityBot"],
        allow: "/",
      },
      {
        userAgent: ["ClaudeBot", "anthropic-ai"],
        allow: "/",
      },
      {
        userAgent: ["Google-Extended"],
        allow: "/",
      },
      {
        userAgent: ["Bingbot"],
        allow: "/",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/kindora/sitemap.xml`,
    ],
    host: baseUrl,
  };
}
