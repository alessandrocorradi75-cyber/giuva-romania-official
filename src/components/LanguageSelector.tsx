"use client";

import { languageOptions } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <aside
      aria-label="Language selector"
      className="fixed left-3 top-28 z-40 w-[4.5rem] rounded-md border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl sm:w-28"
    >
      <p className="sr-only">Choose language</p>
      <div className="grid gap-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={language === option.code}
            className={
              language === option.code
                ? "rounded-md bg-red-600 px-2 py-1.5 text-left text-xs font-black text-white"
                : "rounded-md px-2 py-1.5 text-left text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            }
          >
            <span className="sm:hidden">{option.code.toUpperCase()}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
