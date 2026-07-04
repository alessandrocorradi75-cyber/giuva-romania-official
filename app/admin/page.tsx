import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ClipboardList,
  Database,
  FileText,
  FolderKanban,
  GraduationCap,
  HandCoins,
  Handshake,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  Users,
  UserRoundCheck
} from "lucide-react";

const metrics = [
  { label: "Foundation modules", value: "33", detail: "Backend domains available" },
  { label: "Protected route groups", value: "24", detail: "RBAC-ready API areas" },
  { label: "Data mode", value: "Static", detail: "No live records displayed" },
  { label: "Release phase", value: "R4-A", detail: "Admin shell baseline" }
];

const sections = [
  {
    id: "organizations",
    title: "Organizations",
    description: "Europe, country, region, city and community hierarchy.",
    status: "Backend foundation ready",
    icon: Building2
  },
  {
    id: "users",
    title: "Users",
    description: "Internal user identity and RBAC management surface.",
    status: "Protected API available",
    icon: Users
  },
  {
    id: "volunteers",
    title: "Volunteers",
    description: "Volunteer identity, memberships and participation records.",
    status: "Identity foundation ready",
    icon: UserRoundCheck
  },
  {
    id: "programs",
    title: "Programs",
    description: "Long-term GIUVA initiatives and discipline structure.",
    status: "CRUD foundation ready",
    icon: ClipboardList
  },
  {
    id: "projects",
    title: "Projects",
    description: "Program-linked projects, organizations and participation.",
    status: "CRUD foundation ready",
    icon: FolderKanban
  },
  {
    id: "events",
    title: "Events",
    description: "Internal event planning linked to programs and projects.",
    status: "Management foundation ready",
    icon: CalendarDays
  },
  {
    id: "training",
    title: "Training",
    description: "Training modules and volunteer certification readiness.",
    status: "Training foundation ready",
    icon: GraduationCap
  },
  {
    id: "partners",
    title: "Partners",
    description: "Internal partner records and organization relations.",
    status: "Management foundation ready",
    icon: Handshake
  },
  {
    id: "donations",
    title: "Donations",
    description: "Internal donation records without payment processing.",
    status: "Admin-only foundation",
    icon: HandCoins
  },
  {
    id: "documents",
    title: "Documents",
    description: "Internal document registry and storage path placeholders.",
    status: "Governance foundation ready",
    icon: FileText
  },
  {
    id: "reports",
    title: "Reports",
    description: "Operational report records and generated file placeholders.",
    status: "Reporting foundation ready",
    icon: BarChart3
  },
  {
    id: "gdpr",
    title: "GDPR",
    description: "Admin-only privacy request tracking and handling records.",
    status: "Admin-only foundation",
    icon: ShieldCheck
  }
];

const activity = [
  "R3 backend foundation validated and tagged",
  "Admin application shell created with static placeholders",
  "Authentication UI intentionally not implemented in this block",
  "Live backend integration reserved for future R4 tasks"
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1fr_20rem] lg:p-6">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-800">
            <LockKeyhole aria-hidden="true" size={14} />
            Internal platform
          </div>
          <div className="max-w-3xl space-y-3">
            <h1 className="m-0 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              GIUVA Enterprise Admin
            </h1>
            <p className="m-0 text-base leading-7 text-slate-600">
              Operational dashboard shell for the GIUVA enterprise backend foundation. This view uses static placeholders only and does not expose public data or live records.
            </p>
          </div>
          <div className="flex flex-wrap gap-3" aria-label="Admin dashboard status">
            <span className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-extrabold text-emerald-800">
              <BadgeCheck aria-hidden="true" size={16} /> Backend foundations ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-extrabold text-slate-700">
              <Database aria-hidden="true" size={16} /> Static preview mode
            </span>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white" aria-label="Release status">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-blue-100">
            <LayoutDashboard aria-hidden="true" size={16} /> R4 Block A
          </div>
          <p className="mt-4 text-3xl font-black">Admin Shell</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            First internal application layer. No frontend authentication flow, no live data binding and no public claims are included.
          </p>
        </aside>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Platform baseline metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="m-0 text-sm font-bold text-slate-500">{metric.label}</p>
            <p className="m-0 mt-2 text-3xl font-black text-slate-950">{metric.value}</p>
            <p className="m-0 mt-1 text-sm text-slate-600">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="admin-sections-title" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0 text-sm font-black uppercase tracking-[0.14em] text-blue-700">Workspace</p>
            <h2 id="admin-sections-title" className="m-0 mt-1 text-2xl font-black text-slate-950">
              Enterprise modules
            </h2>
          </div>
          <p className="m-0 max-w-xl text-sm leading-6 text-slate-600">
            Each module is a placeholder surface for future backend integration and protected workflows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article id={section.id} key={section.title} className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-800">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="m-0 text-lg font-black text-slate-950">{section.title}</h3>
                    <p className="m-0 mt-1 text-sm leading-6 text-slate-600">{section.description}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-md bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                  {section.status}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_22rem]">
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-blue-700">
            <BookOpenCheck aria-hidden="true" size={16} /> Integration notes
          </div>
          <ul className="mt-4 grid gap-3 p-0 text-sm leading-6 text-slate-700 [list-style:none]">
            {activity.map((item) => (
              <li key={item} className="flex gap-3 rounded-md bg-slate-50 p-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950" aria-label="Access notice">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em]">
            <LockKeyhole aria-hidden="true" size={16} /> Access notice
          </div>
          <p className="m-0 mt-3 text-sm leading-6">
            This shell is not a real authentication boundary. Frontend authentication, sessions and backend data binding will be implemented in later R4 tasks.
          </p>
        </aside>
      </section>
    </div>
  );
}
