import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Coffee, HandHeart, Heart, Lightbulb, Network, Sprout, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "GIUVA Romania | Not an association. A community.",
  description: "GIUVA Romania is a community where people meet, share ideas, create projects and improve society together."
};

const steps = [
  { title: "We meet", icon: Users },
  { title: "We drink coffee", icon: Coffee },
  { title: "An idea is born", icon: Lightbulb },
  { title: "We develop it", icon: Sprout },
  { title: "Community joins", icon: Network },
  { title: "Partners appear", icon: HandHeart },
  { title: "It becomes a project", icon: CalendarDays },
  { title: "Community improves", icon: Heart }
];

const stories = ["Maria", "Andrei", "Luca", "Elena", "Ana", "Marco"];

export default function EnglishHome() {
  return (
    <>
      <section className="human-hero relative min-h-[92vh] overflow-hidden bg-[#020817] px-5 pb-12 pt-28 text-white md:pt-32">
        <Image src="/brand/giuva-romania-disciplines-flag.webp" alt="GIUVA Romania community with different generations, family, volunteers and civic identity" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/54 to-black/18" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/82 to-transparent" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1500px] items-end">
          <div className="max-w-3xl pb-6 md:pb-12">
            <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd84d] backdrop-blur">GIUVA Romania</span>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.96] tracking-tight md:text-7xl xl:text-8xl">NOT AN ASSOCIATION.<span className="block text-[#ffd84d]">A COMMUNITY.</span></h1>
            <div className="mt-6 max-w-xl text-xl font-semibold leading-8 text-white/92 md:text-2xl"><p>People who meet.</p><p>Ideas that become projects.</p><p>Volunteering is only one of the ways we build stronger communities.</p></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/despre" className="btn bg-[#ffd84d] text-[#081f3a] shadow-2xl">Discover GIUVA<ArrowRight size={18} /></Link><Link href="/voluntari" className="btn border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[#081f3a]">Join the Community</Link></div>
            <p className="mt-8 flex items-center gap-3 text-lg font-black text-white"><Heart className="text-[#ffd84d]" size={24} />Every person has something to offer.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:py-16"><div className="mx-auto max-w-[1500px]"><h2 className="text-center text-3xl font-black text-[#081f3a] md:text-4xl">Everything can start with a coffee.</h2><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">{stories.map((name, index) => <article key={name} className="card interactive-card overflow-hidden"><figure className="relative h-48"><Image src={index === 1 ? "/brand/riders-rescue-support.webp" : index === 4 ? "/brand/journey-urban-1.webp" : "/brand/giuva-romania-disciplines-flag.webp"} alt={`${name} GIUVA story`} fill sizes="(min-width: 1536px) 16vw, (min-width: 768px) 50vw, 100vw" className="object-cover" /></figure><div className="p-5"><h3 className="text-2xl font-black text-[#081f3a]">{name}</h3><p className="mt-3 text-sm font-semibold leading-6 text-slate-700">Came for a conversation. Stayed for people, ideas and community impact.</p><Link href="/journey" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#1f5fbf]">Discover the story<ArrowRight size={15} /></Link></div></article>)}</div></div></section>

      <section className="px-5 py-8"><div className="mx-auto max-w-[1500px] rounded-2xl bg-[#081f3a] p-6 text-white shadow-2xl md:p-8"><h2 className="text-center text-3xl font-black md:text-4xl">How is a GIUVA project born?</h2><div className="mt-8 grid gap-4 md:grid-cols-4 xl:grid-cols-8">{steps.map((step) => { const Icon = step.icon; return <div key={step.title} className="rounded-xl border border-white/12 bg-white/8 p-4 text-center backdrop-blur"><Icon className="mx-auto text-[#ffd84d]" size={34} /><p className="mt-3 text-sm font-black leading-5">{step.title}</p></div>; })}</div></div></section>

      <section className="bg-[#f6f8fb] px-5 py-20"><div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-3">{[{ title: "Find your place", text: "Community, Riders Rescue, Civil Support, Preparedness, Journey, Project Pulse, Academy, Youth and Senior Network." }, { title: "Support GIUVA", text: "Donations and sponsorships support clear projects, local initiatives and public transparency." }, { title: "Trust and boundaries", text: "GIUVA is civic and community-based. It does not replace public authorities or emergency services." }].map((item) => <article key={item.title} className="card p-7"><CheckCircle2 className="text-[#16825d]" size={28} /><h2 className="mt-5 text-3xl font-black text-[#081f3a]">{item.title}</h2><p className="mt-4 leading-8 text-slate-600">{item.text}</p></article>)}</div></section>

      <section className="bg-white px-5 py-16"><div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2 xl:grid-cols-4">{[{ title: "Institutional partners" }, { title: "Educational partners" }, { title: "Corporate partners" }, { title: "Community partners" }].map((item) => <article key={item.title} className="card p-6"><h3 className="text-2xl font-black text-[#081f3a]">{item.title}</h3><p className="mt-4 leading-7 text-slate-600">No institution is displayed unless a real partnership exists.</p><Link href="/partner" className="btn btn-ghost mt-5 w-full">See details</Link></article>)}</div></section>
    </>
  );
}



