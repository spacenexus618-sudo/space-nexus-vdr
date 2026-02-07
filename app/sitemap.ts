import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacenexus.com";
  const currentDate = new Date();

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/demo", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  // Feature pages
  const featurePages = [
    "data-room",
    "security-compliance",
    "users-permissions",
    "activity-analytics",
    "qa",
    "reports",
    "integrations",
    "deals",
    "billing-plans",
    "support",
  ].map((feature) => ({
    route: `/features/${feature}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Industry pages
  const industryPages = [
    "investment-banking",
    "private-equity",
    "law-firms",
    "corporate-development",
    "life-sciences",
    "real-estate",
    "technology",
    "energy-infrastructure",
  ].map((industry) => ({
    route: `/industries/${industry}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...featurePages, ...industryPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
