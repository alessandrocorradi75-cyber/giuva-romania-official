import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand, partnerAreas } from "@/data/site";

export const metadata: Metadata = {
  title: "Parteneri & Sponsori",
  description: "Parteneriate viitoare și cooperare responsabilă pentru GIUVA Romania."
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Parteneri & Sponsori"
        title="Cooperare prudentă, transparentă și formalizată."
        text="GIUVA Romania poate discuta cu organizații, companii, fundații, școli și instituții, dar nu declară parteneriate active fără documente și acorduri explicite."
        actions={[
          { href: "/contact", label: "Propune un parteneriat" },
          { href: "/sustine", label: "Susține un proiect", tone: "blue" },
          { href: "/despre", label: "Citește poziționarea", tone: "ghost" }
        ]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-7xl rounded-md border-l-4 border-[#16825d] bg-white p-6 text-lg font-bold leading-8 text-slate-700 shadow-sm">
          {brand.legalBoundary}
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partnerAreas.map((area) => (
            <article key={area} className="card p-6">
              <Building2 className="text-[#16825d]" size={34} />
              <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{area}</h2>
              <p className="mt-4 leading-7 text-slate-600">Zonă pregătită pentru criterii, documente, responsabilități și acorduri viitoare.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
