import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing — Nonprofit Management Plans | Kindora",
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
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
