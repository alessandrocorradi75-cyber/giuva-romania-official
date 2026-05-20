"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { brand, navItems } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const { text } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/88 shadow-2xl backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="GIUVA.RO home">
          <Image src="/brand/giuva-logo.svg" alt="GIUVA.RO" width={52} height={52} priority />
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[0.08em] text-white">{brand.name}</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-200">{text(brand.tagline)}</span>
          </span>
        </Link>
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-white">
            <Menu size={22} />
          </summary>
          <div className="absolute left-0 right-0 top-[73px] flex flex-col border-b border-white/10 bg-slate-950 px-5 py-4 shadow-2xl">
            {navItems.map((item) => (
              <Link key={`${item.href}-${text(item.label)}`} href={item.href} className="py-3 text-sm font-semibold text-slate-100">
                {text(item.label)}
              </Link>
            ))}
          </div>
        </details>
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${text(item.label)}`}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-cyan-200"
            >
              {text(item.label)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
