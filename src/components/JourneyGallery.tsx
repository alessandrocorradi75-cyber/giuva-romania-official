"use client";

import Image from "next/image";
import { journeyStories } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

const header = {
  tag: { ro: "Journey", en: "Journey", it: "Journey" },
  title: {
    ro: "Documentare umană, nu decor.",
    en: "Human documentation, not decoration.",
    it: "Documentazione umana, non decorazione."
  },
  text: {
    ro: "Journey transformă drumurile, oamenii, trainingul și campaniile în povești verificabile, fotografii și memorie colectivă.",
    en: "Journey turns roads, people, training and campaigns into verifiable stories, photography and collective memory.",
    it: "Journey trasforma strade, persone, training e campagne in storie verificabili, fotografie e memoria collettiva."
  }
};

export function JourneyGallery() {
  const { text } = useLanguage();

  return (
    <section className="dark-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={text(header.tag)} title={text(header.title)} text={text(header.text)} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {journeyStories.map((story) => (
            <MotionShell key={text(story.title)}>
              <article className="h-full overflow-hidden rounded-md border border-white/10 bg-white/5 shadow-2xl">
                <div className="relative aspect-[4/3] bg-slate-900">
                  <Image src={story.image} alt={text(story.title)} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{text(story.category)}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{text(story.title)}</h3>
                  <p className="mt-1 text-sm font-bold text-slate-400">{text(story.location)}</p>
                  <p className="mt-4 leading-7 text-slate-300">{text(story.text)}</p>
                </div>
              </article>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
