import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { ArrowRight, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { MissionPrinciples } from "@/components/MissionPrinciples";
import { PortalStats } from "@/components/PortalStats";
import { ProgrammeCards } from "@/components/ProgrammeCards";
import { SocialChannels } from "@/components/SocialChannels";
import { NewsletterBox } from "@/components/portal/NewsletterBox";
import { SearchBox } from "@/components/portal/SearchBox";
import { Testimonials } from "@/components/portal/Testimonials";
import { TrustIndicators } from "@/components/portal/TrustIndicators";
import { associationFacts, brand, ctas, europeanNetwork, giuvaToday, giuvaTomorrow, portalSearchItems } from "@/data/site";
import { getSiteByHost } from "@/lib/siteByHost";

export default async function HomePage() {
  const h = await headers();
  const site = getSiteByHost(h.get("host") || "");

  return (
    <>
      <section className="portal-hero relative min-h-[86vh] overflow-hidden bg-[#081f3a] px-5 pb-12 pt-28 text-white md:pt-36">
        <Image src="/brand/giuva-romania-disciplines-flag.webp" alt="GIUVA Romania, voluntari, comunitate, România și Europa" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081f3a]/92 via-[#081f3a]/64 to-[#081f3a]/10" />
        <div className="relative mx-auto grid max-w-[1500px] items-end gap-10 lg:grid-cols-[0.78fr_0.22fr]">
          <div className="max-w-4xl py-10 md:py-16">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">{site.eyebrow}</span>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-tight md:text-7xl xl:text-8xl">{site.title}</h1>
            <p className="mt-5 max-w-4xl break-words text-base font-black uppercase tracking-[0.08em] text-[#7ed6b4] sm:text-xl md:text-2xl md:tracking-[0.12em]">{brand.fullName}</p>
            <p className="mt-6 max-w-3xl text-3xl font-black leading-tight md:text-5xl">{brand.claim}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88 md:text-xl">{site.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={ctas.volunteer.href} className="btn btn-primary hero-primary-cta">{ctas.volunteer.label}<ArrowRight size={19} aria-hidden="true" /></Link>
              <Link href={ctas.chapter.href} className="btn btn-blue">{ctas.chapter.label}</Link>
              <Link href={ctas.partner.href} className="btn bg-white text-[#081f3a]">Parteneriate instituționale</Link>
            </div>
            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              {["Civic", "European", "Complementar instituțional"].map((item) => (
                <span key={item} className="rounded-xl border border-white/18 bg-white/10 p-4 text-sm font-black uppercase tracking-[0.12em] backdrop-blur">{item}</span>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-white/18 bg-white/12 p-5 shadow-2xl backdrop-blur-md" aria-labelledby="home-ai-title">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ffd84d]">GIUVA AI</p>
            <h2 id="home-ai-title" className="mt-2 text-2xl font-black">Asistent virtual</h2>
            <p className="mt-3 text-sm leading-6 text-white/86">Vizibil pe tot site-ul. Ghidează către voluntariat, sedii, parteneriate, media, academy, funding, Europa și FAQ.</p>
            <Link href="/giuva-ai" className="btn mt-5 w-full bg-white text-[#081f3a]">Vezi GIUVA AI</Link>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {associationFacts.map((fact) => (
              <article key={fact.title} className="card interactive-card flex min-h-56 flex-col justify-between p-6">
                <span className="eyebrow self-start">{fact.title}</span>
                <p className="mt-5 text-lg font-bold leading-8 text-slate-700">{fact.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MissionPrinciples />
      <PortalStats />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <SearchBox items={portalSearchItems} />
          <TrustIndicators compact />
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <span className="eyebrow">Programmes</span>
              <h2 className="section-title mt-5">Discipline GIUVA, fiecare cu identitate și pagină dedicată.</h2>
              <p className="section-text">Fiecare program explică misiunea, activitățile, documentele, FAQ și modul de participare.</p>
            </div>
            <Link href="/discipline" className="btn btn-ghost self-start lg:self-end">Toate disciplinele<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="mt-10"><ProgrammeCards limit={6} /></div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {[{ title: site.today, items: giuvaToday }, { title: site.tomorrow, items: giuvaTomorrow }].map((block) => (
            <article key={block.title} className="card p-7 md:p-8">
              <h2 className="text-3xl font-black text-[#081f3a]">{block.title}</h2>
              <div className="mt-6 grid gap-3">
                {block.items.map((item) => (
                  <p key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#16825d]" size={20} aria-hidden="true" />
                    <span className="font-semibold leading-7">{item}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="eyebrow">GIUVA Network</span>
            <h2 className="section-title mt-5">România ca punct de pornire pentru o rețea europeană.</h2>
            <p className="section-text">Fiecare țară are dezvoltare autonomă, fără parteneriate implicite și cu respectarea cadrului local.</p>
            <Link href="/giuva-network" className="btn btn-primary mt-7">Vezi rețeaua europeană</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {europeanNetwork.map((item) => (
              <a key={item.domain} href={item.href} className="card interactive-card p-5">
                <Globe2 className="text-[#1f5fbf]" size={28} aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black text-[#081f3a]">{item.label}</h3>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#16825d]">{item.status}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-band px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[{ icon: ShieldCheck, title: "De ce fiducie", text: "Poziționare clară: GIUVA nu înlocuiește instituțiile statului și operează civic, educațional și comunitar." }, { icon: FileText, title: "Transparență", text: "Statut, Cod Etic, Privacy, Cookie, Governance și documente publice într-un hub dedicat." }, { icon: Globe2, title: "Resurse oficiale", text: "Linkuri către surse oficiale române, europene și internaționale, fără parteneriate implicite." }].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur">
                <Icon className="text-[#ffd84d]" size={30} aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-black">{item.title}</h2>
                <p className="mt-4 leading-7 text-white/82">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <Testimonials />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl"><NewsletterBox /></div>
      </section>

      <SocialChannels />
    </>
  );
}

