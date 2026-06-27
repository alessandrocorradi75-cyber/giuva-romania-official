import Link from "next/link";
import { Facebook, Linkedin, Menu } from "lucide-react";
import { brand, ctas, navItems, socialLinks } from "@/data/site";

const primaryNav = navItems.filter((item) => ["/", "/despre", "/discipline", "/riders-rescue", "/community", "/partner"].includes(item.href));

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/96 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="GIUVA Romania acasa">
          <span className="flex h-12 shrink-0 items-center rounded-xl bg-[#081f3a] px-2 shadow-sm md:h-14">
            <img src="/brand/giuva-logo.svg" alt="GIUVA - Global Initiative for Urban Volunteering & Awareness" className="h-9 w-auto md:h-10" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-lg font-black tracking-tight text-[#081f3a]">{brand.name}</span>
            <span className="block max-w-[15rem] truncate text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#16825d] xl:max-w-none">
              {brand.fullName}
            </span>
          </span>
        </Link>

        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-[#081f3a] shadow-sm">
            <Menu size={22} />
          </summary>
          <div className="absolute left-0 right-0 top-[73px] grid gap-1 border-b border-slate-200 bg-white px-5 py-4 shadow-xl">
            <div className="mb-2 flex gap-2">
              <Link href="/" className="rounded-full bg-[#081f3a] px-3 py-1 text-xs font-black text-white">
                RO
              </Link>
              <Link href="/en" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                EN
              </Link>
            </div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
          </div>
        </details>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-black text-slate-600">
            <Link href="/" className="rounded-full bg-white px-2.5 py-1 text-[#081f3a] shadow-sm">
              RO
            </Link>
            <Link href="/en" className="px-2.5 py-1 transition hover:text-[#081f3a]">
              EN
            </Link>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#081f3a] transition hover:border-[#16825d] hover:text-[#16825d]"
                aria-label={link.label}
              >
                {link.label === "LinkedIn" ? <Linkedin size={17} /> : <Facebook size={17} />}
              </a>
            ))}
          </div>
          <Link href={ctas.volunteer.href} className="btn btn-primary">
            {ctas.volunteer.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
