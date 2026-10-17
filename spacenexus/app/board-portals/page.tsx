import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Best Board Portals 2026 | SpaceNexus",
    description: "Independent comparison of board portal software. Features, security, pricing, and which one boards actually use.",
    alternates: {
        canonical: "https://spacenexus.net/board-portals",
    },
    openGraph: {
        title: "Best Board Portals 2026 | SpaceNexus",
        description:
            "Independent comparison of board portal software. Features, security, pricing, and which...",
        url: "https://spacenexus.net/board-portals",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Board Portals: The Complete 2026 Buyer's Guide & Comparison",
        description:
            "The complete guide to board portals. Comparison with email and paper, key features, use cases, and selection framework.",
    },
    keywords: [
        "board portals",
        "board portal",
        "board portal comparison",
        "board portal guide",
        "best board portals",
        "board portal vs email",
        "board portal vs paper",
        "board governance software",
        "board management platform",
        "board portal features",
        "board portal benefits",
        "board portal for non-profits",
        "board portal for corporate",
        "board communication software",
        "secure board portal",
    ],
};

const comparisonFramework = [
    {
        dimension: "Security & Compliance",
        weight: "Critical",
        description:
            "Board materials include the most sensitive information an organization handles. Look for SOC 2 Type II, ISO 27001, GDPR compliance, AES-256 encryption at rest, TLS 1.3 in transit, MFA enforcement, and immutable audit trails that satisfy directors' & officers' (D&O) liability requirements.",
    },
    {
        dimension: "AI & Automation",
        weight: "High",
        description:
            "Modern board portals use AI to auto-assemble board packs from source documents, with consistent formatting, automatic page numbering, and one-click distribution. Legacy platforms require manual assembly — often taking days before each meeting.",
    },
    {
        dimension: "User Experience",
        weight: "High",
        description:
            "Directors are part-time users with limited tech tolerance. The best board portals are intuitive on desktop, tablet, and mobile — with offline reading, annotation, and instant search across years of board materials.",
    },
    {
        dimension: "Collaboration Features",
        weight: "High",
        description:
            "Secure in-app messaging replaces email threads. Threaded discussions, @mentions, and approval workflows keep board business in one auditable place. Look for e-signature support for resolutions and consent actions.",
    },
    {
        dimension: "Governance & Compliance",
        weight: "Critical",
        description:
            "Committee management, D&O questionnaires, entity management, conflict-of-interest tracking, and regulatory filing workflows are essential for public companies and regulated industries.",
    },
    {
        dimension: "Integration & API",
        weight: "Medium",
        description:
            "Integration with calendar systems, SSO providers (Okta, Azure AD), document management, and e-signature platforms (DocuSign, Adobe Sign) reduces friction for directors and the corporate secretary.",
    },
    {
        dimension: "Pricing Model",
        weight: "Medium",
        description:
            "Per-director pricing, per-meeting fees, and quote-only enterprise contracts can scale unpredictably. Transparent flat-rate pricing that fits your board size is the modern standard.",
    },
    {
        dimension: "Vendor Track Record",
        weight: "High",
        description:
            "Board portals handle some of your most sensitive communications. Choose a vendor with a long track record, strong security posture, and a roadmap aligned with your governance needs.",
    },
];

const boardTypes = [
    {
        title: "Public Company Boards",
        description:
            "Public company boards face the highest governance and disclosure standards. They need board portals with D&O questionnaire support, audit-grade audit trails, SEC filing integrations, and enterprise-grade security.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        title: "Private Company Boards",
        description:
            "Private company boards need secure board communications and D&O protection but often don't need public-company disclosure workflows. Look for AI board pack assembly and transparent pricing that fits smaller boards.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
        title: "Non-Profit & Association Boards",
        description:
            "Non-profit boards need board portals that support committee management, member communications, and grantmaking governance — with pricing that fits non-profit budgets and integrations with donor management systems.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    },
    {
        title: "Advisory Boards",
        description:
            "Corporate advisory boards need secure materials distribution, meeting capture, and integration with the parent company's governance workflows — often with shorter engagement cycles than full boards.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548 547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
        title: "Credit Union & Cooperative Boards",
        description:
            "Credit union and cooperative boards need board portals that support director elections, member communications, and regulatory filings (NCUA in the US, FCA in the UK) with audit trails that satisfy state and federal regulators.",
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    },
    {
        title: "Investment Committee Boards",
        description:
            "Private equity, hedge fund, and family office investment committees need board portals that handle deal materials, capture investment decisions, and maintain fiduciary records for SEC and regulatory scrutiny.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
        title: "Healthcare & Hospital Boards",
        description:
            "Hospital and healthcare system boards need board portals that manage quality, compliance, and credentialing committee workflows — with HIPAA-aligned controls and Joint Commission documentation.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
        title: "Education & University Boards",
        description:
            "University and school boards need board portals that handle trustee communications, academic governance, and donor relations — often with public meeting requirements and FOIA compliance.",
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
];

const boardPortalVsAlternatives = [
    {
        capability: "NDA / access control enforcement",
        boardPortal: "✓ Built-in click-through, timestamped, IP-bound",
        email: "✗ Manual — every recipient is a potential leak",
        paper: "Partial — physical security only",
    },
    {
        capability: "Immutable audit trail",
        boardPortal: "✓ Every view, download, sign, comment logged",
        email: "✗ No central record of who saw what",
        paper: "✗ Manual logbook, easy to lose or falsify",
    },
    {
        capability: "D&O liability protection",
        boardPortal: "✓ Documented processes + audit trail",
        email: "✗ Forwarded emails break the record",
        paper: "Partial — depends on procedural discipline",
    },
    {
        capability: "AI board pack assembly",
        boardPortal: "✓ Auto-generated, consistent formatting",
        email: "✗ Manual assembly every meeting",
        paper: "✗ Manual printing, binding, distribution",
    },
    {
        capability: "Secure in-app messaging",
        boardPortal: "✓ Threaded, searchable, auditable",
        email: "Partial — but forwarded, leaked, lost",
        paper: "✗ Not possible",
    },
    {
        capability: "E-signature for resolutions",
        boardPortal: "✓ ESIGN Act / eIDAS compliant",
        email: "Partial — DocuSign attachments work but not integrated",
        paper: "✗ Wet signatures required",
    },
    {
        capability: "Real-time search across years of materials",
        boardPortal: "✓ OCR + full-text search",
        email: "✗ Search is unreliable across mail clients",
        paper: "✗ Manual — flip through binders",
    },
    {
        capability: "Director access on mobile/tablet",
        boardPortal: "✓ Native mobile apps with offline reading",
        email: "Partial — depends on email app",
        paper: "✗ Bulky board packs to carry home",
    },
    {
        capability: "Environmental impact",
        boardPortal: "Zero paper",
        email: "Zero paper",
        paper: "Tens of thousands of pages per board per year",
    },
    {
        capability: "Cost per meeting",
        boardPortal: "Marginal — included in subscription",
        email: "Marginal",
        paper: "Printing, binding, courier, venue, admin time",
    },
];

const implementationSteps = [
    {
        step: "01",
        title: "Define Your Governance Requirements",
        description:
            "Audit your current board processes. Document who needs access, what committees you have, what integration points matter (calendar, SSO, e-signature), and what security certifications your D&O insurer or regulator requires.",
    },
    {
        step: "02",
        title: "Evaluate 3–5 Board Portal Vendors",
        description:
            "Shortlist 3–5 board portals that match your requirements. Run structured demos with your corporate secretary and a sample director. Test on tablet, mobile, and offline. Validate security certifications with your security team.",
    },
    {
        step: "03",
        title: "Run a Pilot with One Committee",
        description:
            "Don't switch the full board at once. Pilot with one committee (audit is a common starting point) for 2–3 meetings. Collect feedback from directors, refine the configuration, and build internal champions.",
    },
    {
        step: "04",
        title: "Onboard All Directors Securely",
        description:
            "Use the board portal's onboarding workflow to invite all directors. Require MFA setup, SSO enrollment (if available), and a brief training session. Most modern portals can onboard a full board in under two weeks.",
    },
    {
        step: "05",
        title: "Migrate Historical Materials",
        description:
            "Bulk upload the last 2–3 years of board packs, minutes, and resolutions. AI auto-categorization will index everything for full-text search. Archive older materials to cold storage for compliance retention.",
    },
    {
        step: "06",
        title: "Train and Iterate",
        description:
            "Provide ongoing training for new directors. Collect feedback after each meeting. Refine the board pack template, committee workflows, and permission structure as your governance needs evolve.",
    },
];

const faqItems = [
    {
        question: "What is a board portal?",
        answer:
            "A board portal (also called board management software) is a secure platform that helps corporate boards, non-profit boards, and advisory committees manage their governance workflows. It replaces email and unsecured cloud storage for distributing board packs, scheduling meetings, capturing minutes, signing resolutions, and maintaining the audit trail required by directors' & officers' (D&O) liability insurance and regulators. Modern board portals include AI-powered board pack assembly, secure in-app messaging, and e-signature workflows.",
    },
    {
        question: "What is the difference between a board portal and board portal software?",
        answer:
            "The terms are used interchangeably. Board portal, board portal software, board management software, and governance software all refer to the same category — secure platforms for board governance workflows. The most common term in the industry is 'board portal' for the user-facing platform and 'board portal software' for the underlying technology.",
    },
    {
        question: "How do board portals compare to email for board communications?",
        answer:
            "Board portals are significantly more secure and auditable than email. Email has no central audit trail (who saw what), no built-in NDA enforcement, no version control for board materials, and creates liability exposure when materials are forwarded. Board portals enforce access control, log every action, support e-signature, and provide the documentation that D&O liability insurers increasingly require. Email remains useful for informal communication, but board business should never live in inboxes.",
    },
    {
        question: "How do board portals compare to paper board packs?",
        answer:
            "Board portals are dramatically faster, cheaper, more secure, and more sustainable than paper board packs. Paper requires days of manual assembly before each meeting, costs thousands of dollars per meeting in printing and binding, creates environmental waste, and offers no real audit trail. Board portals let you distribute a complete board pack in minutes, with consistent formatting, automatic page numbering, and a complete audit trail of who reviewed what and when. The D&O liability protection alone justifies the switch for most boards.",
    },
    {
        question: "What features should a board portal have?",
        answer:
            "A modern board portal should include: (1) SOC 2 Type II and ISO 27001 certification; (2) AI-powered board pack assembly and distribution; (3) granular per-director permission controls; (4) secure in-app messaging and threaded discussions; (5) e-signature for board resolutions with ESIGN Act / eIDAS compliance; (6) meeting management and minutes capture; (7) tamper-evident audit trail for D&O liability protection; (8) full-text OCR search across board materials; (9) committee management with separate permission groups; (10) mobile and tablet support for director review on the go; and (11) integration with calendar systems, SSO providers, and e-signature platforms.",
    },
    {
        question: "How much does a board portal cost?",
        answer:
            "Board portal pricing varies by provider. Modern platforms like SpaceNexus use transparent monthly subscription pricing with no per-director or per-meeting fees. Mid-market platforms typically charge per director per year. Enterprise platforms like Diligent and Nasdaq Boardvantage use quote-only pricing that can run into the tens of thousands of dollars annually for large boards. When comparing costs, account for setup fees, training costs, and per-meeting overage charges that can inflate legacy platform bills mid-year.",
    },
    {
        question: "How long does it take to implement a board portal?",
        answer:
            "With modern board portal software like SpaceNexus, boards can be fully configured in days. Bulk upload historical materials, set up permission groups for each director and committee, configure the meeting schedule, and directors can be reviewing materials within the week. Legacy enterprise platforms like Diligent often require multi-week implementations with dedicated CSM involvement, which can be disruptive during board transitions.",
    },
    {
        question: "Can a board portal replace a virtual data room (VDR)?",
        answer:
            "Not typically — they serve different purposes. A board portal is for ongoing board governance (recurring meetings, committee workflows, director communications). A VDR is for one-time transactions like M&A or fundraising. Some modern platforms (like SpaceNexus) combine both capabilities — letting boards use the same secure platform for ongoing governance and one-time transactions, with consistent security controls, audit trails, and per-user permissions across both workflows.",
    },
    {
        question: "Are board portals secure enough for regulated industries?",
        answer:
            "Yes — modern board portals designed for regulated industries (banking, healthcare, insurance) meet the highest security standards. SOC 2 Type II, ISO 27001, GDPR compliance, AES-256 encryption at rest, TLS 1.3 in transit, MFA enforcement, and tamper-evident audit trails are table-stakes. For healthcare boards handling patient data, HIPAA-aligned controls and Business Associate Agreements (BAAs) are available. For financial services boards, FINRA-aligned workflows and SEC filing integrations are available. Always validate the specific certifications your regulator requires.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Board Portals: The Complete 2026 Buyer's Guide & Comparison",
    description:
        "The complete guide to board portals in 2026. What they are, how they compare to email and paper, key features, use cases by board type, and a framework for choosing the right platform.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/board-portals",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Board Portals", item: "https://spacenexus.net/board-portals" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

function CheckIcon() {
    return (
        <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

export default function BoardPortalsPage() {
    return (
        <>
            <Script id="bp-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="bp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="bp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="bp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Board Portals</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                2026 Buyer&apos;s Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Board Portals{" "}
                                <span className="text-[#2563eb]">— The Complete 2026 Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Board portals are secure platforms for distributing board materials, managing meetings, capturing minutes, and signing resolutions — replacing email and paper with auditable governance workflows. This guide covers what board portals are, how they compare to traditional methods, the features that matter, and how to choose the right one for your organization.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                18-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Covers: comparison framework, board types, implementation, FAQ
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#framework" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See the Selection Framework
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#vs-email" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Board Portal vs Email
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is a board portal */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a board portal?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A board portal is a secure, cloud-based platform that helps corporate boards, non-profit boards, and advisory committees manage their governance workflows. The category emerged from the security and audit-trail gaps of email and the cost and inefficiency of paper board packs — both of which created D&amp;O liability exposure for directors and the organizations they serve.
                            </p>
                            <p>
                                Modern board portals combine board pack distribution, meeting management, minutes capture, e-signature workflows, secure in-app messaging, and tamper-evident audit trails in a single platform. The best tools support corporate, non-profit, and committee governance workflows with granular per-director permissions, AI-powered board pack assembly, and the security certifications required by directors&apos; &amp; officers&apos; liability insurance, regulators, and institutional counterparties.
                            </p>
                            <p>
                                Board portals are distinct from virtual data rooms (VDRs). A board portal is for ongoing governance — recurring board meetings, committee workflows, and director communications. A VDR is for one-time transactions like M&amp;A or fundraising. Some modern platforms (like SpaceNexus) combine both capabilities, but the core use cases are different.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Boards Need a Portal */}
                <section className="py-16 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Why It Matters</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why boards need a portal in 2026</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Board materials are among the most sensitive information an organization handles. The risks of email and paper are no longer theoretical — and D&amp;O insurers, regulators, and institutional investors increasingly require documented board processes.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                    title: "D&O Liability Protection",
                                    description:
                                        "Directors' & officers' liability insurance increasingly requires documented board processes. A board portal provides the immutable audit trail and procedural documentation that protects individual directors and the organization.",
                                },
                                {
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                    title: "Regulatory Compliance",
                                    description:
                                        "Public companies face SEC, NYSE, and NASDAQ governance requirements. Non-profits face IRS and state attorney general scrutiny. Healthcare boards face HIPAA and Joint Commission. A board portal provides the documented compliance evidence these regulators require.",
                                },
                                {
                                    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
                                    title: "Secure Director Communications",
                                    description:
                                        "Email is not a secure channel for board business. Board materials forwarded by mistake create legal exposure. Board portals enforce access control, log every action, and prevent materials from leaving the platform.",
                                },
                                {
                                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                    title: "Operational Efficiency",
                                    description:
                                        "AI-powered board pack assembly cuts days of manual work to minutes. Version control eliminates the confusion of multiple board pack drafts. Real-time search across years of materials saves hours of digging through binders.",
                                },
                                {
                                    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
                                    title: "Director Experience",
                                    description:
                                        "Modern directors expect mobile-first, searchable, AI-powered tools. A board portal meets directors where they are — on tablets during flights, on phones between meetings, with offline reading and annotation.",
                                },
                                {
                                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    title: "Cost Reduction",
                                    description:
                                        "Paper board packs cost thousands of dollars per meeting in printing, binding, courier, and admin time. A board portal cuts these costs to a flat monthly subscription — and reduces environmental impact to zero paper.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Board Portal vs Email vs Paper */}
                <section id="vs-email" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board Portal vs Email vs Paper</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A side-by-side comparison of the three approaches boards use to manage materials and communications.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[800px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Capability</th>
                                            <th className="text-center font-semibold text-[#60a5fa] px-3 py-4">Board Portal</th>
                                            <th className="text-center font-semibold text-gray-600 px-3 py-4">Email</th>
                                            <th className="text-center font-semibold text-gray-600 px-3 py-4">Paper</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {boardPortalVsAlternatives.map((row, i) => (
                                            <tr key={row.capability} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}>
                                                <td className="px-4 py-3.5 text-sm font-medium text-gray-800">{row.capability}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-700">{row.boardPortal}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-600">{row.email}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-600">{row.paper}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Selection Framework */}
                <section id="framework" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Methodology</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board portal selection framework</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Use these eight dimensions to evaluate any board portal. Critical items are non-negotiable; high-weight items are strongly recommended; medium-weight items depend on your specific board needs.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {comparisonFramework.map((c) => (
                                <div key={c.dimension} className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-7 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                                        <div className="shrink-0 lg:w-48">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${c.weight === "Critical" ? "bg-red-100 text-red-700" : c.weight === "High" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                                                    {c.weight}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{c.dimension}</h3>
                                        </div>
                                        <p className="flex-1 text-sm text-gray-600 leading-relaxed">{c.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Board Types */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board portals by board type</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Different boards have different needs. Here&apos;s how board portal requirements vary by board type — and what to prioritize in each.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {boardTypes.map((bt) => (
                                <div key={bt.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={bt.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-2">{bt.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{bt.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Implementation Steps */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to implement a board portal in 6 steps</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A proven framework for switching your board to a new portal — without disrupting your governance calendar.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {implementationSteps.map((s) => (
                                <div key={s.step} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-[#2563eb] mb-3">{s.step}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about board portals
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/board-portal-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Board Portal Software Comparison →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/vdr-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                VDR Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/security-compliance" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Security &amp; Compliance →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the board portal built for modern governance
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Stop using email and paper for board materials. Get a purpose-built board portal live today — with AI board pack assembly, secure messaging, and a tamper-evident audit trail on every plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                See Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · ISO 27001 · GDPR Compliant · No credit card required · Cancel anytime</p>
                    </div>
                </section>
                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/board-portal-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software for boards.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Board portal software →</h3>
                        </Link>
                        <Link
                            href="/secure-document-sharing"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">General secure sharing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing →</h3>
                        </Link>
                        <Link
                            href="/legal-document-management"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">For legal teams.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Legal document management →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
        </>
    );
}
