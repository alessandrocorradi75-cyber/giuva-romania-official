export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-5 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
        <div>
          <strong className="text-white">GIUVA.RO</strong>
          <br />
          Ride • Respond • Unite
        </div>
        <div>
          Community mobility, volunteer response and civil resilience initiatives.
          <br />
          <a className="text-giuva-cyan" href="mailto:contact@giuva.ro">contact@giuva.ro</a>
        </div>
      </div>
    </footer>
  );
}
