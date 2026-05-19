import type { Metadata } from "next";
import { Camera, Map, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { JourneyGallery } from "@/components/JourneyGallery";
import { ModuleGrid } from "@/components/ModuleGrid";

export const metadata: Metadata = {
  title: "Journey",
  description: "Povești prin fotografii, descrieri scurte, activități recreative și socializare."
};

const modules = [
  { title: "Povești", text: "Drumuri, oameni, sens, locuri și momente comune.", icon: Camera },
  { title: "Activități recreative", text: "Promovăm activități care unesc puncte de interes comun și creează altele noi.", icon: Map },
  { title: "Volunteer stories", text: "Pot include training days, rapoarte, certificate, galerii și educație publică.", icon: Users }
];

export default function JourneyPage() {
  return (
    <>
      <HeroSection
        eyebrow="Journey"
        title="Journey"
        subtitle="Spunem povești prin fotografii și mici descrieri."
        text="Journey este pilonul narativ și vizual al GIUVA.RO: drumuri, peisaje, comunități, detalii umane, experiențe și memorie colectivă."
        actions={[
          { href: "/contact", label: "Trimite o poveste", tone: "blue" },
          { href: "/community", label: "Community", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/journey-urban-3.png", alt: "GIUVA Journey community camp story" }}
      />
      <JourneyGallery />
      <ModuleGrid
        tag="Galeria devine poveste"
        title="Journey este pregătit să devină content driven."
        text="Povești, galerii, evenimente, campanii, volunteer stories, training days și community rides pot fi publicate ca materiale editoriale."
        modules={modules}
        light={false}
      />
    </>
  );
}
