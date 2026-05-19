import { projectPulseMetrics } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectPulseSection() {
  return (
    <section className="blue-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Project Pulse"
          title="Impact public, măsurabil și transparent."
          text="Dashboard-ul pornește de la zero pentru că trebuie să crească doar cu campanii reale, sponsori verificați și rezultate documentate."
          textEn="The dashboard starts at zero because it should grow only through real campaigns, verified sponsors and documented results."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectPulseMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <MotionShell key={metric.label}>
                <div className="rounded-md border border-sky-100 bg-white p-6 shadow-sm">
                  <Icon className="text-red-500" size={34} />
                  <div className="mt-5 text-5xl font-black text-slate-950">{metric.value}</div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">{metric.label}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
