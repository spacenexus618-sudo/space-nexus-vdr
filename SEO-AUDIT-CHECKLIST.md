# SpaceNexus SEO Audit Checklist

## Tier 1: Crawlability & Indexation (Critical)

✅ Task 1. Verify og-image.png exists — `layout.tsx:88` references `/og-image.png` but file doesn't exist in `public/`. Returns 404. Fix: create the image or remove the reference.

✅ Task 2. Verify logo.png exists — `JsonLd.tsx:12` references `https://spacenexus.net/logo.png` but file doesn't exist. Broken Organization schema logo. 

✅ Task 3. Validate sitemap contains only canonical URLs — `sitemap.ts` generates 300+ URLs. Verify none are redirected, noindexed, or soft 404s.

✅ Task 4. Check for duplicate canonical tags — Some pages use `alternates: { canonical }` in metadata, others use raw `<link rel="canonical">`. Verify no conflicts.

✅ Task 5. Audit robots.txt for crawl budget waste — `robots.ts` only blocks `/api/`, `/admin/`, `/private/`. Check if any low-value pages (tag pages, filtered views, search results) should be blocked.

✅ Task 6. Submit sitemap to Google Search Console — Verify `sitemap.xml` and `kindora/sitemap.xml` are submitted and index coverage is healthy.

---

## Tier 2: Technical Foundations (High Impact)

✅ Task 7. Run Core Web Vitals audit — Test homepage, pricing, blog posts on PageSpeed Insights. Check LCP < 2.5s, INP < 200ms, CLS < 0.1.

✅ Task 8. Check image optimization — Site uses `sharp` dependency but verify: WebP conversion, `loading="lazy"` on below-fold images, descriptive alt text, compressed file sizes.

✅ Task 9. Verify HTTPS across entire site — All pages should redirect HTTP → HTTPS. Check for mixed content warnings.

✅ Task 10. Check for redirect chains — Verify no redirect chains (e.g., HTTP → www → HTTPS). Each redirect wastes crawl budget.

✅ Task 11. Audit URL structure — Verify consistent lowercase, hyphen-separated, no unnecessary parameters. Check `/kindora/*` URLs match `/vdr/*` structure.

✅ Task 12. Check mobile responsiveness — Verify viewport meta tag, tap target sizes, no horizontal scroll on key pages.

---

## Tier 3: On-Page Optimization (Medium Impact)

✅ Task 13. Audit title tags for length — Check all 70+ pages. Titles should be 50-60 characters. Some titles like "Data Room Setup Walkthrough — SpaceNexus Video Tutorial | SpaceNexus" (71 chars) will truncate.

✅ Task 14. Audit meta descriptions — Verify unique descriptions on every page, 150-160 characters, includes primary keyword, clear value proposition.

✅ Task 15. Fix heading hierarchy — Check for multiple H1s, skipped levels (H1 → H3), headings used for styling only.

✅ Task 16. Add keywords to first 100 words — Verify primary keyword appears in first paragraph of each page.

✅ Task 17. Fix blog table rendering — `blog/[slug]/page.tsx:64-66` renders markdown tables as `<p>` text. Tables lose structure and extractability. FIXED

✅ Task 18. Audit internal linking — Check for orphan pages, descriptive anchor text, logical link relationships. Blog posts should link to 2-3 relevant feature/solution pages.

---

## Tier 4: Content Quality & E-E-A-T (Medium Impact)

✅ Task 19. Add "Last updated" dates — No visible freshness signals on any page. Add to homepage, features, competitors, blog posts.

✅ Task 20. Fix author attribution — `business-acquisition-software/page.tsx:167` uses `@type: "Organization"` as author. Replace with Person + credentials for E-E-A-T.

✅ Task 21. Add dateModified to Article schema — Blog posts have `datePublished` but content pages lack `dateModified`.

✅ Task 22. Create author dedicated pages — `authorProfiles` exist in `blog/data/posts.ts` with LinkedIn URLs, but no `/about/[author]` pages.

✅ Task 23. Audit content depth — Check thin content pages. Feature pages (`/features/*`) should have 500+ words of unique content, not just feature lists.

✅ Task 24. Check for keyword cannibalization — Multiple pages target similar keywords: "virtual data room software" appears on homepage, features, data-room-software, electronic-data-room, etc. FIXED: Differentiated titles, descriptions, and keywords arrays across 7 pages. Homepage remains canonical for "virtual data room software."

---

## Tier 5: Schema & Structured Data (Quick Wins)

Task 25. Add HowTo schema to tutorial pages — 8 tutorial pages have step-by-step content but only VideoObject schema.

✅ Task 26. Add ItemList schema to comparison pages — `/competitors/vdr-alternatives` and `/pricing-comparison` have comparison tables but no ItemList schema. FIXED: vdr-alternatives already had ItemList schema. Added ItemList schema to pricing-comparison/page.tsx with 7 ranked providers (SpaceNexus, Datasite, Intralinks, Firmex, iDeals, DocSend, Email+Cloud).

✅ Task 27. Add FAQPage schema to blog posts — Blog posts like "what-is-a-virtual-data-room" have Q&A structure but no FAQ schema. FIXED: Added automatic FAQPage schema extraction in blog/[slug]/page.tsx. Posts with "## Frequently Asked Questions" sections now auto-generate FAQPage JSON-LD.

✅ Task 28. Add BreadcrumbList schema to pages missing it — Audit all 70+ pages. Some feature and industry pages lack breadcrumb schema. FIXED: Added BreadcrumbList to get-started, lead-generation, and social-media-platforms. Kindora pages (121) deferred.

✅ Task 29. Fix pricing schema mismatch — `pricing/page.tsx:167` has `lowPrice: "149"` but page shows "Contact Us". Remove or fix. FIXED: Updated lowPrice to "0", added description field explaining "Contact for pricing", and aligned offer descriptions with actual page display.

✅ Task 30. Add SiteNavigationElement schema — Header component lacks structured data for navigation hierarchy. FIXED: Created SiteNavigationSchema.tsx component with full navigation hierarchy JSON-LD (Products, Features, Industries, Ecosystem, Solutions, Pricing, Security, Blog, About) and added to root layout.tsx.
