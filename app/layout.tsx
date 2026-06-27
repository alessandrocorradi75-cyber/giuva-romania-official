import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brand, seoKeywords } from "@/data/site";
import "@/styles/globals.css";

const siteUrl = "https://www.giuva.ro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GIUVA Romania | Connecting Communities. Creating Impact.",
    template: "%s | GIUVA Romania"
  },
  description:
    "GIUVA Romania construiește o rețea civică de voluntari, comunități și parteneri pentru orașe mai conectate, pregătite și solidare.",
  keywords: seoKeywords,
  alternates: {
    canonical: siteUrl,
    languages: {
      ro: siteUrl,
      en: `${siteUrl}/en`
    }
  },
  openGraph: {
    title: "GIUVA Romania | Connecting Communities. Creating Impact.",
    description: brand.description,
    url: siteUrl,
    siteName: "GIUVA Romania",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/brand/giuva-romania-disciplines-flag.png",
        width: 1536,
        height: 864,
        alt: "GIUVA Romania, voluntari, comunitate, Romania si Europa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GIUVA Romania | Connecting Communities. Creating Impact.",
    description: brand.description,
    images: ["/brand/giuva-romania-disciplines-flag.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className="site-shell">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
