import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import { brand, contactEmails, europeanNetwork, navItems, socialLinks } from "@/data/site";

export function Footer() {
  const footerNetworkOrder = ["GIUVA Europe", "GIUVA Italia", "GIUVA Austria", "GIUVA Spania", "GIUVA Ungaria"];
  const footerNetwork = footerNetworkOrder
    .map((label) => europeanNetwork.find((item) => item.label === label))
    .filter(Boolean) as typeof europeanNetwork;

  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 items-center rounded-xl bg-[#081f3a] px-2">
              <img src="/brand/giuva-logo.svg" alt="GIUVA - Global Initiative for Urban Volunteering & Awareness" className="h-10 w-auto" />
            </span>
            <div>
              <strong className="block text-2xl font-black text-[#081f3a]">GIUVA Romania</strong>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#16825d]">{brand.fullName}</p>
            </div>
          </div>
          <p className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">
            Connecting Communities.
            <br />
            Creating Impact.
          </p>
          <p className="mt-5 max-w-md leading-7 text-slate-600">{brand.description}</p>
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            {brand.legalBoundary}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Navigare</h2>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">GIUVA Europe</h2>
            <div className="mt-4 grid gap-2">
              {footerNetwork.map((item) => (
                <a key={item.domain} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Secretariat</h2>
          <div className="mt-4 grid gap-2">
            {contactEmails.map((email) => (
              <a key={email.value} href={`mailto:${email.value}`} className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">
                {email.value}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 transition hover:border-[#16825d] hover:text-[#16825d]"
              >
                {item.label === "LinkedIn" ? <Linkedin size={15} /> : <Facebook size={15} />}
                {item.label}
              </a>
            ))}
            {[
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Cookie", href: "/cookie-policy" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 transition hover:border-[#16825d] hover:text-[#16825d]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}