"use client";

import Link from "next/link";

const spaceAiEcosystem = [
  { name: "PMSpace", desc: "Project & Contract Management", href: "https://pmspace.ai/" },
  { name: "Space-Sign", desc: "Digital Signing", href: "https://space-sign.ai/" },
  { name: "Space-Capture", desc: "Field Data Capture", href: "https://spacecapture.ai/" },
  { name: "Space-Lizit", desc: "Immigration Management", href: "https://spacelizit.com/" },
  { name: "SpaceHR", desc: "HR Management", href: "https://spacehr.net/" },
  { name: "SpaceLean", desc: "Lean Scheduling", href: "https://spacelean.ai/" },
  { name: "SpaceNexus", desc: "Virtual Data Room", href: "https://spacenexus.net/" },
  { name: "SpaceCRM", desc: "CRM Platform", href: "https://spacecrm.net/" },
];

const footerLinks = {
  product: [
    { name: "Features", href: "/kindora/features" },
    { name: "Pricing", href: "/kindora/pricing" },
    { name: "Solutions", href: "/kindora/solutions" },
    { name: "Space AI Ecosystem", href: "/kindora/ecosystem" },
    { name: "Request Demo", href: "/kindora/demo" },
  ],
  features: [
    { name: "Donor Management", href: "/kindora/features/donor-management" },
    { name: "Grant Tracking", href: "/kindora/features/grant-management" },
    { name: "Program Management", href: "/kindora/features/client-management" },
    { name: "Financial Reports", href: "/kindora/features/reporting" },
    { name: "Volunteer Management", href: "/kindora/features/people-management" },
    { name: "Campaign Management", href: "/kindora/features/campaign-management" },
    { name: "Communications", href: "/kindora/features/communications" },
    { name: "Financials", href: "/kindora/features/financials" },
    { name: "Financial Management", href: "/kindora/features/financial-management" },
    { name: "Dashboard Analytics", href: "/kindora/features/dashboard-analytics" },
    { name: "Expense Management", href: "/kindora/features/expense-management" },
    { name: "File Management", href: "/kindora/features/file-management" },
    { name: "User Management", href: "/kindora/features/user-management" },
    { name: "Settings", href: "/kindora/features/settings" },
  ],
  donorDonation: [
    { name: "Donor Management Software", href: "/kindora/donor-management-software" },
    { name: "Best Donor Management Software", href: "/kindora/best-donor-management-software" },
    { name: "Donation Management Software", href: "/kindora/donation-management-software" },
    { name: "Donation Reporting", href: "/kindora/donation-reporting-software" },
    { name: "Donation Tracking", href: "/kindora/donation-tracking-software" },
    { name: "Donor Portal", href: "/kindora/donor-portal" },
    { name: "Donor Database", href: "/kindora/donor-database-software" },
    { name: "Donor Database for Nonprofits", href: "/kindora/donor-database-for-nonprofits" },
    { name: "Donor CRM", href: "/kindora/donor-crm" },
    { name: "Donor Communication", href: "/kindora/donor-communication-software" },
    { name: "Donor Engagement", href: "/kindora/donor-engagement-software" },
    { name: "Donor Retention", href: "/kindora/donor-retention-software" },
    { name: "Donor Relationship Mgmt", href: "/kindora/donor-relationship-management" },
    { name: "Donor Analytics", href: "/kindora/donor-analytics-software" },
    { name: "Pledge Management", href: "/kindora/pledge-management-software" },
    { name: "Recurring Donations", href: "/kindora/recurring-donation-software" },
    { name: "Online Donation Platform", href: "/kindora/online-donation-platform" },
    { name: "Text-to-Give", href: "/kindora/text-to-give-software" },
  ],
  fundraising: [
    { name: "Fundraising Software", href: "/kindora/fundraising-software" },
    { name: "Fundraising Management", href: "/kindora/fundraising-management-software" },
    { name: "Fundraising CRM", href: "/kindora/fundraising-crm" },
    { name: "Peer-to-Peer Fundraising", href: "/kindora/peer-to-peer-fundraising-software" },
    { name: "Event Fundraising", href: "/kindora/event-fundraising-software" },
    { name: "Event Management", href: "/kindora/event-management-software" },
    { name: "Campaign Management", href: "/kindora/campaign-management-software" },
    { name: "Grant Management", href: "/kindora/grant-management-software" },
    { name: "Grant Tracking", href: "/kindora/grant-tracking-software" },
    { name: "Grant Reporting", href: "/kindora/grant-reporting-software" },
    { name: "Grant Compliance", href: "/kindora/grant-compliance-software" },
    { name: "Grant Lifecycle", href: "/kindora/grant-lifecycle-management" },
  ],
  volunteer: [
    { name: "Volunteer Management", href: "/kindora/volunteer-management-software" },
    { name: "Volunteer Scheduling", href: "/kindora/volunteer-scheduling-software" },
    { name: "Volunteer Recruitment", href: "/kindora/volunteer-recruitment-software" },
    { name: "Volunteer Hours Tracking", href: "/kindora/volunteer-hours-tracking-software" },
    { name: "Volunteer Database", href: "/kindora/volunteer-database-software" },
  ],
  crmManagement: [
    { name: "Nonprofit CRM", href: "/kindora/nonprofit-crm" },
    { name: "Best Nonprofit CRM", href: "/kindora/best-nonprofit-crm" },
    { name: "Small Nonprofit CRM", href: "/kindora/small-nonprofit-crm" },
    { name: "CRM for Nonprofits", href: "/kindora/crm-for-nonprofits" },
    { name: "Membership Management", href: "/kindora/membership-management-software" },
    { name: "Association Management", href: "/kindora/association-management-software" },
    { name: "Nonprofit Management", href: "/kindora/nonprofit-management-software" },
    { name: "All-in-One Platform", href: "/kindora/all-in-one-nonprofit-management-platform" },
    { name: "NGO Management", href: "/kindora/ngo-management-software" },
    { name: "Charity Management", href: "/kindora/charity-management-software" },
    { name: "Church Management", href: "/kindora/church-management-software" },
    { name: "Foundation Management", href: "/kindora/foundation-management-software" },
  ],
  operations: [
    { name: "Program Management", href: "/kindora/program-management-software" },
    { name: "Program Outcome Tracking", href: "/kindora/program-outcome-tracking" },
    { name: "Nonprofit Operations", href: "/kindora/nonprofit-operations-platform" },
    { name: "Workflow Automation", href: "/kindora/nonprofit-workflow-automation" },
    { name: "Document Management", href: "/kindora/nonprofit-document-management" },
    { name: "Case Management", href: "/kindora/client-case-management-software" },
    { name: "Social Services Case Mgmt", href: "/kindora/social-services-case-management" },
    { name: "Communications Hub", href: "/kindora/communications-hub" },
  ],
  reportingAnalytics: [
    { name: "Nonprofit Reporting", href: "/kindora/nonprofit-reporting-software" },
    { name: "Nonprofit Dashboard", href: "/kindora/nonprofit-dashboard-software" },
    { name: "Nonprofit Analytics", href: "/kindora/nonprofit-analytics-dashboard" },
    { name: "Board Reporting", href: "/kindora/board-reporting-software" },
    { name: "Budget Management", href: "/kindora/budget-management-software" },
    { name: "Expense Management", href: "/kindora/expense-management-software" },
    { name: "Cost Allocation", href: "/kindora/cost-allocation-software" },
    { name: "Financial Reporting", href: "/kindora/financial-reporting-software" },
  ],
  emailMarketing: [
    { name: "Email Marketing", href: "/kindora/email-marketing-for-nonprofits" },
    { name: "Email Automation", href: "/kindora/nonprofit-email-automation" },
    { name: "Email Communication", href: "/kindora/nonprofit-email-communication-software" },
  ],
  industrySolutions: [
    { name: "Multi-Program NGO Management", href: "/kindora/multi-program-ngo-management" },
    { name: "Housing Nonprofits", href: "/kindora/solutions/housing-nonprofits" },
    { name: "Community Organizations", href: "/kindora/solutions/community-organizations" },
    { name: "Small Nonprofits", href: "/kindora/solutions/small-nonprofits" },
    { name: "Social Services", href: "/kindora/solutions/social-services" },
    { name: "Youth Nonprofits", href: "/kindora/solutions/youth-nonprofits" },
  ],
  compare: [
    { name: "Bloomerang Alternative", href: "/kindora/bloomerang-alternative" },
    { name: "Kindora vs Bloomerang", href: "/kindora/kindora-vs-bloomerang" },
    { name: "Why Kindora Over Bloomerang", href: "/kindora/why-kindora-over-bloomerang" },
    { name: "Bonterra Alternative", href: "/kindora/bonterra-alternative" },
    { name: "Better Alternative to Bonterra", href: "/kindora/better-alternative-to-bonterra" },
    { name: "Kindora vs Bonterra", href: "/kindora/kindora-vs-bonterra" },
    { name: "Vs Competitors", href: "/kindora/vs-competitors" },
  ],
  company: [
    { name: "Contact", href: "/kindora/contact" },
    { name: "Blog", href: "/kindora/blog" },
  ],
};

export default function KindoraFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] p-8 sm:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready to transform your nonprofit operations?
                </h3>
                <p className="text-blue-100">
                  Get started with Kindora NGO OS today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300"
                >
                  Request Demo
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/kindora" className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Kindora</span>
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wider -mt-1">
                  NGO OS
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              The Complete Operating System for Nonprofits
            </p>
            <p className="text-xs text-gray-500">Version 1.0 (Kindora-V1.0)</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Features
            </h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donor & Donation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Donor & Donation
            </h4>
            <ul className="space-y-3">
              {footerLinks.donorDonation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fundraising Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Fundraising
            </h4>
            <ul className="space-y-3">
              {footerLinks.fundraising.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteer Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Volunteer
            </h4>
            <ul className="space-y-3">
              {footerLinks.volunteer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CRM & Management Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              CRM & Management
            </h4>
            <ul className="space-y-3">
              {footerLinks.crmManagement.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Operations
            </h4>
            <ul className="space-y-3">
              {footerLinks.operations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reporting & Analytics Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Reporting & Analytics
            </h4>
            <ul className="space-y-3">
              {footerLinks.reportingAnalytics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email & Marketing Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Email & Marketing
            </h4>
            <ul className="space-y-3">
              {footerLinks.emailMarketing.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Industry Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.industrySolutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Compare
            </h4>
            <ul className="space-y-3">
              {footerLinks.compare.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Contact
              </h4>
              <a
                href="mailto:contact@spacenexus.net"
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@spacenexus.net
              </a>
              <div className="flex flex-col gap-2 mt-3">

                <a
                  href="tel:+6586111900"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  SG +65 8611 1900
                </a>
                <a
                  href="tel:+19169690451"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  USA +1 916-969-0451
                </a>
              </div>
              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Follow Us
                </h4>
                <div className="flex items-center space-x-3">
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@KindoraNGOOS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF0000] transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/space_kindora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#E1306C] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* X / Twitter */}
                  <a
                    href="https://x.com/space_kindora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-black transition-all duration-300"
                    aria-label="Twitter/X"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/kindora-ngo-os"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#0A66C2] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space AI Ecosystem Strip */}
      <div className="border-t border-gray-800 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
            Space AI Ecosystem
          </p>
          <div className="flex flex-wrap gap-3">
            {spaceAiEcosystem.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 hover:border-[#2563eb] hover:bg-gray-700 transition-all duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563eb] opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {product.name}
                </span>
                <span className="hidden sm:inline text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  — {product.desc}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 SpaceAI App. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-600">
                Built with Next.js, React, and MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
