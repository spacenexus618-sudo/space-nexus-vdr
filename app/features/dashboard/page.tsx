import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Data Room Dashboard | SpaceNexus",
  description: "Real-time pipeline visibility, deal health, document activity, and Q&A status in one dashboard.",
  keywords: [
    "data room dashboard",
    "deal pipeline tracking",
    "VDR dashboard",
    "document activity tracking",
    "deal monitoring software",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/dashboard",
  },
  openGraph: {
    title: "Data Room Dashboard | SpaceNexus",
    description:
      "Real-time pipeline visibility, deal health, document activity, and Q&A status in one da...",
    url: "https://spacenexus.net/features/dashboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDR Dashboard — Deal Command Center | Space Nexus",
    description:
      "Centralized VDR dashboard with real-time deal pipeline tracking, AI features, and one-click access to every deal module.",
  },
};

const features = [
  {
    title: "Unified Deal Overview",
    description:
      "View active deals, document counts, open Q&A requests, and invited users in a single consolidated dashboard. No switching between modules to understand deal status.",
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Redaction",
    description:
      "Automatically detect and redact sensitive information — PII, financial data, legal identifiers — before documents are shared with external parties. Always-on protection running silently in the background.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "AI Auto-Categorization",
    description:
      "Uploaded documents are analyzed and automatically sorted into the correct folder categories — financial statements, legal agreements, HR records, and more — saving hours of manual organization.",
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
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    title: "One-Click Module Access",
    description:
      "Jump directly to Data Room, Q&A, Reports, or Settings from the dashboard without navigating through multiple menus. Every critical function is one click away, keeping deal teams focused.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Deal Pipeline",
    description:
      "Track each transaction across its lifecycle stages — from initial setup through due diligence, negotiation, and close. Identify bottlenecks and at-risk deals before they become problems.",
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
    title: "Quick Actions",
    description:
      "Create new deals, upload files, invite users, and send Q&A responses without leaving the dashboard. Quick action shortcuts reduce the time from decision to execution.",
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
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the SpaceNexus VDR dashboard show?",
      acceptedAnswer: { "@type": "Answer", text: "The SpaceNexus dashboard provides a centralized command center showing active deals, document counts, open Q&A requests, and invited users in a single consolidated view. You can monitor deal pipeline stages, track AI redaction and auto-categorization activity, and access every deal module without switching between screens." },
    },
    {
      "@type": "Question",
      name: "How does AI auto-categorization work in the dashboard?",
      acceptedAnswer: { "@type": "Answer", text: "When documents are uploaded, SpaceNexus AI analyzes their content and automatically sorts them into the correct folder categories — financial statements, legal agreements, HR records, intellectual property, and more. This saves hours of manual organization and ensures consistent folder structures across all deals." },
    },
    {
      "@type": "Question",
      name: "How does the pipeline tracker help deal teams?",
      acceptedAnswer: { "@type": "Answer", text: "The pipeline tracker displays all deals organized by progress stage — Discovery, Due Diligence, Negotiation, and Closed. You can instantly see where each transaction stands, identify bottlenecks, and drill into any deal's documents, metrics, and counterparty activity with one click." },
    },
    {
      "@type": "Question",
      name: "Can I monitor Q&A activity from the dashboard?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The dashboard shows open Q&A requests by category, response status, and assigned subject matter experts. You can track overdue questions, monitor departmental workloads, and jump directly into the Q&A interface to manage responses from the command center." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Dashboard", item: "https://spacenexus.net/features/dashboard" },
  ],
};

export default function DashboardPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="dashboard-faq-schema"
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
                name: "VDR Dashboard",
                item: "https://spacenexus.net/features/dashboard",
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
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
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
                Deal Command Center
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                VDR Dashboard
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Deal Command Center Dashboard provides a centralized
                overview of all deal activities within the Space Nexus platform,
                allowing teams to monitor transactions, documents, and
                collaboration in real time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Active deals, documents, Q&A requests, and users in one place",
                  "AI-powered redaction and auto-categorization for secure document handling",
                  "One-click access to Data Room, Q&A, Reports, and Settings",
                  "Real-time deal pipeline tracking across transaction stages",
                  "Quick actions for creating deals and uploading files",
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

            {/* Right: Screenshot placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / dashboard
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-dashboard.png"
                  alt="SpaceNexus VDR Dashboard — deal command center with AI features"
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
              Everything Your Deal Team Needs at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The VDR Dashboard puts every deal metric, AI tool, and quick
              action within reach — so your team spends less time navigating and
              more time closing deals.
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
              Your Deal Pipeline, Always in Focus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the moment you log in, the Space Nexus dashboard surfaces
              what matters — active deal counts, pending Q&As, document
              activity, and AI task status.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Open the Dashboard",
                description:
                  "See every active deal, total document count, open Q&A requests, and invited user count — all on the landing screen after login.",
              },
              {
                step: "02",
                title: "AI Works in the Background",
                description:
                  "As documents are uploaded, AI Redaction and Auto-Categorization process them automatically. No manual triggers needed — status is visible on the dashboard.",
              },
              {
                step: "03",
                title: "Navigate or Act in One Click",
                description:
                  "Jump to any deal's Data Room, Q&A inbox, Reports, or Settings directly from the dashboard. Or use Quick Actions to create a deal, upload files, or invite a user.",
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
                title: "Deals — Transaction Management",
                href: "/features/deals",
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
                  className="w-4 h-4 text-gray-400 group-hover:text-[#2563eb] transition-colors shrink-0 ml-2"
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
              See the Dashboard in Your Deal
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how the Space Nexus deal
              command center gives your team real-time visibility across every
              transaction.
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
