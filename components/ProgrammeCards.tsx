import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { disciplines } from "@/data/site";

export function ProgrammeCards({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? disciplines.slice(0, limit) : disciplines;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((discipline) => {
        const Icon = discipline.icon;
        return (
          <article key={discipline.slug} className={`card interactive-card overflow-hidden border-t-4 ${discipline.border}`}>
            <div className="relative aspect-[16/9] bg-slate-100">
              <Image src={discipline.image} alt={`${discipline.name} GIUVA Romania`} fill sizes="(min-width: 1280px) 31vw, (min-width: 768px) 47vw, calc(100vw - 40px)" className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${discipline.accent} text-white shadow-sm`}>
                  <Icon size={24} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{discipline.color}</p>
                  <h3 className="text-2xl font-black text-[#081f3a]">{discipline.name}</h3>
                </div>
              </div>
              <p className="mt-5 min-h-28 leading-7 text-slate-600">{discipline.description}</p>
              <Link href={`/discipline/${discipline.slug}`} className="btn btn-ghost mt-6 w-full">
                Vezi disciplina
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
