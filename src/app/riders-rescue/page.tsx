import type { Metadata } from "next";
import { BadgeCheck, HeartPulse, MapPin } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ModuleGrid } from "@/components/ModuleGrid";

export const metadata: Metadata = {
  title: "Riders Rescue",
  description: "Mobile community response, AED awareness, volunteer training and responsible availability."
};

const modules = [
  { title: "Training", text: "Cursuri recunoscute și formare continuă prin parteneri autorizați.", icon: BadgeCheck },
  { title: "AED mobility", text: "Defibrilatoare automate externe transportabile rapid de voluntari pregătiți.", icon: HeartPulse },
  { title: "Availability", text: "Disponibilitate reală și geolocalizare doar când sunt autorizate și conforme.", icon: MapPin }
];

export default function RidersRescuePage() {
  return (
    <>
      <HeroSection
        eyebrow="GIUVA Riders Rescue"
        title="Mobile Community Response"
        subtitle="Voluntari instruiți. Defibrilatoare mobile. Răspuns responsabil."
        subtitleEn="Trained volunteers. Mobile AED units. Responsible community support."
        text="GIUVA Riders Rescue este pilonul dedicat voluntarilor mobili, AED/DEA, formării și disponibilității responsabile în comunitate."
        textEn="GIUVA Riders Rescue is dedicated to mobile volunteers, AED awareness, training and responsible community availability."
        actions={[
          { href: "/project-pulse", label: "Susține Project Pulse", tone: "red" },
          { href: "/contact", label: "Devino voluntar", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/riders-rescue-support.png", alt: "GIUVA Rescue support event context" }}
      />
      <ModuleGrid
        tag="Misiune / Mission"
        title="Mobile Community First Response."
        text="Voluntari formați, AED mobile pe motociclete și scooter, sprijin rapid în comunitate, mereu în cadrul legal și prin protocoale oficiale."
        textEn="Trained volunteers, mobile AED units and fast community support, always within the legal framework and official protocols."
        modules={modules}
      />
    </>
  );
}
