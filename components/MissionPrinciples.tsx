import { missionBlocks, values } from "@/data/site";

export function MissionPrinciples() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="eyebrow">Mission & Principles</span>
          <h2 className="section-title mt-5">Reziliență civică, transparență și cooperare europeană.</h2>
          <p className="section-text">
            GIUVA construiește o infrastructură civică complementară, orientată către educație, prevenție și implicare responsabilă.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {missionBlocks.map((block) => (
            <article key={block.title} className="card interactive-card p-6">
              <h3 className="text-2xl font-black text-[#081f3a]">{block.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{block.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {values.map((value) => (
            <span key={value} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-[#081f3a]">
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
