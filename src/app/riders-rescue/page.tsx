import { divisions } from "@/data/divisions";
import Link from "next/link";

const data = divisions.find((d) => d.slug === "riders-rescue")!;

export default function Page() {
  return (
    <main>
      <section className="min-h-[80vh] bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,.24),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(239,35,60,.18),transparent_32%),linear-gradient(135deg,#020617,#07111f_55%,#111827)] px-5 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-giuva-cyan">{data.title}</div>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-none md:text-8xl">{data.subtitle}</h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300">{data.description}</p>
          <div className="giuva-pulse my-10 max-w-2xl" />
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-giuva-cyan px-6 py-3 font-black text-slate-950">Contact</Link>
            <Link href="/" className="rounded-full border border-white/25 px-6 py-3 font-black">Back home</Link>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-5 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-6xl">Operational focus</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {data.bullets.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
                <h3 className="text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
