import { roadmap } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function Roadmap() {
  return (
    <section className="white-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Roadmap"
          title="Extinderea platformei GIUVA."
          text="Acești pași transformă proiectul din prezență publică într-o platformă comunitară reală."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((step, index) => (
            <MotionShell key={step}>
              <div className="h-full rounded-md border border-sky-100 bg-[#f8fcff] p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-teal-100 text-sm font-black text-teal-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-black text-slate-950">{step}</h3>
              </div>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
