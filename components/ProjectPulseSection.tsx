import { projectPulseMetrics } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectPulseSection() {
  return (
    <section className="bg-[#050b14] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Project Pulse"
          title="Il cuore economico deve essere pubblico, misurabile e trasparente."
          text="La dashboard parte da zero perché deve crescere con campagne reali, sponsor verificati e risultati documentati."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectPulseMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <MotionShell key={metric.label}>
                <div className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                  <Icon className="text-red-500" size={34} />
                  <div className="mt-5 text-5xl font-black">{metric.value}</div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-300">{metric.label}</p>
                </div>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
