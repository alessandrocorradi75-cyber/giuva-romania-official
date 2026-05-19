import type { LucideIcon } from "lucide-react";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function ModuleGrid({
  tag,
  title,
  text,
  textEn,
  modules,
  light = true
}: {
  tag: string;
  title: string;
  text: string;
  textEn?: string;
  modules: { title: string; text: string; icon: LucideIcon }[];
  light?: boolean;
}) {
  return (
    <section className={light ? "soft-section px-5 py-20" : "blue-section px-5 py-20"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader light={light} tag={tag} title={title} text={text} textEn={textEn} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <MotionShell key={module.title}>
                <div className="h-full rounded-md border border-sky-100 bg-white p-6 shadow-sm">
                  <Icon className="text-sky-700" size={34} />
                  <h3 className="mt-5 text-xl font-black text-slate-950">{module.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{module.text}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
