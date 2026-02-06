export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      label: "Lightning Fast Setup",
      description:
        "Get your data room up and running in minutes, not days. Our intuitive interface requires zero training.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      label: "Bank-Grade Security",
      description:
        "SOC 2 Type II certified with 256-bit encryption. Your sensitive deal data is protected at every layer.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      label: "AI-Powered Intelligence",
      description:
        "Automated document classification, smart search, and intelligent Q&A management powered by machine learning.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Global Infrastructure",
      description:
        "Multi-region deployment with 99.99% uptime SLA. Access your data room from anywhere, anytime.",
    },
  ];

  const valueProps = [
    {
      title: "Built for Complex Deals",
      description:
        "Whether you're managing a cross-border M&A, capital raise, or restructuring, Space Nexus scales to handle thousands of documents and hundreds of users without breaking a sweat.",
    },
    {
      title: "Compliance Made Simple",
      description:
        "Stay audit-ready with comprehensive activity logs, automated compliance reports, and built-in support for GDPR, CCPA, HIPAA, and industry-specific regulations.",
    },
    {
      title: "White-Glove Support",
      description:
        "Our dedicated customer success team provides 24/7 support, custom onboarding, and strategic guidance to ensure your deals close smoothly.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Space Nexus
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Deal Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage high-stakes transactions with
              confidence, security, and speed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl border border-gray-200 p-6 lg:p-8 group hover:shadow-lg hover:border-[#2563eb]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Deal Process?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              See how Space Nexus can streamline your M&A transactions, capital
              raises, and due diligence workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Talk to Our Team
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
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
