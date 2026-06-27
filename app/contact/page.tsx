import type { Metadata } from "next";
import { Facebook, Linkedin } from "lucide-react";
import { MockForm } from "@/components/MockForm";
import { PageHero } from "@/components/PageHero";
import { contactEmails, contactFormFields, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacteaza secretariatul GIUVA Romania."
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Secretariat GIUVA Romania"
        text="Scrie pentru voluntariat, parteneriate, proiecte pilot, community locale sau informatii generale."
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            {contactEmails.map((email) => {
              const Icon = email.icon;
              return (
                <a key={email.value} href={`mailto:${email.value}`} className="card interactive-card p-5">
                  <Icon className="text-[#16825d]" size={30} />
                  <h2 className="mt-4 text-xl font-black text-[#081f3a]">{email.label}</h2>
                  <p className="mt-1 font-semibold text-slate-600">{email.value}</p>
                </a>
              );
            })}
            <div className="card p-5">
              <h2 className="text-xl font-black text-[#081f3a]">Social</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 transition hover:text-[#16825d]"
                  >
                    {link.label === "LinkedIn" ? <Linkedin size={16} /> : <Facebook size={16} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <MockForm
            fields={contactFormFields}
            submitLabel="Trimite mesajul"
            successMessage="Multumim. Mesajul a fost inregistrat local in demo; in integrarea finala va fi transmis secretariatului GIUVA."
          >
            <label>
              <span className="field-label">Mesaj</span>
              <textarea className="field min-h-36" name="mesaj" required />
            </label>
          </MockForm>
        </div>
      </section>
    </>
  );
}
