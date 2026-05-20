export const locales = ["ro", "en", "it", "de", "fr", "hu", "sr", "hr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function withLocale(locale: Locale, href: string) {
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}
