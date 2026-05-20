import type { LucideIcon } from "lucide-react";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import type { LocalizedText } from "@/data/site";

type Localizable = LocalizedText | string;

const localize = (value: Localizable) => (typeof value === "string" ? value : value.ro);

export function ModuleGrid({
  tag,
  title,
  text,
  textEn,
  modules,
  tone = "dark"
}: {
  tag: Localizable;
  title: Localizable;
  text: Localizable;
  textEn?: string;
  modules: { title: Localizable; text: Localizable; icon: LucideIcon }[];
  light?: boolean;
  tone?: "dark" | "red";
}) {
  return (
    <section className={tone === "red" ? "red-section px-5 py-20" : "dark-section px-5 py-20"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={localize(tag)} title={localize(title)} text={localize(text)} textEn={textEn} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <MotionShell key={localize(module.title)}>
                <div className="h-full rounded-md border border-white/10 bg-white/5 p-6 shadow-2xl">
                  <Icon className="text-cyan-200" size={34} />
                  <h3 className="mt-5 text-xl font-black text-white">{localize(module.title)}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{localize(module.text)}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
