"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, X } from "lucide-react";
import { giuvaAiTopics } from "@/data/site";

export function GiuvaAiWidget({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <aside className="fixed bottom-5 right-5 z-50 max-w-[calc(100vw-2.5rem)]">
      {open ? (
        <div className="w-[22rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1f5fbf]">GIUVA AI</p>
              <h2 className="mt-1 text-xl font-black text-[#081f3a]">Asistent civic demonstrativ</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Release 1.0: ghid rapid către secțiunile importante ale portalului. Răspunde doar despre GIUVA.</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-slate-200 p-2 text-slate-600" aria-label="Minimizează GIUVA AI">
              <X size={17} />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {giuvaAiTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link key={topic.title} href={topic.href} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-black text-[#081f3a] transition hover:border-[#16825d] hover:bg-white">
                  <Icon className="mb-2 text-[#16825d]" size={18} />
                  {topic.title}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs font-semibold leading-5 text-slate-600"><strong className="block text-[#081f3a]">Regulă AI</strong>Sunt aici pentru a vă ajuta cu informații despre GIUVA, proiectele, comunitatea și oportunitățile de voluntariat. Nu pot răspunde la solicitări din afara acestui cadru.</div><Link href="/giuva-ai" className="btn btn-primary mt-4 w-full">Deschide pagina GIUVA AI</Link>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="flex items-center gap-3 rounded-full bg-[#081f3a] px-4 py-3 font-black text-white shadow-2xl" aria-label="Deschide GIUVA AI">
          <Bot size={20} />
          GIUVA AI
        </button>
      )}
    </aside>
  );
}


