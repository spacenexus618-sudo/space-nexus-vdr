import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacenexus.net/kindora";

  const staticRoutes = [
    { route: "", priority: 1 },
    { route: "/features", priority: 0.9 },
    { route: "/features/dashboard-analytics", priority: 0.8 },
    { route: "/features/donor-management", priority: 0.8 },
    { route: "/features/campaign-management", priority: 0.8 },
    { route: "/features/grant-management", priority: 0.8 },
    { route: "/features/expense-management", priority: 0.8 },
    { route: "/features/financial-management", priority: 0.8 },
    { route: "/features/client-management", priority: 0.8 },
    { route: "/features/people-management", priority: 0.8 },
    { route: "/features/communications", priority: 0.8 },
    { route: "/features/reporting", priority: 0.8 },
    { route: "/features/user-management", priority: 0.8 },
    { route: "/features/file-management", priority: 0.8 },
    { route: "/features/settings", priority: 0.8 },
    { route: "/features/financials", priority: 0.8 },
    { route: "/pricing", priority: 0.9 },
    { route: "/contact", priority: 0.8 },
    { route: "/solutions", priority: 0.9 },
    { route: "/solutions/small-nonprofits", priority: 0.8 },
    { route: "/solutions/social-services", priority: 0.8 },
    { route: "/solutions/community-organizations", priority: 0.8 },
    { route: "/solutions/youth-nonprofits", priority: 0.8 },
    { route: "/solutions/housing-nonprofits", priority: 0.8 },
    { route: "/vs-competitors", priority: 0.85 },
    { route: "/blog", priority: 0.9 },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    route: `/blog/${post.slug}`,
    priority: 0.75,
  }));

  const all = [...staticRoutes, ...blogRoutes];

  return all.map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
