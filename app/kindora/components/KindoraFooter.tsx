import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Features", href: "/kindora/features" },
    { name: "Pricing", href: "/kindora/pricing" },
    { name: "Solutions", href: "/kindora/solutions" },
    { name: "Request Demo", href: "/kindora/contact" },
  ],
  features: [
    { name: "Donor Management", href: "/kindora/features/donor-management" },
    { name: "Grant Tracking", href: "/kindora/features/grant-management" },
    { name: "Program Management", href: "/kindora/features/client-management" },
    { name: "Financial Reports", href: "/kindora/features/reporting" },
    {
      name: "Volunteer Management",
      href: "/kindora/features/people-management",
    },
  ],
  company: [
    { name: "About SpaceAI", href: "/kindora/contact" },
    { name: "Contact", href: "/kindora/contact" },
    { name: "Blog", href: "/kindora/blog" },
    { name: "Vs Competitors", href: "/kindora/vs-competitors" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SpaceAI App. All rights reserved.
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
