"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import { MotionShell } from "@/components/MotionShell";
import type { LocalizedText } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

type Localizable = LocalizedText | string;

type HeroAction = {
  href: string;
  label: Localizable;
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
  eyebrow: Localizable;
  title: string;
  subtitle: Localizable;
  subtitleEn?: string;
  text: Localizable;
  textEn?: string;
  actions: HeroAction[];
  showBanner?: boolean;
  panel?: { title: Localizable; items: Localizable[] };
  imagePanel?: { src: string; alt: string };
}) {
  const { text: t } = useLanguage();
  const localize = (value: Localizable) => (typeof value === "string" ? value : t(value));

  return (
    <section className="relative overflow-hidden bg-hero px-5 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94),rgba(15,23,42,0.78),rgba(15,23,42,0.92))]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionShell>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-cyan-200">{localize(eyebrow)}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-normal text-white md:text-7xl xl:text-8xl">{title}</h1>
          <h2 className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-100 md:text-4xl">{localize(subtitle)}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{localize(text)}</p>
          <div className="pulse-line my-8" aria-hidden="true">
            <HeartPulse size={34} />
          </div>
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <Link key={action.href + localize(action.label)} href={action.href} className={`btn ${action.tone ?? "blue"}`}>
                {localize(action.label)}
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </MotionShell>
        <MotionShell className="min-w-0">
          {showBanner ? (
            <Image
              src="/brand/civic-resilience-visual.svg"
              alt="GIUVA civic resilience and urban volunteering network"
              width={1536}
              height={1024}
              className="w-full rounded-md border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
              priority
            />
          ) : imagePanel ? (
            <Image
              src={imagePanel.src}
              alt={imagePanel.alt}
              width={1536}
              height={1024}
              className="w-full rounded-md border border-white/10 object-cover shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
              priority
            />
          ) : panel ? (
            <div className="rounded-md border border-white/10 bg-white/8 p-7 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-black text-white">{localize(panel.title)}</h3>
              <ul className="mt-5 divide-y divide-white/10">
                {panel.items.map((item) => (
                  <li key={localize(item)} className="py-3 text-slate-200">
                    {localize(item)}
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
