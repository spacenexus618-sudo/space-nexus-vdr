import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Solutions | Space Nexus",
  description:
    "Execute technology M&A, venture transactions, and strategic partnerships with Space Nexus - the fast, secure data room for tech companies.",
  alternates: {
    canonical: "https://spacenexus.net/industries/technology",
  },
};

const capabilities = [
  {
    title: "Tech M&A Transactions",
    description:
      "Run acquisition processes with organized data rooms covering technology, IP, product, commercial, and corporate documentation.",
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
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Venture Fundraising",
    description:
      "Share pitch decks, financials, and company documentation with prospective investors through branded, secure portals.",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "IP & Source Code Protection",
    description:
      "Share technical documentation and intellectual property with appropriate security controls. Watermarking and access restrictions protect sensitive materials.",
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Strategic Partnerships",
    description:
      "Support partnership discussions with secure document sharing. Multiple concurrent discussions can proceed with appropriate information barriers.",
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
    title: "Technical Due Diligence",
    description:
      "Enable thorough code reviews and architecture assessments with secure access to technical documentation and system specifications.",
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Deal Execution",
    description:
      "Spin up data rooms in minutes. Bulk upload, drag-and-drop organization, and automated indexing accelerate deal preparation.",
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
];

export default function TechnologyPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                Technology
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data Rooms Built for Tech Speed
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Execute M&A transactions, fundraising rounds, and strategic
                partnerships with the speed and security that technology
                companies demand. Space Nexus moves as fast as you do.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Tech Transactions
                    </h3>
                    <p className="text-sm text-gray-500">
                      Built for speed and security
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "M&A Transactions",
                    "Venture Fundraising",
                    "Strategic Partnerships",
                    "IP Licensing",
                    "Technical Due Diligence",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-500"
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
              Designed for Technology Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Features built for the pace and complexity of tech transactions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
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
            Why Technology Companies Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Technology companies operate in a fast-moving environment where
              deals can progress from initial discussions to signed agreements
              in weeks rather than months. Whether raising venture capital,
              evaluating acquisition opportunities, or exploring strategic
              partnerships, tech companies need transaction infrastructure that
              matches their pace.
            </p>
            <p className="mb-6">
              Space Nexus is designed for this velocity. Data rooms can be
              created in minutes with bulk upload capabilities and drag-and-drop
              organization. Automated indexing and full-text search make it easy
              for counterparties to find what they need quickly, reducing
              back-and-forth and accelerating due diligence.
            </p>
            <p className="mb-6">
              For technology transactions, intellectual property protection is
              paramount. Our platform provides sophisticated access controls,
              document watermarking, and download restrictions that protect
              sensitive technical documentation and source code. Companies can
              share the information needed for thorough due diligence while
              maintaining appropriate safeguards.
            </p>
            <p className="mb-6">
              Venture fundraising is streamlined through branded investor
              portals. Companies can share pitch materials, financial
              projections, and company documentation with prospective investors
              while tracking engagement to understand which firms are most
              interested. As rounds progress, different investors can receive
              access to additional materials appropriate to their stage.
            </p>
            <p>
              Technical due diligence is also well supported. Engineering teams
              at acquiring companies can review architecture documentation,
              security assessments, and technical specifications with the depth
              they require. The Q&A system provides a structured channel for
              technical questions that keeps discussions organized and complete.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Accelerate Your Tech Transactions?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus can support your next deal or fundraise.
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
