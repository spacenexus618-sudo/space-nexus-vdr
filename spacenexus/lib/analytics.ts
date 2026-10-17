import { useEffect, useRef } from "react";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function track(event: string, params?: AnalyticsParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

export function trackDemoRequest(params?: AnalyticsParams) {
  track("generate_lead", { event_category: "conversion", currency: "USD", ...params });
}

export function trackCalculation(tool: string) {
  track("first_calculation", { event_category: "free_tool", tool });
}

export function trackCtaClick(params: AnalyticsParams) {
  track("cta_click", { event_category: "conversion", ...params });
}

export function trackNewsletterSubscribe() {
  track("newsletter_subscribe", { event_category: "newsletter" });
}

export function useTrackFirstCalculation(tool: string, ...deps: unknown[]) {
  const initial = useRef<unknown[]>(deps);
  const fired = useRef(false);

  useEffect(() => {
    if (!fired.current && deps.some((value, index) => value !== initial.current[index])) {
      fired.current = true;
      trackCalculation(tool);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}