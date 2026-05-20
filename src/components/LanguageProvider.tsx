"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { defaultLocale, isLocale } from "@/i18n/config";
import type { LocalizedText } from "@/data/site";

type LanguageContextValue = {
  language: Locale;
  text: (value: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  const language = isLocale(segment) ? segment : defaultLocale;

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      text: (localized) => localized[language] ?? localized.ro
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
