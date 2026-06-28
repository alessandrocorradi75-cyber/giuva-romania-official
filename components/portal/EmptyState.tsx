import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EmptyState({ title, text, href, action }: { title: string; text: string; href?: string; action?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1f5fbf]">Under Development</p>
      <h2 className="mt-3 text-3xl font-black text-[#081f3a]">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">{text}</p>
      {href && action ? (
        <Link href={href} className="btn btn-ghost mt-6">
          {action}
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
