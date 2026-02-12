import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spaceaiapp.com/kindora";

  const routes = [
    "",
    "/features",
    "/features/dashboard-analytics",
    "/features/donor-management",
    "/features/campaign-management",
    "/features/grant-management",
    "/features/expense-management",
    "/features/financial-management",
    "/features/client-management",
    "/features/people-management",
    "/features/communications",
    "/features/reporting",
    "/features/user-management",
    "/features/file-management",
    "/features/settings",
    "/pricing",
    "/contact",
    "/solutions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/features" ? 0.9 : 0.8,
  }));
}
