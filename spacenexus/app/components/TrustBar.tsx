export default function TrustBar() {
  const securityFeatures = [
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
      title: "Bank-Grade Security",
      description: "256-bit AES encryption, SOC 2 Type II certified",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Zero Trust Architecture",
      description: "Dynamic watermarking, granular access controls",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "GDPR, CCPA, HIPAA, FedRAMP ready",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "99.99% Uptime SLA",
      description: "Global CDN with multi-region redundancy",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
            Enterprise Security
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Security You Can Trust
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with the security standards demanded by Fortune 500 companies
            and top investment banks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] rounded-xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200 border border-transparent"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#2563eb] mb-4 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-6">
            Certified & Compliant
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {["SOC 2", "ISO 27001", "GDPR", "HIPAA", "FedRAMP"].map(
              (cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f8f9fa] rounded-lg border border-gray-200"
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    {cert}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
