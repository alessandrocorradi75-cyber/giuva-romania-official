import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/site";

export const metadata: Metadata = {
  title: "Noutăți",
  description: "Noutăți și actualizări GIUVA Romania."
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Noutăți"
        title="Actualizări din proiectul GIUVA Romania."
        text="Secțiune editorială pregătită pentru comunicare publică, proiecte pilot, community, voluntariat și dezvoltare europeană."
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {news.map((article) => (
            <article key={article.slug} className="card flex h-full flex-col p-6">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#16825d]">{article.category}</p>
              <h2 className="mt-4 text-2xl font-black text-[#081f3a]">{article.title}</h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">{article.date}</p>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{article.excerpt}</p>
              <Link href={`/news/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#16825d]">
                Citește actualizarea
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

