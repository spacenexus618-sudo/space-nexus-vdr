import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VDR Security & Compliance — Tamper-Evident Audit Logs, Granular Access Control | Space Nexus",
  description:
    "Space Nexus is a SOC 2 Type II certified VDR with AES-256 encryption at rest, tamper-evident audit logs, granular access control, dynamic watermarking, Zero Trust architecture, and GDPR compliance — purpose-built for M&A due diligence.",
  alternates: {
    canonical: "https://spacenexus.net/features/security-compliance",
  },
  openGraph: {
    title: "VDR Security & Compliance — Audit Logs, Granular Access Control | Space Nexus",
    description: "SOC 2 Type II certified. AES-256 encryption at rest. Tamper-evident audit logs. Granular access control. Dynamic watermarking. Zero Trust architecture.",
    url: "https://spacenexus.net/features/security-compliance",
    type: "website",
  },
  keywords: [
    "tamper-evident audit logs",
    "granular access control VDR",
    "AES-256 encryption at rest",
    "dynamic watermarking documents",
    "SOC 2 Type II virtual data room",
    "VDR security compliance",
    "Zero Trust data room",
  ],
  twitter: {
    card: "summary_large_image",
    title: "VDR Security & Compliance — Tamper-Evident Audit Logs | Space Nexus",
    description:
      "Bank-grade secure data room: SOC 2 Type II, AES-256 encryption, GDPR & HIPAA compliant. Purpose-built for M&A due diligence.",
  },
};

const features = [
  {
    title: "Encryption at Rest & Transit",
    description:
      "256-bit AES encryption protects your data at rest. TLS 1.3 secures all data in transit between clients and servers.",
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
    title: "Multi-Factor Authentication",
    description:
      "Require MFA for all users. Support for authenticator apps, SMS, and hardware security keys.",
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
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
  },
  {
    title: "Data Residency Controls",
    description:
      "Choose where your data is stored. Meet regional compliance requirements with data centers across the globe.",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Zero Trust Architecture",
    description:
      "Never trust, always verify. Every access request is authenticated and authorized regardless of location.",
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
    title: "Penetration Testing",
    description:
      "Regular third-party security assessments. Continuous vulnerability scanning and remediation.",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Disaster Recovery",
    description:
      "Automated backups with point-in-time recovery. Multi-region redundancy ensures business continuity.",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description:
      "Annual audit of security, availability, and confidentiality controls",
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
  },
  {
    name: "GDPR",
    description: "Full compliance with European data protection regulations",
  },
  {
    name: "HIPAA",
    description: "Healthcare data protection for life sciences transactions",
  },
  { name: "CCPA", description: "California Consumer Privacy Act compliance" },
];

export default function SecurityCompliancePage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
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
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                Trust Foundation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Security & Compliance
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Security is embedded at every layer of the platform. From
                encryption to certifications, we protect your most sensitive
                deal data with enterprise-grade security.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise Grade
                </h3>
                <p className="text-gray-600 mb-6">
                  Bank-level security for your critical transactions
                </p>
                <div className="flex justify-center gap-4">
                  {["SOC 2", "ISO 27001", "GDPR"].map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security at Every Layer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection for your most sensitive information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Independently verified compliance with global standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "VDR Security: What to Look For Before You Sign Up",
                href: "/blog/vdr-security-what-to-look-for",
                label: "Security",
              },
              {
                title: "What Is a Virtual Data Room? The Complete Guide for 2025",
                href: "/blog/what-is-a-virtual-data-room",
                label: "Guide",
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
            Ready for Enterprise Security?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus protects your most sensitive transactions.
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
