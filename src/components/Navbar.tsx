"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/data/site";
import { GiuvaLogo } from "@/components/brand/GiuvaLogo";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocale } from "@/i18n/config";

export function Navbar() {
  const { language, text } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/88 shadow-2xl backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3">
        <Link
          href={withLocale(language, "/")}
          className="flex items-center"
          aria-label="GIUVA — Global Initiative for Urban Volunteering & Awareness home"
        >
          <GiuvaLogo variant="white" className="h-10 w-auto md:h-14" />
        </Link>
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-white">
            <Menu size={22} />
          </summary>
          <div className="absolute left-0 right-0 top-[73px] flex flex-col border-b border-white/10 bg-slate-950 px-5 py-4 shadow-2xl">
            {navItems.map((item) => (
              <Link key={`${item.href}-${text(item.label)}`} href={withLocale(language, item.href)} className="py-3 text-sm font-semibold text-slate-100">
                {text(item.label)}
              </Link>
            ))}
          </div>
        </details>
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${text(item.label)}`}
              href={withLocale(language, item.href)}
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
