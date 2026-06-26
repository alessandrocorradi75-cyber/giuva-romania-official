import type { Metadata } from "next";
import { BookOpen, CalendarDays, Radio, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { LegalNotice } from "@/components/LegalNotice";
import { ModuleGrid } from "@/components/ModuleGrid";
import { OfficialResources } from "@/components/OfficialResources";
import { VisualShowcase } from "@/components/VisualShowcase";

export const metadata: Metadata = {
  title: "Civil Response",
  description: "Activități de protecție civilă, prevenție și sprijin autorizat la solicitarea autorităților."
};

const modules = [
  { title: "Prevenție", text: "Informare, pregătire și educație publică pentru reducerea riscurilor.", icon: BookOpen },
  { title: "Sprijin autorizat", text: "Personal disponibil folosit doar alături de autorități locale, când există necesitate reală.", icon: ShieldCheck },
  { title: "Coordonare", text: "Comunicare și suport logistic numai prin roluri clare și protocoale semnate.", icon: Radio },
  { title: "Calendar training", text: "Formare pentru voluntari, coordonatori și briefing-uri comunitare.", icon: CalendarDays }
];

const civilVisuals = [
  {
    title: "Protecție civilă",
    image: "/brand/civil-preparedness-visual.svg",
    text: "Activitate de sprijin și coordonare, nu comandă autonomă."
  },
  {
    title: "Suport la solicitarea autorităților",
    image: "/brand/civic-resilience-visual.svg",
    text: "Personalul disponibil poate fi folosit numai când autoritățile solicită sprijin."
  }
];

export default function CivilResponsePage() {
  return (
    <>
      <HeroSection
        eyebrow="Civil Response"
        title="Civil Response"
        subtitle="Activități de protecție civilă, prevenție și sprijin autorizat."
        text="Civil Response clarifică rolul GIUVA în zona de protecție civilă: personalul disponibil poate sprijini autoritățile locale numai când există o necesitate reală și numai la solicitarea autorităților."
        actions={[
          { href: "/media", label: "Informare publică", tone: "blue" },
          { href: "/contact", label: "Propune protocol", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/civil-preparedness-visual.svg", alt: "Civil preparedness and protocol-based community support" }}
      />
      <VisualShowcase
        tag="Protecție civilă"
        title="Prevenție, sprijin și activitate aprobată."
        text="Activitățile pot include prevenție și sprijin în situații unde autoritățile solicită participare. GIUVA nu operează independent și nu înlocuiește serviciile publice."
        items={civilVisuals}
      />
      <ModuleGrid
        tag="Doar cu autorități"
        title="Sprijin doar în cadrul legal și pe bază de protocol."
        text="Nu există coordonare autonomă de urgență, intervenție autonomă sau comandă în timp real. Totul se face alături de autorități și în limitele rolurilor aprobate."
        modules={modules}
      />
      <OfficialResources />
      <section className="soft-section px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <LegalNotice />
        </div>
      </section>
    </>
  );
}
