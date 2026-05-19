import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GIUVA.RO | Ride • Respond • Unite",
  description: "European community mobility and civil resilience platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
