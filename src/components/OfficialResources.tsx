"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { officialResources } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

type Resource = (typeof officialResources)[number] & { logo?: string };

function ResourceMark({ resource }: { resource: Resource }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mb-5 flex h-24 items-center justify-center rounded-md border border-white/10 bg-white p-3 text-sm font-black text-slate-900">
      {resource.logo && !failed ? (
        <img src={resource.logo} alt={`${resource.name} logo`} className="max-h-20 max-w-full object-contain" onError={() => setFailed(true)} />
      ) : (
        <span className="flex h-20 w-full items-center justify-center rounded-md bg-slate-100 px-3 text-center text-lg">{resource.badge}</span>
      )}
    </div>
  );
}

const copy = {
  tag: { ro: "Resurse publice", en: "Public resources", it: "Risorse pubbliche", de: "Öffentliche Ressourcen", fr: "Ressources publiques", hu: "Közforrások", sr: "Javni resursi", hr: "Javni resursi" },
  title: { ro: "Instituții și repere relevante.", en: "Relevant institutions and references.", it: "Istituzioni e riferimenti rilevanti.", de: "Relevante Institutionen und Referenzen.", fr: "Institutions et références pertinentes.", hu: "Releváns intézmények és hivatkozások.", sr: "Relevantne institucije i reference.", hr: "Relevantne institucije i reference." },
  text: { ro: "Linkurile sunt informative. Prezența lor nu implică afiliere, aprobare sau parteneriat oficial.", en: "Links are informational. Their presence does not imply affiliation, endorsement or official partnership.", it: "I link sono informativi. La loro presenza non implica affiliazione, approvazione o partnership ufficiale.", de: "Links dienen der Information und bedeuten keine Zugehörigkeit, Empfehlung oder offizielle Partnerschaft.", fr: "Les liens sont informatifs et n’impliquent aucune affiliation, approbation ou partenariat officiel.", hu: "A linkek tájékoztató jellegűek, nem jelentenek kapcsolatot, jóváhagyást vagy hivatalos partnerséget.", sr: "Linkovi su informativni i ne znače afilijaciju, odobrenje ili zvanično partnerstvo.", hr: "Linkovi su informativni i ne znače afilijaciju, odobrenje ili službeno partnerstvo." },
  open: { ro: "Deschide resursa", en: "Open resource", it: "Apri risorsa", de: "Ressource öffnen", fr: "Ouvrir", hu: "Megnyitás", sr: "Otvori", hr: "Otvori" }
};

export function OfficialResources() {
  const { text } = useLanguage();

  return (
    <section className="dark-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader light tag={text(copy.tag)} title={text(copy.title)} text={text(copy.text)} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {officialResources.map((resource) => (
            <MotionShell key={resource.name}>
              <a href={resource.href} target="_blank" rel="noreferrer" className="flex h-full flex-col rounded-md border border-white/10 bg-white/5 p-5 shadow-2xl transition hover:-translate-y-1 hover:border-red-400/60">
                <ResourceMark resource={resource} />
                <h3 className="text-xl font-black text-white">{resource.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{resource.note}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                  {text(copy.open)}
                  <ExternalLink size={16} />
                </span>
              </a>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
