"use client";

import { projectPulseMetrics } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

const header = {
  tag: { ro: "Project Pulse", en: "Project Pulse", it: "Project Pulse" },
  title: {
    ro: "Fiecare donație trebuie să aibă o destinație clară.",
    en: "Every donation must have a clear destination.",
    it: "Ogni donazione deve avere una destinazione chiara."
  },
  text: {
    ro: "Project Pulse este placeholder-ul pentru campanii AED/DEA, echipamente, uniforme, mobilitate și infrastructură, construit cu transparență publică.",
    en: "Project Pulse is the placeholder for AED campaigns, equipment, uniforms, mobility and infrastructure, built around public transparency.",
    it: "Project Pulse è il placeholder per campagne AED, attrezzature, uniformi, mobilità e infrastruttura, costruito con trasparenza pubblica."
  }
};

export function ProjectPulseSection() {
  const { text } = useLanguage();

  return (
    <section className="red-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={text(header.tag)} title={text(header.title)} text={text(header.text)} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectPulseMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <MotionShell key={text(metric.label)}>
                <div className="h-full rounded-md border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
                  <Icon className="text-red-400" size={34} />
                  <div className="mt-5 text-5xl font-black text-white">{metric.value}</div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-300">{text(metric.label)}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
