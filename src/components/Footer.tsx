import Link from "next/link";
import { brand, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-5 py-10 text-sm text-slate-600">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.3fr]">
        <div>
          <strong className="block text-lg text-slate-950">{brand.name}</strong>
          <span className="font-semibold text-sky-700">{brand.tagline}</span>
          <p className="mt-4 max-w-md">{brand.description}</p>
          <p className="mt-2 max-w-md text-slate-500">{brand.descriptionEn}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 hover:text-sky-700">
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p>Contact oficial / Official contact</p>
            <a className="font-semibold text-sky-700" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
