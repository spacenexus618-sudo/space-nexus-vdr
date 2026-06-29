export default function TransformationTable() {
  const comparisons = [
    {
      category: "Document Upload",
      before: "Manual drag & drop, hours of organization",
      after: "Bulk upload with AI auto-indexing in minutes",
    },
    {
      category: "Document Search",
      before: "Folder-by-folder manual navigation",
      after: "Instant full-text search across all files",
    },
    {
      category: "Q&A Management",
      before: "Email chains, lost responses, no tracking",
      after: "Centralized Q&A with real-time notifications",
    },
    {
      category: "Access Control",
      before: "Generic permission levels, security risks",
      after: "Granular controls down to page level",
    },
    {
      category: "Due Diligence",
      before: "Weeks of manual review and checklist tracking",
      after: "AI-powered analysis with automated checklists",
    },
    {
      category: "Reporting",
      before: "Manual activity logs, delayed insights",
      after: "Real-time analytics with engagement heatmaps",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
            The Transformation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Virtual Data Rooms Transform Due Diligence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how SpaceNexus virtual data rooms replace manual, error-prone
            workflows with AI-powered deal automation.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 lg:p-6 font-semibold text-gray-900 hidden md:block">
              Process
            </div>
            <div className="p-4 lg:p-6 font-semibold text-red-600 flex items-center gap-2 hidden md:flex">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Without Space Nexus
            </div>
            <div className="p-4 lg:p-6 font-semibold text-green-600 flex items-center gap-2 hidden md:flex">
              <svg
                className="w-5 h-5"
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
              With Space Nexus
            </div>
          </div>

          {/* Table Body */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 ${
                index !== comparisons.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              {/* Category */}
              <div className="p-4 lg:p-6 bg-gray-50 md:bg-transparent">
                <p className="font-semibold text-gray-900">{row.category}</p>
              </div>

              {/* Before */}
              <div className="p-4 lg:p-6 border-l-4 border-red-100 md:border-l-0">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center md:hidden">
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-red-600 mb-1 md:hidden">
                      Before
                    </p>
                    <p className="text-sm text-gray-600">{row.before}</p>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="p-4 lg:p-6 bg-green-50/50 border-l-4 border-green-200 md:border-l-0 md:bg-transparent">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center md:hidden">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                  </div>
                  <div>
                    <p className="text-xs font-medium text-green-600 mb-1 md:hidden">
                      After
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                      {row.after}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to transform your deal process?
          </p>
          <a
            href="/demo"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Schedule a Demo
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
          </a>
        </div>
      </div>
    </section>
  );
}
