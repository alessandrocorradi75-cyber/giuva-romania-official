import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GIUVA.RO | Ride • Respond • Unite",
    template: "%s | GIUVA.RO"
  },
  description:
    "GIUVA.RO este o platformă comunitară pentru mobilitate voluntară, educație AED/DEA, povești Journey, campanii Project Pulse și reziliență civică.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
