import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Volunteer Management Software | Volunteer Coordination | Kindora",
  description:
    "Kindora volunteer management software helps nonprofits recruit, schedule, track, and engage volunteers. Manage hours, communications, and reporting in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-management-software",
  },
  openGraph: {
    title: "Volunteer Management Software — Kindora",
    description: "Recruit, schedule, track, and engage volunteers with Kindora's volunteer management platform.",
    url: "https://spacenexus.net/kindora/volunteer-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Volunteer Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Management Software — Kindora",
    description: "Recruit, schedule, and engage volunteers with Kindora's volunteer coordination platform.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "volunteer management software",
    "volunteer scheduling software",
    "volunteer coordination platform",
    "volunteer tracking system",
    "nonprofit volunteer management",
    "volunteer hour tracking",
    "volunteer recruitment software",
    "volunteer engagement tools",
    "volunteer database software",
    "volunteer sign-up software",
    "volunteer program management",
    "volunteer communication tools",
    "volunteer reporting software",
    "volunteer management system",
    "volunteer coordination software",
  ],
};

const volunteerFeatures = [
  {
    title: "Volunteer Database",
    description: "Centralized directory of all volunteers with contact info, skills, availability, and engagement history.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Shift Scheduling",
    description: "Create and publish shifts, let volunteers sign up, and manage schedules with drag-and-drop simplicity.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Hour Tracking",
    description: "Track volunteer hours with clock-in/out, mobile check-in, and manual entry. Export for reporting needs.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Self-Service Portal",
    description: "Volunteers can view schedules, sign up for shifts, log hours, update profiles, and track their impact.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Communication Tools",
    description: "Send shift reminders, announcements, and personalized messages via email, SMS, or in-app notifications.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Availability Management",
    description: "Volunteers set their availability preferences. Easily find coverage for open shifts.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Skills & Interests",
    description: "Tag volunteers by skills, interests, and qualifications. Match the right people to the right opportunities.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Impact Reporting",
    description: "Generate reports on volunteer hours, engagement trends, retention rates, and program impact.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "Self-serve", label: "Volunteer portal" },
  { metric: "Auto", label: "Shift reminders" },
  { metric: "Skills-based", label: "Volunteer matching" },
  { metric: "Exportable", label: "Hour reports" },
];

const faqs = [
  {
    question: "What is volunteer management software?",
    answer:
      "Volunteer management software helps nonprofits recruit, schedule, track, and engage their volunteers. It centralizes volunteer data, shift scheduling, hour tracking, and communications in one platform.",
  },
  {
    question: "How does Kindora help with volunteer scheduling?",
    answer:
      "Kindora lets you create shifts with specific dates, times, and roles. Volunteers can sign up through a self-service portal, and you can manage schedules, track coverage, and send automated reminders.",
  },
  {
    question: "Can volunteers log their own hours?",
    answer:
      "Yes. Volunteers can log hours through the self-service portal or mobile check-in. You can also enter hours manually. All hours are tracked and available for reporting.",
  },
  {
    question: "Does Kindora support volunteer communication?",
    answer:
      "Yes. Kindora includes communication tools for sending shift reminders, announcements, and personalized messages via email, SMS, or in-app notifications.",
  },
  {
    question: "Can I track volunteer skills and interests?",
    answer:
      "Yes. You can tag volunteers with skills, interests, and qualifications. This makes it easy to find the right volunteers for specific opportunities and roles.",
  },
  {
    question: "Does Kindora provide volunteer impact reports?",
    answer:
      "Yes. Kindora generates reports on volunteer hours, engagement trends, retention rates, and program impact. Reports can be exported for board presentations or grant reporting.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Volunteer management software for nonprofits — recruit, schedule, track hours, and engage volunteers in one platform.",
      url: "https://spacenexus.net/kindora/volunteer-management-software",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial available" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function VolunteerManagementSoftwarePage() {
  return (
    <>
      <Script id="volunteer-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-amber-600">Volunteer Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Empower Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Volunteer Program</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Recruit, schedule, track, and engage your volunteers with Kindora. From shift management to impact reporting, everything you need to run a thriving volunteer program.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://cad.spaceaiapp.com/kindora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Set up in 30 minutes", "Cancel anytime"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Volunteer Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Active Volunteers", value: "156" },
                    { label: "Hours This Month", value: "1,247" },
                    { label: "Open Shifts", value: "18" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Shifts</p>
                  {[
                    { name: "Food Bank", volunteer: "Sarah M.", time: "Sat 10am" },
                    { name: "Mentoring", volunteer: "James K.", time: "Mon 2pm" },
                    { name: "Admin Support", volunteer: "Lisa R.", time: "Wed 9am" },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{s.name}</span>
                          <span className="text-xs text-gray-400 ml-2">{s.volunteer}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-amber-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything for volunteer coordination</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recruit, schedule, track, and engage — all in one volunteer management platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {volunteerFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From recruitment to impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete volunteer engagement workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Recruit", description: "Attract volunteers through sign-up forms and outreach." },
              { step: "02", title: "Schedule", description: "Publish shifts, manage availability, and fill openings." },
              { step: "03", title: "Track", description: "Log hours, monitor engagement, and manage communications." },
              { step: "04", title: "Report", description: "Measure impact with hour reports and engagement analytics." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about volunteer management software.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to empower your volunteer program?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora volunteer management software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-amber-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-amber-500 bg-amber-50 hover:bg-amber-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
