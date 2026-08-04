"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const quickLinks = [
  { label: "Features", href: "/kindora/features", num: "01" },
  { label: "Solutions", href: "/kindora/solutions", num: "02" },
  { label: "Pricing", href: "/kindora/pricing", num: "03" },
  { label: "Blog", href: "/kindora/blog", num: "04" },
  { label: "Reviews", href: "/kindora/consumer-review", num: "05" },
];

export default function KindoraNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setContactOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
        : "bg-gradient-to-b from-white via-white to-white/95"
        }`}
    >
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-80" />

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/kindora"
            className="flex items-center gap-2.5 group"
            aria-label="Kindora Home"
          >
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/icononly_transparent_nobuffer.png"
                alt="Kindora"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                SPACE
              </span>
              <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                KINDORA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onBlurCapture={(e) => {
                if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
                  setProductsOpen(false);
                }
              }}
            >
              <button
                onFocus={() => setProductsOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") { e.stopPropagation(); setProductsOpen(false); }
                }}
                className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-3 w-[340px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-4 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Our Products
                    </p>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Space Nexus VDR
                        </p>
                        <p className="text-xs text-gray-500">
                          Virtual Data Room for M&A & due diligence
                        </p>
                      </div>
                    </a>
                    <a
                      href="/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Kindora
                        </p>
                        <p className="text-xs text-gray-500">
                          Complete operating system for nonprofits
                        </p>
                        
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div
              className="relative"
              ref={contactRef}
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
              onBlurCapture={(e) => {
                if (contactRef.current && !contactRef.current.contains(e.relatedTarget as Node)) {
                  setContactOpen(false);
                }
              }}
            >
              <button
                onFocus={() => setContactOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") { e.stopPropagation(); setContactOpen(false); }
                }}
                className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
              >
                Contact
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {contactOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[700px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-5 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">
                      Global Offices
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { flag: "🇺🇸", phone: "+1 646 421 5740", email: "usa@pmspace.ai", address: "2500 MARCONI AVE, STE 101, SACRAMENTO, CA 95821 USA" },
                        { flag: "🇨🇦", phone: "+1 (979) 326-9493", email: "ca@pmspace.ai", address: "North America - Regional Office, Toronto, ON, Canada" },
                        { flag: "🇦🇪", phone: "+971 56 256 7509", email: "uae@pmspace.ai", address: "Middle East Regional Office, Dubai, UAE" },
                        { flag: "🇸🇦", phone: "+966 56 208 1999", email: "sa@pmspace.ai", address: "Saudi Arabia Office, Riyadh, Kingdom of Saudi Arabia" },
                        { flag: "🇰🇼", phone: "+965 9724 3755", email: "kw@pmspace.ai", address: "Kuwait City, Strategic Partner for Gulf Region" },
                        { flag: "🇸🇬", phone: "+65 86 111 900", email: "sg@pmspace.ai", address: "7 Soon Lee St, #04-39 ISPACE BUILDING, Singapore 627608" },
                      ].map((office) => (
                        <div key={office.flag} className="p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg">{office.flag}</span>
                            <a href={`tel:${office.phone.replace(/[\s()\-]/g, "")}`} className="text-sm font-semibold text-gray-900 hover:text-[#2563eb] transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <a href={`mailto:${office.email}`} className="text-xs text-[#2563eb] hover:text-[#1d4ed8] transition-colors block mb-0.5">
                            {office.email}
                          </a>
                          <p className="text-xs text-gray-500 leading-tight">{office.address}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3 px-1">
                      <Link
                        href="/kindora/contact"
                        className="flex items-center justify-between w-full py-1.5 text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                      >
                        Send us a message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Request a Demo
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="flex justify-center">
              <a
                href="https://cad.spaceaiapp.com/kindora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Try for Free
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Mobile Drawer — sibling of <nav> to avoid WebKit backdrop-filter compositing bug */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileRef}
            className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-white shadow-2xl border-l border-gray-100 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-6 space-y-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-4 py-3.5 px-4 text-base font-medium text-gray-700 hover:text-[#2563eb] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <span className="text-xs font-bold text-gray-400 group-hover:text-[#2563eb] transition-colors w-6">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-6 space-y-3">
              <div className="border-t border-gray-100 pt-4">
                <a
                  href="tel:+16464215740"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-sm font-medium text-gray-600 hover:text-[#2563eb] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 646 421 5740
                </a>
              </div>
              <Link
                href="/kindora/demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center py-3.5 px-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full"
              >
                Request a Demo
              </Link>
              <a
                href="https://cad.spaceaiapp.com/kindora"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center py-3.5 px-4 text-base font-semibold text-[#2563eb] bg-blue-50 rounded-full"
              >
                Try for Free
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
