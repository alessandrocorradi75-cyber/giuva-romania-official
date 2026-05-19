import { CTA } from "@/components/CTA";
import { CommunitySection } from "@/components/CommunitySection";
import { HeroSection } from "@/components/HeroSection";
import { JourneyGallery } from "@/components/JourneyGallery";
import { ModuleGrid } from "@/components/ModuleGrid";
import { Partners } from "@/components/Partners";
import { ProjectPulseSection } from "@/components/ProjectPulseSection";
import { Roadmap } from "@/components/Roadmap";
import { platformModules } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Platformă de mobilitate comunitară / Community mobility platform"
        title="GIUVA.RO"
        subtitle="Ride • Respond • Unite"
        subtitleEn="Community, mobility and responsible civic support."
        text="GIUVA.RO este o platformă de comunitate, mobilitate și răspuns civic responsabil, construită pentru oameni care aleg acțiunea, solidaritatea și respectul."
        textEn="GIUVA.RO is a community, mobility and responsible civic support platform built for people who choose action, solidarity and respect."
        actions={[
          { href: "/riders-rescue", label: "Riders Rescue", tone: "red" },
          { href: "/project-pulse", label: "Susține Project Pulse", tone: "blue" },
          { href: "/civil-response", label: "Civil Response", tone: "ghost" }
        ]}
        showBanner
      />
      <CommunitySection />
      <ProjectPulseSection />
      <JourneyGallery />
      <Roadmap />
      <ModuleGrid
        light={false}
        tag="Platformă reală / Real platform"
        title="GIUVA este construită ca platformă, nu ca simplă pagină de prezentare."
        text="Baza este pregătită pentru CMS, backend FastAPI, PostgreSQL, voluntari, parteneri, campanii și conținut editorial."
        textEn="The foundation is ready for CMS, FastAPI, PostgreSQL, volunteers, partners, campaigns and editorial content."
        modules={platformModules}
      />
      <Partners />
      <CTA />
    </>
  );
}
