"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Menu } from "lucide-react";
import { brand, ctas, navItems, socialLinks } from "@/data/site";

const primaryNav = navItems.filter((item) => ["/", "/despre", "/discipline", "/project-pulse", "/voluntari", "/partner", "/news", "/contact"].includes(item.href));

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/96 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 md:gap-5 md:px-5" aria-label="Navigare principală">
        <Link href="/" className="flex max-w-[calc(100%-4rem)] min-w-0 items-center gap-2 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffd84d] md:gap-3 lg:max-w-none" aria-label="GIUVA Romania acasă">
          <span className="flex h-10 shrink-0 items-center rounded-xl bg-[#081f3a] px-2 shadow-sm md:h-14">
            <img src="/brand/giuva-logo.svg" alt="GIUVA - Global Initiative for Urban Volunteering & Awareness" className="h-7 w-auto md:h-10" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-base font-black tracking-tight text-[#081f3a] md:text-lg">{brand.name}</span>
            <span className="hidden text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#16825d] sm:block md:text-[0.68rem]">
              {brand.fullName}
            </span>
          </span>
        </Link>

        <details className="group mobile-menu ml-auto shrink-0">
          <summary className="fixed top-4 z-[60] flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-[#081f3a] shadow-sm" style={{ left: "min(calc(100vw - 3.75rem), 335px)" }} aria-label="Deschide meniul principal">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <div className="absolute left-0 right-0 top-[73px] grid max-h-[calc(100vh-73px)] gap-1 overflow-y-auto border-b border-slate-200 bg-white px-5 py-4 shadow-xl">
            <div className="mb-2 flex gap-2" aria-label="Selectare limbă">
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="rounded-full bg-[#081f3a] px-3 py-1 text-xs font-black text-white">RO</Link>
              <Link href="/en" aria-current={pathname === "/en" ? "page" : undefined} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">EN</Link>
            </div>
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`rounded-lg px-3 py-3 text-sm font-bold ${active ? "bg-[#081f3a] text-white" : "text-slate-700 hover:bg-slate-50"}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </details>

        <div className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-black text-slate-600" aria-label="Selectare limbă">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="rounded-full bg-white px-2.5 py-1 text-[#081f3a] shadow-sm">RO</Link>
            <Link href="/en" aria-current={pathname === "/en" ? "page" : undefined} className="px-2.5 py-1 transition hover:text-[#081f3a]">EN</Link>
          </div>
          <div className="hidden items-center gap-1 2xl:flex" aria-label="Canale sociale oficiale">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#081f3a] transition hover:border-[#16825d] hover:text-[#16825d]" aria-label={`${link.label} GIUVA`}>
                {link.label === "LinkedIn" ? <Linkedin size={17} aria-hidden="true" /> : <Facebook size={17} aria-hidden="true" />}
              </a>
            ))}
          </div>
          <Link href={ctas.donate.href} className="btn btn-primary">Donează</Link>
        </div>
      </nav>
    </header>
  );
}








