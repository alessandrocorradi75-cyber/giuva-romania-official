import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Action = {
  href: string;
  label: string;
  tone?: "primary" | "blue" | "ghost";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  text,
  actions,
  visual = false,
  imageSrc,
  imageAlt
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text: string;
  actions?: Action[];
  visual?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-5 pb-14 pt-32 md:pb-20 md:pt-36">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 ${visual ? "lg:grid-cols-[0.82fr_1.18fr]" : ""}`}>
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-[#081f3a] md:text-6xl">
            {title}
          </h1>
          {subtitle ? <p className="mt-5 max-w-3xl text-2xl font-black leading-tight text-[#16825d] md:text-4xl">{subtitle}</p> : null}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{text}</p>
          {actions ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={`btn ${
                    action.tone === "blue" ? "btn-blue" : action.tone === "ghost" ? "btn-ghost" : "btn-primary"
                  }`}
                >
                  {action.label}
                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {visual ? (
          imageSrc ? (
            <figure className="hero-image-panel">
              <Image src={imageSrc} alt={imageAlt ?? title} width={1536} height={1024} priority sizes="(min-width: 1024px) 55vw, calc(100vw - 40px)" />
            </figure>
          ) : (
            <div className="hero-visual" aria-label="Spatiu vizual GIUVA Romania">
              <div className="absolute left-10 top-10 rounded-xl bg-white/92 p-5 text-[#081f3a] shadow-2xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1f5fbf]">GIUVA Romania</p>
                <p className="mt-2 text-3xl font-black">Romania + Europe</p>
              </div>
              <div className="absolute bottom-24 right-10 grid gap-3">
                {["Bucuresti", "Oradea", "Europe"].map((node) => (
                  <span key={node} className="rounded-full bg-white/88 px-4 py-2 text-sm font-black text-[#081f3a] shadow-xl">
                    {node}
                  </span>
                ))}
              </div>
            </div>
          )
        ) : null}
      </div>
    </section>
  );
}
