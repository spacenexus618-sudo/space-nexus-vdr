"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      { name: "Deals", href: "/features/deals" },
      { name: "Q&A Workflow", href: "/features/qa" },
      { name: "Analytics", href: "/features/activity-analytics" },
      { name: "Security", href: "/features/security-compliance" },
      { name: "Integrations", href: "/features/integrations" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "M&A Virtual Data Room", href: "/solutions/mergers-and-acquisitions-vdr" },
      { name: "Investor Data Room", href: "/solutions/investor-data-room" },
      { name: "Startup Data Room", href: "/solutions/startup-data-room" },
      { name: "Series A Fundraising", href: "/solutions/series-a-fundraising-data-room" },
      { name: "Legal Document Sharing", href: "/solutions/secure-document-sharing-for-legal" },
      { name: "Law Firm Exchange", href: "/solutions/law-firm-document-exchange" },
      { name: "Secure Document Sharing", href: "/secure-document-sharing" },
      { name: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Investment Banking", href: "/industries/investment-banking" },
      { name: "Private Equity", href: "/industries/private-equity" },
      { name: "Venture Capital", href: "/industries/venture-capital/early-stage-diligence" },
      { name: "Law Firms", href: "/industries/law-firms" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Technology", href: "/industries/technology" },
      { name: "Energy & Infrastructure", href: "/industries/energy-infrastructure" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "VDR Guide", href: "/vdr-guide" },
      { name: "Glossary", href: "/glossary" },
      { name: "Checklists", href: "/checklists" },
      { name: "Templates", href: "/checklists/templates" },
      { name: "Video Tutorials", href: "/tutorials" },
      { name: "FAQ", href: "/faq" },
      { name: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "VDR Alternatives", href: "/competitors/vdr-alternatives" },
      { name: "Datasite Alternative", href: "/competitors/datasite-alternative" },
      { name: "Intralinks Alternative", href: "/competitors/intralinks-alternative" },
      { name: "Pricing Comparison", href: "/pricing-comparison" },
      { name: "VDR Providers", href: "/vdr-providers" },
      { name: "Data Room Providers", href: "/data-room-providers" },
      { name: "M&A Data Room Providers", href: "/m-a-data-room-providers" },
      { name: "Virtual Data Room Providers", href: "/virtual-data-room-providers" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Security", href: "/security" },
      { name: "Demo", href: "/demo" },
      { name: "Ecosystem", href: "/ecosystem" },
      { name: "Kindora", href: "/kindora" },
      { name: "Contact Sales", href: "/demo" },
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
  const pathname = usePathname();

  if (pathname?.startsWith("/kindora")) return null;

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
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
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
