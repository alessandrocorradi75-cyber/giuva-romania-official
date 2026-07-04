import type { LucideIcon } from "lucide-react";

type AdminNavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export function AdminNavigation({ items }: Readonly<{ items: AdminNavigationItem[] }>) {
  return (
    <nav className="mt-4" aria-label="Admin navigation">
      <ul className="grid gap-1 p-0 [list-style:none]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm font-extrabold text-slate-200 transition hover:bg-slate-800 hover:text-white focus-visible:bg-slate-800"
              >
                <Icon aria-hidden="true" size={18} />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
