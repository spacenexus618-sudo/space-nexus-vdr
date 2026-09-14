"use client";

import { useEffect } from "react";
import { trackCtaClick, trackNewsletterSubscribe } from "@/lib/analytics";

const CAD_LINK_SELECTOR = 'a[href*="cad.spaceaiapp.com"]';
const NEWSLETTER_SELECTOR = '[data-analytics-event="newsletter-subscribe"]';

export default function KindoraAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(NEWSLETTER_SELECTOR)) {
        trackNewsletterSubscribe();
        return;
      }
      const anchor = target?.closest<HTMLAnchorElement>(CAD_LINK_SELECTOR);
      if (anchor) {
        trackCtaClick({
          cta: "cad_signup",
          href: anchor.href,
          label: anchor.textContent?.trim() || "",
          page: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}