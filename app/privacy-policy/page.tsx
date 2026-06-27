import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informare privacy provizorie pentru GIUVA Romania."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        text="Informare publica provizorie pentru versiunea in dezvoltare a site-ului GIUVA Romania."
      />
      <section className="px-5 pb-20">
        <div className="card mx-auto max-w-4xl p-8 text-slate-700">
          <div className="grid gap-6 leading-8">
            <p>
              GIUVA Romania este un proiect civic aflat in dezvoltare si consolidare. In aceasta versiune publica, formularele sunt validate local in browser si nu transmit automat date catre email, CRM sau baza de date reala.
            </p>
            <p>
              Datele solicitate in formulare sunt pregatite pentru o integrare viitoare cu secretariatul GIUVA, cu consimtamant vizibil, jurnalizare si reguli de retentie definite inainte de activare.
            </p>
            <p>
              Pentru solicitari privind datele personale, contactul public este: info@giuva.ro.
            </p>
            <p className="font-bold text-[#081f3a]">
              Aceasta pagina va fi completata inainte de activarea oricarui flux real de colectare, trimitere sau stocare a datelor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
