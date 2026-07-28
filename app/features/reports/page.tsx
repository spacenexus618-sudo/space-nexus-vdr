import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Reports & Audit Trail | SpaceNexus",
  description: "Court-admissible audit logs, compliance reports, and engagement analytics. Tamper-evident and exportable.",
  keywords: [
    "VDR audit trail",
    "compliance reporting VDR",
    "data room reports",
    "audit log software",
    "deal reports VDR",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/reports",
  },
  openGraph: {
    title:
      "Reports & Audit Trail | SpaceNexus",
    description:
      "Court-admissible audit logs, compliance reports, and engagement analytics. Tamper-evide...",
    url: "https://spacenexus.net/features/reports",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Reports — Audit Trails, Access Logs & Compliance Reporting | Space Nexus VDR",
    description:
      "Audit-ready reporting for M&A transactions — access logs, document activity, Q&A exports, and engagement reports all in one place.",
  },
};

const features = [
  {
    title: "Multiple Report Types",
    description:
      "Generate the reports that matter — Access Logs, Document Activity, Q&A Export, Audit Trails, and Engagement Reports. Cover every aspect of your transaction from a single reporting interface.",
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
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Document Tracking",
    description:
      "Track document views, downloads, and user interactions with full timestamps. Know exactly which documents were accessed, by whom, and how many times throughout the deal lifecycle.",
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
    title: "Compliance & Audit-Ready Logs",
    description:
      "Maintain immutable audit logs for compliance and security monitoring. Every user action is captured, timestamped, and preserved — ready for regulators, auditors, or legal review.",
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
    title: "Report Management",
    description:
      "View and manage all previously generated reports in one place. Organize reports by type, date, or deal — and re-generate or update them as your transaction progresses.",
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
  {
    title: "Download & Export",
    description:
      "Download or export reports for analysis, documentation, and record keeping. Share with stakeholders, upload to external systems, or store for post-deal compliance archives.",
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
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Transaction Transparency",
    description:
      "Support transparency across all deal parties with shareable, verifiable reports. Demonstrate platform integrity and maintain trust with buyers, sellers, advisors, and legal teams.",
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
      name: "What types of reports can I generate in SpaceNexus?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus generates five key report types: Access Logs (who viewed what and when), Document Activity (views, downloads, and interactions), Q&A Export (all questions and responses), Audit Trails (immutable, timestamped user actions), and Engagement Reports (buyer interest scoring and document heatmaps). All reports are exportable in PDF and CSV formats." },
    },
    {
      "@type": "Question",
      name: "Are SpaceNexus audit logs court-admissible?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. SpaceNexus audit logs are tamper-evident, meaning every document view, download, permission change, and user action is logged with a timestamp and cannot be altered or deleted. These immutable logs meet the evidentiary standards required for litigation, SEC filings, FINRA requirements, and regulatory reviews." },
    },
    {
      "@type": "Question",
      name: "How does document tracking work in the reports?",
      acceptedAnswer: { "@type": "Answer", text: "The document tracking report shows every document access event with full timestamps, user identities, and action types (view, download, print). You can filter by user, document, date range, or deal. This reveals exactly which documents each counterparty reviewed, how many times, and for how long." },
    },
    {
      "@type": "Question",
      name: "Can I export compliance reports for auditors and regulators?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. All SpaceNexus reports — including audit trails, access logs, and Q&A exports — can be exported as PDF or CSV files. The export includes complete metadata with digital signatures, making them suitable for submission to auditors, regulators (SEC, FINRA, FCA), and opposing counsel during litigation." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Reports & Audit Trail", item: "https://spacenexus.net/features/reports" },
  ],
};

export default function ReportsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="reports-faq-schema"
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
                name: "Reports",
                item: "https://spacenexus.net/features/reports",
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
                Audit & Compliance Reporting
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Reports
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Reports section allows users to generate and manage detailed
                reports related to platform activity, document usage, and
                transaction engagement. It helps teams maintain transparency,
                track system activity, and support compliance requirements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Generate Access Logs, Document Activity, Q&A Export, Audit Trails, and Engagement Reports",
                  "Track document views, downloads, and user interactions",
                  "Maintain audit-ready logs for compliance and security monitoring",
                  "View and manage all previously generated reports",
                  "Download or export reports for analysis, documentation, and record keeping",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-rose-600"
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
              <div className="absolute -inset-4 bg-rose-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / reports
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-rports.png"
                  alt="SpaceNexus VDR Reports — compliance and audit reporting interface"
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
              Full Reporting Coverage for Every Deal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From access logs to engagement summaries — generate, manage, and
              export every report your team needs for compliance, governance,
              and stakeholder communication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
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

      {/* Report Types Highlight */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Every Report Type You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for M&A teams that need reliable, audit-ready documentation
              at every stage of the transaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Access Logs",
                description: "Who accessed what and when",
                color: "bg-rose-50 border-rose-100 text-rose-700",
              },
              {
                label: "Document Activity",
                description: "Views, downloads, and versions",
                color: "bg-orange-50 border-orange-100 text-orange-700",
              },
              {
                label: "Q&A Export",
                description: "Full diligence thread export",
                color: "bg-amber-50 border-amber-100 text-amber-700",
              },
              {
                label: "Audit Trails",
                description: "Immutable action records",
                color: "bg-green-50 border-green-100 text-green-700",
              },
              {
                label: "Engagement Reports",
                description: "Buyer participation analysis",
                color: "bg-blue-50 border-blue-100 text-blue-700",
              },
            ].map((type) => (
              <div
                key={type.label}
                className={`p-5 rounded-xl border ${type.color} text-center`}
              >
                <p className="font-semibold text-sm mb-1">{type.label}</p>
                <p className="text-xs opacity-80">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Activity & Analytics — Buyer Intelligence",
                href: "/features/activity-analytics",
              },
              { title: "Q&A Management — Due Diligence", href: "/features/qa" },
              {
                title: "Security & Compliance — Data Protection",
                href: "/features/security-compliance",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-rose-200 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-rose-700 transition-colors">
                  {link.title}
                </p>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-rose-600 transition-colors shrink-0 ml-2"
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
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-rose-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Always Audit-Ready
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Book a demo and see how Space Nexus keeps every transaction
              documented, every action logged, and every report ready when you
              need it.
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
