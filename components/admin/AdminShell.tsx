"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
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
  LayoutDashboard,
  LineChart,
  LogOut,
  Megaphone,
  ScrollText,
  ShieldCheck,
  UserCog,
  Users,
  UserRoundCheck
} from "lucide-react";
import { AdminAuthProvider, useAdminAuth } from "@/components/admin/AdminAuthProvider";
import { AdminNavigation } from "@/components/admin/AdminNavigation";

const navigationItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Organizations", href: "/admin/organizations", icon: Building2 },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Volunteers", href: "/admin/volunteers", icon: UserRoundCheck },
  { label: "Memberships", href: "/admin/memberships", icon: UserCog },
  { label: "Programs", href: "/admin/programs", icon: ClipboardList },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Participation", href: "/admin/participation", icon: ClipboardCheck },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Training", href: "/admin/training", icon: GraduationCap },
  { label: "Certifications", href: "/admin/certifications", icon: BookOpenCheck },
  { label: "Approvals", href: "/admin/approvals", icon: ClipboardCheck },
  { label: "Partners", href: "/admin/partners", icon: Handshake },
  { label: "Sponsors", href: "/admin/sponsors", icon: HeartHandshake },
  { label: "Donations", href: "/admin/donations", icon: HandCoins },
  { label: "Documents", href: "/admin/documents", icon: FileText },
  { label: "GKMS", href: "/admin/gkms", icon: FileText },
  { label: "AI Assistant", href: "/admin/ai-assistant", icon: LineChart },
  { label: "Communications", href: "/admin/communications", icon: Megaphone },
  { label: "Media Center", href: "/admin/media-center", icon: Megaphone },
  { label: "Public API", href: "/admin/public-api", icon: FileText },
  { label: "Deployment", href: "/admin/deployment", icon: ShieldCheck },
  { label: "Reports", href: "/admin/reports", icon: BarChart3 },
  { label: "Analytics", href: "/admin/analytics", icon: LineChart },
  { label: "Audit Logs", href: "/admin/audit-logs", icon: ScrollText },
  { label: "GDPR", href: "/admin/gdpr", icon: ShieldCheck }
];

function AdminShellFrame({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, token, loading, logout } = useAdminAuth();
  const isLogin = pathname === "/admin/login";

  useEffect(() => {
    if (!loading && !token && !isLogin) {
      router.replace("/admin/login");
    }
  }, [isLogin, loading, router, token]);

  if (isLogin) {
    return <>{children}</>;
  }

  if (loading || !token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 text-slate-700">
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold shadow-sm">
          Checking internal admin session...
        </div>
      </main>
    );
  }

  function handleLogout() {
    logout();
    router.replace("/admin/login");
  }

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
              Internal authenticated area. Public registration, payment, email and real public data collection are disabled.
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Internal Application Layer</p>
                <p className="m-0 mt-1 text-lg font-black text-slate-950">Admin Operations Console</p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <span className="inline-flex w-fit items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-extrabold text-slate-700">
                  {user ? `${user.email} · ${user.role}` : "Authenticated"}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex min-h-9 w-fit items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
                >
                  <LogOut aria-hidden="true" size={16} /> Logout
                </button>
              </div>
            </div>
          </header>
          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function AdminShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AdminAuthProvider>
      <AdminShellFrame>{children}</AdminShellFrame>
    </AdminAuthProvider>
  );
}
