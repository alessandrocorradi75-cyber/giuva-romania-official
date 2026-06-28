import type { Metadata } from "next";
import { Network } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { governanceRoles } from "@/data/site";

export const metadata: Metadata = {
  title: "Guvernanță",
  description: "Structură de guvernanță GIUVA Romania: roluri, responsabilități și organigramă."
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Guvernanță"
        title="Roluri clare, responsabilitate publică și organigramă transparentă."
        text="Pagina prezintă structura de guvernanță pregătită pentru formalizare. Persoanele nominale vor fi publicate doar după validare juridică și accept instituțional intern."
        actions={[{ href: "/transparenta", label: "Transparență" }, { href: "/contact", label: "Contact secretariat", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="navy-band rounded-2xl p-8">
            <Network className="text-[#ffd84d]" size={40} />
            <h2 className="mt-6 text-4xl font-black">Organigramă</h2>
            <p className="mt-5 leading-8 text-white/82">Președinte, Vicepreședinte, Secretar General, Consiliu Director și Coordonatori Naționali. Structură publică, prudentă și actualizabilă.</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {governanceRoles.map((item) => (
              <article key={item.role} className="card p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{item.status}</p>
                <h2 className="mt-3 text-2xl font-black text-[#081f3a]">{item.role}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.responsibility}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
