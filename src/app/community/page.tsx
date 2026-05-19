import type { Metadata } from "next";
import { CalendarDays, HandHeart, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { VisualShowcase } from "@/components/VisualShowcase";

export const metadata: Metadata = {
  title: "Community",
  description: "Acțiuni comunitare, socializare, recreere și solidaritate."
};

const modules = [
  { title: "Acțiuni comunitare", text: "Inițiative locale, activități sociale și momente deschise oamenilor cu valori comune.", icon: Users },
  { title: "Charity rides", text: "Strângeri de fonduri și activități recreative cu impact real și comunicare clară.", icon: HandHeart },
  { title: "Evenimente", text: "Un calendar viitor pentru community rides, opriri la parteneri, training și întâlniri.", icon: CalendarDays }
];

const communityPoster = [
  {
    title: "GIUVA Community",
    image: "/brand/community-manifesto-3.png",
    text: "Locandina dedicată pilonului Community. Pentru adresă, giuva.ro este suficient și clar."
  }
];

export default function CommunityPage() {
  return (
    <>
      <HeroSection
        eyebrow="Community"
        title="Community"
        subtitle="Acțiuni comunitare, socializare, recreere și solidaritate."
        text="Community este pilonul uman al proiectului: unește persoane cu valori comune pentru activități sociale, inițiative caritabile și sprijin comunitar."
        actions={[
          { href: "/contact", label: "Intră în comunitate", tone: "blue" },
          { href: "/journey", label: "Vezi Journey", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/community-manifesto-3.png", alt: "GIUVA Community poster" }}
      />
      <VisualShowcase
        tag="Locandină Community"
        title="Community în prim plan."
        text="Pentru acest pilon folosim doar vizualul Community, fără amestec cu Riders Rescue sau Civil Response."
        items={communityPoster}
      />
      <ModuleGrid
        tag="Community"
        title="O comunitate sănătoasă, deschisă și pozitivă."
        text="Obiectivul este un mediu serios și prietenos, nu un club închis."
        modules={modules}
      />
    </>
  );
}
