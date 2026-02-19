import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kindora vs Competitors | Best Nonprofit Management Software Comparison",
    description:
        "Compare Kindora vs Bloomerang, Salesforce Nonprofit Cloud, Bonterra, Keela, and spreadsheets. See why nonprofits choose Kindora as the best all-in-one nonprofit management platform.",
    alternates: {
        canonical: "https://spacenexus.net/kindora/vs-competitors",
    },
    openGraph: {
        title: "Kindora vs Competitors — Nonprofit Software Comparison",
        description:
            "Kindora vs Bloomerang, Salesforce, Bonterra, Keela & more. The only affordable all-in-one platform with donor CRM, grant management, case management, and nonprofit accounting.",
        url: "https://spacenexus.net/kindora/vs-competitors",
        siteName: "Kindora by Space Nexus",
        type: "website",
    },
    keywords: [
        "kindora vs bloomerang",
        "kindora vs salesforce nonprofit",
        "kindora vs bonterra",
        "kindora vs keela",
        "best nonprofit management software",
        "nonprofit software comparison",
        "bloomerang alternative",
        "salesforce nonprofit alternative",
        "nonprofit crm comparison",
        "all-in-one nonprofit platform",
    ],
};

const features = [
    "Donor CRM & Tracking",
    "Grant Lifecycle Management",
    "Client Case Management",
    "Nonprofit Accounting & Cost Allocation",
    "Volunteer Management",
    "Campaign & Fundraising Tools",
    "Built-in Communications Hub",
    "Export-Ready Board Reports",
    "Affordable for Small Nonprofits",
    "Ready in Minutes (No Consultants)",
];

type FeatureValue = true | false | "partial";

const competitors: {
    name: string;
    tagline: string;
    color: string;
    values: FeatureValue[];
}[] = [
        {
            name: "Kindora",
            tagline: "All-in-one",
            color: "bg-[#2563eb] text-white",
            values: [true, true, true, true, true, true, true, true, true, true],
        },
        {
            name: "Bloomerang",
            tagline: "Donor-only",
            color: "bg-gray-100 text-gray-700",
            values: [true, false, false, false, "partial", true, "partial", "partial", true, true],
        },
        {
            name: "Salesforce NPC",
            tagline: "Too complex",
            color: "bg-gray-100 text-gray-700",
            values: [true, "partial", "partial", false, "partial", true, "partial", true, false, false],
        },
        {
            name: "Bonterra Apricot",
            tagline: "Case mgmt only",
            color: "bg-gray-100 text-gray-700",
            values: [false, false, true, false, false, false, false, "partial", false, false],
        },
        {
            name: "Keela",
            tagline: "Limited scope",
            color: "bg-gray-100 text-gray-700",
            values: [true, false, false, false, false, true, "partial", "partial", true, true],
        },
        {
            name: "Spreadsheets",
            tagline: "Error-prone",
            color: "bg-gray-100 text-gray-700",
            values: [false, false, false, false, false, false, false, false, true, true],
        },
    ];

const competitorDetails = [
    {
        name: "Bloomerang",
        slug: "bloomerang",
        headline: "Kindora vs Bloomerang",
        verdict: "Bloomerang is great for donor retention — but that's all it does.",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        bloomerangStrengths: [
            "Best-in-class donor retention metrics",
            "Intuitive, easy-to-learn UI",
            "Strong email marketing integrations",
            "Good for small fundraising teams",
        ],
        bloomerangWeaknesses: [
            "No grant lifecycle management",
            "No client case management",
            "No nonprofit accounting or cost allocation",
            "No volunteer management module",
            "Requires add-ons for basic communications",
        ],
        kindoraAdvantages: [
            "Everything Bloomerang does for donors — plus grants, clients, and finances",
            "Donor engagement scoring and lapsed donor alerts built in",
            "No need to pay for separate grant tracking software",
            "One platform replaces 3–4 tools",
        ],
        bestFor: "Organizations that only do fundraising",
        kindoraBestFor: "Nonprofits that also manage grants, programs, or social services",
    },
    {
        name: "Salesforce Nonprofit Cloud",
        slug: "salesforce",
        headline: "Kindora vs Salesforce Nonprofit Cloud",
        verdict: "Salesforce is powerful — but it takes months to set up and costs a fortune.",
        color: "from-violet-500 to-violet-600",
        bgColor: "bg-violet-50",
        borderColor: "border-violet-200",
        textColor: "text-violet-700",
        bloomerangStrengths: [
            "Highly customizable for any workflow",
            "360° view of all organizational data",
            "Powerful automation and AI features",
            "Huge ecosystem of integrations",
        ],
        bloomerangWeaknesses: [
            "Requires expensive consultants to implement",
            "Takes 3–6 months to go live",
            "Very steep learning curve for staff",
            "No built-in nonprofit accounting",
            "Hidden costs: licenses, add-ons, training",
        ],
        kindoraAdvantages: [
            "Ready in under 30 minutes — no consultants needed",
            "Built specifically for nonprofits, not adapted from a sales CRM",
            "Transparent, affordable pricing",
            "Includes nonprofit accounting and cost allocation out of the box",
        ],
        bestFor: "Large enterprises with dedicated IT teams and big budgets",
        kindoraBestFor: "Small to mid-sized nonprofits that need power without complexity",
    },
    {
        name: "Bonterra Apricot",
        slug: "bonterra",
        headline: "Kindora vs Bonterra Apricot",
        verdict: "Bonterra Apricot is strong for case management — but ignores your donors and finances.",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        bloomerangStrengths: [
            "Purpose-built for social services case management",
            "Strong outcome tracking and program reporting",
            "Configurable intake forms and workflows",
            "Good for human services organizations",
        ],
        bloomerangWeaknesses: [
            "No donor CRM or fundraising tools",
            "No grant lifecycle management",
            "No nonprofit accounting",
            "Expensive for small nonprofits",
            "Requires separate tools for donor management",
        ],
        kindoraAdvantages: [
            "Full case management AND donor CRM in one platform",
            "Track clients AND funders without switching tools",
            "Grant management connects directly to program delivery",
            "Prove impact to funders with unified reporting",
        ],
        bestFor: "Social service agencies that only need case management",
        kindoraBestFor: "Human services nonprofits that also fundraise and manage grants",
    },
    {
        name: "Keela",
        slug: "keela",
        headline: "Kindora vs Keela",
        verdict: "Keela is a solid donor CRM — but lacks grant management and case management.",
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
        bloomerangStrengths: [
            "Affordable pricing for small nonprofits",
            "Built-in email marketing and automation",
            "Good fundraising campaign tools",
            "Easy to use for non-technical staff",
        ],
        bloomerangWeaknesses: [
            "No grant lifecycle management",
            "No client case management",
            "No nonprofit accounting or cost allocation",
            "Limited reporting for board presentations",
            "No volunteer management",
        ],
        kindoraAdvantages: [
            "All of Keela's fundraising tools plus grant and program management",
            "Full nonprofit accounting with cost allocation",
            "Board-ready PDF and Excel reports in one click",
            "Scales with your organization as you grow",
        ],
        bestFor: "Small nonprofits focused purely on fundraising",
        kindoraBestFor: "Growing nonprofits that need more than just a donor CRM",
    },
    {
        name: "Spreadsheets",
        slug: "spreadsheets",
        headline: "Kindora vs Spreadsheets (Excel / Google Sheets)",
        verdict: "Spreadsheets are free — but they cost you in errors, time, and missed opportunities.",
        color: "from-rose-500 to-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
        bloomerangStrengths: [
            "Free to use",
            "Flexible — can be shaped to any workflow",
            "No learning curve for basic data entry",
            "Familiar to most staff",
        ],
        bloomerangWeaknesses: [
            "No automation — everything is manual",
            "Error-prone: formulas break, data gets duplicated",
            "No donor engagement tracking or alerts",
            "No grant deadline reminders",
            "No role-based access control",
            "Reporting takes hours of manual work",
            "Data lives in silos across multiple files",
        ],
        kindoraAdvantages: [
            "Automates donor receipts, grant reminders, and reports",
            "Single source of truth — no more duplicate spreadsheets",
            "Role-based access so the right people see the right data",
            "Saves 10+ hours per week on manual data work",
        ],
        bestFor: "Organizations just starting out with no budget",
        kindoraBestFor: "Any nonprofit ready to stop losing time to manual data entry",
    },
];

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function MinusIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
    );
}

function FeatureCell({ value, isKindora }: { value: FeatureValue; isKindora: boolean }) {
    if (value === true) {
        return (
            <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${isKindora ? "bg-[#2563eb] text-white" : "bg-green-100 text-green-600"}`}>
                    <CheckIcon className="w-4 h-4" />
                </span>
            </td>
        );
    }
    if (value === "partial") {
        return (
            <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                    <MinusIcon className="w-4 h-4" />
                </span>
            </td>
        );
    }
    return (
        <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                <XIcon className="w-4 h-4" />
            </span>
        </td>
    );
}

export default function VsCompetitorsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-6">
                        <CheckIcon className="w-4 h-4" />
                        Nonprofit Software Comparison
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Kindora vs. the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                            Alternatives
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Bloomerang does donors. Salesforce does complexity. Bonterra does cases. Spreadsheets do nothing automatically.{" "}
                        <strong className="text-gray-900">Kindora does everything</strong> — at a price nonprofits can actually afford.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://cad.spaceaiapp.com/kindora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Try Kindora Free
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <Link
                            href="/kindora/demo"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick nav anchors */}
            <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0 mr-2">
                            Jump to:
                        </span>
                        {[
                            { label: "Full Comparison", href: "#comparison-table" },
                            { label: "vs Bloomerang", href: "#vs-bloomerang" },
                            { label: "vs Salesforce", href: "#vs-salesforce" },
                            { label: "vs Bonterra", href: "#vs-bonterra" },
                            { label: "vs Keela", href: "#vs-keela" },
                            { label: "vs Spreadsheets", href: "#vs-spreadsheets" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="shrink-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] hover:bg-blue-50 rounded-full transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Master Comparison Table */}
            <section className="py-20 lg:py-28 bg-white" id="comparison-table">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                            Side-by-Side Comparison
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How Kindora stacks up against every alternative
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            10 features that matter most to nonprofits — compared across 6 tools.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left px-5 py-5 text-gray-500 font-medium bg-gray-50 min-w-[200px]">
                                        Feature
                                    </th>
                                    {competitors.map((c) => (
                                        <th
                                            key={c.name}
                                            className={`px-4 py-5 text-center min-w-[120px] ${c.name === "Kindora" ? "bg-[#2563eb]" : "bg-gray-50"}`}
                                        >
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`text-xs font-semibold uppercase tracking-wider ${c.name === "Kindora" ? "text-blue-200" : "text-gray-400"}`}>
                                                    {c.tagline}
                                                </span>
                                                <span className={`text-sm font-bold ${c.name === "Kindora" ? "text-white" : "text-gray-700"}`}>
                                                    {c.name}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, fi) => (
                                    <tr
                                        key={feature}
                                        className={`border-b border-gray-100 ${fi % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                                    >
                                        <td className="px-5 py-4 text-gray-700 font-medium">{feature}</td>
                                        {competitors.map((c) => (
                                            <FeatureCell
                                                key={c.name}
                                                value={c.values[fi]}
                                                isKindora={c.name === "Kindora"}
                                            />
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="px-5 py-4 text-gray-500 font-semibold text-sm">
                                        Total ✅ Features
                                    </td>
                                    {competitors.map((c) => {
                                        const count = c.values.filter((v) => v === true).length;
                                        return (
                                            <td
                                                key={c.name}
                                                className={`px-4 py-4 text-center font-black text-lg ${c.name === "Kindora" ? "text-[#2563eb] bg-blue-50/60" : "text-gray-400"}`}
                                            >
                                                {count}/{features.length}
                                            </td>
                                        );
                                    })}
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-5 py-3" />
                                    {competitors.map((c) => (
                                        <td key={c.name} className={`px-4 py-3 text-center ${c.name === "Kindora" ? "bg-blue-50/60" : ""}`}>
                                            {c.name === "Kindora" ? (
                                                <a
                                                    href="https://cad.spaceaiapp.com/kindora"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors"
                                                >
                                                    Try Free
                                                </a>
                                            ) : (
                                                <span className="text-xs text-gray-400">Limited</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                                <CheckIcon className="w-3 h-3" />
                            </span>
                            Full support
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                                <MinusIcon className="w-3 h-3" />
                            </span>
                            Partial / add-on required
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                                <XIcon className="w-3 h-3" />
                            </span>
                            Not available
                        </span>
                    </div>
                </div>
            </section>

            {/* Individual Competitor Sections */}
            {competitorDetails.map((comp, idx) => (
                <section
                    key={comp.slug}
                    id={`vs-${comp.slug}`}
                    className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section header */}
                        <div className="mb-12">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${comp.bgColor} ${comp.textColor} text-sm font-semibold mb-4`}>
                                <span>Detailed Comparison</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                {comp.headline}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl">
                                {comp.verdict}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-10">
                            {/* Competitor card */}
                            <div className={`rounded-2xl border ${comp.borderColor} ${comp.bgColor} p-6 lg:p-8`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-white font-bold text-sm`}>
                                        {comp.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{comp.name}</h3>
                                        <p className={`text-xs font-semibold ${comp.textColor}`}>What they do well</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {comp.bloomerangStrengths.map((s) => (
                                        <li key={s} className="flex items-start gap-2.5 text-sm text-gray-700">
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <CheckIcon className="w-3 h-3" />
                                            </span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t border-gray-200 pt-5">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        Where they fall short
                                    </p>
                                    <ul className="space-y-2.5">
                                        {comp.bloomerangWeaknesses.map((w) => (
                                            <li key={w} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                                                    <XIcon className="w-3 h-3" />
                                                </span>
                                                {w}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Kindora card */}
                            <div className="rounded-2xl border-2 border-[#2563eb] bg-white p-6 lg:p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" />
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">
                                        K
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Kindora</h3>
                                        <p className="text-xs font-semibold text-[#2563eb]">Why Kindora wins</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {comp.kindoraAdvantages.map((a) => (
                                        <li key={a} className="flex items-start gap-2.5 text-sm text-gray-700">
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                                                <CheckIcon className="w-3 h-3" />
                                            </span>
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t border-gray-100 pt-5 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-24 shrink-0 mt-0.5">
                                            {comp.name} best for:
                                        </span>
                                        <span className="text-sm text-gray-600">{comp.bestFor}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">
                                            Kindora best for:
                                        </span>
                                        <span className="text-sm text-gray-800 font-medium">{comp.kindoraBestFor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA for each section */}
                        <div className="text-center">
                            <a
                                href="https://cad.spaceaiapp.com/kindora"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Switch to Kindora — Free Trial
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            ))}

            {/* The Kindora Advantage Summary */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">
                        The Bottom Line
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        The only platform that does it all — affordably
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                        No other nonprofit software combines donor CRM, grant lifecycle management, client case management, nonprofit accounting, and communications in one affordable platform.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                stat: "10/10",
                                label: "Features covered",
                                sub: "vs 2–5 for competitors",
                            },
                            {
                                stat: "30 min",
                                label: "To get started",
                                sub: "vs months for Salesforce",
                            },
                            {
                                stat: "1 platform",
                                label: "Replaces 3–4 tools",
                                sub: "Saves money and complexity",
                            },
                        ].map((item) => (
                            <div key={item.label} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                                <p className="text-4xl font-black text-white mb-1">{item.stat}</p>
                                <p className="text-base font-semibold text-blue-100 mb-1">{item.label}</p>
                                <p className="text-sm text-blue-300">{item.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://cad.spaceaiapp.com/kindora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Start Free — No Credit Card Required
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <Link
                            href="/kindora/demo"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
                        >
                            Request a Live Demo
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-blue-300">
                        Free trial · No credit card · Setup in 30 minutes · Cancel anytime
                    </p>
                </div>
            </section>

            {/* FAQ for this page */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-600">Common questions when comparing nonprofit software.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Is Kindora really better than Bloomerang?",
                                a: "Kindora includes everything Bloomerang offers for donor management — engagement scoring, giving history, lapsed donor alerts — plus grant lifecycle management, client case management, nonprofit accounting, and more. If you only do fundraising, Bloomerang is fine. If you manage grants or programs too, Kindora is the better choice.",
                            },
                            {
                                q: "How does Kindora compare to Salesforce Nonprofit Cloud in cost?",
                                a: "Salesforce Nonprofit Cloud typically costs $36,000–$100,000+ per year when you factor in licenses, implementation consultants, customization, and training. Kindora is a fraction of that cost, requires no consultants, and is ready in under 30 minutes.",
                            },
                            {
                                q: "Can Kindora replace Bonterra Apricot for case management?",
                                a: "Yes. Kindora includes full client intake, program enrollment, service delivery tracking, and outcome reporting — the core of what Bonterra Apricot does. And Kindora also adds donor CRM and grant management that Bonterra lacks.",
                            },
                            {
                                q: "Why should I switch from spreadsheets to Kindora?",
                                a: "Spreadsheets are free but they cost you in errors, duplicated data, and hours of manual work. Kindora automates donor receipts, grant deadline reminders, and board reports — saving most nonprofits 10+ hours per week. And your data is always accurate and in one place.",
                            },
                            {
                                q: "Does Kindora offer a free trial?",
                                a: "Yes — you can start a free trial at cad.spaceaiapp.com/kindora with no credit card required. You can be fully set up in under 30 minutes.",
                            },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                                    <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                                    <svg
                                        className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-5 pt-1">
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
