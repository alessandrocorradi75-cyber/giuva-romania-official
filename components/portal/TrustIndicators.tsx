import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function TrustIndicators({ compact = false }: { compact?: boolean }) {
  const items = [
    "European Organisation",
    "Volunteer Network",
    "Transparency",
    "Governance",
    "Safeguarding",
    "Privacy & GDPR",
    "Community Impact"
  ];

  return (
    <section className={compact ? "" : "bg-white px-5 py-16"} aria-labelledby="trust-title">
      <div className={compact ? "grid gap-3" : "mx-auto max-w-7xl"}>
        {!compact ? <span className="eyebrow">Trust Indicators</span> : null}
        {!compact ? <h2 id="trust-title" className="section-title mt-5">Indicatori de încredere instituțională.</h2> : <h2 id="trust-title" className="sr-only">Indicatori de încredere</h2>}
        <div className={compact ? "grid gap-3" : "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
          {items.map((item) => (
            <Link key={item} href={item.includes("Privacy") ? "/privacy-policy" : item === "Governance" ? "/guvernanta" : "/transparenta"} className="rounded-xl border border-slate-200 bg-white p-4 font-black text-[#081f3a] shadow-sm transition hover:border-[#16825d] focus:border-[#16825d]">
              <ShieldCheck className="mb-3 text-[#16825d]" size={22} aria-hidden="true" />
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
