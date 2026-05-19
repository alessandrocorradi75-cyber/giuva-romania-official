import { ExternalLink, FileText, Smartphone } from "lucide-react";
import { legalAndBenchmarkReferences } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function ReferenceBenchmarks() {
  return (
    <section className="blue-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Referințe și benchmark"
          title="Informații utile pentru cadrul juridic și dezvoltarea viitoare."
          text="Aceste surse sunt folosite pentru documentare, inspirație și posibile contacte. Nu indică afiliere sau parteneriat existent."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {legalAndBenchmarkReferences.map((reference, index) => {
            const Icon = index === 0 ? FileText : Smartphone;
            return (
              <MotionShell key={reference.title}>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col rounded-md border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="text-sky-700" size={36} />
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
                    {reference.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{reference.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{reference.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                    Deschide referința
                    <ExternalLink size={16} />
                  </span>
                </a>
              </MotionShell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
