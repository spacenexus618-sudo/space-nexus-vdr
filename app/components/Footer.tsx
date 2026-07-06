"use client";

import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Data Room", href: "/features/data-room" },
      { name: "VDR Data Room", href: "/features/vdr-data-room" },
      { name: "Deals", href: "/features/deals" },
      { name: "Dashboard", href: "/features/dashboard" },
      { name: "Q&A Workflow", href: "/features/qa" },
      { name: "Users & Permissions", href: "/features/users-permissions" },
      { name: "Analytics", href: "/features/activity-analytics" },
      { name: "Reports", href: "/features/reports" },
      { name: "Security", href: "/features/security-compliance" },
      { name: "Integrations", href: "/features/integrations" },
      { name: "Billing & Plans", href: "/features/billing-plans" },
      { name: "Settings", href: "/features/settings" },
      { name: "Support", href: "/features/support" },
      { name: "Pricing", href: "/pricing" },
      { name: "Lead Generation", href: "/lead-generation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "M&A Virtual Data Room", href: "/solutions/mergers-and-acquisitions-vdr" },
      { name: "M&A Document Sharing", href: "/solutions/ma-document-sharing" },
      { name: "Investor Data Room", href: "/solutions/investor-data-room" },
      { name: "Startup Data Room", href: "/solutions/startup-data-room" },
      { name: "Series A Fundraising", href: "/solutions/series-a-fundraising-data-room" },
      { name: "Legal Document Sharing", href: "/solutions/secure-document-sharing-for-legal" },
      { name: "Law Firm Exchange", href: "/solutions/law-firm-document-exchange" },
      { name: "Private Credit", href: "/solutions/private-credit" },
      { name: "Distressed Debt", href: "/solutions/distressed-debt" },
      { name: "CLO Advisory", href: "/solutions/clo-advisory" },
      { name: "Syndicated Lending", href: "/solutions/syndicated-lending" },
      { name: "NPL Portfolio", href: "/solutions/npl-portfolio" },
      { name: "ESG Consulting", href: "/solutions/esg-consulting" },
      { name: "Program Management", href: "/solutions/program-management-software" },
      { name: "Program Outcome Tracking", href: "/solutions/program-outcome-tracking" },
      { name: "Secure Document Sharing", href: "/secure-document-sharing" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "VDR UAE", href: "/solutions/virtual-data-room-uae" },
      { name: "VDR Canada", href: "/solutions/virtual-data-room-canada" },
      { name: "VDR Germany", href: "/solutions/virtual-data-room-germany" },
      { name: "VDR Taiwan", href: "/solutions/virtual-data-room-taiwan" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Investment Banking", href: "/industries/investment-banking" },
      { name: "M&A Advisory", href: "/industries/investment-banking/ma-advisory" },
      { name: "Sell-Side Process", href: "/industries/investment-banking/sell-side-process" },
      { name: "Capital Markets", href: "/industries/investment-banking/capital-markets" },
      { name: "Private Capital", href: "/industries/investment-banking/private-capital" },
      { name: "Restructuring", href: "/industries/investment-banking/restructuring" },
      { name: "Private Equity", href: "/industries/private-equity" },
      { name: "Buy-Side Diligence", href: "/industries/private-equity/buy-side-diligence" },
      { name: "Sell-Side Exit", href: "/industries/private-equity/sell-side-exit" },
      { name: "Add-On Acquisitions", href: "/industries/private-equity/add-on-acquisitions" },
      { name: "Portfolio Management", href: "/industries/private-equity/portfolio-management" },
      { name: "LP Fundraising", href: "/industries/private-equity/lp-fundraising" },
      { name: "Venture Capital", href: "/industries/venture-capital" },
      { name: "Early-Stage Diligence", href: "/industries/venture-capital/early-stage-diligence" },
      { name: "Fund Operations", href: "/industries/venture-capital/fund-operations" },
      { name: "LP Communications", href: "/industries/venture-capital/lp-communications" },
      { name: "Portfolio Support", href: "/industries/venture-capital/portfolio-support" },
      { name: "Exits & Secondaries", href: "/industries/venture-capital/exits-secondaries" },
      { name: "Law Firms", href: "/industries/law-firms" },
      { name: "M&A Due Diligence", href: "/industries/law-firms/ma-diligence" },
      { name: "Litigation & E-Discovery", href: "/industries/law-firms/litigation-discovery" },
      { name: "IP & Licensing", href: "/industries/law-firms/ip-licensing" },
      { name: "Client Portals", href: "/industries/law-firms/client-portals" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Real Estate Practice", href: "/industries/law-firms/real-estate" },
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Technology", href: "/industries/technology" },
      { name: "Energy & Infrastructure", href: "/industries/energy-infrastructure" },
      { name: "Corporate Development", href: "/industries/corporate-development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "VDR Guide", href: "/vdr-guide" },
      { name: "Glossary", href: "/glossary" },
      { name: "Financial Glossary", href: "/glossary/financial" },
      { name: "Checklists", href: "/checklists" },
      { name: "DD Checklist", href: "/checklists/due-diligence-checklist" },
      { name: "Investor DD Checklist", href: "/checklists/investor-data-room" },
      { name: "Templates", href: "/checklists/templates" },
      { name: "Video Tutorials", href: "/tutorials" },
      { name: "Setup Walkthrough", href: "/tutorials/data-room-setup-walkthrough" },
      { name: "Managing Bidder Access", href: "/tutorials/managing-bidder-access" },
      { name: "Permission Management", href: "/tutorials/permission-management" },
      { name: "Q&A Workflow Tutorial", href: "/tutorials/structured-qa-workflow" },
      { name: "Watermarking Setup", href: "/tutorials/dynamic-watermarking-setup" },
      { name: "Engagement Analytics", href: "/tutorials/engagement-analytics" },
      { name: "Audit Log Export", href: "/tutorials/audit-log-export" },
      { name: "SSO & MFA Config", href: "/tutorials/sso-and-mfa-configuration" },
      { name: "FAQ", href: "/faq" },
      { name: "Data Room FAQ", href: "/faq/data-room" },
      { name: "VDR Security FAQ", href: "/faq/vdr-security" },
      { name: "VDR Compliance FAQ", href: "/faq/vdr-compliance" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Startup Fundraising", href: "/case-studies/startup-fundraising" },
      { name: "M&A Case Studies", href: "/m-a-case-studies" },
      { name: "Startup Case Studies", href: "/startup-fundraising-case-studies" },
      { name: "Reviews", href: "/reviews" },
      { name: "NPL Guide", href: "/resources/npl-guide" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "VDR Alternatives", href: "/competitors/vdr-alternatives" },
      { name: "Datasite Alternative", href: "/competitors/datasite-alternative" },
      { name: "Intralinks Alternative", href: "/competitors/intralinks-alternative" },
      { name: "iDeals Alternative", href: "/competitors/ideals-alternative" },
      { name: "Drooms Alternative", href: "/competitors/drooms-alternative" },
      { name: "Pricing Comparison", href: "/pricing-comparison" },
      { name: "VDR Comparison", href: "/vdr-comparison" },
      { name: "M&A Data Room Providers", href: "/m-a-data-room-providers" },
    ],
  },
  {
    title: "Guides",
    links: [
      { name: "Data Room Solutions", href: "/data-room-solutions" },
      { name: "Data Room Pricing", href: "/data-room-pricing" },
      { name: "Data Room Providers", href: "/data-room-providers" },
      { name: "Virtual Data Room Providers", href: "/virtual-data-room-providers" },
      { name: "Top Data Room Providers", href: "/top-data-room-providers" },
      { name: "Electronic Data Room", href: "/electronic-data-room" },
      { name: "Enterprise Data Room", href: "/enterprise-data-room" },
      { name: "Cloud Data Room", href: "/cloud-data-room" },
      { name: "Investment Data Room", href: "/investment-data-room" },
      { name: "Startup Fundraising Room", href: "/startup-fundraising-data-room" },
      { name: "Private Equity Data Room", href: "/private-equity-data-room" },
      { name: "Data Room Security", href: "/data-room-security" },
      { name: "Data Room Due Diligence", href: "/data-room-due-diligence" },
      { name: "Due Diligence Software", href: "/due-diligence-software" },
      { name: "Virtual Deal Management", href: "/virtual-deal-management" },
      { name: "Deal Management Software", href: "/deal-management-software" },
      { name: "Deal Room Software", href: "/deal-room-software" },
      { name: "M&A Platform", href: "/ma-platform" },
      { name: "Merger & Acquisition SW", href: "/merger-acquisition-software" },
      { name: "Online Due Diligence", href: "/online-due-diligence-platform" },
      { name: "Business Acquisition SW", href: "/business-acquisition-software" },
      { name: "Board Portals", href: "/board-portals" },
      { name: "Board Portal Software", href: "/board-portal-software" },
      { name: "Board Document Portal", href: "/board-document-portal" },
      { name: "Deal Collaboration Platform", href: "/deal-collaboration-platform" },
      { name: "Vendor Due Diligence SW", href: "/vendor-due-diligence-software" },
      { name: "Legal Document Management", href: "/legal-document-management" },
      { name: "Investor Due Diligence", href: "/investor-due-diligence" },
      { name: "Investor DD Platform", href: "/fundraising-and-investor-due-diligence" },
      { name: "Best Data Room for Startups", href: "/best-data-room-for-startups" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Security", href: "/security" },
      { name: "Demo", href: "/demo" },
      { name: "Get Started", href: "/get-started" },
      { name: "Ecosystem", href: "/ecosystem" },
      { name: "Kindora", href: "/kindora" },
      { name: "Try for Free", href: "https://cad.spaceaiapp.com/vdr", external: true },
    ],
  },
];

const socialLinks: FooterLink[] = [
  { name: "YouTube", href: "https://www.youtube.com/@spacenexus-v1g", external: true },
  { name: "Instagram", href: "https://www.instagram.com/spacenexus7/", external: true },
  { name: "X", href: "https://x.com/space__nexus", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/space-nexus/", external: true },
];

function FooterAnchor({
  link,
  className,
}: {
  link: FooterLink;
  className: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.name}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,1.1fr)_minmax(0,2.4fr)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Space Nexus Home"
            >
              <span className="relative block w-10 h-10 flex-shrink-0">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="SpaceNexus secure virtual data room logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900">
                  SPACE
                </span>
                <span className="text-xl font-black tracking-tight text-[#2563eb]">
                  NEXUS
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              Enterprise-grade virtual data room software for M&A, fundraising,
              legal diligence, and secure document collaboration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4ed8]"
              >
                Request demo
              </Link>
              <a
                href="https://cad.spaceaiapp.com/vdr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                Try for free
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <FooterAnchor
                    key={link.name}
                    link={link}
                    className="text-sm font-medium text-gray-500 transition-colors hover:text-[#2563eb]"
                  />
                ))}
              </div>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-gray-900">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.name}`}>
                      <FooterAnchor
                        link={link}
                        className="text-sm leading-5 text-gray-600 transition-colors hover:text-[#2563eb]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Space Nexus. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link
              href="/sitemap.xml"
              className="font-medium text-gray-500 transition-colors hover:text-[#2563eb]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
