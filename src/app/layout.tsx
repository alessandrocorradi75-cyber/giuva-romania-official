import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GIUVA.RO | Urban Volunteering & Awareness",
    template: "%s | GIUVA.RO"
  },
  description:
    "GIUVA.RO is the Global Initiative for Urban Volunteering & Awareness, a European-oriented civic platform for AED awareness, community preparedness, prevention culture and complementary institutional cooperation.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "GIUVA.RO",
    description: "Urban volunteering, AED awareness, community preparedness and prevention culture.",
    url: "https://giuva.ro",
    siteName: "GIUVA.RO",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>
        <LanguageProvider>
          <Navbar />
          <LanguageSelector />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
