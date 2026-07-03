import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Compass, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Despre Noi | GIUVA Romania",
  description:
    "Află cine este GIUVA Romania: viziune, misiune, valori, istorie și rol civic european în voluntariat, educație și comunitate."
};

const missionItems = [
  "să conecteze oameni care vor să ajute în comunitățile lor",
  "să dezvolte voluntariat civic responsabil și incluziv",
  "să promoveze educația civică, prevenția și pregătirea comunitară",
  "să creeze proiecte locale cu deschidere europeană",
  "să construiască încredere prin transparență, guvernanță și comunicare prudentă"
];

const values = [
  "viața umană înainte de toate",
  "solidaritate",
  "incluziune",
  "responsabilitate civică",
  "transparență",
  "cooperare",
  "respect instituțional",
  "educație și prevenție",
  "neutralitate",
  "umanitate"
];

const history = [
  {
    title: "Ideea",
    text: "GIUVA pornește de la o idee simplă: oamenii obișnuiți pot face lucruri extraordinare atunci când se întâlnesc, se organizează și au un cadru clar de implicare."
  },
  {
    title: "Comunitatea",
    text: "Înainte de programe, discipline sau campanii, GIUVA pune în centru oamenii: voluntari, familii, tineri, seniori, parteneri locali și comunități urbane."
  },
  {
    title: "Platforma",
    text: "GIUVA Romania este construită ca platformă civică în dezvoltare, cu direcții clare pentru voluntariat, educație, awareness AED, proiecte comunitare și cooperare europeană."
  },
  {
    title: "Europa",
    text: "Viziunea pe termen lung este dezvoltarea unei rețele europene de comunități GIUVA, păstrând identitatea locală și valorile democratice europene."
  }
];

export default function AboutUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#081f3a] px-5 pb-20 pt-32 text-white md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,95,191,0.36),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(22,130,93,0.26),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="eyebrow bg-white/10 text-[#ffd84d]">Despre Noi</span>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            GIUVA este o comunitate europeană de voluntariat civic.
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-semibold leading-9 text-white/82">
            {brand.fullName} conectează oameni, idei și proiecte pentru comunități mai puternice, mai pregătite și mai solidare.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/voluntari" className="btn bg-[#FF6B35] text-white hover:bg-[#E63946]">
              Devino voluntar
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/discipline" className="btn border border-white/60 bg-transparent text-white hover:bg-white hover:text-[#081f3a]">
              Explorează disciplinele
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="card p-7 md:p-8">
            <Compass className="text-[#16825d]" size={34} aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black text-[#081f3a]">Viziunea noastră</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Construim o rețea civică europeană în care oamenii pot participa ușor, responsabil și concret la viața comunității lor.
            </p>
          </article>
          <article className="card p-7 md:p-8">
            <HeartHandshake className="text-[#16825d]" size={34} aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black text-[#081f3a]">Misiunea noastră</h2>
            <p className="mt-4 leading-8 text-slate-600">
              GIUVA creează spații, programe și proiecte prin care voluntariatul civic devine accesibil, prietenos și util comunităților locale.
            </p>
          </article>
          <article className="card p-7 md:p-8">
            <ShieldCheck className="text-[#16825d]" size={34} aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black text-[#081f3a]">Rolul nostru civic</h2>
            <p className="mt-4 leading-8 text-slate-600">
              GIUVA nu înlocuiește instituțiile statului. Rolul nostru este civic, educațional, comunitar și complementar, în limitele legii.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Misiune concretă</span>
            <h2 className="section-title mt-5">Ce vrem să construim împreună</h2>
            <p className="section-text">
              GIUVA este creată pentru oameni care vor să ajute, să învețe, să participe și să transforme solidaritatea în acțiuni clare.
            </p>
          </div>
          <div className="grid gap-3">
            {missionItems.map((item) => (
              <p key={item} className="flex gap-3 rounded-2xl bg-white p-4 font-semibold leading-7 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-[#16825d]" size={22} aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Valori GIUVA</span>
          <h2 className="section-title mt-5">Valorile care ne țin direcția clară</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full border border-slate-200 bg-[#f8f9fa] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#081f3a]">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081f3a] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow bg-white/10 text-[#ffd84d]">Istorie</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">O poveste care începe cu oameni.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {history.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd84d] text-xl font-black text-[#081f3a]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="card p-7">
            <Users className="text-[#16825d]" size={32} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black text-[#081f3a]">Pentru voluntari</h2>
            <p className="mt-3 leading-7 text-slate-600">Un cadru prietenos pentru implicare, formare și participare civică.</p>
          </article>
          <article className="card p-7">
            <Sparkles className="text-[#16825d]" size={32} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black text-[#081f3a]">Pentru comunități</h2>
            <p className="mt-3 leading-7 text-slate-600">Proiecte locale, întâlniri, educație și inițiative cu impact uman.</p>
          </article>
          <article className="card p-7">
            <Clock className="text-[#16825d]" size={32} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black text-[#081f3a]">Pentru viitor</h2>
            <p className="mt-3 leading-7 text-slate-600">O platformă scalabilă pentru România și pentru dezvoltarea europeană GIUVA.</p>
          </article>
        </div>
      </section>
    </>
  );
}
