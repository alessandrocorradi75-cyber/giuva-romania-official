import Image from "next/image";
import { journeyStories } from "@/data/site";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function JourneyGallery() {
  return (
    <section className="soft-section px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          tag="Journey system"
          title="Galeria devine poveste."
          text="Journey este pregătit să devină content driven: povești, galerii, evenimente, campanii și volunteer stories."
          textEn="Journey is ready to become content driven: stories, galleries, events, campaigns and volunteer stories."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {journeyStories.map((story) => (
            <MotionShell key={story.title}>
              <article className="h-full overflow-hidden rounded-md border border-sky-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">{story.category}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{story.title}</h3>
                  <p className="mt-1 text-sm font-bold text-slate-500">{story.location}</p>
                  <p className="mt-4 leading-7 text-slate-600">{story.text}</p>
                </div>
              </article>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
