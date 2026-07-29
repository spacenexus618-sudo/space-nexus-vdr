import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Audit Log Export and Compliance — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on exporting immutable audit logs for court-admissible evidence, regulatory inquiries, and internal compliance reviews.",
    alternates: { canonical: "https://spacenexus.net/tutorials/audit-log-export" },
    keywords: ["VDR audit log", "audit log export", "court-admissible audit trail", "VDR compliance export", "audit trail evidence"],
    openGraph: { title: "Audit Log Export and Compliance — SpaceNexus Video Tutorial", description: "Video tutorial on audit log export for compliance.", url: "https://spacenexus.net/tutorials/audit-log-export" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "Audit Log Export and Compliance", description: "Tutorial on exporting immutable audit logs for compliance and legal evidence.", thumbnailUrl: "https://spacenexus.net/tutorials/audit-log-export/thumbnail.png", uploadDate: "2026-06-05", duration: "PT9M", contentUrl: "https://spacenexus.net/tutorials/audit-log-export", embedUrl: "https://spacenexus.net/tutorials/audit-log-export", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "Audit Log Export", item: "https://spacenexus.net/tutorials/audit-log-export" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Export Audit Logs for Compliance",
    description: "Export immutable audit logs for court-admissible evidence, regulatory inquiries, and internal compliance reviews.",
    totalTime: "PT9M",
    step: [
        { "@type": "HowToStep", name: "Filter audit events", text: "Find the specific events you need — by user, document, date range, or event type." },
        { "@type": "HowToStep", name: "Export for compliance", text: "Generate export packages for internal compliance, regulator inquiries, and external auditors." },
        { "@type": "HowToStep", name: "Export for litigation", text: "Produce audit logs in response to discovery requests, with proper chain of custody documentation." },
        { "@type": "HowToStep", name: "Configure retention", text: "Set audit log retention to meet SEC, HIPAA, and other regulatory requirements." },
    ],
};

const steps = [
    { time: "0:00", title: "What the audit log captures", desc: "Every login, view, download, print, permission change, and Q&A exchange — with timestamps, IP addresses, and user identities." },
    { time: "1:30", title: "Immutability and chain of custody", desc: "How the audit log is cryptographically chained to prevent tampering, and why this matters for court-admissible evidence." },
    { time: "3:00", title: "Filtering and searching the audit log", desc: "Finding the specific events you need — by user, document, date range, or event type." },
    { time: "4:30", title: "Exporting for compliance reviews", desc: "Generating export packages for internal compliance, regulator inquiries, and external auditors." },
    { time: "6:00", title: "Exporting for litigation discovery", desc: "Producing audit logs in response to discovery requests, with proper chain of custody documentation." },
    { time: "7:30", title: "Retention and deletion policies", desc: "Configuring audit log retention to meet SEC, HIPAA, and other regulatory requirements." },
];

export default function AuditLogExportPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-ae-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-ae-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-ae-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">Audit Log Export</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">9 min</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">Intermediate</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Audit Log Export and Compliance</h1>
                    <p className="text-xl text-gray-600">Export immutable audit logs for court-admissible evidence, regulatory inquiries, and internal compliance reviews.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/spacenexus/screenshots/reports.png')] bg-cover bg-center opacity-20"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <p className="text-white/80 text-sm font-medium">Video tutorial</p>
                            <p className="text-white/60 text-xs mt-1">9 min · Audit log export</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Export audit logs that meet the highest standards for court-admissible evidence and regulatory compliance.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>What the audit log captures and why it is court-admissible</li>
                        <li>Filtering and searching for specific events</li>
                        <li>Exporting for compliance reviews and litigation discovery</li>
                        <li>Configuring retention and deletion policies for regulatory compliance</li>
                    </ul>
                </div>
            </section>
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-step walkthrough</h2>
                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-16 text-sm font-mono text-[#2563eb] font-semibold">{step.time}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">See SpaceNexus live</h2>
                    <p className="text-blue-100 mb-6">Book a personalized demo with our team.</p>
                    <Link href="/demo" className="inline-flex items-center px-8 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">Request a demo →</Link>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
