import type { Metadata } from "next";
import { MockForm } from "@/components/MockForm";
import { PageHero } from "@/components/PageHero";
import { disciplineOptions, volunteerFields } from "@/data/site";

export const metadata: Metadata = {
  title: "Devino voluntar",
  description: "Formular de interes pentru voluntari GIUVA Romania."
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Voluntari"
        title="Devino voluntar GIUVA."
        text="Formular de interes pentru o retea civica in constructie. GIUVA Romania este in faza de dezvoltare si consolidare."
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <MockForm
            fields={volunteerFields}
            submitLabel="Trimite cererea"
            successMessage="Multumim. Cererea a fost inregistrata local in demo; in integrarea finala va fi transmisa secretariatului GIUVA."
          >
            <label>
              <span className="field-label">Disciplina de interes</span>
              <select className="field" name="disciplina" required>
                {disciplineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
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
