import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { FaqAccordion } from "@/components/portal/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { faqGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ Center",
  description: "Întrebări frecvente despre voluntari, academy, Europa, funding, GIUVA AI, privacy, network și donații."
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ Center" }]} />
      <PageHero
        eyebrow="FAQ Center"
        title="Răspunsuri clare pentru întrebări importante."
        text="FAQ Center explică poziționarea GIUVA, voluntariatul, academy, Europa, funding, GIUVA AI, privacy, network și donațiile viitoare într-un format accesibil."
        actions={[{ href: "/contact", label: "Întreabă secretariatul" }, { href: "/giuva-ai", label: "GIUVA AI", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {faqGroups.map((group) => (
            <FaqAccordion key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>
    </>
  );
}
