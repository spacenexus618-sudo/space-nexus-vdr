import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing — Nonprofit CRM & Management Plans | Kindora",
    description:
        "Flexible pricing for nonprofits of all sizes. Start free with core donor and client tools, or contact us for Professional and Enterprise plans with grant management, accounting, campaigns, and more.",
    alternates: {
        canonical: "/kindora/pricing",
    },
    keywords: [
        "nonprofit management software pricing",
        "nonprofit CRM cost",
        "grant management software price",
        "Kindora pricing plans",
        "nonprofit software free plan",
        "affordable nonprofit tools",
    ],
    openGraph: {
        title: "Pricing — Nonprofit CRM & Management Plans | Kindora",
        description:
            "Start free or upgrade to unlock grant management, financial reporting, campaigns, and advanced analytics for your nonprofit.",
        url: "https://spacenexus.net/kindora/pricing",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing — Nonprofit CRM & Management Plans | Kindora",
        description:
            "Flexible nonprofit CRM pricing. Free plan available — upgrade for grant management, financial reporting, and more.",
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
