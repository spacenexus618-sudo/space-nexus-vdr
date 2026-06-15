import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Secure Document Exchange for Law Firms — Attorney-Grade File Sharing | SpaceNexus",
  description:
    "Exchange confidential legal documents securely between counsel, clients, and opposing parties. SpaceNexus provides privilege-protected sharing, ethical walls, dynamic watermarking, and SOC 2 certified security built for attorneys.",
  alternates: {
    canonical:
      "https://spacenexus.net/solutions/law-firm-document-exchange",
  },
  keywords: [
    "law firm secure document exchange",
    "secure file sharing for law firms",
    "attorney document exchange platform",
    "legal file sharing solution",
    "secure document sharing lawyers",
    "law firm client portal",
    "privileged document exchange",
    "legal document management system",
    "attorney-client file sharing",
    "secure legal document transfer",
  ],
  openGraph: {
    title:
      "Secure Document Exchange for Law Firms — Attorney-Grade File Sharing",
    description:
      "Exchange confidential legal documents between counsel, clients, and opposing parties with privilege protection, ethical walls, and SOC 2 certified security.",
    url: "https://spacenexus.net/solutions/law-firm-document-exchange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Document Exchange for Law Firms | SpaceNexus",
    description:
      "Privilege-protected document exchange for attorneys. SOC 2, ISO 27001, and AES-256 security.",
  },
};

const exchangeWorkflows = [
  {
    step: "01",
    title: "Create a Secure Exchange Room",
    description:
      "Set up a dedicated exchange workspace in minutes — not days. Choose from pre-built templates for M&A closings, litigation holds, regulatory filings, or custom matter structures. Each room gets its own access policies and audit trail.",
    features: [
      "One-click room creation from templates",
      "Custom folder structures per matter type",
      "Isolated workspace per deal or case",
    ],
    color: "blue",
  },
  {
    step: "02",
    title: "Invite Parties with Granular Permissions",
    description:
      "Add co-counsel, opposing counsel, clients, and third-party experts — each with role-specific access. Control who sees what at the document, folder, or page level. Enforce ethical walls automatically between conflict parties.",
    features: [
      "Per-document permission controls",
      "Automatic ethical wall enforcement",
      "NDA click-through gates for external parties",
    ],
    color: "violet",
  },
  {
    step: "03",
    title: "Exchange Documents with Full Traceability",
    description:
      "Upload, share, and version documents with immutable audit logs on every action. Dynamic watermarks identify the viewer on every page. View-only mode with screenshot protection prevents unauthorized copying or redistribution.",
    features: [
      "Dynamic watermarks with viewer identity",
      "View-only mode with screen shield",
      "Immutable audit trail for every action",
    ],
    color: "emerald",
  },
  {
    step: "04",
    title: "Manage Q&A and Close the Matter",
    description:
      "Run structured Q&A threads linked to specific documents — replacing email chains with trackable, deadline-managed conversations. When the matter closes, archive the room with a complete forensic record for regulatory retention.",
    features: [
      "Document-linked Q&A threads",
      "SLA deadline tracking and escalation",
      "One-click archival with retention policies",
    ],
    color: "amber",
  },
];

const comparisonRows = [
  { feature: "End-to-end encryption (AES-256 + TLS 1.3)", spacenexus: true, email: false, consumer: false },
  { feature: "Attorney-client privilege protection", spacenexus: true, email: false, consumer: false },
  { feature: "Dynamic watermarking on every page", spacenexus: true, email: false, consumer: false },
  { feature: "Ethical wall enforcement", spacenexus: true, email: false, consumer: false },
  { feature: "Immutable, court-admissible audit logs", spacenexus: true, email: false, consumer: false },
  { feature: "Granular per-document permissions", spacenexus: true, email: false, consumer: "Partial" },
  { feature: "View-only mode with screenshot protection", spacenexus: true, email: false, consumer: false },
  { feature: "NDA click-through gate", spacenexus: true, email: false, consumer: false },
  { feature: "Document-linked Q&A threads", spacenexus: true, email: false, consumer: false },
  { feature: "SOC 2 Type II certified", spacenexus: true, email: false, consumer: "Varies" },
  { feature: "IP whitelisting & geo-restrictions", spacenexus: true, email: false, consumer: false },
  { feature: "Automatic version control", spacenexus: true, email: false, consumer: true },
  { feature: "Bulk upload with folder structure", spacenexus: true, email: false, consumer: true },
  { feature: "Custom retention & archival policies", spacenexus: true, email: false, consumer: false },
];

const useCases = [
  {
    title: "M&A Deal Closings",
    description:
      "Exchange closing binders, signature pages, and post-closing deliverables between buyer counsel, seller counsel, and corporate parties — with full version control and audit trails.",
    icon: "🤝",
  },
  {
    title: "Litigation Document Production",
    description:
      "Securely produce responsive documents to opposing counsel under protective orders. Track exactly who accessed what, when, and from where — meeting Rule 26 disclosure requirements.",
    icon: "⚖️",
  },
  {
    title: "Regulatory Filings & Compliance",
    description:
      "Share sensitive compliance documents with regulators (SEC, FTC, DOJ) through a controlled, auditable channel. Maintain privilege logs and redaction records in one workspace.",
    icon: "📋",
  },
  {
    title: "Client-Attorney Portal",
    description:
      "Provide clients with a branded, secure portal to upload documents, review case materials, and communicate with their legal team — replacing insecure email attachments.",
    icon: "🏛️",
  },
  {
    title: "Co-Counsel Collaboration",
    description:
      "Coordinate between multiple law firms on complex matters. Ethical walls prevent information leakage between conflict parties while enabling seamless collaboration within authorized teams.",
    icon: "👥",
  },
  {
    title: "Due Diligence Reviews",
    description:
      "Host virtual data rooms for buy-side or sell-side legal review. Manage hundreds of diligence requests through structured Q&A workflows with SLA tracking and automatic notifications.",
    icon: "🔍",
  },
];

const pageFaqs = [
  {
    question: "What is a secure document exchange for law firms?",
    answer:
      "A secure document exchange is a purpose-built platform that allows attorneys to share confidential documents with clients, co-counsel, opposing parties, and regulators through encrypted, access-controlled channels. Unlike email or consumer cloud storage, it provides privilege protection, ethical walls, immutable audit logs, and compliance certifications (SOC 2, ISO 27001) required for legal work.",
  },
  {
    question:
      "How is SpaceNexus different from email or Dropbox for legal document sharing?",
    answer:
      "Email attachments are unencrypted, untrackable, and easily forwarded. Consumer tools like Dropbox and Google Drive lack privilege protection, ethical walls, watermarking, and court-admissible audit trails. SpaceNexus provides AES-256 encryption, per-document permission controls, dynamic watermarks, view-only mode with screenshot protection, and immutable audit logs — all required for attorney-grade document exchange.",
  },
  {
    question:
      "Does SpaceNexus support ethical wall enforcement between conflict parties?",
    answer:
      "Yes. SpaceNexus automatically enforces ethical walls by isolating document access between parties that have been flagged as conflicted. Attorneys from different matters or opposing sides cannot view each other's documents, even within the same firm workspace. All ethical wall configurations are logged for compliance.",
  },
  {
    question: "Can opposing counsel access documents through SpaceNexus?",
    answer:
      "Yes — with full control. You can invite opposing counsel to specific folders or documents with view-only permissions, NDA click-through requirements, watermarking, and time-limited access. Every action they take is logged in an immutable audit trail, providing forensic evidence of what was accessed and when.",
  },
  {
    question:
      "What compliance certifications does SpaceNexus hold for legal use?",
    answer:
      "SpaceNexus is SOC 2 Type II certified (audited annually), ISO 27001 accredited, GDPR compliant, and supports SEC Rule 17a-4 retention requirements. We use AES-256 encryption at rest, TLS 1.3 in transit, and offer customer-managed encryption keys on Enterprise plans. Data residency options include US and EU regions.",
  },
  {
    question: "How quickly can a law firm set up a document exchange room?",
    answer:
      "Most law firms have their first exchange room live in under 2 hours. SpaceNexus includes pre-built templates for M&A closings, litigation holds, and regulatory filings. Bulk upload support and AI-powered document indexing mean you can go from signup to sharing documents the same day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
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
      name: "Solutions",
      item: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Law Firm Document Exchange",
      item: "https://spacenexus.net/solutions/law-firm-document-exchange",
    },
  ],
};

function Check() {
  return (
    <svg className="w-5 h-5 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const stepColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-600" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", dot: "bg-violet-600" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-600" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-600" },
};

export default function LawFirmDocumentExchangePage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="law-firm-exchange-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700 mb-6">
              <span>⚖️</span> Legal Document Exchange
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Document Exchange{" "}
              <span className="text-[#2563eb]">for Law Firms</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Exchange confidential documents between counsel, clients, and
              opposing parties through an encrypted, privilege-protected platform
              with ethical wall enforcement, dynamic watermarking, and
              court-admissible audit trails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/features/security-compliance"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-400 transition-all"
              >
                Security & Compliance
              </Link>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "SOC 2 Type II", icon: "🛡️" },
                { label: "ISO 27001", icon: "✅" },
                { label: "GDPR Ready", icon: "🇪🇺" },
                { label: "AES-256 Encryption", icon: "🔐" },
                { label: "SEC Compliant", icon: "📜" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700 border border-gray-200"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Need Dedicated Exchange Platforms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Attorneys Need a Dedicated Document Exchange Platform
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Every day, law firms exchange thousands of confidential documents — merger agreements,
              due diligence materials, privilege logs, litigation holds, regulatory filings, and
              client communications. Most firms still rely on email attachments or consumer cloud
              storage tools that were never designed for legal work.
            </p>
            <p>
              The consequences of using the wrong tool are severe: email attachments can be
              forwarded to unauthorized parties without detection, consumer cloud storage lacks
              court-admissible audit trails, and neither provides the ethical wall enforcement
              or privilege protection that legal ethics rules demand.
            </p>
            <p>
              A purpose-built legal document exchange platform eliminates these risks. SpaceNexus
              provides end-to-end encryption, granular per-document permissions, dynamic watermarks
              that identify every viewer, and immutable audit logs that meet SEC, FINRA, and state
              bar compliance requirements — so attorneys can exchange documents with confidence
              that privilege is preserved and every access is recorded.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Workflow */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Law Firms Exchange Documents on SpaceNexus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From room setup to matter archival — a secure, auditable workflow in four steps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {exchangeWorkflows.map((step) => {
              const c = stepColors[step.color];
              return (
                <div
                  key={step.step}
                  className={`${c.bg} border ${c.border} rounded-2xl p-6 lg:p-8`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-8 h-8 rounded-full ${c.dot} text-white text-sm font-bold flex items-center justify-center`}
                    >
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SpaceNexus vs. Email vs. Consumer Cloud Storage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why attorneys are replacing email attachments and Dropbox with a
              purpose-built legal document exchange platform.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-8 text-sm font-semibold text-gray-500 uppercase tracking-wider w-2/5">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-[#2563eb]">
                    SpaceNexus
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-gray-500">
                    Email
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-bold text-gray-500">
                    Dropbox / GDrive
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="py-3 pr-8 text-sm text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.spacenexus === true ? <Check /> : <span className="text-sm text-gray-600">{String(row.spacenexus)}</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.email === true ? <Check /> : row.email === false ? <Cross /> : <span className="text-sm text-gray-500">{String(row.email)}</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.consumer === true ? <Check /> : row.consumer === false ? <Cross /> : <span className="text-sm text-gray-500">{String(row.consumer)}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Every Legal Document Exchange Scenario
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From M&A closings to client portals — SpaceNexus adapts to your firm&#39;s workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{uc.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📌 Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Data Rooms for Law Firms", href: "/industries/law-firms", desc: "Industry overview" },
              { title: "VDR Security Checklist", href: "/blog/vdr-security-what-to-look-for", desc: "10-point checklist" },
              { title: "Secure Document Sharing", href: "/solutions/secure-document-sharing-for-legal", desc: "Platform features" },
              { title: "Security & Compliance", href: "/features/security-compliance", desc: "SOC 2, ISO 27001" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#2563eb]/30 hover:bg-blue-50/50 transition-all"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">
                    {link.title}
                  </p>
                  <p className="text-xs text-gray-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure Document Exchange FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about SpaceNexus for law firm document exchange.
            </p>
          </div>
          <div className="space-y-4">
            {pageFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Set Up Your Secure Legal Exchange Room Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Most law firms go live in under 2 hours. SOC 2 certified, privilege-protected,
              and built for the way attorneys actually work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
