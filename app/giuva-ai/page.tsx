import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { giuvaAiTopics } from "@/data/site";

export const metadata: Metadata = {
  title: "GIUVA AI",
  description: "Asistent virtual demonstrativ pentru orientarea în portalul GIUVA Romania."
};

export default function GiuvaAiPage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA AI"
        title="Asistent virtual pentru orientare civică."
        subtitle="Release 1.0 demonstrativ"
        text="GIUVA AI ajută vizitatorii să găsească rapid informații despre voluntariat, comunități locale, colaborări, media, academy, funding, Europa și FAQ. Nu oferă instrucțiuni medicale, juridice sau operative."
        actions={[{ href: "/voluntari", label: "Devino voluntar" }, { href: "/contact", label: "Contactează secretariatul", tone: "ghost" }]}
      />
      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {giuvaAiTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link key={topic.title} href={topic.href} className="card interactive-card p-6">
                <Icon className="text-[#16825d]" size={28} aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{topic.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">Ghid rapid către secțiunea relevantă a portalului.</p>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <span className="eyebrow">Reguli AI</span>
          <h2 className="mt-4 text-3xl font-black text-[#081f3a]">GIUVA AI răspunde doar despre GIUVA.</h2>
          <p className="section-text">
            Dacă utilizatorii cer informații fără legătură cu GIUVA sau contrare valorilor GIUVA, legislației române ori standardelor internaționale de respect și decență publică, asistentul refuză politicos și redirecționează discuția către GIUVA.
          </p>
          <blockquote className="mt-6 rounded-xl bg-slate-50 p-5 text-base font-bold leading-7 text-slate-700">
            Sunt aici pentru a vă ajuta cu informații despre GIUVA, proiectele, comunitatea și oportunitățile de voluntariat. Nu pot răspunde la această solicitare, dar vă voi ajuta cu plăcere în orice întrebare legată de GIUVA.
          </blockquote>
        </div>
      </section>
    </>
  );
}
