import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { transparencyDocuments } from "@/data/site";

export const metadata: Metadata = {
  title: "Transparență & Documente",
  description: "Transparență, guvernanță și responsabilitate publică pentru GIUVA Romania."
};

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparență & Documente"
        title="Transparență, guvernanță și responsabilitate publică."
        subtitle="GIUVA este o inițiativă civică română cu deschidere europeană."
        text="GIUVA promovează transparența, accountability, integritatea și buna guvernanță, în conformitate cu valorile democratice europene. GIUVA nu înlocuiește instituțiile statului și are caracter complementar instituțional."
        actions={[{ href: "/guvernanta", label: "Guvernanță" }, { href: "/privacy-policy", label: "Privacy", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {transparencyDocuments.map((doc) => (
              <article key={doc.title} className="card interactive-card flex min-h-64 flex-col p-6">
                <Download className="text-[#1f5fbf]" size={24} />
                <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{doc.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{doc.text}</p>
                <Link href={doc.href} className="btn btn-ghost mt-6">Vezi detalii<ArrowRight size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            { title: "Ce publicăm și de ce", text: "Documente publice, politici, principii de cooperare și indicatori de impact după formalizare." },
            { title: "Principii de guvernanță", text: "Legalitate, neutralitate, anti-extremism, safeguarding, drepturi fundamentale și responsabilitate civică." },
            { title: "KPI & impact comunitar", text: "Indicatori actualizabili pentru voluntariat, educație, awareness AED, parteneriate și proiecte." }
          ].map((item) => (
            <article key={item.title} className="card p-7">
              <h2 className="text-3xl font-black text-[#081f3a]">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
