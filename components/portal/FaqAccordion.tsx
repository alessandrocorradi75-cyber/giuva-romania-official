"use client";

import { ChevronDown } from "lucide-react";
import { useId } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ title, items }: { title: string; items: FaqItem[] }) {
  const baseId = useId();
  return (
    <section className="card p-6" aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className="text-2xl font-black text-[#081f3a]">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4 open:bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-[#081f3a]">
              <span>{item.question}</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <p className="mt-3 leading-7 text-slate-600" id={`${baseId}-${index}`}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
