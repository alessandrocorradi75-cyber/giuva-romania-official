import Link from "next/link";

const nav = [
  ["Home", "/"],
  ["Riders Rescue", "/riders-rescue"],
  ["Community", "/community"],
  ["Journey", "/journey"],
  ["Project Pulse", "/project-pulse"],
  ["Civil Response", "/civil-response"],
  ["Partners", "/partners"],
  ["Media", "/media"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050b14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="leading-tight">
          <div className="text-xl font-black tracking-widest">GIUVA.RO</div>
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-giuva-cyan">
            Ride • Respond • Unite
          </div>
        </Link>
        <div className="hidden gap-4 text-sm text-slate-200 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-giuva-cyan">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
