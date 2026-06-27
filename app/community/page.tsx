import type { Metadata } from "next";
import { Coffee, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { communities } from "@/data/site";

export const metadata: Metadata = {
  title: "GIUVA Community",
  description: "Rețeaua locală de comunități GIUVA în fază de dezvoltare."
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA Community"
        title="O comunitate poate începe de la o cafea."
        text="GIUVA Community este pilonul uman al proiectului: socializare, valori comune, activități civice și inițiative locale în dezvoltare."
        actions={[
          { href: "/deschide-o-sediu", label: "Propune o filială locală" },
          { href: "/contact", label: "Vorbește cu secretariatul", tone: "blue" },
          { href: "/voluntari", label: "Devino voluntar", tone: "ghost" }
        ]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="card p-7">
            <Coffee className="text-[#16825d]" size={38} />
            <h2 className="mt-5 text-3xl font-black text-[#081f3a]">Ne vedem la o cafea?</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Comunitatea începe cu oameni. GIUVA pregătește spații locale deschise, pozitive și responsabile pentru activități civice și formative.
            </p>
          </article>
          <article className="card p-7">
            <MapPin className="text-[#1f5fbf]" size={38} />
            <h2 className="mt-5 text-3xl font-black text-[#081f3a]">Comunități în dezvoltare</h2>
            <div className="mt-5 grid gap-3">
              {communities.map((community) => (
                <p key={community} className="rounded-md bg-slate-50 px-4 py-3 font-bold text-slate-700">
                  {community}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
