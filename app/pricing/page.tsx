import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Transparent VDR Pricing | SpaceNexus",
    description: "Flat-rate VDR pricing with no per-page fees. Self-serve, team, and enterprise plans. See what is included.",
    alternates: { canonical: "https://spacenexus.net/pricing" },
    openGraph: {
        title: "Transparent VDR Pricing | SpaceNexus",
        description:
            "Flat-rate VDR pricing with no per-page fees. Self-serve, team, and enterprise plans. Se...",
        url: "https://spacenexus.net/pricing",
    },
};

const plans = [
    {
        name: "Starter",
        tagline: "Single deal, fast setup",
        price: "Contact Us",
        priceNote: "Per deal · billed once",
        color: "border-gray-200",
        badge: null,
        features: [
            "1 active deal room",
            "Up to 10 GB storage",
            "50 invited users",
            "Role-based permissions",
            "Full audit trail",
            "Q&A module",
            "Email support",
            "24-hour setup",
        ],
        cta: "Get Started",
        ctaStyle:
            "bg-white text-[#2563eb] border border-[#2563eb] hover:bg-blue-50",
    },
    {
        name: "Professional",
        tagline: "Teams running multiple deals",
        price: "Contact Us",
        priceNote: "Per month · billed annually",
        color: "border-[#2563eb]",
        badge: "Most Popular",
        features: [
            "Unlimited deal rooms",
            "Up to 100 GB storage",
            "Unlimited users",
            "Advanced permissions & watermarking",
            "AI document processing",
            "Activity analytics dashboard",
            "Priority email & chat support",
            "Custom NDA workflows",
            "Bulk document upload",
            "Mobile-optimized access",
        ],
        cta: "Talk to Sales",
        ctaStyle: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/30",
    },
    {
        name: "Enterprise",
        tagline: "Large teams, complex transactions",
        price: "Custom",
        priceNote: "Volume pricing available",
        color: "border-gray-200",
        badge: null,
        features: [
            "Everything in Professional",
            "Unlimited storage",
            "Dedicated account manager",
            "SSO / SAML integration",
            "Custom branding & white-label",
            "API access",
            "SLA: 99.99% uptime",
            "On-premise deployment option",
            "24/7 phone support",
            "Compliance reporting (SOC 2, ISO)",
        ],
        cta: "Contact Sales",
        ctaStyle:
            "bg-white text-[#2563eb] border border-[#2563eb] hover:bg-blue-50",
    },
];

const comparisonFeatures = [
    { name: "Deal rooms", starter: "1", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Storage", starter: "10 GB", pro: "100 GB", enterprise: "Unlimited" },
    { name: "Users", starter: "50", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "AI document processing", starter: false, pro: true, enterprise: true },
    { name: "Activity analytics", starter: "Basic", pro: "Advanced", enterprise: "Advanced" },
    { name: "Watermarking", starter: false, pro: true, enterprise: true },
    { name: "Custom NDA workflows", starter: false, pro: true, enterprise: true },
    { name: "SSO / SAML", starter: false, pro: false, enterprise: true },
    { name: "White-label", starter: false, pro: false, enterprise: true },
    { name: "API access", starter: false, pro: false, enterprise: true },
    { name: "Support", starter: "Email", pro: "Priority chat", enterprise: "24/7 phone" },
    { name: "SLA uptime", starter: "99.9%", pro: "99.9%", enterprise: "99.99%" },
];

function Check() {
    return (
        <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function Cross() {
    return (
        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

const pricingFaqs = [
  {
    question: "How much does a virtual data room cost?",
    answer: "SpaceNexus VDR pricing starts with a free 14-day trial. Paid plans scale based on storage, number of users, and feature tier (Starter, Professional, Enterprise). Contact us for a custom quote tailored to your deal size and compliance needs.",
  },
  {
    question: "Is there a free trial of SpaceNexus?",
    answer: "Yes — SpaceNexus offers a full-featured 14-day free trial with no credit card required. You get access to all features including data room setup, Q&A management, analytics, and user permissions.",
  },
  {
    question: "What is included in the Enterprise plan?",
    answer: "The Enterprise plan includes unlimited storage, unlimited users, custom branding, SSO/SAML authentication, dedicated account management, API access, custom integrations, SLA guarantees, and priority 24/7 support. It also includes advanced security features like customer-managed encryption keys.",
  },
  {
    question: "Can I switch plans or upgrade later?",
    answer: "Yes. You can upgrade or downgrade your SpaceNexus plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. All your data and configurations are preserved during plan changes.",
  },
  {
    question: "How does SpaceNexus pricing compare to Datasite or Intralinks?",
    answer: "SpaceNexus offers transparent, predictable pricing — typically 40–60% less than legacy providers like Datasite and Intralinks. Unlike per-page or per-user pricing models, SpaceNexus plans include unlimited pages and flexible user seats.",
  },
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: pricingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "SpaceNexus Virtual Data Room",
      applicationCategory: "BusinessApplication",
      url: "https://spacenexus.net",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "149",
        highPrice: "999",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script
                id="pricing-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
            />
            {/* Hero */}
            <section className="pt-28 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                        Pricing
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        No per-page fees. No per-user surprises. No hidden charges. Just
                        straightforward VDR pricing that scales with your deal volume.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Free 14-day trial · No credit card required
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col ${plan.badge ? "shadow-2xl shadow-blue-500/10 scale-[1.02]" : "shadow-sm"
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1.5 bg-[#2563eb] text-white text-xs font-bold rounded-full shadow-lg">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                                    <p className="text-sm text-gray-500">{plan.tagline}</p>
                                </div>

                                <div className="mb-8">
                                    <p className="text-3xl font-black text-gray-900">{plan.price}</p>
                                    <p className="text-xs text-gray-400 mt-1">{plan.priceNote}</p>
                                </div>

                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/demo"
                                    className={`block text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-200 ${plan.ctaStyle}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                        Full feature comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 pr-8 font-medium text-gray-500 w-1/3">
                                        Feature
                                    </th>
                                    {plans.map((p) => (
                                        <th key={p.name} className="text-center py-4 px-4 font-bold text-gray-900">
                                            {p.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((f, i) => (
                                    <tr
                                        key={f.name}
                                        className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                            }`}
                                    >
                                        <td className="py-3.5 pr-8 text-gray-700 font-medium">{f.name}</td>
                                        <td className="py-3.5 px-4 text-center">
                                            {typeof f.starter === "boolean" ? (
                                                f.starter ? <Check /> : <Cross />
                                            ) : (
                                                <span className="text-gray-600">{f.starter}</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {typeof f.pro === "boolean" ? (
                                                f.pro ? <Check /> : <Cross />
                                            ) : (
                                                <span className="text-gray-600">{f.pro}</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {typeof f.enterprise === "boolean" ? (
                                                f.enterprise ? <Check /> : <Cross />
                                            ) : (
                                                <span className="text-gray-600">{f.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
                        <p className="text-lg text-gray-600">Common questions about SpaceNexus VDR pricing and plans.</p>
                    </div>
                    <div className="space-y-4">
                        {pricingFaqs.map((faq, i) => (
                            <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to close your next deal?
                    </h2>
                    <p className="text-blue-200 mb-8 text-lg">
                        Set up your secure data room in under 24 hours. No credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/demo"
                            className="px-8 py-4 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Talk to Founders
                        </Link>
                        <Link
                            href="/features"
                            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                        >
                            Explore Features
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
