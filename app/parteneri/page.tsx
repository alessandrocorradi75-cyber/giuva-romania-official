import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, HandHeart, Network } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Parteneri GIUVA - Colaborăm pentru comunitate", description: "Descoperă partenerii GIUVA și cum poți deveni partener. Împreună construim comunități mai puternice." };
const sections = [
  { title: "Parteneri instituționali", icon: Building2, text: "Primării, instituții publice și autorități locale, doar prin acorduri formale și fără parteneriate implicite." },
  { title: "Parteneri educaționali", icon: GraduationCap, text: "Școli, licee, universități și centre de formare pentru educație civică și pregătire comunitară." },
  { title: "Parteneri corporate", icon: HandHeart, text: "Companii care pot susține GIUVA prin CSR, donații, voluntariat corporatist și resurse transparente." },
  { title: "Parteneri comunitari", icon: Network, text: "Asociații locale, ONG-uri, grupuri de inițiativă și comunități care vor să lucreze împreună." }
];
export default function PartnersRoPage() { return <><PageHero eyebrow="Parteneri" title="Partenerii GIUVA" text="Împreună construim comunități mai puternice. GIUVA comunică public doar parteneriate formalizate și documentate." actions={[{ href: "/contact", label: "Contactează-ne pentru parteneriat" }]} /><section className="px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">{sections.map((item) => { const Icon = item.icon; return <article key={item.title} className="card p-7"><Icon className="text-[#16825d]" size={34}/><h2 className="mt-5 text-3xl font-black text-[#081f3a]">{item.title}</h2><p className="mt-4 leading-8 text-slate-600">{item.text}</p></article>; })}</div></section><section className="bg-[#f8f9fa] px-5 py-16"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black text-[#081f3a]">Cum devii partener GIUVA?</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{["Colaborare în proiecte comunitare", "Programe CSR personalizate", "Parteneriate în proiecte europene"].map((item) => <div key={item} className="card p-6 font-bold text-slate-700">{item}</div>)}</div><Link href="/contact" className="btn btn-primary mt-8">Contactează-ne pentru parteneriat<ArrowRight size={16}/></Link></div></section></>; }