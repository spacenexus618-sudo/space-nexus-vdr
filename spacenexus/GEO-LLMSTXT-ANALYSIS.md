# llms.txt Analysis: Kindora (spacenexus.net/kindora)

**Analysis Date:** 2026-10-08
**llms.txt Status:** Found at https://spacenexus.net/kindora/llms.txt (200)
**llms-full.txt Status:** Found at https://spacenexus.net/kindora/llms-full.txt (200)
**Root llms.txt cross-links:** Both files are linked from https://spacenexus.net/llms.txt (#Kindora section)

---

## Overall llms.txt Score: 80/100

| Dimension | Score |
|---|---|
| Completeness | 70/100 |
| Accuracy | 95/100 |
| Usefulness | 75/100 |

*(Completeness x 0.40 + Accuracy x 0.35 + Usefulness x 0.25 = 80)*

---

## Format Validation

| Element | Status | Notes |
|---|---|---|
| H1 Title | Pass | `# Kindora - LLM Index` (llms.txt), `# Kindora - Complete Product Reference` (llms-full.txt) |
| Description blockquote | Fail | llms.txt has no `>` blockquote; uses a `## Summary` paragraph instead (H2, not blockquote). llms-full.txt has it (2 blockquotes). |
| H2 Sections | Pass | llms.txt: Summary, Powered By, Key Pages, Keywords. llms-full.txt: Company Overview, Key Products & Features, Key Pages, Pricing, Support & Contact |
| Page entries | Pass | 13 entries (llms.txt), 13 entries (llms-full.txt) — all `>5` |
| URL validity | Pass | **0 broken URLs.** All 15 llms.txt URLs and 17 llms-full.txt URLs return HTTP 200 |
| Entry link format | Fail | llms.txt uses `- https://… - description` instead of spec `- [Title](URL): description` markdown links |
| Entry descriptions | Pass | Every entry has a description |
| Key Facts section | Fail | llms.txt lacks a `## Key Facts` section (founded, pricing plans, compliance) |
| Contact section | Pass | llms-full.txt has Support & Contact (About/Contact/Careers URLs); llms.txt lacks one |
| Reasonable length | Pass | Both files within 50-150 line scope |

---

## Missing Pages (in site, not in Kindora llms.txt)

1. https://spacenexus.net/kindora/pricing — pricing plans (Starter/Professional/Enterprise); llms-full.txt only points pricing back to the homepage
2. https://spacenexus.net/kindora/demo — demo request funnel
3. https://spacenexus.net/kindora/solutions — Kindora solutions by nonprofit type
4. https://spacenexus.net/kindora/vs-competitors — competitive positioning
5. https://spacenexus.net/kindora/consumer-review — reviews/ratings

Note: the spec caps llms.txt at 10-30 entries. 13 exist; add pricing + demo (15 total). Put the rest in llms-full.txt only.

---

## Improvement Recommendations

1. **Convert llms.txt entries to `- [Title](https://…): description` markdown links.** Current `- https://…` format is readable but deviates from the spec and links are less reliably parsed by AI markdown tooling.
2. **Add a `> ` blockquote description** under the H1 in llms.txt (e.g. `> All-in-one nonprofit management platform with donor CRM, grants, case management, accounting, volunteers, and fundraising`). Under 200 chars.
3. **Add a `## Key Facts` section** to llms.txt: Founded 2022, developer SpaceNexus, pricing tiers (Starter free / Professional / Enterprise), key differentiator (VeritasGraph-grounded AI with citations).
4. **Add `## Contact`** to llms.txt: Website + demo URL (About/contact/careers stay in llms-full.txt).
5. **Add `/kindora/pricing` and `/kindora/demo`** to llms.txt Key Pages (15 total); add `/kindora/solutions`, `/vs-competitors`, `/consumer-review` to llms-full.txt.
6. **Keep both files in sync** with the root https://spacenexus.net/llms.txt Kindora section.

---

## Suggested Updated llms.txt

```markdown
# Kindora - LLM Index

> All-in-one nonprofit management platform (NGO OS) with donor CRM, grants, case management, accounting, volunteer, and fundraising tools for nonprofits, NGOs, and community organizations.

## Summary

Kindora combines donor CRM, grants management, case management, nonprofit accounting, volunteer coordination, and fundraising in a single system. AI search and answers are grounded by the VeritasGraph knowledge-graph framework with verifiable source attribution on every result.

## Powered By

- [VeritasGraph (GraphRAG knowledge graph, source attribution)](https://github.com/bibinprathap/VeritasGraph): open-source GraphRAG framework
- [VeritasGraph Docs](https://bibinprathap.github.io/VeritasGraph/index.html): framework documentation

## Key Pages

- [Kindora Homepage](https://spacenexus.net/kindora): nonprofit management platform overview (donor CRM, grants, case management, accounting, volunteers, fundraising)
- [Donor CRM](https://spacenexus.net/kindora/donor-crm): donor profiles, giving history, relationship management
- [Grant Management](https://spacenexus.net/kindora/grant-management-software): grant tracking, reporting, compliance workflows
- [Case Management](https://spacenexus.net/kindora/case-management): beneficiary intake, enrollment, outcome tracking
- [Nonprofit Financials](https://spacenexus.net/kindora/nonprofit-financials): accounting, budgets, cost allocation
- [Volunteer Management](https://spacenexus.net/kindora/volunteer-management): scheduling, hours tracking, skill matching
- [Fundraising CRM](https://spacenexus.net/kindora/fundraising-crm): campaigns, online giving, fundraising workflow
- [Pricing](https://spacenexus.net/kindora/pricing): Starter (free), Professional, Enterprise plans
- [Demo Request](https://spacenexus.net/kindora/demo): request a Kindora demo
- [Knowledge Graph AI Search](https://spacenexus.net/kindora/knowledge-graph): how Kindora grounds AI answers with citations
- [VeritasGraph Engine](https://spacenexus.net/kindora/veritas-graph): the knowledge-graph engine behind Kindora AI
- [AI FAQ](https://spacenexus.net/kindora/faq): how Kindora AI answers are grounded and verified
- [About Kindora](https://spacenexus.net/kindora/about): company information
- [Kindora Blog](https://spacenexus.net/kindora/blog): guides for nonprofit teams

## Key Facts

- Founded: 2022
- Developer: SpaceNexus
- Products: donor CRM, grants, case management, accounting, volunteers, fundraising
- Pricing: Starter free (up to 5 members), Professional and Enterprise custom
- AI differentiation: VeritasGraph knowledge-graph grounding with source attribution; on-prem / 100% local, zero data egress

## Contact

- Website: https://spacenexus.net/kindora
- Demo: https://spacenexus.net/kindora/demo
- About: https://spacenexus.net/kindora/about
```

---