import type { Metadata } from "next";
import { Building2, HandHeart, Stethoscope } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { Partners } from "@/components/Partners";
import { ReferenceBenchmarks } from "@/components/ReferenceBenchmarks";

export const metadata: Metadata = {
  title: "Partners",
  description: "Parteneriate instituționale, medicale, hospitality, media, tehnice și de mobilitate."
};

const modules = [
  { title: "Instituțional", text: "Primării, protecție civilă, ISU, SMURD și autorități competente, doar prin proceduri oficiale.", icon: Building2 },
  { title: "Medical and training", text: "Provideri autorizați pentru cursuri, AED awareness, certificări și actualizări.", icon: Stethoscope },
  { title: "Corporate", text: "Sponsori, hospitality, travel, media, mobilitate și companii locale.", icon: HandHeart }
];

export default function PartnersPage() {
  return (
    <>
      <HeroSection
        eyebrow="Parteneri strategici / Strategic partners"
        title="Partnerships built on protocols, transparency and impact."
        subtitle="Parteneri instituționali, tehnici, medicali, logistici, hospitality și media."
        text="GIUVA.RO este deschisă colaborărilor responsabile cu instituții publice, companii, sponsori, organizații de formare, furnizori tehnici și parteneri hospitality and travel."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "Propune parteneriat", tone: "blue" },
          { href: "/project-pulse", label: "Project Pulse", tone: "ghost" }
        ]}
        panel={{ title: "Partner areas", items: ["institutional and civil protection", "medical and training", "AED, radio, GPS and IT", "logistics and mobility", "hospitality, travel and media"] }}
      />
      <Partners />
      <ReferenceBenchmarks />
      <ModuleGrid
        tag="Colaborări viitoare / Future collaborations"
        title="Dialog instituțional, nu afiliere automată."
        text="Menționarea autorităților, organizațiilor sau aplicațiilor nu indică parteneriat existent, aprobare sau afiliere. Orice colaborare trebuie formalizată prin proceduri și protocoale oficiale."
        modules={modules}
        light={false}
      />
    </>
  );
}
