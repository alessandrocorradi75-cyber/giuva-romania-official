import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIUVA România | Site în curs de pregătire",
  description: "Platforma digitală GIUVA este în curs de pregătire pentru lansarea oficială."
};

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-6rem)] bg-white px-5 py-28 text-[#081f3a] md:py-36">
      <div className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-4xl flex-col items-center justify-center text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f5fbf]">
          GIUVA România
        </p>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-normal md:text-6xl">
          Site în curs de pregătire
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg font-semibold leading-8 text-slate-700 md:text-xl md:leading-9">
          <p>Ne pregătim pentru lansarea oficială.</p>
          <p>
            În această perioadă lucrăm la dezvoltarea platformei digitale GIUVA și la
            finalizarea procesului de constituire oficială a organizației.
          </p>
          <p>
            Scopul nostru este să oferim o platformă modernă, transparentă și utilă
            pentru voluntariatul civic, implicarea comunitară și colaborarea la nivel
            european.
          </p>
          <p>
            Site-ul va reveni online în curând, într-o versiune completă și actualizată.
          </p>
          <p>Vă mulțumim pentru răbdare și încredere.</p>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-3xl font-black tracking-normal md:text-4xl">GIUVA</p>
          <p className="mt-3 text-base font-bold text-slate-600 md:text-lg">
            Global Initiative for Urban Volunteering &amp; Awareness
          </p>
          <p className="mt-6 text-lg font-black text-[#16825d] md:text-xl">
            Connecting Communities. Inspiring Action. Creating Impact.
          </p>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-slate-500">
            România • Italia • Spania • Europa
          </p>
        </div>
      </div>
    </section>
  );
}
