import type { Metadata } from "next";
import { DisciplineCards } from "@/components/DisciplineCards";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Discipline GIUVA",
  description: "Cele noua directii civice ale GIUVA Romania."
};

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Discipline GIUVA"
        title="Noua directii civice, o retea comuna."
        text="Fiecare disciplina explica o parte clara a asociatiei: comunitate, AED, suport civic, pregatire, storytelling, fundraising, educatie, tineri si seniori."
        visual
        imageSrc="/brand/giuva-romania-disciplines.webp"
        imageAlt="Cele 9 discipline GIUVA Romania si tricolorul Romaniei"
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <DisciplineCards />
        </div>
      </section>
    </>
  );
}
