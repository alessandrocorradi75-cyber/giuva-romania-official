import type { Metadata } from "next";
import { Bot, Building2, GraduationCap, HandHeart, HeartPulse, Mail, Megaphone, Newspaper, Users } from "lucide-react";
import { MockForm } from "@/components/MockForm";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { NewsletterBox } from "@/components/portal/NewsletterBox";
import { TrustIndicators } from "@/components/portal/TrustIndicators";
import { PageHero } from "@/components/PageHero";
import { brand, contactFormFields } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Center",
  description: "Contact Center GIUVA Romania pentru informații generale, voluntari, academy, media, funding, partnership, press și GIUVA AI."
};

const contactAreas = [
  { title: "General Information", email: "info@giuva.ro", icon: Mail },
  { title: "Volunteer", email: "volunteers@giuva.ro", icon: Users },
  { title: "Academy", email: "academy@giuva.ro", icon: GraduationCap },
  { title: "Media", email: "media@giuva.ro", icon: Megaphone },
  { title: "Funding", email: "fundraising@giuva.ro", icon: HeartPulse },
  { title: "Partnership", email: "partnerships@giuva.ro", icon: HandHeart },
  { title: "Press", email: "press@giuva.ro", icon: Newspaper },
  { title: "GIUVA AI", email: "info@giuva.ro", icon: Bot }
];

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Center" }]} />
      <PageHero
        eyebrow="Contact Center"
        title="Un punct clar de contact pentru fiecare nevoie."
        text="Scrie pentru voluntariat, academy, media, funding, parteneriate, presă, comunități locale sau informații generale. GIUVA Romania este în dezvoltare și răspunde prudent, fără a promite servicii operative."
        actions={[{ href: "/voluntari", label: "Devino voluntar" }, { href: "/faq", label: "FAQ Center", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <a key={area.title} href={`mailto:${area.email}`} className="card interactive-card p-5">
                    <Icon className="text-[#16825d]" size={28} aria-hidden="true" />
                    <h2 className="mt-4 text-xl font-black text-[#081f3a]">{area.title}</h2>
                    <p className="mt-1 font-semibold text-slate-600">{area.email}</p>
                  </a>
                );
              })}
            </div>
            <div className="card border-l-4 border-l-[#16825d] p-5">
              <Building2 className="text-[#1f5fbf]" size={28} aria-hidden="true" />
              <h2 className="mt-4 text-xl font-black text-[#081f3a]">Emergency Disclaimer</h2>
              <p className="mt-3 leading-7 text-slate-600">{brand.legalBoundary}</p>
            </div>
            <TrustIndicators compact />
          </div>
          <div className="grid gap-6">
            <MockForm fields={contactFormFields} submitLabel="Trimite mesajul" successMessage="Mesajul a fost validat local în demo; în integrarea finală va fi transmis secretariatului GIUVA.">
              <label>
                <span className="field-label">Departament</span>
                <select className="field" name="departament" required>
                  {contactAreas.map((area) => <option key={area.title}>{area.title}</option>)}
                </select>
              </label>
              <label>
                <span className="field-label">Mesaj</span>
                <textarea className="field min-h-36" name="mesaj" required />
              </label>
            </MockForm>
            <NewsletterBox />
          </div>
        </div>
      </section>
    </>
  );
}

