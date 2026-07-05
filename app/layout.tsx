import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GiuvaAiLazy } from "@/components/GiuvaAiLazy";
import { brand, seoKeywords } from "@/data/site";
import "@/styles/globals.css";

const siteUrl = "https://www.giuva.ro";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GIUVA România | Nu o asociație. O comunitate.",
    template: "%s | GIUVA Romania"
  },
  description:
    "GIUVA România este o comunitate unde oamenii se întâlnesc, împărtășesc idei, creează proiecte și îmbunătățesc societatea împreună.",
  keywords: seoKeywords,
  alternates: {
    canonical: siteUrl,
    languages: {
      ro: siteUrl,
      en: `${siteUrl}/en`
    }
  },
  openGraph: {
    title: "GIUVA România | Nu o asociație. O comunitate.",
    description: brand.description,
    url: siteUrl,
    siteName: "GIUVA Romania",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/brand/giuva-romania-disciplines-flag.webp",
        width: 1536,
        height: 864,
        alt: "GIUVA România, voluntari, comunitate, România și Europa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GIUVA România | Nu o asociație. O comunitate.",
    description: brand.description,
    images: ["/brand/giuva-romania-disciplines-flag.webp"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className="site-shell">
        <a href="#main-content" className="skip-link">Sari la conținutul principal</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <GiuvaAiLazy />
      </body>
    </html>
  );
}




