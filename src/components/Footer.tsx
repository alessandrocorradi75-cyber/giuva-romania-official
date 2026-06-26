"use client";

import Link from "next/link";
import { brand, footerLinks, navItems } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocale } from "@/i18n/config";

export function Footer() {
  const { language, text } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-sm text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.3fr]">
        <div>
          <strong className="block text-lg text-white">{brand.name}</strong>
          <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{brand.officialFullName}</p>
          <span className="font-semibold text-cyan-200">{text(brand.tagline)}</span>
          <p className="mt-4 max-w-md">{text(brand.description)}</p>
          <p className="mt-4 max-w-md text-xs leading-5 text-slate-500">
            GIUVA is non-political, non-military and not an emergency-service provider. Its role is civic, educational,
            community-based and complementary.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <Link key={`${item.href}-${text(item.label)}`} href={withLocale(language, item.href)} className="text-slate-300 hover:text-white">
                {text(item.label)}
              </Link>
            ))}
          </div>
          <div>
            <p>Official contact</p>
            <a className="font-semibold text-cyan-200" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
              {footerLinks.map((link) => (
                <span key={link} className="rounded-md border border-white/10 px-2 py-1">
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
