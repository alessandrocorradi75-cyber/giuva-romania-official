import type { Metadata } from "next";
import { Building2, HandHeart, Stethoscope } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";
import { Partners } from "@/components/Partners";

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
        subtitleEn="Institutional, technical, medical, logistics, hospitality and media partners."
        text="GIUVA.RO este deschisă colaborărilor responsabile cu instituții publice, companii, sponsori, organizații de formare, furnizori tehnici și parteneri hospitality and travel."
        textEn="GIUVA.RO is open to responsible collaboration with public institutions, companies, sponsors, training organizations, technical suppliers and hospitality or travel partners."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "Propune parteneriat", tone: "blue" },
          { href: "/project-pulse", label: "Project Pulse", tone: "ghost" }
        ]}
        panel={{ title: "Partner areas", items: ["institutional and civil protection", "medical and training", "AED, radio, GPS and IT", "logistics and mobility", "hospitality, travel and media"] }}
      />
      <Partners />
      <ModuleGrid
        tag="Colaborări viitoare / Future collaborations"
        title="Dialog instituțional, nu afiliere automată."
        text="Menționarea autorităților sau instituțiilor nu indică parteneriat existent, aprobare sau afiliere. Orice colaborare trebuie formalizată prin proceduri și protocoale oficiale."
        textEn="Mentioning authorities or institutions does not indicate an existing partnership, endorsement or affiliation. Every collaboration must be formalized through official procedures and protocols."
        modules={modules}
        light={false}
      />
    </>
  );
}
