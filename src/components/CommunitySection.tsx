import Link from "next/link";
import { pillars } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function CommunitySection() {
  return (
    <section className="white-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Cei cinci piloni"
          title="GIUVA are cinci direcții autonome."
          text="Fiecare pilon poate crește separat, dar rămâne conectat la platforma mamă GIUVA.RO."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <MotionShell key={pillar.title}>
                <Link href={pillar.href} className="block h-full rounded-md border border-sky-100 bg-[#f8fcff] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="mb-5 text-sky-700" size={36} />
                  <h3 className="text-xl font-black leading-tight text-slate-950">{pillar.title}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-teal-700">{pillar.byline}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{pillar.text}</p>
                </Link>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
