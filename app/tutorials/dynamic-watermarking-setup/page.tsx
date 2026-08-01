import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Dynamic Watermarking Setup — SpaceNexus Video Tutorial | SpaceNexus",
    description: "Video tutorial on configuring dynamic watermarks. Viewer identity, IP, timestamp, and best practices for document protection in M&A and legal workflows.",
    alternates: { canonical: "https://spacenexus.net/tutorials/dynamic-watermarking-setup" },
    keywords: ["VDR watermarking", "dynamic watermark setup", "document protection VDR", "M&A watermarking", "SpaceNexus watermark"],
    openGraph: { title: "Dynamic Watermarking Setup — SpaceNexus Video Tutorial", description: "Video tutorial on configuring dynamic watermarks.", url: "https://spacenexus.net/tutorials/dynamic-watermarking-setup" },
};

const videoSchema = { "@context": "https://schema.org", "@type": "VideoObject", name: "Dynamic Watermarking Setup", description: "Tutorial on configuring dynamic watermarks for document protection.", thumbnailUrl: "https://spacenexus.net/tutorials/dynamic-watermarking-setup/thumbnail.png", uploadDate: "2026-06-12", duration: "PT8M", contentUrl: "https://spacenexus.net/tutorials/dynamic-watermarking-setup", embedUrl: "https://spacenexus.net/tutorials/dynamic-watermarking-setup", publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" }, { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://spacenexus.net/tutorials" }, { "@type": "ListItem", position: 3, name: "Dynamic Watermarking Setup", item: "https://spacenexus.net/tutorials/dynamic-watermarking-setup" }] };

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Configure Dynamic Watermarks",
    description: "Set up dynamic watermarks with viewer identity, IP, and timestamp for document protection in M&A and legal workflows.",
    totalTime: "PT8M",
    step: [
        { "@type": "HowToStep", name: "Understand watermark content", text: "Choose what to include in the watermark: viewer name, email, IP, timestamp, and any custom fields." },
        { "@type": "HowToStep", name: "Configure placement", text: "Configure diagonal vs header/footer placement, opacity, font size, and rotation for readability without obscuring content." },
        { "@type": "HowToStep", name: "Set per-document policies", text: "Apply different watermark policies to different document types — sensitive materials get more prominent watermarks." },
        { "@type": "HowToStep", name: "Verify PDF persistence", text: "Confirm the watermark persists in downloaded documents, even when the user converts to other formats." },
        { "@type": "HowToStep", name: "Test leak identification", text: "Use the watermark to identify the source of a leaked document, with real-world examples of forensic identification." },
    ],
};

const steps = [
    { time: "0:00", title: "How dynamic watermarks work", desc: "Server-side rendering of viewer identity, IP, and timestamp on every page — the forensic deterrent that prevents leaks." },
    { time: "1:30", title: "Configuring watermark content", desc: "Choose what to include in the watermark: viewer name, email, IP, timestamp, and any custom fields." },
    { time: "3:00", title: "Watermark placement and visibility", desc: "Configure diagonal vs header/footer placement, opacity, font size, and rotation for readability without obscuring content." },
    { time: "4:30", title: "Per-document and per-folder policies", desc: "Apply different watermark policies to different document types — sensitive materials get more prominent watermarks." },
    { time: "5:30", title: "Watermarks and downloaded PDFs", desc: "How the watermark persists in downloaded documents, even when the user converts to other formats." },
    { time: "6:30", title: "Forensic identification of leaks", desc: "How to use the watermark to identify the source of a leaked document, with real-world examples." },
];

export default function DynamicWatermarkingPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="tut-wm-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <Script id="tut-wm-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="tut-wm-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <section className="pt-28 pb-12 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link><span>›</span>
                        <Link href="/tutorials" className="hover:text-[#2563eb] transition-colors">Tutorials</Link><span>›</span>
                        <span className="text-gray-900">Dynamic Watermarking</span>
                    </nav>
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                        <span className="font-mono bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded">VIDEO TUTORIAL</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">8 min</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-600">Beginner</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Dynamic Watermarking Setup</h1>
                    <p className="text-xl text-gray-600">Configure dynamic watermarks with viewer identity, IP, and timestamp. Best practices for document protection in M&amp;A and legal workflows.</p>
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
                            <p className="text-white/60 text-xs mt-1">8 min · Watermarking configuration</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Configure watermarks that protect your most sensitive documents and create a strong deterrent against leaks.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>What dynamic watermarks are and how they deter leaks</li>
                        <li>Configuring watermark content, placement, and visibility</li>
                        <li>Applying different watermark policies to different document types</li>
                        <li>How watermarks persist in downloaded documents</li>
                        <li>Using watermarks to identify the source of any leak</li>
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
