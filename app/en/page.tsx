import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, CheckCircle2, Facebook, Globe2, GraduationCap, HandHeart, HeartPulse, Linkedin, Map, Radio, ShieldCheck, Sparkles, Users } from "lucide-react";
import { brand, ctas, europeanNetwork, socialLinks } from "@/data/site";

const englishFacts = [
  {
    title: "What GIUVA is",
    text: "A Romanian civic association with European openness, built for responsible volunteering, civic education and community preparedness."
  },
  {
    title: "What it does",
    text: "It connects people, communities and future partners through civic, educational, social and AED awareness activities."
  },
  {
    title: "What it is not",
    text: "GIUVA does not replace public institutions, emergency services, 112, police, firefighters or other public authorities."
  }
];

const englishToday = [
  "civic project in development and consolidation",
  "defined public identity and positioning",
  "first local communities in development",
  "forms prepared for volunteers and local communities",
  "prudential framework for civic and educational activities"
];

const englishTomorrow = [
  "national network in Romania",
  "local communities in several cities",
  "volunteers trained through authorized partners",
  "formal partnerships only after legal validation",
  "gradual European expansion"
];

const englishDisciplines = [
  { name: "Community & Social", text: "Community actions, social inclusion and local activities open to people with shared values.", icon: Users, color: "bg-[#18865B]" },
  { name: "Riders Rescue", text: "Civic AED awareness, first aid education and complementary community support in development.", icon: Bike, color: "bg-[#0B2A4A]" },
  { name: "Civil Support", text: "Civic and logistic support for community activities, local events and pilot projects.", icon: Radio, color: "bg-[#F97316]" },
  { name: "Preparedness", text: "Public awareness, prevention culture, community readiness and responsible behaviour.", icon: ShieldCheck, color: "bg-[#F2C94C]" },
  { name: "Journey", text: "Stories, photography, responsible travel and human-centered community memory.", icon: Map, color: "bg-[#E8F7EF]" },
  { name: "Project Pulse", text: "Future transparent fundraising, CSR, European projects and public impact reporting.", icon: HeartPulse, color: "bg-[#8B5E34]" },
  { name: "Academy", text: "Future educational component for workshops, civic procedures and volunteer wellbeing.", icon: GraduationCap, color: "bg-[#7C3AED]" },
  { name: "Youth", text: "Youth engagement, active citizenship, civic leadership and local educational projects.", icon: Sparkles, color: "bg-[#0891B2]" },
  { name: "Senior Network", text: "Active participation of seniors, experience sharing and intergenerational support.", icon: HandHeart, color: "bg-[#7F1D1D]" }
];

export default function EnglishHome() {
  return (
    <>
      <section className="home-hero px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-5xl text-center">
            <span className="eyebrow">GIUVA Romania</span>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#081f3a] md:text-7xl">GIUVA Romania</h1>
            <p className="mt-4 text-xl font-black uppercase tracking-[0.12em] text-[#16825d]">{brand.fullName}</p>
            <p className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-tight text-[#081f3a] md:text-4xl">
              {brand.claim}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              GIUVA Romania is building a civic network of volunteers, communities and partners for more connected, prepared and supportive cities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <Link href={ctas.volunteer.href} className="btn btn-primary hero-primary-cta">
                Become a volunteer
                <ArrowRight size={19} />
              </Link>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={ctas.chapter.href} className="btn btn-blue">
                  Open a GIUVA community
                </Link>
                <Link href={ctas.secretariat.href} className="btn btn-ghost">
                  Contact the secretariat
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero-photo-panel mt-12">
            <Image src="/brand/giuva-romania-disciplines.webp" alt="GIUVA Romania volunteers, community, Romania and Europe" width={1536} height={1024} priority sizes="(min-width: 1500px) 1500px, calc(100vw - 40px)" />
          </figure>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {englishFacts.map((fact) => (
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
            { title: "GIUVA today", items: englishToday },
            { title: "GIUVA tomorrow", items: englishTomorrow }
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
            <span className="eyebrow">GIUVA disciplines</span>
            <h2 className="section-title mt-5">A clear structure for scalable civic projects.</h2>
            <p className="section-text">
              The GIUVA disciplines describe how the association can grow: social, educational, civic, preventive, narrative and European.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {englishDisciplines.map((discipline) => {
                const Icon = discipline.icon;
                return (
                  <article key={discipline.name} className="card interactive-card discipline-card flex h-full flex-col p-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${discipline.color} text-white shadow-sm`}>
                      <Icon size={27} />
                    </div>
                    <h2 className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">{discipline.name}</h2>
                    <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{discipline.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">GIUVA Europe</span>
          <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="section-title">GIUVA Europe</h2>
              <p className="section-text text-2xl font-black text-[#16825d]">Building a European network of communities together.</p>
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
            <h2 className="mt-4 text-3xl font-black text-[#081f3a]">Follow GIUVA development.</h2>
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
