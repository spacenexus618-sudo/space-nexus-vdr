export default function ProductEcosystem() {
  const modules = [
    {
      icon: "📁",
      title: "Smart Data Room",
      description:
        "AI-powered document organization with intelligent auto-tagging and folder structures.",
      tag: "Core",
      href: "/features/data-room",
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description:
        "Full-text search across 100+ file types with natural language query support.",
      tag: "Core",
      href: "/features/data-room",
    },
    {
      icon: "❓",
      title: "Q&A Management",
      description:
        "Streamlined buyer-seller communication with automated tracking and notifications.",
      tag: "Core",
      href: "/features/qa",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Real-time engagement analytics with heatmaps and investor behavior insights.",
      tag: "Analytics",
      href: "/features/activity-analytics",
    },
    {
      icon: "🔐",
      title: "Permission Engine",
      description:
        "Granular access controls with dynamic watermarking and fence-view protection.",
      tag: "Security",
      href: "/features/users-permissions",
    },
    {
      icon: "📝",
      title: "Redaction Studio",
      description:
        "AI-assisted sensitive information detection and bulk redaction tools.",
      tag: "Security",
      href: "/features/security-compliance",
    },
    {
      icon: "🔄",
      title: "Version Control",
      description:
        "Complete document history with compare, restore, and audit trail features.",
      tag: "Core",
      href: "/features/data-room",
    },
    {
      icon: "📧",
      title: "Secure Messaging",
      description:
        "End-to-end encrypted communication with read receipts and expiry controls.",
      tag: "Communication",
      href: "/features/support",
    },
    {
      icon: "📋",
      title: "Task Management",
      description:
        "Integrated workflows with deadline tracking and team collaboration tools.",
      tag: "Productivity",
      href: "/features/deals",
    },
    {
      icon: "🔗",
      title: "API & Integrations",
      description:
        "RESTful APIs and native integrations with Salesforce, DocuSign, and more.",
      tag: "Integration",
      href: "/features/integrations",
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description:
        "Full-featured iOS and Android apps with offline document access.",
      tag: "Accessibility",
      href: "/features/dashboard",
    },
    {
      icon: "🤖",
      title: "AI Copilot",
      description:
        "Intelligent document summarization, contract analysis, and due diligence automation.",
      tag: "AI",
      href: "/features/reports",
    },
  ];

  const tagColors: Record<string, string> = {
    Core: "bg-blue-50 text-blue-700 border-blue-200",
    Analytics: "bg-purple-50 text-purple-700 border-purple-200",
    Security: "bg-red-50 text-red-700 border-red-200",
    Communication: "bg-green-50 text-green-700 border-green-200",
    Productivity: "bg-orange-50 text-orange-700 border-orange-200",
    Integration: "bg-cyan-50 text-cyan-700 border-cyan-200",
    Accessibility: "bg-pink-50 text-pink-700 border-pink-200",
    AI: "bg-violet-50 text-violet-700 border-violet-200",
  };

  return (
    <section id="product" className="py-16 lg:py-24 bg-[#f8f9fa] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
            Product Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Virtual Data Room Needs for Secure Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of 12 integrated modules designed to
            streamline due diligence and accelerate deal closures.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <a
              key={index}
              href={module.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-[#2563eb]/30 hover:-translate-y-1 no-underline"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{module.icon}</div>

              {/* Tag */}
              <span
                className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border mb-3 ${
                  tagColors[module.tag] ||
                  "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {module.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="/features"
            className="inline-flex  mr-3 items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Explore All Features
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
