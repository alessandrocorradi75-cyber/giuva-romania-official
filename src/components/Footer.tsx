"use client";

import Link from "next/link";
import { brand, navItems } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { text } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-sm text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.3fr]">
        <div>
          <strong className="block text-lg text-white">{brand.name}</strong>
          <span className="font-semibold text-cyan-200">{text(brand.tagline)}</span>
          <p className="mt-4 max-w-md">{text(brand.description)}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <Link key={`${item.href}-${text(item.label)}`} href={item.href} className="text-slate-300 hover:text-white">
                {text(item.label)}
              </Link>
            ))}
          </div>
          <div>
            <p>Official contact</p>
            <a className="font-semibold text-cyan-200" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
