import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Engagement Analytics — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on using engagement analytics to identify the most serious bidders. Read heatmaps, time-on-document metrics, and bidder comparison dashboards.",
    alternates: { canonical: "https://spacenexus.net/tutorials/engagement-analytics" },
    keywords: ["VDR engagement analytics", "bidder analytics", "VDR read heatmaps", "sell-side analytics", "M&A bidder intelligence"],
    openGraph: { title: "Engagement Analytics — SpaceNexus Video Tutorial", description: "Video tutorial on engagement analytics for sell-side processes.", url: "https://spacenexus.net/tutorials/engagement-analytics" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "Engagement Analytics for Sell-Side", description: "Tutorial on using engagement analytics to identify the most serious bidders.", thumbnailUrl: "https://spacenexus.net/tutorials/engagement-analytics/thumbnail.png", uploadDate: "2026-06-10", duration: "PT11M", contentUrl: "https://spacenexus.net/tutorials/engagement-analytics", embedUrl: "https://spacenexus.net/tutorials/engagement-analytics", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "Engagement Analytics", item: "https://spacenexus.net/tutorials/engagement-analytics" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Engagement Analytics to Identify Serious Bidders",
    description: "Use engagement analytics to identify the most serious bidders through read heatmaps, time-on-document metrics, and bidder comparison dashboards.",
    totalTime: "PT11M",
    step: [
        { "@type": "HowToStep", name: "Review engagement dashboard", text: "Overview of the buyer engagement dashboard — what is tracked and how to read it." },
        { "@type": "HowToStep", name: "Analyze engagement scores", text: "Understand how the engagement score is calculated and what high vs low scores mean for the process." },
        { "@type": "HowToStep", name: "Read document heatmaps", text: "Read document heatmaps to see which sections bidders are spending the most time on." },
        { "@type": "HowToStep", name: "Compare bidder activity", text: "Side-by-side comparison of bidder activity to identify the most engaged and serious buyers." },
        { "@type": "HowToStep", name: "Analyze time-on-document", text: "Review how long bidders are spending on key documents and what that signals about their interest." },
        { "@type": "HowToStep", name: "Act on engagement data", text: "Use engagement analytics to prioritize follow-up, advance bidders between rounds, and identify stalling." },
    ],
};

const steps = [
    { time: "0:00", title: "The engagement analytics dashboard", desc: "Overview of the buyer engagement dashboard — what is tracked and how to read it." },
    { time: "1:30", title: "Bidder engagement scores", desc: "How the engagement score is calculated and what high vs low scores mean for the process." },
    { time: "3:30", title: "Document heatmaps", desc: "Reading document heatmaps to see which sections bidders are spending the most time on." },
    { time: "5:30", title: "Bidder comparison", desc: "Side-by-side comparison of bidder activity to identify the most engaged and serious buyers." },
    { time: "7:00", title: "Time-on-document metrics", desc: "How long bidders are spending on key documents and what that signals about their interest." },
    { time: "8:30", title: "Question patterns as analytics", desc: "What questions bidders are asking reveals their concerns, their due diligence progress, and their interest level." },
    { time: "10:00", title: "Acting on engagement data", desc: "How to use engagement analytics to prioritize follow-up, advance bidders between rounds, and identify stalling." },
];

export default function EngagementAnalyticsPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-ea-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-ea-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <Script id="tut-ea-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">Engagement Analytics</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">11 min</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">Intermediate</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Engagement Analytics for Sell-Side</h1>
                    <p className="text-xl text-gray-600">Use engagement analytics to identify the most serious bidders. Read heatmaps, time-on-document metrics, and bidder comparison dashboards.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/spacenexus/screenshots/activity.png')] bg-cover bg-center opacity-20"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            <p className="text-white/80 text-sm font-medium">Video tutorial</p>
                            <p className="text-white/60 text-xs mt-1">11 min · Engagement analytics</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Turn bidder activity data into actionable intelligence that drives better process decisions.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Reading bidder engagement scores and document heatmaps</li>
                        <li>Comparing bidder activity side by side to identify the most serious buyers</li>
                        <li>Using question patterns as engagement signals</li>
                        <li>Acting on engagement data to advance the process</li>
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
