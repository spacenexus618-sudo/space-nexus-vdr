"use client";

import Link from "next/link";
import { useState } from "react";
import LastUpdated from "../../components/LastUpdated";

// ─── Data ────────────────────────────────────────────────────────────────────

const pricingTiers = [
  {
    name: "Starter",
    description: "For small nonprofits getting started with digital management",
    price: "Free",
    priceNote: "Forever free",
    badge: null,
    featured: false,
    color: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    features: [
      "Up to 5 team members",
      "Donor & donation management",
      "Client & service tracking",
      "Basic reporting & exports",
      "Email support",
      "Community resources",
    ],
    limitations: ["Limited to core modules only", "Basic export options only"],
    cta: "Get Started Free",
    ctaHref: "https://cad.spaceaiapp.com/kindora",
    ctaExternal: true,
    ctaStyle: "outline",
  },
  {
    name: "Professional",
    description: "For growing nonprofits that need comprehensive tools",
    price: "Custom",
    priceNote: "Nonprofit-friendly pricing",
    badge: "Most Popular",
    featured: true,
    color: "border-[#2563eb]",
    iconBg: "bg-[#2563eb]",
    iconColor: "text-white",
    features: [
      "Up to 25 team members",
      "All modules included",
      "Grant lifecycle management",
      "Campaign & email management",
      "Advanced reporting & analytics",
      "PDF & Excel exports",
      "Nonprofit accounting & cost allocation",
      "Priority email support",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaHref: "/kindora/contact",
    ctaExternal: false,
    ctaStyle: "filled",
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced requirements",
    price: "Custom",
    priceNote: "Volume pricing available",
    badge: null,
    featured: false,
    color: "border-gray-200",
    iconBg: "bg-gray-900",
    iconColor: "text-white",
    features: [
      "Unlimited team members",
      "All Professional features",
      "Custom integrations",
      "Dedicated support manager",
      "Data migration assistance",
      "Custom training sessions",
      "SLA guarantee",
      "Advanced security options",
      "Custom reporting dashboards",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaHref: "/kindora/contact",
    ctaExternal: false,
    ctaStyle: "dark",
  },
];

const featureCategories = [
  {
    name: "Core",
    rows: [
      { feature: "Team members", starter: "Up to 5", professional: "Up to 25", enterprise: "Unlimited" },
      { feature: "Donor Management", starter: true, professional: true, enterprise: true },
      { feature: "Donation Tracking", starter: true, professional: true, enterprise: true },
      { feature: "Client Management", starter: true, professional: true, enterprise: true },
      { feature: "Service Tracking", starter: true, professional: true, enterprise: true },
      { feature: "Dark / Light Theme", starter: true, professional: true, enterprise: true },
    ],
  },
  {
    name: "Operations",
    rows: [
      { feature: "Grant Management", starter: false, professional: true, enterprise: true },
      { feature: "Campaign Management", starter: false, professional: true, enterprise: true },
      { feature: "Expense & Bill Tracking", starter: false, professional: true, enterprise: true },
      { feature: "Cost Allocation", starter: false, professional: true, enterprise: true },
      { feature: "Chart of Accounts", starter: false, professional: true, enterprise: true },
      { feature: "Budget Planning", starter: false, professional: true, enterprise: true },
      { feature: "Employee Directory", starter: false, professional: true, enterprise: true },
      { feature: "Volunteer Management", starter: false, professional: true, enterprise: true },
      { feature: "Email Templates", starter: false, professional: true, enterprise: true },
      { feature: "Multi-Language Support", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    name: "Reporting",
    rows: [
      { feature: "Advanced Reports", starter: false, professional: true, enterprise: true },
      { feature: "PDF / Excel Export", starter: "Basic", professional: true, enterprise: true },
      { feature: "Statement of Activities", starter: false, professional: true, enterprise: true },
      { feature: "Custom Reporting", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: "Enterprise",
    rows: [
      { feature: "Custom Integrations", starter: false, professional: false, enterprise: true },
      { feature: "Dedicated Support Manager", starter: false, professional: false, enterprise: true },
      { feature: "Data Migration Assistance", starter: false, professional: false, enterprise: true },
      { feature: "SLA Guarantee", starter: false, professional: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "What types of nonprofits is Kindora designed for?",
    answer:
      "Kindora is designed for nonprofits of all sizes — community service organizations, charitable foundations, NGOs, social enterprises, and any mission-driven organization. From a 2-person team to a 200-person organization, Kindora scales with you.",
  },
  {
    question: "Can I export data for board reports?",
    answer:
      "Yes. Kindora supports comprehensive exports including Excel (XLSX), branded PDF reports, and JSON data backups. You can generate Statement of Activities reports and custom dashboards tailored for board presentations in one click.",
  },
  {
    question: "Does Kindora support grant compliance reporting?",
    answer:
      "Absolutely. Kindora includes full grant lifecycle tracking (prospect → award → close), cost allocation across grants and programs, and compliance-ready financial reporting to help you meet any grantor's requirements.",
  },
  {
    question: "What payment methods are tracked for donations?",
    answer:
      "Kindora supports tracking donations made via Cash, Check, Credit Card, Bank Transfer, Online payments, ACH, and Wire transfers. You can also track receipt status and manage one-time and recurring donations.",
  },
  {
    question: "Is there mobile support?",
    answer:
      "Kindora is built with a fully responsive design. Access your nonprofit data on tablets or phones from any modern browser — no app install required.",
  },
  {
    question: "How is data secured?",
    answer:
      "Kindora uses session-based authentication with configurable timeouts, role-based access control (RBAC), and is built on modern, secure infrastructure. Two-factor authentication (2FA) infrastructure is ready to activate on request.",
  },
  {
    question: "Can I try before committing to a paid plan?",
    answer:
      "Yes. The Starter plan is completely free and includes core donor and client management features. You can also request a live demo of Professional features before upgrading — no credit card required.",
  },
  {
    question: "How does Kindora compare to Bloomerang or Salesforce NPSP?",
    answer:
      "Kindora uniquely combines donor management, grant tracking, case management, nonprofit accounting, and team tools in one affordable platform — something no single competitor offers. See our detailed comparison at the link below.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kindora - Nonprofit Management Software Pricing",
  "description": "Affordable pricing plans for nonprofits: Free Starter plan, Professional plan, and Enterprise plan with donor CRM, grant tracking, case management, accounting, and volunteer management.",
  "brand": { "@type": "Brand", "name": "Kindora" },
  "offers": [
    { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "USD", "description": "Free forever for up to 5 members" },
    { "@type": "Offer", "name": "Professional", "price": "0", "priceCurrency": "USD", "description": "Custom pricing for growing nonprofits" },
    { "@type": "Offer", "name": "Enterprise", "price": "0", "priceCurrency": "USD", "description": "Custom pricing for large organizations" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What types of nonprofits is Kindora designed for?", "acceptedAnswer": { "@type": "Answer", "text": "Kindora is designed for nonprofits of all sizes — community service organizations, charitable foundations, NGOs, social enterprises, and any mission-driven organization." } },
    { "@type": "Question", "name": "Can I export data for board reports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Kindora supports comprehensive exports including Excel (XLSX), branded PDF reports, and JSON data backups. You can generate Statement of Activities reports and custom dashboards tailored for board presentations in one click." } },
    { "@type": "Question", "name": "Does Kindora support grant compliance reporting?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Kindora includes full grant lifecycle tracking (prospect to close), cost allocation across grants and programs, and compliance-ready financial reporting to meet any grantor's requirements." } },
    { "@type": "Question", "name": "Is there a free plan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Starter plan is completely free, forever. No credit card required. It covers core modules for small nonprofits getting started." } },
    { "@type": "Question", "name": "How does Kindora compare to Bloomerang or Salesforce?", "acceptedAnswer": { "@type": "Answer", "text": "Kindora uniquely combines donor management, grant tracking, case management, nonprofit accounting, and team tools in one affordable platform." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spacenexus.net" },
    { "@type": "ListItem", "position": 2, "name": "Kindora", "item": "https://spacenexus.net/kindora" },
    { "@type": "ListItem", "position": 3, "name": "Pricing", "item": "https://spacenexus.net/kindora/pricing" },
  ],
};

const trustItems = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "No credit card required" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Set up in under 30 min" },
  { icon: "M6 18L18 6M6 6l12 12", text: "Cancel anytime" },
  { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", text: "Your data, always" },
];

// ─── Check / X icons ─────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2563eb] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${open ? "border-[#2563eb]/30 shadow-md shadow-blue-500/5" : "border-gray-200"
        }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50/80 transition-colors"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-base font-semibold text-gray-900 leading-snug">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${open ? "bg-[#2563eb] rotate-180" : "bg-gray-100"
            }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-white" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-6 pb-5 pt-0 bg-white">
          <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
          {question.includes("Bloomerang") && (
            <Link
              href="/kindora/vs-competitors"
              className="inline-flex items-center gap-1 mt-3 py-2 text-sm font-semibold text-[#2563eb] hover:underline"
            >
              See full comparison →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const lastUpdated = "May 15, 2026";
export default function PricingPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#eff6ff_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#2563eb]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-6">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Pricing
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Plans for every{" "}
            <span className="relative">
              <span className="relative z-10 text-[#2563eb]">nonprofit</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#2563eb]/10 -z-0 rounded" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Start Kindora free, scale as your nonprofit grows. No hidden fees, no surprises — just
            tools that help you do more mission.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10">
            According to NTEN&apos;s 2024 Nonprofit Technology Staffing &amp; Investments Report, 58% of nonprofits reported their technology budget increased year over year. Kindora&apos;s free Starter plan and flexible paid tiers ensure nonprofits of every size can access professional management tools without straining their budget.
          </p>
          <p className="text-xs text-gray-400 mb-6">Last updated: {lastUpdated}</p>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 transition-all duration-300 bg-white ${tier.featured
                  ? "border-[#2563eb] shadow-2xl shadow-blue-500/10 lg:scale-105"
                  : "border-gray-200 hover:shadow-xl hover:border-gray-300"
                  }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] shadow-lg shadow-blue-500/30">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 lg:p-8">
                  {/* Tier header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${tier.iconBg} flex items-center justify-center`}>
                      <span className={`text-sm font-black ${tier.iconColor}`}>
                        {tier.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{tier.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-gray-900">{tier.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{tier.priceNote}</p>
                  </div>

                  {/* CTA */}
                  {tier.ctaStyle === "filled" ? (
                    <Link
                      href={tier.ctaHref}
                      className="block w-full text-center py-3.5 px-6 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {tier.cta}
                    </Link>
                  ) : tier.ctaStyle === "dark" ? (
                    <Link
                      href={tier.ctaHref}
                      className="block w-full text-center py-3.5 px-6 rounded-full font-bold text-white text-sm bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {tier.cta}
                    </Link>
                  ) : (
                    <a
                      href={tier.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3.5 px-6 rounded-full font-bold text-[#2563eb] text-sm border-2 border-[#2563eb]/30 hover:border-[#2563eb] hover:bg-[#2563eb]/5 transition-all duration-300"
                    >
                      {tier.cta}
                    </a>
                  )}

                  {/* Features list */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <svg
                            className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${tier.featured ? "text-[#2563eb]" : "text-emerald-500"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.limitations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                        {tier.limitations.map((limitation) => (
                          <p key={limitation} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                            {limitation}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Below cards note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include{" "}
            <span className="font-semibold text-gray-700">RBAC security</span>,{" "}
            <span className="font-semibold text-gray-700">99.9% uptime</span>, and{" "}
            <span className="font-semibold text-gray-700">cloud-based access</span> from any device.
          </p>
        </div>
      </section>

      {/* ── Social Proof / Value bar ──────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1d4ed8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Nonprofits using Kindora" },
              { value: "$2M+", label: "Grants tracked on platform" },
              { value: "10 hrs", label: "Saved per team per week" },
              { value: "12", label: "Integrated modules" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white" id="compare">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Compare plans</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything, side by side
            </h2>
            <p className="text-gray-500">See exactly what&apos;s included in each plan</p>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                {/* Sticky header */}
                <thead>
                  <tr>
                    <th className="text-left py-5 px-6 bg-gray-50 font-semibold text-gray-500 w-1/2">
                      Feature
                    </th>
                    <th className="text-center py-5 px-6 bg-gray-50 font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="text-center py-5 px-6 bg-[#2563eb] font-bold text-white">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs opacity-70 font-medium">Most Popular</span>
                        <span>Professional</span>
                      </div>
                    </th>
                    <th className="text-center py-5 px-6 bg-gray-50 font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.flatMap((cat, catIdx) => [
                    <tr key={`cat-${catIdx}`} className="bg-gray-50 border-t border-gray-200">
                      <td
                        colSpan={4}
                        className="py-2.5 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest"
                      >
                        {cat.name}
                      </td>
                    </tr>,
                    ...cat.rows.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={`border-t border-gray-100 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
                      >
                        <td className="py-3.5 px-6 text-gray-700 font-medium">{row.feature}</td>
                        {([row.starter, row.professional, row.enterprise] as (boolean | string)[]).map(
                          (value, i) => (
                            <td
                              key={i}
                              className={`text-center py-3.5 px-6 ${i === 1 ? "bg-blue-50/40" : ""}`}
                            >
                              {typeof value === "boolean" ? (
                                value ? <CheckIcon /> : <XIcon />
                              ) : (
                                <span className="text-sm text-gray-600 font-medium">{value}</span>
                              )}
                            </td>
                          ),
                        )}
                      </tr>
                    )),
                  ])}
                </tbody>
                {/* Footer CTA row */}
                <tfoot>
                  <tr className="border-t-2 border-gray-200 bg-gray-50">
                    <td className="py-5 px-6 text-sm font-semibold text-gray-700">Get started</td>
                    <td className="py-5 px-6 text-center">
                      <a
                        href="https://cad.spaceaiapp.com/kindora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-6 py-3 rounded-full text-sm font-semibold text-[#2563eb] border-2 border-[#2563eb]/30 hover:border-[#2563eb] transition-colors"
                      >
                        Start Free
                      </a>
                    </td>
                    <td className="py-5 px-6 text-center bg-blue-50/40">
                      <Link
                        href="/kindora/contact"
                        className="inline-flex px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                      >
                        Contact Sales
                      </Link>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <Link
                        href="/kindora/contact"
                        className="inline-flex px-6 py-3 rounded-full text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
                      >
                        Contact Sales
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Compare Kindora to competitors →{" "}
            <Link href="/kindora/vs-competitors" className="inline-block py-2 text-[#2563eb] font-semibold hover:underline">
              See full comparison
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know before choosing a plan.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitor Comparison ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              How We Compare
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kindora vs. the alternatives
            </h2>
            <p className="text-gray-600">
              See how Kindora stacks up against other tools nonprofits commonly use.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-700 min-w-[220px]">Feature</th>
                  <th className="p-4 font-bold text-[#2563eb] bg-blue-50 text-center min-w-[140px]">
                    <span className="flex flex-col items-center gap-1">
                      <span>Kindora</span>
                      <span className="text-xs font-normal text-blue-400">All-in-one</span>
                    </span>
                  </th>
                  <th className="p-4 font-semibold text-gray-500 text-center min-w-[130px]">Salesforce NP</th>
                  <th className="p-4 font-semibold text-gray-500 text-center min-w-[120px]">Bloomerang</th>
                  <th className="p-4 font-semibold text-gray-500 text-center min-w-[130px]">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Donor Management", kindora: true, salesforce: true, bloomerang: true, sheets: false },
                  { feature: "Grant Lifecycle Management", kindora: true, salesforce: "add-on", bloomerang: false, sheets: false },
                  { feature: "Client & Case Management", kindora: true, salesforce: "complex", bloomerang: false, sheets: false },
                  { feature: "Cost Allocation & Compliance", kindora: true, salesforce: "add-on", bloomerang: false, sheets: false },
                  { feature: "Volunteer Tracking", kindora: true, salesforce: "add-on", bloomerang: false, sheets: false },
                  { feature: "Nonprofit-Specific Workflows", kindora: true, salesforce: false, bloomerang: "partial", sheets: false },
                  { feature: "No Setup / IT Required", kindora: true, salesforce: false, bloomerang: true, sheets: true },
                  { feature: "Nonprofit-Friendly Pricing", kindora: true, salesforce: false, bloomerang: "partial", sheets: true },
                  { feature: "All Modules Included", kindora: true, salesforce: false, bloomerang: false, sheets: false },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                    {[row.kindora, row.salesforce, row.bloomerang, row.sheets].map((val, j) => (
                      <td key={j} className={`p-4 text-center ${j === 0 ? "bg-blue-50/50" : ""}`}>
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </span>
                        ) : val === false ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                          </span>
                        ) : (
                          <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Based on publicly available feature information. Last reviewed February 2026.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently asked pricing questions
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "Is there really a free plan?",
                a: "Yes. The Starter plan is completely free, forever. No credit card required. It covers the core modules for small nonprofits getting started — donor management, client tracking, and basic reporting.",
              },
              {
                q: "How is Kindora's Professional plan priced?",
                a: "Professional pricing is based on your organization's size and needs. We offer nonprofit-friendly rates and do not charge per-module — all features are included. Contact us for a custom quote.",
              },
              {
                q: "Can I get a nonprofit discount?",
                a: "Yes. Kindora is purpose-built for nonprofits and our pricing reflects that. We offer additional discounts for organizations serving high-need communities. Reach out to discuss your situation.",
              },
              {
                q: "Do you offer data migration from our current tools?",
                a: "Yes. Enterprise plan includes data migration assistance. For other plans, we offer import tools and documentation to help you move your existing donor, client, and grant data into Kindora.",
              },
              {
                q: "Is there a long-term contract required?",
                a: "No. Kindora does not require annual contracts. You can start month-to-month and upgrade, downgrade, or cancel at any time.",
              },
              {
                q: "Can we try Kindora before committing to a paid plan?",
                a: "Absolutely. The Starter plan is free forever and includes core modules. You can also request a personalized demo with our team before making any decision.",
              },
              {
                q: "How does Kindora handle compliance for grant reporting?",
                a: "Kindora includes built-in grant lifecycle management, cost allocation, and financial reporting tools designed for nonprofit compliance requirements. You can generate grantor reports directly from the platform.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
            Ready to get started?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Talk to our team to find the perfect plan for your nonprofit. We
            offer demos, nonprofit discounts, and free data migration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Sales
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300"
            >
              Try Free — No CC Required
            </a>
          </div>

          {/* Mini trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            {["Data encryption", "RBAC security", "99.9% uptime", "24/7 support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>

    </main>
  );
}
