import Image from "next/image";
import { MotionShell } from "@/components/MotionShell";
import { SectionHeader } from "@/components/SectionHeader";

export function VisualShowcase({
  tag,
  title,
  text,
  items,
  light = true
}: {
  tag: string;
  title: string;
  text: string;
  items: { title: string; text: string; image: string }[];
  light?: boolean;
}) {
  return (
    <section className={light ? "bg-white px-5 py-20 text-slate-950" : "bg-[#050b14] px-5 py-20 text-white"}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader light={light} tag={tag} title={title} text={text} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <MotionShell key={item.title}>
              <article className={light ? "h-full overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm" : "h-full overflow-hidden rounded-md border border-white/10 bg-white/[0.06]"}>
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className={light ? "mt-3 leading-7 text-slate-600" : "mt-3 leading-7 text-slate-300"}>{item.text}</p>
                </div>
              </article>
            </MotionShell>
          ))}
        </div>
      </div>
    </section>
  );
}
