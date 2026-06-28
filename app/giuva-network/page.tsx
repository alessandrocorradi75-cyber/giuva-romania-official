import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { europeanNetwork } from "@/data/site";

export const metadata: Metadata = {
  title: "GIUVA Network",
  description: "Rețeaua europeană GIUVA: România, Italia, Spania, Austria, Ungaria și GIUVA Europe."
};

export default function GiuvaNetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA Network"
        title="Construim împreună o rețea europeană de comunități."
        text="GIUVA Network prezintă direcția europeană a proiectului. Fiecare țară rămâne autonomă, iar orice cooperare se formalizează separat, legal și transparent."
        actions={[{ href: "/contact", label: "Contact pentru dezvoltare" }, { href: "/resurse-institutionale", label: "Resurse europene", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="navy-band rounded-2xl p-8">
            <Globe2 className="text-[#ffd84d]" size={38} />
            <h2 className="mt-6 text-4xl font-black">Hartă europeană conceptuală</h2>
            <p className="mt-5 leading-8 text-white/82">România, Italia, Spania, Austria, Ungaria și GIUVA Europe sunt prezentate ca roadmap civic. Nu se declară existența unor entități juridice sau parteneriate dacă acestea nu sunt formalizate.</p>
            <div className="mt-8 grid gap-3">
              {europeanNetwork.map((item) => (
                <div key={item.domain} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4">
                  <MapPin className="text-[#7ed6b4]" size={20} />
                  <span className="font-black">{item.country}</span>
                </div>
              ))}
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {europeanNetwork.map((item) => (
              <a key={item.domain} href={item.href} className="card interactive-card p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{item.domain}</p>
                <h2 className="mt-3 text-3xl font-black text-[#081f3a]">{item.label}</h2>
                <p className="mt-2 font-black text-[#16825d]">{item.status}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.note}</p>
              </a>
            ))}
            <Link href="/contact" className="card interactive-card p-6">
              <h2 className="text-3xl font-black text-[#081f3a]">Propune o țară</h2>
              <p className="mt-4 leading-7 text-slate-600">Pentru dezvoltare europeană, contactează secretariatul GIUVA.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
