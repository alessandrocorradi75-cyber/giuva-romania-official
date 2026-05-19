import type { Metadata } from "next";
import { BookOpen, CalendarDays, Radio, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { LegalNotice } from "@/components/LegalNotice";
import { ModuleGrid } from "@/components/ModuleGrid";
import { VisualShowcase } from "@/components/VisualShowcase";

export const metadata: Metadata = {
  title: "Civil Response",
  description: "Informational civil resilience module: preparedness, public awareness and protocol-based volunteer coordination."
};

const modules = [
  { title: "Preparedness info", text: "Materiale publice și conținut educativ pentru cultura prevenției.", icon: BookOpen },
  { title: "Public awareness", text: "Comunicare clară pentru comunitate, media, sponsori și parteneri instituționali.", icon: Radio },
  { title: "Event support", text: "Sprijin informativ și voluntariat doar cu roluri autorizate și protocoale semnate.", icon: ShieldCheck },
  { title: "Training calendar", text: "Calendar de formare pentru voluntari, coordonatori și briefing-uri comunitare.", icon: CalendarDays }
];

const civilVisuals = [
  {
    title: "Coordonare prin protocol",
    image: "/brand/civil-response-scene.png",
    text: "Visual util pentru colaborare, briefing, prevenție și roluri autorizate."
  },
  {
    title: "Context instituțional",
    image: "/brand/civil-response-protocol.png",
    text: "De folosit doar cu disclaimer clar: nu indică parteneriat existent sau autoritate operativă."
  }
];

export default function CivilResponsePage() {
  return (
    <>
      <HeroSection
        eyebrow="Civil Response"
        title="Community resilience and civil support."
        subtitle="Informare, pregătire și coordonare voluntari prin protocoale oficiale."
        subtitleEn="Information, preparedness and volunteer coordination through official protocols."
        text="Civil Response este modulul dedicat pregătirii, informării publice, calendarului de training, sprijinului la evenimente și coordonării voluntarilor. Nu este sistem de dispatch sau comandă operativă."
        textEn="Civil Response is dedicated to preparedness, public awareness, training calendar, event support and volunteer coordination. It is not a dispatch or operational command system."
        actions={[
          { href: "/media", label: "Informare publică", tone: "blue" },
          { href: "/contact", label: "Propune protocol", tone: "ghost" }
        ]}
        imagePanel={{ src: "/brand/civil-response-scene.png", alt: "Civil Response protocol-based community support" }}
      />
      <VisualShowcase
        tag="Visuale Civil Response / Civil visuals"
        title="Imagini utile, cu limită legală clară."
        text="Aceste materiale funcționează pentru pregătire, colaborare și suport la evenimente. Nu trebuie să comunice intervenție autonomă sau dispatch."
        textEn="These visuals work for preparedness, collaboration and event support. They must not communicate autonomous intervention or dispatch."
        items={civilVisuals}
      />
      <ModuleGrid
        tag="Doar informativ / Informational only"
        title="Community platform first. Never emergency operator."
        text="Această secțiune evită intervenția autonomă, dispatch-ul, comanda în timp real sau funcții care pot fi confundate cu servicii de urgență."
        textEn="This section avoids autonomous intervention, dispatch, real-time command or any feature that could be confused with emergency services."
        modules={modules}
      />
      <section className="soft-section px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <LegalNotice />
        </div>
      </section>
    </>
  );
}
