import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, HandHeart, HeartPulse, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Susține GIUVA",
  description: "Susține GIUVA Romania prin donații, sponsorizări și inițiative locale cu destinație clară și transparență publică."
};

const supportAreas = [
  { title: "Educație și awareness AED", text: "Campanii publice, materiale educaționale, ateliere și cultură de prevenție.", icon: HeartPulse },
  { title: "Inițiative locale", text: "Proiecte comunitare pornite de oameni, validate și comunicate transparent.", icon: HandHeart },
  { title: "Logistică și materiale", text: "Resurse pentru evenimente civice, identificare, comunicare și activități comunitare.", icon: ShieldCheck },
  { title: "Inițiative europene viitoare", text: "Pregătirea unor proiecte comune cu comunități GIUVA din alte țări, fără parteneriate implicite.", icon: FileText }
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Susține"
        title="Fiecare donație trebuie să aibă o destinație clară."
        text="GIUVA Romania acceptă susținere prin canale oficiale activate progresiv. Donațiile și sponsorizările trebuie să sprijine proiecte documentate, inițiative locale și dezvoltarea comunității, cu transparență și raportare publică."
        actions={[
          { href: "/contact", label: "Contactează secretariatul" },
          { href: "/partner", label: "Propune un parteneriat", tone: "blue" },
          { href: "/transparenta", label: "Vezi transparența", tone: "ghost" }
        ]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-7xl rounded-md border-l-4 border-[#16825d] bg-white p-6 text-lg font-bold leading-8 text-slate-700 shadow-sm">
          {brand.legalBoundary}
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supportAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="card interactive-card p-6">
                <Icon className="text-[#16825d]" size={34} aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{area.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {[
            { title: "Cum sunt folosite resursele", text: "Prin obiective publice, destinație clară, proiecte definite și comunicare pe înțelesul comunității." },
            { title: "Transparență", text: "GIUVA pregătește rapoarte, KPI, documente și actualizări publice pentru susținerea proiectelor." },
            { title: "Inițiative locale", text: "Comunitățile pot propune idei, iar GIUVA le poate dezvolta gradual prin voluntari, parteneri și susținători." }
          ].map((item) => (
            <article key={item.title} className="card p-7">
              <h2 className="text-3xl font-black text-[#081f3a]">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 font-black text-[#1f5fbf]">
                Discută cu GIUVA
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
