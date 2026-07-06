import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nonprofit Workflow Automation 2026 | Streamline Operations | Kindora",
  description:
    "Automate repetitive nonprofit tasks, approvals, and processes with Kindora. Design no-code workflows, route tasks automatically, and eliminate bottlenecks across your organization.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-workflow-automation",
  },
  openGraph: {
    title: "Nonprofit Workflow Automation 2026 — Kindora",
    description:
      "Automate repetitive nonprofit tasks, approvals, and processes with no-code workflows. The complete guide for nonprofit operations leaders.",
    url: "https://spacenexus.net/kindora/nonprofit-workflow-automation",
    siteName: "Kindora by Space Nexus",
    type: "article",
    images: [{ url: "https://spacenexus.net/icononly_transparent_nobuffer.png", width: 1200, height: 630, alt: "Kindora Nonprofit Workflow Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Workflow Automation 2026 — Complete Guide",
    description:
      "The complete guide to nonprofit workflow automation. No-code builders, approval chains, task routing, and best practices for operations teams.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "nonprofit workflow automation",
    "nonprofit process automation",
    "nonprofit task automation",
    "automated approval workflows",
    "nonprofit operations automation",
    "donor workflow automation",
    "grant workflow automation",
    "nonprofit workflow software",
    "nonprofit approval process",
    "NGO workflow automation",
    "nonprofit automation tools",
    "nonprofit process improvement",
  ],
};

const mustHaveFeatures = [
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "No-code visual workflow builder",
    description:
      "Design complex workflows visually without engineering support. Drag, drop, and configure triggers, conditions, and actions. Launch in hours, not weeks. Finance, HR, and program staff can build their own workflows independently.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Multi-step approval chains",
    description:
      "Create approval sequences with as many steps as needed. Each step can have its own approvers, conditions, and SLAs. Supports sequential, parallel, and conditional approval branches for complex organizational hierarchies.",
  },
  {
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    title: "Conditional routing logic",
    description:
      "Route tasks based on amount, department, grant type, or any custom field. If-then logic handles edge cases automatically — requests over $5,000 go to the CFO, grant applications route to the grants manager, and so on.",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    title: "Automated notifications & escalations",
    description:
      "Email, in-app, and push notifications keep stakeholders informed at every stage. Reminders fire before deadlines, escalations trigger when SLAs are at risk, and confirmations acknowledge completed actions automatically.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Real-time SLA tracking",
    description:
      "Set time limits for each workflow step. Real-time dashboards track SLA compliance across every active workflow. Alerts flag approaching deadlines before they become problems, and overdue tasks are escalated automatically.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Tamper-evident audit trails",
    description:
      "Every workflow action — task creation, assignment, approval, rejection, and modification — is logged with timestamp, user identity, and IP address. Immutable audit trails satisfy funder requirements and board oversight.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Integration triggers",
    description:
      "Workflows can be triggered by external events — form submissions, API calls, database changes, or scheduled intervals. Connect to your existing donor management, accounting, and CRM systems for end-to-end automation.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Pre-built nonprofit templates",
    description:
      "Start with ready-made workflows for expense approvals, grant applications, donor communications, budget reviews, HR onboarding, procurement requests, and reporting pipelines. Customize templates to match your exact processes.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Role-based delegation",
    description:
      "Automatic delegation when staff are out of office, on leave, or unavailable. Tasks re-route to backup approvers based on predefined rules — no workflow stalls because someone is on vacation.",
  },
];

const comparisonData = {
  manual: {
    title: "Manual Processes",
    subtitle: "Email, spreadsheets, paper forms",
    items: [
      { text: "Email chains for approvals", good: false },
      { text: "Spreadsheets for tracking", good: false },
      { text: "Paper forms and physical signatures", good: false },
      { text: "No audit trail", good: false },
      { text: "Delayed escalations", good: false },
      { text: "Bottlenecks hidden until too late", good: false },
    ],
  },
  generic: {
    title: "Generic Automation Tools",
    subtitle: "Zapier, Microsoft Power Automate, IFTTT",
    items: [
      { text: "Requires technical setup", good: false },
      { text: "Not built for nonprofit workflows", good: false },
      { text: "Limited approval chain support", good: false },
      { text: "No nonprofit-specific templates", good: false },
      { text: "Disconnected from operations data", good: false },
      { text: "Basic notification only", good: false },
    ],
  },
  kindora: {
    title: "Kindora Workflow Automation",
    subtitle: "Purpose-built for nonprofits",
    items: [
      { text: "No-code visual builder", good: true },
      { text: "Nonprofit-specific templates", good: true },
      { text: "Multi-step approval chains", good: true },
      { text: "SLA tracking and escalation", good: true },
      { text: "Tamper-evident audit trails", good: true },
      { text: "Integrated with operations data", good: true },
    ],
  },
};

const useCases = [
  {
    title: "Expense Approvals",
    description:
      "Automate expense report routing based on amount, department, and budget. Requests under $500 auto-approve; $500–$5,000 goes to department heads; over $5,000 requires CFO sign-off. Every approval logged for audit.",
  },
  {
    title: "Grant Application Workflows",
    description:
      "Route grant applications through internal review stages — program officer review, budget check, executive review, and board approval. Track deadlines, assign reviewers, and ensure nothing falls through the cracks.",
  },
  {
    title: "Donor Communication Sequences",
    description:
      "Trigger personalized thank-you letters, tax receipts, and follow-up communications based on donation type, amount, and donor segment. Ensure every donor receives timely, appropriate communication.",
  },
  {
    title: "Budget Review & Approval",
    description:
      "Automate annual budget reviews with multi-department input. Route department budgets through finance review, executive review, and board approval with built-in version tracking and comment threads.",
  },
  {
    title: "HR Onboarding & Offboarding",
    description:
      "Standardize new hire onboarding with checklists, document collection, system access provisioning, and training assignments. Offboarding workflows ensure设备 access revocation and exit interviews happen consistently.",
  },
  {
    title: "Procurement & Vendor Management",
    description:
      "Route purchase requests through budget verification, vendor comparison, and approval stages. Track vendor contracts, renewal dates, and compliance requirements automatically.",
  },
  {
    title: "Program Reporting Pipelines",
    description:
      "Automate monthly and quarterly reporting collection from program teams. Set deadlines, send reminders, collect data through structured forms, and compile reports for board and funder submission.",
  },
  {
    title: "Policy Review & Approval",
    description:
      "Manage policy updates through drafting, review, legal check, executive approval, and staff notification stages. Track policy versions, review dates, and ensure timely updates across the organization.",
  },
];

const bestPractices = [
  {
    title: "Start with your most painful process",
    description:
      "Identify the workflow that causes the most frustration — expense approvals, grant reporting, or donor follow-up. Automate that first. Quick wins build organizational buy-in for broader automation adoption.",
  },
  {
    title: "Map the process before automating",
    description:
      "Document every step, decision point, and handoff in your current process. Identify bottlenecks, redundant steps, and unnecessary approvals. Automate the optimized process — not the broken one.",
  },
  {
    title: "Define clear SLAs for every step",
    description:
      "Set time limits for each workflow step. Two-day SLA for expense approvals, five-day SLA for grant reviews. SLAs create accountability and surface bottlenecks before they become crises.",
  },
  {
    title: "Use conditional routing for edge cases",
    description:
      "Build if-then logic into every workflow. Amount thresholds, department rules, grant types, and priority levels should all trigger different paths. Handle 90% of cases automatically, escalate the rest.",
  },
  {
    title: "Implement escalation rules",
    description:
      "When an approver misses their SLA, escalate to their backup automatically. Two reminder emails, then escalate to the next-level approver. No workflow should stall because someone is out of office.",
  },
  {
    title: "Maintain audit trails for compliance",
    description:
      "Every workflow action should be logged with timestamp, user identity, and reason. Tamper-evident audit trails satisfy funder requirements, board oversight, and regulatory compliance without manual documentation.",
  },
  {
    title: "Review and optimize quarterly",
    description:
      "Workflow analytics reveal bottlenecks, cycle times, and team performance. Review dashboards quarterly to identify slow processes, remove unnecessary steps, and continuously improve operational efficiency.",
  },
  {
    title: "Train staff on the workflow builder",
    description:
      "Don't keep workflow design centralized in IT. Train department heads to build and modify their own workflows. The no-code builder empowers program, finance, and HR teams to automate their own processes.",
  },
];

const selectionCriteria = [
  {
    title: "No-code workflow builder",
    description:
      "The platform must offer a visual, drag-and-drop workflow builder that requires no coding. Non-technical staff in finance, HR, and programs should be able to design, test, and launch workflows independently.",
  },
  {
    title: "Multi-step approval chains",
    description:
      "Support for sequential, parallel, and conditional approval branches. Each step should have its own approvers, conditions, and SLAs. The system should handle delegation and out-of-office routing automatically.",
  },
  {
    title: "Nonprofit-specific templates",
    description:
      "Pre-built workflows for common nonprofit processes — expense approvals, grant applications, donor communications, budget reviews, HR onboarding, and reporting pipelines. Templates accelerate time-to-value.",
  },
  {
    title: "SLA tracking and escalation",
    description:
      "Set time limits for each workflow step with real-time alerts for approaching deadlines. Automatic escalation when SLAs are at risk ensures no task stalls in someone's inbox.",
  },
  {
    title: "Audit trail and compliance",
    description:
      "Tamper-evident audit logs for every workflow action. Immutable records satisfy funder requirements, board oversight, and regulatory compliance. Exportable reports for grant audits and financial reviews.",
  },
  {
    title: "Integration capabilities",
    description:
      "The workflow platform should integrate with your existing tools — donor management, accounting, CRM, email, and HR systems. API access and webhook triggers enable end-to-end automation across systems.",
  },
  {
    title: "Mobile access",
    description:
      "Staff should be able to approve, reject, and comment on workflows from their phones. Mobile access is essential for executive approvals, field staff, and remote teams.",
  },
  {
    title: "Reporting and analytics",
    description:
      "Dashboards that track workflow performance, cycle times, SLA compliance, and team productivity. Data-driven insights help identify bottlenecks and continuously improve operational efficiency.",
  },
];

const faqItems = [
  {
    question: "What is nonprofit workflow automation?",
    answer:
      "Nonprofit workflow automation is the use of software to design and execute repeatable business processes — approvals, task routing, notifications, and escalations — without manual intervention. It replaces email chains, spreadsheets, and manual handoffs with structured, auditable workflows that run automatically from trigger to completion.",
  },
  {
    question: "What nonprofit processes can be automated with Kindora?",
    answer:
      "Kindora automates expense approvals, grant applications, donor communications, budget reviews, HR onboarding, procurement requests, reporting pipelines, policy reviews, and any multi-step process that requires routing, approval, or tracking across departments. If a process involves multiple people, steps, or approvals, Kindora can automate it.",
  },
  {
    question: "Do we need technical skills to build workflows?",
    answer:
      "No. Kindora's visual workflow builder is entirely no-code. Staff can design, test, and launch workflows without writing code. Pre-built templates for common nonprofit processes accelerate setup, and any team can configure their own workflows independently.",
  },
  {
    question: "How does workflow automation improve compliance?",
    answer:
      "Every workflow action — task creation, assignment, approval, rejection, and modification — is logged with a tamper-evident audit trail. SLA tracking ensures deadlines are met, and conditional routing enforces policy compliance before requests advance to the next step.",
  },
  {
    question: "How long does it take to set up workflow automation?",
    answer:
      "Most nonprofits are running their first automated workflow within 24 hours. Pre-built templates for expense approvals, grant applications, and HR onboarding can be customized and launched the same day. More complex workflows with multiple approval branches and integrations typically take 1–2 weeks to configure.",
  },
  {
    question: "Can workflow automation integrate with our existing tools?",
    answer:
      "Yes. Kindora integrates with popular nonprofit tools including donor management systems, accounting software, CRM platforms, email services, and HR systems. API access and webhook triggers enable custom integrations for any system your organization uses.",
  },
  {
    question: "What happens when an approver is unavailable?",
    answer:
      "Kindora's delegation rules automatically re-route tasks to backup approvers when someone is out of office, on leave, or unavailable. You can configure delegation by role, department, or individual — no workflow stalls because a single person is unavailable.",
  },
  {
    question: "How does Kindora compare to Zapier or Power Automate?",
    answer:
      "Generic automation tools like Zapier and Power Automate are excellent for connecting apps but lack nonprofit-specific workflow features. Kindora provides multi-step approval chains, SLA tracking, tamper-evident audit trails, and pre-built nonprofit templates that generic tools don't offer. Kindora is purpose-built for nonprofit operations, not general-purpose automation.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nonprofit Workflow Automation 2026 — Complete Guide for Operations Teams",
  description:
    "The complete 2026 guide to nonprofit workflow automation. No-code builders, approval chains, task routing, and best practices for operations leaders.",
  author: { "@type": "Organization", name: "Kindora", url: "https://spacenexus.net/kindora" },
  publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://spacenexus.net/kindora/nonprofit-workflow-automation",
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
    { "@type": "ListItem", position: 2, name: "Kindora", item: "https://spacenexus.net/kindora" },
    { "@type": "ListItem", position: 3, name: "Nonprofit Workflow Automation", item: "https://spacenexus.net/kindora/nonprofit-workflow-automation" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Nonprofit Workflow Automation",
  description: "Automate repetitive nonprofit tasks, approvals, and processes with no-code workflows, automated task routing, and approval chain management.",
  url: "https://spacenexus.net/kindora/nonprofit-workflow-automation",
  serviceType: "Nonprofit Workflow Automation",
  provider: { "@type": "Organization", name: "Kindora", url: "https://spacenexus.net/kindora" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: { "@type": "Offer", url: "https://spacenexus.net/kindora/pricing", availability: "https://schema.org/InStock", priceCurrency: "USD" },
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

export default function KindoraWorkflowAutomationPage() {
  return (
    <>
      <Script id="kindora-wf-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-wf-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="kindora-wf-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="kindora-wf-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-20 lg:pt-24">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">Nonprofit Workflow Automation</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                2026 Complete Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nonprofit Workflow Automation{" "}
                <span className="text-[#2563eb]">— The 2026 Guide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Automate repetitive nonprofit tasks, approvals, and processes with no-code workflows. This guide covers the differences between manual processes, generic automation tools, and purpose-built nonprofit workflow software — plus the features, best practices, and selection framework operations teams need in 2026.
              </p>
              <p className="text-sm text-gray-400 mb-10">
                16-minute read &nbsp;·&nbsp; Last updated: July 1, 2026 &nbsp;·&nbsp; Covers: comparison, features, best practices, FAQ
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#comparison" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  Manual vs. Kindora
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                  Must-Have Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "70%", label: "reduction in manual processing" },
                { metric: "50%", label: "faster approval cycles" },
                { metric: "90%", label: "fewer bottlenecks" },
                { metric: "100%", label: "audit trail coverage" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is nonprofit workflow automation */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is nonprofit workflow automation?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Nonprofit workflow automation is the use of software to design and execute repeatable business processes — approvals, task routing, notifications, and escalations — without manual intervention. It replaces email chains, spreadsheets, and paper forms with structured, auditable workflows that run automatically from trigger to completion.
              </p>
              <p>
                The category emerged from the limitations of generic file sharing and email-based coordination for nonprofit operations. Traditional approaches relied on staff manually routing documents, chasing approvals, and tracking deadlines through spreadsheets and inbox searches. Modern nonprofit workflow automation is strategic — it spans the full process lifecycle from design through execution, monitoring, and optimization.
              </p>
              <p>
                Today, workflow automation is a core capability for nonprofits that need to scale operations without proportional headcount growth. Effective implementations reduce processing time, improve approval cycle speed, enhance compliance tracking, and free staff to focus on mission-critical work instead of administrative overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: Manual vs Generic vs Kindora */}
        <section id="comparison" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Comparison</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Manual vs. Generic Tools vs. Kindora</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three approaches to nonprofit process management — and why purpose-built workflow automation outperforms the alternatives.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(comparisonData).map(([key, data]) => (
                <div key={key} className={`bg-white rounded-2xl border p-7 shadow-sm ${key === "kindora" ? "border-[#2563eb]/40 ring-1 ring-[#2563eb]/10" : "border-gray-200"}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{data.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{data.subtitle}</p>
                  <ul className="space-y-2.5">
                    {data.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5 text-sm text-gray-700">
                        {item.good ? <CheckIcon /> : <XIcon />}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Must-Have Features */}
        <section id="features" className="py-16 lg:py-20 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for nonprofit workflow automation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These nine capabilities are the baseline for any modern nonprofit workflow automation platform. Anything missing is a red flag for compliance, efficiency, or scalability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustHaveFeatures.map((feature) => (
                <div key={feature.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Workflow automation by nonprofit function</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every department benefits from automated workflows. Here are the highest-impact use cases across nonprofit operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8 best practices for nonprofit workflow automation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The platform is only part of the equation. These best practices help you get the most out of any workflow automation tool.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {bestPractices.map((bp, i) => (
                <div key={bp.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <h3 className="text-base font-bold text-gray-900 pt-1">{bp.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-11">{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to choose a nonprofit workflow automation platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use these eight criteria to evaluate any workflow automation solution. Prioritize based on your organization size, process complexity, and compliance requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {selectionCriteria.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently asked questions about nonprofit workflow automation
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
              <Link href="/kindora/nonprofit-document-management" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Nonprofit Document Management →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/expense-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Expense Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/grant-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Grant Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/nonprofit-reporting-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Nonprofit Reporting Software →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the workflow automation platform built for nonprofits
            </h2>
            <p className="text-gray-600 mb-8">
              Get a purpose-built workflow automation platform — with no-code builders, multi-step approval chains, SLA tracking, and audit trails that satisfy funders and boards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                Request a Live Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                See Pricing
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs · No credit card required</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/expense-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track, categorize, and reconcile expenses.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Expense Management Software →</h3>
              </Link>
              <Link href="/kindora/budget-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan, track, and control nonprofit budgets.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Budget Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-document-management" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Organize, store, and retrieve documents.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Document Management →</h3>
              </Link>
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets, expenses, and compliance.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Financial statements and compliance reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/pricing" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing for nonprofits of every size.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">View Pricing →</h3>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
