"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type SearchItem = {
  title: string;
  category: string;
  href: string;
  keywords?: string[];
};

export function SearchBox({ items, label = "Caută în portal" }: { items: SearchItem[]; label?: string }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return items.slice(0, 5);
    return items
      .filter((item) => [item.title, item.category, ...(item.keywords ?? [])].join(" ").toLowerCase().includes(q))
      .slice(0, 8);
  }, [items, query]);

  return (
    <section className="card p-5" aria-labelledby="portal-search-title">
      <div className="flex items-center gap-3">
        <Search className="text-[#1f5fbf]" size={22} aria-hidden="true" />
        <h2 id="portal-search-title" className="text-xl font-black text-[#081f3a]">{label}</h2>
      </div>
      <label className="mt-4 block">
        <span className="field-label">Cuvânt cheie</span>
        <input
          className="field"
          type="search"
          placeholder="Ex: voluntari, AED, transparență, academy"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby="portal-search-help"
        />
      </label>
      <p id="portal-search-help" className="mt-2 text-sm leading-6 text-slate-600">
        Căutare demonstrativă Release 1.0. Nu folosește backend și poate fi extinsă ulterior.
      </p>
      <div className="mt-4 grid gap-2" aria-live="polite">
        {results.map((item) => (
          <a key={item.href + item.title} href={item.href} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm transition hover:border-[#16825d] hover:bg-white focus:bg-white">
            <span className="block font-black text-[#081f3a]">{item.title}</span>
            <span className="mt-1 block font-semibold text-slate-500">{item.category}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
