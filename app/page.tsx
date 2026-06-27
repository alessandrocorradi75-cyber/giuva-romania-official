import Link from "next/link";
import { headers } from "next/headers";
import { ArrowRight, CheckCircle2, Facebook, Globe2, Linkedin } from "lucide-react";
import {
  brand,
  ctas,
  associationFacts,
  giuvaToday,
  giuvaTomorrow,
  disciplines,
  europeanNetwork,
  socialLinks,
} from "@/data/site";
import { getSiteByHost } from "@/lib/siteByHost";

export default async function HomePage() {
  const h = await headers();
  const site = getSiteByHost(h.get("host") || "");

  return (
    <>
      <section className="home-hero px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-5xl text-center">
            <span className="eyebrow">{site.eyebrow}</span>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#081f3a] md:text-7xl">
              {site.title}
            </h1>
            <p className="mt-4 text-xl font-black uppercase tracking-[0.12em] text-[#16825d]">{brand.fullName}</p>
            <p className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-tight text-[#081f3a] md:text-4xl">
              {brand.claim}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{site.description}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <Link href={ctas.volunteer.href} className="btn btn-primary hero-primary-cta">
                {ctas.volunteer.label}
                <ArrowRight size={19} />
              </Link>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={ctas.chapter.href} className="btn btn-blue">
                  {ctas.chapter.label}
                </Link>
                <Link href={ctas.secretariat.href} className="btn btn-ghost">
                  {ctas.secretariat.label}
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero-photo-panel mt-12">
            <img src="/brand/giuva-romania-disciplines-flag.png" alt={site.title} />
          </figure>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {associationFacts.map((fact) => (
            <article key={fact.title} className="card interactive-card flex min-h-56 flex-col justify-between p-6">
              <span className="eyebrow">{fact.title}</span>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-700">{fact.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {[
            { title: site.today, items: giuvaToday },
            { title: site.tomorrow, items: giuvaTomorrow },
          ].map((block) => (
            <article key={block.title} className="card p-7 md:p-8">
              <h2 className="text-3xl font-black text-[#081f3a]">{block.title}</h2>
              <div className="mt-6 grid gap-3">
                {block.items.map((item) => (
                  <p key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#16825d]" size={20} />
                    <span className="font-semibold leading-7">{item}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="eyebrow">{site.disciplinesEyebrow}</span>
            <h2 className="section-title mt-5">{site.sectionTitle}</h2>
            <p className="section-text">{site.disciplinesText}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {disciplines.map((discipline) => {
              const Icon = discipline.icon;
              return (
                <article key={discipline.name} className="card interactive-card discipline-card flex h-full flex-col p-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${discipline.accent} text-white shadow-sm`}>
                    <Icon size={27} />
                  </div>
                  <h2 className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">{discipline.name}</h2>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{discipline.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">GIUVA Europe</span>
          <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="section-title">GIUVA Europe</h2>
              <p className="section-text text-2xl font-black text-[#16825d]">{site.europeText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {europeanNetwork.map((item) => (
                <a key={item.domain} href={item.href} className="card interactive-card p-5">
                  <Globe2 className="text-[#1f5fbf]" size={28} />
                  <h3 className="mt-4 text-2xl font-black text-[#081f3a]">{item.label}</h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#16825d]">{item.status}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm md:flex-row md:text-left">
          <div>
            <span className="eyebrow">Social</span>
            <h2 className="mt-4 text-3xl font-black text-[#081f3a]">{site.socialTitle}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {link.label === "LinkedIn" ? <Linkedin size={18} /> : <Facebook size={18} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}