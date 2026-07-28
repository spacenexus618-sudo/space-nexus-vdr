import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Managing Bidder Access — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on configuring tiered bidder permissions for sell-side M&A. Initial bidders, shortlisted bidders, and final-round access management.",
    alternates: { canonical: "https://spacenexus.net/tutorials/managing-bidder-access" },
    keywords: ["VDR bidder access", "sell-side permissions", "bidder tier management", "VDR user management", "M&A bidder workflow"],
    openGraph: { title: "Managing Bidder Access — SpaceNexus Video Tutorial", description: "Video tutorial on tiered bidder permissions for sell-side M&A.", url: "https://spacenexus.net/tutorials/managing-bidder-access" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "Managing Bidder Access", description: "Tutorial on configuring tiered bidder permissions for sell-side M&A processes.", thumbnailUrl: "https://spacenexus.net/tutorials/managing-bidder-access/thumbnail.png", uploadDate: "2026-06-18", duration: "PT10M", contentUrl: "https://spacenexus.net/tutorials/managing-bidder-access", embedUrl: "https://spacenexus.net/tutorials/managing-bidder-access", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "Managing Bidder Access", item: "https://spacenexus.net/tutorials/managing-bidder-access" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Manage Bidder Access in a Virtual Data Room",
    description: "Configure tiered bidder permissions for sell-side M&A processes, including initial bidders, shortlisted bidders, and final-round access management.",
    totalTime: "PT10M",
    step: [
        { "@type": "HowToStep", name: "Design the bidder tier model", text: "Determine the tiered access structure to maintain competitive tension in the auction while controlling information disclosure." },
        { "@type": "HowToStep", name: "Create permission groups", text: "Set up groups for Initial Bidders, Shortlisted Bidders, Final Round, Counsel, and Advisors — each with separate access." },
        { "@type": "HowToStep", name: "Configure group-level access", text: "Apply folder and document-level permissions to each group. Hide confidential materials from initial bidders." },
        { "@type": "HowToStep", name: "Set up NDA click-through", text: "Require bidders to accept your NDA before accessing the data room. Track NDA acceptance in the audit log." },
        { "@type": "HowToStep", name: "Configure time-limited access", text: "Set access to expire at round deadlines. Stage disclosure as the process advances through rounds." },
        { "@type": "HowToStep", name: "Advance bidders between rounds", text: "Move bidders from Initial to Shortlisted to Final Round with bulk permission changes." },
        { "@type": "HowToStep", name: "Monitor bidder activity", text: "Use engagement analytics to identify the most active and serious bidders before advancing them." },
    ],
};

const steps = [
    { time: "0:00", title: "The bidder tier model", desc: "Why tiered access matters — controlling information disclosure to maintain competitive tension in the auction." },
    { time: "1:00", title: "Creating permission groups", desc: "Set up groups for Initial Bidders, Shortlisted Bidders, Final Round, Counsel, and Advisors — each with separate access." },
    { time: "3:00", title: "Configuring group-level access", desc: "Apply folder and document-level permissions to each group. Hide confidential materials from initial bidders." },
    { time: "5:00", title: "NDA click-through workflows", desc: "Require bidders to accept your NDA before accessing the data room. Track NDA acceptance in the audit log." },
    { time: "6:30", title: "Time-limited and staged access", desc: "Set access to expire at round deadlines. Stage disclosure as the process advances through rounds." },
    { time: "8:00", title: "Advancing bidders between rounds", desc: "Move bidders from Initial to Shortlisted to Final Round with bulk permission changes. Add or remove bidders at any stage." },
    { time: "9:30", title: "Monitoring bidder activity", desc: "Use engagement analytics to identify the most active and serious bidders before advancing them." },
];

export default function ManagingBidderAccessPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-bidder-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-bidder-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-bidder-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">Managing Bidder Access</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">10 min</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">Intermediate</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Managing Bidder Access</h1>
                    <p className="text-xl text-gray-600">Configure tiered bidder permissions for sell-side M&amp;A processes. Initial bidders, shortlisted bidders, and final-round access management.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/spacenexus/screenshots/deals.png')] bg-cover bg-center opacity-20"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <p className="text-white/80 text-sm font-medium">Video tutorial</p>
                            <p className="text-white/60 text-xs mt-1">10 min · Bidder access management</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Master the bidder tier model that maintains competitive tension in your sell-side process while ensuring each bidder sees only the appropriate information.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Designing a tier model that maintains competitive tension</li>
                        <li>Creating permission groups and assigning bidders</li>
                        <li>Staging disclosure through process rounds</li>
                        <li>Monitoring bidder activity to identify the most serious buyers</li>
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
