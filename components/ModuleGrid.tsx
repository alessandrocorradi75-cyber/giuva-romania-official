import type { LucideIcon } from "lucide-react";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function ModuleGrid({
  tag,
  title,
  text,
  modules,
  light = true
}: {
  tag: string;
  title: string;
  text: string;
  modules: { title: string; text: string; icon: LucideIcon }[];
  light?: boolean;
}) {
  return (
    <section className={light ? "bg-slate-50 px-5 py-20 text-slate-950" : "bg-[#050b14] px-5 py-20 text-white"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader light={light} tag={tag} title={title} text={text} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <MotionShell key={module.title}>
                <div className={light ? "h-full rounded-md border border-slate-200 bg-white p-6" : "h-full rounded-md border border-white/10 bg-white/[0.06] p-6"}>
                  <Icon className={light ? "text-red-600" : "text-sky-300"} size={34} />
                  <h3 className="mt-5 text-xl font-black">{module.title}</h3>
                  <p className={light ? "mt-3 leading-7 text-slate-600" : "mt-3 leading-7 text-slate-300"}>{module.text}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
