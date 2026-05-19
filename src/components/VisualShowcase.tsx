import Image from "next/image";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function VisualShowcase({
  tag,
  title,
  text,
  textEn,
  items,
  light = true
}: {
  tag: string;
  title: string;
  text: string;
  textEn?: string;
  items: { title: string; text: string; image: string }[];
  light?: boolean;
}) {
  return (
    <section className={light ? "white-section px-5 py-20" : "blue-section px-5 py-20"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader light={light} tag={tag} title={title} text={text} textEn={textEn} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <MotionShell key={item.title}>
              <article className="h-full overflow-hidden rounded-md border border-sky-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
