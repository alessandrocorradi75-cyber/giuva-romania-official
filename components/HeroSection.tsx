import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import { MotionShell } from "@/components/MotionShell";

type HeroAction = {
  href: string;
  label: string;
  tone?: "red" | "blue" | "ghost";
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  text,
  actions,
  showBanner = false,
  panel,
  imagePanel
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  actions: HeroAction[];
  showBanner?: boolean;
  panel?: { title: string; items: string[] };
  imagePanel?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-hero px-5 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <MotionShell>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-normal md:text-7xl xl:text-8xl">{title}</h1>
          <h2 className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-100 md:text-4xl">{subtitle}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
          <div className="pulse-line my-8" aria-hidden="true">
            <HeartPulse size={34} />
          </div>
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <Link key={action.href + action.label} href={action.href} className={`btn ${action.tone ?? "blue"}`}>
                {action.label}
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </MotionShell>
        <MotionShell className="min-w-0">
          {showBanner ? (
            <Image
              src="/brand/giuva-riders-rescue-banner.webp"
              alt="GIUVA Riders Rescue mobile community first response"
              width={1536}
              height={1024}
              className="w-full rounded-md border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              priority
              sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
            />
          ) : imagePanel ? (
            <Image
              src={imagePanel.src}
              alt={imagePanel.alt}
              width={1536}
              height={1024}
              className="w-full rounded-md border border-white/15 object-cover shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              priority
              sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
            />
          ) : panel ? (
            <div className="rounded-md border border-white/12 bg-white/[0.06] p-7 shadow-2xl">
              <h3 className="text-2xl font-black">{panel.title}</h3>
              <ul className="mt-5 divide-y divide-white/10">
                {panel.items.map((item) => (
                  <li key={item} className="py-3 text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </MotionShell>
      </div>
    </section>
  );
}
