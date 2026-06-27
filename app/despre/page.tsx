import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand, giuvaToday, giuvaTomorrow, values } from "@/data/site";

export const metadata: Metadata = {
  title: "Despre GIUVA",
  description: "Identitate, valori și viziune pentru GIUVA Romania."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Despre GIUVA"
        title="O rețea civică română cu deschidere europeană."
        text="GIUVA Romania este o inițiativă civică în fază de dezvoltare, construită pentru voluntariat urban, educație civică, pregătire comunitară și cultură a prevenției."
        actions={[{ href: "/discipline", label: "Vezi disciplinele" }, { href: "/contact", label: "Contactează secretariatul", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {[
            { title: "GIUVA astăzi", items: giuvaToday },
            { title: "GIUVA mâine", items: giuvaTomorrow }
          ].map((block) => (
            <article key={block.title} className="card p-7">
              <h2 className="text-3xl font-black text-[#081f3a]">{block.title}</h2>
              <div className="mt-6 grid gap-3">
                {block.items.map((item) => (
                  <p key={item} className="flex gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#16825d]" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="navy-band px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow bg-white/10 text-[#ffd84d]">Valori</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">{brand.acronym} crește pe valori clare.</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-md border border-white/15 bg-white/8 px-4 py-3 font-black text-white">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
