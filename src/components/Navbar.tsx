import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { brand, navItems } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/88 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/giuva-logo.svg" alt="GIUVA.RO" width={52} height={52} priority />
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[0.08em] text-slate-950">{brand.name}</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sky-700">{brand.tagline}</span>
          </span>
        </Link>
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-sky-200 text-slate-900">
            <Menu size={22} />
          </summary>
          <div className="absolute left-0 right-0 top-[73px] flex flex-col border-b border-sky-100 bg-white px-5 py-4 shadow-2xl">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="py-3 text-sm font-semibold text-slate-800">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
