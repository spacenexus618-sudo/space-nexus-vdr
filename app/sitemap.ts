import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacenexus.net";
  const currentDate = new Date();

  // VDR static pages
  const vdrStaticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/demo", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/security", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    // Phase 2: Content Strategy pages
    { route: "/glossary", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/checklists", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/competitors/datasite-alternative", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/competitors/intralinks-alternative", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/mergers-and-acquisitions-vdr", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/series-a-fundraising-data-room", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/secure-document-sharing-for-legal", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  // VDR blog posts
  const vdrBlogPosts = [
    "what-is-a-virtual-data-room",
    "ma-due-diligence-checklist-2025",
    "virtual-data-room-for-private-equity",
    "vdr-security-what-to-look-for",
    "how-to-set-up-virtual-data-room-series-a",
  ].map((slug) => ({
    route: `/blog/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));


  // VDR feature pages
  const vdrFeaturePages = [
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

  // VDR industry pages
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

  // Kindora static pages
  const kindoraStaticPages = [
    { route: "/kindora", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/kindora/features", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/kindora/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/kindora/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/kindora/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/kindora/demo", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/kindora/vs-competitors", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  // Kindora feature pages
  const kindoraFeaturePages = [
    "donor-management",
    "grant-management",
    "client-management",
    "financial-management",
    "campaign-management",
    "communications",
    "dashboard-analytics",
    "expense-management",
    "file-management",
    "people-management",
    "reporting",
    "settings",
    "user-management",
  ].map((feature) => ({
    route: `/kindora/features/${feature}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Combine all pages
  const allPages = [
    ...vdrStaticPages,
    ...vdrBlogPosts,
    ...vdrFeaturePages,
    ...industryPages,
    ...kindoraStaticPages,
    ...kindoraFeaturePages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
