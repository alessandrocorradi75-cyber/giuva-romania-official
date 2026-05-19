import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,.24),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(239,35,60,.22),transparent_32%),linear-gradient(135deg,#020617,#07111f_55%,#111827)] px-5 pb-20 pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-giuva-cyan">
            Community Mobility Response Platform
          </div>
          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            GIUVA.RO
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-slate-100 md:text-5xl">
            Ride • Respond • Unite
          </h2>
          <p className="mt-7 max-w-2xl text-lg text-slate-300">
            A European community mobility and civil resilience platform built around
            people who choose action, solidarity and responsibility.
          </p>
          <div className="giuva-pulse my-9" />
          <div className="flex flex-wrap gap-4">
            <Link href="/riders-rescue" className="rounded-full bg-giuva-red px-6 py-3 font-black text-white">
              Riders Rescue
            </Link>
            <Link href="/project-pulse" className="rounded-full bg-giuva-cyan px-6 py-3 font-black text-slate-950">
              Support Project Pulse
            </Link>
            <Link href="/civil-response" className="rounded-full border border-white/25 px-6 py-3 font-black text-white">
              Civil Response
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
          <Image
            src="/images/giuva-riders-rescue-banner.png"
            alt="GIUVA Riders Rescue"
            width={1200}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
