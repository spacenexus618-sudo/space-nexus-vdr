import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Software | SpaceNexus",
  description: "Secure data room software with bulk upload, AI auto-categorization, granular permissions, and audit logs.",
  keywords: [
    "data room software",
    "virtual data room",
    "secure document storage",
    "AI document categorization",
    "data room platform",
    "document management VDR",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/data-room",
  },
  openGraph: {
    title: "Data Room Software | SpaceNexus",
    description:
      "Secure data room software with bulk upload, AI auto-categorization, granular permission...",
    url: "https://spacenexus.net/features/data-room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Data Room — Document Management & AI Redaction | Space Nexus VDR",
    description:
      "Store, organize, and protect transaction documents with AI redaction, OCR search, encryption, and watermarking — all in one secure environment.",
  },
};

const features = [
  {
    title: "Document Upload & Organization",
    description:
      "Upload and organize documents within secure, structured folders. Maintain a clean hierarchy that mirrors your deal's due diligence checklist and gives every team member instant access to the right files.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: "Storage & Usage Monitoring",
    description:
      "Monitor total document count, storage usage, and folder structure at a glance. Stay informed on data room capacity and track how your storage is distributed across deals and folders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Redaction",
    description:
      "Automatically detect and hide sensitive data using AI-powered redaction. Protect personally identifiable information, financial figures, and confidential terms before sharing documents with external parties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
  {
    title: "OCR Search",
    description:
      "Find any information within scanned documents or PDFs using OCR-powered full-text search. Quickly locate specific clauses, figures, or terms across hundreds of files without manually opening each document.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Encryption & Watermarking",
    description:
      "Protect every document with encryption at rest and dynamic watermarking. Automatically apply visible or invisible watermarks containing viewer details to deter unauthorized distribution.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Redacted Document Management",
    description:
      "Manage and review redacted documents securely within the platform. Track which documents have been redacted, restore originals when needed, and maintain a full audit trail of all redaction actions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
      name: "How does SpaceNexus handle document upload and organization?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus provides bulk upload support for 100+ file types with AI Auto-Categorization that automatically sorts documents into the correct folder categories. The platform maintains a clean folder hierarchy that mirrors your deal's due diligence checklist, giving every team member instant access to the right files." },
    },
    {
      "@type": "Question",
      name: "What is OCR-powered full-text search in a VDR?",
      acceptedAnswer: { "@type": "Answer", text: "OCR (Optical Character Recognition) full-text search allows you to find specific clauses, financial figures, or terms within scanned documents and PDFs. SpaceNexus uses OCR to make every document fully searchable, so you can locate critical information across hundreds of files without manually opening each one." },
    },
    {
      "@type": "Question",
      name: "How does dynamic watermarking protect my documents?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus applies dynamic watermarks that display the viewer's name, email, IP address, and access timestamp on every document page. Watermarks are rendered server-side and cannot be removed, deterring unauthorized sharing and providing forensic traceability if documents are leaked." },
    },
    {
      "@type": "Question",
      name: "What encryption does SpaceNexus use for document security?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus uses AES-256 encryption at rest and TLS 1.3 encryption in transit to protect all documents. Combined with SOC 2 Type II certification and ISO 27001 compliance, this provides bank-grade security for your most sensitive transaction documents throughout the entire deal lifecycle." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Data Room", item: "https://spacenexus.net/features/data-room" },
  ],
};

export default function DataRoomPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="data-room-faq-schema"
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
              { "@type": "ListItem", position: 3, name: "Secure Data Room", item: "https://spacenexus.net/features/data-room" },
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
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                Document Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Secure Data Room
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Secure Data Room provides a centralized environment for storing, organizing,
                and managing transaction documents. It enables secure document sharing while
                supporting AI-powered tools to improve document management and protect sensitive information.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Upload and organize documents within secure folders",
                  "Monitor total documents, storage usage, and folder structure",
                  "Use AI-powered redaction to automatically hide sensitive data",
                  "Support OCR search to find information within documents quickly",
                  "Ensure document protection through encryption and watermarking",
                  "Manage and review redacted documents securely within the platform",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / data-room
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/secure%20data%20room.jpeg"
                  alt="SpaceNexus VDR Secure Data Room — document management workspace"
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
              Everything You Need to Manage Transaction Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Store, protect, and share deal documents with confidence — from initial upload
              to final close, with AI tools that keep sensitive information secure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
              Secure Documents from Upload to Close
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus protects every stage of document management — structured organization,
              AI-powered protection, and controlled sharing so nothing sensitive leaves unguarded.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload & Organize",
                description:
                  "Upload documents into structured secure folders. Build a clean hierarchy aligned to your due diligence checklist so every file is easy to find and access.",
              },
              {
                step: "02",
                title: "Protect & Redact",
                description:
                  "Apply AI redaction to hide sensitive data automatically. Add watermarks and encryption before sharing documents with buyers, legal teams, or external advisors.",
              },
              {
                step: "03",
                title: "Search & Manage",
                description:
                  "Use OCR search to find content across all documents instantly. Monitor storage, review redacted files, and maintain a complete audit trail of all document activity.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "VDR Data Room — Virtual Data Room", href: "/features/vdr-data-room" },
              { title: "Users & Permissions — Access Control", href: "/features/users-permissions" },
              { title: "Security & Compliance — Enterprise Protection", href: "/features/security-compliance" },
              { title: "Activity & Analytics — Buyer Intelligence", href: "/features/activity-analytics" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See the Secure Data Room in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus protects your deal documents
              with AI redaction, encryption, and granular access controls.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        </div>
      </section>
    </main>
  );
}
