import type { Metadata } from "next";
import { MockForm } from "@/components/MockForm";
import { PageHero } from "@/components/PageHero";
import { chapterFields } from "@/data/site";

export const metadata: Metadata = {
  title: "Deschide o comunitate GIUVA",
  description: "Propune deschiderea unei comunitati GIUVA in orasul tau."
};

export default function OpenChapterPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunitati locale"
        title="Deschide o comunitate GIUVA in orasul tau."
        text="Propunerea nu reprezinta autorizare automata. GIUVA Romania evalueaza gradual fiecare oras in cadrul proiectului pilot."
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <MockForm
            fields={chapterFields}
            submitLabel="Trimite propunerea"
            successMessage="Multumim. Propunerea a fost inregistrata local in demo; in integrarea finala va ajunge la secretariatul GIUVA."
          >
            <label>
              <span className="field-label">Motivatie</span>
              <textarea className="field min-h-28" name="motivatie" required />
            </label>
            <label>
              <span className="field-label">Persoane interesate</span>
              <input className="field" name="persoane_interesate" type="text" required />
            </label>
            <label>
              <span className="field-label">Mesaj</span>
              <textarea className="field min-h-32" name="mesaj" required />
            </label>
          </MockForm>
        </div>
      </section>
    </>
  );
}
