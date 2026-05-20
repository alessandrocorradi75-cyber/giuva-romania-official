import { CTA } from "@/components/CTA";
import { CommunitySection } from "@/components/CommunitySection";
import { HeroSection } from "@/components/HeroSection";
import { JourneyGallery } from "@/components/JourneyGallery";
import { ModuleGrid } from "@/components/ModuleGrid";
import { OfficialResources } from "@/components/OfficialResources";
import { ProjectPulseSection } from "@/components/ProjectPulseSection";
import { Roadmap } from "@/components/Roadmap";
import { homeCopy, partnerGroups, platformModules } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow={homeCopy.eyebrow}
        title={homeCopy.title}
        subtitle={homeCopy.subtitle}
        text={homeCopy.text}
        actions={[
          { href: "/contact", label: homeCopy.primaryAction, tone: "red" },
          { href: "/project-pulse", label: homeCopy.secondaryAction, tone: "ghost" }
        ]}
        panel={{ title: homeCopy.panelTitle, items: homeCopy.panelItems }}
      />
      <CommunitySection />
      <ModuleGrid
        tag={{ ro: "Platformă operațională", en: "Operational platform", it: "Piattaforma operativa" }}
        title={{
          ro: "GIUVA integrează voluntariat, donații, pregătire publică și date verificabile.",
          en: "GIUVA integrates volunteering, donations, public preparedness and verifiable data.",
          it: "GIUVA integra volontariato, donazioni, preparazione pubblica e dati verificabili."
        }}
        text={{
          ro: "Aceste sisteme sunt placeholder-e proiectate pentru backend, CMS, PostgreSQL și portaluri dedicate.",
          en: "These systems are placeholders designed for backend services, CMS, PostgreSQL and dedicated portals.",
          it: "Questi sistemi sono placeholder progettati per backend, CMS, PostgreSQL e portali dedicati."
        }}
        modules={platformModules}
      />
      <ProjectPulseSection />
      <JourneyGallery />
      <ModuleGrid
        tone="red"
        tag={{ ro: "Parteneriate", en: "Partnerships", it: "Partnership" }}
        title={{
          ro: "Credibilitatea GIUVA se construiește prin protocoale, nu prin afirmații.",
          en: "GIUVA credibility is built through protocols, not claims.",
          it: "La credibilità di GIUVA si costruisce con protocolli, non con dichiarazioni."
        }}
        text={{
          ro: "Site-ul separă clar partenerii instituționali, partenerii de urgență și cooperarea municipală.",
          en: "The site clearly separates institutional partners, emergency partners and municipal cooperation.",
          it: "Il sito separa chiaramente partner istituzionali, partner di emergenza e cooperazione municipale."
        }}
        modules={partnerGroups}
      />
      <OfficialResources />
      <Roadmap />
      <CTA />
    </>
  );
}
