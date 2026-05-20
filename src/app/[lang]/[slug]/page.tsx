import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MotionShell } from "@/components/MotionShell";
import {
  brand,
  civicAvailabilityNetwork,
  contactChannels,
  divisionCapabilities,
  governancePackage,
  pillars,
  t,
  transparencyPage
} from "@/data/site";
import { isLocale, type Locale, withLocale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

function getLocale(lang: string): Locale {
  return isLocale(lang) ? lang : "ro";
}

function findPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = getLocale(lang);
  const pillar = findPillar(slug);

  if (
    ["transparency", "about", "principles", "volunteer-academy", "european-affairs", "impact", "civic-availability"].includes(slug) ||
    civicAvailabilityNetwork.pages.some((page) => page.slug === slug)
  ) {
    return {
      title: `${slug.replaceAll("-", " ")} | GIUVA.RO`,
      description: t(locale, governancePackage.hero.text)
    };
  }

  return {
    title: pillar ? `${t(locale, pillar.title)} | GIUVA.RO` : `GIUVA.RO | ${slug}`,
    description: pillar ? t(locale, pillar.purpose) : t(locale, brand.description)
  };
}

export default async function LocalizedSubPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const locale = getLocale(lang);
  const pillar = findPillar(slug);

  if (slug === "transparency") {
    return (
      <>
        <section className="min-h-[76vh] bg-white px-5 pb-20 pt-36 text-slate-950">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <MotionShell>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">{t(locale, governancePackage.hero.eyebrow)}</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-normal text-slate-950 md:text-7xl">GIUVA</h1>
              <h2 className="mt-5 text-2xl font-black leading-tight text-blue-950 md:text-4xl">{t(locale, governancePackage.hero.title)}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t(locale, governancePackage.hero.text)}</p>
              <div className="mt-8 rounded-md border-l-4 border-emerald-500 bg-emerald-50 p-5 text-base font-bold leading-7 text-emerald-950">
                {t(locale, governancePackage.hero.banner)}
              </div>
            </MotionShell>
            <MotionShell>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-8 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Transparență & Guvernanță</p>
                <h3 className="mt-4 text-3xl font-black text-slate-950">{t(locale, transparencyPage.title)}</h3>
                <p className="mt-5 leading-8 text-slate-600">{t(locale, governancePackage.transparencyIntro)}</p>
              </div>
            </MotionShell>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">Documente publice</span>
            <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-6xl">Public Transparency & Governance Package</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {governancePackage.publicDocuments.map((document) => (
                <MotionShell key={document.title}>
                  <article className="flex h-full flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-2xl font-black text-blue-950">{document.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-slate-600">{t(locale, document.description)}</p>
                    <a
                      href={`/documents/${document.file}`}
                      className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-800"
                      aria-label={`Download ${document.title}`}
                    >
                      Descarcă PDF
                      <ArrowRight size={17} />
                    </a>
                  </article>
                </MotionShell>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionShell>
              <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">Governance</span>
              <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-6xl">{t(locale, transparencyPage.whyTitle)}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t(locale, transparencyPage.whyText)}</p>
            </MotionShell>
            <MotionShell>
              <div className="grid gap-3">
                {governancePackage.principles.map((principle) => (
                  <p key={principle.title} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-700">
                    <strong className="text-blue-800">{principle.title}:</strong>{" "}
                    {t(locale, principle.text)}
                  </p>
                ))}
              </div>
            </MotionShell>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">KPI & impact comunitar</span>
            <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-6xl">Indicatori publici încep de la zero.</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              GIUVA publică indicatori doar pe baza activităților reale, campaniilor documentate și parteneriatelor validate.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {transparencyPage.kpis.map((kpi) => (
                <MotionShell key={kpi.label}>
                  <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="text-5xl font-black text-blue-950">{kpi.value}</div>
                    <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-700">{kpi.label}</p>
                  </article>
                </MotionShell>
              ))}
            </div>
            <div className="mt-10 rounded-md border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-black text-slate-950">Documente nepublice</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Din motive de siguranță, protecție internă și responsabilitate, GIUVA nu publică proceduri sensibile sau documente disciplinare complete.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {governancePackage.nonPublicDocuments.map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (slug === "civic-availability" || civicAvailabilityNetwork.pages.some((page) => page.slug === slug)) {
    const currentPage = civicAvailabilityNetwork.pages.find((page) => page.slug === slug);

    return (
      <>
        <section className="min-h-[72vh] bg-white px-5 pb-20 pt-36 text-slate-950">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <MotionShell>
              <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
                {currentPage ? currentPage.access : "Civic availability"}
              </span>
              <h1 className="mt-6 text-5xl font-black leading-tight text-slate-950 md:text-7xl">
                {currentPage ? currentPage.title : civicAvailabilityNetwork.name}
              </h1>
              <p className="mt-6 text-xl font-semibold leading-9 text-slate-600">{t(locale, civicAvailabilityNetwork.purpose)}</p>
              <div className="mt-8 rounded-md border-l-4 border-emerald-500 bg-emerald-50 p-5 font-bold leading-7 text-emerald-950">
                {t(locale, civicAvailabilityNetwork.disclaimer)}
              </div>
            </MotionShell>
            <MotionShell>
              <div className="rounded-md border border-slate-200 bg-slate-50 p-6 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Tablet partner preview</p>
                <div className="mt-5 aspect-[4/3] rounded-md border border-slate-200 bg-white p-4">
                  <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-3">
                    <div className="relative overflow-hidden rounded-md bg-blue-50">
                      <div className="absolute left-8 top-10 h-4 w-4 rounded-full bg-blue-600" />
                      <div className="absolute right-10 top-20 h-4 w-4 rounded-full bg-emerald-600" />
                      <div className="absolute bottom-14 left-16 h-4 w-4 rounded-full bg-purple-600" />
                      <div className="absolute bottom-8 right-16 h-4 w-4 rounded-full bg-orange-500" />
                    </div>
                    <div className="grid gap-2">
                      {civicAvailabilityNetwork.statuses.slice(0, 5).map((status) => (
                        <div key={status} className="rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                          {status}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">Read-only mode. No dispatch command. No state operator mission assignment.</p>
              </div>
            </MotionShell>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">Access levels</span>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {civicAvailabilityNetwork.accessLevels.map((level) => (
                <MotionShell key={level.title}>
                  <article className="h-full rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">{level.visibility}</p>
                    <h2 className="mt-3 text-2xl font-black text-blue-950">{level.title}</h2>
                    <p className="mt-4 leading-7 text-slate-600">{t(locale, level.text)}</p>
                  </article>
                </MotionShell>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionShell>
              <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">Resource categories</span>
              <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-6xl">Civic resource visibility, not public dispatch.</h2>
              <p className="mt-6 leading-8 text-slate-600">
                GPS is visible only when the volunteer is available and has given consent. It is never shown on the public map.
              </p>
            </MotionShell>
            <MotionShell>
              <div className="grid gap-3">
                {civicAvailabilityNetwork.categories.map((category) => (
                  <div key={category.title} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
                    <span className={`h-4 w-4 rounded-full ${category.className}`} />
                    <p className="font-bold text-slate-700">{category.title}</p>
                  </div>
                ))}
              </div>
            </MotionShell>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Roles", items: civicAvailabilityNetwork.roles },
              { title: "Status", items: civicAvailabilityNetwork.statuses },
              { title: "Availability slots", items: civicAvailabilityNetwork.slots },
              { title: "Privacy", items: civicAvailabilityNetwork.privacy }
            ].map((group) => (
              <MotionShell key={group.title}>
                <article className="h-full rounded-md border border-slate-200 bg-white p-6">
                  <h3 className="text-2xl font-black text-blue-950">{group.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {group.items.map((item) => (
                      <p key={item} className="rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              </MotionShell>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">Platform pages</span>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {civicAvailabilityNetwork.pages.map((page) => (
                <MotionShell key={page.slug}>
                  <Link href={withLocale(locale, `/${page.slug}`)} className="block h-full rounded-md border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">{page.access}</p>
                    <h3 className="mt-3 text-xl font-black text-blue-950">{page.title}</h3>
                  </Link>
                </MotionShell>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (["about", "principles", "volunteer-academy", "european-affairs", "impact"].includes(slug)) {
    const pageTitle =
      slug === "about"
        ? "Despre GIUVA"
        : slug === "principles"
          ? "Principii"
          : slug === "volunteer-academy"
            ? "Volunteer Academy"
            : slug === "european-affairs"
              ? "European Affairs & Funding Office"
              : "KPI & Impact";

    const pageText =
      slug === "about"
        ? "GIUVA este o organizație civică, educațională și comunitară, orientată către dezvoltarea rezilienței comunitare, a voluntariatului responsabil și a culturii prevenției. GIUVA promovează cooperarea instituțională, educația civică, cultura primului ajutor, awareness AED, pregătirea comunitară, solidaritatea și responsabilitatea publică. GIUVA NU înlocuiește instituțiile statului."
        : slug === "volunteer-academy"
          ? "Volunteer Academy reprezintă componenta educațională GIUVA, dedicată dezvoltării culturii civice, pregătirii comunitare și voluntariatului responsabil."
          : slug === "european-affairs"
            ? t(locale, governancePackage.europeanOffice)
            : slug === "impact"
              ? "KPI & Impact prezintă indicatorii publici privind comunitatea, voluntariatul, AED awareness, educația, parteneriatele, impactul social, granturile și proiectele."
              : "GIUVA își desfășoară activitatea în baza legalității, anti-extremismului, respectării drepturilor omului, safeguarding, transparenței, integrității și bunei guvernanțe.";

    const blocks =
      slug === "principles"
        ? governancePackage.principles.map((item) => ({ title: item.title, text: t(locale, item.text) }))
        : slug === "volunteer-academy"
          ? governancePackage.academyBlocks.map((item) => ({ title: item, text: "Componentă educațională pentru pregătire civică, prevenție și voluntariat responsabil." }))
          : slug === "impact"
            ? governancePackage.impactAreas.map((item) => ({ title: item, text: "Indicator public viitor, raportat numai pe baza activităților documentate." }))
            : [
                { title: "Cooperare instituțională", text: "GIUVA promovează cooperarea instituțională și parteneriatele publice, private și europene." },
                { title: "Reziliență comunitară", text: "GIUVA susține pregătirea comunitară, cultura prevenției și educația civică." },
                { title: "Complementaritate", text: "GIUVA nu înlocuiește instituțiile statului și acționează cu caracter complementar instituțional." }
              ];

    return (
      <>
        <section className="min-h-[68vh] bg-white px-5 pb-20 pt-36 text-slate-950">
          <div className="mx-auto max-w-5xl">
            <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              GIUVA.RO
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-slate-950 md:text-7xl">{pageTitle}</h1>
            <p className="mt-6 text-xl font-semibold leading-9 text-slate-600">{pageText}</p>
            <div className="mt-8 rounded-md border-l-4 border-emerald-500 bg-emerald-50 p-5 font-bold leading-7 text-emerald-950">
              {t(locale, governancePackage.hero.banner)}
            </div>
          </div>
        </section>
        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blocks.map((block) => (
              <MotionShell key={block.title}>
                <article className="h-full rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-black text-blue-950">{block.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600">{block.text}</p>
                </article>
              </MotionShell>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (!pillar) {
    return (
      <section className="dark-section min-h-screen px-5 py-40">
        <div className="mx-auto max-w-4xl">
          <span className="tag tag-light">GIUVA.RO</span>
          <h1 className="section-title text-white">{slug.replaceAll("-", " ")}</h1>
          <p className="section-text text-slate-300">{t(locale, brand.description)}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a key={channel.value} href={`mailto:${channel.value}`} className="rounded-md border border-white/10 bg-white/5 p-5">
                  <Icon className="text-cyan-200" size={28} />
                  <p className="mt-3 font-black text-white">{channel.label}</p>
                  <p className="text-slate-300">{channel.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  const Icon = pillar.icon;

  return (
    <>
      <HeroSection
        eyebrow={brand.tagline}
        title={t(locale, pillar.title)}
        subtitle={pillar.mission}
        text={pillar.purpose}
        actions={[
          { href: withLocale(locale, "/contact"), label: { ro: "Contact", en: "Contact", it: "Contatto", de: "Kontakt", fr: "Contact", hu: "Kapcsolat", sr: "Kontakt", hr: "Kontakt" }, tone: "red" },
          { href: withLocale(locale, "/partners"), label: { ro: "Parteneriate", en: "Partnerships", it: "Partnership", de: "Partnerschaften", fr: "Partenariats", hu: "Partnerségek", sr: "Partnerstva", hr: "Partnerstva" }, tone: "ghost" }
        ]}
        imagePanel={{
          src:
            pillar.slug === "riders-rescue"
              ? "/brand/riders-rescue-support.png"
              : pillar.slug === "journey"
                ? "/brand/journey-urban-3.png"
                : pillar.slug === "civil-response"
                  ? "/brand/civil-response-protocol.png"
                  : pillar.slug === "project-pulse"
                    ? "/brand/project-pulse-scene.png"
                    : "/brand/community-manifesto-3.png",
          alt: t(locale, pillar.title)
        }}
      />
      <section className="dark-section px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["mission", "operational purpose", "identity"].map((item, index) => (
            <MotionShell key={item}>
              <article className="h-full rounded-md border border-white/10 bg-white/5 p-6">
                <Icon className="text-red-400" size={34} />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-cyan-200">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-2xl font-black text-white">{item}</h2>
                <p className="mt-4 leading-7 text-slate-300">{index === 0 ? t(locale, pillar.mission) : t(locale, pillar.purpose)}</p>
              </article>
            </MotionShell>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <Link href={withLocale(locale, "/")} className="btn ghost">
            GIUVA.RO
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="red-section px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="tag tag-light">Operational division</span>
          <h2 className="section-title max-w-4xl text-white">{t(locale, pillar.title)} as an institutional module.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {divisionCapabilities.map((capability, index) => (
              <MotionShell key={t(locale, capability.title)}>
                <article className="h-full rounded-md border border-white/10 bg-slate-950/72 p-6">
                  <p className="text-sm font-black text-red-400">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-black text-white">{t(locale, capability.title)}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{t(locale, capability.text)}</p>
                </article>
              </MotionShell>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
