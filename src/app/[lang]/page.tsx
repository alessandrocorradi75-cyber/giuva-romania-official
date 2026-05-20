import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { HeroSection } from "@/components/HeroSection";
import { MotionShell } from "@/components/MotionShell";
import { OfficialResources } from "@/components/OfficialResources";
import { ProjectPulseSection } from "@/components/ProjectPulseSection";
import {
  brand,
  civicAvailabilityNetwork,
  featureCards,
  foundationStatement,
  futureIntegrations,
  homeCopy,
  homepageSections,
  institutionalMatrix,
  institutionalPrograms,
  objectives,
  partnerGroups,
  pillars,
  strategicDoctrine,
  t,
  values
} from "@/data/site";
import { isLocale, type Locale, withLocale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

function getLocale(lang: string): Locale {
  return isLocale(lang) ? lang : "ro";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocale(lang);

  return {
    title: `GIUVA.RO | ${t(locale, brand.tagline)}`,
    description: t(locale, brand.description),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ro: "/ro",
        en: "/en",
        it: "/it",
        de: "/de",
        fr: "/fr",
        hu: "/hu",
        sr: "/sr",
        hr: "/hr"
      }
    }
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const { lang } = await params;
  const locale = getLocale(lang);

  return (
    <>
      <HeroSection
        eyebrow={homeCopy.heroEyebrow}
        title="GIUVA.RO"
        subtitle={homeCopy.heroTitle}
        text={homeCopy.heroText}
        actions={[
          { href: withLocale(locale, "/contact"), label: homeCopy.ctaVolunteer, tone: "red" },
          { href: withLocale(locale, "/project-pulse"), label: homeCopy.ctaSupport, tone: "ghost" },
          { href: withLocale(locale, "/partners"), label: homeCopy.ctaPartners, tone: "blue" }
        ]}
        imagePanel={{ src: "/brand/civil-response-scene.png", alt: "GIUVA civic resilience field cooperation" }}
      />

      <section className="dark-section px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionShell>
            <span className="tag tag-light">{t(locale, foundationStatement.label)}</span>
            <h2 className="section-title text-white">{t(locale, foundationStatement.title)}</h2>
          </MotionShell>
          <MotionShell>
            <div className="grid gap-5">
              {foundationStatement.paragraphs.map((paragraph) => (
                <p key={paragraph.ro} className="text-2xl font-bold leading-10 text-slate-200">
                  {t(locale, paragraph)}
                </p>
              ))}
            </div>
          </MotionShell>
        </div>
      </section>

      <section className="red-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">{t(locale, homeCopy.missionTitle)}</span>
          <div className="grid gap-5 lg:grid-cols-3">
            {strategicDoctrine.map((item) => (
              <MotionShell key={t(locale, item.title)}>
                <article className="h-full rounded-md border border-white/10 bg-slate-950/72 p-6">
                  <h2 className="text-2xl font-black text-white">{t(locale, item.title)}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{t(locale, item.text)}</p>
                </article>
              </MotionShell>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <MotionShell>
              <article className="h-full rounded-md border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black text-white">Valori</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span key={value} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200">
                      {value}
                    </span>
                  ))}
                </div>
              </article>
            </MotionShell>
            <MotionShell>
              <article className="h-full rounded-md border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black text-white">Obiective</h3>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {objectives.map((objective) => (
                    <p key={objective} className="rounded-md bg-slate-950/55 px-3 py-2 text-sm font-semibold text-slate-300">
                      {objective}
                    </p>
                  ))}
                </div>
              </article>
            </MotionShell>
          </div>
        </div>
      </section>

      <section className="red-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">Operational pillars</span>
          <h2 className="section-title max-w-4xl text-white">{t(locale, homepageSections.pillarsTitle)}</h2>
          <p className="section-text text-slate-300">{t(locale, homepageSections.pillarsText)}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <MotionShell key={pillar.slug}>
                  <Link href={withLocale(locale, `/${pillar.slug}`)} className="pillar-card block h-full p-5">
                    <Icon className="mb-5 text-red-400" size={36} />
                    <h3 className="text-xl font-black leading-tight text-white">{t(locale, pillar.title)}</h3>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">{t(locale, pillar.mission)}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{t(locale, pillar.purpose)}</p>
                  </Link>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => {
              const Icon = card.icon;
              const sectionTitle = homepageSections[card.titleKey as keyof typeof homepageSections];
              return (
                <MotionShell key={card.titleKey}>
                  <article className="h-full rounded-md border border-white/10 bg-white/5 p-6 shadow-2xl">
                    <Icon className="text-cyan-200" size={36} />
                    <h2 className="mt-5 text-2xl font-black text-white">{t(locale, sectionTitle)}</h2>
                    <p className="mt-4 leading-7 text-slate-300">{t(locale, card.text)}</p>
                  </article>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionShell>
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              Civic Availability Network
            </span>
            <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-6xl">{civicAvailabilityNetwork.name}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t(locale, civicAvailabilityNetwork.purpose)}</p>
            <div className="mt-6 rounded-md border-l-4 border-emerald-500 bg-emerald-50 p-5 font-bold leading-7 text-emerald-950">
              {t(locale, civicAvailabilityNetwork.disclaimer)}
            </div>
            <Link href={withLocale(locale, "/civic-availability")} className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-800">
              Open platform concept
              <ArrowRight size={17} />
            </Link>
          </MotionShell>
          <MotionShell>
            <div className="grid gap-3 sm:grid-cols-2">
              {civicAvailabilityNetwork.pages.slice(0, 6).map((page) => (
                <Link key={page.slug} href={withLocale(locale, `/${page.slug}`)} className="rounded-md border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-700">{page.access}</p>
                  <h3 className="mt-2 font-black text-blue-950">{page.title}</h3>
                </Link>
              ))}
            </div>
          </MotionShell>
        </div>
      </section>

      <ProjectPulseSection />

      <section className="dark-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">Institutional cooperation</span>
          <h2 className="section-title max-w-5xl text-white">{t(locale, homepageSections.cooperationTitle)}</h2>
          <p className="section-text text-slate-300">
            GIUVA is designed for municipalities, civil protection, emergency agencies, Red Cross structures, ERC-aligned education,
            MAI, IGSU and local authorities.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {institutionalMatrix.map((item) => {
              const Icon = item.icon;
              return (
                <MotionShell key={t(locale, item.title)}>
                  <article className="h-full rounded-md border border-white/10 bg-white/5 p-6 shadow-2xl">
                    <Icon className="text-cyan-200" size={34} />
                    <h3 className="mt-5 text-xl font-black text-white">{t(locale, item.title)}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{t(locale, item.text)}</p>
                  </article>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>

      <section className="red-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">Preparedness / Academy / Infrastructure</span>
          <h2 className="section-title max-w-5xl text-white">Public capacity, measured and trained.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {institutionalPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <MotionShell key={program.label}>
                  <article className="h-full rounded-md border border-white/10 bg-slate-950/72 p-6 shadow-2xl">
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="text-red-400" size={34} />
                      <span className="rounded-md border border-white/10 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                        {program.label}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-white">{t(locale, program.title)}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{t(locale, program.text)}</p>
                  </article>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>

      <section className="red-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">{t(locale, homepageSections.partnersTitle)}</span>
          <h2 className="section-title max-w-4xl text-white">{t(locale, homepageSections.cooperationTitle)}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {partnerGroups.map((group) => {
              const Icon = group.icon;
              return (
                <MotionShell key={t(locale, group.title)}>
                  <article className="h-full rounded-md border border-white/10 bg-slate-950/70 p-6">
                    <Icon className="text-red-400" size={34} />
                    <h3 className="mt-5 text-2xl font-black text-white">{t(locale, group.title)}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{t(locale, group.text)}</p>
                  </article>
                </MotionShell>
              );
            })}
          </div>
          <Link href={withLocale(locale, "/partners")} className="btn ghost mt-8">
            {t(locale, homeCopy.ctaPartners)}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="dark-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">Future integrations</span>
          <h2 className="section-title max-w-5xl text-white">A future European civic resilience network.</h2>
          <p className="section-text text-slate-300">
            The platform is prepared for registration, donations, maps, dashboards, events and a partner portal.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {futureIntegrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <MotionShell key={t(locale, integration.title)}>
                  <article className="h-full rounded-md border border-white/10 bg-white/5 p-6">
                    <Icon className="text-cyan-200" size={32} />
                    <h3 className="mt-5 text-xl font-black text-white">{t(locale, integration.title)}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{t(locale, integration.text)}</p>
                  </article>
                </MotionShell>
              );
            })}
          </div>
        </div>
      </section>

      <OfficialResources />
      <CTA />
    </>
  );
}
