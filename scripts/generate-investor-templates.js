// Generates investor data room templates. Run with: node scripts/generate-investor-templates.js
const fs = require('fs');
const path = require('path');

function csvEscape(value) {
  const s = String(value ?? '');
  if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function row(...cells) {
  return cells.map(csvEscape).join(',');
}

function makeCsv(headers, rows) {
  return [row(...headers), ...rows.map(r => row(...r))].join('\n') + '\n';
}

// ============================================================================
// 1. Pre-Seed Data Room Checklist
// ============================================================================
const preSeed = [
  ['01. Executive Summary', '01.1 Pitch', 'Pitch deck (8-12 slides, PDF)', 'Y', 'Primary marketing document'],
  ['01. Executive Summary', '01.1 Pitch', 'One-pager (single page summary)', 'Y', 'For quick investor review'],
  ['01. Executive Summary', '01.1 Pitch', 'Founder LinkedIn profiles', 'Y', 'Background credibility'],
  ['01. Executive Summary', '01.1 Pitch', 'Product demo video or live link', 'Y', 'Walk through the product'],
  ['01. Executive Summary', '01.2 Company', 'Company mission and vision', 'Y', 'Concise statement'],
  ['01. Executive Summary', '01.2 Company', 'What problem are you solving?', 'Y', 'Customer pain point'],
  ['01. Executive Summary', '01.2 Company', 'What is your solution?', 'Y', 'Product / approach'],

  ['02. Company & Formation', '02.1 Corporate', 'Certificate of incorporation', 'Y', 'Foundation document'],
  ['02. Company & Formation', '02.1 Corporate', 'Bylaws or operating agreement', 'Y', 'Current governance docs'],
  ['02. Company & Formation', '02.1 Corporate', 'EIN confirmation letter', 'Y', 'Tax ID verification'],
  ['02. Company & Formation', '02.1 Corporate', 'Foreign qualifications (if any)', 'N', 'For multi-state operations'],
  ['02. Company & Formation', '02.2 Cap Table', 'Cap table (current)', 'Y', 'Founders, advisors, ESOP'],
  ['02. Company & Formation', '02.2 Cap Table', 'Stock ledger', 'Y', 'All issuances to date'],
  ['02. Company & Formation', '02.2 Cap Table', 'Founder vesting schedules', 'Y', 'Vesting terms and cliffs'],
  ['02. Company & Formation', '02.2 Cap Table', '83(b) elections (filed)', 'N', 'For founder stock'],
  ['02. Company & Formation', '02.3 Funding', 'List of prior investments (if any)', 'N', 'Friends, family, FFF'],
  ['02. Company & Formation', '02.3 Funding', 'SAFE / convertible note agreements', 'N', 'For pre-seed rounds'],
  ['02. Company & Formation', '02.3 Funding', 'Form D filings (if any)', 'N', 'For private placements'],
  ['02. Company & Formation', '02.4 Equity Plan', 'Equity incentive plan (basic)', 'N', 'Stock option plan for hires'],
  ['02. Company & Formation', '02.4 Equity Plan', '409A valuation (if obtained)', 'N', 'For option strike prices'],

  ['03. Product & Technology', '03.1 Product', 'Product demo or screenshots', 'Y', 'Current product state'],
  ['03. Product & Technology', '03.1 Product', 'Product roadmap (next 6-12 months)', 'Y', 'Planned features and milestones'],
  ['03. Product & Technology', '03.1 Product', 'Key product metrics', 'Y', 'Users, engagement, retention'],
  ['03. Product & Technology', '03.1 Product', 'User testimonials (3-5)', 'N', 'Quotes from early users'],
  ['03. Product & Technology', '03.2 Tech', 'Tech stack summary', 'Y', 'Languages, frameworks, services'],
  ['03. Product & Technology', '03.2 Tech', 'Hosting and infrastructure summary', 'Y', 'Cloud providers used'],
  ['03. Product & Technology', '03.2 Tech', 'GitHub / GitLab profile (public)', 'N', 'For technical credibility'],
  ['03. Product & Technology', '03.3 IP', 'IP assignment from founders', 'Y', 'Critical for clean ownership'],
  ['03. Product & Technology', '03.3 IP', 'IP assignment from any employees', 'N', 'Standard PIIA'],
  ['03. Product & Technology', '03.3 IP', 'Open source license audit', 'N', 'For any OSS dependencies'],

  ['04. Market & Customers', '04.1 Market', 'Market size estimate (TAM, SAM, SOM)', 'Y', 'Bottom-up analysis'],
  ['04. Market & Customers', '04.1 Market', 'Target customer profile', 'Y', 'ICP and personas'],
  ['04. Market & Customers', '04.1 Market', 'Competitive landscape', 'Y', 'Key competitors'],
  ['04. Market & Customers', '04.1 Market', 'Why now? Market timing', 'Y', 'Why this opportunity'],
  ['04. Market & Customers', '04.2 Customers', 'List of early users / design partners', 'Y', 'If available'],
  ['04. Market & Customers', '04.2 Customers', 'Customer case study or testimonials', 'N', 'Validation of product-market fit'],
  ['04. Market & Customers', '04.2 Customers', 'Waitlist or pre-registration list', 'N', 'If applicable'],
  ['04. Market & Customers', '04.2 Customers', 'Letters of intent or pilot agreements', 'N', 'For B2B products'],
  ['04. Market & Customers', '04.3 Traction', 'Weekly active users / monthly active users', 'Y', 'Engagement metrics'],
  ['04. Market & Customers', '04.3 Traction', 'Conversion or activation rates', 'N', 'Funnel metrics'],
  ['04. Market & Customers', '04.3 Traction', 'Revenue (if any)', 'Y', 'Including pilots and pilots-to-paid'],

  ['05. Financials', '05.1 Burn & Runway', 'Current cash on hand', 'Y', 'Bank balance'],
  ['05. Financials', '05.1 Burn & Runway', 'Monthly burn rate', 'Y', 'Operating expenses'],
  ['05. Financials', '05.1 Burn & Runway', 'Months of runway remaining', 'Y', 'At current burn'],
  ['05. Financials', '05.2 Use of Funds', 'Use of funds breakdown', 'Y', 'How the pre-seed will be spent'],
  ['05. Financials', '05.2 Use of Funds', 'Milestone plan (next 12-18 months)', 'Y', 'What the funds will achieve'],
  ['05. Financials', '05.3 Forecasts', 'High-level projections (12-18 months)', 'N', 'Light projections at this stage'],
  ['05. Financials', '05.3 Forecasts', 'Key assumptions underlying projections', 'N', 'For investor review'],

  ['06. Team', '06.1 Founders', 'Founder bios and backgrounds', 'Y', 'Detailed backgrounds'],
  ['06. Team', '06.1 Founders', 'Why this team? Domain expertise', 'Y', 'Unique insight or experience'],
  ['06. Team', '06.1 Founders', 'Prior startup experience (if any)', 'Y', 'Previous exits or operating roles'],
  ['06. Team', '06.1 Founders', 'Relevant industry experience', 'Y', 'Why you are the right team'],
  ['06. Team', '06.2 Advisors', 'List of formal advisors', 'N', 'With equity and terms'],
  ['06. Team', '06.2 Advisors', 'Advisor agreements (sample)', 'N', 'Standard advisor agreement'],
  ['06. Team', '06.2 Advisors', 'Why each advisor is relevant', 'N', 'How they help the company'],
  ['06. Team', '06.3 Hiring', 'Key hires planned post-funding', 'N', 'Critical roles to fill'],
  ['06. Team', '06.3 Hiring', 'Compensation philosophy (high level)', 'N', 'Salary + equity approach'],

  ['07. Legal & Compliance', '07.1 Contracts', 'Standard customer agreement / ToS', 'N', 'If product is live'],
  ['07. Legal & Compliance', '07.1 Contracts', 'Material vendor contracts', 'N', 'Significant engagements'],
  ['07. Legal & Compliance', '07.2 Compliance', 'Privacy policy (public)', 'Y', 'For any user-facing product'],
  ['07. Legal & Compliance', '07.2 Compliance', 'Terms of service (public)', 'Y', 'For any user-facing product'],
  ['07. Legal & Compliance', '07.2 Compliance', 'GDPR / CCPA compliance (if applicable)', 'N', 'For any data processing'],
  ['07. Legal & Compliance', '07.3 Disputes', 'Any pending or threatened litigation', 'Y', 'Full disclosure required'],
  ['07. Legal & Compliance', '07.4 Insurance', 'Insurance policies in place', 'N', 'General liability, E&O if available'],
];

// ============================================================================
// 2. Seed Round Data Room Index
// ============================================================================
const seed = [
  ['01. Executive Summary', '01.1 Pitch', 'Pitch deck (latest version, PDF)', 'Y', 'Primary marketing deck'],
  ['01. Executive Summary', '01.1 Pitch', 'One-pager / company snapshot', 'Y', 'Quick reference summary'],
  ['01. Executive Summary', '01.1 Pitch', 'Product demo (live or recorded)', 'Y', 'Required for every investor meeting'],
  ['01. Executive Summary', '01.1 Pitch', 'Founder LinkedIn profiles and bios', 'Y', 'Background credibility'],
  ['01. Executive Summary', '01.2 Company', 'Company mission, vision, values', 'Y', 'Concise company narrative'],
  ['01. Executive Summary', '01.2 Company', 'Problem and solution summary', 'Y', 'Customer pain and product fit'],

  ['02. Company & Formation', '02.1 Corporate', 'Certificate of incorporation', 'Y', 'Foundation document'],
  ['02. Company & Formation', '02.1 Corporate', 'Bylaws or operating agreement', 'Y', 'Current governance rules'],
  ['02. Company & Formation', '02.1 Corporate', 'All charter amendments', 'Y', 'Historical governance changes'],
  ['02. Company & Formation', '02.1 Corporate', 'Foreign qualifications', 'N', 'For multi-state operations'],
  ['02. Company & Formation', '02.1 Corporate', 'Good standing certificates', 'Y', 'Active status verification'],
  ['02. Company & Formation', '02.2 Cap Table', 'Cap table (fully diluted)', 'Y', 'Most-viewed document by investors'],
  ['02. Company & Formation', '02.2 Cap Table', 'Stock ledger', 'Y', 'Detail of all issuances'],
  ['02. Company & Formation', '02.2 Cap Table', 'Founder vesting schedules', 'Y', 'Vesting terms and cliffs'],
  ['02. Company & Formation', '02.2 Cap Table', '83(b) elections', 'N', 'Founder stock elections'],
  ['02. Company & Formation', '02.2 Cap Table', 'Form D filings', 'Y', 'Private placement exemption filings'],
  ['02. Company & Formation', '02.3 Funding', 'Summary of all prior funding rounds', 'Y', 'Pre-seed, FFF, grants, etc.'],
  ['02. Company & Formation', '02.3 Funding', 'SAFE / convertible note agreements', 'Y', 'All convertible instruments'],
  ['02. Company & Formation', '02.3 Funding', 'Stock purchase agreements (preferred)', 'Y', 'Any priced rounds to date'],
  ['02. Company & Formation', '02.3 Funding', 'Side letters or amendments', 'Y', 'Modifications to base agreements'],
  ['02. Company & Formation', '02.3 Funding', 'Investor rights agreements', 'N', 'For institutional investors'],
  ['02. Company & Formation', '02.4 Equity Plan', 'Equity incentive plan document', 'Y', 'Stock option / RSU plan'],
  ['02. Company & Formation', '02.4 Equity Plan', '409A valuation (most recent)', 'Y', 'For option strike prices'],
  ['02. Company & Formation', '02.4 Equity Plan', 'Option pool size and reserve', 'Y', 'Available shares for grants'],
  ['02. Company & Formation', '02.4 Equity Plan', 'Form 3921 / 3922 filings', 'N', 'IRS informational filings'],

  ['03. Financial', '03.1 Historicals', 'Profit & Loss (current YTD)', 'Y', 'Year-to-date financials'],
  ['03. Financial', '03.1 Historicals', 'Profit & Loss (prior 1-2 years)', 'Y', 'Historical P&L'],
  ['03. Financial', '03.1 Historicals', 'Balance sheet (most recent)', 'Y', 'Current financial position'],
  ['03. Financial', '03.1 Historicals', 'Bank statements (3-6 months)', 'N', 'For cash verification'],
  ['03. Financial', '03.2 Revenue', 'Revenue / MRR (if applicable)', 'Y', 'Most recent revenue numbers'],
  ['03. Financial', '03.2 Revenue', 'Customer count and growth', 'Y', 'Total and net new customers'],
  ['03. Financial', '03.2 Revenue', 'ARPU or average contract value', 'Y', 'Revenue per customer'],
  ['03. Financial', '03.2 Revenue', 'Net revenue retention (if applicable)', 'Y', 'Logo and revenue retention'],
  ['03. Financial', '03.2 Revenue', 'Customer concentration (top 10)', 'N', 'If revenue is meaningful'],
  ['03. Financial', '03.3 Costs', 'Operating expense detail (monthly)', 'Y', 'By function and category'],
  ['03. Financial', '03.3 Costs', 'Payroll register (current)', 'Y', 'Salary, benefits, taxes by employee'],
  ['03. Financial', '03.3 Costs', 'Burn rate and runway', 'Y', 'Monthly burn and months remaining'],
  ['03. Financial', '03.4 Projections', '12-18 month projections', 'Y', 'Forward-looking plan'],
  ['03. Financial', '03.4 Projections', 'Key assumptions and drivers', 'Y', 'Underlying model assumptions'],
  ['03. Financial', '03.4 Projections', 'Hiring plan (next 12 months)', 'Y', 'Roles, timing, comp'],
  ['03. Financial', '03.4 Projections', 'Use of funds breakdown', 'Y', 'How the seed will be deployed'],
  ['03. Financial', '03.5 Tax', 'Tax returns (last 2 years)', 'Y', 'Filed federal and state returns'],
  ['03. Financial', '03.5 Tax', 'Sales tax compliance', 'N', 'For revenue-generating businesses'],

  ['04. Product & Technology', '04.1 Product', 'Product demo (live or recorded)', 'Y', 'Required walkthrough'],
  ['04. Product & Technology', '04.1 Product', 'Product roadmap (12 months)', 'Y', 'Planned features and timing'],
  ['04. Product & Technology', '04.1 Product', 'Product metrics dashboard', 'Y', 'Usage, engagement, retention'],
  ['04. Product & Technology', '04.1 Product', 'Customer feedback summary', 'N', 'Themes from customer interviews'],
  ['04. Product & Technology', '04.2 Tech', 'Technical architecture overview', 'Y', 'High-level system design'],
  ['04. Product & Technology', '04.2 Tech', 'Infrastructure and hosting', 'Y', 'Cloud providers and regions'],
  ['04. Product & Technology', '04.2 Tech', 'Tech stack', 'Y', 'Languages, frameworks, services'],
  ['04. Product & Technology', '04.2 Tech', 'Code repository (read-only access)', 'N', 'For technical diligence'],
  ['04. Product & Technology', '04.3 IP', 'IP assignments (founders, employees)', 'Y', 'Critical for clean IP ownership'],
  ['04. Product & Technology', '04.3 IP', 'Patent applications / grants', 'N', 'If applicable'],
  ['04. Product & Technology', '04.3 IP', 'Trademark applications / registrations', 'N', 'If applicable'],
  ['04. Product & Technology', '04.3 IP', 'Open source license audit', 'N', 'Software bill of materials'],
  ['04. Product & Technology', '04.4 Security', 'Information security policy (basic)', 'N', 'For enterprise-ready companies'],
  ['04. Product & Technology', '04.4 Security', 'Privacy policy and data handling', 'Y', 'GDPR/CCPA compliance'],

  ['05. Customers & Market', '05.1 Customers', 'Customer list (with consent)', 'Y', 'Anonymized if contractually required'],
  ['05. Customers & Market', '05.1 Customers', 'Customer case studies (2-3)', 'Y', 'Detailed customer success stories'],
  ['05. Customers & Market', '05.1 Customers', 'Customer reference list (5-8)', 'Y', 'Pre-cleared reference contacts'],
  ['05. Customers & Market', '05.1 Customers', 'NPS or satisfaction scores', 'N', 'Customer satisfaction metrics'],
  ['05. Customers & Market', '05.1 Customers', 'Top customer revenue (anonymized)', 'N', 'If revenue is meaningful'],
  ['05. Customers & Market', '05.2 Sales', 'Sales pipeline and forecast', 'Y', 'Active opportunities by stage'],
  ['05. Customers & Market', '05.2 Sales', 'Sales process documentation', 'N', 'GTM playbook and ICP'],
  ['05. Customers & Market', '05.2 Sales', 'Win/loss analysis', 'N', 'Recent sales outcomes'],
  ['05. Customers & Market', '05.3 Market', 'Market sizing (TAM, SAM, SOM)', 'Y', 'Bottom-up and top-down analysis'],
  ['05. Customers & Market', '05.3 Market', 'Competitive landscape analysis', 'Y', 'Key competitors and positioning'],
  ['05. Customers & Market', '05.3 Market', 'Industry trends and tailwinds', 'N', 'Macro market context'],
  ['05. Customers & Market', '05.3 Market', 'Analyst coverage / third-party research', 'N', 'If available'],

  ['06. Team', '06.1 Leadership', 'Founder bios and backgrounds', 'Y', 'Detailed backgrounds'],
  ['06. Team', '06.1 Leadership', 'Founder LinkedIn profiles', 'Y', 'Public professional profiles'],
  ['06. Team', '06.1 Leadership', 'Org chart (full company)', 'Y', 'Current organizational structure'],
  ['06. Team', '06.1 Leadership', 'Why this team? Domain expertise', 'Y', 'Unique insight or experience'],
  ['06. Team', '06.2 Hiring', 'Headcount and growth chart', 'Y', 'Current and planned headcount'],
  ['06. Team', '06.2 Hiring', 'Key hires needed post-funding', 'Y', 'Roles critical to next phase'],
  ['06. Team', '06.2 Hiring', 'Compensation philosophy and bands', 'N', 'For retention planning'],
  ['06. Team', '06.3 Equity', 'Cap table allocation (founders, team, investors)', 'Y', 'Visual cap table summary'],
  ['06. Team', '06.3 Equity', 'Equity pool and option grants detail', 'Y', 'Allocation to date'],
  ['06. Team', '06.4 Advisors', 'List of formal advisors', 'Y', 'With equity and terms'],
  ['06. Team', '06.4 Advisors', 'Advisor agreements (sample)', 'N', 'Standard advisor agreement'],
  ['06. Team', '06.4 Advisors', 'Why each advisor is relevant', 'Y', 'How they help the company'],

  ['07. Legal & Compliance', '07.1 Contracts', 'Standard customer contract / ToS', 'Y', 'Current form agreement'],
  ['07. Legal & Compliance', '07.1 Contracts', 'Top customer contracts (anonymized)', 'N', 'If founder is comfortable'],
  ['07. Legal & Compliance', '07.1 Contracts', 'Material vendor contracts', 'N', 'Critical vendor agreements'],
  ['07. Legal & Compliance', '07.1 Contracts', 'Contractor agreements (material)', 'N', 'For significant engagements'],
  ['07. Legal & Compliance', '07.2 Compliance', 'Privacy policy and ToS (published)', 'Y', 'Public-facing policies'],
  ['07. Legal & Compliance', '07.2 Compliance', 'Data Processing Agreements (vendor)', 'N', 'If processing personal data'],
  ['07. Legal & Compliance', '07.2 Compliance', 'GDPR / CCPA compliance documentation', 'N', 'For international operations'],
  ['07. Legal & Compliance', '07.3 Insurance', 'Insurance policies in place', 'N', 'General liability, E&O, cyber'],
  ['07. Legal & Compliance', '07.4 Disputes', 'Any pending or threatened litigation', 'Y', 'Full disclosure required'],
  ['07. Legal & Compliance', '07.4 Disputes', 'Regulatory inquiries (if any)', 'Y', 'Full disclosure required'],
];

// ============================================================================
// 3. Series B+ Data Room Index
// ============================================================================
const seriesB = [
  ['01. Executive Summary', 'Pitch Materials', 'Information Memorandum / investor deck', 'Y', 'Comprehensive growth-stage deck'],
  ['01. Executive Summary', 'Pitch Materials', 'Company snapshot one-pager', 'Y', 'Quick reference summary'],
  ['01. Executive Summary', 'Pitch Materials', 'Product demo (live or recorded)', 'Y', 'Required for every investor meeting'],
  ['01. Executive Summary', 'Pitch Materials', 'Management presentation deck', 'Y', 'Detailed company overview'],
  ['01. Executive Summary', 'Pitch Materials', 'Detailed financial model (Excel)', 'Y', 'Working model with assumptions'],

  ['02. Corporate & Legal', 'Corporate Records', 'Certificate of incorporation and amendments', 'Y', 'All charter documents'],
  ['02. Corporate & Legal', 'Corporate Records', 'Bylaws / Operating Agreement (current)', 'Y', 'Current governance rules'],
  ['02. Corporate & Legal', 'Corporate Records', 'Cap table — fully diluted (all classes)', 'Y', 'Including options, warrants, converts'],
  ['02. Corporate & Legal', 'Corporate Records', 'Stock ledger', 'Y', 'Complete issuance history'],
  ['02. Corporate & Legal', 'Corporate Records', 'Form D filings (all rounds)', 'Y', 'All private placement filings'],
  ['02. Corporate & Legal', 'Corporate Records', 'Board minutes and resolutions (3+ years)', 'Y', 'All formal board actions'],
  ['02. Corporate & Legal', 'Corporate Records', 'Shareholder minutes and consents', 'Y', 'All stockholder approvals'],
  ['02. Corporate & Legal', 'Equity Plans', 'Equity incentive plan documents (all)', 'Y', 'Plan documents and amendments'],
  ['02. Corporate & Legal', 'Equity Plans', 'Option grant detail (all)', 'Y', 'Full grant ledger'],
  ['02. Corporate & Legal', 'Equity Plans', 'Acceleration provisions summary', 'Y', 'Single vs. double trigger'],
  ['02. Corporate & Legal', 'Equity Plans', '409A valuations (history)', 'N', 'For option strike price support'],
  ['02. Corporate & Legal', 'Material Contracts', 'Top 20 customer contracts', 'Y', 'By revenue'],
  ['02. Corporate & Legal', 'Material Contracts', 'Top 10 vendor contracts (by spend)', 'Y', 'Critical vendors'],
  ['02. Corporate & Legal', 'Material Contracts', 'Change-of-control provisions', 'Y', 'Across material contracts'],
  ['02. Corporate & Legal', 'Material Contracts', 'Most-favored-customer clauses', 'Y', 'Identify exposure'],
  ['02. Corporate & Legal', 'Litigation', 'Schedule of pending litigation', 'Y', 'All active matters'],
  ['02. Corporate & Legal', 'Litigation', 'Schedule of threatened claims', 'Y', 'Pre-litigation demands'],
  ['02. Corporate & Legal', 'Litigation', 'Historical litigation outcomes (5 years)', 'Y', 'Closed matters and outcomes'],
  ['02. Corporate & Legal', 'Insurance', 'Insurance policy schedule', 'Y', 'All policies, limits, premiums'],
  ['02. Corporate & Legal', 'Insurance', 'Claims history (5 years)', 'Y', 'Filed claims and outcomes'],
  ['02. Corporate & Legal', 'IP', 'Patent portfolio (granted and pending)', 'Y', 'All jurisdictions'],
  ['02. Corporate & Legal', 'IP', 'Trademark portfolio', 'Y', 'Registrations and applications'],
  ['02. Corporate & Legal', 'IP', 'IP assignment agreements', 'Y', 'Founders, employees, contractors'],
  ['02. Corporate & Legal', 'IP', 'Open source license audit (SBOM)', 'Y', 'Software bill of materials'],
  ['02. Corporate & Legal', 'IP', 'In-bound IP licenses', 'Y', 'Third-party technology rights'],
  ['02. Corporate & Legal', 'Regulatory', 'Material licenses and permits', 'Y', 'All government authorizations'],
  ['02. Corporate & Legal', 'Regulatory', 'Privacy policy and ToS (current)', 'Y', 'Public-facing policies'],
  ['02. Corporate & Legal', 'Regulatory', 'Data Processing Agreements (vendor + customer)', 'Y', 'All material processors'],

  ['03. Financial', 'Historicals', 'Audited financial statements (3 years)', 'Y', 'Reviewed by independent auditor'],
  ['03. Financial', 'Historicals', 'Unaudited interim financials (YTD)', 'Y', 'Current year-to-date'],
  ['03. Financial', 'Historicals', 'Monthly management accounts (24 months)', 'Y', 'Detailed monthly P&L and BS'],
  ['03. Financial', 'Historicals', 'Trial balance (most recent period)', 'Y', 'Detail-level GL trial balance'],
  ['03. Financial', 'Revenue', 'Revenue by customer detail (top 20)', 'Y', 'Transaction-level revenue'],
  ['03. Financial', 'Revenue', 'Revenue by product / SKU detail', 'Y', 'For product-level analysis'],
  ['03. Financial', 'Revenue', 'Revenue by geography', 'Y', 'For geographic analysis'],
  ['03. Financial', 'Revenue', 'ARR / MRR detail (24 months)', 'Y', 'For recurring revenue companies'],
  ['03. Financial', 'Revenue', 'Customer cohort retention analysis', 'Y', 'Logo and revenue by cohort'],
  ['03. Financial', 'Revenue', 'Net revenue retention (NRR)', 'Y', 'Including expansion and churn'],
  ['03. Financial', 'Revenue', 'Customer acquisition cost (CAC)', 'Y', 'By channel'],
  ['03. Financial', 'Revenue', 'Customer lifetime value (LTV)', 'Y', 'And LTV/CAC ratio'],
  ['03. Financial', 'Costs', 'Cost of revenue detail', 'Y', 'Direct costs by category'],
  ['03. Financial', 'Costs', 'Operating expense detail by function', 'Y', 'R&D, S&M, G&A detail'],
  ['03. Financial', 'Costs', 'Payroll register (current)', 'Y', 'Salary, benefits, taxes by employee'],
  ['03. Financial', 'Costs', 'Capital expenditure history (3 years)', 'N', 'For capital-intensive businesses'],
  ['03. Financial', 'Working Capital', 'AR aging schedule', 'Y', 'Customer-level aging detail'],
  ['03. Financial', 'Working Capital', 'AP aging schedule', 'Y', 'Vendor-level aging detail'],
  ['03. Financial', 'Working Capital', 'Net working capital analysis', 'Y', '13-month walk'],
  ['03. Financial', 'Tax', 'Federal and state tax returns (3 years)', 'Y', 'All filed returns'],
  ['03. Financial', 'Tax', 'Sales and use tax filings', 'Y', 'Compliance documentation'],
  ['03. Financial', 'Tax', 'Open tax positions (FIN 48)', 'Y', 'Uncertain tax positions'],
  ['03. Financial', 'Debt', 'Schedule of all debt instruments', 'Y', 'Detail of all outstanding debt'],
  ['03. Financial', 'Debt', 'Credit agreements and amendments', 'Y', 'Full debt documentation'],
  ['03. Financial', 'Debt', 'Debt covenant compliance certificates', 'Y', 'Most recent compliance'],
  ['03. Financial', 'Projections', '3-year financial projections (monthly)', 'Y', 'Detailed forward model'],
  ['03. Financial', 'Projections', 'Key assumptions and drivers', 'Y', 'Underlying model inputs'],
  ['03. Financial', 'Projections', 'Hiring plan (next 12-18 months)', 'Y', 'Roles, timing, comp'],
  ['03. Financial', 'Projections', 'Use of funds breakdown', 'Y', 'How the round will be deployed'],
  ['03. Financial', 'Projections', 'Path to profitability analysis', 'Y', 'Cash flow breakeven timeline'],

  ['04. Commercial', 'Customers', 'Top 20 customers by revenue', 'Y', 'Concentration analysis'],
  ['03. Financial', 'Commercial', 'Customer reference list (10+ customers)', 'Y', 'For investor reference calls'],
  ['04. Commercial', 'Customers', 'Customer case studies (5+)', 'Y', 'Detailed success stories'],
  ['04. Commercial', 'Customers', 'NPS / customer satisfaction data', 'N', 'Customer health metrics'],
  ['04. Commercial', 'Sales', 'Sales pipeline and forecast', 'Y', 'Active opportunities by stage'],
  ['04. Commercial', 'Sales', 'Sales process documentation', 'N', 'GTM playbook and ICP'],
  ['04. Commercial', 'Sales', 'Win/loss analysis', 'N', 'Recent sales outcomes'],
  ['04. Commercial', 'Sales', 'Sales rep productivity', 'N', 'Per-rep bookings and attainment'],
  ['04. Commercial', 'Marketing', 'Marketing plan and budget', 'N', 'Current year plan and spend'],
  ['04. Commercial', 'Marketing', 'Brand and positioning materials', 'N', 'Messaging and competitive positioning'],
  ['04. Commercial', 'Market', 'Market sizing (TAM, SAM, SOM)', 'Y', 'Bottom-up and top-down analysis'],
  ['04. Commercial', 'Market', 'Competitive landscape and positioning', 'Y', 'Detailed competitor profiles'],
  ['04. Commercial', 'Market', 'Industry trends and tailwinds', 'N', 'Macro market context'],
  ['04. Commercial', 'Market', 'Analyst coverage and reports', 'N', 'Third-party research'],

  ['05. Product & Technology', 'Architecture', 'Technical architecture overview', 'Y', 'High-level system design'],
  ['05. Product & Technology', 'Architecture', 'Infrastructure and hosting', 'Y', 'Cloud providers and regions'],
  ['05. Product & Technology', 'Architecture', 'Disaster recovery plan', 'Y', 'DR procedures and RTO/RPO'],
  ['05. Product & Technology', 'Product', 'Product roadmap (12-24 months)', 'Y', 'Strategic direction'],
  ['05. Product & Technology', 'Product', 'Product analytics and usage data', 'Y', 'MAU, DAU, engagement metrics'],
  ['05. Product & Technology', 'Product', 'Customer feedback and NPS', 'N', 'Product satisfaction signals'],
  ['05. Product & Technology', 'Security', 'SOC 2 Type II report (most recent)', 'Y', 'Full report with auditor opinion'],
  ['05. Product & Technology', 'Security', 'Penetration test results (12 months)', 'Y', 'External pen test by third party'],
  ['05. Product & Technology', 'Security', 'Information security policy', 'Y', 'Master information security policy'],
  ['05. Product & Technology', 'Security', 'Data breach history (5 years)', 'Y', 'Any incidents and outcomes'],
  ['05. Product & Technology', 'Security', 'Incident response plan', 'Y', 'Documented IR procedures'],
  ['05. Product & Technology', 'Security', 'Cyber insurance policy', 'Y', 'Coverage and limits'],
  ['05. Product & Technology', 'Privacy', 'GDPR / CCPA compliance documentation', 'Y', 'For international operations'],
  ['05. Product & Technology', 'Privacy', 'Data Processing Agreements', 'Y', 'All material processors'],
  ['05. Product & Technology', 'Privacy', 'Cross-border data transfer mechanisms', 'N', 'SCCs and adequacy decisions'],

  ['06. People & HR', 'Org & Headcount', 'Organizational chart (full company)', 'Y', 'Current org structure'],
  ['06. People & HR', 'Org & Headcount', 'Headcount by function, location, tenure', 'Y', 'Detailed headcount analytics'],
  ['06. People & HR', 'Org & Headcount', 'Attrition and retention reports (24 months)', 'Y', 'Voluntary/involuntary breakdown'],
  ['06. People & HR', 'Compensation', 'Compensation philosophy and bands', 'N', 'Internal compensation framework'],
  ['06. People & HR', 'Compensation', 'Executive compensation', 'Y', 'C-suite arrangements'],
  ['06. People & HR', 'Compensation', 'Sales compensation plans', 'N', 'For sales teams'],
  ['06. People & HR', 'Compensation', 'Bonus and incentive plans', 'N', 'Current year plans'],
  ['06. People & HR', 'Equity', 'Equity plan and reserve status', 'Y', 'Plan document and availability'],
  ['06. People & HR', 'Equity', 'Individual equity grants (full detail)', 'Y', 'All grants, vesting, exercise prices'],
  ['06. People & HR', 'Equity', 'Acceleration provisions summary', 'Y', 'Single vs. double trigger'],
  ['06. People & HR', 'Employment', 'Key executive employment agreements', 'Y', 'C-suite and direct reports'],
  ['06. People & HR', 'Employment', 'Non-compete and non-solicit agreements', 'Y', 'Material employees'],
  ['06. People & HR', 'Employment', 'EEOC complaints and investigations', 'Y', 'Last 5 years'],
  ['06. People & HR', 'Employment', 'Labor disputes or union activity', 'Y', 'Current or threatened'],
  ['06. People & HR', 'Benefits', 'Employee benefits plan documents', 'N', 'Health, dental, 401(k)'],
  ['06. People & HR', 'Benefits', 'Employee handbook', 'N', 'Current handbook'],

  ['07. Operations', 'Real Estate', 'Facility lease agreements (all)', 'Y', 'Full text of all leases'],
  ['07. Operations', 'Real Estate', 'Lease consent requirements (change-of-control)', 'Y', 'For assignment provisions'],
  ['07. Operations', 'Suppliers', 'Key supplier list and spend', 'Y', 'Top 25 by spend'],
  ['07. Operations', 'Suppliers', 'Critical supplier contracts and SLAs', 'Y', 'Single-source dependencies'],
  ['07. Operations', 'Suppliers', 'Vendor security assessments', 'N', 'For critical vendors'],
  ['07. Operations', 'ESG & Sustainability', 'ESG and sustainability reports', 'N', 'For ESG-focused investors'],
  ['07. Operations', 'ESG & Sustainability', 'DEI initiatives and metrics', 'N', 'For DEI-focused investors'],

  ['08. Management Presentation', 'Process Materials', 'Information Memorandum (full version)', 'Y', 'Primary marketing document'],
  ['08. Management Presentation', 'Process Materials', 'Management presentation deck', 'Y', 'Detailed company overview'],
  ['08. Management Presentation', 'Process Materials', 'Process letter / timeline', 'Y', 'Round timeline and milestones'],
  ['08. Management Presentation', 'Process Materials', 'Q&A log (current)', 'Y', 'Live log of investor questions'],
  ['08. Management Presentation', 'Process Materials', 'FAQ document (pre-prepared)', 'Y', 'Anticipated questions with answers'],
];

// ============================================================================
// 4. Investor Due Diligence Question Bank
// ============================================================================
const investorQuestions = [
  ['Team & Founders', 'Why is this the right team to win in this market?', 'High', 'Founder bios, prior experience, why-now narrative'],
  ['Team & Founders', 'What relevant domain expertise do the founders bring?', 'High', 'Founder bios, industry experience'],
  ['Team & Founders', 'Have the founders worked together before?', 'Medium', 'Founder history, prior collaborations'],
  ['Team & Founders', 'Who are your key team members and what do they own?', 'High', 'Org chart, key hires'],
  ['Team & Founders', 'What is the attrition rate over the last 24 months?', 'Medium', 'HR analytics, retention metrics'],
  ['Team & Founders', 'How do you attract and retain top talent?', 'Medium', 'Comp philosophy, culture'],
  ['Team & Founders', 'What advisory board do you have, and how active are they?', 'Low', 'Advisor list, contribution history'],

  ['Market & Timing', 'What is the TAM, SAM, and SOM for this market?', 'High', 'Market sizing analysis'],
  ['Market & Timing', 'Why is now the right time for this product?', 'High', 'Market timing narrative, trends'],
  ['Market & Timing', 'What is your beachhead market, and how do you expand from there?', 'High', 'GTM strategy, segmentation'],
  ['Market & Timing', 'Who are your main competitors and how do you differentiate?', 'High', 'Competitive analysis'],
  ['Market & Timing', 'What market trends are you riding or creating?', 'Medium', 'Industry reports, tailwinds'],
  ['Market & Timing', 'How is the market expected to evolve over the next 5 years?', 'Medium', 'Industry forecasts, analyst reports'],
  ['Market & Timing', 'What barriers to entry protect this market?', 'Medium', 'Competitive moats, IP'],

  ['Product & Technology', 'What problem does your product solve and for whom?', 'High', 'Product overview, customer pain'],
  ['Product & Technology', 'What is your unique technical or product advantage?', 'High', 'Tech architecture, IP'],
  ['Product & Technology', 'How defensible is the product moat?', 'High', 'IP, data, network effects'],
  ['Product & Technology', 'What does the product roadmap look like over 12-24 months?', 'High', 'Product roadmap, priorities'],
  ['Product & Technology', 'What is your tech stack and why did you choose it?', 'Medium', 'Tech architecture'],
  ['Product & Technology', 'How do you handle scalability?', 'Medium', 'Infrastructure, capacity planning'],
  ['Product & Technology', 'What is your open source compliance posture?', 'Medium', 'SBOM, license audit'],
  ['Product & Technology', 'What AI/ML capabilities does the product use?', 'Medium', 'AI architecture, data, models'],
  ['Product & Technology', 'How is the product protected from competitors copying it?', 'Medium', 'IP, trade secrets, contracts'],

  ['Traction & Metrics', 'What are your key growth metrics (MRR, ARR, users, etc.)?', 'High', 'KPI dashboards'],
  ['Traction & Metrics', 'What is your month-over-month or year-over-year growth?', 'High', 'Growth trend charts'],
  ['Traction & Metrics', 'What is your net revenue retention or customer retention?', 'High', 'Cohort retention analysis'],
  ['Traction & Metrics', 'What is your CAC and LTV?', 'High', 'Unit economics analysis'],
  ['Traction & Metrics', 'What is your CAC payback period?', 'High', 'Unit economics'],
  ['Traction & Metrics', 'What is your Rule of 40?', 'Medium', 'Growth + margin'],
  ['Traction & Metrics', 'What is your gross margin and how has it trended?', 'High', 'Financial statements'],
  ['Traction & Metrics', 'How is your sales pipeline looking for the next 2 quarters?', 'High', 'Sales pipeline reports'],
  ['Traction & Metrics', 'What is your logo churn and revenue churn?', 'High', 'Retention analytics'],
  ['Traction & Metrics', 'How many active customers do you have and what is the growth rate?', 'High', 'Customer count trends'],
  ['Traction & Metrics', 'What is the trend in average contract value (ACV)?', 'Medium', 'Deal size analytics'],

  ['Customers & Sales', 'Who are your top 10 customers and what is the revenue mix?', 'High', 'Customer revenue analysis'],
  ['Traction & Metrics', 'Can you share 3-5 customer references I can speak with?', 'High', 'Customer reference list'],
  ['Customers & Sales', 'What is your customer concentration risk?', 'High', 'Top customer revenue %'],
  ['Customers & Sales', 'How do you acquire customers (channels, CAC)?', 'High', 'Sales process, channel analysis'],
  ['Customers & Sales', 'What is your sales cycle length?', 'Medium', 'Pipeline analytics'],
  ['Customers & Sales', 'What is your win rate against competitors?', 'Medium', 'Win/loss analysis'],
  ['Customers & Sales', 'How long is your average customer relationship (logo and revenue)?', 'Medium', 'Cohort retention'],
  ['Customers & Sales', 'What does your ideal customer profile (ICP) look like?', 'Medium', 'GTM strategy'],
  ['Customers & Sales', 'Do you have any customer case studies you can share?', 'Medium', 'Customer success stories'],

  ['Financials & Projections', 'What is your current revenue and how is it trending?', 'High', 'Financial statements'],
  ['Financials & Projections', 'What is your current burn rate and runway?', 'High', 'Cash flow analysis'],
  ['Financials & Projections', 'What are your key assumptions in the financial projections?', 'High', 'Financial model'],
  ['Financials & Projections', 'What is your path to profitability or cash flow breakeven?', 'High', 'Projections, scenario analysis'],
  ['Financials & Projections', 'What is the use of funds for this round?', 'High', 'Use of funds breakdown'],
  ['Financials & Projections', 'What milestones will this round fund you to?', 'High', 'Milestone plan'],
  ['Financials & Product', 'What is your gross margin today and where will it be in 3 years?', 'High', 'Financial projections'],
  ['Financials & Projections', 'What is your pricing strategy and how has it evolved?', 'Medium', 'Pricing history'],
  ['Financials & Projections', 'What are your largest expense categories and how will they grow?', 'Medium', 'OpEx breakdown'],
  ['Financials & Projections', 'Do you have any debt or material liabilities?', 'Medium', 'Balance sheet, debt schedule'],

  ['Competition & Moat', 'Who are the top 3 competitors and why will you win?', 'High', 'Competitive analysis'],
  ['Competition & Moat', 'What is your sustainable competitive advantage?', 'High', 'Moat analysis'],
  ['Competition & Moat', 'What is the market share today and what is the path to leadership?', 'Medium', 'Market position analysis'],
  ['Competition & Moat', 'How do you plan to compete against well-funded incumbents?', 'Medium', 'Competitive strategy'],
  ['Competition & Moat', 'What are the barriers to entry for new competitors?', 'Medium', 'IP, network effects, scale'],

  ['Security & Compliance', 'What security certifications do you have (SOC 2, ISO 27001)?', 'High', 'Compliance documentation'],
  ['Security & Compliance', 'What is your security incident history?', 'High', 'Breach history'],
  ['Security & Compliance', 'What is your approach to data privacy and GDPR/CCPA?', 'High', 'Privacy compliance'],
  ['Security & Compliance', 'What is your incident response plan?', 'Medium', 'IR plan documentation'],
  ['Security & Compliance', 'Have you had a penetration test in the last 12 months?', 'Medium', 'Pen test reports'],
  ['Security & Compliance', 'How do you handle data residency for international customers?', 'Medium', 'Data residency strategy'],

  ['Legal & Governance', 'Are there any pending or threatened legal actions?', 'High', 'Litigation schedule'],
  ['Legal & Governance', 'What is the cap table and vesting schedule for founders?', 'High', 'Cap table, founder vesting'],
  ['Legal & Governance', 'What is the size of your option pool and how much is unallocated?', 'High', 'Equity plan details'],
  ['Legal & Governance', 'Are there any change-of-control provisions in material contracts?', 'Medium', 'Contract review'],
  ['Legal & Governance', 'What is the composition of the board of directors?', 'Medium', 'Board structure'],
  ['Legal & Governance', 'Are there any investor rights or veto provisions in prior rounds?', 'Medium', 'Prior investment docs'],

  ['Exit & Returns', 'What is the most likely exit path for investors?', 'Medium', 'Strategic acquirers, IPO potential'],
  ['Exit & Returns', 'What comparable companies have been acquired, and at what multiples?', 'Medium', 'Comparable transaction analysis'],
  ['Exit & Returns', 'What is the timeline to a potential exit?', 'Low', 'Strategic plan'],
  ['Exit & Returns', 'Who are the likely strategic acquirers in your space?', 'Low', 'Strategic landscape'],

  ['Use of Funds', 'What specific milestones will this round fund?', 'High', 'Milestone plan'],
  ['Use of Funds', 'How much of the round goes to hiring vs. growth vs. runway extension?', 'High', 'Use of funds breakdown'],
  ['Use of Funds', 'What is the minimum amount you would raise?', 'Medium', 'Downside funding scenario'],
  ['Use of Funds', 'What happens if you only raise part of the target?', 'Medium', 'Contingency planning'],
  ['Use of Funds', 'How long will this round take you to your next major milestone?', 'High', 'Runway analysis'],
];

// ============================================================================
// 5. Monthly Investor Update Template
// ============================================================================
const investorUpdate = [
  ['Headline KPIs', 'Monthly recurring revenue (MRR)', '', '', '', ''],
  ['Headline KPIs', 'Annual recurring revenue (ARR)', '', '', '', ''],
  ['Headline KPIs', 'Net new ARR (this month)', '', '', '', ''],
  ['Headline KPIs', 'Total customers', '', '', '', ''],
  ['Headline KPIs', 'Net new customers (this month)', '', '', '', ''],
  ['Headline KPIs', 'Gross revenue retention', '', '', '', ''],
  ['Headline KPIs', 'Net revenue retention (NRR)', '', '', '', ''],
  ['Headline KPIs', 'Logo churn (this month)', '', '', '', ''],
  ['Headline KPIs', 'Cash on hand', '', '', '', ''],
  ['Headline KPIs', 'Monthly burn rate', '', '', '', ''],
  ['Headline KPIs', 'Months of runway remaining', '', '', '', ''],
  ['Headline KPIs', 'Headcount (total)', '', '', '', ''],
  ['Headline KPIs', 'Headcount (net new this month)', '', '', '', ''],

  ['Sales & Pipeline', 'New customers closed (count)', '', '', '', ''],
  ['Sales & Pipeline', 'New ACV booked (sum)', '', '', '', ''],
  ['Sales & Pipeline', 'Pipeline value (open opportunities)', '', '', '', ''],
  ['Sales & Pipeline', 'Weighted pipeline (forecasted)', '', '', '', ''],
  ['Sales & Pipeline', 'Average sales cycle (days)', '', '', '', ''],
  ['Sales & Pipeline', 'Win rate (this month)', '', '', '', ''],

  ['Product & Engineering', 'Ships released (count)', '', '', '', ''],
  ['Product & Engineering', 'Major features launched', '', '', '', ''],
  ['Product & Engineering', 'Daily active users (DAU)', '', '', '', ''],
  ['Product & Engineering', 'Weekly active users (WAU)', '', '', '', ''],
  ['Product & Engineering', 'Monthly active users (MAU)', '', '', '', ''],
  ['Product & Engineering', 'DAU / MAU ratio', '', '', '', ''],
  ['Product & Engineering', 'Critical bugs open', '', '', '', ''],

  ['Team & Hiring', 'Open roles (count)', '', '', '', ''],
  ['Team & Hiring', 'Offers extended (count)', '', '', '', ''],
  ['Team & Hiring', 'Hires started (count)', '', '', '', ''],
  ['Team & Hiring', 'Departures (count)', '', '', '', ''],
  ['Team & Hiring', 'Regrettable attrition', '', '', '', ''],

  ['Highlights', 'Top 3 wins this month', '', '', '', ''],
  ['Highlights', 'Top 1 customer success story', '', '', '', ''],
  ['Highlights', 'Top 1 product launch', '', '', '', ''],
  ['Highlights', 'Top 1 team or hiring win', '', '', '', ''],

  ['Lowlights', 'Top 3 challenges this month', '', '', '', ''],
  ['Lowlights', 'Top 1 customer loss and why', '', '', '', ''],
  ['Lowlights', 'Top 1 product or technical issue', '', '', '', ''],
  ['Lowlights', 'Top 1 team or process gap', '', '', '', ''],

  ['Asks & Help Needed', 'Top 3 introductions needed', '', '', '', ''],
  ['Asks & Help Needed', 'Top 1 hire you are looking for', '', '', '', ''],
  ['Asks & Help Needed', 'Top 1 customer introduction opportunity', '', '', '', ''],
  ['Asks & Help Needed', 'Other support needed from investors', '', '', '', ''],

  ['Outlook', 'Goals for next month (top 3)', '', '', '', ''],
  ['Outlook', 'Key milestones in next 90 days', '', '', '', ''],
  ['Outlook', 'Any change in strategy or direction', '', '', '', ''],
  ['Outlook', 'Cash or runway concerns (if any)', '', '', '', ''],
];

// ============================================================================
// 6. Cap Table Reconciliation Template
// ============================================================================
const capTable = [
  ['Founders', 'Common', 0, '', 0, 0, '00/00/0000', 'Founder shares (pre-financing)'],
  ['Founders', 'Common', 0, '', 0, 0, '00/00/0000', 'Founder shares (pre-financing)'],
  ['Founders', 'Common', 0, '', 0, 0, '00/00/0000', 'Founder shares (pre-financing)'],
  ['Employee Stock Pool', 'Option Pool', 0, 'Various', 0, 0, 'Various', 'Reserved for future option grants'],
  ['Issued Option Grants', 'Common (Options)', 0, 'Various', 0, 0, 'Various', 'Already-granted options (exercised and unexercised)'],
  ['Issued Option Grants', 'Common (Options)', 0, 'Various', 0, 0, 'Various', 'Already-granted options'],
  ['Issued Option Grants', 'Common (Options)', 0, 'Various', 0, 0, 'Various', 'Already-granted options'],
  ['Issued Option Grants', 'Common (Options)', 0, 'Various', 0, 0, 'Various', 'Already-granted options'],
  ['Advisor 1', 'Common (Options)', 0, '00/00/0000', 0, 0, '00/00/0000', 'Advisor grant'],
  ['Advisor 2', 'Common (Options)', 0, '00/00/0000', 0, 0, '00/00/0000', 'Advisor grant'],
  ['Pre-Seed Investor 1 (FFF)', 'SAFE', 0, '00/00/0000', 0, 0, '00/00/0000', 'Convertible note — converts at next round'],
  ['Pre-Seed Investor 2 (FFF)', 'SAFE', 0, '00/00/0000', 0, 0, '00/00/0000', 'Convertible note — converts at next round'],
  ['Pre-Seed Investor 3 (FFF)', 'SAFE', 0, '00/00/0000', 0, 0, '00/00/0000', 'Convertible note — converts at next round'],
  ['Accelerator / Incubator', 'SAFE', 0, '00/00/0000', 0, 0, '00/00/0000', 'Often discount + MFN'],
  ['Grant Program', 'Non-Dilutive', 0, '00/00/0000', 0, 0, '00/00/0000', 'SBIR, NSF, or other non-dilutive grant'],
  ['Seed Lead Investor', 'Series Seed Preferred', 0, '00/00/0000', 0, 0, '00/00/0000', 'Lead investor in seed round'],
  ['Seed Co-Investor 1', 'Series Seed Preferred', 0, '00/00/0000', 0, 0, '00/00/0000', 'Co-investor in seed round'],
  ['Seed Co-Investor 2', 'Series Seed Preferred', 0, '00/00/0000', 0, 0, '00/00/0000', 'Co-investor in seed round'],
  ['Strategic Investor', 'Series Seed Preferred', 0, '00/00/0000', 0, 0, '00/00/0000', 'Strategic partner in seed round'],
  ['Warrants Outstanding', 'Warrant', 0, 'Various', 0, 0, 'Various', 'Warrants issued to service providers or lenders'],
  ['Convertible Notes Outstanding', 'Convertible Note', 0, '00/00/0000', 0, 0, '00/00/0000', 'Outstanding convertible note (pre-financing)'],
  ['Total Authorized Shares', 'Common', 0, '00/00/0000', 0, 0, '00/00/0000', 'Total authorized common stock'],
  ['Total Issued and Outstanding', 'Common', 0, '', 0, 0, '', 'Sum of all issued common (founders + exercised options)'],
  ['Total Reserved for Option Pool', 'Option Pool', 0, '', 0, 0, '', 'Authorized but unissued (reserved for future grants)'],
  ['Fully Diluted Shares', 'All Classes', 0, '', 0, 0, '', 'Common + all options + all SAFEs/notes (converted) + warrants'],
  ['Founder Ownership (Fully Diluted)', '', 0, '', 0, 0, '', 'Sum of founder holdings / fully diluted shares'],
  ['Employee Ownership (Fully Diluted)', '', 0, '', 0, 0, '', 'Sum of all option grants (vested + unvested) / fully diluted shares'],
  ['Investor Ownership (Fully Diluted)', '', 0, '', 0, 0, '', 'Sum of all investor holdings / fully diluted shares'],
  ['Option Pool Available for Future Grants', '', 0, '', 0, 0, '', 'Pool minus already-granted options'],
  ['Vesting — Cliff (months)', '', 0, '', 0, 0, '', 'Typical founder cliff (often 12 months)'],
  ['Vesting — Total (months)', '', 0, '', 0, 0, '', 'Typical founder vesting (often 48 months)'],
  ['Founder Repurchase Right at Termination', '', 0, '', 0, 0, '', 'Company right to repurchase unvested at original price'],
  ['Last 409A Valuation Date', '', 0, '', 0, 0, '00/00/0000', 'Date of most recent 409A'],
  ['Last 409A Fair Market Value (per share)', '', 0, '', 0, 0, '', 'FMV per share from most recent 409A'],
];

// ============================================================================
// 7. Term Sheet Comparison Template
// ============================================================================
const termSheet = [
  ['Economic Terms', 'Pre-money valuation', '', '', '', ''],
  ['Economic Terms', 'Investment amount', '', '', '', ''],
  ['Economic Terms', 'Post-money valuation', '', '', '', ''],
  ['Economic Terms', 'Price per share', '', '', '', ''],
  ['Economic Terms', 'Liquidation preference (multiple)', '', '', '', ''],
  ['Economic Terms', 'Liquidation preference (participating vs. non-participating)', '', '', '', ''],
  ['Economic Terms', 'Option pool size (pre-money)', '', '', '', ''],
  ['Economic Terms', 'Pay-to-play provision', '', '', '', ''],

  ['Control Terms', 'Board seats — total', '', '', '', ''],
  ['Control Terms', 'Board seats — investor', '', '', '', ''],
  ['Control Terms', 'Board seats — founder', '', '', '', ''],
  ['Control Terms', 'Board seats — independent', '', '', '', ''],
  ['Control Terms', 'Protective provisions / veto rights', '', '', '', ''],
  ['Control Terms', 'Investor consent required for budget approval', '', '', '', ''],

  ['Investor Rights', 'Information rights (financial reporting)', '', '', '', ''],
  ['Investor Rights', 'Inspection rights', '', '', '', ''],
  ['Investor Rights', 'Registration rights (S-3 / demand)', '', '', '', ''],
  ['Investor Rights', 'Pro-rata participation rights (future rounds)', '', '', '', ''],
  ['Investor Rights', 'Right of first refusal (ROFR) on transfers', '', '', '', ''],
  ['Investor Rights', 'Co-sale (tag-along) rights', '', '', '', ''],
  ['Investor Rights', 'Drag-along rights', '', '', '', ''],
  ['Investor Rights', 'Most-favored-nation (MFN) clause', '', '', '', ''],

  ['Founder Terms', 'Founder vesting (remaining)', '', '', '', ''],
  ['Founder Terms', 'Founder vesting acceleration (single vs. double trigger)', '', '', '', ''],
  ['Founder Terms', 'Founder non-compete (duration and scope)', '', '', '', ''],
  ['Founder Terms', 'Reverse vesting on repurchase', '', '', '', ''],
  ['Founder Terms', 'Time commitment (full-time required)', '', '', '', ''],

  ['Anti-Dilution', 'Anti-dilution protection (weighted average vs. full ratchet)', '', '', '', ''],
  ['Anti-Dilution', 'Anti-dilution carve-outs', '', '', '', ''],

  ['Conversion & Redemption', 'Optional conversion (1x to common)', '', '', '', ''],
  ['Conversion & Redemption', 'Mandatory conversion trigger', '', '', '', ''],
  ['Conversion & Redemption', 'Redemption rights (put rights)', '', '', '', ''],
  ['Conversion & Redemption', 'Dividend rights (cumulative vs. non-cumulative)', '', '', '', ''],
  ['Conversion & Redemption', 'Voting rights (as-converted basis)', '', '', '', ''],

  ['Closing Terms', 'Conditions to closing (DD, signatures, etc.)', '', '', '', ''],
  ['Closing Terms', 'Use of funds restrictions', '', '', '', ''],
  ['Closing Terms', 'Milestone reporting requirements', '', '', '', ''],
  ['Closing Terms', 'Required investor insurance', '', '', '', ''],

  ['Other', 'Representations and warranties by founders', '', '', '', ''],
  ['Other', 'Indemnification scope and limits', '', '', '', ''],
  ['Other', 'Non-compete and non-solicit (founders and company)', '', '', '', ''],
  ['Other', 'Confidentiality / NDA scope', '', '', '', ''],
  ['Other', 'Governing law', '', '', '', ''],
  ['Other', 'Dispute resolution (arbitration vs. court)', '', '', '', ''],
];

// ============================================================================
// 8. Fundraising Pipeline Tracker
// ============================================================================
const fundraising = [
  ['Tier 1: Top Priority', 'Sequoia Capital', 'Partner Name 1', '', 'Cold Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Andreessen Horowitz', 'Partner Name 2', '', 'Warm Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Accel Partners', 'Partner Name 3', '', 'Cold Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Benchmark', 'Partner Name 4', '', 'Referral', '', '', '', ''],
  ['Tier 1: Top Priority', 'Greylock Partners', 'Partner Name 5', '', 'Cold Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Index Ventures', 'Partner Name 6', '', 'Warm Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Lightspeed Venture Partners', 'Partner Name 7', '', 'Cold Intro', '', '', '', ''],
  ['Tier 1: Top Priority', 'Founders Fund', 'Partner Name 8', '', 'Cold Intro', '', '', '', ''],

  ['Tier 2: High Fit', 'KPCB (Kleiner Perkins)', 'Partner Name 9', '', 'Warm Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'Battery Ventures', 'Partner Name 10', '', 'Cold Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'Bessemer Venture Partners', 'Partner Name 11', '', 'Referral', '', '', '', ''],
  ['Tier 2: High Fit', 'General Catalyst', 'Partner Name 12', '', 'Warm Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'NEA (New Enterprise Associates)', 'Partner Name 13', '', 'Cold Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'GGV Capital', 'Partner Name 14', '', 'Cold Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'Insight Partners', 'Partner Name 15', '', 'Warm Intro', '', '', '', ''],
  ['Tier 2: High Fit', 'IVP (Institutional Venture Partners)', 'Partner Name 16', '', 'Cold Intro', '', '', '', ''],

  ['Tier 3: Sector Specialists', 'Sector Fund A', 'Partner Name 17', '', 'Cold Intro', '', '', '', ''],
  ['Tier 3: Sector Specialists', 'Sector Fund B', 'Partner Name 18', '', 'Warm Intro', '', '', '', ''],
  ['Tier 3: Sector Specialists', 'Sector Fund C', 'Partner Name 19', '', 'Referral', '', '', '', ''],
  ['Tier 3: Sector Specialists', 'Sector Fund D', 'Partner Name 20', '', 'Cold Intro', '', '', '', ''],

  ['Tier 4: Strategic / Corporate', 'Strategic Investor 1', 'BD Contact', '', 'Warm Intro', '', '', '', ''],
  ['Tier 4: Strategic / Corporate', 'Strategic Investor 2', 'BD Contact', '', 'Cold Intro', '', '', '', ''],
  ['Tier 4: Strategic / Corporate', 'Strategic Investor 3', 'BD Contact', '', 'Cold Intro', '', '', '', ''],

  ['Tier 5: Angel Investors', 'Angel 1 (Operator)', '', '', 'Network', '', '', '', ''],
  ['Tier 5: Angel Investors', 'Angel 2 (Domain Expert)', '', '', 'Network', '', '', '', ''],
  ['Tier 5: Angel Investors', 'Angel 3 (Previous Investor)', '', '', 'Network', '', '', '', ''],
  ['Tier 5: Angel Investors', 'Angel 4 (Customer)', '', '', 'Network', '', '', '', ''],

  ['Meetings Scheduled', 'Investor Name 1', '', 'Partner Name', 'First Meeting', '', '', 'Initial pitch', ''],
  ['Meetings Scheduled', 'Investor Name 2', '', 'Partner Name', 'First Meeting', '', '', 'Initial pitch', ''],
  ['Meetings Scheduled', 'Investor Name 3', '', 'Partner Name', 'First Meeting', '', '', 'Initial pitch', ''],

  ['In Diligence', 'Investor Name 4', '', 'Partner Name', 'DD Requested', '', '', 'Data room access granted', ''],
  ['In Diligence', 'Investor Name 5', '', 'Partner Name', 'DD Requested', '', '', 'Data room access granted', ''],

  ['Term Sheet Stage', 'Investor Name 6', '', 'Partner Name', 'Term Sheet', '', '', 'Negotiating terms', ''],
  ['Term Sheet Stage', 'Investor Name 7', '', 'Partner Name', 'Term Sheet', '', '', 'Negotiating terms', ''],

  ['Closed / Committed', 'Investor Name 8', '', 'Partner Name', 'Closed', '', '', 'Wire pending', ''],
  ['Closed / Committed', 'Investor Name 9', '', 'Partner Name', 'Closed', '', '', 'Funds received', ''],

  ['Passed / No Response', 'Investor Name 10', '', '', 'Passed', '', '', 'Not a fit / no response', ''],
  ['Passed / No Response', 'Investor Name 11', '', '', 'Passed', '', '', 'Not a fit / no response', ''],
  ['Passed / No Response', 'Investor Name 12', '', '', 'No Response', '', '', 'Multiple follow-ups, no engagement', ''],
];

// ============================================================================
// Write all CSVs
// ============================================================================

const outputDir = path.join(__dirname, '..', 'public', 'templates');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = [
  { name: 'preseed-data-room-checklist.csv', headers: ['Section', 'Subfolder', 'Document', 'Required', 'Notes'], rows: preSeed },
  { name: 'seed-data-room-index.csv', headers: ['Section', 'Subfolder', 'Document', 'Required', 'Notes'], rows: seed },
  { name: 'series-b-data-room-index.csv', headers: ['Section', 'Subfolder', 'Document', 'Required', 'Notes'], rows: seriesB },
  { name: 'investor-dd-question-bank.csv', headers: ['Category', 'Question', 'Priority', 'Suggested Source / Section'], rows: investorQuestions },
  { name: 'monthly-investor-update-template.csv', headers: ['Section', 'Metric', 'Current Value', 'Last Month', 'Target', 'Notes'], rows: investorUpdate },
  { name: 'cap-table-reconciliation-template.csv', headers: ['Holder / Class', 'Type', 'Shares (units)', 'Issue Date', 'Price/Share', 'Total Value', 'As-of Date', 'Notes'], rows: capTable },
  { name: 'term-sheet-comparison-template.csv', headers: ['Category', 'Term', 'Investor A', 'Investor B', 'Investor C', 'Notes'], rows: termSheet },
  { name: 'fundraising-pipeline-tracker.csv', headers: ['Tier / Stage', 'Investor / Firm', 'Partner / Contact', 'Stage', 'Source of Intro', 'Date Contacted', 'Last Touch', 'Next Action', 'Notes'], rows: fundraising },
];

files.forEach(f => {
  const csv = makeCsv(f.headers, f.rows);
  fs.writeFileSync(path.join(outputDir, f.name), csv, 'utf8');
  console.log(`Wrote ${f.name} (${f.rows.length} rows)`);
});

console.log(`\nAll 8 investor templates written to ${outputDir}`);
