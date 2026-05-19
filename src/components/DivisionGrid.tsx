import Link from "next/link";
import { divisions } from "@/data/divisions";

export default function DivisionGrid() {
  return (
    <section className="bg-slate-50 px-5 py-24 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Categories</div>
        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Five autonomous divisions. One vision.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Each pillar has its own identity and can grow independently while remaining connected to GIUVA.RO as the mother platform.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {divisions.map((division) => (
            <Link
              key={division.slug}
              href={`/${division.slug}`}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-black">{division.title}</h3>
              <p className="mt-3 text-sm font-bold text-sky-700">{division.subtitle}</p>
              <p className="mt-4 text-sm text-slate-600">{division.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
