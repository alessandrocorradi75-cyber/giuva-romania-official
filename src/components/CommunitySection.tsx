"use client";

import Link from "next/link";
import { pillars } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { withLocale } from "@/i18n/config";

const header = {
  tag: { ro: "Structură coordonată", en: "Coordinated structure", it: "Struttura coordinata" },
  title: {
    ro: "Cinci piloni independenți, o singură platformă civică.",
    en: "Five independent pillars, one civic platform.",
    it: "Cinque pilastri indipendenti, una sola piattaforma civica."
  },
  text: {
    ro: "Fiecare divizie poate crește separat, dar rămâne conectată la același cadru civic: reziliență, prevenție, voluntariat și cooperare.",
    en: "Each division can grow independently while remaining connected to the same civic framework: resilience, prevention, volunteering and cooperation.",
    it: "Ogni divisione può crescere autonomamente restando collegata allo stesso quadro civico: resilienza, prevenzione, volontariato e cooperazione."
  }
};

export function CommunitySection() {
  const { language, text } = useLanguage();

  return (
    <section className="dark-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={text(header.tag)} title={text(header.title)} text={text(header.text)} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <MotionShell key={text(pillar.title)}>
                <Link href={withLocale(language, `/${pillar.slug}`)} className="pillar-card block h-full p-5">
                  <Icon className="mb-5 text-red-400" size={36} />
                  <h3 className="text-xl font-black leading-tight text-white">{text(pillar.title)}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">{text(pillar.mission)}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{text(pillar.purpose)}</p>
                </Link>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
