import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  FileText,
  FolderKanban,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartHandshake,
  LineChart,
  Megaphone,
  ScrollText,
  ShieldCheck,
  UserCog,
  Users,
  UserRoundCheck
} from "lucide-react";
import type { AdminSectionConfig } from "@/components/admin/AdminSectionPage";

const columns = [
  { key: "name", label: "Name" },
  { key: "scope", label: "Scope" },
  { key: "owner", label: "Owner" },
  { key: "status", label: "Status" }
];

export const adminSections = {
  organizations: {
    title: "Organizations",
    eyebrow: "Tenant structure",
    description: "Internal overview of GIUVA Europe, national organizations, regions, cities and local communities using static placeholder records only.",
    icon: Building2,
    summary: [
      { label: "Tenants", value: "5", detail: "Europe and country-level placeholders" },
      { label: "Local units", value: "12", detail: "Regions, cities and community branches" },
      { label: "Review", value: "3", detail: "Hierarchy records awaiting validation" }
    ],
    columns,
    rows: [
      { name: "GIUVA Europe", scope: "Europe", owner: "Enterprise governance", status: "Active" },
      { name: "GIUVA Romania", scope: "Country", owner: "National coordination", status: "Review" },
      { name: "Bucharest Community", scope: "City", owner: "Local coordination", status: "Draft" }
    ],
    emptyState: "Organization data is illustrative. Backend tenant records are not loaded into the admin shell yet.",
    searchPlaceholder: "Search organizations placeholder",
    filters: ["All", "Europe", "Country", "Local"]
  },
  users: {
    title: "Users",
    eyebrow: "Identity management",
    description: "Internal user administration placeholder for platform accounts, roles and activation states without real account data.",
    icon: Users,
    summary: [
      { label: "Accounts", value: "8", detail: "Static internal examples" },
      { label: "Roles", value: "4", detail: "Admin, coordinator, editor, volunteer" },
      { label: "Pending", value: "2", detail: "Mock account reviews" }
    ],
    columns,
    rows: [
      { name: "Platform Admin", scope: "Global", owner: "System", status: "Active" },
      { name: "Country Coordinator", scope: "Romania", owner: "National org", status: "Review" },
      { name: "Volunteer Account", scope: "Local", owner: "Community", status: "Draft" }
    ],
    emptyState: "No real users are displayed. Authentication UI and live identity management remain future work.",
    searchPlaceholder: "Search users placeholder",
    filters: ["All", "Admin", "Coordinator", "Volunteer"]
  },
  volunteers: {
    title: "Volunteers",
    eyebrow: "Volunteer identity",
    description: "Operational placeholder for volunteer identities, onboarding states, membership alignment and readiness indicators.",
    icon: UserRoundCheck,
    summary: [
      { label: "Profiles", value: "24", detail: "Static volunteer examples" },
      { label: "Onboarding", value: "6", detail: "Mock workflow records" },
      { label: "Active", value: "15", detail: "Demo readiness status" }
    ],
    columns,
    rows: [
      { name: "Volunteer Alpha", scope: "Bucharest", owner: "Local team", status: "Active" },
      { name: "Volunteer Beta", scope: "Cluj", owner: "Regional team", status: "Pending" },
      { name: "Volunteer Gamma", scope: "Training", owner: "Academy", status: "Review" }
    ],
    workflows: [
      { title: "Onboarding review", description: "Placeholder step for coordinator validation before activation.", status: "Pending" },
      { title: "Membership link", description: "Static workflow for connecting volunteer identity to an organization.", status: "Review" },
      { title: "Readiness check", description: "Future operational status for training and participation readiness.", status: "Draft" }
    ],
    emptyState: "Volunteer records are mock examples and do not collect or expose real personal data.",
    searchPlaceholder: "Search volunteers placeholder",
    filters: ["All", "Onboarding", "Active", "Review"]
  },
  programs: {
    title: "Programs", eyebrow: "Enterprise initiatives", description: "Static management view for long-term GIUVA initiatives such as Academy, Youth, Preparedness and Community programs.", icon: ClipboardList,
    summary: [{ label: "Programs", value: "10", detail: "Enterprise initiative placeholders" }, { label: "Visible", value: "7", detail: "Marked for future publication review" }, { label: "Draft", value: "3", detail: "Awaiting governance approval" }], columns,
    rows: [{ name: "GIUVA Academy", scope: "Europe", owner: "Training office", status: "Active" }, { name: "Food Solidarity", scope: "Country", owner: "Romania", status: "Review" }, { name: "Project Pulse", scope: "Europe", owner: "Operations", status: "Draft" }],
    emptyState: "Program records are static and do not modify backend program tables.", searchPlaceholder: "Search programs placeholder", filters: ["All", "Active", "Draft", "Country"]
  },
  projects: {
    title: "Projects", eyebrow: "Operational projects", description: "Internal project placeholder with status, ownership and participation readiness signals for future backend integration.", icon: FolderKanban,
    summary: [{ label: "Projects", value: "14", detail: "Demo project pipeline" }, { label: "In review", value: "5", detail: "Pending internal approval" }, { label: "Linked programs", value: "8", detail: "Static relationship examples" }], columns,
    rows: [{ name: "Community Mapping", scope: "Bucharest", owner: "GIUVA Romania", status: "Active" }, { name: "Preparedness Pilot", scope: "National", owner: "Operations", status: "Review" }, { name: "Youth Action Week", scope: "Europe", owner: "Program team", status: "Draft" }],
    workflows: [{ title: "Project approval", description: "Placeholder queue for admin review before operational activation.", status: "Queued" }, { title: "Participation assignment", description: "Future connection point between volunteers and project roles.", status: "Draft" }, { title: "Closeout review", description: "Static reminder for reporting after delivery.", status: "Pending" }],
    emptyState: "Project data is mock-only and no project records are created or updated.", searchPlaceholder: "Search projects placeholder", filters: ["All", "Active", "Review", "Draft"]
  },
  events: {
    title: "Events", eyebrow: "Scheduling operations", description: "Placeholder planning console for internal GIUVA events, attendance readiness and coordinator review.", icon: CalendarDays,
    summary: [{ label: "Events", value: "9", detail: "Static schedule examples" }, { label: "Upcoming", value: "4", detail: "Mock upcoming activities" }, { label: "Capacity checks", value: "3", detail: "Future attendance controls" }], columns,
    rows: [{ name: "Volunteer Briefing", scope: "Online", owner: "Training", status: "Ready" }, { name: "Community Day", scope: "Bucharest", owner: "Local team", status: "Review" }, { name: "Partner Roundtable", scope: "Europe", owner: "Partnerships", status: "Draft" }],
    workflows: [{ title: "Event approval", description: "Static governance checkpoint before publishing or inviting participants.", status: "Pending" }, { title: "Participant list", description: "Future operational placeholder for volunteer attendance management.", status: "Draft" }, { title: "Post-event report", description: "Reserved for future report generation and analytics alignment.", status: "Queued" }],
    emptyState: "Events are illustrative and do not expose live calendars or attendee data.", searchPlaceholder: "Search events placeholder", filters: ["All", "Upcoming", "Review", "Draft"]
  },
  training: {
    title: "Training", eyebrow: "Learning modules", description: "Internal training catalogue placeholder for courses, levels, delivery modes and future certification flows.", icon: GraduationCap,
    summary: [{ label: "Modules", value: "11", detail: "Mock training entries" }, { label: "Levels", value: "3", detail: "Intro, operational, coordinator" }, { label: "Draft", value: "4", detail: "Awaiting content validation" }], columns,
    rows: [{ name: "Volunteer Basics", scope: "Europe", owner: "Academy", status: "Active" }, { name: "Preparedness Intro", scope: "Romania", owner: "Training", status: "Review" }, { name: "Coordinator Essentials", scope: "Europe", owner: "Governance", status: "Draft" }],
    emptyState: "Training modules are placeholders. No enrollment, completion or certification records are processed.", searchPlaceholder: "Search training placeholder", filters: ["All", "Intro", "Coordinator", "Draft"]
  },
  certifications: {
    title: "Certifications", eyebrow: "Volunteer credentials", description: "Static credential review page for future training completion and volunteer certification records.", icon: BookOpenCheck,
    summary: [{ label: "Certificates", value: "18", detail: "Demo credential records" }, { label: "Expiring", value: "2", detail: "Static review examples" }, { label: "Pending issue", value: "5", detail: "Future workflow placeholder" }], columns,
    rows: [{ name: "Volunteer Basics Certificate", scope: "Europe", owner: "Academy", status: "Approved" }, { name: "Preparedness Certificate", scope: "Romania", owner: "Training", status: "Pending" }, { name: "Coordinator Certificate", scope: "Europe", owner: "Governance", status: "Review" }],
    workflows: [{ title: "Issue certificate", description: "Placeholder for future admin-controlled credential issuance.", status: "Pending" }, { title: "Expiry review", description: "Static signal for renewal or recertification workflows.", status: "Review" }, { title: "Training dependency", description: "Future link between completed training modules and certification state.", status: "Draft" }],
    emptyState: "Certification records are static and do not represent real volunteer credentials.", searchPlaceholder: "Search certifications placeholder", filters: ["All", "Approved", "Pending", "Expiring"]
  },
  partners: {
    title: "Partners", eyebrow: "Collaboration registry", description: "Internal partner management placeholder for future vetted collaboration records and visibility review.", icon: Handshake,
    summary: [{ label: "Partners", value: "7", detail: "Static partner examples" }, { label: "Review", value: "3", detail: "Awaiting governance checks" }, { label: "Visible", value: "2", detail: "Future public visibility candidates" }], columns,
    rows: [{ name: "Education Partner", scope: "Europe", owner: "Partnerships", status: "Review" }, { name: "Community Venue", scope: "Bucharest", owner: "Local team", status: "Active" }, { name: "Research Network", scope: "Europe", owner: "Governance", status: "Draft" }],
    emptyState: "Partner entries are mock-only and make no public partnership claims.", searchPlaceholder: "Search partners placeholder", filters: ["All", "Active", "Review", "Draft"]
  },
  sponsors: {
    title: "Sponsors", eyebrow: "Sponsor registry", description: "Internal-only sponsor placeholder for governance review. No sponsorship claims or payment integrations are exposed.", icon: HeartHandshake,
    summary: [{ label: "Sponsors", value: "4", detail: "Static sponsor examples" }, { label: "Restricted", value: "4", detail: "Internal visibility only" }, { label: "Review", value: "2", detail: "Compliance review placeholders" }], columns,
    rows: [{ name: "Operations Sponsor", scope: "Romania", owner: "Admin", status: "Review" }, { name: "Training Sponsor", scope: "Europe", owner: "Academy", status: "Draft" }, { name: "Local Sponsor", scope: "City", owner: "Local team", status: "Pending" }],
    emptyState: "Sponsor records are static and do not represent real sponsors or financial commitments.", searchPlaceholder: "Search sponsors placeholder", filters: ["All", "Review", "Draft", "Restricted"]
  },
  donations: {
    title: "Donations", eyebrow: "Internal donation records", description: "Static donation administration placeholder. No real payments, donor records or payment providers are connected.", icon: HandCoins,
    summary: [{ label: "Records", value: "6", detail: "Demo donation entries" }, { label: "Processing", value: "0", detail: "No live payment processing" }, { label: "Restricted", value: "100%", detail: "Internal-only financial placeholder" }], columns,
    rows: [{ name: "General Support", scope: "Romania", owner: "Finance", status: "Draft" }, { name: "Project Donation", scope: "Project", owner: "Operations", status: "Review" }, { name: "Anonymous Placeholder", scope: "Europe", owner: "Admin", status: "Pending" }],
    emptyState: "Donation entries are mock records. No real donor data, payment data or transaction processing exists here.", searchPlaceholder: "Search donations placeholder", filters: ["All", "Draft", "Review", "Restricted"]
  },
  documents: {
    title: "Documents", eyebrow: "Internal documents", description: "Document library placeholder for policies, project files and governance records without real file upload or storage integration.", icon: FileText,
    summary: [{ label: "Documents", value: "16", detail: "Static library examples" }, { label: "Versions", value: "5", detail: "Future versioning placeholder" }, { label: "Restricted", value: "9", detail: "Internal visibility examples" }], columns,
    rows: [{ name: "Volunteer Policy", scope: "Europe", owner: "Governance", status: "Review" }, { name: "Project Brief", scope: "Project", owner: "Operations", status: "Draft" }, { name: "Training Outline", scope: "Academy", owner: "Training", status: "Active" }],
    emptyState: "Documents are placeholders only. No files are uploaded, downloaded or stored by this interface.", searchPlaceholder: "Search documents placeholder", filters: ["All", "Policy", "Project", "Restricted"]
  },
  reports: {
    title: "Reports", eyebrow: "Reporting workspace", description: "Static reporting console for future operational, governance and program reporting workflows.", icon: BarChart3,
    summary: [{ label: "Reports", value: "8", detail: "Mock report records" }, { label: "Queued", value: "3", detail: "Future generation states" }, { label: "Review", value: "2", detail: "Governance review examples" }], columns,
    rows: [{ name: "Monthly Operations", scope: "Romania", owner: "Operations", status: "Queued" }, { name: "Volunteer Activity", scope: "Europe", owner: "Analytics", status: "Review" }, { name: "Project Closeout", scope: "Project", owner: "Program team", status: "Draft" }],
    workflows: [{ title: "Generate report", description: "Placeholder for future report generation from approved datasets.", status: "Queued" }, { title: "Review metrics", description: "Static step for governance review before sharing reports.", status: "Review" }, { title: "Archive output", description: "Future document library linkage for stored report outputs.", status: "Draft" }],
    emptyState: "Reports are placeholders and are not generated from live analytics or personal data.", searchPlaceholder: "Search reports placeholder", filters: ["All", "Queued", "Review", "Draft"]
  },
  gdpr: {
    title: "GDPR", eyebrow: "Privacy governance", description: "Internal GDPR request placeholder for future data subject workflows, retention review and privacy operations.", icon: ShieldCheck,
    summary: [{ label: "Requests", value: "3", detail: "Static privacy request examples" }, { label: "Open", value: "1", detail: "Mock workflow state" }, { label: "Restricted", value: "100%", detail: "Admin-only governance view" }], columns,
    rows: [{ name: "Access request", scope: "Romania", owner: "Privacy admin", status: "Pending" }, { name: "Correction request", scope: "Europe", owner: "Privacy admin", status: "Review" }, { name: "Retention review", scope: "Platform", owner: "Governance", status: "Draft" }],
    workflows: [{ title: "Request triage", description: "Static step for classifying future GDPR requests.", status: "Pending" }, { title: "Admin handling", description: "Placeholder for restricted privacy officer processing.", status: "Review" }, { title: "Completion record", description: "Future audit linkage for completed requests.", status: "Draft" }],
    emptyState: "GDPR entries are illustrative and contain no personal data.", searchPlaceholder: "Search GDPR requests placeholder", filters: ["All", "Pending", "Review", "Closed"]
  },
  memberships: {
    title: "Memberships", eyebrow: "Membership workflow", description: "Operational placeholder for user-to-organization membership records, status review and volunteer affiliation.", icon: UserCog,
    summary: [{ label: "Memberships", value: "21", detail: "Static affiliation examples" }, { label: "Pending", value: "4", detail: "Mock approval queue" }, { label: "Active", value: "13", detail: "Demo active affiliations" }], columns,
    rows: [{ name: "Volunteer membership", scope: "Bucharest", owner: "Local team", status: "Pending" }, { name: "Coordinator membership", scope: "Romania", owner: "National admin", status: "Active" }, { name: "Training membership", scope: "Academy", owner: "Training", status: "Review" }],
    workflows: [{ title: "Membership approval", description: "Placeholder queue for admin or coordinator review.", status: "Pending" }, { title: "Organization assignment", description: "Future link between user identity and tenant hierarchy.", status: "Review" }, { title: "Status renewal", description: "Static renewal checkpoint for membership lifecycle.", status: "Draft" }],
    emptyState: "Membership entries are static and do not create real memberships.", searchPlaceholder: "Search memberships placeholder", filters: ["All", "Active", "Pending", "Review"]
  },
  participation: {
    title: "Participation", eyebrow: "Volunteer operations", description: "Placeholder for volunteer participation in projects and events, including role assignment and lifecycle status.", icon: ClipboardCheck,
    summary: [{ label: "Assignments", value: "19", detail: "Static role examples" }, { label: "Open", value: "6", detail: "Future coordination queue" }, { label: "Completed", value: "8", detail: "Demo completed activity" }], columns,
    rows: [{ name: "Project support role", scope: "Community Mapping", owner: "Operations", status: "Active" }, { name: "Event participant", scope: "Volunteer Briefing", owner: "Training", status: "Pending" }, { name: "Local coordinator", scope: "Community Day", owner: "Local team", status: "Review" }],
    workflows: [{ title: "Assign volunteer", description: "Static workflow for connecting volunteers to operational roles.", status: "Pending" }, { title: "Coordinator approval", description: "Future review before confirming participation.", status: "Review" }, { title: "Completion record", description: "Placeholder for activity completion and reporting linkage.", status: "Draft" }],
    emptyState: "Participation records are mock examples and do not assign real volunteers.", searchPlaceholder: "Search participation placeholder", filters: ["All", "Active", "Pending", "Completed"]
  },
  approvals: {
    title: "Approvals", eyebrow: "Operational review queue", description: "Cross-domain approval placeholder for projects, events, memberships, documents and governance records.", icon: ClipboardCheck,
    summary: [{ label: "Queue", value: "12", detail: "Static approval items" }, { label: "High priority", value: "3", detail: "Mock review urgency" }, { label: "Approved", value: "5", detail: "Demo completed decisions" }], columns,
    rows: [{ name: "Project activation", scope: "Projects", owner: "Admin", status: "Pending" }, { name: "Event publication", scope: "Events", owner: "Coordinator", status: "Review" }, { name: "Document visibility", scope: "Documents", owner: "Governance", status: "Approved" }],
    workflows: [{ title: "Triage", description: "Placeholder for prioritizing items before decision.", status: "Pending" }, { title: "Decision", description: "Future approval, rejection or revision action area.", status: "Review" }, { title: "Audit note", description: "Static reminder that approvals should write audit events later.", status: "Draft" }],
    emptyState: "Approval items are static. No real domain state changes are triggered.", searchPlaceholder: "Search approval queue placeholder", filters: ["All", "Pending", "Review", "Approved"]
  },
  auditLogs: {
    title: "Audit Logs", eyebrow: "Governance traceability", description: "Admin-only static audit log view for future actor, action, entity and timestamp traceability.", icon: ScrollText,
    summary: [{ label: "Entries", value: "32", detail: "Static governance examples" }, { label: "Admin actions", value: "11", detail: "Mock sensitive operations" }, { label: "Retention", value: "Planned", detail: "Future policy integration" }], columns,
    rows: [{ name: "User role update", scope: "Identity", owner: "Admin", status: "Review" }, { name: "Project approval", scope: "Projects", owner: "Coordinator", status: "Approved" }, { name: "GDPR request note", scope: "Privacy", owner: "Privacy admin", status: "Restricted" }],
    emptyState: "Audit log rows are illustrative and are not generated from live backend activity.", searchPlaceholder: "Search audit logs placeholder", filters: ["All", "Admin", "Privacy", "Projects"]
  },
  analytics: {
    title: "Analytics", eyebrow: "Operational intelligence", description: "Static analytics workspace for future platform metrics without external analytics or personal tracking integration.", icon: LineChart,
    summary: [{ label: "Signals", value: "18", detail: "Mock event categories" }, { label: "Dashboards", value: "4", detail: "Future operational views" }, { label: "External tracking", value: "0", detail: "No third-party analytics" }], columns,
    rows: [{ name: "Volunteer activity", scope: "Operations", owner: "Analytics", status: "Draft" }, { name: "Project health", scope: "Projects", owner: "Program team", status: "Review" }, { name: "Training completion", scope: "Academy", owner: "Training", status: "Ready" }],
    workflows: [{ title: "Metric definition", description: "Placeholder for approved operational KPIs.", status: "Draft" }, { title: "Data review", description: "Future privacy and quality checkpoint before reporting.", status: "Review" }, { title: "Dashboard publishing", description: "Static release gate for internal analytics views.", status: "Queued" }],
    emptyState: "Analytics content is static and does not use external tracking or live event collection.", searchPlaceholder: "Search analytics placeholder", filters: ["All", "Operations", "Training", "Projects"]
  },
  communications: {
    title: "Communications", eyebrow: "Message planning", description: "Internal communications placeholder for campaigns, announcements and audience planning. No messages are sent.", icon: Megaphone,
    summary: [{ label: "Campaigns", value: "5", detail: "Static communication examples" }, { label: "Scheduled", value: "0", detail: "No real sending enabled" }, { label: "Draft", value: "5", detail: "All examples remain internal" }], columns,
    rows: [{ name: "Volunteer update", scope: "Romania", owner: "Communications", status: "Draft" }, { name: "Training notice", scope: "Academy", owner: "Training", status: "Review" }, { name: "Partner briefing", scope: "Europe", owner: "Partnerships", status: "Draft" }],
    workflows: [{ title: "Draft message", description: "Placeholder for future internal communication planning.", status: "Draft" }, { title: "Audience review", description: "Static step for checking recipient scope before any sending exists.", status: "Review" }, { title: "Approval gate", description: "Future governance approval before enabling delivery integrations.", status: "Pending" }],
    emptyState: "Communication records are static. No email, SMS or notification delivery is connected.", searchPlaceholder: "Search communications placeholder", filters: ["All", "Draft", "Review", "Internal"]
  },
  gkms: {
    title: "GKMS",
    eyebrow: "Knowledge management",
    description: "Internal placeholder for knowledge documents, SOP references and search metadata readiness. No real files are indexed or processed.",
    icon: FileText,
    summary: [{ label: "Knowledge docs", value: "12", detail: "Static GKMS examples" }, { label: "SOP references", value: "6", detail: "Future governance links" }, { label: "Indexed", value: "0", detail: "No live indexing enabled" }], columns,
    rows: [{ name: "Volunteer onboarding guide", scope: "Knowledge document", owner: "Governance", status: "Draft" }, { name: "SOP-GOV-001", scope: "SOP reference", owner: "Operations", status: "Review" }, { name: "Romanian content metadata", scope: "Search metadata", owner: "Platform", status: "Pending" }],
    workflows: [{ title: "Document intake", description: "Placeholder for future controlled knowledge source registration.", status: "Draft" }, { title: "SOP review", description: "Static review gate before any SOP is available to assistant context.", status: "Review" }, { title: "Search metadata", description: "Future metadata preparation before search indexing is enabled.", status: "Pending" }],
    emptyState: "GKMS records are mock-only. No real document body, sensitive content or external search index is processed.", searchPlaceholder: "Search GKMS placeholder", filters: ["All", "Documents", "SOP", "Metadata"]
  },
  aiAssistant: {
    title: "AI Assistant",
    eyebrow: "Assistant context management",
    description: "Internal placeholder for future GIUVA AI context scopes, allowed sources and safety notes. No AI API calls are made.",
    icon: LineChart,
    summary: [{ label: "Contexts", value: "4", detail: "Static assistant contexts" }, { label: "External APIs", value: "0", detail: "No AI provider integration" }, { label: "Safety reviews", value: "3", detail: "Future governance checkpoints" }], columns,
    rows: [{ name: "Public answer context", scope: "Global", owner: "Governance", status: "Draft" }, { name: "Admin support context", scope: "Admin", owner: "Platform", status: "Review" }, { name: "Country knowledge context", scope: "Romania", owner: "National team", status: "Pending" }],
    workflows: [{ title: "Context approval", description: "Placeholder approval gate before future assistant context activation.", status: "Review" }, { title: "Allowed sources", description: "Static control for limiting future assistant retrieval sources.", status: "Draft" }, { title: "Safety notes", description: "Future governance notes for public safety, GDPR and scope restrictions.", status: "Pending" }],
    emptyState: "AI assistant entries are static. No prompt execution, API call, model configuration or sensitive data processing occurs.", searchPlaceholder: "Search AI contexts placeholder", filters: ["All", "Global", "Admin", "Review"]
  }
} satisfies Record<string, AdminSectionConfig>;

