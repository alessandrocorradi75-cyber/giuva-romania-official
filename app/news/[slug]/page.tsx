import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  return {
    title: article ? article.title : "Noutati",
    description: article?.excerpt
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} text={article.excerpt} />
      <section className="px-5 pb-20">
        <article className="card mx-auto max-w-4xl p-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#16825d]">{article.date}</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Aceasta actualizare publica descrie stadiul de dezvoltare GIUVA Romania si va fi completata gradual cu informatii validate, comunicate oficiale si rezultate documentate.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            GIUVA Romania ramane un proiect civic in dezvoltare, cu rol educativ, comunitar si complementar institutional.
          </p>
          <Link href="/news" className="btn btn-ghost mt-8">
            Inapoi la noutati
          </Link>
        </article>
      </section>
    </>
  );
}
