import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Coffee,
  HandHeart,
  Heart,
  Lightbulb,
  Network,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { disciplines } from "@/data/site";

export const metadata: Metadata = {
  title: "GIUVA Romania | Nu o asociație. O comunitate.",
  description:
    "GIUVA Romania este o comunitate unde oamenii se întâlnesc, împărtășesc idei, creează proiecte și îmbunătățesc societatea împreună."
};

const storyCards = [
  {
    name: "Maria",
    before: "A venit pentru o cafea.",
    after: "A ramas pentru oameni.",
    role: "Community & Social Coordinator",
    imageBefore: "/brand/giuva-romania-disciplines-flag.webp",
    imageAfter: "/brand/community-manifesto-2.webp",
    positionBefore: "48% 42%",
    positionAfter: "50% 52%",
    text: "Asta a coordonat primele idei care unesc comunitati."
  },
  {
    name: "Andrei",
    before: "A venit pentru pasiunea lui.",
    after: "A ramas pentru oameni.",
    role: "GIUVA Riders Rescue",
    imageBefore: "/brand/journey-urban-1.webp",
    imageAfter: "/brand/riders-rescue-support.webp",
    positionBefore: "20% 70%",
    positionAfter: "22% 50%",
    text: "A gasit siguranta, valori si viata pe doua roti."
  },
  {
    name: "Luca",
    before: "A venit cu o idee.",
    after: "A gasit sprijin.",
    role: "GIUVA Youth",
    imageBefore: "/brand/giuva-romania-disciplines-flag.webp",
    imageAfter: "/brand/community-manifesto-3.webp",
    positionBefore: "45% 45%",
    positionAfter: "50% 45%",
    text: "Asta a inspirat alti tineri sa actioneze."
  },
  {
    name: "Elena",
    before: "A venit sa dea o mana de ajutor.",
    after: "A ramas sa construiasca proiecte.",
    role: "Community & Social Volunteer",
    imageBefore: "/brand/journey-urban-2.webp",
    imageAfter: "/brand/community-manifesto-0.webp",
    positionBefore: "55% 52%",
    positionAfter: "50% 48%",
    text: "A descoperit ca solidaritatea poate incepe simplu."
  },
  {
    name: "Ana",
    before: "A venit sa descopere lumea.",
    after: "A ramas sa creeze calatorii.",
    role: "Journey Volunteer",
    imageBefore: "/brand/journey-urban-3.webp",
    imageAfter: "/brand/journey-urban-1.webp",
    positionBefore: "55% 55%",
    positionAfter: "52% 54%",
    text: "A apropiat oameni prin drumuri, povesti si memorie."
  },
  {
    name: "Marco",
    before: "A venit sa gateasca.",
    after: "A ramas sa formeze.",
    role: "GIUVA Academy",
    imageBefore: "/brand/community-manifesto-2.webp",
    imageAfter: "/brand/community-manifesto-1.webp",
    positionBefore: "82% 66%",
    positionAfter: "50% 48%",
    text: "A transformat pasiunea in invatare si valori."
  }
];

const projectSteps = [
  { title: "Ne intalnim", icon: Users },
  { title: "Bem o cafea", icon: Coffee },
  { title: "Se naste o idee", icon: Lightbulb },
  { title: "Dezvoltam ideea", icon: Sprout },
  { title: "Implicam comunitatea", icon: Network },
  { title: "Gasim parteneri", icon: HandHeart },
  { title: "Devine proiect", icon: ClipboardCheck },
  { title: "Imbunatateste comunitatea", icon: Heart }
];

const disciplineLinks = [
  "community-social",
  "riders-rescue",
  "civil-support",
  "preparedness",
  "journey",
  "project-pulse",
  "academy",
  "youth",
  "senior-network"
];

const disciplineImageBySlug: Record<string, string> = {
  "community-social": "/brand/community-manifesto-2.webp",
  "riders-rescue": "/brand/riders-rescue-support.webp",
  "civil-support": "/brand/civil-response-scene.webp",
  preparedness: "/brand/civil-response-protocol.webp",
  journey: "/brand/journey-urban-1.webp",
  "project-pulse": "/brand/project-pulse-scene.webp",
  academy: "/brand/community-manifesto-1.webp",
  youth: "/brand/community-manifesto-3.webp",
  "senior-network": "/brand/journey-urban-3.webp"
};

const impactStats = [
  { label: "Comunitati", value: "in formare", icon: Users },
  { label: "Voluntari", value: "onboarding", icon: HandHeart },
  { label: "Proiecte", value: "pilot", icon: Lightbulb },
  { label: "Evenimente", value: "roadmap", icon: CalendarDays },
  { label: "Municipalitati partenere", value: "0 public", icon: ShieldCheck }
];

const partnerCards = [
  { title: "Parteneri institutionali", text: "Dialog doar prin acorduri formale, fara logo-uri sau parteneriate implicite.", href: "/partner" },
  { title: "Parteneri educationali", text: "Educatie civica, awareness AED, tineri, formare si comunitati locale.", href: "/discipline/academy" },
  { title: "Parteneri corporate", text: "Companii care sustin transparent proiecte, materiale, educatie si impact local.", href: "/partner" },
  { title: "Parteneri comunitari", text: "Oameni, spatii, initiative locale si comunitati care construiesc impreuna.", href: "/community" }
];

const donationUses = [
  "educatie civica si awareness AED",
  "materiale pentru activitati comunitare",
  "suport pentru initiative locale",
  "Project Pulse si proiecte europene viitoare"
];

function normalizeTitle(title: string) {
  if (title === "Project Pulse") return "Project Pulse";
  return title;
}

export default function HomePage() {
  const selectedDisciplines = disciplineLinks
    .map((slug) => disciplines.find((discipline) => discipline.slug === slug))
    .filter(Boolean) as typeof disciplines;

  return (
    <>
      <section className="human-hero relative min-h-[92vh] overflow-hidden bg-[#020817] px-5 pb-12 pt-28 text-white md:pt-32">
        <Image
          src="/brand/giuva-romania-disciplines-flag.webp"
          alt="Oameni GIUVA Romania din generatii diferite, familie, voluntari si comunitate in fata Palatului Parlamentului"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/54 to-black/18" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/82 to-transparent" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1500px] items-end">
          <div className="max-w-3xl pb-6 md:pb-12">
            <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd84d] backdrop-blur">
              GIUVA Romania
            </span>
            <h1 className="human-hero-title mt-6 text-5xl font-black uppercase leading-[0.96] tracking-tight md:text-7xl xl:text-8xl">
              <span className="block">NU O ASOCIAȚIE.</span>
              <span className="block text-[#ffd84d]">O COMUNITATE.</span>
            </h1>
            <div className="mt-6 max-w-xl text-xl font-semibold leading-8 text-white/92 md:text-2xl">
              <p>Oameni care se întâlnesc.</p>
              <p>Idei care devin proiecte.</p>
              <p>Voluntariatul este doar unul dintre modurile prin care construim comunități mai puternice.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/despre" className="btn bg-[#ffd84d] text-[#081f3a] shadow-2xl">
                Descoperă GIUVA
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/voluntari" className="btn border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[#081f3a]">
                Alătură-te Comunității
              </Link>
            </div>
            <p className="mt-8 flex items-center gap-3 text-lg font-black text-white">
              <Heart className="text-[#ffd84d]" size={24} aria-hidden="true" />
              Fiecare persoană are ceva de oferit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-3xl font-black text-[#081f3a] md:text-4xl">Totul poate începe cu o cafea.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {storyCards.map((story) => (
              <article key={story.name} className="story-card card interactive-card overflow-hidden">
                <div className="grid grid-cols-2 gap-0">
                  <figure className="relative h-48 overflow-hidden">
                    <Image src={story.imageBefore} alt={`${story.name} înainte de GIUVA`} fill sizes="(min-width: 1536px) 12vw, 50vw" className="object-cover" style={{ objectPosition: story.positionBefore }} />
                    <figcaption className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[0.65rem] font-black uppercase text-[#081f3a]">înainte</figcaption>
                  </figure>
                  <figure className="relative h-48 overflow-hidden">
                    <Image src={story.imageAfter} alt={`${story.name} după implicarea in ${story.role}`} fill sizes="(min-width: 1536px) 12vw, 50vw" className="object-cover" style={{ objectPosition: story.positionAfter }} />
                    <figcaption className="absolute right-2 top-2 rounded-full bg-[#081f3a]/90 px-2 py-1 text-[0.65rem] font-black uppercase text-white">după</figcaption>
                  </figure>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black text-[#081f3a]">{story.name}</h3>
                  <p className="mt-2 text-sm font-black text-[#16825d]">{story.role}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{story.before}<br />{story.after}<br />{story.text}</p>
                  <Link href="/journey" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#1f5fbf]">
                    Descopera povestea
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto max-w-[1500px] rounded-2xl bg-[#081f3a] p-6 text-white shadow-2xl md:p-8">
          <h2 className="text-center text-3xl font-black md:text-4xl">Cum se naste un proiect GIUVA?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4 xl:grid-cols-8">
            {projectSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-xl border border-white/12 bg-white/8 p-4 text-center backdrop-blur">
                  <Icon className="mx-auto text-[#ffd84d]" size={34} aria-hidden="true" />
                  <p className="mt-3 text-sm font-black leading-5">{step.title}</p>
                  {index < projectSteps.length - 1 ? <span className="hidden xl:block absolute -right-3 top-1/2 text-2xl font-black text-white/70">→</span> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Discipline GIUVA</span>
            <h2 className="section-title mt-5">Găsește-ți locul în GIUVA.</h2>
            <p className="section-text">Abia după ce oamenii se intalnesc, apar programele. Fiecare disciplina are culoarea, rolul si comunitatea ei.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {selectedDisciplines.map((discipline) => {
              const Icon = discipline.icon;
              return (
                <article key={discipline.slug} className="card interactive-card overflow-hidden">
                  <figure className="relative h-56">
                    <Image src={disciplineImageBySlug[discipline.slug] ?? discipline.image} alt={`Imagine oficiala ${discipline.name}`} fill sizes="(min-width: 1280px) 30vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className={`absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl ${discipline.accent} text-white shadow-xl`}>
                      <Icon size={28} aria-hidden="true" />
                    </div>
                  </figure>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-[#081f3a]">{normalizeTitle(discipline.name)}</h3>
                    <p className="mt-3 min-h-24 text-sm font-semibold leading-6 text-slate-600">{discipline.description}</p>
                    <Link href={`/discipline/${discipline.slug}`} className="btn btn-ghost mt-5 w-full">
                      Descopera
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 rounded-2xl bg-[#081f3a] p-7 text-white shadow-2xl md:p-10 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/12 bg-[#041225]">
            <Image src="/brand/civic-resilience-visual.svg" alt="Harta simbolica a rezilientei comunitare in Romania" fill sizes="(min-width: 1280px) 38vw, 100vw" className="object-contain p-6" />
          </div>
          <div>
            <span className="eyebrow bg-white/10 text-[#ffd84d]">Impact România</span>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">Impactul nostru în România</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/78">GIUVA comunica transparent: cifrele reale vor creste doar prin comunitati, evenimente si parteneriate documentate.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {impactStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article key={stat.label} className="rounded-xl border border-white/12 bg-white/8 p-4">
                    <Icon className="text-[#ffd84d]" size={26} aria-hidden="true" />
                    <p className="mt-3 text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-white/70">{stat.label}</p>
                  </article>
                );
              })}
            </div>
            <Link href="/transparenta" className="btn mt-8 border border-white/60 bg-transparent text-white hover:bg-white hover:text-[#081f3a]">Vezi impactul complet</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="card overflow-hidden p-7 md:p-8">
            <span className="eyebrow">Voluntarul AI</span>
            <h2 className="mt-5 text-4xl font-black text-[#081f3a]">Te ajut sa intelegi GIUVA.</h2>
            <p className="mt-4 leading-8 text-slate-600">Sunt aici sa iti raspund la intrebari despre GIUVA, proiecte, voluntariat, donatii, parteneriate si cum te poti implica.</p>
            <Link href="/giuva-ai" className="btn btn-primary mt-6">Întreabă-mă despre GIUVA</Link>
          </article>
          <article className="card p-7 md:p-8">
            <h3 className="text-2xl font-black text-[#081f3a]">Te pot ajuta cu informatii despre:</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["GIUVA si misiunea noastra", "Comunitati si evenimente", "Proiecte si programe", "Parteneriate si colaborari", "Voluntariat si implicare", "Donatii si sustinere"].map((item) => (
                <p key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="text-[#16825d]" size={20} aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-center text-3xl font-black text-[#081f3a] md:text-4xl">Împreună pentru comunități mai puternice</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="card p-6">
              <HandHeart className="text-[#16825d]" size={32} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black text-[#081f3a]">Sustine GIUVA</h3>
              <p className="mt-3 leading-7 text-slate-600">Donatiile si sponsorizarile oficiale vor sustine proiecte cu destinatie clara si raportare publica.</p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-600">
                {donationUses.map((use) => <li key={use}>- {use}</li>)}
              </ul>
              <Link href="/sustine" className="btn btn-primary mt-5 w-full">Doneaza / sustine</Link>
            </article>
            {partnerCards.map((card) => (
              <article key={card.title} className="card p-6">
                <h3 className="text-2xl font-black text-[#081f3a]">{card.title}</h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-600">{card.text}</p>
                <Link href={card.href} className="btn btn-ghost mt-5 w-full">Vezi detalii</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-3">
          {[
            { title: "Transparienta financiara", text: "Destinatia resurselor trebuie sa fie clara, masurabila si public comunicata.", href: "/transparenta" },
            { title: "Guvernanta", text: "Roluri, responsabilitati, documente si principii de buna guvernanta.", href: "/guvernanta" },
            { title: "Documente", text: "Statut, GDPR, politici, rapoarte si documente publice pe masura formalizarii.", href: "/download-center" }
          ].map((item) => (
            <article key={item.title} className="card interactive-card p-7">
              <h2 className="text-3xl font-black text-[#081f3a]">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              <Link href={item.href} className="mt-5 inline-flex items-center gap-2 font-black text-[#1f5fbf]">Vezi sectiunea<ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}




