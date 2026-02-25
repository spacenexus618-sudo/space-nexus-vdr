import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Secure Document Sharing for Legal — Law Firm Due Diligence VDR | Space Nexus",
    description:
        "Purpose-built secure document sharing for law firms. Space Nexus protects attorney-client privilege, manages due diligence Q&A workflows, and maintains tamper-evident audit trails that courts and regulators accept.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
    },
    openGraph: {
        title: "Secure Document Sharing for Law Firms — Space Nexus VDR",
        description: "SOC 2 Type II certified secure document sharing for legal due diligence. Protect privilege, manage Q&A, and maintain court-admissible audit trails.",
        url: "https://spacenexus.net/solutions/secure-document-sharing-for-legal",
    },
    keywords: [
        "secure document sharing for law firms",
        "legal due diligence software",
        "law firm document management",
        "legal data room",
        "attorney-client privilege VDR",
        "legal VDR",
        "due diligence Q&A workflow",
    ],
};

const securityFeatures = [
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Attorney-Client Privilege Protection",
        description: "Separate privilege and non-privilege document sets with granular folder-level permissions. Ensure only authorized parties access protected materials.",
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Tamper-Evident Audit Logs",
        description: "Every document access, download, and permission change is logged with cryptographic certainty. Audit logs are immutable, timestamped, and accepted by courts and regulators.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Dynamic Watermarking",
        description: "Every downloaded document is automatically watermarked with the recipient's name, email, and timestamp — deterring unauthorized sharing and enabling leak tracing.",
    },
    {
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        title: "Granular Access Control",
        description: "Role-based permissions at document, folder, and user level. Set expiry dates on access, restrict downloads per party, and revoke access instantly if needed.",
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Click-Through Gate",
        description: "Require every party to sign an NDA before accessing any materials. Signed NDAs are automatically stored with timestamps in the deal record.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "SOC 2 Type II Certification",
        description: "Space Nexus is independently audited and SOC 2 Type II certified. Client data is protected by AES-256 encryption at rest and TLS 1.3 in transit.",
    },
];

const useCases = [
    {
        title: "M&A Transaction Counsel",
        desc: "Manage buyer and seller document flows across multiple deal parties — with separate privilege sets, controlled Q&A, and complete closing binder archiving.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        title: "Litigation & Discovery",
        desc: "Share discovery documents with opposing counsel under court-mandated protective orders. Audit logs demonstrate compliance with production requirements.",
        link: "/features/activity-analytics",
    },
    {
        title: "Corporate Transactions",
        desc: "Real estate closings, joint ventures, and licensing agreements — all require controlled document sharing with privileged materials protected throughout.",
        link: "/industries/law-firms",
    },
];

export default function SecureDocumentSharingLegalPage() {
    return (
        <main className="pt-20 lg:pt-24">
            {/* Hero */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            Legal Solution
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Secure Document Sharing{" "}
                            <span className="text-[#2563eb]">Built for Law Firms</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Protect attorney-client privilege, manage structured due diligence Q&amp;A, and maintain tamper-evident audit logs — all within a SOC 2 Type II certified platform that courts and regulators accept.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request Legal Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/features/security-compliance" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Security Certifications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Built for the security standards law firms require
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every feature in Space Nexus was designed with legal privilege, regulatory compliance, and courtroom admissibility in mind.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {securityFeatures.map((feat) => (
                            <div key={feat.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2">{feat.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Q&A Screenshot */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Structured Q&amp;A — engineered for legal due diligence
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Questions are categorized (Finance, Legal, Technical), flagged by urgency, and assigned to the right subject matter expert. Every response is version-controlled. No more hunting through email chains — and no risk of inadvertent waiver of privilege.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {[
                                    "Privilege log visible only to authorized attorneys",
                                    "Finance / Legal / Technical category tags",
                                    "Urgency flags with visual indicators",
                                    "Full Q&A audit trail for regulator review",
                                ].map(item => (
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
                            <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                See Q&amp;A live
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.spacenexus.net / qa</div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                <img src="/spacenexus/screenshots/vdr-qa.png" alt="Space Nexus Q&A management for legal due diligence" className="w-full h-auto" loading="lazy" />
                            </div>
                            <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-14 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common legal use cases</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {useCases.map((uc) => (
                            <Link key={uc.title} href={uc.link} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200">
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-2">{uc.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">{uc.desc}</p>
                                <span className="text-xs font-semibold text-[#2563eb] flex items-center gap-1">
                                    Learn more
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Set up a secure legal data room today</h2>
                    <p className="text-gray-600 mb-8">SOC 2 Type II certified. AES-256 encryption. Tamper-evident audit logs. Everything your firm's oversight committee requires.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
                        <Link href="/features/security-compliance" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">Security Details</Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">SOC 2 Type II · AES-256 · TLS 1.3 · Dynamic watermarking · NDA gate</p>
                </div>
            </section>
        </main>
    );
}
