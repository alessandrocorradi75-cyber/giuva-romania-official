import { CTA } from "@/components/CTA";
import { CommunitySection } from "@/components/CommunitySection";
import { HeroSection } from "@/components/HeroSection";
import { JourneyGallery } from "@/components/JourneyGallery";
import { ModuleGrid } from "@/components/ModuleGrid";
import { OfficialResources } from "@/components/OfficialResources";
import { ProjectPulseSection } from "@/components/ProjectPulseSection";
import { Roadmap } from "@/components/Roadmap";
import { platformModules } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Comunitate. Voluntariat. Mobilitate. Acțiune."
        title="GIUVA"
        subtitle="Platformă pentru oameni care vor să transforme solidaritatea în acțiune."
        text="GIUVA este la început. Acum se construiește o platformă comunitară pentru voluntariat, sprijin, mobilitate, prevenție și impact transparent."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "contact@giuva.ro", tone: "blue" },
          { href: "/project-pulse", label: "Susține proiectul", tone: "red" }
        ]}
        panel={{ title: "Direcții", items: ["comunitate", "voluntariat", "mobilitate", "siguranță", "parteneriate"] }}
      />
      <CommunitySection />
      <ProjectPulseSection />
      <JourneyGallery />
      <Roadmap />
      <OfficialResources />
      <ModuleGrid
        light={false}
        tag="Platformă reală"
        title="GIUVA este construită ca platformă, nu ca simplă pagină de prezentare."
        text="Baza este pregătită pentru CMS, backend FastAPI, PostgreSQL, voluntari, parteneri, campanii și conținut editorial."
        modules={platformModules}
      />
      <CTA />
    </>
  );
}
