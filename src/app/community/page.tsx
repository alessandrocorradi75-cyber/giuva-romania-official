import type { Metadata } from "next";
import { CalendarDays, HandHeart, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { VisualShowcase } from "@/components/VisualShowcase";
import { communityManifestos } from "@/data/site";

export const metadata: Metadata = {
  title: "Community",
  description: "Impact social, activități comunitare, charity rides și inițiative de solidaritate."
};

const modules = [
  { title: "Acțiuni comunitare", text: "Inițiative locale, activități sociale și momente deschise oamenilor cu valori comune.", icon: Users },
  { title: "Charity rides", text: "Strângeri de fonduri și activități recreative cu impact real și comunicare clară.", icon: HandHeart },
  { title: "Evenimente", text: "Un calendar viitor pentru community rides, opriri la parteneri, training și întâlniri.", icon: CalendarDays }
];

export default function CommunityPage() {
  return (
    <>
      <HeroSection
        eyebrow="GIUVA Community"
        title="People first. Community always."
        subtitle="Acțiuni comunitare, socializare, recreere și solidaritate."
        subtitleEn="Community actions, social life, recreation and solidarity."
        text="GIUVA Community este pilonul uman al proiectului: unește persoane cu valori comune pentru activități sociale, inițiative caritabile și sprijin comunitar."
        textEn="GIUVA Community is the human pillar of the project: bringing people together around shared values, social moments, charity initiatives and community support."
        actions={[
          { href: "/contact", label: "Intră în comunitate", tone: "blue" },
          { href: "/journey", label: "See Journey", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/community-manifesto-3.png", alt: "GIUVA Community manifesto" }}
      />
      <VisualShowcase
        tag="Identitate vizuală / Visual identity"
        title="Manifesto community pentru pagină, media kit și social."
        text="Aceste materiale transmit tonul uman al proiectului: comunitate, charity, socializare, responsabilitate și mobilitate solidară."
        textEn="These assets express the human tone of the project: community, charity, social connection, responsibility and solidarity mobility."
        items={communityManifestos}
      />
      <ModuleGrid
        tag="Comunitate / Community"
        title="O comunitate sănătoasă, deschisă și pozitivă."
        text="Obiectivul este un mediu serios și prietenos, nu un club închis."
        textEn="The goal is a healthy, open and positive environment, not a closed club."
        modules={modules}
      />
    </>
  );
}
