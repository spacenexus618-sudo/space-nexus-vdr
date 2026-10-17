import Link from "next/link";

const kindoraFeatures = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        label: "Donor Management",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        label: "Grant Tracking",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Program Management",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        label: "Impact Reporting",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: "Financial Management",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
        label: "Campaign Management",
    },
];

const stats = [
    { value: "12", label: "Core Modules" },
    { value: "100%", label: "Cloud-based" },
    { value: "1 platform", label: "vs. 6 tools" },
    { value: "Free trial", label: "No credit card" },
];

const orgTypes = ["Social Services", "Community Orgs", "Youth Programs", "Housing NGOs", "Faith-based"];

export default function KindoraCallout() {
    return (
        <section
            aria-label="Kindora Nonprofit Management Software"
            style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff)" }}
            className="py-20 border-t border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <div className="flex items-center gap-2 mb-8">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Also from Space Nexus
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Copy */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                            Kindora —{" "}
                            <span className="text-[#2563eb]">Nonprofit Management Software</span>{" "}
                            for the mission-driven sector
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The all-in-one platform for nonprofits to manage donors, track grants,
                            deliver client programs, handle finances, and report impact — all from
                            a single dashboard. Replace spreadsheets with one unified{" "}
                            <Link href="/kindora" className="text-[#2563eb] font-semibold hover:underline">
                                nonprofit management platform
                            </Link>
                            .
                        </p>

                        {/* Feature pill list */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {kindoraFeatures.map((f) => (
                                <li key={f.label} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                                    <span className="shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb]">
                                        {f.icon}
                                    </span>
                                    {f.label}
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/kindora"
                                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1d4ed8] transition-colors"
                                style={{ boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}
                            >
                                Explore Kindora
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/kindora/pricing"
                                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual card — pt-6 pr-6 to create space for the floating badge */}
                    <div className="relative pt-6 pr-6">
                        {/* Floating "Free to start" badge — sits above/outside the card */}
                        <div
                            className="absolute -top-3 -right-3 sm:top-0 sm:right-0 z-10 bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-2"
                            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" />
                            <span className="text-sm font-semibold text-gray-800">Free to start</span>
                        </div>

                        {/* Main card — inline style guarantees correct blue gradient regardless of Tailwind version */}
                        <div
                            className="rounded-2xl p-8 text-white"
                            style={{
                                background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                                boxShadow: "0 20px 60px rgba(37,99,235,0.35)",
                            }}
                        >
                            {/* Brand header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "rgba(255,255,255,0.2)" }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-black text-lg leading-none tracking-wide">KINDORA</p>
                                    <p className="text-blue-200 text-xs mt-0.5 font-medium">NGO OS</p>
                                </div>
                            </div>

                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-xl p-4"
                                        style={{ background: "rgba(255,255,255,0.15)" }}
                                    >
                                        <p className="text-xl font-black leading-none mb-1">{stat.value}</p>
                                        <p className="text-blue-200 text-xs font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Org type tags */}
                            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                                Built for
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {orgTypes.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs text-white px-2.5 py-1 rounded-full font-medium"
                                        style={{ background: "rgba(255,255,255,0.18)" }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
