"use client";

import { roadmap } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

const header = {
  tag: { ro: "Scalare europeană", en: "European scale", it: "Scala europea" },
  title: {
    ro: "GIUVA este construită ca rețea civică scalabilă.",
    en: "GIUVA is built as a scalable civic network.",
    it: "GIUVA è costruita come rete civica scalabile."
  },
  text: {
    ro: "Obiectivul pe termen lung este un model european replicabil pentru comunități, voluntari, municipalități și sponsori.",
    en: "The long-term objective is a European model that communities, volunteers, municipalities and sponsors can replicate.",
    it: "L’obiettivo a lungo termine è un modello europeo replicabile da comunità, volontari, municipalità e sponsor."
  }
};

export function Roadmap() {
  const { text } = useLanguage();

  return (
    <section className="dark-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={text(header.tag)} title={text(header.title)} text={text(header.text)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((item, index) => (
            <MotionShell key={text(item)}>
              <div className="h-full rounded-md border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-black text-red-400">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-black text-white">{text(item)}</h3>
              </div>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
