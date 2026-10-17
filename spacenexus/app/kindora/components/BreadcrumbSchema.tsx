"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const SEGMENT_LABELS: Record<string, string> = {
    kindora: "Kindora",
    features: "Features",
    solutions: "Solutions",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
    demo: "Demo",
    // feature sub-pages
    "dashboard-analytics": "Dashboard & Analytics",
    "donor-management": "Donor Management",
    "grant-management": "Grant Management",
    "campaign-management": "Campaign Management",
    "client-management": "Client & Programs",
    "financial-management": "Financial Management",
    "reporting": "Reporting & Export",
    "communications": "Communications",
    "volunteer-management": "Volunteer Management",
    "program-management": "Program Management",
    "task-management": "Task Management",
    "document-management": "Document Management",
    // solution sub-pages
    "small-nonprofits": "Small Nonprofits",
    "social-services": "Social Services",
    "community-organizations": "Community Organizations",
    "youth-nonprofits": "Youth Nonprofits",
    "housing-nonprofits": "Housing Nonprofits",
};

function toLabel(segment: string): string {
    return SEGMENT_LABELS[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const BASE_URL = "https://spacenexus.net";

export default function BreadcrumbSchema() {
    const pathname = usePathname();

    // Build breadcrumb list from pathname segments
    const segments = pathname?.split("/").filter(Boolean) ?? [];

    const items = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
        },
        ...segments.map((segment, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: toLabel(segment),
            item: `${BASE_URL}/${segments.slice(0, index + 1).join("/")}`,
        })),
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
    };

    const scriptId = `breadcrumb-schema-${segments.join("-") || "home"}`;

    return (
        <Script
            id={scriptId}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
