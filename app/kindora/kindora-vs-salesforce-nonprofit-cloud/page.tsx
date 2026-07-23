import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Kindora vs Salesforce Nonprofit Cloud | Complete Nonprofit Software Comparison 2026",
  description:
    "Kindora vs Salesforce Nonprofit Cloud: a head-to-head comparison of donor CRM, grant tracking, case management, accounting, and more. See which nonprofit platform is right for you.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/kindora-vs-salesforce-nonprofit-cloud",
  },
  openGraph: {
    title: "Kindora vs Salesforce Nonprofit Cloud — Complete Comparison 2026",
    description:
      "Head-to-head comparison of Kindora and Salesforce Nonprofit Cloud across donor CRM, grants, case management, accounting, and more.",
    url: "https://spacenexus.net/kindora/kindora-vs-salesforce-nonprofit-cloud",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Kindora vs Salesforce Nonprofit Cloud Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora vs Salesforce Nonprofit Cloud — Complete Comparison 2026",
    description:
      "Which nonprofit software is better? See how Kindora and Salesforce Nonprofit Cloud compare across every feature that matters.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "kindora vs salesforce nonprofit cloud",
    "salesforce nonprofit cloud vs kindora",
    "kindora salesforce comparison",
    "nonprofit software comparison",
    "salesforce nonprofit cloud review",
    "kindora review",
    "best nonprofit crm 2026",
    "salesforce pricing vs kindora",
    "nonprofit software comparison chart",
    "switch from salesforce nonprofit",
    "kindora vs salesforce pricing",
    "affordable nonprofit software",
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
        "All-in-one nonprofit management software — donor CRM, grant tracking, case management, accounting, and communications. Compared to Salesforce Nonprofit Cloud.",
      url: "https://spacenexus.net/kindora/kindora-vs-salesforce-nonprofit-cloud",
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
          name: "Which is better, Kindora or Salesforce Nonprofit Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your organization. Salesforce Nonprofit Cloud is a powerful enterprise CRM with deep customization — but it requires certified consultants, expensive per-user licenses, and months of setup. Kindora is an all-in-one nonprofit platform that includes donor CRM, grant tracking, case management, accounting, and volunteer management in one affordable subscription. If you're a large enterprise with a Salesforce admin team, Salesforce works. If you're a small to mid-sized nonprofit that needs powerful features without the complexity, Kindora is the better choice.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Salesforce Nonprofit Cloud on pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce Nonprofit Cloud charges $60–$150+ per user per month, plus implementation costs of $10,000–$50,000+ with consultants. Kindora offers transparent, affordable flat-rate pricing with no per-user fees, no implementation costs, and setup in 30 minutes. You save thousands per year while getting the same core nonprofit features.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora have the same donor CRM features as Salesforce Nonprofit Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes donor profiles, giving history, engagement scoring, lapsed donor alerts, donor segmentation, and a donor portal — all features Salesforce Nonprofit Cloud offers. The difference is Kindora requires no configuration, consultants, or additional add-ons to use them.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from Salesforce Nonprofit Cloud to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Salesforce and other nonprofit platforms. Our team can help you migrate donor records, grant data, case files, and program information smoothly without losing any historical data.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do that Salesforce Nonprofit Cloud doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides built-in nonprofit accounting with cost allocation, grant lifecycle management from prospect to compliance reporting, a built-in communications hub, and volunteer management — all without requiring additional Salesforce add-ons, third-party integrations, or custom development.",
          },
        },
        {
          "@type": "Question",
          name: "Is Salesforce Nonprofit Cloud worth the cost for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For large nonprofits with dedicated Salesforce admin teams and enterprise budgets, Salesforce can be powerful. For most small to mid-sized nonprofits, the total cost of ownership (licenses + consultants + training + maintenance) far exceeds what they need. Kindora delivers the same essential features at a fraction of the cost.",
          },
        },
      ],
    },
  ],
};

type FeatureValue = boolean | "partial";

const comparisonFeatures: {
  category: string;
  features: { name: string; kindora: FeatureValue; salesforce: FeatureValue }[];
}[] = [
  {
    category: "Donor Management",
    features: [
      { name: "Donor Profiles & CRM", kindora: true, salesforce: true },
      { name: "Giving History Tracking", kindora: true, salesforce: true },
      { name: "Engagement Scoring", kindora: true, salesforce: true },
      { name: "Lapsed Donor Alerts", kindora: true, salesforce: true },
      { name: "Donor Segmentation", kindora: true, salesforce: true },
      { name: "Donor Portal", kindora: true, salesforce: false },
    ],
  },
  {
    category: "Fundraising",
    features: [
      { name: "Campaign Management", kindora: true, salesforce: true },
      { name: "Peer-to-Peer Fundraising", kindora: true, salesforce: false },
      { name: "Event Management", kindora: true, salesforce: false },
      { name: "Online Donation Forms", kindora: true, salesforce: false },
      { name: "Text-to-Give", kindora: true, salesforce: false },
      { name: "Recurring Donation Management", kindora: true, salesforce: true },
    ],
  },
  {
    category: "Grant Management",
    features: [
      { name: "Grant Lifecycle Tracking", kindora: true, salesforce: "partial" },
      { name: "Grant Application Management", kindora: true, salesforce: "partial" },
      { name: "Grant Receipts & Deadlines", kindora: true, salesforce: "partial" },
      { name: "Grant Compliance Reporting", kindora: true, salesforce: "partial" },
    ],
  },
  {
    category: "Case Management",
    features: [
      { name: "Client Intake & Enrollment", kindora: true, salesforce: true },
      { name: "Service Delivery Tracking", kindora: true, salesforce: true },
      { name: "Outcome Measurement", kindora: true, salesforce: true },
      { name: "Program Reporting", kindora: true, salesforce: true },
      { name: "Configurable Workflows", kindora: true, salesforce: true },
      { name: "Case Notes & Documentation", kindora: true, salesforce: true },
    ],
  },
  {
    category: "Financial Management",
    features: [
      { name: "Nonprofit Accounting", kindora: true, salesforce: false },
      { name: "Cost Allocation", kindora: true, salesforce: false },
      { name: "Chart of Accounts & Budgets", kindora: true, salesforce: false },
      { name: "Expense & Bill Management", kindora: true, salesforce: false },
      { name: "Board Financial Reports", kindora: true, salesforce: false },
    ],
  },
  {
    category: "People & Operations",
    features: [
      { name: "Volunteer Management", kindora: true, salesforce: "partial" },
      { name: "Employee Management", kindora: true, salesforce: true },
      { name: "Communications Hub", kindora: true, salesforce: "partial" },
      { name: "File Attachments & Documents", kindora: true, salesforce: true },
    ],
  },
  {
    category: "Reporting & Analytics",
    features: [
      { name: "Custom Dashboards", kindora: true, salesforce: true },
      { name: "Financial Reports", kindora: true, salesforce: false },
      { name: "Program Impact Reports", kindora: true, salesforce: true },
      { name: "Grant Compliance Reports", kindora: true, salesforce: "partial" },
      { name: "Export to PDF & Excel", kindora: true, salesforce: true },
      { name: "Scheduled Report Delivery", kindora: true, salesforce: false },
    ],
  },
  {
    category: "Usability & Support",
    features: [
      { name: "Easy Setup (No Consultants)", kindora: true, salesforce: false },
      { name: "Role-Based Access Control", kindora: true, salesforce: true },
      { name: "Mobile Friendly", kindora: true, salesforce: true },
      { name: "Priority Support", kindora: true, salesforce: true },
      { name: "Free Setup & Onboarding", kindora: true, salesforce: false },
      { name: "No Per-User Licensing", kindora: true, salesforce: false },
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

function FeatureCheckSalesforce({ value }: { value: FeatureValue }) {
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

const salesforceScore = comparisonFeatures.reduce((acc, cat) => {
  return acc + cat.features.filter((f) => f.salesforce === true).length;
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
    question: "Which is better, Kindora or Salesforce Nonprofit Cloud?",
    answer:
      "It depends on your organization. Salesforce Nonprofit Cloud is a powerful enterprise CRM with deep customization — but it requires certified consultants, expensive per-user licenses, and months of setup. Kindora is an all-in-one nonprofit platform that includes donor CRM, grant tracking, case management, accounting, and volunteer management in one affordable subscription. If you're a large enterprise with a Salesforce admin team, Salesforce works. If you're a small to mid-sized nonprofit that needs powerful features without the complexity, Kindora is the better choice.",
  },
  {
    question: "How does Kindora compare to Salesforce Nonprofit Cloud on pricing?",
    answer:
      "Salesforce Nonprofit Cloud charges $60–$150+ per user per month, plus implementation costs of $10,000–$50,000+ with consultants. Kindora offers transparent, affordable flat-rate pricing with no per-user fees, no implementation costs, and setup in 30 minutes. You save thousands per year while getting the same core nonprofit features.",
  },
  {
    question: "Does Kindora have the same donor CRM features as Salesforce Nonprofit Cloud?",
    answer:
      "Yes. Kindora includes donor profiles, giving history, engagement scoring, lapsed donor alerts, donor segmentation, and a donor portal — all features Salesforce Nonprofit Cloud offers. The difference is Kindora requires no configuration, consultants, or additional add-ons to use them.",
  },
  {
    question: "Can I migrate from Salesforce Nonprofit Cloud to Kindora?",
    answer:
      "Yes. Kindora supports data import from Salesforce and other nonprofit platforms. Our team can help you migrate donor records, grant data, case files, and program information smoothly without losing any historical data.",
  },
  {
    question: "What does Kindora do that Salesforce Nonprofit Cloud doesn't?",
    answer:
      "Kindora provides built-in nonprofit accounting with cost allocation, grant lifecycle management from prospect to compliance reporting, a built-in communications hub, and volunteer management — all without requiring additional Salesforce add-ons, third-party integrations, or custom development.",
  },
  {
    question: "Is Salesforce Nonprofit Cloud worth the cost for nonprofits?",
    answer:
      "For large nonprofits with dedicated Salesforce admin teams and enterprise budgets, Salesforce can be powerful. For most small to mid-sized nonprofits, the total cost of ownership (licenses + consultants + training + maintenance) far exceeds what they need. Kindora delivers the same essential features at a fraction of the cost.",
  },
];

export default function KindoraVsSalesforceNonprofitCloudPage() {
  return (
    <>
      <Script
        id="vs-salesforce-nonprofit-cloud-jsonld"
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
            Kindora vs Salesforce Nonprofit Cloud
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
              <div className="text-5xl font-black text-gray-400 mb-2">{salesforceScore}/{totalFeatures}</div>
              <div className="text-base font-semibold text-gray-900">Salesforce NPC</div>
              <div className="text-sm text-gray-500 mt-1">Features supported</div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="text-5xl font-black text-green-500 mb-2">60%</div>
              <div className="text-base font-semibold text-gray-900">Cost Savings</div>
              <div className="text-sm text-gray-500 mt-1">No per-user fees or consultants</div>
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
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Enterprise</span>
                      <span className="text-base">Salesforce NPC</span>
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
                          <FeatureCheckSalesforce value={feature.salesforce} />
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
                    <span className="font-black text-2xl text-gray-400">{salesforceScore}</span>
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
                    <span className="text-xs text-gray-400">$60–$150+/user/mo</span>
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
              Partial / requires add-on
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
            {/* Salesforce Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">SF</div>
                <div>
                  <h3 className="font-bold text-gray-900">Salesforce Nonprofit Cloud</h3>
                  <p className="text-xs font-semibold text-gray-500">What they do well</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Extremely powerful and customizable CRM platform",
                  "Massive ecosystem of integrations and add-ons",
                  "Advanced reporting and analytics capabilities",
                  "Enterprise-grade security and scalability",
                  "Large community and extensive documentation",
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
                    "Complex — requires certified Salesforce consultants",
                    "Expensive: $60–$150+ per user per month",
                    "Weeks to months of implementation time",
                    "No built-in nonprofit accounting or cost allocation",
                    "Volunteer management requires custom development",
                    "Overwhelming for small to mid-sized teams",
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
                  "All-in-one: donor CRM, grants, case mgmt, accounting, volunteers",
                  "Ready in 30 minutes — no consultants or training needed",
                  "No per-user licensing — one flat rate for your whole team",
                  "Built-in nonprofit accounting with cost allocation",
                  "Grant lifecycle management from prospect to compliance",
                  "Communications hub included — no add-ons required",
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
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-24 shrink-0 mt-0.5">Salesforce best for:</span>
                  <span className="text-sm text-gray-600">Large enterprises with dedicated Salesforce admin teams</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">Kindora best for:</span>
                  <span className="text-sm text-gray-800 font-medium">Small to mid-sized nonprofits that need powerful features without the complexity</span>
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
            <p className="text-lg text-gray-600">Common questions when comparing Kindora to Salesforce Nonprofit Cloud.</p>
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
            Try Kindora free and see why nonprofits are switching from Salesforce
            Nonprofit Cloud. Everything Salesforce does — without the complexity,
            cost, or consultants.
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
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free trial · No credit card · Setup in 30 minutes · Cancel anytime
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
