import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Structured Q&A Workflow — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on setting up and managing the structured Q&A workflow. Routing rules, SLAs, escalation paths, and pre-prepared FAQ strategies.",
    alternates: { canonical: "https://spacenexus.net/tutorials/structured-qa-workflow" },
    keywords: ["VDR Q&A workflow", "due diligence Q&A", "data room questions", "VDR Q&A setup", "structured Q&A"],
    openGraph: { title: "Structured Q&A Workflow — SpaceNexus Video Tutorial", description: "Video tutorial on structured Q&A workflow setup.", url: "https://spacenexus.net/tutorials/structured-qa-workflow" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "Structured Q&A Workflow", description: "Tutorial on setting up and managing the structured Q&A workflow.", thumbnailUrl: "https://spacenexus.net/tutorials/structured-qa-workflow/thumbnail.png", uploadDate: "2026-06-15", duration: "PT15M", contentUrl: "https://spacenexus.net/tutorials/structured-qa-workflow", embedUrl: "https://spacenexus.net/tutorials/structured-qa-workflow", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "Structured Q&A Workflow", item: "https://spacenexus.net/tutorials/structured-qa-workflow" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up a Structured Q&A Workflow",
    description: "Configure category-based Q&A routing, response SLAs, escalation paths, and pre-prepared FAQ strategies for due diligence processes.",
    totalTime: "PT15M",
    step: [
        { "@type": "HowToStep", name: "Design Q&A categories", text: "Create category-based routing so legal questions go to GC, financial to CFO, and technical to CTO automatically." },
        { "@type": "HowToStep", name: "Set response SLAs", text: "Configure service-level agreements by question type — 4 hours for simple, 24 hours for complex, 3-5 days for cross-functional." },
        { "@type": "HowToStep", name: "Build pre-prepared FAQ", text: "Create the pre-prepared FAQ document with the 30-50 most likely buyer questions and prepared answers before launch." },
        { "@type": "HowToStep", name: "Configure escalation paths", text: "Set up automatic escalation when SLAs are missed. Add notifications to deal leads and senior team members." },
        { "@type": "HowToStep", name: "Enable buyer Q&A submission", text: "Configure how buyers submit questions through the workflow, with document linking and follow-up question support." },
        { "@type": "HowToStep", name: "Review Q&A analytics", text: "Track question volume, response times, and patterns. Use analytics to identify buyers most engaged with the process." },
    ],
};

const steps = [
    { time: "0:00", title: "Why structured Q&A matters", desc: "The difference between chaotic email-based Q&A and a structured workflow that accelerates deals." },
    { time: "1:30", title: "Configuring Q&A categories and routing", desc: "Set up category-based routing so legal questions go to GC, financial to CFO, and technical to CTO automatically." },
    { time: "4:00", title: "Setting response SLAs", desc: "Configure service-level agreements by question type — 4 hours for simple, 24 hours for complex, 3-5 days for cross-functional." },
    { time: "6:30", title: "Building the pre-prepared FAQ", desc: "Create the pre-prepared FAQ document with the 30-50 most likely buyer questions and prepared answers before launch." },
    { time: "9:00", title: "Escalation paths and notifications", desc: "Configure automatic escalation when SLAs are missed. Notifications to deal leads and senior team members." },
    { time: "11:30", title: "Buyer-side Q&A submission", desc: "How buyers submit questions through the workflow, with document linking and follow-up question support." },
    { time: "13:00", title: "Q&A analytics and reporting", desc: "Track question volume, response times, and patterns. Identify buyers most engaged with the process." },
];

export default function StructuredQAWorkflowPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-qa-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-qa-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-qa-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">Structured Q&amp;A Workflow</span>
                    </nav>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Q&amp;A Workflow</h1>
                    <p className="text-xl text-gray-600">Set up and manage the structured Q&amp;A workflow. Routing rules, SLAs, escalation paths, and pre-prepared FAQ strategies.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Replace chaotic email-based Q&amp;A with a structured workflow that accelerates your deal and keeps buyers confident in the process.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Designing Q&amp;A categories and routing rules</li>
                        <li>Setting response SLAs that match your team&apos;s capacity</li>
                        <li>Building the pre-prepared FAQ for faster first-round answers</li>
                        <li>Configuring escalation paths for unanswered questions</li>
                        <li>Using Q&amp;A analytics to predict bidder engagement</li>
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
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
