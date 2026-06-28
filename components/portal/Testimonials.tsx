export function Testimonials() {
  const items = [
    { category: "Volunteers", quote: "Un cadru civic clar, prietenos și responsabil pentru oameni care vor să contribuie." },
    { category: "Citizens", quote: "Informații simple, accesibile și orientate către prevenție și comunitate." },
    { category: "Partners", quote: "O abordare prudentă: cooperare doar prin documente, responsabilități și transparență." },
    { category: "Institutions", quote: "GIUVA își definește rolul complementar, fără a se prezenta ca autoritate publică." }
  ];

  return (
    <section className="bg-[#f6f8fb] px-5 py-16" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl">
        <span className="eyebrow">Testimonials</span>
        <h2 id="testimonials-title" className="section-title mt-5">Voci pregătite pentru validare publică.</h2>
        <p className="section-text max-w-3xl">Pentru Release 1.0 folosim placeholder instituțional, fără nume reale, până la consimțământ și validare.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <figure key={item.category} className="card p-6">
              <figcaption className="text-xs font-black uppercase tracking-[0.14em] text-[#1f5fbf]">{item.category}</figcaption>
              <blockquote className="mt-5 text-lg font-bold leading-8 text-slate-700">“{item.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
