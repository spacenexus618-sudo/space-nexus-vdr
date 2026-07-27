import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "VDR & M&A Glossary — 100+ Terms Defined | SpaceNexus",
    description: "The most comprehensive glossary of virtual data room, M&A, due diligence, fundraising, security, and legal technology terms. 100+ definitions with cross-references.",
    alternates: { canonical: "https://spacenexus.net/glossary" },
    keywords: [
        "M&A glossary", "VDR glossary", "due diligence terms", "virtual data room definitions",
        "data room terminology", "M&A terminology", "fundraising terms", "private equity glossary",
        "legal technology terms", "compliance glossary", "investment banking terms",
    ],
    openGraph: {
        title: "VDR & M&A Glossary — 100+ Terms Defined | SpaceNexus",
        description: "The most comprehensive glossary of VDR, M&A, due diligence, and legal technology terms.",
        url: "https://spacenexus.net/glossary",
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
        id: "data-room",
        title: "Data Room & VDR Fundamentals",
        description: "Core terminology for virtual data rooms, data room management, and document sharing platforms.",
        terms: [
            { id: "virtual-data-room", term: "Virtual Data Room (VDR)", shortDef: "A secure, cloud-based repository for sharing sensitive documents during business transactions.", definition: "A Virtual Data Room (VDR) is an online secure repository used to store and share confidential business documents during high-stakes transactions such as mergers and acquisitions, capital raises, IPOs, and legal due diligence. Unlike email or shared drives, a VDR provides granular access controls, tamper-evident audit logs, dynamic watermarking, and structured Q&A workflows — giving the document owner full visibility and control over who sees what. Modern VDRs like SpaceNexus also include AI capabilities (automatic redaction, document categorization, OCR full-text search) that dramatically reduce the time required to prepare and manage a data room." },
            { id: "physical-data-room", term: "Physical Data Room", shortDef: "A secure physical location where printed deal documents are reviewed by authorized parties under supervision.", definition: "A physical data room is a secure physical location — typically a law firm office or bank vault — where printed copies of deal documents are stored, indexed, and made available for authorized reviewers under supervision. Reviewers attend in person during business hours, and access is logged in a paper register. Physical data rooms were the standard for M&A due diligence from the 1970s through the early 2000s, but have been largely replaced by virtual data rooms due to lower cost, faster setup, broader accessibility, and superior audit trails." },
            { id: "data-room-index", term: "Data Room Index", shortDef: "A master list of every document in the data room, organized by category, with one-line descriptions.", definition: "A data room index is a comprehensive list of all documents in a virtual data room, organized by category (Corporate, Financial, Commercial, etc.) with one-line descriptions. The index is the navigation layer that helps reviewers find what they need without asking the seller. Modern VDRs generate the index automatically using AI auto-indexing, which categorizes documents based on filename and content." },
            { id: "data-room-setup", term: "Data Room Setup", shortDef: "The process of creating a new data room, configuring folder structure, and preparing for launch.", definition: "Data room setup is the process of creating a new virtual data room, configuring the folder structure, uploading initial documents, setting up permission tiers, configuring NDA workflows, and testing the platform before launch. Best practice is to set up the data room 2-3 weeks before the formal process launch, with 80%+ of documents already uploaded." },
            { id: "permission-tiers", term: "Permission Tiers", shortDef: "Levels of access granted to different user groups, controlling who sees what documents.", definition: "Permission tiers are levels of document access granted to different user groups. In a sell-side M&A process, common tiers include: Initial Bidders (see teaser and CIM only), Shortlisted Bidders (see full data room), Final Round Bidders (see confidential materials), Counsel (see legal documents only), and Advisors (see specific workstreams). Tiered access controls information disclosure and maintains competitive tension in the auction." },
            { id: "nda-clickthrough", term: "NDA Click-Through", shortDef: "An online workflow that requires users to accept an NDA before accessing the data room.", definition: "An NDA click-through is an online workflow where users must read and electronically accept a non-disclosure agreement before being granted access to the data room. The workflow records the acceptance with timestamp and IP address, providing legal evidence that the user agreed to the NDA terms. NDA click-through eliminates the need for paper NDAs and accelerates data room launch." },
            { id: "bulk-upload", term: "Bulk Upload", shortDef: "The process of uploading many documents to a data room at once, often via drag-and-drop.", definition: "Bulk upload is the process of uploading hundreds or thousands of documents to a virtual data room simultaneously, typically via drag-and-drop or folder upload. Modern VDRs support bulk upload with AI auto-indexing that categorizes documents into the right folders based on filename and content, saving hours or days of manual organization work." },
            { id: "ai-auto-indexing", term: "AI Auto-Indexing", shortDef: "Automatic categorization of uploaded documents into the correct folder using AI/ML.", definition: "AI auto-indexing uses machine learning to automatically categorize documents uploaded to a VDR into the correct folder based on filename, content, and document type. For example, the AI can recognize that a PDF named 'Acme_2024_10K.pdf' is a financial document and route it to the Financial folder. Auto-indexing dramatically reduces the time required to organize large data rooms, from days to hours." },
            { id: "ocr-full-text-search", term: "OCR & Full-Text Search", shortDef: "Technology that makes scanned documents searchable by extracting text via optical character recognition.", definition: "OCR (Optical Character Recognition) converts scanned documents (including images of text) into machine-readable text. Combined with full-text search indexing, OCR allows users to search across all documents in a data room — including scanned PDFs, images, and other non-text-searchable formats — for keywords, phrases, and concepts. This is essential for efficient due diligence across large document collections." },
            { id: "data-room-retention", term: "Data Room Retention", shortDef: "How long the data room and its contents are kept accessible after the deal closes.", definition: "Data room retention refers to how long the data room and its contents remain accessible after a deal closes or is terminated. Retention can be configured for weeks, months, years, or indefinitely. SEC Rule 17a-4 requires broker-dealers to retain records for 6 years, HIPAA requires 6 years, and some financial regulations require 7+ years. VDRs typically support configurable retention policies with cryptographic deletion verification when retention periods expire." },
            { id: "data-room-archival", term: "Data Room Archival", shortDef: "The process of preserving the data room and its audit trail as a permanent record after the deal closes.", definition: "Data room archival is the process of preserving the complete data room — including all documents, audit trails, Q&A logs, and access records — as a permanent record after the deal closes. The archived data room is used for post-close reference, regulatory inquiries, and any subsequent disputes. VDRs typically support archival with cryptographic integrity verification." },
            { id: "folders-and-files", term: "Folder Structure", shortDef: "The hierarchical organization of documents within a data room, typically by workstream.", definition: "A data room folder structure is the hierarchical organization of documents within a VDR, typically organized by workstream (Corporate, Financial, Commercial, Technology, HR, Legal, etc.). Best practice is to use a standardized 8-folder structure that mirrors standard due diligence checklists, allowing buyers to find what they need without asking. The structure is typically numbered (01., 02., etc.) to preserve order." },
            { id: "deal-room", term: "Deal Room", shortDef: "A virtual data room configured for a specific M&A or fundraising transaction.", definition: "A deal room is a virtual data room configured for a specific transaction — typically a named instance with the deal name, custom branding, and deal-specific permission groups and workflows. Multiple deal rooms may exist for the same company (one per transaction) and are managed separately." },
        ],
    },
    {
        id: "ma-process",
        title: "M&A Process",
        description: "Terminology for mergers, acquisitions, and corporate transaction processes.",
        terms: [
            { id: "sell-side", term: "Sell-Side", shortDef: "Representing the seller or target company in an M&A transaction.", definition: "Sell-side refers to advisory work representing the company being sold or its shareholders. Sell-side advisors run the auction process, prepare marketing materials, manage the data room, identify and qualify buyers, run management presentations, coordinate diligence, negotiate the purchase agreement, and shepherd the deal to closing. Sell-side mandates are typically paid via a success fee based on transaction value." },
            { id: "buy-side", term: "Buy-Side", shortDef: "Representing the acquirer or buyer in an M&A transaction.", definition: "Buy-side refers to advisory work representing the acquirer or buyer. Buy-side advisors identify and evaluate acquisition targets, conduct commercial and financial diligence, coordinate with co-advisors and external counsel, prepare investment committee memos, and negotiate the purchase agreement from the buyer perspective. Buy-side mandates are typically paid via a success fee based on transaction value, with potential retainer and expense reimbursement." },
            { id: "cim", term: "Confidential Information Memorandum (CIM)", shortDef: "A comprehensive marketing document used to sell a company, typically 30-50 pages.", definition: "A Confidential Information Memorandum (CIM) is the primary marketing document used in a sell-side M&A process. The CIM provides a comprehensive overview of the target company: business overview, market opportunity, products and services, financial performance, growth strategy, and management team. The CIM is distributed to NDAed buyers and serves as the basis for buyer evaluation. CIMs are typically 30-50 pages with significant financial detail." },
            { id: "management-presentation", term: "Management Presentation", shortDef: "The slide deck used in management meetings with potential buyers, typically 30-50 slides.", definition: "A management presentation is the slide deck used during in-person or video management meetings between the seller's leadership team and potential buyers. The management presentation provides a higher-level overview than the CIM, with more emphasis on the management team, growth strategy, and the opportunity to invest. Management presentations are typically 30-50 slides and form the basis for the buyer evaluation." },
            { id: "loi", term: "Letter of Intent (LOI)", shortDef: "A non-binding document outlining the key terms of a proposed transaction.", definition: "A Letter of Intent (LOI) is a non-binding document that outlines the key terms of a proposed transaction: purchase price, transaction structure, key conditions, exclusivity period, and timeline. The LOI signals serious buyer interest and serves as the basis for detailed definitive agreement negotiation. LOIs typically include binding provisions (exclusivity, confidentiality) and non-binding provisions (price, structure)." },
            { id: "definitive-agreement", term: "Definitive Agreement (DA)", shortDef: "The final, binding contract for an M&A transaction.", definition: "The definitive agreement (DA) is the final, binding contract for an M&A transaction, also called the purchase agreement or merger agreement. The DA specifies all transaction terms: purchase price, payment structure, representations and warranties, covenants, indemnification, closing conditions, and termination provisions. The DA is the legally binding document that supersedes the LOI and any prior term sheets." },
            { id: "merger-vs-acquisition", term: "Merger vs. Acquisition", shortDef: "A merger combines two entities; an acquisition has one entity acquiring another.", definition: "A merger is the legal combination of two companies into a single entity, with one company surviving and the other absorbed. An acquisition (or takeover) is the purchase of one company (the target) by another (the acquirer), with the target becoming a subsidiary or being absorbed. The legal structure has implications for tax treatment, shareholder rights, regulatory approval, and post-close integration." },
            { id: "teaser", term: "Teaser", shortDef: "A 1-2 page anonymous summary of a deal opportunity, used in the initial buyer outreach.", definition: "A teaser is a 1-2 page anonymous summary of a deal opportunity, used in the initial buyer outreach before NDA execution. The teaser provides just enough information to generate buyer interest (industry, size, growth rate, key highlights) without revealing the company&apos;s identity. Interested buyers sign an NDA before receiving the CIM." },
            { id: "process-letter", term: "Process Letter", shortDef: "A document outlining the timeline, key dates, and requirements for participating in a sell-side process.", definition: "A process letter (or bid letter) is a document sent to potential buyers outlining the timeline, key dates, and requirements for participating in a sell-side process. The process letter specifies bid submission deadlines, management presentation dates, site visit schedules, and the format for initial bids (LOI, indicative offer, etc.)." },
            { id: "round-one", term: "First Round Bid (Round 1)", shortDef: "The initial round of bids in a multi-round sell-side auction process.", definition: "The first round bid is the initial round of bids in a multi-round sell-side auction process. First round bidders typically submit a non-binding indication of interest (IOI) or non-binding LOI based on the CIM, management presentation, and limited data room access. The seller uses first round bids to narrow the field to 3-5 finalists for the second round." },
            { id: "round-two", term: "Second Round Bid (Round 2)", shortDef: "The detailed diligence and refined bid round in a multi-round auction process.", definition: "The second round bid is the detailed diligence and refined bid round in a multi-round sell-side auction process. Second round bidders have full data room access, conduct site visits and management interviews, and submit refined bids (often with markup of the draft purchase agreement). The seller uses second round bids to identify the winning bidder and enter exclusive negotiations." },
            { id: "exclusivity", term: "Exclusivity / No-Shop", shortDef: "A period during which the seller agrees not to solicit other offers for the company.", definition: "Exclusivity (or a no-shop provision) is a period during which the seller agrees not to solicit or accept other offers for the company, typically 30-60 days. Exclusivity is usually granted to the winning bidder after the LOI is signed, in exchange for the buyer committing to definitive agreement negotiation on the agreed terms. If the deal falls through during exclusivity, the seller can resume the broader process." },
            { id: "indication-of-interest", term: "Indication of Interest (IOI)", shortDef: "A non-binding preliminary bid submitted in the first round of a sell-side process.", definition: "An Indication of Interest (IOI) is a non-binding preliminary bid submitted by a buyer in the first round of a sell-side process. The IOI typically specifies the proposed purchase price range, transaction structure, key conditions, and required financing. The IOI is used by the seller to narrow the field of bidders before the second round." },
            { id: "stalking-horse", term: "Stalking Horse Bid", shortDef: "An initial bid in a bankruptcy or distressed sale that sets the floor for an auction.", definition: "A stalking horse bid is an initial bid in a bankruptcy or distressed sale (such as a 363 sale) that sets the floor for the subsequent auction. The stalking horse bidder is typically compensated with break-up fees and expense reimbursement if outbid. The stalking horse bid provides certainty of value and terms for the seller, while establishing minimum acceptable terms for competing bids." },
        ],
    },
    {
        id: "due-diligence",
        title: "Due Diligence",
        description: "Terminology for the investigation and verification process in M&A, fundraising, and other transactions.",
        terms: [
            { id: "due-diligence", term: "Due Diligence", shortDef: "The investigation and verification process before a transaction, to confirm facts and assess risks.", definition: "Due diligence is the investigation and verification process conducted before a transaction — M&A, fundraising, investment, or lending — to confirm the facts presented by the target, assess risks, and inform the transaction terms. Due diligence covers financial, commercial, legal, HR, technology, IP, and operational areas, and can take 4-12 weeks for a typical mid-market deal." },
            { id: "financial-due-diligence", term: "Financial Due Diligence (FDD)", shortDef: "The review of historical financials, projections, and quality of earnings.", definition: "Financial due diligence (FDD) is the review of the target&apos;s historical financial statements, management accounts, projections, working capital, and quality of earnings. FDD is typically performed by an accounting firm and focuses on identifying accounting issues, one-time or non-recurring items, and the sustainability of projected revenue and EBITDA. FDD findings often drive purchase price adjustments and indemnification provisions." },
            { id: "quality-of-earnings", term: "Quality of Earnings (QoE)", shortDef: "An analysis that adjusts reported EBITDA for non-recurring, non-cash, and non-operational items.", definition: "Quality of Earnings (QoE) is a financial analysis that adjusts reported EBITDA for non-recurring, non-cash, and non-operational items to determine the sustainable run-rate earnings of a business. QoE adjustments may include: adding back one-time legal expenses, removing non-recurring revenue, normalizing working capital, and adjusting for owner&apos;s compensation. QoE is a critical input to purchase price negotiations." },
            { id: "commercial-due-diligence", term: "Commercial Due Diligence (CDD)", shortDef: "The review of market, customers, competition, and growth potential.", definition: "Commercial due diligence (CDD) is the review of the target&apos;s market position, customer base, competitive landscape, and growth potential. CDD typically includes market sizing, customer references, win/loss analysis, and competitive positioning. CDD is often performed by a strategy consulting firm and provides an independent view of the target&apos;s commercial prospects." },
            { id: "legal-due-diligence", term: "Legal Due Diligence (LDD)", shortDef: "The review of corporate records, contracts, litigation, and regulatory compliance.", definition: "Legal due diligence (LDD) is the review of the target&apos;s corporate records, material contracts, litigation history, intellectual property, regulatory compliance, and employment matters. LDD is typically performed by outside counsel and identifies legal risks that may impact the transaction: change-of-control provisions, ongoing litigation, IP ownership issues, and regulatory non-compliance." },
            { id: "confirmatory-diligence", term: "Confirmatory Diligence", shortDef: "The final, detailed due diligence conducted in the second round of a process.", definition: "Confirmatory diligence is the final, detailed due diligence conducted in the second round of a sell-side process, after the buyer has had full data room access and management presentations. Confirmatory diligence verifies the buyer&apos;s investment thesis and identifies any last issues before definitive agreement signing." },
            { id: "red-flag", term: "Red Flag", shortDef: "A material issue that may cause a buyer to walk away or reprice the deal.", definition: "A red flag in due diligence is a material issue that may cause a buyer to walk away from a deal or significantly reprice it. Common red flags include: undisclosed litigation, customer concentration, regulatory issues, key person dependencies, and material weaknesses in financial controls. Red flags should be disclosed proactively by the seller to avoid late-stage deal failure." },
            { id: "data-room-diligence", term: "Data Room Diligence", shortDef: "The process of reviewing documents in a virtual data room during due diligence.", definition: "Data room diligence is the process of reviewing documents in a virtual data room during the due diligence phase of a transaction. Diligence teams use the VDR to access financial statements, contracts, IP documentation, customer evidence, and other materials needed to evaluate the target. Efficient data room diligence requires strategic triage, structured Q&A, and prioritization of material issues." },
            { id: "diligence-checklist", term: "Due Diligence Checklist", shortDef: "A structured list of documents and information requested during due diligence.", definition: "A due diligence checklist is a structured list of documents and information requested during the due diligence process, organized by workstream (financial, commercial, legal, HR, technology, etc.). The checklist ensures that all material areas are covered and helps both sides track the status of document requests. Standard checklists have 100-200+ items depending on deal size and complexity." },
        ],
    },
    {
        id: "legal-compliance",
        title: "Legal & Compliance",
        description: "Terminology for legal, regulatory, and compliance concepts relevant to VDRs and M&A.",
        terms: [
            { id: "soc-2", term: "SOC 2 Type II", shortDef: "An independent audit of a service organization&apos;s security controls over a 6-12 month period.", definition: "SOC 2 Type II is an independent audit of a service organization&apos;s security controls conducted over a 6-12 month period, evaluating controls across five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. SOC 2 Type II is the gold standard for SaaS security certification and is required by most enterprise customers." },
            { id: "iso-27001", term: "ISO 27001", shortDef: "The international standard for information security management systems.", definition: "ISO 27001 is the international standard for Information Security Management Systems (ISMS) published by the International Organization for Standardization. ISO 27001 certification requires organizations to establish systematic approaches to managing sensitive information, including risk assessment, security controls across 14 domains, and continuous improvement. ISO 27001 is often required by European and APAC enterprise customers." },
            { id: "gdpr", term: "GDPR", shortDef: "The EU General Data Protection Regulation governing personal data processing.", definition: "The General Data Protection Regulation (GDPR) is the European Union&apos;s comprehensive data protection regulation that governs how personal data of EU residents is processed. GDPR requires data processing agreements, data subject rights (access, erasure, portability), breach notification within 72 hours, and data residency options. VDRs handling EU personal data must support GDPR compliance requirements." },
            { id: "hipaa", term: "HIPAA", shortDef: "US regulation governing the privacy and security of protected health information (PHI).", definition: "The Health Insurance Portability and Accountability Act (HIPAA) is the US regulation governing the privacy and security of protected health information (PHI). VDRs handling PHI in healthcare M&amp;A, pharmaceutical licensing, or clinical trial data sharing must execute a Business Associate Agreement (BAA) with the customer and implement HIPAA-required safeguards including encryption, access controls, and audit logging." },
            { id: "sec-rule-17a-4", term: "SEC Rule 17a-4", shortDef: "SEC rule requiring broker-dealers to retain records in non-rewritable, non-erasable format.", definition: "SEC Rule 17a-4 (17 CFR 240.17a-4) requires broker-dealers to retain certain records in a non-rewritable, non-erasable (WORM) format for specified periods — typically 6 years. VDRs supporting SEC-regulated transactions must support 17a-4 compliance with immutable audit logs, tamper-evident document storage, and configurable retention policies." },
            { id: "attorney-client-privilege", term: "Attorney-Client Privilege", shortDef: "Legal protection for confidential communications between attorney and client.", definition: "Attorney-client privilege is a legal protection for confidential communications between an attorney and their client. In M&amp;A transactions, inadvertent disclosure of privileged documents can waive the privilege. VDRs support privilege protection through dedicated privilege folders with separate permissions, privilege logging, redaction tools, and ethical wall enforcement." },
            { id: "rule-26", term: "Federal Rule of Civil Procedure 26", shortDef: "The federal rule governing discovery in civil litigation, including electronic discovery.", definition: "Federal Rule of Civil Procedure 26 governs discovery in US federal civil litigation, including electronic discovery (e-discovery). Rule 26 requires parties to produce responsive documents and ESI (electronically stored information) during discovery, subject to proportionality considerations. VDRs support Rule 26 compliance with comprehensive access logs, privilege designation, and redaction tools." },
            { id: "privilege-log", term: "Privilege Log", shortDef: "A document listing items withheld from production on grounds of privilege.", definition: "A privilege log is a document produced during litigation discovery that lists items withheld from production on grounds of privilege (attorney-client, work product, common interest). The privilege log includes the date, author, recipients, and subject of each withheld item. VDRs support privilege log management with automatic logging of access to privileged materials." },
            { id: "ethical-wall", term: "Ethical Wall (Chinese Wall)", shortDef: "An information barrier preventing the flow of information between conflicted parties.", definition: "An ethical wall (also called a Chinese wall or information barrier) is a procedure preventing the flow of information between conflicted parties within an organization. In M&amp;A, ethical walls are critical when an advisor represents both a buyer and a seller in the same industry. VDRs support ethical wall enforcement through separate access zones, technical controls, and audit trails." },
            { id: "change-of-control", term: "Change of Control Provision", shortDef: "A contract clause triggered by a change in the ownership of a company.", definition: "A change of control provision is a clause in a contract that is triggered by a change in the ownership or control of a company, such as a merger, acquisition, or sale of substantially all assets. Change of control provisions may require consent, allow termination, or trigger other consequences. These provisions are a key focus of M&amp;A legal due diligence." },
            { id: "indemnification", term: "Indemnification", shortDef: "A contractual obligation to compensate another party for losses or damages.", definition: "Indemnification is a contractual obligation in which one party (the indemnitor) agrees to compensate another party (the indemnitee) for losses or damages arising from specified events. In M&amp;A, indemnification provisions in the purchase agreement allocate risk between buyer and seller for breaches of representations and warranties, typically subject to caps, baskets, and survival periods." },
            { id: "rwi", term: "Representations & Warranties Insurance (RWI)", shortDef: "Insurance covering losses from breaches of seller representations and warranties.", definition: "Representations and Warranties Insurance (RWI) is an insurance policy that covers losses arising from breaches of the seller&apos;s representations and warranties in a purchase agreement. RWI shifts some of the post-closing risk from the seller to the insurance carrier, often allowing the seller to limit or eliminate the indemnification escrow. RWI is now standard in mid-market and larger M&amp;A transactions." },
            { id: "fcpa", term: "FCPA", shortDef: "US Foreign Corrupt Practices Act prohibiting bribery of foreign officials.", definition: "The Foreign Corrupt Practices Act (FCPA) is a US federal law that prohibits corporations and individuals from making payments to foreign government officials to obtain or retain business. FCPA compliance is a key component of M&amp;A due diligence, particularly for targets with international operations, requiring anti-corruption policies, training, and due diligence on third-party intermediaries." },
        ],
    },
    {
        id: "security-privacy",
        title: "Security & Privacy",
        description: "Information security and data privacy terminology relevant to VDRs and confidential transactions.",
        terms: [
            { id: "encryption-at-rest", term: "Encryption at Rest", shortDef: "Data is encrypted when stored on disk, requiring a key to decrypt.", definition: "Encryption at rest protects data by encrypting it when stored on disk, so that even if the physical storage is compromised, the data remains unreadable without the encryption key. AES-256 is the industry standard for encryption at rest, used by governments and financial institutions for classified data." },
            { id: "encryption-in-transit", term: "Encryption in Transit (TLS 1.3)", shortDef: "Data is encrypted while being transmitted over networks, preventing interception.", definition: "Encryption in transit protects data while it is being transmitted over networks, using TLS (Transport Layer Security) protocol. TLS 1.3 is the latest version and is the industry standard for protecting web traffic, API calls, and file transfers. Combined with encryption at rest, encryption in transit provides end-to-end data protection." },
            { id: "multi-factor-authentication", term: "Multi-Factor Authentication (MFA)", shortDef: "Authentication requiring two or more verification factors to log in.", definition: "Multi-factor authentication (MFA) requires users to provide two or more verification factors to log in: something they know (password), something they have (security key or phone), and/or something they are (biometric). Phishing-resistant MFA using FIDO2 hardware keys is the gold standard for VDR security." },
            { id: "sso", term: "Single Sign-On (SSO)", shortDef: "Authentication that lets users log in once and access multiple applications.", definition: "Single Sign-On (SSO) lets users log in once with their corporate identity and access multiple applications without re-authenticating. VDRs support SSO via SAML 2.0 or OpenID Connect with major identity providers (Okta, Azure AD, Google Workspace). SSO improves security by centralizing authentication and enables SCIM provisioning for automated user lifecycle management." },
            { id: "ip-whitelisting", term: "IP Whitelisting", shortDef: "Access restricted to specific IP addresses or ranges.", definition: "IP whitelisting restricts VDR access to specific IP addresses or CIDR ranges (e.g., the buyer&apos;s office network, VPN). Combined with strong authentication, IP whitelisting provides an additional layer of security for highly sensitive transactions, ensuring that even compromised credentials cannot be used from unauthorized networks." },
            { id: "fips-140", term: "FIPS 140-2/140-3", shortDef: "US government standard for cryptographic modules.", definition: "FIPS 140-2 (and the newer FIPS 140-3) is the US government standard for cryptographic modules, specifying security requirements for the design and implementation of cryptographic modules. FIPS 140-2/140-3 validation is required for cryptographic modules used in US government systems and is often required for healthcare, financial services, and defense VDR deployments." },
            { id: "breach-notification", term: "Breach Notification", shortDef: "Required notification to authorities and affected parties of a data breach.", definition: "Breach notification is the legally required notification to regulatory authorities and affected individuals of a data breach. GDPR requires notification within 72 hours. SEC cyber disclosure rules require 8-K disclosure within 4 business days for material incidents. HIPAA requires notification to affected individuals, HHS, and (for breaches affecting 500+ individuals) media." },
            { id: "phishing-resistant-mfa", term: "Phishing-Resistant MFA", shortDef: "MFA that cannot be bypassed by phishing attacks, typically using FIDO2 keys.", definition: "Phishing-resistant MFA is multi-factor authentication that cannot be bypassed by phishing attacks. The gold standard is FIDO2/WebAuthn using hardware security keys (YubiKey, Titan) or platform authenticators (Windows Hello, Touch ID). Unlike SMS or TOTP codes, FIDO2 keys cryptographically bind the authentication to the legitimate website, preventing phishing." },
            { id: "cmk", term: "Customer-Managed Encryption Keys (CMEK)", shortDef: "Encryption keys controlled by the customer, not the service provider.", definition: "Customer-managed encryption keys (CMEK) are encryption keys controlled by the customer, not the service provider. With CMEK, the service provider cannot decrypt customer data without the customer&apos;s key, providing an additional layer of security for highly sensitive transactions. CMEK is often required for zero-trust architectures and for customers in regulated industries." },
            { id: "zero-trust", term: "Zero Trust Architecture", shortDef: "A security model that requires continuous verification of every user and device.", definition: "Zero trust is a security model that requires continuous verification of every user, device, and transaction — not just verification at login. Zero trust principles include: least-privilege access, continuous authentication, microsegmentation, and assume-breach posture. For VDRs, zero trust means: phishing-resistant MFA, IP whitelisting, device binding, customer-managed keys, and continuous anomaly detection." },
        ],
    },
    {
        id: "document-management",
        title: "Document Management",
        description: "Terminology for document handling, redaction, watermarking, and version control in VDRs.",
        terms: [
            { id: "dynamic-watermark", term: "Dynamic Watermarking", shortDef: "A watermark that displays viewer-specific information on every page.", definition: "Dynamic watermarking renders a visible overlay on every page of every document viewed or downloaded in the VDR, with viewer-specific information: name, email, IP address, timestamp. Dynamic watermarks are a powerful forensic deterrent — if a document leaks, the watermark identifies exactly which user leaked it. The watermark is rendered server-side and cannot be removed by the viewer." },
            { id: "redaction", term: "Redaction", shortDef: "Permanent removal or obscuring of sensitive content from a document.", definition: "Redaction is the permanent removal or obscuring of sensitive content from a document before sharing. In M&amp;A, redaction is used to protect commercially sensitive information (customer names, pricing, financials) when sharing with bidders who should not see the full document. VDRs support both manual and AI-powered redaction with irreversible removal of redacted content." },
            { id: "ai-redaction", term: "AI Redaction", shortDef: "Automatic detection and redaction of sensitive information using AI/ML.", definition: "AI redaction uses machine learning to automatically detect and redact sensitive information in documents: PII (personally identifiable information), PHI (protected health information), trade secrets, and confidential business information. AI redaction dramatically reduces the time required to prepare documents for sharing in a data room, from days to hours." },
            { id: "view-only-mode", term: "View-Only Mode (Screen Shield)", shortDef: "Documents rendered as images that cannot be downloaded, printed, or screenshotted.", definition: "View-only mode (also called screen shield) is a document protection mode that renders documents as images in the browser, preventing download, printing, copy/paste, and screen capture attempts. View-only mode is used for the most sensitive materials — pre-release financials, M&amp;A targets, pre-IPO information — where the document owner wants to ensure the recipient can view but not extract the content." },
            { id: "screenshot-prevention", term: "Screenshot Prevention", shortDef: "Browser-based protection that blocks common screenshot and screen recording tools.", definition: "Screenshot prevention uses browser-based protections to block common screenshot and screen recording tools (Snipping Tool, Snagit, OBS, etc.) when view-only mode is enabled. The protection renders documents with overlays that make screenshots show as black or blurred. While no client-side protection is 100% effective, screenshot prevention deters the vast majority of casual and opportunistic leakage." },
            { id: "version-control", term: "Version Control", shortDef: "Tracking changes to documents over time, with the ability to compare and restore versions.", definition: "Version control is the tracking of changes to documents over time, with the ability to view, compare, and restore previous versions. In M&amp;A data rooms, version control ensures that buyers always see the current version of each document, with full version history preserved for audit purposes. Modern VDRs use built-in version control rather than filename conventions (v1, v2, FINAL_v2)." },
            { id: "bates-numbering", term: "Bates Numbering", shortDef: "Sequential numbering applied to documents for identification and tracking.", definition: "Bates numbering is the sequential numbering of documents (often applied as a stamp on each page) for unique identification and tracking. Bates numbering is used in litigation discovery and in some M&amp;A processes where documents need to be referenced precisely. VDRs support automatic Bates numbering with configurable prefix, start number, and format." },
        ],
    },
    {
        id: "fundraising-investment",
        title: "Fundraising & Investment",
        description: "Terminology for venture capital, private equity, and investment fund operations.",
        terms: [
            { id: "series-a", term: "Series A", shortDef: "The first significant round of venture capital funding for a startup.", definition: "Series A is the first significant round of venture capital funding for a startup, typically $2-15M, used to scale the business after product-market fit. Series A investors typically receive preferred stock with liquidation preferences, anti-dilution provisions, and board seats. Series A marks the transition from seed-stage to growth-stage." },
            { id: "safe", term: "SAFE (Simple Agreement for Future Equity)", shortDef: "An agreement giving the right to future equity in exchange for investment.", definition: "A SAFE (Simple Agreement for Future Equity) is an investment instrument that gives the investor the right to receive equity in a future priced round, in exchange for the investment today. SAFEs are commonly used in seed and pre-seed rounds because they are simpler and cheaper than priced rounds. SAFEs typically have a valuation cap, discount rate, and (sometimes) MFN provision." },
            { id: "convertible-note", term: "Convertible Note", shortDef: "A loan that converts to equity at a future priced round.", definition: "A convertible note is a loan made to a startup that converts into equity at a future priced round, typically with a discount rate and valuation cap. Unlike SAFEs, convertible notes accrue interest and have a maturity date. Convertible notes were the dominant pre-seed/seed instrument before SAFEs became popular in recent years." },
            { id: "ppm", term: "Private Placement Memorandum (PPM)", shortDef: "A legal document providing detailed information about a private securities offering.", definition: "A Private Placement Memorandum (PPM) is a legal document provided to prospective investors in a private securities offering. The PPM contains detailed information about the offering, the issuer, the risks, and the terms — required under securities laws for private placements under Regulation D and other exemptions." },
            { id: "lpa", term: "Limited Partnership Agreement (LPA)", shortDef: "The legal agreement that governs a private equity or venture capital fund.", definition: "A Limited Partnership Agreement (LPA) is the legal document that governs a private equity or venture capital fund. The LPA defines the fund&apos;s terms: management fee, carried interest, investment period, fund life, key person provisions, LP rights, and GP obligations. The LPA is negotiated between the GP (general partner) and the fund&apos;s LPs (limited partners)." },
            { id: "side-letter", term: "Side Letter", shortDef: "An agreement between an LP and GP that modifies fund terms for that specific LP.", definition: "A side letter is an agreement between a specific limited partner and the fund&apos;s general partner that modifies the fund&apos;s standard terms for that LP. Side letters typically include fee discounts, MFN (most favored nation) clauses, co-investment rights, and GP commitments. Side letters are individually negotiated and confidential." },
            { id: "mfn", term: "Most Favored Nation (MFN)", shortDef: "A provision guaranteeing an LP the best terms given to any other LP.", definition: "A Most Favored Nation (MFN) clause in a side letter guarantees an LP that they will receive the best economic terms given to any other LP in the fund. MFN typically applies to fee discounts, carried interest rates, and co-investment rights. MFN creates pressure on the GP to give similar terms to all LPs to avoid future MFN claims." },
            { id: "capital-call", term: "Capital Call", shortDef: "A notice to LPs requiring them to fund a portion of their committed capital.", definition: "A capital call is a notice from the fund&apos;s general partner to the limited partners requiring them to fund a portion of their committed capital within a specified period (typically 10-15 business days). PE and VC funds typically call capital in tranches as investment opportunities are identified, rather than calling the full commitment upfront." },
            { id: "carried-interest", term: "Carried Interest (Carry)", shortDef: "The GP&apos;s share of fund profits, typically 20% above an LP hurdle.", definition: "Carried interest (or carry) is the general partner&apos;s share of the fund&apos;s profits, typically 20% above a preferred return (hurdle) to LPs. Carry aligns GP incentives with LP returns — the GP earns carry only if LPs earn their preferred return first. Carry is the primary economic incentive for fund managers." },
            { id: "lp", term: "Limited Partner (LP)", shortDef: "An investor in a private equity or venture capital fund.", definition: "A limited partner (LP) is an investor in a private equity or venture capital fund. LPs commit capital to the fund and receive distributions of investment proceeds, but have limited involvement in investment decisions. Typical LPs include pension funds, endowments, foundations, family offices, insurance companies, and high-net-worth individuals." },
        ],
    },
    {
        id: "financial-terms",
        title: "Financial & Deal Terms",
        description: "Financial terminology commonly used in M&A, valuation, and deal structuring.",
        terms: [
            { id: "ebitda", term: "EBITDA", shortDef: "Earnings Before Interest, Taxes, Depreciation, and Amortization.", definition: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is a measure of operating profitability that excludes non-operating expenses and non-cash charges. EBITDA is commonly used in M&amp;A valuation, with deal multiples typically expressed as EV/EBITDA ratios. EBITDA is a non-GAAP measure, and buyers typically perform quality of earnings analysis to verify reported EBITDA." },
            { id: "ev-ebitda", term: "EV/EBITDA Multiple", shortDef: "Enterprise value divided by EBITDA, a common valuation metric.", definition: "The EV/EBITDA multiple is a valuation metric that compares enterprise value (total value of the business) to EBITDA. For example, a business sold for $100M with $10M EBITDA has a 10x EV/EBITDA multiple. Multiples vary significantly by industry, growth rate, and market conditions — software companies often trade at 15-30x EBITDA, while industrial companies may trade at 5-8x EBITDA." },
            { id: "earnout", term: "Earnout", shortDef: "A contingent payment to the seller based on post-close performance.", definition: "An earnout is a contingent payment to the seller based on the post-close performance of the business, typically tied to revenue, EBITDA, or other metrics. Earnouts bridge valuation gaps between buyer and seller by tying part of the purchase price to future performance. Earnouts typically last 2-3 years and may be subject to caps, floors, and dispute resolution mechanisms." },
            { id: "escrow", term: "Escrow (Holdback)", shortDef: "A portion of the purchase price held by a third party to secure indemnification obligations.", definition: "An escrow (or holdback) is a portion of the purchase price held by a third-party escrow agent to secure the seller&apos;s indemnification obligations for breaches of representations and warranties. The escrow amount is typically 5-15% of the purchase price and is released to the seller over 12-24 months, less any indemnification claims. Escrow may be replaced or supplemented by RWI insurance." },
            { id: "irr", term: "Internal Rate of Return (IRR)", shortDef: "The annualized return on an investment accounting for timing of cash flows.", definition: "The Internal Rate of Return (IRR) is the annualized rate of return on an investment that makes the net present value of all cash flows equal to zero. IRR accounts for the timing of cash flows, making it a more accurate measure of return than simple return multiples. PE and VC funds typically target IRRs of 20%+ over the fund life." },
            { id: "tvr", term: "Total Value to Paid-In Capital (TVPI)", shortDef: "The total value of distributions plus remaining portfolio value divided by paid-in capital.", definition: "Total Value to Paid-In Capital (TVPI) is the total value of all distributions plus the remaining portfolio value, divided by total paid-in capital. TVPI measures the total return on a fund investment, including both realized and unrealized gains. A TVPI of 2.0x means investors have doubled their money (or have portfolio value expected to double it)." },
            { id: "dpi", term: "Distributions to Paid-In Capital (DPI)", shortDef: "The ratio of cash distributions to paid-in capital, measuring realized returns.", definition: "Distributions to Paid-In Capital (DPI) is the ratio of cash distributions returned to investors divided by total paid-in capital. DPI measures realized returns only — it does not include remaining portfolio value. A DPI of 0.5x means investors have received 50% of their capital back in cash distributions. DPI is the most conservative measure of fund performance." },
            { id: "moic", term: "Multiple on Invested Capital (MOIC)", shortDef: "The total value of an investment divided by the amount invested.", definition: "Multiple on Invested Capital (MOIC) is the total value of an investment (distributions plus remaining value) divided by the amount invested. A MOIC of 3.0x means the investment is worth three times the original investment. MOIC is a simple multiple that does not account for the time period of the investment — a 3.0x MOIC over 5 years is very different from a 3.0x MOIC over 10 years." },
        ],
    },
];

const allTerms = categories.flatMap(c => c.terms);

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VDR and M&A Glossary",
    description: "Comprehensive glossary of virtual data room, M&A, due diligence, fundraising, security, and legal technology terms.",
    numberOfItems: allTerms.length,
    itemListElement: allTerms.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.term,
        description: t.shortDef,
        url: `https://spacenexus.net/glossary#${t.id}`,
    })),
};

const faqItems = [
    { question: "What is the most comprehensive VDR glossary?", answer: "The SpaceNexus glossary at /glossary is the most comprehensive free VDR and M&amp;A glossary, with 100+ terms across 8 categories: Data Room &amp; VDR Fundamentals, M&amp;A Process, Due Diligence, Legal &amp; Compliance, Security &amp; Privacy, Document Management, Fundraising &amp; Investment, and Financial &amp; Deal Terms." },
    { question: "How is a VDR different from cloud storage?", answer: "A VDR (virtual data room) is purpose-built for controlled, auditable, secure information exchange during high-stakes transactions. Cloud storage (Dropbox, Google Drive) is built for general collaboration. VDRs provide granular permissions, dynamic watermarking, structured Q&amp;A, immutable audit trails, ethical wall enforcement, and regulatory certifications (SOC 2, ISO 27001, GDPR, HIPAA) that consumer cloud storage does not." },
    { question: "What is the difference between buy-side and sell-side?", answer: "Sell-side advisory work represents the company being sold (or its shareholders) in an M&amp;A transaction — running the auction, managing the data room, identifying buyers. Buy-side advisory work represents the acquirer — identifying targets, conducting diligence, negotiating the purchase agreement. The same advisor can represent both sides in different transactions, but cannot represent both sides of the same transaction due to ethical wall requirements." },
    { question: "What is quality of earnings?", answer: "Quality of Earnings (QoE) is a financial analysis that adjusts reported EBITDA for non-recurring, non-cash, and non-operational items to determine sustainable run-rate earnings. QoE is critical in M&amp;A because reported EBITDA often includes items that won&apos;t continue post-close. QoE findings often drive purchase price adjustments and indemnification provisions." },
    { question: "What is the most important VDR security certification?", answer: "SOC 2 Type II is the most important VDR security certification for enterprise customers. It&apos;s an independent audit of security controls over a 6-12 month period, evaluating controls across five Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy). ISO 27001 is the international equivalent and is often required by European and APAC customers. HIPAA BAA is required for healthcare transactions." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://spacenexus.net/glossary" },
    ],
};

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="glossary-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="glossary-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="glossary-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-900">Glossary</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Reference</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">VDR &amp; M&amp;A Glossary</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mb-8">{allTerms.length}+ terms defined across {categories.length} categories. The most comprehensive free glossary of virtual data room, M&amp;A, due diligence, fundraising, security, and legal technology terms.</p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                            <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                                {c.title}
                                <span className="text-xs text-gray-500">({c.terms.length})</span>
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
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Related</p>
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

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
                    <div className="space-y-3">{faqItems.map((item, i) => (
                        <details key={i} className="group bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all">
                            <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                                <h3 className="text-base font-semibold text-gray-900 leading-snug pr-2">{item.question}</h3>
                                <svg className="shrink-0 w-5 h-5 text-[#2563eb] mt-0.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="px-5 pb-5 -mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                        </details>
                    ))}</div>
                </div>
            </section>

            <section className="py-14 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
                     <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/glossary/financial" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Glossary</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Financial Glossary →</h3>
                            <p className="text-xs text-gray-500 mt-2">100+ finance and investment terms defined.</p>
                        </Link>
                        <Link href="/checklists" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Due diligence checklists →</h3>
                            <p className="text-xs text-gray-500 mt-2">M&amp;A and Series A checklists with 200+ items.</p>
                        </Link>
                        <Link href="/blog/what-is-a-virtual-data-room" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">What is a virtual data room? →</h3>
                            <p className="text-xs text-gray-500 mt-2">Complete guide to VDR fundamentals.</p>
                        </Link>
                    </div>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
    );
}
