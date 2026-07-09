import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "M&A Document Sharing Platform | SpaceNexus",
  description: "Secure deal room for investment banks, PE firms, and corporate development. SOC 2 encryption, granular permissions, and real-time buyer analytics.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/ma-document-sharing",
  },
  openGraph: {
    title: "M&A Document Sharing Platform | SpaceNexus",
    description:
      "Secure deal room for investment banks, PE firms, and corporate development. SOC 2 encry...",
    url: "https://spacenexus.net/solutions/ma-document-sharing",
  },
  keywords: [
    "M&A document sharing",
    "secure deal room",
    "M&A data room",
    "investment banking document sharing",
    "private equity data room",
    "sell-side data room",
    "buy-side due diligence",
    "confidential document sharing M&A",
  ],
};

const dealStages = [
  {
    stage: "1",
    title: "Pre-Marketing",
    description: "Upload and organise CIM, financial models, management presentations, and teaser documents. Set up permission groups for different buyer tiers before launching the process.",
    features: ["Bulk upload with auto-indexing", "Drag-and-drop folder structure", "Permission group templates"],
  },
  {
    stage: "2",
    title: "First Round",
    description: "Share the information memorandum and high-level financials with a broad buyer group. Track engagement to identify serious bidders and weed out tyre-kickers early.",
    features: ["Real-time activity analytics", "Document-level view tracking", "Buyer engagement scoring"],
  },
  {
    stage: "3",
    title: "Management Presentations",
    description: "Grant deeper access to shortlisted buyers. Share detailed operational data, employee information, and sensitive contracts with granular per-document controls.",
    features: ["Staged permission escalation", "Dynamic watermarking", "NDA tracking integration"],
  },
  {
    stage: "4",
    title: "Final Due Diligence",
    description: "Open full data room access to final bidders. Manage intensive Q&A workflows, track completion against checklists, and maintain privilege controls on legal documents.",
    features: ["Structured Q&A with audit trail", "Due diligence checklist tracking", "Privilege tagging and review rooms"],
  },
  {
    stage: "5",
    title: "Signing & Close",
    description: "Assemble the completion bible, generate disclosure letter indexes, and archive the full data room with all metadata and audit logs for post-deal reference.",
    features: ["Completion bible assembly", "Disclosure index generation", "Full archive with audit logs"],
  },
];

const comparisonData = [
  { feature: "End-to-end encryption (AES-256)", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "SOC 2 Type II certified", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "Dynamic watermarking", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "Granular per-document permissions", spacenexus: true, email: false, dropbox: false, sharepoint: true },
  { feature: "Real-time buyer analytics", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "Structured Q&A workflow", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "Immutable audit trail", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "View-only mode (no download)", spacenexus: true, email: false, dropbox: true, sharepoint: true },
  { feature: "Bulk upload with auto-indexing", spacenexus: true, email: false, dropbox: true, sharepoint: true },
  { feature: "SEC / FINRA compliance", spacenexus: true, email: false, dropbox: false, sharepoint: false },
  { feature: "Multi-party access management", spacenexus: true, email: false, dropbox: false, sharepoint: true },
  { feature: "Expiring access links", spacenexus: true, email: false, dropbox: true, sharepoint: false },
];

const useCases = [
  {
    title: "Sell-Side M&A",
    description: "Investment banks running competitive auction processes need to share sensitive financials with 20–50+ potential buyers simultaneously while tracking who is engaged and who is not.",
    link: "/industries/investment-banking",
  },
  {
    title: "Buy-Side Due Diligence",
    description: "PE firms and corporate acquirers reviewing target company data rooms need secure access to hundreds of documents across legal, financial, commercial, and operational workstreams.",
    link: "/blog/ma-due-diligence-checklist-2026",
  },
  {
    title: "Cross-Border Transactions",
    description: "Multi-jurisdictional deals require VDRs that support GDPR, UK GDPR, and SEC compliance simultaneously — with data residency options in the US, EU, and UK.",
    link: "/blog/secure-data-room-uk-law-firms",
  },
  {
    title: "Fundraising & Capital Raises",
    description: "Growth-stage companies sharing financials, cap tables, and projections with potential investors need professional-grade security without enterprise-grade complexity.",
    link: "/solutions/series-a-fundraising-data-room",
  },
  {
    title: "Distressed M&A & Restructuring",
    description: "Time-sensitive transactions with multiple creditor groups require rapid data room setup, strict information barriers, and court-admissible audit trails.",
    link: "/features/security-compliance",
  },
  {
    title: "Post-Merger Integration",
    description: "After deal close, integration teams need continued secure access to shared documents while revoking external party access and archiving the deal record.",
    link: "/features/data-room",
  },
];

const faqs = [
  {
    question: "How is M&A document sharing different from regular file sharing?",
    answer: "M&A document sharing requires enterprise-grade security (encryption, watermarking, audit trails), granular permission controls for multiple buyer groups, real-time analytics to track buyer engagement, and compliance with SEC, FINRA, and GDPR regulations. Consumer tools like Dropbox and Google Drive lack these capabilities and create significant legal and security risks in deal contexts.",
  },
  {
    question: "How quickly can I set up an M&A data room?",
    answer: "SpaceNexus data rooms can be set up in under 30 minutes. Bulk upload your documents, apply permission templates for different buyer tiers, and invite participants. Our auto-indexing feature organises files into standard M&A folder structures automatically.",
  },
  {
    question: "Can I track which buyers are most engaged?",
    answer: "Yes. SpaceNexus provides real-time buyer analytics showing document views, time spent per section, download activity, and Q&A participation. This engagement data helps sell-side advisors identify serious bidders and manage the auction process more effectively.",
  },
  {
    question: "How do you protect confidential M&A documents from being leaked?",
    answer: "SpaceNexus uses AES-256 encryption, dynamic watermarking (viewer identity rendered on every page), view-only mode with screenshot protection, copy/paste prevention, and configurable download restrictions. Every action is logged in an immutable audit trail for forensic accountability.",
  },
  {
    question: "Is SpaceNexus compliant with SEC and FINRA requirements?",
    answer: "Yes. SpaceNexus supports SEC Rule 17a-4 record retention requirements, FINRA communication archival standards, and SOX Section 802 document preservation obligations. Our immutable audit trails and tamper-proof document storage meet the standards required for regulated financial transactions.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "M&A Document Sharing",
  description: "Secure document sharing platform for mergers and acquisitions. Built for investment banks, PE firms, and corporate development teams. Granular permissions, SOC 2 encryption, and real-time buyer analytics.",
  url: "https://spacenexus.net/solutions/ma-document-sharing",
  serviceType: "Secure Document Sharing",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Investment banks, PE firms, and corporate development teams",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to deal size and document volume.",
  },
};

export default function MADocumentSharingPage() {
  return (
    <>
      <Script
        id="ma-doc-sharing-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
                  { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr" },
                  { "@type": "ListItem", position: 3, name: "M&A Document Sharing", item: "https://spacenexus.net/solutions/ma-document-sharing" },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">
            M&A Document Sharing
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Share Deal Documents Securely — From Teaser to Close
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The M&A document sharing platform trusted by investment banks, private equity firms,
            and corporate development teams for sell-side auctions, buy-side due diligence,
            and cross-border transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>AES-256</span>
            <span>SEC Compliant</span>
            <span>FINRA Ready</span>
            <span>GDPR</span>
          </div>
        </div>
      </section>

      {/* Deal Lifecycle */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure Document Sharing Across the Entire Deal Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial marketing to post-close archival, SpaceNexus manages document
              security at every stage of the M&A process.
            </p>
          </div>
          <div className="space-y-6">
            {dealStages.map((stage) => (
              <div key={stage.stage} className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">
                  {stage.stage}
                </div>
                <div className="flex-1 bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{stage.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{stage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.features.map((f, i) => (
                      <span key={i} className="text-xs font-medium text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              VDR vs. Email vs. Cloud Storage for M&A
            </h2>
            <p className="text-gray-600">
              Why deal professionals choose purpose-built data rooms over consumer file sharing tools
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-[#2563eb]">SpaceNexus</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Email</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Dropbox</th>
                  <th className="text-center p-4 font-semibold text-gray-500">SharePoint</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">{row.spacenexus ? "✅" : "❌"}</td>
                    <td className="p-4 text-center">{row.email ? "✅" : "❌"}</td>
                    <td className="p-4 text-center">{row.dropbox ? "✅" : "❌"}</td>
                    <td className="p-4 text-center">{row.sharepoint ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              M&A Document Sharing Use Cases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <Link
                key={uc.title}
                href={uc.link}
                className="group bg-[#f8f9fa] rounded-xl border border-gray-200 p-6 hover:border-[#2563eb] transition-colors"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Share Deal Documents Securely?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Set up your first M&A data room in under 30 minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/competitors/vdr-alternatives"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              Compare VDR Providers
            </Link>
          </div>
        </div>
      </section>
                {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">The complete M&A deal room platform.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/industries/investment-banking"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Multi-bidder sell-side processes.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For investment banks →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Buy-side and sell-side workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/features/security-compliance"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">SOC 2, ISO 27001, GDPR.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing vs legacy.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                    </div>
                </div>
            </section>

</>
  );
}
