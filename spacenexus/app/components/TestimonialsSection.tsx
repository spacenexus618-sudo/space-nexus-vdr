import type { Metadata } from "next";

const testimonials = [
    {
        quote:
            "Space Nexus cut our due diligence timeline from 8 weeks to 3. The AI document processing alone is worth the investment — our team spent zero time on manual indexing.",
        name: "Michael Chen",
        title: "Managing Director",
        company: "Apex Capital Partners",
        initials: "MC",
        color: "from-blue-500 to-blue-700",
        deal: "$340M acquisition",
    },
    {
        quote:
            "We've used Intralinks and Datasite. Space Nexus is significantly faster to set up and the granular permission controls are exactly what our legal team needed for cross-border deals.",
        name: "Sarah Mitchell",
        title: "General Counsel",
        company: "Thornton & Associates LLP",
        initials: "SM",
        color: "from-violet-500 to-violet-700",
        deal: "Series C capital raise",
    },
    {
        quote:
            "The Q&A module saved our team weeks of back-and-forth emails. Real-time activity analytics meant we always knew exactly which investors were most engaged with our materials.",
        name: "James Okonkwo",
        title: "VP Corporate Development",
        company: "NovaTech Industries",
        initials: "JO",
        color: "from-emerald-500 to-emerald-700",
        deal: "Strategic divestiture",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                        Customer Stories
                    </p>
                    <h2
                        id="testimonials-heading"
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Trusted by M&amp;A professionals worldwide
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Investment bankers, private equity firms, and law firms rely on Space
                        Nexus to close their most critical deals.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* Quote mark */}
                            <div className="text-3xl sm:text-5xl font-serif text-[#2563eb]/20 leading-none mb-4">&ldquo;</div>

                            {/* Deal badge */}
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563eb] mb-4 self-start">
                                {t.deal}
                            </span>

                            <blockquote className="text-gray-700 leading-relaxed text-sm flex-grow mb-6">
                                {t.quote}
                            </blockquote>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-600">
                                        {t.title} · {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust strip */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600">
                    {[
                        "Investment Banking",
                        "Private Equity",
                        "Law Firms",
                        "Corporate M&A",
                        "Real Estate",
                        "Life Sciences",
                    ].map((sector) => (
                        <span key={sector} className="text-sm font-semibold">
                            {sector}
                        </span>
                    ))}
                </div>
                <p className="text-center text-xs text-gray-600 mt-4">
                    Trusted across 20+ industries globally
                </p>
            </div>
        </section>
    );
}
