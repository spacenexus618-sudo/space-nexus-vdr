export interface EcosystemProduct {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  color: string;
  category: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  whyItComplements: string[];
  highlights: string[];
}

export const ecosystemProducts: EcosystemProduct[] = [
  {
    slug: "space-sign",
    name: "Space Sign",
    tagline: "AI Contract Analysis & E-Signatures",
    url: "https://space-sign.ai/",
    color: "#6366f1",
    category: "Contracts & E-Signatures",
    description:
      "AI-powered contract review and e-signature platform built for legal and deal teams.",
    longDescription:
      "Space Sign handles the full contract lifecycle — from AI-assisted redlining and clause analysis to legally binding e-signatures and audit trails. It is built for legal teams, deal makers, and procurement professionals who need fast, secure contract execution without relying on generic e-sign tools.",
    keyFeatures: [
      "AI-powered contract review and clause risk flagging",
      "Legally binding e-signatures with full audit trails",
      "Template library for NDAs, MSAs, and closing documents",
      "Counterparty collaboration and redlining workflows",
      "Signature status tracking and deadline reminders",
    ],
    whyItComplements: [
      "SpaceNexus handles secure document sharing during due diligence — Space Sign handles the contracts that come before and after",
      "Deal teams that use SpaceNexus for their data room often need e-signature for NDAs, term sheets, and closing docs",
      "Both tools are built for high-stakes transactions where document security and audit trails matter",
    ],
    highlights: [
      "Cut contract turnaround from days to hours",
      "AI flags risky clauses before you sign",
      "Full audit trail for every signature event",
    ],
  },
  {
    slug: "space-capture",
    name: "Space Capture",
    tagline: "Field Inspections & Site Documentation",
    url: "https://spacecapture.ai/",
    color: "#10b981",
    category: "Field Data & Documentation",
    description:
      "Field inspection and site documentation platform for construction and infrastructure teams.",
    longDescription:
      "Space Capture gives field teams structured tools to document site conditions, inspections, safety observations, and progress. Photos, videos, and checklists are geotagged, timestamped, and organized automatically — replacing fragmented WhatsApp chains and email photo dumps with a proper record-keeping system.",
    keyFeatures: [
      "Geotagged photo and video capture with automatic organization",
      "Customizable inspection checklists and punch lists",
      "Offline-first mobile app for remote sites",
      "Progress documentation with date and location stamps",
      "Issue logs with status tracking and assignment",
    ],
    whyItComplements: [
      "Construction and infrastructure teams using SpaceNexus for capital raises need verified site documentation — Space Capture produces it",
      "Asset buyers conducting due diligence expect evidence of site condition; Space Capture generates that evidence systematically",
      "Both tools serve project-based industries where documentation quality directly affects deal outcomes",
    ],
    highlights: [
      "Replace WhatsApp photo chaos with structured site records",
      "Offline-capable for remote and underground sites",
      "Every photo is geotagged and timestamped automatically",
    ],
  },
  {
    slug: "space-lizit",
    name: "Space Lizit",
    tagline: "Immigration & Workforce Compliance",
    url: "https://spacelizit.com/",
    color: "#f59e0b",
    category: "Compliance & Legal",
    description:
      "Immigration case management and workforce compliance platform for global organizations.",
    longDescription:
      "Space Lizit automates the tracking, renewal, and documentation of work authorizations, visas, and immigration filings for organizations with international workforces. HR and legal teams use it to stay compliant across jurisdictions, avoid lapses, and maintain audit-ready records without spreadsheets.",
    keyFeatures: [
      "Work authorization tracking with expiry alerts",
      "Immigration case management and document storage",
      "Visa and permit renewal workflow automation",
      "Compliance reporting by entity and jurisdiction",
      "Employee self-service portal for document uploads",
    ],
    whyItComplements: [
      "M&A transactions involving international workforces require workforce compliance documentation — Space Lizit maintains it",
      "SpaceNexus users in cross-border deals often need to surface immigration compliance records during due diligence",
      "Both tools serve organizations where regulatory compliance is non-negotiable",
    ],
    highlights: [
      "Never miss a visa expiry with automated renewal alerts",
      "Audit-ready compliance records across all jurisdictions",
      "Cuts immigration admin time for HR teams significantly",
    ],
  },
  {
    slug: "spacehr",
    name: "SpaceHR",
    tagline: "HR Management & Workforce Analytics",
    url: "https://spacehr.net/",
    color: "#ec4899",
    category: "Human Resources",
    description:
      "Full HRMS covering payroll, performance management, org structure, and workforce analytics.",
    longDescription:
      "SpaceHR is a comprehensive human resources management system built for growing organizations. It covers the full employee lifecycle — from onboarding and org chart management through payroll processing, performance reviews, leave tracking, and workforce analytics. HR teams get one platform instead of five disconnected tools.",
    keyFeatures: [
      "Org chart and headcount management",
      "Payroll processing with statutory compliance",
      "Performance review and goal-tracking workflows",
      "Leave, attendance, and shift management",
      "Workforce analytics and executive dashboards",
    ],
    whyItComplements: [
      "HR data is the most-requested category in M&A due diligence — SpaceHR holds it, SpaceNexus helps share it securely with acquirers",
      "Organizations building out their full operational stack naturally combine HRMS and secure document management",
      "Both products are used by organizations that need structured, audit-ready records",
    ],
    highlights: [
      "One platform for the full employee lifecycle",
      "Payroll with built-in statutory compliance",
      "Workforce analytics for leadership and HR teams",
    ],
  },
  {
    slug: "spacelean",
    name: "SpaceLean",
    tagline: "Lean Construction Scheduling & 4D BIM",
    url: "https://spacelean.ai/",
    color: "#3b82f6",
    category: "Project Scheduling",
    description:
      "Lean construction scheduling platform with pull planning, 4D BIM, and schedule analytics.",
    longDescription:
      "SpaceLean brings lean construction principles into a digital scheduling platform. Project teams use pull planning sessions, lookahead schedules, and 4D BIM to keep projects on track and communicate progress accurately. It replaces static Gantt charts with dynamic, collaborative planning tools built for how construction actually works.",
    keyFeatures: [
      "Digital pull planning and Last Planner System tools",
      "4D BIM schedule visualization",
      "Lookahead schedules and constraint tracking",
      "Schedule performance index and variance reporting",
      "Multi-project portfolio view for program managers",
    ],
    whyItComplements: [
      "Construction lenders and equity investors need schedule evidence — SpaceLean produces it, SpaceNexus helps share it in capital raise data rooms",
      "Project developers using SpaceNexus to raise capital need credible schedule documentation; SpaceLean provides it",
      "Both tools serve construction and infrastructure teams managing complex, multi-party projects",
    ],
    highlights: [
      "Replaces static Gantt charts with collaborative pull planning",
      "4D BIM gives investors a visual view of project progress",
      "Built for how construction teams actually plan",
    ],
  },
  {
    slug: "pmspace",
    name: "PMSpace",
    tagline: "AI Project & Contract Management",
    url: "https://pmspace.ai/",
    color: "#8b5cf6",
    category: "Project Management",
    description:
      "AI-powered project management platform for construction, infrastructure, and engineering teams.",
    longDescription:
      "PMSpace is the flagship project management platform in the Space AI suite. It manages the full project lifecycle — contracts, RFIs, submittals, budgets, change orders, owner reporting, and project close-out. Construction and infrastructure teams use it to replace fragmented spreadsheets and email threads with a single source of project truth.",
    keyFeatures: [
      "Contract management with change order tracking",
      "RFI and submittal workflow management",
      "Budget tracking and cost forecasting",
      "Owner reporting and project dashboards",
      "Document control and version management",
    ],
    whyItComplements: [
      "Project developers using PMSpace to manage construction often use SpaceNexus to raise equity or debt capital — the project data already exists in PMSpace",
      "Contractors and owners who manage projects in PMSpace frequently need a VDR for asset sale or capital raise at project completion",
      "Both tools are purpose-built for the construction and infrastructure industry",
    ],
    highlights: [
      "Replaces spreadsheets for contract and cost management",
      "AI surfaces project risks before they become delays",
      "Built for construction, not adapted from generic PM tools",
    ],
  },
  {
    slug: "spacecrm",
    name: "SpaceCRM",
    tagline: "Multi-Channel AI CRM for BD Teams",
    url: "https://spacecrm.net/",
    color: "#f97316",
    category: "CRM & Business Development",
    description:
      "AI-powered CRM platform for business development, pipeline management, and deal tracking.",
    longDescription:
      "SpaceCRM manages the complete business development pipeline from first contact to closed deal. It covers lead management, pipeline tracking, communication history, follow-up automation, and revenue reporting. BD teams in construction, real estate, and professional services use it to manage complex, long-cycle sales with multiple stakeholders.",
    keyFeatures: [
      "Visual deal pipeline with stage tracking",
      "Contact and account management with communication history",
      "AI-assisted follow-up recommendations",
      "Multi-channel outreach tracking (email, calls, meetings)",
      "Revenue forecasting and BD performance reports",
    ],
    whyItComplements: [
      "Firms using SpaceNexus to manage investor and buyer relationships often need a proper CRM to track those relationships across the full deal lifecycle",
      "Capital raising involves managing multiple investor contacts across long timelines — exactly what CRM is built for",
      "Both tools serve deal-driven organizations where relationship management and document management go hand in hand",
    ],
    highlights: [
      "Purpose-built for long-cycle B2B deal pipelines",
      "AI surfaces follow-up actions before deals go cold",
      "Covers the full BD lifecycle from prospect to close",
    ],
  },
];

export function getProductBySlug(slug: string): EcosystemProduct | undefined {
  return ecosystemProducts.find((p) => p.slug === slug);
}
