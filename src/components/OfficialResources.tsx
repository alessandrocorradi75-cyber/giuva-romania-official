"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { officialResources } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

function ResourceMark({ resource }: { resource: (typeof officialResources)[number] }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="mb-5 flex h-24 items-center justify-center rounded-md border border-sky-200 bg-white p-3 text-sm font-black text-sky-800">
      {"logo" in resource && resource.logo && !failed ? (
        <img
          src={resource.logo}
          alt={`${resource.name} logo`}
          className="max-h-20 max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex h-20 w-full items-center justify-center rounded-md bg-sky-50 px-3 text-center text-lg">
          {resource.badge}
        </span>
      )}
    </div>
  );
}

export function OfficialResources() {
  return (
    <section className="white-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Resurse oficiale"
          title="Instituții și resurse publice relevante."
          text="Aceste linkuri sunt afișate ca resurse informative. Prezența lor nu înseamnă parteneriat, afiliere sau aprobare oficială."
          textEn="These links are displayed as informational resources. Their presence does not imply partnership, affiliation or official endorsement."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {officialResources.map((resource) => (
            <MotionShell key={resource.name}>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col rounded-md border border-sky-100 bg-[#f8fcff] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <ResourceMark resource={resource} />
                <h3 className="text-xl font-black text-slate-950">{resource.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{resource.note}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                  Deschide resursa
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
