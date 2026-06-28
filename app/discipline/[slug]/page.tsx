import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, HelpCircle } from "lucide-react";
import { MockForm } from "@/components/MockForm";
import { PageHero } from "@/components/PageHero";
import { disciplines, volunteerFields } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return disciplines.map((discipline) => ({ slug: discipline.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const discipline = disciplines.find((item) => item.slug === slug);
  return {
    title: discipline ? discipline.name : "Discipline GIUVA",
    description: discipline?.description
  };
}

export default async function DisciplineDetailPage({ params }: Props) {
  const { slug } = await params;
  const discipline = disciplines.find((item) => item.slug === slug);

  if (!discipline) {
    notFound();
  }

  const Icon = discipline.icon;

  return (
    <>
      <PageHero
        eyebrow="Disciplina GIUVA"
        title={discipline.name}
        subtitle={discipline.mission}
        text={discipline.description}
        actions={[
          { href: "/voluntari", label: "Vreau să particip" },
          { href: "/transparenta", label: "Documente", tone: "ghost" }
        ]}
        visual
        imageSrc={discipline.image}
        imageAlt={`${discipline.name} GIUVA Romania`}
      />

      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className={`card border-t-4 ${discipline.border} p-7`}>
            <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${discipline.accent} text-white`}>
              <Icon size={28} />
            </span>
            <h2 className="mt-6 text-3xl font-black text-[#081f3a]">Cum participi</h2>
            <p className="mt-4 leading-7 text-slate-600">Alege disciplina în formularul de voluntariat sau contactează secretariatul pentru o discuție de orientare.</p>
            <Link href="/voluntari" className="btn btn-primary mt-6 w-full">Devino voluntar<ArrowRight size={17} /></Link>
          </aside>

          <div className="grid gap-6">
            <article className="card p-7">
              <h2 className="text-3xl font-black text-[#081f3a]">Activități</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {discipline.activities.map((activity) => (
                  <p key={activity} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700">{activity}</p>
                ))}
              </div>
            </article>

            <article className="card p-7">
              <h2 className="flex items-center gap-3 text-3xl font-black text-[#081f3a]"><HelpCircle className="text-[#1f5fbf]" />FAQ</h2>
              <div className="mt-5 grid gap-4">
                {discipline.faq.map((item) => (
                  <div key={item.question} className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-black text-[#081f3a]">{item.question}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="card p-7">
              <h2 className="flex items-center gap-3 text-3xl font-black text-[#081f3a]"><FileText className="text-[#16825d]" />Documente și noutăți corelate</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-black text-[#081f3a]">Documente corelate</h3>
                  <ul className="mt-3 grid gap-2 text-slate-600">
                    {discipline.documents.map((doc) => <li key={doc}>- {doc}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-black text-[#081f3a]">Noutăți corelate</h3>
                  <ul className="mt-3 grid gap-2 text-slate-600">
                    {discipline.relatedNews.map((slug) => <li key={slug}><Link className="font-bold text-[#1f5fbf]" href={`/news/${slug}`}>{slug}</Link></li>)}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Modul de interes</span>
            <h2 className="section-title mt-5">Trimite interes pentru {discipline.name}.</h2>
          </div>
          <MockForm fields={volunteerFields} submitLabel="Înregistrează interesul" successMessage="Interesul a fost validat local pentru această demonstrație publică." />
        </div>
      </section>
    </>
  );
}
