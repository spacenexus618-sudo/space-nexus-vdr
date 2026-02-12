import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Plans for Every Nonprofit",
  description:
    "Flexible pricing plans for nonprofits of all sizes. From free starter tiers to enterprise solutions with custom integrations and dedicated support.",
  alternates: {
    canonical: "/kindora/pricing",
  },
};

const pricingTiers = [
  {
    name: "Starter",
    description: "For small nonprofits getting started with digital management",
    price: "Free",
    priceNote: "Forever free",
    featured: false,
    features: [
      "Up to 5 users",
      "Donor & donation management",
      "Client & service tracking",
      "Basic reporting",
      "Email support",
      "Community resources",
    ],
    limitations: ["Limited to core modules only", "Basic export options"],
    cta: "Get Started Free",
    ctaHref: "/kindora/contact",
  },
  {
    name: "Professional",
    description: "For growing nonprofits that need comprehensive tools",
    price: "Custom",
    priceNote: "Contact for pricing",
    featured: true,
    features: [
      "Up to 25 users",
      "All modules included",
      "Grant lifecycle management",
      "Campaign management",
      "Advanced reporting & analytics",
      "PDF & Excel exports",
      "Email integration (Resend)",
      "Cost allocation tools",
      "Priority email support",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaHref: "/kindora/contact",
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced requirements",
    price: "Custom",
    priceNote: "Contact for pricing",
    featured: false,
    features: [
      "Unlimited users",
      "All Professional features",
      "Custom integrations",
      "Dedicated support manager",
      "Data migration assistance",
      "Custom training sessions",
      "SLA guarantee",
      "Advanced security options",
      "Custom reporting",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaHref: "/kindora/contact",
  },
];

const featureComparison = [
  {
    feature: "Users",
    starter: "Up to 5",
    professional: "Up to 25",
    enterprise: "Unlimited",
  },
  {
    feature: "Donor Management",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Donation Tracking",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Client Management",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Service Tracking",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Grant Management",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Campaign Management",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Expense & Bill Tracking",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Cost Allocation",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Chart of Accounts",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Budget Planning",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Employee Directory",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Volunteer Management",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Email Templates",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Advanced Reports",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "PDF/Excel Export",
    starter: "Basic",
    professional: true,
    enterprise: true,
  },
  {
    feature: "Statement of Activities",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Multi-Language",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Dark/Light Theme",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Custom Integrations",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Dedicated Support",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Data Migration",
    starter: false,
    professional: false,
    enterprise: true,
  },
];

const faqs = [
  {
    question: "What types of nonprofits is Kindora designed for?",
    answer:
      "Kindora is designed for nonprofit organizations of all sizes, including community service organizations, charitable foundations, NGOs, social enterprises, and any organization focused on mission-driven work rather than profit.",
  },
  {
    question: "Can I export data for board reports?",
    answer:
      "Yes. Kindora offers comprehensive export capabilities including Excel (XLSX), PDF with organization branding, and JSON data backups. You can generate Statement of Activities reports and custom reports tailored for board presentations.",
  },
  {
    question: "Does Kindora support grant compliance reporting?",
    answer:
      "Absolutely. Kindora includes grant lifecycle tracking from prospect to close, cost allocation across grants and programs, and compliance-ready financial reporting to help you meet grantor requirements.",
  },
  {
    question: "What payment methods are tracked for donations?",
    answer:
      "Kindora supports tracking donations made via Cash, Check, Credit Card, Bank Transfer, Online payments, ACH, and Wire transfers. You can also track receipt status and manage recurring donations.",
  },
  {
    question: "Is there mobile support?",
    answer:
      "Kindora is built with a responsive design that works on tablets and mobile devices. Access your nonprofit data from any device with a modern web browser.",
  },
  {
    question: "How is data secured?",
    answer:
      "Kindora uses session-based authentication with configurable timeout options, role-based access control, and is built on secure, modern infrastructure. Two-factor authentication infrastructure is ready for activation.",
  },
  {
    question: "Can I try before committing to a paid plan?",
    answer:
      "Yes. Our Starter plan is completely free and includes core donor and client management features. You can also request a demo of our Professional features before upgrading.",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Plans for every nonprofit
            </h1>
            <p className="text-lg text-gray-600">
              Start free and scale as your organization grows. No hidden fees,
              no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  tier.featured
                    ? "border-[#2563eb] shadow-xl shadow-blue-500/10 scale-105 lg:scale-110 z-10"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {tier.priceNote}
                    </span>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      tier.featured
                        ? "text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] shadow-lg shadow-blue-500/25"
                        : "text-[#2563eb] bg-[#2563eb]/10 hover:bg-[#2563eb]/20"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 mb-4">
                      What&apos;s included:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <svg
                            className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.limitations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {tier.limitations.map((limitation) => (
                          <p
                            key={limitation}
                            className="text-xs text-gray-500 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                            {limitation}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-gray-600">
              See exactly what&apos;s included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-[#2563eb] bg-blue-50/50">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-gray-50/50" : ""}
                  >
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {row.feature}
                    </td>
                    {[row.starter, row.professional, row.enterprise].map(
                      (value, i) => (
                        <td
                          key={i}
                          className={`text-center py-3 px-4 ${i === 1 ? "bg-blue-50/30" : ""}`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <svg
                                className="w-5 h-5 text-[#2563eb] mx-auto"
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
                            ) : (
                              <svg
                                className="w-5 h-5 text-gray-300 mx-auto"
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
                            )
                          ) : (
                            <span className="text-sm text-gray-600">
                              {value}
                            </span>
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about Kindora
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Talk to our team to find the perfect plan for your nonprofit.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
          >
            Contact Sales
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
