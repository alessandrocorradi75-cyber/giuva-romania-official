import type { Metadata } from "next";
import { contactChannels } from "@/data/site";
import { HeroSection } from "@/components/HeroSection";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GIUVA.RO pentru voluntariat, parteneriate, media, sponsori și Project Pulse."
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Let's build response together."
        subtitle="Voluntari, sponsori, instituții, media și parteneri."
        subtitleEn="Volunteers, sponsors, institutions, media and partners."
        text="Scrie-ne pentru voluntariat, sponsorizări, protocoale, colaborări, Journey stories sau Project Pulse."
        textEn="Contact us for volunteering, sponsorships, protocols, collaborations, Journey stories or Project Pulse."
        actions={[
          { href: "mailto:contact@giuva.ro", label: "contact@giuva.ro", tone: "blue" },
          { href: "/", label: "Înapoi acasă", tone: "ghost" }
        ]}
        panel={{ title: "Contact for", items: ["volunteers", "sponsors", "civil protocols", "media", "community projects"] }}
      />
      <section className="soft-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            light
            tag="Email system"
            title="Canale pregătite pentru faza operativă."
            text="Pentru moment, canalul unic rămâne contact@giuva.ro. Aceste adrese sunt structura recomandată pentru Cloudflare Email Routing sau un provider dedicat."
            textEn="For now, the single official channel remains contact@giuva.ro. These addresses are the recommended structure for Cloudflare Email Routing or a dedicated provider."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <MotionShell key={channel.label}>
                  <div className="h-full rounded-md border border-sky-100 bg-white p-6 shadow-sm">
                    <Icon className="text-sky-700" size={32} />
                    <h3 className="mt-5 text-xl font-black text-slate-950">{channel.label}</h3>
                    <p className="mt-2 break-words text-sm font-semibold text-slate-600">{channel.value}</p>
                  </div>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
