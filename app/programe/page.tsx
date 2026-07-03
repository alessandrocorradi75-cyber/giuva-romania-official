import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, BookOpen, GraduationCap, HandHeart, HeartPulse, Leaf, Radio, ShieldCheck, Sprout, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Programe GIUVA - Voluntariat civic european",
  description: "Descoperă programele GIUVA: voluntariat social, pregătire, experiențe unice. Implică-te în comunitatea ta."
};

const groups = [
  {
    title: "Social și Comunitate",
    programmes: [
      { title: "Community & Social", icon: Users, href: "/discipline/community-social", text: "Promovează participarea civică, voluntariatul social, incluziunea și construirea de rețele locale. Organizăm evenimente comunitare, campanii de donații, activități de socializare și inițiative deschise tuturor vârstelor." },
      { title: "Food Solidarity", icon: HandHeart, href: "/implica-te", text: "Promovează inițiative de solidaritate alimentară, reducerea risipei și sprijinul pentru persoane vulnerabile, în cadrul unor acțiuni comunitare dezvoltate responsabil și transparent." },
      { title: "Civil Support", icon: Radio, href: "/discipline/civil-support", text: "Sprijinim inițiative civice, evenimente, logistică și activități de utilitate publică, doar în limitele legii și fără a înlocui instituțiile publice sau serviciile de urgență." }
    ]
  },
  {
    title: "Educație și Pregătire",
    programmes: [
      { title: "GIUVA Academy", icon: GraduationCap, href: "/discipline/academy", text: "Realizăm programe educaționale, ateliere, formare civică și dezvoltare personală. Certificatele sau calificările vor fi oferite doar prin parteneri autorizați și cadre formalizate." },
      { title: "Preparedness", icon: ShieldCheck, href: "/discipline/preparedness", text: "Diseminăm cultura prevenirii, a gestionării riscurilor și a pregătirii comunitare prin informare publică, exerciții practice, workshop-uri și resurse accesibile." },
      { title: "GIUVA Youth", icon: Sprout, href: "/discipline/youth", text: "Implicăm tinerii în proiecte de cetățenie activă, voluntariat, comunicare și leadership civic, cu respectarea regulilor de safeguarding și incluziune." },
      { title: "GIUVA Senior", icon: BookOpen, href: "/discipline/senior-network", text: "Valorificăm experiența persoanelor vârstnice prin mentorat, activități intergeneraționale, socializare și participare la viața comunității." }
    ]
  },
  {
    title: "Experiențe și Acțiune",
    programmes: [
      { title: "GIUVA Journey", icon: Leaf, href: "/discipline/journey", text: "Promovăm călătorii responsabile, patrimoniu cultural european, storytelling civic și schimburi între comunități prin excursii tematice și inițiative vizuale." },
      { title: "Riders Rescue", icon: Bike, href: "/discipline/riders-rescue", text: "Voluntari pasionați de mobilitate, pregătiți pentru awareness AED, educație de prim ajutor, suport logistic și prezență civică la evenimente publice." },
      { title: "Community Agriculture", icon: Sprout, href: "/implica-te", text: "Susținem grădini sociale, educație ecologică, biodiversitate și agricultură comunitară, ca spații de învățare și solidaritate locală." }
    ]
  },
  {
    title: "Inovare și Dezvoltare",
    programmes: [
      { title: "GIUVA Project Pulse", icon: HeartPulse, href: "/proiecte", text: "Dezvoltăm proiecte europene, fundraising responsabil, CSR, parteneriate și măsurarea impactului social, cu transparență și formalizare progresivă." }
    ]
  }
];

export default function ProgramePage() {
  return (
    <>
      <PageHero eyebrow="Programe" title="Programele GIUVA" text="Descoperă cum poți contribui la comunitatea ta prin voluntariat civic, educație, pregătire, solidaritate și experiențe europene." actions={[{ href: "/implica-te", label: "Vreau să mă implic" }, { href: "/contact", label: "Contactează-ne", tone: "ghost" }]} />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-3xl font-black text-[#081f3a]">{group.title}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.programmes.map((program) => {
                  const Icon = program.icon;
                  return (
                    <article key={program.title} className="card interactive-card p-6">
                      <Icon className="text-[#16825d]" size={34} aria-hidden="true" />
                      <h3 className="mt-5 text-2xl font-black text-[#081f3a]">{program.title}</h3>
                      <p className="mt-4 leading-7 text-slate-600">{program.text}</p>
                      <Link href={program.href} className="mt-5 inline-flex items-center gap-2 font-black text-[#1f5fbf]">Vezi programul<ArrowRight size={16} /></Link>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#1a2a4a] px-5 py-14 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center"><h2 className="text-3xl font-black">Vrei să te implici? Contactează-ne!</h2><Link href="/contact" className="btn bg-white text-[#081f3a]">Contact GIUVA</Link></div></section>
    </>
  );
}