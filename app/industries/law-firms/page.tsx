import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Data Room for Law Firms — Legal Due Diligence Software | Space Nexus",
  description:
    "Space Nexus is the virtual data room law firms rely on for M&A due diligence, privilege management, document review, and litigation support. SOC 2 certified, with granular access controls and complete audit trails.",
  alternates: {
    canonical: "https://spacenexus.net/industries/law-firms",
  },
  openGraph: {
    title: "Virtual Data Room for Law Firms | Space Nexus",
    description: "Secure legal due diligence software with privilege management, ethical walls, contract analysis, and client collaboration — built for law firm workflows.",
    url: "https://spacenexus.net/industries/law-firms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Data Room for Law Firms — Legal Due Diligence Software | Space Nexus",
    description:
      "Purpose-built secure file sharing for lawyers: client privilege protection, due diligence management, and full audit trails.",
  },
};

const capabilities = [
  {
    title: "Due Diligence Management",
    description:
      "Organize and review thousands of documents efficiently. Create custom checklists, track review progress, and identify issues systematically.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Client Privilege Protection",
    description:
      "Maintain strict confidentiality with granular access controls. Separate privileged from non-privileged materials with clear audit trails.",
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Matter Collaboration",
    description:
      "Work seamlessly with clients, co-counsel, and opposing parties. Control exactly who sees what at every stage of the engagement.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Contract Analysis",
    description:
      "Review and analyze contracts with AI-assisted tools. Extract key terms, identify risks, and compare documents efficiently.",
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
    title: "Ethical Wall Enforcement",
    description:
      "Implement and maintain information barriers between matters. Automatic conflict checking and access restrictions protect client interests.",
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
    title: "Billing Integration",
    description:
      "Track time spent in the data room by matter and user. Export activity data for seamless integration with legal billing systems.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function LawFirmsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/industries"
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
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
                All Industries
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                Law Firms
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Secure Data Rooms for Legal Excellence
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Manage due diligence, protect client privilege, and collaborate
                on transactions with a platform built for the rigorous demands
                of legal practice. Space Nexus delivers security and
                organization that law firms require.
              </p>
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
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
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
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Legal Practice Support
                    </h3>
                    <p className="text-sm text-gray-500">
                      Complete matter management
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Due Diligence",
                    "Document Review",
                    "Privilege Management",
                    "Client Portals",
                    "Litigation Support",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Designed for Legal Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools that understand the unique requirements of legal practice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Law Firms Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Legal practice demands precision, confidentiality, and
              comprehensive record-keeping. Whether conducting due diligence on
              a major transaction, managing discovery in complex litigation, or
              collaborating with clients on sensitive matters, law firms need
              technology that meets the highest professional standards.
            </p>
            <p className="mb-6">
              Space Nexus provides law firms with a secure document management
              platform that supports the full range of legal work. Our virtual
              data rooms are designed to handle the volume and complexity of
              modern transactions, where thousands of documents must be
              reviewed, organized, and shared with appropriate parties while
              maintaining strict access controls.
            </p>
            <p className="mb-6">
              Privilege protection is central to our design. Attorneys can
              clearly segregate privileged materials from documents that may be
              produced, with access controls that prevent inadvertent
              disclosure. When working with opposing counsel or third parties,
              Space Nexus ensures that only designated materials are visible
              while maintaining detailed logs of every access for ethical
              compliance.
            </p>
            <p className="mb-6">
              For transactional practices, our platform streamlines the due
              diligence process. Custom checklists help teams track review
              progress across all document categories. The Q&A module provides a
              structured channel for raising and resolving issues with
              counterparties. When deals close, complete archives preserve the
              transaction record for future reference.
            </p>
            <p>
              Integration with legal workflows extends to billing and matter
              management. Activity data can be exported to support accurate time
              tracking and client invoicing. Attorneys can see exactly how much
              time was spent reviewing specific document categories, providing
              the detail clients increasingly expect in legal bills.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Callout — Q&A Management */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot first */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / qa
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-qa.png"
                  alt="Space Nexus Q&A Management — due diligence questions and answers for law firms"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-3xl -z-10" />
            </div>
            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                Live Product
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Structured Q&amp;A — no more email chains
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every due diligence question is categorized, prioritized, and assigned directly in Space Nexus. Finance, Legal, and Technical queries each have their own track — and urgent items are flagged so nothing falls through the cracks.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Questions tagged by Finance, Legal, Technical",
                  "Urgent flag with visual priority indicators",
                  "Direct assignment to counterparty team members",
                  "Answered / Open / Urgent status at a glance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                See the Q&amp;A module live
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "M&A Due Diligence Checklist 2025 — The Complete Deal Room Guide",
                href: "/blog/ma-due-diligence-checklist-2025",
                label: "M&A",
              },
              {
                title: "VDR Security: What to Look For Before You Sign Up",
                href: "/blog/vdr-security-what-to-look-for",
                label: "Security",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col p-5 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-semibold text-[#2563eb] mb-2">{post.label}</span>
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                  {post.title} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Enhance Your Legal Practice?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus supports law firms in delivering exceptional
            client service.
          </p>
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
        </div>
      </section>
    </main>
  );
}
