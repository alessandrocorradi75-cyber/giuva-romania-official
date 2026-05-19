import type { Metadata } from "next";
import { BookOpen, Camera, Newspaper } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { ReferenceBenchmarks } from "@/components/ReferenceBenchmarks";
import { operationalPages } from "@/data/site";

export const metadata: Metadata = {
  title: "Media",
  description: "Comunicare publică, facts media, boilerplate și strategie SEO."
};

const modules = [
  { title: "Boilerplate", text: "Descriere scurtă a proiectului pentru media, sponsori, autorități și parteneri.", icon: Newspaper },
  { title: "SEO pages", text: `Pagini: ${operationalPages.map((page) => page.title).join(", ")}.`, icon: BookOpen },
  { title: "Journey media", text: "Stories, galerii, captions și imagini viitoare conectate la CMS.", icon: Camera }
];

export default function MediaPage() {
  return (
    <>
      <HeroSection
        eyebrow="Media and Public Affairs"
        title="GIUVA.RO public communication."
        subtitle="Comunicare clară pentru media, sponsori, autorități și parteneri."
        text="Această pagină adună descrierea scurtă a proiectului, mesajele instituționale, poziția publică GIUVA.RO și viitoarea strategie SEO."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "Media contact", tone: "blue" },
          { href: "/project-pulse", label: "Project Pulse", tone: "ghost" }
        ]}
        panel={{ title: "Short facts", items: ["GIUVA.RO platform", "Ride • Respond • Unite", "Mobile Community Response", "Project Pulse fundraising", "Civil Response by protocols"] }}
      />
      <ModuleGrid
        tag="Boilerplate"
        title="About GIUVA.RO"
        text="GIUVA.RO este o platformă comunitară pentru voluntariat, impact social, educație AED/DEA, storytelling și reziliență civică."
        modules={modules}
      />
      <ReferenceBenchmarks />
    </>
  );
}
