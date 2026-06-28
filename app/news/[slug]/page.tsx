import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { newsCenter } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsCenter.find((item) => item.slug === slug);
  return {
    title: article ? article.title : "Noutăți",
    description: article?.excerpt
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsCenter.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "News Center", href: "/news" }, { label: article.title }]} />
      <PageHero eyebrow={article.category} title={article.title} text={article.excerpt} />
      <section className="px-5 pb-20">
        <article className="card mx-auto max-w-5xl overflow-hidden">
          <div className="relative aspect-[16/7] bg-slate-100">
            <Image src={article.image} alt={article.title} fill sizes="(min-width: 1024px) 900px, calc(100vw - 40px)" className="object-cover" />
          </div>
          <div className="p-8">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#16825d]">
              {article.date} · {article.country} · {article.discipline} · {article.author}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{tag}</span>)}
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Această actualizare publică descrie stadiul de dezvoltare GIUVA Romania și va fi completată gradual cu informații validate, comunicate oficiale și rezultate documentate.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              GIUVA Romania rămâne un proiect civic în dezvoltare, cu rol educativ, comunitar și complementar instituțional.
            </p>
            <Link href="/news" className="btn btn-ghost mt-8">Înapoi la News Center</Link>
          </div>
        </article>
      </section>
    </>
  );
}
