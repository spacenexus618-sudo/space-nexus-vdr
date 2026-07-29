import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Deal Pipeline Management | SpaceNexus",
  description: "Manage multiple deals in one workspace. Pipeline view, deal-level access, and consolidated reporting.",
  keywords: [
    "deal management VDR",
    "M&A pipeline software",
    "transaction management",
    "deal tracking VDR",
    "multi-deal data room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/deals",
  },
  openGraph: {
    title: "Deal Pipeline Management | SpaceNexus",
    description:
      "Manage multiple deals in one workspace. Pipeline view, deal-level access, and consolida...",
    url: "https://spacenexus.net/features/deals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deals — Transaction Management & Deal Pipeline | Space Nexus VDR",
    description:
      "Centralized deal management with stage tracking, key metrics, document access, and quick deal creation — all in one interface.",
  },
};

const features = [
  {
    title: "Deal Pipeline Stages",
    description:
      "View all deals organized by progress stage — Discovery, Due Diligence, Negotiation, and Closed. Instantly see where each transaction stands and identify bottlenecks before they delay your deal.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Deal Metrics Overview",
    description:
      "Monitor key performance indicators at a glance — total deals, active deals, closed deals, and total deal value. Stay on top of your pipeline's health without digging through individual records.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Detailed Deal Access",
    description:
      "Access comprehensive information for each deal in one click — documents, organization details, counterparty information, and transaction value. Everything your team needs to make informed decisions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Quick Deal Creation",
    description:
      "Launch new deals in seconds directly from the deals list. Pre-configure workspaces with the right folder structures, permissions, and invited users without navigating multiple setup screens.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    title: "Search & Filter",
    description:
      "Find any deal instantly with full-text search and filters by stage, value, date, or counterparty. Manage large deal portfolios without losing track of any transaction.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
  },
  {
    title: "Archived Deals",
    description:
      "Securely store completed transactions with full audit trails. Access historical deal data and documents anytime while maintaining compliance requirements.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does deal pipeline management work in SpaceNexus?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus organizes every deal by progress stage — Discovery, Due Diligence, Negotiation, and Closed. Each deal acts as a secure workspace containing its own documents, users, Q&A, and analytics. The pipeline view lets you monitor all active transactions at a glance and identify bottlenecks before they delay your close." },
    },
    {
      "@type": "Question",
      name: "What deal metrics can I monitor?",
      acceptedAnswer: { "@type": "Answer", text: "The deal metrics dashboard shows key performance indicators including total deals, active deals, closed deals, total deal value, document counts, and user activity. This gives deal leaders a real-time snapshot of pipeline health without digging through individual records." },
    },
    {
      "@type": "Question",
      name: "Can I manage multiple deals in one workspace?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. SpaceNexus supports unlimited concurrent deals in a single workspace. Each deal has its own isolated data room with independent permissions, document libraries, Q&A threads, and analytics. You can switch between deals instantly and get consolidated reporting across your entire portfolio." },
    },
    {
      "@type": "Question",
      name: "How do I create a new deal in the VDR?",
      acceptedAnswer: { "@type": "Answer", text: "Creating a new deal takes seconds in SpaceNexus. From the Deals interface, click 'Create Deal,' enter the deal name, organization details, counterparty information, and transaction value. You can optionally start from a deal template that pre-configures folder structures, permission groups, and NDA gates for your transaction type." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Deals", item: "https://spacenexus.net/features/deals" },
  ],
};

export default function DealsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="deals-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://spacenexus.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Features",
                item: "https://spacenexus.net/features",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Deals",
                item: "https://spacenexus.net/features/deals",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Transaction Management
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Deals
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Deals Management section allows users to track and manage
                all transactions within the Space Nexus platform. It provides a
                structured overview of ongoing deals, their progress stages, and
                key financial information in a centralized interface.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "View all deals with status stages: Discovery, Due Diligence, Negotiation, and Closed",
                  "Monitor key metrics — total deals, active deals, closed deals, and total deal value",
                  "Access documents, organization details, and transaction value per deal",
                  "Quickly create new deals and manage existing ones",
                  "Search and filter deals for faster navigation and management",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#2563eb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / deals
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-deals.png"
                  alt="SpaceNexus VDR Deals — transaction management workspace"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Deal Pipeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first contact to close — track every transaction, monitor
              deal health, and give your team instant access to the information
              that matters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Full Deal Portfolio, Always in View
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus organizes every transaction by stage and surfaces the
              metrics your team needs — so deal management is fast, clear, and
              always under control.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Open Deals",
                description:
                  "View all active transactions in one list — organized by pipeline stage from Discovery through Closed. See deal names, counterparties, values, and stage at a glance.",
              },
              {
                step: "02",
                title: "Monitor Key Metrics",
                description:
                  "Track total deals, active deals, closed deals, and aggregate deal value from the top of the interface. Spot pipeline imbalances before they become problems.",
              },
              {
                step: "03",
                title: "Access or Create Deals",
                description:
                  "Click any deal to open its full workspace — documents, users, Q&A, and analytics in one place. Or use Quick Actions to create a new deal in seconds.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {step.step.replace("0", "")}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Dashboard — Deal Command Center",
                href: "/features/dashboard",
              },
              {
                title: "Data Room — Secure Document Management",
                href: "/features/data-room",
              },
              {
                title: "Activity & Analytics — Buyer Intelligence",
                href: "/features/activity-analytics",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                  {link.title}
                </p>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-[#2563eb] transition-colors shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Deals in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus centralizes
              your deal pipeline — from first contact to close — in one secure
              platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
