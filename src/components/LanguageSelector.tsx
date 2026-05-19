import { languageOptions } from "@/data/site";

export function LanguageSelector() {
  return (
    <aside className="fixed left-3 top-28 z-40 hidden w-28 rounded-md border border-sky-100 bg-white/92 p-2 shadow-lg backdrop-blur-xl xl:block">
      <p className="px-2 pb-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-sky-700">Limbă</p>
      <div className="grid gap-1">
        {languageOptions.map((language) => (
          <button
            key={language.code}
            type="button"
            className={
              language.code === "ro"
                ? "rounded-md bg-sky-700 px-2 py-1.5 text-left text-xs font-bold text-white"
                : "rounded-md px-2 py-1.5 text-left text-xs font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"
            }
          >
            {language.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
