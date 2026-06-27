import { roadmap } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function Roadmap() {
  return (
    <section className="bg-[#07111f] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Roadmap"
          title="From community to European pilot."
          text="La crescita deve essere graduale, documentata e responsabile: community first, tecnologia dopo, protocolli sempre."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((step, index) => (
            <MotionShell key={step}>
              <div className="h-full rounded-md border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-sky-300 text-sm font-black text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-black">{step}</h3>
              </div>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
