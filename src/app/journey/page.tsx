import type { Metadata } from "next";
import { Camera, Map, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { JourneyGallery } from "@/components/JourneyGallery";
import { ModuleGrid } from "@/components/ModuleGrid";

export const metadata: Metadata = {
  title: "Journey",
  description: "Povești prin drumuri, oameni, fotografii, călătorii și memorie comunitară."
};

const modules = [
  { title: "Povești", text: "Articole cu titlu, slug, conținut, imagine cover, locație, autor și dată de publicare.", icon: Camera },
  { title: "Galerii", text: "Evenimente, imagini, captions și selecție editorială pentru memoria vizuală.", icon: Map },
  { title: "Volunteer stories", text: "Oameni, training, experiențe și momente care spun cultura GIUVA.", icon: Users }
];

export default function JourneyPage() {
  return (
    <>
      <HeroSection
        eyebrow="Journey"
        title="Stories through roads, people and moments."
        subtitle="Spunem povești prin fotografii și mici descrieri."
        subtitleEn="We tell stories through photographs and short captions."
        text="Journey este pilonul narativ și vizual al GIUVA.RO: drumuri, peisaje, comunități, detalii umane, experiențe și memorie colectivă."
        textEn="Journey is the narrative and visual pillar of GIUVA.RO: roads, landscapes, communities, human details, experiences and collective memory."
        actions={[
          { href: "/contact", label: "Trimite o poveste", tone: "blue" },
          { href: "/community", label: "Community", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/journey-urban-3.png", alt: "GIUVA Journey community camp story" }}
      />
      <JourneyGallery />
      <ModuleGrid
        tag="Modele de conținut / Content models"
        title="Journey trebuie să devină content driven."
        text="Următorul pas este conectarea la Sanity sau Strapi, ca poveștile să fie publicate fără modificări de cod."
        textEn="The next step is connecting Sanity or Strapi so stories can be published without code changes."
        modules={modules}
        light={false}
      />
    </>
  );
}
