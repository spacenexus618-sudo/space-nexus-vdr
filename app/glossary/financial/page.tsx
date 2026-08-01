import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Financial Glossary — 100+ Finance & Investment Terms Defined | SpaceNexus",
    description: "Comprehensive glossary of financial terms: valuation metrics, debt and lending terminology, deal structures, accounting concepts, investment analysis, and financial regulations.",
    alternates: { canonical: "https://spacenexus.net/glossary/financial" },
    keywords: [
        "financial glossary", "finance terms", "investment banking glossary",
        "valuation terms", "accounting glossary", "debt finance terms",
        "M&A financial terms", "private equity glossary", "financial definitions",
    ],
    openGraph: {
        title: "Financial Glossary — 100+ Finance & Investment Terms Defined",
        description: "The most comprehensive free financial glossary: valuation, debt, deal structures, accounting, and investment analysis terms defined.",
        url: "https://spacenexus.net/glossary/financial",
    },
};

interface Term {
    id: string;
    term: string;
    shortDef: string;
    definition: string;
    relatedLinks?: { label: string; href: string }[];
}

interface Category {
    id: string;
    title: string;
    description: string;
    terms: Term[];
}

const categories: Category[] = [
    {
        id: "valuation-metrics",
        title: "Valuation & Financial Metrics",
        description: "Key financial metrics used to value companies, projects, and investments.",
        terms: [
            { id: "ebitda", term: "EBITDA", shortDef: "Earnings Before Interest, Taxes, Depreciation, and Amortization — a proxy for operating cash flow.", definition: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is a financial metric that measures a company's operating performance by excluding non-operating expenses and non-cash charges. It is widely used in M&A valuation as a proxy for operating cash flow. The EV/EBITDA multiple is the most common valuation metric in M&A. EBITDA is calculated as: Net Income + Interest + Taxes + Depreciation + Amortization." },
            { id: "ev-ebitda", term: "EV/EBITDA Multiple", shortDef: "Enterprise Value divided by EBITDA — the most common M&A valuation multiple.", definition: "The EV/EBITDA multiple is enterprise value divided by EBITDA. It is the most widely used valuation metric in M&A because it normalizes for differences in capital structure, tax rates, and depreciation policies across companies. A higher multiple typically indicates higher growth expectations or a premium for market position. Industry averages range from 6-12x for most sectors, with technology companies trading at 15-30x+." },
            { id: "enterprise-value", term: "Enterprise Value (EV)", shortDef: "The total value of a company including equity, debt, and cash.", definition: "Enterprise Value (EV) is the total value of a company, calculated as: Market Capitalization + Total Debt + Preferred Equity + Minority Interest - Cash & Cash Equivalents. EV represents the theoretical takeover price and is the numerator in valuation multiples like EV/EBITDA and EV/Revenue. Unlike market cap, EV accounts for a company's debt burden and cash cushion." },
            { id: "market-cap", term: "Market Capitalization", shortDef: "The total value of a company's outstanding shares of stock.", definition: "Market Capitalization (market cap) is the total value of a company's outstanding shares, calculated as: Share Price × Number of Outstanding Shares. Market cap classifies companies as small-cap (<$2B), mid-cap ($2-10B), large-cap ($10-200B), and mega-cap (>$200B). Market cap is a component of enterprise value but does not account for debt or cash." },
            { id: "price-to-earnings", term: "Price-to-Earnings (P/E) Ratio", shortDef: "Share price divided by earnings per share — the most common public equity valuation metric.", definition: "The Price-to-Earnings (P/E) ratio is share price divided by earnings per share (EPS). It measures how much investors are willing to pay per dollar of earnings. A high P/E suggests high growth expectations; a low P/E may indicate undervaluation or low growth. Forward P/E uses projected earnings, while trailing P/E uses historical earnings." },
            { id: "revenue-multiple", term: "Revenue Multiple (EV/Revenue)", shortDef: "Enterprise Value divided by revenue — used for high-growth or unprofitable companies.", definition: "The EV/Revenue multiple is enterprise value divided by total revenue. It is commonly used for high-growth companies that are not yet profitable (e.g., SaaS startups) where EBITDA multiples are not meaningful. Revenue multiples vary widely by industry: SaaS companies typically trade at 5-15x, while mature industrials trade at 1-3x." },
            { id: "net-present-value", term: "Net Present Value (NPV)", shortDef: "The present value of future cash flows minus the initial investment.", definition: "Net Present Value (NPV) is the difference between the present value of future cash inflows and the present value of the initial investment, discounted at the required rate of return. A positive NPV indicates the investment should generate value above the cost of capital. NPV is the gold standard for capital budgeting and investment decision-making." },
            { id: "internal-rate-of-return", term: "Internal Rate of Return (IRR)", shortDef: "The discount rate that makes the NPV of all cash flows equal to zero.", definition: "The Internal Rate of Return (IRR) is the discount rate at which the net present value of all cash flows (both positive and negative) equals zero. IRR is used to evaluate the attractiveness of an investment: if IRR exceeds the cost of capital, the investment is considered value-accretive. IRR is the primary return metric for private equity and venture capital investments." },
            { id: "weighted-average-cost-capital", term: "Weighted Average Cost of Capital (WACC)", shortDef: "The blended cost of a company's debt and equity financing.", definition: "WACC is the blended cost of a company's capital structure, calculated as: (E/V × Ke) + (D/V × Kd × (1-T)), where E is equity value, D is debt value, V is total value, Ke is cost of equity, Kd is cost of debt, and T is tax rate. WACC is used as the discount rate for DCF analysis and represents the minimum return a company must earn on its investments." },
            { id: "discounted-cash-flow", term: "Discounted Cash Flow (DCF)", shortDef: "A valuation method that estimates value based on projected future cash flows discounted to present.", definition: "Discounted Cash Flow (DCF) analysis estimates the value of an investment based on its expected future cash flows, discounted to present value using the WACC. A DCF model typically projects 5-10 years of cash flows plus a terminal value representing all cash flows beyond the projection period. DCF is considered the most theoretically sound valuation method but is highly sensitive to assumptions." },
            { id: "terminal-value", term: "Terminal Value (TV)", shortDef: "The value of all cash flows beyond the explicit projection period in a DCF model.", definition: "Terminal Value (TV) represents the value of a company's cash flows beyond the explicit projection period in a DCF analysis. It is typically calculated using either the Gordon Growth Model (perpetuity method) or the Exit Multiple method. Terminal value often accounts for 60-80% of total enterprise value in a DCF, making it the most sensitive input." },
            { id: "liquidation-value", term: "Liquidation Value", shortDef: "The net value of a company's assets if sold piecemeal, minus liabilities.", definition: "Liquidation value is the net cash realized if a company's assets were sold individually and its liabilities paid off. It is typically the floor valuation for a distressed company and is used in Chapter 7 bankruptcy proceedings. Liquidation value is almost always lower than book value because assets are sold under time pressure." },
        ],
    },
    {
        id: "debt-lending",
        title: "Debt & Lending",
        description: "Terms related to debt financing, lending structures, and credit analysis.",
        terms: [
            { id: "senior-debt", term: "Senior Debt", shortDef: "Debt with the highest repayment priority in a company's capital structure.", definition: "Senior debt is debt that has the highest priority for repayment in the event of default or bankruptcy. It is secured by collateral and has first claim on a company's assets. Senior debt typically carries the lowest interest rate in the capital structure because of its lower risk. Common forms include senior secured loans, revolvers, and term loans." },
            { id: "subordinated-debt", term: "Subordinated Debt", shortDef: "Debt that ranks below senior debt in repayment priority.", definition: "Subordinated debt (or junior debt) ranks below senior debt in repayment priority during default or bankruptcy. Subordinated debt holders are paid only after senior debt holders are fully satisfied. Because of the higher risk, subordinated debt carries higher interest rates. Mezzanine debt is a common form of subordinated debt." },
            { id: "mezzanine-debt", term: "Mezzanine Debt", shortDef: "A hybrid of debt and equity financing, typically subordinated with warrants.", definition: "Mezzanine debt is a hybrid financing instrument that combines debt features (regular interest payments) with equity features (warrants or conversion rights). It sits between senior debt and equity in the capital structure. Mezzanine debt is commonly used in leveraged buyouts and growth financings where senior debt capacity is exhausted. It typically carries interest rates of 12-18%." },
            { id: "term-loan", term: "Term Loan", shortDef: "A bank loan with a fixed repayment schedule and maturity date.", definition: "A term loan is a bank loan with a fixed repayment schedule (amortizing or bullet) and a defined maturity date, typically 3-7 years. Term loans are used for capex, acquisitions, and working capital. They can be senior secured or unsecured, with floating or fixed interest rates. Term Loan A (amortizing) and Term Loan B (institutional with minimal amortization) are common structures." },
            { id: "revolver", term: "Revolving Credit Facility (Revolver)", shortDef: "A flexible credit line that can be drawn, repaid, and redrawn as needed.", definition: "A revolving credit facility (revolver) is a flexible line of credit that allows a borrower to draw down, repay, and re-borrow funds up to a specified limit. Revolvers are typically used for working capital needs and have a commitment fee on undrawn amounts. They are usually senior secured and have a tenor of 3-5 years." },
            { id: "loan-to-value", term: "Loan-to-Value (LTV) Ratio", shortDef: "The ratio of a loan amount to the appraised value of the collateral.", definition: "Loan-to-Value (LTV) ratio is the loan amount divided by the appraised value of the underlying collateral. It is a key risk metric in secured lending: higher LTV means less equity cushion and higher risk for the lender. Maximum LTVs vary by asset class: residential mortgages typically allow 80-97%, commercial real estate 65-75%, and CLOs 60-85%." },
            { id: "debt-service-coverage", term: "Debt Service Coverage Ratio (DSCR)", shortDef: "Net operating income divided by total debt service payments.", definition: "The Debt Service Coverage Ratio (DSCR) measures a company's ability to service its debt, calculated as: Net Operating Income / Total Debt Service (principal + interest). A DSCR above 1.0x indicates positive cash flow after debt payments. Lenders typically require minimum DSCR of 1.2-1.5x for commercial loans and 1.0-1.25x for corporate loans." },
            { id: "total-leverage", term: "Total Leverage Ratio", shortDef: "Total debt divided by EBITDA — a measure of a company's debt burden.", definition: "The Total Leverage Ratio is Total Debt divided by EBITDA. It measures how many years of EBITDA it would take to repay all outstanding debt. A ratio of 4-5x is typical for leveraged buyouts, while investment-grade companies typically maintain below 2-3x. The ratio is used by lenders and rating agencies to assess credit risk." },
            { id: "covenant", term: "Covenant", shortDef: "A contractual condition in a debt agreement that the borrower must maintain.", definition: "A covenant is a contractual condition in a loan or bond agreement that the borrower must maintain. Affirmative covenants require the borrower to take certain actions (e.g., maintain insurance). Negative covenants restrict certain actions (e.g., limit additional debt). Financial covenants require maintaining specified financial ratios (e.g., minimum DSCR, maximum leverage). Covenant breach can trigger default, acceleration, or renegotiation." },
            { id: "collateralized-loan-obligation", term: "Collateralized Loan Obligation (CLO)", shortDef: "A structured finance product backed by a pool of leveraged loans.", definition: "A Collateralized Loan Obligation (CLO) is a structured finance product that pools a diversified portfolio of leveraged loans and issues tranches of securities with different risk-return profiles. Senior tranches have first claim on cash flows and carry investment-grade ratings, while equity tranches absorb first losses and offer the highest returns. CLOs are major investors in the leveraged loan market." },
            { id: "non-performing-loan", term: "Non-Performing Loan (NPL)", shortDef: "A loan that is 90+ days past due or in default.", definition: "A Non-Performing Loan (NPL) is a loan that is 90+ days past due or in default, meaning the borrower has not made scheduled payments. NPLs are typically sold at a discount to their face value to specialized investors (distressed debt funds) who pursue recovery through foreclosure, restructuring, or workout. NPL valuation depends on collateral quality, legal standing, and recovery prospects." },
            { id: "payment-in-kind", term: "Payment-in-Kind (PIK)", shortDef: "Interest that is paid in additional debt rather than cash.", definition: "Payment-in-Kind (PIK) interest is interest that is paid in the form of additional debt securities rather than cash. PIK notes allow the issuer to conserve cash by deferring interest payments. PIK is common in leveraged buyouts and distressed debt restructurings. PIK interest increases the outstanding principal and is typically redeemed at maturity." },
        ],
    },
    {
        id: "deal-structures",
        title: "Deal Structures & Transaction Terms",
        description: "Terms related to M&A transaction structures, purchase price mechanisms, and deal provisions.",
        terms: [
            { id: "stock-purchase", term: "Stock Purchase", shortDef: "An acquisition where the buyer purchases the target's stock, assuming all assets and liabilities.", definition: "A stock purchase is an acquisition structure where the buyer purchases the outstanding stock of the target company, thereby acquiring all assets, liabilities, and legal obligations. Stock purchases are simpler to execute (no asset-by-asset transfer) but expose the buyer to all known and unknown liabilities. Stock purchases are more common in private company acquisitions where the sellers are shareholders." },
            { id: "asset-purchase", term: "Asset Purchase", shortDef: "An acquisition where the buyer purchases specific assets and assumes specific liabilities.", definition: "An asset purchase is an acquisition structure where the buyer purchases specific assets and assumes specific liabilities of the target, rather than acquiring the entity itself. Asset purchases allow the buyer to pick which assets to acquire and which liabilities to assume (i.e., avoid unknown liabilities). Asset purchases are more common in distressed or carve-out transactions." },
            { id: "merger", term: "Merger", shortDef: "The legal combination of two companies into a single entity.", definition: "A merger is the legal combination of two companies into a single surviving entity. In a statutory merger, one company survives and the other disappears. In a triangular merger, a subsidiary of the acquirer merges with the target. Mergers require shareholder approval and may have different tax treatment than stock or asset purchases." },
            { id: "earnout", term: "Earnout", shortDef: "A contingent payment structure where additional consideration is paid based on future performance.", definition: "An earnout is a contingent payment mechanism in an acquisition where the seller receives additional consideration if the target achieves specified performance milestones after closing (e.g., revenue targets, EBITDA targets, product launch milestones). Earnouts bridge valuation gaps between buyer and seller and align incentives post-close. They are common in technology, healthcare, and services acquisitions." },
            { id: "holdback", term: "Holdback / Escrow", shortDef: "A portion of the purchase price held back to cover indemnification claims.", definition: "A holdback (or escrow) is a portion of the purchase price (typically 5-15%) that is held back from the seller for 12-24 months after closing to cover indemnification claims for breaches of representations and warranties. The holdback is held in a third-party escrow account and released to the seller (net of any claims) when the holdback period expires." },
            { id: "indemnification", term: "Indemnification", shortDef: "The seller's obligation to compensate the buyer for losses from breaches of representations.", definition: "Indemnification is the legal obligation of the seller to compensate the buyer for losses resulting from breaches of the seller's representations and warranties in the purchase agreement. Indemnification provisions specify: survival period (how long reps survive post-close), basket (minimum claim threshold), cap (maximum liability), and exclusive remedy provisions." },
            { id: "representation-warranty", term: "Representations and Warranties (Reps & Warranties)", shortDef: "Factual statements made by the seller about the target company in the purchase agreement.", definition: "Representations and warranties (reps & warranties) are factual statements made by the seller about the target company in the purchase agreement. They cover all material aspects of the business: corporate organization, financial statements, compliance, contracts, IP, litigation, tax, employment, and environmental. Breach of reps & warranties gives the buyer a claim for indemnification or, in some cases, the right to walk away." },
            { id: "material-adverse-change", term: "Material Adverse Change (MAC) Clause", shortDef: "A clause allowing a buyer to walk away if a significant negative event occurs before closing.", definition: "A Material Adverse Change (MAC) clause (also called Material Adverse Effect or MAE clause) allows the buyer to terminate the transaction without penalty if a significant negative event occurs between signing and closing that materially impacts the target's business, financial condition, or prospects. MAC clauses are heavily negotiated and rarely invoked successfully." },
            { id: "reverse-termination-fee", term: "Reverse Termination Fee", shortDef: "A fee paid by the buyer to the seller if the buyer fails to close.", definition: "A reverse termination fee is a fee paid by the buyer to the seller if the buyer fails to close the transaction due to a specified condition (e.g., failure to obtain financing, regulatory denial, or buyer's breach). The fee typically ranges from 3-7% of enterprise value. It compensates the seller for deal execution risk and the opportunity cost of taking the company off the market." },
            { id: "locked-box", term: "Locked Box", shortDef: "A pricing mechanism where the purchase price is fixed at signing and the seller keeps all value to closing.", definition: "A locked box pricing mechanism sets the purchase price based on a reference balance sheet date (typically 2-6 months before signing), and the seller keeps all cash generated between the reference date and closing. The buyer does not get a dollar-for-dollar adjustment for cash leakage. Locked boxes are more common in European M&A and speed up execution." },
            { id: "completion-accounts", term: "Completion Accounts", shortDef: "A closing adjustment where the purchase price is adjusted based on actual closing balance sheet.", definition: "Completion accounts (or closing accounts) is a pricing mechanism where the purchase price is adjusted after closing based on the actual balance sheet at closing. The adjustment typically covers working capital and net debt. Completion accounts are the most common pricing mechanism in US M&A and provide a dollar-for-dollar true-up." },
        ],
    },
    {
        id: "accounting-reporting",
        title: "Accounting & Financial Reporting",
        description: "Key accounting concepts, financial statement terms, and reporting standards.",
        terms: [
            { id: "gaap", term: "GAAP (Generally Accepted Accounting Principles)", shortDef: "The standard framework of accounting guidelines for financial reporting in the US.", definition: "GAAP (Generally Accepted Accounting Principles) is the standard framework of accounting guidelines, rules, and procedures used for financial reporting in the United States. GAAP is established by the Financial Accounting Standards Board (FASB). Public companies must file GAAP-compliant financial statements with the SEC." },
            { id: "ifrs", term: "IFRS (International Financial Reporting Standards)", shortDef: "Global accounting standards used in over 140 countries outside the US.", definition: "IFRS (International Financial Reporting Standards) are global accounting standards issued by the International Accounting Standards Board (IASB). Over 140 countries require or permit IFRS reporting. IFRS is more principles-based than US GAAP and differs on key areas including revenue recognition, lease accounting, and goodwill impairment." },
            { id: "income-statement", term: "Income Statement (P&L)", shortDef: "A financial statement showing revenue, expenses, and profit over a period of time.", definition: "The income statement (or profit and loss statement, P&L) reports a company's financial performance over a specific period, showing revenue, cost of goods sold, operating expenses, interest, taxes, and net income or loss. The income statement follows the formula: Revenue - Expenses = Net Income. It is one of the three primary financial statements." },
            { id: "balance-sheet", term: "Balance Sheet", shortDef: "A snapshot of a company's assets, liabilities, and equity at a point in time.", definition: "The balance sheet is a financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time. The balance sheet follows the accounting equation: Assets = Liabilities + Equity. It provides a snapshot of financial health: liquidity (current assets vs current liabilities), solvency (debt vs equity), and asset composition." },
            { id: "cash-flow-statement", term: "Cash Flow Statement", shortDef: "A financial statement showing cash generated and used in operations, investing, and financing.", definition: "The cash flow statement reports the cash generated and used during a period, categorized into three activities: operating (core business cash flows), investing (capital expenditures, acquisitions, asset sales), and financing (debt, equity, dividends). The cash flow statement reconciles net income to the change in cash balance." },
            { id: "free-cash-flow", term: "Free Cash Flow (FCF)", shortDef: "Cash from operations minus capital expenditures — cash available to shareholders and debt holders.", definition: "Free Cash Flow (FCF) is cash generated from operations minus capital expenditures (CapEx). FCF represents the cash available to distribute to shareholders (dividends, buybacks) and debt holders (debt repayment). FCF is a key metric for valuation, credit analysis, and assessing a company's financial flexibility." },
            { id: "working-capital", term: "Working Capital", shortDef: "Current assets minus current liabilities — a measure of short-term liquidity.", definition: "Working capital is current assets minus current liabilities, measuring a company's ability to meet its short-term obligations. Positive working capital indicates the company can fund its day-to-day operations. Working capital management (optimizing receivables, payables, and inventory) is critical for cash flow. M&A purchase agreements typically include a working capital adjustment." },
            { id: "goodwill", term: "Goodwill", shortDef: "The premium paid over the fair value of net identifiable assets in an acquisition.", definition: "Goodwill is the excess of the purchase price over the fair value of net identifiable assets acquired in a business combination. Goodwill represents intangible value: brand, customer relationships, workforce, and synergies. Under GAAP, goodwill is not amortized but is tested annually for impairment. Goodwill impairment occurs when the carrying value exceeds fair value." },
            { id: "depreciation-amortization", term: "Depreciation & Amortization (D&A)", shortDef: "The systematic allocation of the cost of tangible and intangible assets over their useful lives.", definition: "Depreciation is the systematic allocation of the cost of tangible assets (PP&E, equipment, vehicles) over their estimated useful lives. Amortization is the same concept for intangible assets (patents, software, customer lists). D&A are non-cash expenses that reduce reported earnings but do not affect cash flow. They are added back in EBITDA calculations." },
            { id: "accrual-accounting", term: "Accrual Accounting", shortDef: "An accounting method that records revenues and expenses when earned or incurred, not when cash changes hands.", definition: "Accrual accounting records revenue when earned (regardless of when cash is received) and expenses when incurred (regardless of when cash is paid). Accrual accounting provides a more accurate picture of a company's performance than cash accounting. GAAP and IFRS both require accrual accounting for public companies." },
            { id: "deferred-revenue", term: "Deferred Revenue", shortDef: "Cash received in advance for goods or services not yet delivered — a liability on the balance sheet.", definition: "Deferred revenue (or unearned revenue) is cash received from customers for goods or services that have not yet been delivered or performed. It is recorded as a liability on the balance sheet because the company still has an obligation to deliver. As the company delivers goods or services, deferred revenue is recognized as earned revenue on the income statement. It is common in SaaS and subscription businesses." },
        ],
    },
    {
        id: "investment-analysis",
        title: "Investment Analysis & Private Equity",
        description: "Terms used in investment analysis, portfolio management, and private equity investing.",
        terms: [
            { id: "moic", term: "MOIC (Multiple on Invested Capital)", shortDef: "Total value returned divided by total capital invested — a simple return metric.", definition: "MOIC (Multiple on Invested Capital) is the total value returned to investors divided by the total capital invested. For example, a 2.5x MOIC means investors received $2.50 for every $1.00 invested. MOIC is a simple, time-unadjusted return metric commonly used in private equity and venture capital alongside IRR." },
            { id: "irr", term: "IRR (Internal Rate of Return)", shortDef: "The annualized return on an investment, accounting for the timing of cash flows.", definition: "IRR (Internal Rate of Return) is the annualized compounded return on an investment, accounting for the timing and magnitude of all cash flows. IRR is the primary return metric for private equity and venture capital. A 20%+ IRR is considered strong for buyout funds, while venture capital funds target 25-30%+ to compensate for higher failure rates." },
            { id: "tvpi", term: "TVPI (Total Value to Paid-In Capital)", shortDef: "Total value (realized + unrealized) divided by total capital contributed.", definition: "TVPI (Total Value to Paid-In Capital) is the total value returned to investors (distributions) plus the current value of remaining investments (NAV), divided by total capital contributed. TVPI above 1.0x indicates the fund is generating positive returns. TVPI = DPI (Distributed to Paid-In) + RVPI (Residual Value to Paid-In)." },
            { id: "dpi", term: "DPI (Distributed to Paid-In Capital)", shortDef: "Cumulative distributions divided by total capital contributed — realized returns.", definition: "DPI (Distributed to Paid-In Capital) is the cumulative cash distributions paid to investors divided by total capital contributed. DPI measures realized returns (cash returned vs cash invested). A DPI of 1.0x means investors have received back their entire investment in cash. DPI is the most concrete measure of fund performance." },
            { id: "rvpi", term: "RVPI (Residual Value to Paid-In Capital)", shortDef: "Current value of remaining investments divided by total capital contributed — unrealized returns.", definition: "RVPI (Residual Value to Paid-In Capital) is the current value of remaining (unrealized) investments divided by total capital contributed. RVPI represents the unrealized portion of total fund value. High RVPI relative to TVPI means most of the fund's value is still unrealized. RVPI relies on portfolio company valuations which may be subjective." },
            { id: "capital-call", term: "Capital Call (Drawdown)", shortDef: "A request from a fund manager to limited partners for their committed capital.", definition: "A capital call (or drawdown) is a formal request from a private equity or venture capital fund manager to its limited partners (LPs) to contribute a portion of their committed capital. Capital calls are made as the fund identifies investment opportunities. LPs must fund capital calls within a specified notice period (typically 10-15 business days) or face penalties." },
            { id: "carried-interest", term: "Carried Interest (Carry)", shortDef: "The fund manager's share of investment profits, typically 20% above a hurdle rate.", definition: "Carried interest (or carry) is the share of investment profits that the fund manager (general partner) receives as compensation, typically 20% of profits above a preferred return (hurdle rate) of 7-8%. Carry aligns the GP's incentives with LP returns. Carry is structured as a profits interest and has favorable tax treatment in many jurisdictions." },
            { id: "hurdle-rate", term: "Hurdle Rate / Preferred Return", shortDef: "The minimum return LPs must receive before the GP receives carried interest.", definition: "The hurdle rate (or preferred return) is the minimum annual return that limited partners must receive before the general partner can participate in carried interest. Typical hurdle rates are 7-8% in private equity. A European waterfall structure gives LPs 100% of profits until they achieve the hurdle rate before carry is paid. An American waterfall is more LP-friendly." },
            { id: "waterfall", term: "Distribution Waterfall", shortDef: "The contractual order in which investment returns are distributed to LPs and the GP.", definition: "The distribution waterfall is the contractual order in which investment proceeds are distributed between limited partners and the general partner. The typical private equity waterfall: (1) 100% to LPs until return of capital, (2) 100% to LPs until hurdle rate is achieved, (3) GP catch-up (typically 80/20 above hurdle), and (4) thereafter 80% LP / 20% GP. Waterfall structures vary by fund." },
            { id: "limited-partner", term: "Limited Partner (LP)", shortDef: "An investor in a private equity or venture capital fund with limited liability.", definition: "A Limited Partner (LP) is an investor in a private equity, venture capital, or hedge fund who contributes capital but has limited liability and no role in day-to-day fund management. LPs include pension funds, endowments, foundations, insurance companies, family offices, and high-net-worth individuals. LPs receive periodic reporting and have voting rights on major fund decisions." },
            { id: "general-partner", term: "General Partner (GP)", shortDef: "The fund manager responsible for making investment decisions and managing the portfolio.", definition: "The General Partner (GP) is the fund manager responsible for making investment decisions, managing the portfolio, and running day-to-day fund operations. The GP commits 1-5% of fund capital (GP commitment), receives management fees (typically 2% of committed capital), and earns carried interest on profits. The GP has unlimited liability for fund obligations." },
            { id: "secondary-sale", term: "Secondary Sale", shortDef: "The sale of an existing LP's fund interest to another investor in the secondary market.", definition: "A secondary sale is the sale of an existing limited partner's interest in a private equity or venture capital fund to another investor in the secondary market. Secondary transactions provide liquidity to LPs who need to exit before the fund's natural termination (typically 10-12 years). Secondaries typically trade at a discount to NAV (net asset value) reflecting the illiquidity premium." },
        ],
    },
    {
        id: "financial-regulations",
        title: "Financial Regulations & Compliance",
        description: "Key regulatory terms and compliance concepts in finance and banking.",
        terms: [
            { id: "sec", term: "SEC (Securities and Exchange Commission)", shortDef: "The US federal agency responsible for enforcing securities laws and regulating financial markets.", definition: "The Securities and Exchange Commission (SEC) is the US federal agency responsible for enforcing federal securities laws, proposing and enforcing securities regulations, and regulating financial markets, exchanges, and investment professionals. The SEC oversees public company reporting (10-K, 10-Q, 8-K), registered offerings, investment advisers, broker-dealers, and enforcement actions." },
            { id: "regulation-d", term: "Regulation D (Reg D)", shortDef: "An SEC regulation allowing companies to raise capital through private placements without full SEC registration.", definition: "Regulation D (Reg D) is an SEC regulation that exempts certain private securities offerings from the full registration requirements of the Securities Act of 1933. Reg D offerings (Rule 506b and 506c) allow companies to raise unlimited capital from accredited investors without a public prospectus. Reg D is the most common exemption for venture capital, private equity, and hedge fund offerings." },
            { id: "accredited-investor", term: "Accredited Investor", shortDef: "An individual or entity meeting SEC-defined wealth or professional criteria to invest in private offerings.", definition: "An accredited investor is an individual or entity that meets SEC-defined criteria for participating in private securities offerings that are not registered with the SEC. Individual criteria: net worth >$1M (excluding primary residence) or annual income >$200K (>$300K with spouse) for the last two years. Entity criteria: >$5M in assets. Accredited investor status is required for most private fund investments." },
            { id: "basel-iii", term: "Basel III", shortDef: "International regulatory framework for bank capital adequacy, stress testing, and liquidity.", definition: "Basel III is a global regulatory framework developed by the Basel Committee on Banking Supervision that sets standards for bank capital adequacy, stress testing, and liquidity risk. Key requirements: minimum Common Equity Tier 1 (CET1) ratio of 4.5%, capital conservation buffer of 2.5%, countercyclical buffer of 0-2.5%, and liquidity coverage ratio (LCR) and net stable funding ratio (NSFR) requirements." },
            { id: "dodd-frank", term: "Dodd-Frank Wall Street Reform and Consumer Protection Act", shortDef: "US federal law enacted in 2010 that overhauled financial regulation after the 2008 crisis.", definition: "The Dodd-Frank Act, enacted in 2010, is the most comprehensive US financial regulatory reform since the Great Depression. Key provisions: Volcker Rule (limits bank proprietary trading), Consumer Financial Protection Bureau (CFPB), enhanced derivatives regulation, enhanced SEC and CFTC authority, systemic risk oversight (FSOC), and the Orderly Liquidation Authority for failing systemically important institutions." },
            { id: "volcker-rule", term: "Volcker Rule", shortDef: "A regulation that restricts US banks from making certain proprietary investments and trades.", definition: "The Volcker Rule, part of the Dodd-Frank Act, restricts US banks from engaging in proprietary trading (trading for their own profit rather than for customers) and from investing in or sponsoring hedge funds and private equity funds. The rule aims to reduce conflicts of interest and limit banks' risk-taking. Banks must maintain a compliance program to demonstrate Volcker Rule adherence." },
            { id: "kyc-aml", term: "KYC / AML (Know Your Customer / Anti-Money Laundering)", shortDef: "Regulatory requirements for financial institutions to verify customer identities and prevent money laundering.", definition: "KYC (Know Your Customer) and AML (Anti-Money Laundering) are regulatory requirements that financial institutions must verify the identity of their customers, assess their risk profile, and monitor transactions for suspicious activity. KYC requires collecting and verifying customer identification documents. AML requires transaction monitoring, suspicious activity reporting (SARs), and maintaining compliance programs." },
            { id: "sarbanes-oxley", term: "Sarbanes-Oxley Act (SOX)", shortDef: "US federal law enacted in 2002 to protect investors by improving corporate financial disclosures.", definition: "The Sarbanes-Oxley Act (SOX), enacted in 2002 after the Enron and WorldCom scandals, set new requirements for corporate governance, financial disclosure, and auditor independence. Key provisions: CEO/CFO certification of financial statements, Section 404 (internal controls assessment), enhanced criminal penalties for securities fraud, and the creation of the Public Company Accounting Oversight Board (PCAOB)." },
            { id: "sec-rule-17a4", term: "SEC Rule 17a-4", shortDef: "SEC rule requiring broker-dealers to preserve certain records in a non-rewriteable, non-erasable format for 6+ years.", definition: "SEC Rule 17a-4 requires broker-dealers to preserve certain electronic records in a non-rewriteable, non-erasable format (WORM — Write Once, Read Many) for a minimum of 6 years, with the first 2 years in an easily accessible place. The rule is relevant to VDRs used in financial transactions, as the data room must maintain audit trails and document integrity for regulatory compliance." },
            { id: "fdic", term: "FDIC (Federal Deposit Insurance Corporation)", shortDef: "US federal agency that insures bank deposits and supervises financial institutions.", definition: "The Federal Deposit Insurance Corporation (FDIC) is a US federal agency that insures deposits at banks and thrifts up to $250,000 per depositor per institution, supervises financial institutions for safety and soundness, and manages receiverships for failed banks. The FDIC was created in 1933 in response to the bank runs of the Great Depression." },
            { id: "fed", term: "Federal Reserve (The Fed)", shortDef: "The central bank of the United States responsible for monetary policy and financial system stability.", definition: "The Federal Reserve (the Fed) is the central bank of the United States, established in 1913. The Fed has three primary functions: (1) conducting monetary policy to promote maximum employment and stable prices, (2) supervising and regulating banks to ensure financial system safety, and (3) maintaining financial system stability. The Fed's policy decisions on interest rates (federal funds rate) and quantitative easing significantly impact financial markets." },
        ],
    },
];

const allTerms = categories.flatMap(c => c.terms);

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Financial Glossary — 100+ Terms Defined",
    description: "Comprehensive glossary of financial terms: valuation metrics, debt and lending, deal structures, accounting, investment analysis, and financial regulations.",
    numberOfItems: allTerms.length,
    itemListElement: allTerms.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.term,
        description: t.shortDef,
        url: `https://spacenexus.net/glossary/financial#${t.id}`,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://spacenexus.net/glossary" },
        { "@type": "ListItem", position: 3, name: "Financial Glossary", item: "https://spacenexus.net/glossary/financial" },
    ],
};

export default function FinancialGlossaryPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="fin-glossary-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="fin-glossary-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/glossary" className="hover:text-[#2563eb] transition-colors">Glossary</Link>
                        <span>›</span>
                        <span className="text-gray-900">Financial Glossary</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Reference</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Financial Glossary</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mb-8">{allTerms.length}+ financial terms defined across {categories.length} categories. Covering valuation metrics, debt and lending, deal structures, accounting, investment analysis, and financial regulations.</p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                            <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                                {c.title}
                                <span className="text-xs text-gray-600">({c.terms.length})</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {categories.map(category => (
                        <div key={category.id} id={category.id} className="scroll-mt-24">
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                            <div className="space-y-3">
                                {category.terms.map(term => (
                                    <details key={term.id} id={term.id} className="group bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all scroll-mt-24">
                                        <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-base font-semibold text-gray-900 leading-snug">{term.term}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{term.shortDef}</p>
                                            </div>
                                            <svg className="shrink-0 w-5 h-5 text-[#2563eb] mt-1 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="px-5 pb-5 -mt-2 text-sm text-gray-600 leading-relaxed whitespace-pre-line">{term.definition}</div>
                                        {term.relatedLinks && term.relatedLinks.length > 0 && (
                                            <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Related</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {term.relatedLinks.map((l, i) => (
                                                        <Link key={i} href={l.href} className="text-sm text-[#2563eb] hover:underline">{l.label} →</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/glossary" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Glossary</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR & M&A Glossary →</h3>
                            <p className="text-xs text-gray-600 mt-2">100+ VDR and M&A terms defined.</p>
                        </Link>
                        <Link href="/resources/npl-guide" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">NPL Due Diligence Guide →</h3>
                            <p className="text-xs text-gray-600 mt-2">Complete NPL portfolio analysis playbook.</p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Due diligence checklists →</h3>
                            <p className="text-xs text-gray-600 mt-2">M&A and Series A checklists with 200+ items.</p>
                        </Link>
                    </div>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
