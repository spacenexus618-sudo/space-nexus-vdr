# AI SEO: 30-Task Action Plan

A phased, executable plan to get cited by AI search engines — Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini, and Copilot.

---

## Phase 0: Foundation & Audit (Tasks 1–7)

> **Goal**: Understand your current AI visibility, fix access barriers, and establish a baseline.

### Task 1 — Audit current AI visibility
Manually test 10–20 priority queries across Google AI Overviews, ChatGPT, and Perplexity. Log whether you're cited (and how), and which competitors appear instead. Use a spreadsheet with columns: Query, Platform, You Cited?, Competitors Cited, Notes.

### Task 2 — Check robots.txt for AI bot access
Verify that `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, and `Bingbot` are allowed. Block only `CCBot` (training-only) if needed. Being blocked = zero citations on that platform.

### Task 3 — Run a content extractability audit
Score your top 10 pages against the extractability checklist: clear first-paragraph definition, self-contained answer blocks, statistics with sources, headings matching query patterns, FAQ sections, schema markup, author attribution, freshness dates.

### Task 4 — Verify index status across platforms
Check Google Search Console (coverage), Bing Webmaster Tools (Copilot), and Brave Search (Claude). If any platform can't find you, they can't cite you. Submit sitemaps where missing.

### Task 5 — Identify competitor citation patterns
For each priority query where competitors get cited and you don't, analyze their content structure, schema markup, freshness, third-party presence (Wikipedia, Reddit, review sites), and authority signals. Document the gap.

### Task 6 — Run a PageSpeed analysis
AI platforms (especially Copilot) weight page speed. Score your top pages via Lighthouse or PageSpeed Insights. Target sub-2-second load times. Document pages needing optimization.

### Task 7 — Establish baseline metrics
Record current AI visibility baseline: AI Overview presence, brand citation rate, share of AI voice vs. competitors, and branded search volume. These are your "before" numbers to measure against.

---

## Phase 1: Structure — Make Content Extractable (Tasks 8–14)

> **Goal**: Organize content so AI systems can cleanly extract passages, tables, and answers.

### Task 8 — Rewrite lead paragraphs for direct answers
On every priority page, open with a 40–60 word self-contained answer block. First sentence = the direct answer. Follow with supporting context. This is what AI extracts for featured snippets and answer boxes.

### Task 9 — Add definition blocks for "What is [X]" queries
On pages targeting definitional queries, write a concise `## What is [Term]?` section with a one-sentence definition + 2–3 sentence expansion. Match the pattern from skill references.

### Task 10 — Convert comparison content to tables
Wherever you compare options ("X vs Y", "X alternatives"), replace prose comparisons with structured markdown tables. Include columns for Feature, Option A, Option B, and a "Best For" row. AI systems heavily favor table extraction.

### Task 11 — Add FAQ sections with natural phrasing
On each priority page, add 3–8 FAQ items using real user search phrasing. Format as `### [Question]?` followed by a direct answer in the first sentence (50–100 words). This enables FAQPage schema in Task 13.

### Task 12 — Implement step-by-step blocks for "How to" queries
For any process or how-to content, use numbered step blocks with bold step headers and 1–2 sentence descriptions. Lead with a one-sentence overview of the full process.

### Task 13 — Add FAQPage, HowTo, Article, and Organization schema
Implement JSON-LD structured data on priority pages. Minimum: Organization (site-wide), Article (blog), FAQPage (pages with Q&A), Product (product pages), HowTo (tutorials). Content with schema sees 30–40% higher AI visibility on non-Google engines.

### Task 14 — Rewrite content into self-contained paragraphs
Scan priority pages for paragraphs that depend on earlier context. Rewrite them as standalone, extractable units — each paragraph should make sense if plucked out in isolation. Perplexity and Claude especially reward this.

---

## Phase 2: Authority — Make Content Citable (Tasks 15–21)

> **Goal**: Build the trust signals AI systems use to decide whether to cite you.

### Task 15 — Add statistics with named sources to every priority page
Find 2–3 relevant statistics per page. Format: `[Claim]. According to [Source], [specific number + timeframe]. [Context].` The Princeton GEO study shows this boosts citation by 37–40%.

### Task 16 — Add expert quotes with attribution
On key pages, include 1–2 quotes from recognized experts. Format: `"[Quote]," says [Name], [Title] at [Organization]. [Context].` This adds 25–30% citation lift. Use internal experts, industry thought leaders, or cited research authors.

### Task 17 — Add visible "Last updated" dates
Display `Last updated: [date]` prominently on every content page. ChatGPT cites content updated within 30 days at 3.2x the rate of older content. Refresh and re-date quarterly.

### Task 18 — Add author bios with credentials
Every article needs a named author with a bio that establishes relevant expertise (credentials, experience, publications). Google's E-E-A-T heavily weights demonstrable author expertise for AI Overviews.

### Task 19 — Add authoritative tone and evidence citations
Rewrite promotional or vague claims. Replace "we're the best" with specific, sourced statements. Use the Evidence Sandwich pattern: claim → data + source → conclusion. Princeton GEO study shows authoritative tone adds 89% visibility for AI Overviews.

### Task 20 — Create original data or research
Publish at least one original data asset (survey results, customer usage stats, industry analysis). Original research is uniquely citable — AI systems have no other source to reference. This is the highest-authority content type.

### Task 21 — Internal linking audit and topical cluster building
Review internal link structure. Ensure priority pages are linked from related content. Build topical clusters (pillar + cluster pages) around your core topics. Strong internal linking signals topical authority to all AI platforms.

---

## Phase 3: Presence — Be Where AI Looks (Tasks 22–27)

> **Goal**: Expand beyond your own site to where AI engines find sources.

### Task 22 — Set up or update Wikipedia presence
If you qualify for a Wikipedia page, ensure it's accurate and current. If not, identify authoritative third-party sites (industry publications, analyst reports, review platforms) where you should be listed. Wikipedia = 7.8% of all ChatGPT citations.

### Task 23 — Build and maintain review platform profiles
Ensure your profiles on G2, Capterra, TrustRadius (B2B) or Google Business Profile (local/ecom) are complete, current, and have recent reviews. AI engines heavily weight third-party consensus for recommendations.

### Task 24 — Create `/llms.txt`
Add an `llms.txt` file at your site root giving AI systems a brief overview: what you do, who it's for, and links to key pages (pricing, docs, about, top articles). Follow the llmstxt.org spec.

### Task 25 — Create `/pricing.md`
Add structured pricing data at your site root. Use consistent format: tier name, price, limits, features. AI agents increasingly compare products programmatically — opaque or JS-rendered pricing gets filtered out.

### Task 26 — Audit and optimize third-party citations
Find where your brand is mentioned externally (guest posts, interviews, roundups, review sites). Ensure these mentions are accurate and link back. Optimize your presence on Reddit, Quora, and industry communities relevant to your space.

### Task 27 — Create YouTube content for how-to queries
Google AI Overviews frequently cites YouTube. Produce 3–5 short how-to videos answering your priority queries. Optimize titles, descriptions, and captions with target query language.

---

## Phase 4: Platform-Specific Optimization (Tasks 28–29)

> **Goal**: Fine-tune for each AI platform's unique preferences.

### Task 28 — Platform-by-platform optimization pass
- **Google AI Overviews**: Verify schema markup, E-E-A-T signals, topical cluster depth
- **ChatGPT**: Ensure content updated within 30 days; structure answers the way ChatGPT would phrase them
- **Perplexity**: Publish public PDFs (whitepapers, guides); verify FAQPage schema is live
- **Copilot**: Confirm Bing indexing; optimize page speed <2s; build LinkedIn presence
- **Claude**: Verify Brave Search indexing; maximize factual density and source citations

### Task 29 — Evaluate and implement OKF bundle
Use Suganthan's free generator or the WordPress plugin to create an `/okf/` bundle. Even without confirmed ranking signal, it acts as protocol-layer registration (like early schema.org) and doubles as an internal-linking audit. Skip if site is <10 pages or on a closed platform.

---

## Phase 5: Monitor & Iterate (Task 30)

> **Goal**: Track performance and continuously improve.

### Task 30 — Set up ongoing AI visibility monitoring
- **Monthly**: Manual check of 20 priority queries across Google AI Overviews, ChatGPT, Perplexity. Log citation status, competitors cited, and sentiment framing
- **Quarterly**: Full re-audit covering extractability, freshness, and competitor analysis
- **Tools**: Evaluate Otterly AI, Peec AI, or ZipTie for scaled tracking once baseline is established
- **Attribution**: Add "How did you hear about us?" to capture AI-influenced traffic; monitor branded search volume as a proxy
- **Track the ladder**: Log each mention as Retrieved / Cited / Mentioned / Recommended — not just a binary "cited or not"

---

## Success Criteria

| Milestone | Target |
|-----------|--------|
| AI bots allowed in robots.txt | Week 1 |
| Schema markup on all priority pages | Week 2–3 |
| All priority pages optimized for extractability | Week 4–6 |
| `/llms.txt` and `/pricing.md` live | Week 4 |
| Statistics + sources on every page | Week 6 |
| First citation in ChatGPT/Perplexity | Month 2–3 |
| First AI Overview presence | Month 2–4 |
| 2x increase in brand citation rate | Month 6 |
| Monitoring system operational | Month 1 (ongoing) |

---

*Generated from the AI SEO skill — see `.claude/skills/ai-seo/SKILL.md` and `references/` for source materials.*
