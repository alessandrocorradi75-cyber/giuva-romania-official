"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageOptions } from "@/data/site";
import { defaultLocale, isLocale } from "@/i18n/config";
import { useLanguage } from "@/components/LanguageProvider";

function localizedPath(pathname: string, nextLocale: string) {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSelector() {
  const pathname = usePathname() || `/${defaultLocale}`;
  const { language } = useLanguage();

  return (
    <aside
      aria-label="Language selector"
      className="fixed left-3 top-28 z-40 w-[4.5rem] rounded-md border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl sm:w-28"
    >
      <div className="grid gap-1">
        {languageOptions.map((option) => (
          <Link
            key={option.code}
            href={localizedPath(pathname, option.code)}
            aria-current={language === option.code ? "true" : undefined}
            className={
              language === option.code
                ? "rounded-md bg-red-600 px-2 py-1.5 text-left text-xs font-black text-white"
                : "rounded-md px-2 py-1.5 text-left text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            }
          >
            <span className="sm:hidden">{option.code.toUpperCase()}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
