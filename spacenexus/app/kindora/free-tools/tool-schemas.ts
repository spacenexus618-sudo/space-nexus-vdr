type Faq = { question: string; answer: string };

function webApp(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url,
    description,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  };
}

function faqPage(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const toolSchemas = {
  "chart-of-accounts-generator": {
    webApp: webApp(
      "Nonprofit Chart of Accounts Generator",
      "Generate a free nonprofit chart of accounts tuned to your sector and budget, with Form 990-clean fund accounting and standardized account codes.",
      "https://spacenexus.net/kindora/free-tools/chart-of-accounts-generator",
    ),
    faqPage: faqPage([
      {
        question: "What does the nonprofit chart of accounts generator do?",
        answer:
          "Pick your nonprofit's sector and budget size to get a standardized chart of accounts tailored to Form 990 fund accounting.",
      },
      {
        question: "What does the generated chart of accounts include?",
        answer:
          "The generated structure includes 1000-1999 Assets & Cash, 2000-2999 Liabilities & Deferred Revenue, 3000-3999 Net Assets (Restricted / Unrestricted), 4000-4999 Revenue & Contributions, sector-specific program and revenue accounts, and 9000 Other Expense / Contra.",
      },
      {
        question: "Is the chart of accounts generator free?",
        answer:
          "Yes — the generated chart of accounts can be downloaded as a CSV file, or imported into Kindora with one click.",
      },
      {
        question: "How do I use the generated chart of accounts in Kindora?",
        answer:
          "Use the 1-Click Import into Kindora option to load the generated structure directly into Kindora.",
      },
    ]),
  },
  "donation-receipt-generator": {
    webApp: webApp(
      "Nonprofit Donation Receipt Generator",
      "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
      "https://spacenexus.net/kindora/free-tools/donation-receipt-generator",
    ),
    faqPage: faqPage([
      {
        question: "What does the donation receipt generator create?",
        answer:
          "Generate an IRS-compliant 501(c)(3) contribution receipt — including quid pro quo disclosure when donors receive something in return.",
      },
      {
        question: "When is quid pro quo disclosure required?",
        answer:
          "In exchange for a contribution, the donor received goods or services with an estimated fair market value, so the deductible amount is the donation less that value. This disclosure is provided in accordance with IRC §6115 and §170.",
      },
      {
        question: "When do I need to provide a donation receipt?",
        answer:
          "No goods or services were provided in exchange for the contribution, the receipt is provided in accordance with IRC §170(f)(8) and is valid for contributions of $250 or more. For contributions under $250, this acknowledgment may not be required but is provided for convenience.",
      },
      {
        question: "How do I save and print the receipt?",
        answer:
          "Print / Save as PDF the generated receipt. Please keep this receipt for your records and consult a tax advisor regarding deductibility.",
      },
    ]),
  },
  "donor-retention-calculator": {
    webApp: webApp(
      "Donor Retention Calculator",
      "Estimate your nonprofit donor retention rate, churn, and the impact of a retention boost on lifetime giving — free calculator.",
      "https://spacenexus.net/kindora/free-tools/donor-retention-calculator",
    ),
    faqPage: faqPage([
      {
        question: "What does the donor retention calculator show?",
        answer:
          "See how much revenue donor attrition costs you over 1, 3, and 5 years compared with a 5% retention improvement.",
      },
      {
        question: "What inputs does the donor retention calculator need?",
        answer:
          "Enter your active donors, average annual gift, donor acquisition cost, and annual retention rate.",
      },
      {
        question: "How is projected revenue calculated?",
        answer:
          "Projected revenue compares donors retained at your current retention rate with the revenue you would keep with a 5% improvement, and Lost to churn shows the gap plus donor acquisition replacement cost.",
      },
      {
        question: "How does Kindora help retain donors?",
        answer:
          "Kindora's donor CRM tracks engagement scores and automates re-engagement campaigns, so fewer donors slip away each year.",
      },
    ]),
  },
  "grant-readiness-scorecard": {
    webApp: webApp(
      "Grant Readiness Scorecard",
      "Score your nonprofit's grant readiness — 501(c)(3), SAM.gov, financial controls, and Form 990 compliance — with a free 7-question checklist.",
      "https://spacenexus.net/kindora/free-tools/grant-readiness-scorecard",
    ),
    faqPage: faqPage([
      {
        question: "What does the grant readiness scorecard measure?",
        answer:
          "Answer 7 quick questions to get your grant readiness score (0-100%) and see which compliance policies you may be missing.",
      },
      {
        question: "What readiness areas does it check?",
        answer:
          "It checks 501(c)(3) public charity registration with the IRS, active SAM.gov registration, board oversight of finances and an audit committee, internal financial controls with separated duties, a Whistleblower Policy and Conflict of Interest Policy, a searchable donation log, and on-time Form 990 filings.",
      },
      {
        question: "What does a strong grant readiness score mean?",
        answer:
          "Strong readiness — most foundations will see you as a reliable grant partner.",
      },
      {
        question: "How can I close my grant readiness gaps?",
        answer:
          "Kindora's Grant Management Hub helps you store policy documents, track compliance deadlines, and log every donation in one secure place.",
      },
    ]),
  },
  "impact-matrix-builder": {
    webApp: webApp(
      "Impact Matrix & Logic Model Builder",
      "Build a free impact matrix / logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
      "https://spacenexus.net/kindora/free-tools/impact-matrix-builder",
    ),
    faqPage: faqPage([
      {
        question: "What does the impact matrix builder do?",
        answer:
          "Map your mission into a clean logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
      },
      {
        question: "What rows does the impact matrix include?",
        answer: "The matrix includes five rows: Inputs, Activities, Outputs, Outcomes, and Impact.",
      },
      {
        question: "What mission focuses can I choose from?",
        answer:
          "Choose a mission focus such as food security & hunger relief, youth development & education, housing & homelessness, healthcare access, environmental conservation, or animal welfare.",
      },
      {
        question: "How does Kindora help track outcomes?",
        answer:
          "Automate outcome tracking and log real-time program metrics with Kindora's Impact & Outcome Reporting module.",
      },
    ]),
  },
  "indirect-cost-allocator": {
    webApp: webApp(
      "Grant Indirect Cost (MTDC) Allocator",
      "Split direct vs. indirect grant costs under the Modified Total Direct Cost methodology — see a Form 990-style functional expense breakdown, free.",
      "https://spacenexus.net/kindora/free-tools/indirect-cost-allocator",
    ),
    faqPage: faqPage([
      {
        question: "What does the indirect cost allocator do?",
        answer:
          "Split direct vs. indirect costs under the Modified Total Direct Cost methodology and see a Form 990-style functional expense breakdown.",
      },
      {
        question: "What is the MTDC base?",
        answer:
          "Total direct costs minus personnel and subawards or equipment form the Modified Total Direct Cost (MTDC) base, which the indirect cost rate is applied to.",
      },
      {
        question: "What does the Form 990 functional expense split show?",
        answer:
          "The Form 990 Functional Expense Split shows Program Services, Management & General, and Fundraising.",
      },
      {
        question: "How can I use these numbers in Kindora?",
        answer:
          "Import your allocated budget directly into Kindora to automate real-time grant tracking and financial reporting.",
      },
    ]),
  },
  "nonprofit-kpi-calculator": {
    webApp: webApp(
      "Nonprofit KPI Calculator",
      "Calculate your nonprofit KPI health — donor retention, average gift, donor lifetime value, and cost per dollar raised — free.",
      "https://spacenexus.net/kindora/free-tools/nonprofit-kpi-calculator",
    ),
    faqPage: faqPage([
      {
        question: "What does the nonprofit KPI calculator do?",
        answer:
          "Enter six numbers about your fundraising year and get the KPIs boards and grant reviewers actually ask for.",
      },
      {
        question: "Which KPIs does it compute?",
        answer:
          "It computes donor retention rate, net donor growth, average gift size, gift frequency per donor, donor lifetime value (LTV), and cost per dollar raised.",
      },
      {
        question: "How is donor lifetime value (LTV) calculated?",
        answer:
          "Donor lifetime value (LTV) is average gift multiplied by gift frequency and divided by attrition rate.",
      },
      {
        question: "How can I track these KPIs automatically?",
        answer:
          "Kindora computes retention, LTV, and cost-per-dollar for you from your live donor and fund data — no spreadsheets, board-ready every month.",
      },
    ]),
  },
  "nonprofit-software-roi-calculator": {
    webApp: webApp(
      "Nonprofit Software ROI Calculator",
      "See what manual bookkeeping, grant tracking, and donor admin cost your nonprofit — and what automation could return — free ROI calculator.",
      "https://spacenexus.net/kindora/free-tools/nonprofit-software-roi-calculator",
    ),
    faqPage: faqPage([
      {
        question: "What does the nonprofit software ROI calculator show?",
        answer:
          "See what manual bookkeeping, grant tracking, and donor admin really cost your organization — and what automation could return.",
      },
      {
        question: "What outputs does the ROI calculator produce?",
        answer:
          "It produces the annual cost of manual admin, the value recovered with automation, the net gain in Year 1 with first-year return, and the 5-year net gain — plus hours returned to mission.",
      },
      {
        question: "What time-savings assumption does it use?",
        answer:
          "Most teams report 30-50% time recovery after automating donor, grant, and fund admin.",
      },
      {
        question: "How does Kindora deliver that return?",
        answer:
          "Kindora automates donor management, grant tracking, fund accounting, and reporting — one platform instead of a stack of spreadsheets.",
      },
    ]),
  },
  "volunteer-time-value-calculator": {
    webApp: webApp(
      "Value of Volunteer Time Calculator",
      "Turn volunteer hours into dollars using Independent Sector's national hourly value — free volunteer time value calculator for nonprofits.",
      "https://spacenexus.net/kindora/free-tools/volunteer-time-value-calculator",
    ),
    faqPage: faqPage([
      {
        question: "What does the volunteer time value calculator do?",
        answer:
          "Turn volunteer hours into a dollar figure — and a printable impact statement — using Independent Sector's national hourly value.",
      },
      {
        question: "What hourly rate does it default to?",
        answer:
          "The value defaults to Independent Sector's current national value. Adjust to your state or an average wage.",
      },
      {
        question: "What does the impact statement include?",
        answer:
          "Volunteer hours are valued using Independent Sector's hourly rate and converted to full-time equivalents — 2080 hours equals one full-time staff position.",
      },
      {
        question: "How can I use the results?",
        answer:
          "Copy the impact statement into your annual report, grant proposals, and board materials. Some foundations request volunteer-hour values for in-kind matching and impact calculations.",
      },
      {
        question: "How can I track volunteer hours automatically?",
        answer:
          "Kindora's volunteer management logs every shift and keeps running totals, so this number stays current for your next board report — no manual tallies.",
      },
    ]),
  },
} as const;

export type ToolSlug = keyof typeof toolSchemas;
