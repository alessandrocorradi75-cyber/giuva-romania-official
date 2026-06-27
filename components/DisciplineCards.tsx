import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { disciplines } from "@/data/site";

export function DisciplineCards({ compact = false }: { compact?: boolean }) {
  const visible = compact ? disciplines.slice(0, 9) : disciplines;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visible.map((discipline) => {
        const Icon = discipline.icon;
        return (
          <article key={discipline.slug} className="card interactive-card discipline-card flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${discipline.accent} text-white shadow-sm`}>
                <Icon size={27} />
              </div>
              <span className="status-pill">in dezvoltare</span>
            </div>
            <h2 className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">{discipline.name}</h2>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{discipline.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-slate-600">
                {discipline.color}
              </span>
              <Link href={discipline.slug === "riders-rescue" ? "/riders-rescue" : "/discipline"} className="inline-flex items-center gap-2 text-sm font-black text-[#16825d]">
                Afla mai multe
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
