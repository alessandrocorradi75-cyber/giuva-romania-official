"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { LanguageCode, LocalizedText } from "@/data/site";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  text: (value: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("ro");

  useEffect(() => {
    const stored = window.localStorage.getItem("giuva-language") as LanguageCode | null;
    if (stored === "ro" || stored === "en" || stored === "it") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("giuva-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
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
