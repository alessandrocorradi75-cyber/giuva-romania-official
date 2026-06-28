import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { PartnerCard } from "@/components/portal/Cards";
import { EmptyState } from "@/components/portal/EmptyState";
import { PageHero } from "@/components/PageHero";
import { brand, partnerProfiles } from "@/data/site";

export const metadata: Metadata = {
  title: "Partners",
  description: "Parteneriate GIUVA Romania: institutional, academic, NGO, corporate, media și international, fără logouri terțe neoficiale."
};

export default function PartnerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Partners" }]} />
      <PageHero
        eyebrow="Partners"
        title="Parteneriate responsabile, transparente și formalizate."
        text="GIUVA Romania poate discuta cu organizații, companii, fundații, școli și instituții, dar nu declară parteneriate active fără documente și acorduri explicite. Nu afișăm logouri terțe fără aprobare oficială."
        actions={[{ href: "/contact", label: "Propune un parteneriat" }, { href: "/transparenta", label: "Principii publice", tone: "ghost" }]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-7xl rounded-md border-l-4 border-[#16825d] bg-white p-6 text-lg font-bold leading-8 text-slate-700 shadow-sm">{brand.legalBoundary}</div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partnerProfiles.map((partner) => <PartnerCard key={partner.category} partner={partner} />)}
          <EmptyState title="Logouri parteneri" text="Logo-urile instituțiilor sau organizațiilor terțe vor fi afișate numai după acorduri oficiale și permisiuni explicite." href="/contact" action="Contact parteneriate" />
        </div>
      </section>
    </>
  );
}
