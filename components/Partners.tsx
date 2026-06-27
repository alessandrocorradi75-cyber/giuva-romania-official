import { partnerCategories } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function Partners() {
  return (
    <section className="bg-white px-5 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Partners system"
          title="Partnerships built on protocols, transparency and impact."
          text="Le categorie sono già pronte per diventare record CMS o tabelle backend con logo, status, website e visibility."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((category) => (
            <MotionShell key={category}>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">Partner category</p>
                <h3 className="mt-2 text-2xl font-black">{category}</h3>
              </div>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
