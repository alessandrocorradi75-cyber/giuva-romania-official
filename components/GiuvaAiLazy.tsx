"use client";

import { useState } from "react";

type GiuvaAiWidgetComponent = typeof import("./GiuvaAiWidget")["GiuvaAiWidget"];

export function GiuvaAiLazy() {
  const [Widget, setWidget] = useState<GiuvaAiWidgetComponent | null>(null);
  const [loading, setLoading] = useState(false);

  async function openAssistant() {
    if (Widget || loading) return;
    setLoading(true);
    const widgetModule = await import("./GiuvaAiWidget");
    setWidget(() => widgetModule.GiuvaAiWidget);
    setLoading(false);
  }

  if (Widget) return <Widget defaultOpen />;

  return (
    <aside className="fixed bottom-5 right-5 z-50 max-w-[calc(100vw-2.5rem)]">
      <button
        type="button"
        onClick={openAssistant}
        className="flex min-h-12 items-center gap-3 rounded-full bg-[#081f3a] px-4 py-3 font-black text-white shadow-2xl"
        aria-label="Deschide GIUVA AI"
        aria-busy={loading}
      >
        <span aria-hidden="true">AI</span>
        {loading ? "Se încarcă..." : "GIUVA AI"}
      </button>
    </aside>
  );
}
