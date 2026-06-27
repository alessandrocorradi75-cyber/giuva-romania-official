import type { Metadata } from "next";
import { Bike, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "GIUVA Riders Rescue",
  description: "Awareness AED, prevenție și suport civic responsabil în fază de dezvoltare."
};

const sections = [
  {
    title: "Proiect pilot",
    text: "Riders Rescue este o direcție în fază de dezvoltare, fără statut de serviciu public și fără rol de intervenție autonomă.",
    icon: Bike
  },
  {
    title: "AED și prevenție",
    text: "Accent pe educație, awareness AED, pregătire comunitară și activități formative aprobate.",
    icon: HeartPulse
  },
  {
    title: "Fără semnale oficiale",
    text: "Voluntarii nu folosesc sirene, girofaruri, uniforme instituționale sau elemente care pot sugera autoritate publică.",
    icon: ShieldCheck
  },
  {
    title: "Activități civice",
    text: "Prezență comunitară, suport logistic și informare publică doar în cadrul legal și, când este necesar, după formalizare.",
    icon: Users
  }
];

export default function RidersRescuePage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA Riders Rescue"
        title="Awareness AED și suport civic responsabil."
        text="Pilon în construcție pentru voluntari mobili, educație de prim ajutor, prevenție și pregătire comunitară. Nu este serviciu de urgență."
        actions={[
          { href: "/voluntari", label: "Devino voluntar" },
          { href: "/sustine", label: "Susține proiectul", tone: "blue" },
          { href: "/partner", label: "Propune un parteneriat", tone: "ghost" }
        ]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-7xl rounded-md border-l-4 border-[#16825d] bg-white p-6 text-lg font-bold leading-8 text-slate-700 shadow-sm">
          {brand.legalBoundary}
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="card p-6">
                <Icon className="text-[#16825d]" size={34} />
                <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{section.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{section.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
