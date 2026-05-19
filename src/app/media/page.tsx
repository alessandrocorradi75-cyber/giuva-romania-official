import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="min-h-[80vh] bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,.24),transparent_34%),linear-gradient(135deg,#020617,#07111f_55%,#111827)] px-5 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-giuva-cyan">Media & Public Affairs</div>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-none md:text-8xl">Public communication for media, sponsors, authorities and partners.</h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300">
            GIUVA.RO is a community mobility and civil resilience platform. All operational activities must be based on training, protocols, authorizations and legal compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:contact@giuva.ro" className="rounded-full bg-giuva-cyan px-6 py-3 font-black text-slate-950">contact@giuva.ro</a>
            <Link href="/" className="rounded-full border border-white/25 px-6 py-3 font-black">Back home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
