import type { ReactNode } from "react";
import {
  BarChart3,
  Building2,
  CalendarDays,
  ClipboardList,
  FileText,
  FolderKanban,
  GraduationCap,
  HandCoins,
  Handshake,
  LayoutDashboard,
  ShieldCheck,
  Users,
  UserRoundCheck
} from "lucide-react";
import { AdminNavigation } from "@/components/admin/AdminNavigation";

const navigationItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Organizations", href: "#organizations", icon: Building2 },
  { label: "Users", href: "#users", icon: Users },
  { label: "Volunteers", href: "#volunteers", icon: UserRoundCheck },
  { label: "Programs", href: "#programs", icon: ClipboardList },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Events", href: "#events", icon: CalendarDays },
  { label: "Training", href: "#training", icon: GraduationCap },
  { label: "Partners", href: "#partners", icon: Handshake },
  { label: "Donations", href: "#donations", icon: HandCoins },
  { label: "Documents", href: "#documents", icon: FileText },
  { label: "Reports", href: "#reports", icon: BarChart3 },
  { label: "GDPR", href: "#gdpr", icon: ShieldCheck }
];

export function AdminShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <section className="bg-slate-100 text-slate-950" aria-label="GIUVA internal administration platform">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col lg:flex-row">
        <aside className="border-b border-slate-200 bg-slate-950 text-white lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:border-slate-800">
          <div className="flex h-full flex-col p-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
              <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-200">GIUVA</p>
              <p className="m-0 mt-2 text-xl font-black">Enterprise Admin</p>
              <p className="m-0 mt-2 text-sm leading-6 text-slate-300">Internal platform shell</p>
            </div>
            <AdminNavigation items={navigationItems} />
            <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-3 text-xs leading-5 text-slate-300 lg:mt-auto">
              Static placeholder shell. No public records, live data or authentication workflow is exposed in this block.
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">R4 Application Layer</p>
                <p className="m-0 mt-1 text-lg font-black text-slate-950">Internal Operations Console</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-extrabold text-slate-700">
                Preview mode
              </span>
            </div>
          </header>
          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

