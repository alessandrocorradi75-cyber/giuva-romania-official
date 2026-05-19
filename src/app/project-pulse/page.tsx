import type { Metadata } from "next";
import { BadgeCheck, Bike, HeartPulse, Radio } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectPulseSection } from "@/components/ProjectPulseSection";
import { ModuleGrid } from "@/components/ModuleGrid";

export const metadata: Metadata = {
  title: "Project Pulse",
  description: "Fundraising transparent pentru AED/DEA, echipamente, uniforme, training și mobilitate."
};

const modules = [
  { title: "AED / DEA", text: "Campanii dedicate defibrilatoarelor automate externe și accesoriilor.", icon: HeartPulse },
  { title: "Training", text: "Buget pentru cursuri, certificate, actualizări și parteneri autorizați.", icon: BadgeCheck },
  { title: "Mobilitate", text: "Motociclete, scooter, support vehicles, carburant și mentenanță.", icon: Bike },
  { title: "Logistică", text: "Radio, kituri, uniforme, identificare și instrumente de coordonare.", icon: Radio }
];

export default function ProjectPulsePage() {
  return (
    <>
      <HeroSection
        eyebrow="Project Pulse"
        title="Every minute matters."
        subtitle="Strângere de fonduri pentru defibrilatoare, echipamente și mobilitate."
        subtitleEn="Fundraising for AED units, equipment and responsible mobility."
        text="Project Pulse susține achiziția de AED/DEA, uniforme, kituri de prim ajutor, radio, motociclete, scooter și instrumente logistice."
        textEn="Project Pulse supports AED units, uniforms, first aid kits, radio equipment, motorcycles, scooters and logistics tools."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "Susține Project Pulse", tone: "red" },
          { href: "/riders-rescue", label: "Riders Rescue", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/project-pulse-scene.png", alt: "Project Pulse AED fundraising scene" }}
      />
      <ProjectPulseSection />
      <ModuleGrid
        tag="Sistem campanii / Campaign system"
        title="Fiecare donație trebuie să aibă o destinație clară."
        text="Project Pulse va fi construit cu obiective publice, trasabilitate a campaniilor și comunicare transparentă a rezultatelor."
        textEn="Project Pulse will be built with public goals, campaign traceability and transparent communication of results."
        modules={modules}
      />
    </>
  );
}
