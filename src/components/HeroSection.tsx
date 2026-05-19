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
  subtitleEn,
  text,
  textEn,
  actions,
  showBanner = false,
  panel,
  imagePanel
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  subtitleEn?: string;
  text: string;
  textEn?: string;
  actions: HeroAction[];
  showBanner?: boolean;
  panel?: { title: string; items: string[] };
  imagePanel?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-hero px-5 pb-16 pt-32 text-slate-900 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionShell>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-teal-700">{eyebrow}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-normal text-slate-950 md:text-7xl xl:text-8xl">{title}</h1>
          <div className="language-pair mt-5 max-w-3xl">
            <h2 className="ro text-2xl font-extrabold leading-tight md:text-4xl">{subtitle}</h2>
            {subtitleEn ? <p className="en text-lg font-semibold leading-7 md:text-xl">{subtitleEn}</p> : null}
          </div>
          <div className="language-pair mt-6 max-w-2xl text-lg leading-8">
            <p className="ro">{text}</p>
            {textEn ? <p className="en">{textEn}</p> : null}
          </div>
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
              src="/brand/giuva-riders-rescue-banner.png"
              alt="GIUVA Riders Rescue mobile community first response"
              width={1536}
              height={1024}
              className="w-full rounded-md border border-sky-100 shadow-[0_28px_70px_rgba(20,104,168,0.18)]"
              priority
            />
          ) : imagePanel ? (
            <Image
              src={imagePanel.src}
              alt={imagePanel.alt}
              width={1536}
              height={1024}
              className="w-full rounded-md border border-sky-100 object-cover shadow-[0_28px_70px_rgba(20,104,168,0.18)]"
              priority
            />
          ) : panel ? (
            <div className="rounded-md border border-sky-100 bg-white/85 p-7 shadow-xl">
              <h3 className="text-2xl font-black">{panel.title}</h3>
              <ul className="mt-5 divide-y divide-sky-100">
                {panel.items.map((item) => (
                  <li key={item} className="py-3 text-slate-700">
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
