import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GIUVA.RO | European Civic Resilience Platform",
    template: "%s | GIUVA.RO"
  },
  description:
    "GIUVA.RO is a European civic resilience platform for volunteering, AED awareness, public preparedness, community support and institutional cooperation.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "GIUVA.RO",
    description: "European civic resilience platform for communities, volunteers and public preparedness.",
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
