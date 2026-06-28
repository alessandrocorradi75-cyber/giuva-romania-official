import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { institutionalResources } from "@/data/site";

export const metadata: Metadata = {
  title: "Resurse instituționale",
  description: "Linkuri oficiale către resurse române, europene și internaționale relevante pentru pregătire civică și reziliență comunitară."
};

export default function InstitutionalResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Institutional Resources"
        title="Resurse oficiale pentru informare publică."
        text="Această pagină agregă linkuri publice către instituții și organisme relevante. Listarea nu implică parteneriat, afiliere, autorizare sau recunoaștere oficială a GIUVA."
        actions={[{ href: "/transparenta", label: "Transparență" }, { href: "/contact", label: "Semnalează o resursă", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6">
          {institutionalResources.map((group) => (
            <article key={group.group} className="card p-7 md:p-8">
              <h2 className="text-3xl font-black text-[#081f3a]">{group.group}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 p-5 transition hover:border-[#16825d] hover:bg-slate-50">
                    <ExternalLink className="text-[#1f5fbf]" size={20} />
                    <h3 className="mt-4 text-xl font-black text-[#081f3a]">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
