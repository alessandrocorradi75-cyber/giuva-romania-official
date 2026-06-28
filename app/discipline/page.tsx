import type { Metadata } from "next";
import { DisciplineCards } from "@/components/DisciplineCards";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Discipline GIUVA",
  description: "Disciplinele civice ale GIUVA Romania."
};

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipline GIUVA"
        title="Discipline civice, pagini dedicate și participare responsabilă."
        text="Fiecare disciplină explică o parte clară a portalului: misiune, activități, FAQ, documente corelate, noutăți și formular de interes."
        visual
        imageSrc="/brand/giuva-romania-disciplines.webp"
        imageAlt="Discipline GIUVA Romania și tricolorul României"
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <DisciplineCards />
        </div>
      </section>
    </>
  );
}
