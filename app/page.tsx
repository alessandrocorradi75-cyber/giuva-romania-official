import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, HandHeart, GraduationCap, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "GIUVA - Voluntariat civic în Europa",
  description:
    "Alătură-te comunității GIUVA și fă diferența în orașul tău. Organizație europeană de voluntariat civic."
};

const macroAreas = [
  {
    icon: HandHeart,
    title: "AJUTĂ PE ALȚII",
    subtitle: "Dă o mână de ajutor",
    text: "Community & Social, Food Solidarity, Civil Support",
    cta: "Descoperă cum să ajuți",
    href: "/discipline/community-social"
  },
  {
    icon: GraduationCap,
    title: "ÎNVAȚĂ ȘI PREPARĂ-TE",
    subtitle: "Acumulează cunoștințe",
    text: "Academy, Preparedness, Youth, Senior",
    cta: "Descoperă cursurile",
    href: "/discipline/academy"
  },
  {
    icon: Compass,
    title: "TRĂIEȘTE EXPERIENȚE UNICE",
    subtitle: "Participă la aventuri civice",
    text: "Journey, Riders Rescue, Community Agriculture",
    cta: "Descoperă experiențele",
    href: "/discipline/journey"
  }
];

const socialProofBadges = [
  "Nicio experiență? Te formăm noi.",
  "Poți dedica 1 oră sau 1 zi: decizi tu.",
  "Suntem în toată Europa: poți participa oriunde."
];

export default function HomePage() {
  return (
    <>
      <section className="human-hero relative min-h-[92vh] overflow-hidden bg-[#020817] px-5 pb-12 pt-28 text-white md:pt-32">
        <Image
          src="/brand/giuva-romania-disciplines-flag.webp"
          alt="Voluntari GIUVA, comunitate și participare civică europeană"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/82 to-transparent" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1500px] items-end justify-center">
          <div className="max-w-5xl pb-6 text-center md:pb-12">
            <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd84d] backdrop-blur">
              Organizație europeană de voluntariat civic
            </span>
            <h1 className="human-hero-title mx-auto mt-6 max-w-5xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
              Vrei să faci diferența în orașul tău? Cu GIUVA poți.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/92 md:text-2xl">
              Suntem o organizație europeană de voluntariat civic. Alătură-te nouă pentru a ajuta, a te forma și a construi comunități mai puternice, din cartierul tău până în Europa.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/implica-te" className="btn bg-[#FF6B35] text-white shadow-2xl hover:bg-[#E63946]">
                Începe-ți drumul în voluntariat
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="#ghid" className="btn border border-white/80 bg-transparent text-white backdrop-blur hover:bg-white hover:text-[#081f3a]">
                Sunt nou, de unde încep?
              </Link>
            </div>
            <p className="mt-8 flex items-center justify-center gap-3 text-lg font-black text-white">
              <Heart className="text-[#ffd84d]" size={24} aria-hidden="true" />
              Fiecare persoană poate contribui la propria comunitate.
            </p>
          </div>
        </div>
      </section>

      {/* SECȚIUNE MACRO-ARII GIUVA */}
      <section id="ghid" className="bg-[#f8f9fa] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">De unde începi</span>
            <h2 className="section-title mt-5">Alege direcția potrivită pentru tine.</h2>
            <p className="section-text">
              Nu trebuie să cunoști toate disciplinele din prima zi. Începe cu ceea ce simți că ți se potrivește: ajutor concret, formare sau experiențe civice.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {macroAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="card interactive-card flex h-full flex-col p-7 shadow-sm md:p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#081f3a] text-white shadow-lg" aria-hidden="true">
                    <Icon size={32} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-[#081f3a] md:text-3xl">{area.title}</h3>
                  <p className="mt-3 text-lg font-black text-[#16825d]">{area.subtitle}</p>
                  <p className="mt-4 flex-1 text-base font-semibold leading-7 text-slate-600">{area.text}</p>
                  <Link href={area.href} className="btn btn-ghost mt-7 w-full">
                    {area.cta}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECȚIUNE PROVA SOCIALĂ */}
      <section className="bg-[#1a2a4a] px-5 py-12 text-white md:py-14">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {socialProofBadges.map((badge) => (
            <article key={badge} className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/10 p-6 shadow-xl backdrop-blur">
              <CheckCircle2 className="mt-1 shrink-0 text-[#28c878]" size={34} aria-hidden="true" />
              <p className="text-xl font-black leading-7">{badge}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}