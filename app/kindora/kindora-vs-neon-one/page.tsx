import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kindora vs Neon One | Complete Nonprofit Software Comparison 2026",
  description:
    "Kindora vs Neon One: a head-to-head comparison of CRM, fundraising, grant management, accounting, and more. See which nonprofit platform is right for you.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/kindora-vs-neon-one",
  },
  openGraph: {
    title: "Kindora vs Neon One — Complete Comparison 2026",
    description:
      "Head-to-head comparison of Kindora and Neon One across CRM, fundraising, grants, accounting, and more. The definitive guide for nonprofits.",
    url: "https://spacenexus.net/kindora/kindora-vs-neon-one",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Kindora vs Neon One Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora vs Neon One — Complete Comparison 2026",
    description:
      "Which nonprofit software is better? See how Kindora and Neon One compare across every feature that matters.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "kindora vs neon one",
    "neon one vs kindora",
    "kindora neon one comparison",
    "nonprofit software comparison",
    "neon crm review",
    "kindora review",
    "best nonprofit crm 2026",
    "neon one pricing vs kindora",
    "nonprofit software comparison chart",
    "switch from neon one",
    "kindora vs neon one pricing",
    "neon crm alternatives",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Nonprofit Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one nonprofit management software — case management, donor CRM, grant tracking, accounting, and communications. Compared to Neon One.",
      url: "https://spacenexus.net/kindora/kindora-vs-neon-one",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is better, Kindora or Neon One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your needs. Neon One is a suite of separate products (Neon CRM, Neon Fundraise, etc.) that work together but require multiple subscriptions. Kindora is a true all-in-one platform that includes donor CRM, fundraising, grant management, accounting, and case management in one subscription. If you need more than donor management, Kindora is the better choice.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Neon One on pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neon One uses quote-based, modular pricing where you pay separately for each product (CRM, Fundraise, etc.). Costs can add up quickly. Kindora offers transparent, flat-rate pricing that includes everything — no quotes, no hidden fees, no need to buy separate products.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora have the same donor management features as Neon One?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes donor profiles, giving history, engagement scoring, lapsed donor alerts, segmentation, and a donor portal — everything Neon CRM offers. Plus Kindora adds grant management, case management, accounting, and volunteer tools that Neon One doesn't provide.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from Neon One to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Neon One and other nonprofit platforms. Our team can help you migrate donor records, fundraising data, and campaign history smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do that Neon One doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora adds grant lifecycle management, client case management, nonprofit accounting with cost allocation, employee management, and a built-in communications hub. Neon One is limited to donor CRM, fundraising, and volunteer management across separate products.",
          },
        },
      ],
    },
  ],
};

type FeatureValue = boolean | "partial";

const comparisonFeatures: {
  category: string;
  features: { name: string; kindora: FeatureValue; neonone: FeatureValue }[];
}[] = [
  {
    category: "Donor Management",
    features: [
      { name: "Donor Profiles & CRM", kindora: true, neonone: true },
      { name: "Giving History Tracking", kindora: true, neonone: true },
      { name: "Engagement Scoring", kindora: true, neonone: "partial" },
      { name: "Lapsed Donor Alerts", kindora: true, neonone: "partial" },
      { name: "Donor Segmentation", kindora: true, neonone: true },
      { name: "Donor Portal", kindora: true, neonone: "partial" },
    ],
  },
  {
    category: "Fundraising & Events",
    features: [
      { name: "Campaign Management", kindora: true, neonone: true },
      { name: "Peer-to-Peer Fundraising", kindora: true, neonone: true },
      { name: "Event Management", kindora: true, neonone: true },
      { name: "Online Donation Forms", kindora: true, neonone: true },
      { name: "Text-to-Give", kindora: true, neonone: "partial" },
      { name: "Recurring Donations", kindora: true, neonone: true },
    ],
  },
  {
    category: "Grant Management",
    features: [
      { name: "Grant Lifecycle Tracking", kindora: true, neonone: false },
      { name: "Grant Application Management", kindora: true, neonone: false },
      { name: "Grant Receipts & Deadlines", kindora: true, neonone: false },
      { name: "Grant Compliance Reporting", kindora: true, neonone: false },
    ],
  },
  {
    category: "Case Management",
    features: [
      { name: "Client Intake & Enrollment", kindora: true, neonone: false },
      { name: "Service Delivery Tracking", kindora: true, neonone: false },
      { name: "Outcome Measurement", kindora: true, neonone: false },
      { name: "Program Reporting", kindora: true, neonone: false },
    ],
  },
  {
    category: "Financial Management",
    features: [
      { name: "Nonprofit Accounting", kindora: true, neonone: false },
      { name: "Cost Allocation", kindora: true, neonone: false },
      { name: "Chart of Accounts & Budgets", kindora: true, neonone: false },
      { name: "Expense & Bill Management", kindora: true, neonone: false },
      { name: "Board Financial Reports", kindora: true, neonone: false },
    ],
  },
  {
    category: "People & Operations",
    features: [
      { name: "Volunteer Management", kindora: true, neonone: true },
      { name: "Employee Management", kindora: true, neonone: false },
      { name: "Communications Hub", kindora: true, neonone: "partial" },
      { name: "File Attachments & Documents", kindora: true, neonone: true },
    ],
  },
  {
    category: "Reporting & Analytics",
    features: [
      { name: "Custom Dashboards", kindora: true, neonone: true },
      { name: "Financial Reports", kindora: true, neonone: false },
      { name: "Program Impact Reports", kindora: true, neonone: "partial" },
      { name: "Grant Compliance Reports", kindora: true, neonone: false },
      { name: "Export to PDF & Excel", kindora: true, neonone: "partial" },
      { name: "Scheduled Report Delivery", kindora: true, neonone: false },
    ],
  },
  {
    category: "Usability & Support",
    features: [
      { name: "Easy Setup (No Consultants)", kindora: true, neonone: false },
      { name: "Role-Based Access Control", kindora: true, neonone: true },
      { name: "Mobile Friendly", kindora: true, neonone: true },
      { name: "Priority Support", kindora: true, neonone: true },
    ],
  },
];

function FeatureCheck({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function FeatureCheckNeonOne({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

const neononeScore = comparisonFeatures.reduce((acc, cat) => {
  return acc + cat.features.filter((f) => f.neonone === true).length;
}, 0);

const kindoraScore = comparisonFeatures.reduce((acc, cat) => {
  return acc + cat.features.filter((f) => f.kindora === true).length;
}, 0);

const totalFeatures = comparisonFeatures.reduce(
  (acc, cat) => acc + cat.features.length,
  0
);

const faqs = [
  {
    question: "Which is better, Kindora or Neon One?",
    answer:
      "It depends on your needs. Neon One is a suite of separate products (Neon CRM, Neon Fundraise, etc.) that work together but require multiple subscriptions. Kindora is a true all-in-one platform that includes donor CRM, fundraising, grant management, accounting, and case management in one subscription. If you need more than donor management, Kindora is the better choice.",
  },
  {
    question: "How does Kindora compare to Neon One on pricing?",
    answer:
      "Neon One uses quote-based, modular pricing where you pay separately for each product (CRM, Fundraise, etc.). Costs can add up quickly. Kindora offers transparent, flat-rate pricing that includes everything — no quotes, no hidden fees, no need to buy separate products.",
  },
  {
    question: "Does Kindora have the same donor management features as Neon One?",
    answer:
      "Yes. Kindora includes donor profiles, giving history, engagement scoring, lapsed donor alerts, segmentation, and a donor portal — everything Neon CRM offers. Plus Kindora adds grant management, case management, accounting, and volunteer tools that Neon One doesn't provide.",
  },
  {
    question: "Can I migrate from Neon One to Kindora?",
    answer:
      "Yes. Kindora supports data import from Neon One and other nonprofit platforms. Our team can help you migrate donor records, fundraising data, and campaign history smoothly.",
  },
  {
    question: "What does Kindora do that Neon One doesn't?",
    answer:
      "Kindora adds grant lifecycle management, client case management, nonprofit accounting with cost allocation, employee management, and a built-in communications hub. Neon One is limited to donor CRM, fundraising, and volunteer management across separate products.",
  },
];

export default function KindoraVsNeonOnePage() {
  return (
    <>
      <Script
        id="vs-neon-one-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Head-to-Head Comparison
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Kindora vs Neon One
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            A complete, feature-by-feature comparison of two leading nonprofit
            management platforms.{" "}
            <strong className="text-gray-900">
              See which one is right for your organization.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Kindora Free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Score Summary */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl border-2 border-[#2563eb] bg-blue-50/50">
              <div className="text-5xl font-black text-[#2563eb] mb-2">{kindoraScore}/{totalFeatures}</div>
              <div className="text-base font-semibold text-gray-900">Kindora</div>
              <div className="text-sm text-gray-500 mt-1">Features supported</div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">vs</div>
              <div className="text-5xl font-black text-gray-400 mb-2">{neononeScore}/{totalFeatures}</div>
              <div className="text-base font-semibold text-gray-900">Neon One</div>
              <div className="text-sm text-gray-500 mt-1">Features supported</div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="text-5xl font-black text-green-500 mb-2">1.75×</div>
              <div className="text-base font-semibold text-gray-900">More Features</div>
              <div className="text-sm text-gray-500 mt-1">Kindora replaces multiple products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-20 lg:py-28 bg-gray-50" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Full Feature Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every feature, side by side
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {totalFeatures} features across {comparisonFeatures.length} categories
              — compared in detail.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-5 text-gray-500 font-medium bg-gray-50 min-w-[250px]">
                    Feature
                  </th>
                  <th className="px-6 py-5 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Limited</span>
                      <span className="text-base">Neon One</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat) => (
                  <Fragment key={cat.category}>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <td colSpan={3} className="px-6 py-3 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, fi) => (
                      <tr
                        key={feature.name}
                        className={`border-b border-gray-100 ${fi % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                      >
                        <td className="px-6 py-3.5 text-gray-700 font-medium pl-10">
                          {feature.name}
                        </td>
                        <td className="px-6 py-3.5 text-center bg-blue-50/50">
                          <FeatureCheck value={feature.kindora} />
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          <FeatureCheckNeonOne value={feature.neonone} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-500 font-semibold text-sm">
                    Total ✅ Features
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50/60">
                    <span className="font-black text-2xl text-[#2563eb]">{kindoraScore}</span>
                    <span className="text-sm text-gray-400">/{totalFeatures}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-black text-2xl text-gray-400">{neononeScore}</span>
                    <span className="text-sm text-gray-400">/{totalFeatures}</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-3" />
                  <td className="px-6 py-3 text-center bg-blue-50/60">
                    <a
                      href="https://cad.spaceaiapp.com/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-xs font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors"
                    >
                      Try Free
                    </a>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="text-xs text-gray-400">Limited features</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </span>
              Full support
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
              </span>
              Partial / limited
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              Not available
            </span>
          </div>
        </div>
      </section>

      {/* Side by Side Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Strengths & Limitations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Neon One Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">N</div>
                <div>
                  <h3 className="font-bold text-gray-900">Neon One</h3>
                  <p className="text-xs font-semibold text-gray-500">What they do well</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Solid donor CRM with engagement tracking",
                  "Good volunteer management module",
                  "Decent event and fundraising tools",
                  "Established in the nonprofit sector",
                  "Email marketing integrations available",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Where they fall short</p>
                <ul className="space-y-2.5">
                  {[
                    "Suite of separate products — not truly all-in-one",
                    "No grant lifecycle management",
                    "No client case management",
                    "No built-in nonprofit accounting",
                    "Quote-based pricing with hidden costs",
                    "Requires onboarding and implementation support",
                  ].map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kindora Card */}
            <div className="rounded-2xl border-2 border-[#2563eb] bg-white p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">K</div>
                <div>
                  <h3 className="font-bold text-gray-900">Kindora</h3>
                  <p className="text-xs font-semibold text-[#2563eb]">Why Kindora wins</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Everything Neon One does — in one platform, not a suite",
                  "No need to buy separate products for CRM, events, and fundraising",
                  "Grant management connects directly to program delivery",
                  "Built-in nonprofit accounting — no QuickBooks needed",
                  "Transparent pricing — no quotes, no hidden fees",
                  "Setup in 30 minutes — no consultants required",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-24 shrink-0 mt-0.5">Neon One best for:</span>
                  <span className="text-sm text-gray-600">Organizations that only need donor CRM and fundraising</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">Kindora best for:</span>
                  <span className="text-sm text-gray-800 font-medium">Nonprofits that need CRM, grants, accounting, and case management in one place</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Switch to Kindora — Free Trial
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions when comparing Kindora to Neon One.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to see the difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Try Kindora free and see why nonprofits are switching from Neon One.
            Everything Neon One does for CRM and fundraising — plus grant management,
            case management, accounting, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              Request a Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free trial · No credit card · Setup in 30 minutes · Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
