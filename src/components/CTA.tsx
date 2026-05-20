"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  title: {
    ro: "Construim o platformă civică europeană, nu o asociație de hobby.",
    en: "We are building a European civic platform, not a hobby association.",
    it: "Stiamo costruendo una piattaforma civica europea, non un’associazione hobby."
  },
  text: {
    ro: "GIUVA caută voluntari, parteneri instituționali, sponsori, formatori și comunități pregătite să transforme solidaritatea în capacitate reală.",
    en: "GIUVA is looking for volunteers, institutional partners, sponsors, trainers and communities ready to turn solidarity into real capacity.",
    it: "GIUVA cerca volontari, partner istituzionali, sponsor, formatori e comunità pronte a trasformare la solidarietà in capacità reale."
  },
  action: { ro: "Contact GIUVA", en: "Contact GIUVA", it: "Contatta GIUVA" }
};

export function CTA() {
  const { text } = useLanguage();

  return (
    <section className="bg-cta px-5 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">{text(copy.title)}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text(copy.text)}</p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="btn red">
            {text(copy.action)}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
