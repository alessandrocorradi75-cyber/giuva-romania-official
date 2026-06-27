import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informare cookie provizorie pentru GIUVA Romania."
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie"
        title="Cookie Policy"
        text="Informare publica provizorie privind utilizarea cookie-urilor pe site-ul GIUVA Romania."
      />
      <section className="px-5 pb-20">
        <div className="card mx-auto max-w-4xl p-8 text-slate-700">
          <div className="grid gap-6 leading-8">
            <p>
              Site-ul GIUVA Romania foloseste functionalitati standard ale platformei Next.js pentru afisarea paginilor publice. In aceasta etapa nu este activat un sistem public de profilare, marketing automation sau tracking avansat.
            </p>
            <p>
              Daca vor fi introduse servicii de analytics, formulare conectate, harti interactive sau instrumente de masurare a impactului, aceasta politica va fi actualizata inainte de activare.
            </p>
            <p>
              Pentru intrebari privind cookie-urile sau confidentialitatea, contactul public este: info@giuva.ro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
