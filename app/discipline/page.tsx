import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, GraduationCap, HandHeart, Leaf, Radio, ShieldCheck, Sprout, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Discipline GIUVA - Alege modul tău de implicare",
  description: "Explorează disciplinele GIUVA și găsește modul perfect de a contribui la comunitate."
};

const areas = [
  { title: "AJUTĂ PE ALȚII", icon: HandHeart, text: "Dacă vrei să dai o mână de ajutor și să faci o diferență directă în comunitatea ta, aceste discipline sunt pentru tine.", items: ["Community & Social", "Food Solidarity", "Civil Support"] },
  { title: "ÎNVAȚĂ ȘI PREPARĂ-TE", icon: GraduationCap, text: "Dacă vrei să acumulezi cunoștințe, să te pregătești pentru situații neprevăzute sau să dezvolți abilități noi, aici este locul tău.", items: ["Academy", "Preparedness", "Youth", "Senior"] },
  { title: "TRĂIEȘTE EXPERIENȚE UNICE", icon: Leaf, text: "Dacă vrei să trăiești aventuri, să călătorești responsabil și să fii parte din ceva special, aceste discipline te așteaptă.", items: ["Journey", "Riders Rescue", "Community Agriculture"] }
];

const details = [
  { title: "Community & Social", icon: Users, href: "/discipline/community-social", activities: "întâlniri comunitare, socializare, sprijin local, incluziune" },
  { title: "Civil Support", icon: Radio, href: "/discipline/civil-support", activities: "suport civic, logistică, evenimente și prevenție" },
  { title: "Preparedness", icon: ShieldCheck, href: "/discipline/preparedness", activities: "pregătire comunitară, workshop-uri și educație preventivă" },
  { title: "Academy", icon: GraduationCap, href: "/discipline/academy", activities: "formare, mentorat, leadership civic și awareness AED" },
  { title: "Journey", icon: Leaf, href: "/discipline/journey", activities: "povești, turism responsabil, fotografie și memorie comunitară" },
  { title: "Riders Rescue", icon: Bike, href: "/discipline/riders-rescue", activities: "mobilitate civică, awareness AED și suport la evenimente" },
  { title: "Youth", icon: Sprout, href: "/discipline/youth", activities: "proiecte pentru tineri, educație civică și participare" }
];

export default function DisciplinesPage() {
  return (
    <>
      <PageHero eyebrow="Discipline" title="Disciplinele GIUVA - Alege modul tău de implicare" text="Alegerea ta contează. Descoperă disciplina care ți se potrivește și intră treptat într-o comunitate civică europeană." visual imageSrc="/brand/giuva-romania-disciplines.webp" imageAlt="Discipline GIUVA Romania" actions={[{ href: "/implica-te", label: "Implică-te" }]} />
      <section className="bg-[#f8f9fa] px-5 py-16"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">{areas.map((area) => { const Icon = area.icon; return <article key={area.title} className="card p-7"><Icon className="text-[#16825d]" size={34}/><h2 className="mt-5 text-2xl font-black text-[#081f3a]">{area.title}</h2><p className="mt-4 leading-7 text-slate-600">{area.text}</p><div className="mt-5 flex flex-wrap gap-2">{area.items.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-black text-[#081f3a]">{item}</span>)}</div></article>; })}</div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black text-[#081f3a]">Detaliu discipline</h2><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{details.map((item) => { const Icon = item.icon; return <article key={item.title} className="card interactive-card p-6"><Icon className="text-[#16825d]" size={30}/><h3 className="mt-4 text-2xl font-black text-[#081f3a]">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">Activități: {item.activities}. Beneficii: înveți, ajuți și participi în ritmul tău.</p><Link href={item.href} className="mt-5 inline-flex items-center gap-2 font-black text-[#1f5fbf]">Află cum te implici<ArrowRight size={16}/></Link></article>; })}</div></div></section>
    </>
  );
}