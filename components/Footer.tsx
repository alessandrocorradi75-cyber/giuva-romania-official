import Link from "next/link";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { GiuvaLogo } from "@/components/brand/GiuvaLogo";
import { brand, contactEmails, europeanNetwork, socialLinks } from "@/data/site";

const footerGroups = [
  {
    title: "Mission",
    links: [
      { label: "Despre GIUVA", href: "/despre" },
      { label: "Discipline", href: "/discipline" },
      { label: "Voluntari", href: "/voluntari" },
      { label: "Parteneriate", href: "/partner" }
    ]
  },
  {
    title: "Portal",
    links: [
      { label: "News Center", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Publicații", href: "/publicatii" },
      { label: "Download Center", href: "/download-center" },
      { label: "FAQ Center", href: "/faq" }
    ]
  },
  {
    title: "Transparență",
    links: [
      { label: "Transparență", href: "/transparenta" },
      { label: "Guvernanță", href: "/guvernanta" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" }
    ]
  },
  {
    title: "Normativ & Resurse",
    links: [
      { label: "Resurse instituționale", href: "/resurse-institutionale" },
      { label: "GIUVA AI", href: "/giuva-ai" },
      { label: "Rețea europeană", href: "/giuva-network" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[1fr_1.55fr_0.85fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 items-center rounded-xl bg-[#081f3a] px-2">
              <GiuvaLogo className="h-10 w-auto" height={40} />
            </span>
            <div>
              <strong className="block text-2xl font-black text-[#081f3a]">GIUVA Romania</strong>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#16825d]">{brand.fullName}</p>
            </div>
          </div>
          <p className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">Connecting Communities.<br />Creating Impact.</p>
          <p className="mt-5 max-w-md leading-7 text-slate-600">{brand.description}</p>
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">{brand.legalBoundary}</p>
        </div>

        <nav className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{group.title}</h2>
              <div className="mt-4 grid gap-2">
                {group.links.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Contact & Newsletter</h2>
          <div className="mt-4 grid gap-2">
            {contactEmails.map((email) => (
              <a key={email.value} href={`mailto:${email.value}`} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#081f3a]">
                <Mail size={15} aria-hidden="true" />
                {email.value}
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-black text-[#081f3a]">Newsletter</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Flux pregătit pentru integrare viitoare cu double opt-in.</p>
            <Link href="/contact" className="mt-3 inline-flex text-sm font-black text-[#16825d]">Contact Center</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Canale sociale oficiale">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 transition hover:border-[#16825d] hover:text-[#16825d]">
                {item.label === "LinkedIn" ? <Linkedin size={15} aria-hidden="true" /> : <Facebook size={15} aria-hidden="true" />}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:grid-cols-[1fr_auto]">
        <p>GIUVA Romania · Release 1.0 Quality Review · Version R1-005</p>
        <div className="flex flex-wrap gap-3">
          {europeanNetwork.slice(0, 5).map((item) => (
            <a key={item.domain} href={item.href} className="font-semibold hover:text-[#081f3a]">{item.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}


