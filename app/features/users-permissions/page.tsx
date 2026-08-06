import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Users & Permissions | SpaceNexus",
  description: "Granular per-user, per-folder, per-document permissions. RBAC, dynamic watermarking, IP whitelisting.",
  keywords: [
    "VDR permissions",
    "role-based access control VDR",
    "data room access management",
    "document level permissions",
    "IP whitelisting VDR",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/users-permissions",
  },
  openGraph: {
    title: "Users & Permissions | SpaceNexus",
    description:
      "Granular per-user, per-folder, per-document permissions. RBAC, dynamic watermarking, IP...",
    url: "https://spacenexus.net/features/users-permissions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexible Permission Settings — Role-Based Access Control | Space Nexus VDR",
    description:
      "Custom roles, folder-level access restrictions, and granular document permissions — full access control for M&A data rooms.",
  },
};

const features = [
  {
    title: "Custom User Roles",
    description:
      "Create and manage custom user roles such as Admin, Buyer, Seller, Legal, and Finance. Assign the right level of access to each participant category without configuring permissions individually for every user.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Role-Based Permissions",
    description:
      "Configure role-based permissions for documents, folders, and Q&A activities. Set what each role can see and interact with across the entire data room without needing to adjust settings file by file.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Granular Action Controls",
    description:
      "Control specific actions for each role — viewing, uploading, editing, downloading, and deleting documents. Lock down sensitive files while giving collaborators exactly the access they need to do their work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Folder & Document-Level Access",
    description:
      "Manage folder-level and document-level access restrictions independently. Restrict entire sections of the data room to specific roles, or apply finer controls to individual sensitive files within shared folders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: "Custom Access Rules",
    description:
      "Apply custom permission rules beyond standard role templates. Configure exceptions, time-limited access windows, and deal-specific restrictions to meet complex transaction requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Maintain data security and compliance with enterprise-grade access controls. Ensure that users can only access the documents and actions relevant to their responsibilities — enforced at every level.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do role-based permissions work in SpaceNexus?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus allows you to create custom user roles (Admin, Buyer, Seller, Legal, Finance) and assign granular permissions at the folder, document, and page levels. Each role can have distinct viewing, uploading, editing, downloading, and deleting rights, ensuring each counterparty sees only what they're authorized to see." },
    },
    {
      "@type": "Question",
      name: "Can I set document-level access controls for individual files?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. SpaceNexus supports document-level and folder-level access controls independently. You can restrict entire sections of the data room to specific roles, or apply finer controls to individual sensitive files within shared folders. This includes time-limited access windows and deal-specific restrictions." },
    },
    {
      "@type": "Question",
      name: "What custom access rules are available?",
      acceptedAnswer: { "@type": "Answer", text: "Beyond standard role templates, SpaceNexus supports custom access rules including time-limited access windows, IP whitelisting, geo-based restrictions, and deal-specific permission overrides. Enterprise plans also include device management policies for maximum security." },
    },
    {
      "@type": "Question",
      name: "How does enterprise-grade security protect user data?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus enforces enterprise-grade access controls at every level of the platform. Users can only access documents and actions relevant to their responsibilities. Combined with SOC 2 Type II certification, AES-256 encryption, dynamic watermarking, and tamper-evident audit logs, your data room maintains the highest security standards." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Users & Permissions", item: "https://spacenexus.net/features/users-permissions" },
  ],
};

export default function UsersPermissionsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="users-permissions-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
              { "@type": "ListItem", position: 3, name: "Flexible Permission Settings", item: "https://spacenexus.net/features/users-permissions" },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                Access Control
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Flexible Permission Settings
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Flexible Permission Settings section allows administrators to control user access
                across the platform. It provides role-based and granular permission management to ensure
                that users can only access the documents and actions relevant to their responsibilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Create and manage custom user roles such as Admin, Buyer, Seller, Legal, and Finance",
                  "Configure role-based permissions for documents, folders, and Q&A activities",
                  "Control actions like viewing, uploading, editing, downloading, and deleting documents",
                  "Manage folder-level and document-level access restrictions",
                  "Apply custom rules and enterprise-grade access controls to maintain data security and compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-violet-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / permissions
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/flexible%20permisson%20settings.jpeg"
                  alt="SpaceNexus VDR Flexible Permission Settings — role-based access control"
                  className="w-full h-auto"
                  loading="lazy"
                />
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
              Precise Access Control at Every Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From top-level roles down to individual document actions — Space Nexus gives
              administrators full control over who sees what, and what they can do with it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Role-Based Permission Configuration</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Configure exactly what each role can access — down to individual document actions and folder restrictions.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                app.spacenexus.net / permissions / roles
              </div>
            </div>
            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-xl shadow-gray-900/10">
              <img
                src="/spacenexus/screenshots/flexible%20permison%20-%20rolebsed.jpeg"
                alt="SpaceNexus VDR role-based permission configuration interface"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Control That Scales with Your Deal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Set up the right permissions once and manage them centrally — so your team stays
              productive and sensitive information stays protected throughout the transaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Define Roles",
                description:
                  "Create custom user roles tailored to your deal structure — Admin, Buyer, Seller, Legal, Finance, or any combination your transaction requires.",
              },
              {
                step: "02",
                title: "Configure Permissions",
                description:
                  "Set role-based permissions for folders, documents, and Q&A. Control viewing, uploading, editing, downloading, and deleting for each role independently.",
              },
              {
                step: "03",
                title: "Assign & Enforce",
                description:
                  "Assign roles to users and let Space Nexus enforce access automatically. Every action is validated against permissions in real time, keeping your deal secure.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Secure Data Room — Document Management", href: "/features/data-room" },
              { title: "Security & Compliance — Enterprise Protection", href: "/features/security-compliance" },
              { title: "Activity & Analytics — Buyer Intelligence", href: "/features/activity-analytics" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-[#f8f9fa] border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-violet-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-violet-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Take Full Control of User Access
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus gives you precise, role-based
              control over every document, folder, and action in your data room.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
      </section>
    </main>
  );
}
