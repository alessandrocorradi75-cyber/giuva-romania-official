import { partnerCategories } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function Partners() {
  return (
    <section className="white-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Parteneri / Partners"
          title="Parteneriate bazate pe protocol, transparență și impact."
          text="Categoriile sunt pregătite pentru CMS sau backend: logo, status, website și vizibilitate."
          textEn="Partner categories are ready for CMS or backend records: logo, status, website and visibility."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((category) => (
            <MotionShell key={category}>
              <div className="rounded-md border border-sky-100 bg-[#f8fcff] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">Partner category</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">{category}</h3>
              </div>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
