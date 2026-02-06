import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Development Solutions | Space Nexus",
  description:
    "Execute strategic acquisitions, divestitures, and corporate transactions with Space Nexus - the professional data room for corporate M&A teams.",
  alternates: {
    canonical: "/industries/corporate-development",
  },
};

const capabilities = [
  {
    title: "Strategic Acquisitions",
    description:
      "Run buy-side due diligence processes with organized workspaces that centralize all target company materials, internal analysis, and deal team communications.",
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
  },
  {
    title: "Divestiture Management",
    description:
      "Prepare and execute divestitures with sell-side data rooms that present your business professionally to prospective buyers.",
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
          d="M20 12H4"
        />
      </svg>
    ),
  },
  {
    title: "Integration Planning",
    description:
      "Coordinate post-acquisition integration with secure workspaces for integration teams across both organizations.",
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
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Board & Executive Reporting",
    description:
      "Share deal materials with board members and executives through secure channels with complete access tracking and version control.",
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
    title: "Pipeline Management",
    description:
      "Track multiple acquisition opportunities simultaneously with dedicated workspaces for each target. Monitor progress and engagement across your deal pipeline.",
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
    title: "Cross-Functional Coordination",
    description:
      "Enable efficient collaboration across legal, finance, HR, IT, and business teams involved in corporate transactions.",
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
];

export default function CorporateDevelopmentPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                Corporate Development
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data Rooms for Corporate M&A Teams
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Execute strategic acquisitions, divestitures, and corporate
                transactions with professional data rooms that support your
                internal teams and external advisors throughout the deal
                lifecycle.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Corporate M&A
                    </h3>
                    <p className="text-sm text-gray-500">
                      Strategic transaction support
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Strategic Acquisitions",
                    "Divestitures",
                    "Carve-Outs",
                    "Joint Ventures",
                    "Integration Management",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-indigo-500"
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
              Built for Corporate Development Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools designed for the strategic and operational needs of
              corporate M&A.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
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
            Why Corporate Development Teams Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Corporate development teams are responsible for some of the most
              consequential decisions their companies make. Strategic
              acquisitions can transform businesses, enter new markets, and
              acquire critical capabilities. Divestitures can unlock value and
              sharpen strategic focus. The transactions that Corp Dev teams
              execute require thorough due diligence, careful coordination, and
              appropriate confidentiality.
            </p>
            <p className="mb-6">
              Space Nexus provides corporate development professionals with the
              transaction infrastructure they need to execute both buy-side and
              sell-side deals effectively. For acquisitions, teams can create
              organized workspaces that centralize all target company materials
              alongside internal analysis, advisor work product, and deal team
              communications.
            </p>
            <p className="mb-6">
              When preparing divestitures, corporate sellers can build
              professional sell-side data rooms that present the business
              attractively while maintaining control over sensitive information.
              Different bidders can receive access to different materials based
              on their stage in the process, with complete visibility into
              engagement patterns across all parties.
            </p>
            <p className="mb-6">
              The platform supports the cross-functional coordination that
              corporate transactions require. Legal, finance, HR, IT, and
              business teams can all access appropriate materials and contribute
              to due diligence or integration planning. Board members and
              executives can review materials through secure channels with full
              access tracking.
            </p>
            <p>
              For active acquirers managing multiple opportunities, Space Nexus
              provides pipeline visibility across all current targets. Each
              opportunity has its own workspace while deal teams can see the
              full scope of current activity. When acquisitions close, the same
              platform supports integration workstreams with appropriate access
              for teams from both organizations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Enhance Your M&A Capabilities?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus can support your corporate development
            initiatives.
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
