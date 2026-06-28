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
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {giuvaAiTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link key={topic.title} href={topic.href} className="card interactive-card p-6">
                <Icon className="text-[#16825d]" size={28} />
                <h2 className="mt-5 text-2xl font-black text-[#081f3a]">{topic.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">Ghid rapid către secțiunea relevantă a portalului.</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
