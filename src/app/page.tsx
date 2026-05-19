import Hero from "@/components/Hero";
import DivisionGrid from "@/components/DivisionGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <DivisionGrid />

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-giuva-cyan">Roadmap</div>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            From community to European pilot.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {["Community building", "Volunteer training", "AED deployment", "Signed protocols", "European pilot"].map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-giuva-cyan font-black text-slate-950">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Future platform</div>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">GIUVA Response Network</h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Future concept: volunteer availability, AED awareness, events, Journey stories, Project Pulse campaigns and community coordination.
            Not an emergency dispatch system.
          </p>
        </div>
      </section>
    </main>
  );
}
