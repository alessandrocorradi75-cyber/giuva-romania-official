import { Facebook, Linkedin, Send, Youtube } from "lucide-react";
import { socialChannels } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <Linkedin size={18} />;
  if (label === "Facebook") return <Facebook size={18} />;
  if (label === "YouTube") return <Youtube size={18} />;
  return <Send size={18} />;
}

export function SocialChannels() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="eyebrow">Urmărește-ne</span>
        <h2 className="section-title mt-5">Canale oficiale și canale viitoare.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="card p-7">
            <h3 className="text-2xl font-black text-[#081f3a]">Canale oficiale / în dezvoltare</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socialChannels.official.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4 font-black text-[#081f3a] transition hover:border-[#16825d]">
                  <span className="flex items-center gap-3"><SocialIcon label={item.label} />{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-[#16825d]">{item.status}</span>
                </a>
              ))}
            </div>
          </article>
          <article className="card p-7">
            <h3 className="text-2xl font-black text-[#081f3a]">Roadmap digital</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socialChannels.future.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 font-black text-slate-700">
                  <span>{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.status}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
