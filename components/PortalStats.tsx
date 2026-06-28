import { portalStats } from "@/data/site";

export function PortalStats() {
  return (
    <section className="bg-[#f6f8fb] px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portalStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="card p-5">
                <Icon className="text-[#1f5fbf]" size={26} />
                <p className="mt-5 text-4xl font-black text-[#081f3a]">{stat.value}</p>
                <h3 className="mt-1 text-lg font-black text-[#081f3a]">{stat.label}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{stat.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
