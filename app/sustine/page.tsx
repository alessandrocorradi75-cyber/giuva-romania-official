import type { Metadata } from "next";
import { HandHeart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand, donationOptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Susține GIUVA",
  description: "Susținere viitoare pentru GIUVA Romania."
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Susține"
        title="Secțiunea de susținere va fi activată progresiv."
        text="GIUVA Romania este în fază de constituire și consolidare. Donațiile publice vor fi activate doar după validarea cadrului legal, administrativ și fiscal."
        actions={[
          { href: "/contact", label: "Scrie secretariatului" },
          { href: "/partner", label: "Propune un parteneriat", tone: "blue" },
          { href: "/despre", label: "Citește despre GIUVA", tone: "ghost" }
        ]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-7xl rounded-md border-l-4 border-[#16825d] bg-white p-6 text-lg font-bold leading-8 text-slate-700 shadow-sm">
          {brand.legalBoundary}
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {donationOptions.map((option) => (
            <article key={option} className="card p-6">
              <HandHeart className="text-[#16825d]" size={34} />
              <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{option}</h2>
              <p className="mt-4 leading-7 text-slate-600">În pregătire, cu transparență, trasabilitate și comunicare publică prudentă.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
