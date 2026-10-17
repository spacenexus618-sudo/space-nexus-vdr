# geo-seo-claude Repository Analysis — for Kindora

**Date:** September 2026
**Repository analyzed:** `geo-seo-claude`
**Location:** `C:\Users\gopika\Desktop\spaceai\nexusRepo\spacenexus\geo-seo-claude`

---

## 1. What Is This Repository and What Is It Used For?

In simple terms: **this is a tool that helps websites get found and recommended by AI search engines** like ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini.

Traditional SEO helps you rank on Google. This tool handles the "next generation" problem: **when someone asks an AI chatbot a question, which websites will that AI choose to quote or recommend?** The tool analyzes websites and gives them a "GEO score" (0-100) measuring how likely AI systems are to cite their content.

It is built as an extension for **Claude Code** (a terminal-based AI coding assistant). The core files are:

- `geo/SKILL.md` — the main "brain" that routes commands
- `skills/` — 14 specialized sub-skills (audit, citability, crawlers, etc.)
- `agents/` — 5 AI sub-agents that work in parallel during a full audit
- `scripts/*.py` — Python programs that do the actual data collection and scoring
- `schema/` — JSON-LD structured-data templates
- `white-label/` — branding config for agencies reselling the reports

### What GEO means

GEO = **Generative Engine Optimization**. It optimizes content so AI systems can discover, understand, cite, and recommend it. This overlaps with traditional SEO but is distinct: SEO optimizes for rankings, GEO optimizes for **AI citation and recommendation**.

---

## 2. Why Do We Need to Use It?

Because **more and more people are getting answers from AI chatbots instead of Google**. Data cited in the repository:

| Metric | Value |
|--------|-------|
| GEO services market | $850M+ (projected $7.3B by 2031) |
| AI-referred traffic growth | +527% year-over-year |
| AI traffic conversion vs organic | 4.4x higher |
| Gartner: search traffic drop by 2028 | -50% |
| Brand mentions vs backlinks for AI | 3x stronger correlation |
| Google AI Overviews reach | 1.5B users/month, 200+ countries |
| ChatGPT weekly active users | 900M+ |
| Marketers investing in GEO | Only 23% |

**The practical downside for any business:** If AI crawlers cannot read your website, or your content is not written in a way AI models like to quote, then when someone asks ChatGPT "which [product/service like yours] should I use?" — **your business will not be mentioned.** Kindora would be invisible in the AI answers its customers are increasingly using.

---

## 3. How Can We Use It? (Steps)

### Step 1 — Install requirements
- **Python 3.8+**, **Git**, and the **Claude Code CLI**
- Install Claude Code: `npm install -g @anthropic-ai/claude-code`

### Step 2 — Run the installer
```bash
./install.sh        # macOS / Linux
./install-win.sh    # Windows (Git Bash only — NOT PowerShell/CMD)
```
The installer copies the skills and agents into `~/.claude/` and installs Python dependencies.

### Step 3 — Install Python dependencies
```bash
pip install -r requirements.txt
```
(Installs `beautifulsoup4`, `requests`, `lxml`, `playwright`, `flask`, `rich`, etc.)

### Step 4 — Run the tool from inside Claude Code
Open Claude Code in any project folder and type slash commands:

| Command | What It Does |
|---------|--------------|
| `/geo quick <url>` | 60-second GEO visibility snapshot |
| `/geo audit <url>` | Full GEO + SEO audit (5 parallel agents, takes minutes) |
| `/geo citability <url>` | Tells you which content passages AI will/won't quote |
| `/geo crawlers <url>` | Checks if AI bots can access your site (robots.txt) |
| `/geo llmstxt <url>` | Generates/analyzes the `llms.txt` file for AI crawlers |
| `/geo brands <url>` | Scans brand presence on YouTube/Reddit/Wikipedia/LinkedIn |
| `/geo platforms <url>` | Platform-specific optimization (ChatGPT, Perplexity, AIO) |
| `/geo schema <url>` | Detects/generates structured data (schema markup) |
| `/geo technical <url>` | Technical SEO audit |
| `/geo content <url>` | Content quality & E-E-A-T assessment |
| `/geo report <url>` | Client-ready report |
| `/geo report-pdf <url>` | Professional PDF with charts and scores |
| `/geo prospect` | CRM-lite prospect pipeline management |
| `/geo proposal` | Auto-generate client proposals |
| `/geo compare` | Monthly score-improvement (delta) reports |

### Step 5 — Follow the recommendations
The tool outputs a prioritized action plan (Critical → High → Medium → Low) plus a 30-day improvement roadmap tied to the score.

### How the full audit works (`/geo audit`)
1. **Discovery** — fetches homepage, detects business type, crawls sitemap (up to 50 pages)
2. **Parallel analysis** — launches 5 subagents simultaneously (AI visibility, platform analysis, technical, content, schema)
3. **Synthesis** — aggregates scores into a composite GEO Score (0-100)
4. **Report** — outputs a prioritized action plan with quick wins

### Scoring methodology

| Category | Weight | Measures |
|----------|--------|----------|
| AI Citability & Visibility | 25% | Passage scoring, answer block quality, AI crawler access |
| Brand Authority Signals | 20% | Mentions on Reddit, YouTube, Wikipedia, LinkedIn |
| Content Quality & E-E-A-T | 20% | Expertise signals, original data, author credentials |
| Technical Foundations | 15% | SSR, Core Web Vitals, crawlability, mobile, security |
| Structured Data | 10% | Schema completeness, JSON-LD validation |
| Platform Optimization | 10% | Google AIO, ChatGPT, Perplexity readiness |

Score interpretation: 90–100 Excellent | 75–89 Good | 60–74 Fair | 40–59 Poor | 0–39 Critical.

---

## 4. Main Benefits

1. **Understand your AI visibility** — get a concrete 0-100 score instead of guessing.
2. **Fix critical "invisible to AI" issues** — e.g., discovering your `robots.txt` blocks AI crawlers.
3. **Rewrite content to be AI-quotable** — the citability scorer shows exact passages needing rewrites, with specific suggestions.
4. **Generate technical files** — `llms.txt`, schema markup (JSON-LD), robots.txt recommendations.
5. **Track brand authority** — see where your brand does/doesn't appear on AI-cited platforms.
6. **Generate professional reports** — markdown or PDF deliverables, white-labelable.

### Key research insights the tool is built on
- Optimal AI-cited passages are **134–167 words**, self-contained, fact-rich, and answer a question in the first 1–2 sentences.
- Definition patterns ("X is...") increase citation rates ~2.1x (Georgia Tech 2024).
- Adding statistics to passages increases citation ~40% (Princeton 2024).
- Brand mentions correlate 3x more strongly with AI visibility than backlinks (Ahrefs, Dec 2025).
- Over 35% of top 1,000 websites block at least one major AI crawler; 5–10% block all of them (Originality.ai 2025).
- Only 11% of domains are cited by both ChatGPT and Google AI Overviews for the same query.

---

## 5. Is Claude Required? Where Is Claude Used?

**Yes, Claude is effectively required to get the full benefit.**

Where Claude is used:
- The entire tool is built as **Claude Code skills and agents**. The `SKILL.md` files are instructions Claude Code reads and executes. Typing `/geo audit <url>` makes Claude Code coordinate everything — fetching pages, delegating to the 5 sub-agents, synthesizing scores, writing reports.
- `agents/*.md` are **Claude sub-agent definitions**. The parallel analysis works because Claude Code can run 5 AI agents at once.
- The **reasoning, judgment, and recommendation writing** ("this passage buries the answer; rewrite it like this") is done by the Claude AI model, not by plain code.

The Python scripts (`fetch_page.py`, `citability_scorer.py`, `brand_scanner.py`) do mechanical work (HTTP fetches, regex scoring) but are **called by Claude** and their output is interpreted by Claude.

---

## 6. Can We Use the Repository Without Claude?

**Partially — not fully.**

**What works without Claude:**
- The standalone Python scripts run directly:
  ```bash
  python scripts/fetch_page.py <url>
  python scripts/citability_scorer.py <url>
  python scripts/brand_scanner.py <brand_name>
  python scripts/llmstxt_generator.py <url>
  python scripts/generate_pdf_report.py <audit.json>
  python scripts/crm_dashboard.py
  ```
  You get raw data (JSON scores, robots.txt checks, brand mentions).

**What doesn't work without Claude:**
- The `/geo` slash commands (only exist inside Claude Code).
- The intelligence layer — analysis, business-type detection, prioritization, rewrite suggestions, report writing.
- The 5 parallel sub-agents.

Practically: without Claude, you'd run each Python script manually and interpret raw JSON yourself — losing most of the value.

---

## 7. How Can This Be Useful for Kindora?

Kindora's exact benefit depends on what Kindora is (product, service, or website), but the fundamental value is identical: **it helps Kindora appear in AI-generated answers about Kindora's category.**

The repo answers these questions for Kindora:
- Can ChatGPT, Claude, Perplexity, and Google's AI read Kindora's website right now? (`/geo crawlers`)
- If a user asks an AI "recommend a [Kindora-type product]," would Kindora's content be quoted? (`/geo citability`)
- Does Kindora have the structured data (schema) that AI systems use to identify what it is? (`/geo schema`)
- Where is "Kindora" mentioned on YouTube, Reddit, Wikipedia, LinkedIn? (`/geo brands`)
- Is there an `llms.txt` file helping AI crawlers? (`/geo llmstxt`)

---

## 8. Specific Benefits Kindora Can Get

1. **Baseline AI visibility score** — a number to track and improve over time.
2. **Unblock AI crawlers** — detects if Kindora's `robots.txt` blocks AI bots (very common) and gives the exact fix.
3. **AI-quotable content** — rewrites key pages so AI models are more likely to cite Kindora when answering customer questions.
4. **Entity clarity** — ensures AI knows exactly what Kindora is, who it's for, and what it does (via schema + clear definitions).
5. **Brand presence roadmap** — knows exactly which platforms (YouTube/Reddit/Wikipedia/LinkedIn) matter and how to build presence.
6. **Monthly progress tracking** — `/geo compare` shows score improvements, useful for internal reporting.

---

## 9. Practical Examples for Kindora

**Example A — Foundation check:**
> Run `/geo audit <Kindora's URL>`. If it reports "GPTBot BLOCKED" or "ClaudeBot BLOCKED", fix `robots.txt` immediately. A 5-minute change makes Kindora visible in AI search.

**Example B — Make a key page quotable:**
> Run `/geo citability <Kindora's homepage or service page>`. The tool flags a passage scoring 35/100 because the answer is "buried" and there are no statistics. It suggests rewriting the opening as "Kindora is [definition]... Based on our analysis of [X] users, [statistic]..." — the format AI models quote.

**Example C — Industry-answer readiness:**
> If someone asks an AI "best way to [Kindora's use case]" and Kindora isn't mentioned, the tool tells you whether AI can even read Kindora's answer, whether content has answer-first structure, and what's missing.

**Example D — Generate llms.txt:**
> `/geo llmstxt <Kindora URL>` generates an `llms.txt` file listing Kindora's key pages (About, Pricing, Features), so AI crawlers understand the site structure.

---

## 10. Limitations, Costs, and Disadvantages

### Costs
- **Claude Code subscription** — paid Claude Code/Anthropic account required.
- **No hidden API costs** — the tool uses free public web fetches (Python `requests` to public pages and free Wikipedia/Wikidata APIs). No third-party API keys needed.

### Limitations / disadvantages
1. **Requires Claude to be fully useful** — without Claude Code, you lose the intelligence and reports.
2. **Windows setup friction** — installer requires Git Bash, not PowerShell.
3. **Python dependency install** — needs Python 3.8+, `pip install -r requirements.txt`; finicky on Windows.
4. **Mechanical scoring is heuristic** — `citability_scorer.py` uses simple regex rules. It's a guide, not perfect science.
5. **Crawl limits** — max 50 pages per audit, 30 sec/page timeout. Not exhaustive.
6. **Platform checks are partly manual** — `brand_scanner.py` returns search URLs + instructions for Claude to verify; it notes "Actual YouTube API would be used in production."
7. **Wikipedia notability** — recommendations to get a Wikipedia page are subject to Wikipedia's strict rules; not always achievable.
8. **Time investment** — audits and fixes are ongoing work, not a one-time setup.
9. **Evolving field** — GEO/AI-search mechanics change fast; assumptions can become dated.

---

## 11. Alternatives to Claude Code

**This repo is Claude Code–native.** Three things are Claude Code–specific: `SKILL.md` files, `agents/*.md`, and `/geo` slash commands. No other tool reads those natively.

If you don't want to use Claude Code:

### Option 1 — Run the Python scripts directly
Works with any tool or no AI at all. You get raw JSON data but lose the reasoning layer.

### Option 2 — Use another AI coding tool (Cursor, Codex, Gemini CLI, Windsurf, etc.)
These read `AGENTS.md`, not Claude's `SKILL.md`. You'd have to manually adapt the instructions; slash commands won't work. Not recommended.

### Option 3 — Use a cross-platform GEO tool instead

| Alternative | Works without Claude? | How |
|---|---|---|
| **`ultimate-seo-geo`** (mykpono) | Yes | AGENTS.md-based — runs on Codex, Gemini CLI, Copilot, Cursor, Windsurf, Cline, Aider. One file, all platforms. |
| **`geo-optimizer-skill`** (Auriti Labs) | Yes | Standalone Python CLI + MCP server. Add to any MCP-capable AI, or run as plain CLI. Optional Gemini API (free tier) for LLM analysis. |
| **`eGEOagents`** (mverab) | Yes | Runtime-agnostic `egeo` CLI + Claude Code adapter. Same engine, both runtimes. |

### Do we need external APIs?
**No.** The repository uses no paid API keys:
- `requests` fetches public web pages, robots.txt, llms.txt, and sitemaps directly (plain webpage fetches).
- Wikipedia/Wikidata public API for brand scanning — free, no key.
- Search URLs for YouTube, Reddit, LinkedIn, etc. are just constructed URLs.
- The only "API" dependency is Claude Code's own subscription.

---

## 12. Final Recommendation

### Should Kindora use this repository?

**Yes — at least as a diagnostic and monitoring tool.**

### The strong case for using it
- The foundational checks (`/geo crawlers`, `/geo schema`, `/geo llmstxt`, `/geo citability`) are genuinely valuable and low-effort. Running them once tells you whether AI can even read Kindora's site and what to fix.
- The fixes it recommends (robots.txt, schema markup, content rewrites, llms.txt) are **standard best practices** that also help traditional SEO — beneficial even if you never fully adopt GEO.
- Cost is essentially just the Claude Code subscription; no expensive API.
- Few competitors do GEO yet (only 23% of marketers invest in it) — acting now is a **competitive advantage**.

### Caveats to keep in mind
- Scoring is heuristic and brand-presence checks are partly manual — treat it as a **guide**, not gospel.
- Don't over-rotate toward "AI-speak" content at the expense of genuinely good writing. The best AI-quotable content is good content with clear structure and real data.
- You still need regular SEO fundamentals; this tool complements rather than replaces them.

### Bottom line
Use it as a **diagnostic tool first**: run `/geo audit` and `/geo crawlers` on Kindora's key pages, fix critical issues (AI crawler access, schema, llms.txt, quotable answer blocks), and adopt it for **monthly monitoring** (`/geo compare`). That gives Kindora meaningful AI-search visibility at minimal cost and risk.

Invest deeper (proposal/report/prospect workflow) **only if Kindora plans to sell GEO as a service** to clients.

**If avoiding Claude Code entirely:** use `ultimate-seo-geo` (if Kindora commonly uses Cursor/Codex/Gemini CLI) or `geo-optimizer-skill` (if you'd rather have a non-AI CLI or an MCP server plugged into any tool). Both are MIT-licensed, free, and cover the same audit categories.

---

*This document was generated from an analysis of the actual repository files, including `README.md`, `geo/SKILL.md`, `docs/` (getting-started, architecture, skills-and-agents), all `skills/geo-*/SKILL.md` files, and `scripts/*.py`.*