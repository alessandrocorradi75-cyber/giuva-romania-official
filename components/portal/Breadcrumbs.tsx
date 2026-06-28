import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-5 pt-28 md:pt-32">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm font-bold text-slate-600">
        <li>
          <Link href="/" className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[#081f3a] hover:bg-white focus:bg-white">
            <Home size={15} aria-hidden="true" />
            Acasă
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="inline-flex items-center gap-2">
            <ChevronRight size={15} className="text-slate-400" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="rounded-full px-2 py-1 hover:bg-white focus:bg-white">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="rounded-full bg-white px-2 py-1 text-[#16825d] shadow-sm">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
