import Link from "next/link";
import { pillars } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function CommunitySection() {
  return (
    <section className="bg-slate-50 px-5 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Arhitectură platformă"
          title="Direcții independente. O viziune comună."
          text="Fiecare pilon are un obiectiv clar și poate crește gradual în cadrul platformei GIUVA.RO."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <MotionShell key={pillar.title}>
                <Link
                  href={pillar.href}
                  className="block h-full rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="mb-5 text-[#0f7f5f]" size={36} />
                  <h3 className="text-xl font-black leading-tight">{pillar.title}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#1f5fbf]">{pillar.byline}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{pillar.text}</p>
                </Link>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
