import type { LucideIcon } from "lucide-react";
import { AlertCircle, Database, LockKeyhole } from "lucide-react";

type SummaryCard = {
  label: string;
  value: string;
  detail: string;
};

type TableColumn = {
  key: string;
  label: string;
};

type TableRow = Record<string, string> & {
  status: string;
};

type AdminSectionPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  summary: SummaryCard[];
  columns: TableColumn[];
  rows: TableRow[];
  emptyState: string;
};

function statusTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("active") || normalized.includes("ready")) {
    return "bg-emerald-50 text-emerald-800 border-emerald-100";
  }
  if (normalized.includes("review") || normalized.includes("draft") || normalized.includes("pending")) {
    return "bg-amber-50 text-amber-900 border-amber-100";
  }
  return "bg-slate-100 text-slate-700 border-slate-200";
}

export function AdminSectionPage({
  title,
  eyebrow,
  description,
  icon: Icon,
  summary,
  columns,
  rows,
  emptyState
}: Readonly<AdminSectionPageProps>) {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-800">
              <LockKeyhole aria-hidden="true" size={14} /> Internal only
            </div>
            <p className="m-0 mt-5 text-sm font-black uppercase tracking-[0.14em] text-blue-700">{eyebrow}</p>
            <h1 className="m-0 mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
            <p className="m-0 mt-3 text-base leading-7 text-slate-600">{description}</p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <Icon aria-hidden="true" size={26} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3" aria-label={`${title} summary`}>
        {summary.map((item) => (
          <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="m-0 text-sm font-bold text-slate-500">{item.label}</p>
            <p className="m-0 mt-2 text-3xl font-black text-slate-950">{item.value}</p>
            <p className="m-0 mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm" aria-labelledby="section-table-title">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="section-table-title" className="m-0 text-xl font-black text-slate-950">Placeholder records</h2>
            <p className="m-0 mt-1 text-sm leading-6 text-slate-600">Demo/internal data only. No backend records are loaded or submitted from this page.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-extrabold text-slate-700">
            <Database aria-hidden="true" size={16} /> Static mock data
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col" className="border-b border-slate-200 px-4 py-3 font-black">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={Object.values(row).join("-")} className="border-b border-slate-100 last:border-b-0">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-4 align-top text-slate-700">
                      {column.key === "status" ? (
                        <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-black ${statusTone(row.status)}`}>
                          {row.status}
                        </span>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-3 border-t border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <AlertCircle aria-hidden="true" className="mt-1 shrink-0 text-amber-700" size={18} />
          <p className="m-0">{emptyState}</p>
        </div>
      </section>
    </div>
  );
}
