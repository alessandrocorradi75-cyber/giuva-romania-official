import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, MapPin } from "lucide-react";

export function NewsCard({ article }: { article: { slug: string; title: string; date: string; category: string; discipline: string; country: string; author: string; tags: string[]; image: string; excerpt: string; cta: string } }) {
  return (
    <article className="card interactive-card overflow-hidden">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image src={article.image} alt={article.title} fill sizes="(min-width: 1280px) 31vw, (min-width: 768px) 47vw, calc(100vw - 40px)" className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#16825d]">{article.category} · {article.country}</p>
        <h2 className="mt-3 text-2xl font-black leading-tight text-[#081f3a]">{article.title}</h2>
        <p className="mt-2 text-sm font-semibold text-slate-500">{article.date} · {article.author} · {article.discipline}</p>
        <p className="mt-4 leading-7 text-slate-600">{article.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{tag}</span>)}
        </div>
        <Link href={`/news/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#16825d]">
          {article.cta}<ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function EventCard({ event }: { event: { title: string; status: string; date: string; organizer: string; location: string; cta: string; href: string } }) {
  return (
    <article className="card interactive-card p-6">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{event.status}</p>
      <h2 className="mt-3 text-2xl font-black text-[#081f3a]">{event.title}</h2>
      <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
        <span className="flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{event.date}</span>
        <span className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" />{event.location}</span>
      </div>
      <p className="mt-4 leading-7 text-slate-600">Organizer: {event.organizer}</p>
      <Link href={event.href} className="btn btn-ghost mt-6">{event.cta}<ArrowRight size={17} aria-hidden="true" /></Link>
    </article>
  );
}

export function DocumentCard({ item }: { item: { title: string; type: string; status: string; description: string; href: string } }) {
  return (
    <article className="card interactive-card flex h-full flex-col p-6">
      <FileText className="text-[#1f5fbf]" size={26} aria-hidden="true" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-[#16825d]">{item.type} · {item.status}</p>
      <h2 className="mt-3 text-2xl font-black text-[#081f3a]">{item.title}</h2>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{item.description}</p>
      <Link href={item.href} className="btn btn-ghost mt-6">Vezi detalii<ArrowRight size={17} aria-hidden="true" /></Link>
    </article>
  );
}

export function PartnerCard({ partner }: { partner: { category: string; title: string; text: string; status: string } }) {
  return (
    <article className="card interactive-card p-6">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{partner.category}</p>
      <h2 className="mt-3 text-2xl font-black text-[#081f3a]">{partner.title}</h2>
      <p className="mt-4 leading-7 text-slate-600">{partner.text}</p>
      <p className="mt-5 rounded-full bg-slate-100 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600">{partner.status}</p>
    </article>
  );
}
