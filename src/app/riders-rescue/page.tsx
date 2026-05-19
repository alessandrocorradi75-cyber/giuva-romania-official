import type { Metadata } from "next";
import { BadgeCheck, HeartPulse, MapPin } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";

export const metadata: Metadata = {
  title: "Riders Rescue",
  description: "Voluntari instruiți, defibrilatoare mobile și răspuns rapid responsabil."
};

const modules = [
  { title: "Training", text: "Cursuri recunoscute și formare continuă prin parteneri autorizați.", icon: BadgeCheck },
  { title: "AED mobility", text: "Defibrilatoare automate externe transportabile rapid de voluntari pregătiți.", icon: HeartPulse },
  { title: "Availability", text: "Disponibilitate reală și geolocalizare doar când sunt efectiv pe teren și disponibili de intervenție la solicitarea autorităților.", icon: MapPin }
];

export default function RidersRescuePage() {
  return (
    <>
      <HeroSection
        eyebrow="GIUVA Riders Rescue"
        title="Riders Rescue"
        subtitle="Voluntari instruiți. Defibrilatoare mobile. Răspuns rapid și responsabil."
        text="GIUVA Riders Rescue este pilonul dedicat voluntarilor mobili, AED/DEA, formării și disponibilității responsabile în comunitate."
        actions={[
          { href: "/project-pulse", label: "Susține Project Pulse", tone: "red" },
          { href: "/contact", label: "Devino voluntar", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/riders-rescue-support.png", alt: "GIUVA Riders Rescue" }}
      />
      <ModuleGrid
        tag="Mobile Community First Response"
        title="Voluntari formați, AED mobile și sprijin rapid în comunitate."
        text="Sprijinul se desfășoară mereu în cadrul legal, prin protocoale oficiale și la solicitarea autorităților competente."
        modules={modules}
      />
    </>
  );
}
