"use client";

import { RefreshCw, ShieldAlert } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

type Column<T> = {
  key: string;
  label: string;
  render: (record: T) => string;
};

type AdminResourceTableProps<T> = {
  title: string;
  eyebrow: string;
  description: string;
  endpointLabel: string;
  sensitiveNotice: string;
  emptyMessage: string;
  mutationStatus: string;
  loadRecords: (token: string) => Promise<T[]>;
  getRecordId: (record: T) => string;
  getRecordStatus?: (record: T) => string;
  columns: Column<T>[];
};

function statusTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("active") || normalized.includes("completed") || normalized.includes("issued")) {
    return "border-emerald-100 bg-emerald-50 text-emerald-800";
  }
  if (normalized.includes("draft") || normalized.includes("pending") || normalized.includes("review") || normalized.includes("received")) {
    return "border-amber-100 bg-amber-50 text-amber-900";
  }
  return "border-slate-200 bg-slate-100 text-slate-700";
}

export function AdminResourceTable<T>({
  title,
  eyebrow,
  description,
  endpointLabel,
  sensitiveNotice,
  emptyMessage,
  mutationStatus,
  loadRecords,
  getRecordId,
  getRecordStatus,
  columns
}: Readonly<AdminResourceTableProps<T>>) {
  const { token } = useAdminAuth();
  const [records, setRecords] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!token) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      setRecords(await loadRecords(token));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : `Unable to load ${title.toLowerCase()}`);
    } finally {
      setLoading(false);
    }
  }, [loadRecords, title, token]);

  useEffect(() => {
    void load();
  }, [load]);

  const statusCounts = useMemo(() => {
    const counts = new Map<string, number>();
    if (!getRecordStatus) {
      return counts;
    }
    records.forEach((record) => {
      const status = getRecordStatus(record) || "unknown";
      counts.set(status, (counts.get(status) ?? 0) + 1);
    });
    return counts;
  }, [getRecordStatus, records]);

  const firstStatus = [...statusCounts.entries()][0];

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">{eyebrow}</p>
            <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">{title}</h1>
            <p className="m-0 mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>
          <button
            type="button"
            onClick={() => void load()}
            className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw aria-hidden="true" size={16} /> Refresh
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3" aria-label={`${title} summary`}>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-slate-500">Loaded records</p>
          <p className="m-0 mt-2 text-3xl font-black text-slate-950">{records.length}</p>
          <p className="m-0 mt-1 text-sm text-slate-600">From `{endpointLabel}`</p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-slate-500">Primary status</p>
          <p className="m-0 mt-2 text-3xl font-black text-slate-950">{firstStatus ? firstStatus[1] : "-"}</p>
          <p className="m-0 mt-1 text-sm text-slate-600">{firstStatus ? firstStatus[0] : "No status data"}</p>
        </article>
        <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-amber-800">Mutations</p>
          <p className="m-0 mt-2 text-3xl font-black text-amber-950">Disabled</p>
          <p className="m-0 mt-1 text-sm text-amber-900">{mutationStatus}</p>
        </article>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <div className="flex gap-3">
          <ShieldAlert aria-hidden="true" className="mt-1 shrink-0" size={18} />
          <p className="m-0">{sensitiveNotice}</p>
        </div>
      </section>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">{error}</div> : null}
      {loading ? <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">Loading {title.toLowerCase()}...</div> : null}

      {!loading && !error ? (
        <section className="rounded-lg border border-slate-200 bg-white shadow-sm" aria-label={`${title} records`}>
          <div className="border-b border-slate-200 p-4">
            <h2 className="m-0 text-xl font-black text-slate-950">Backend records</h2>
            <p className="m-0 mt-1 text-sm text-slate-600">Read-only integration for this block. Write actions require approved forms and audit/tenant controls.</p>
          </div>
          {records.length === 0 ? (
            <div className="p-4 text-sm font-bold text-slate-600">{emptyMessage}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[58rem] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    {columns.map((column) => (
                      <th key={column.key} className="border-b border-slate-200 px-4 py-3 font-black">{column.label}</th>
                    ))}
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={getRecordId(record)} className="border-b border-slate-100 last:border-b-0">
                      {columns.map((column) => {
                        const value = column.render(record);
                        const isStatus = column.key === "status";
                        return (
                          <td key={column.key} className="px-4 py-4 align-top text-slate-700">
                            {isStatus ? (
                              <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-black ${statusTone(value)}`}>{value || "-"}</span>
                            ) : (
                              value || "-"
                            )}
                          </td>
                        );
                      })}
                      <td className="px-4 py-4 align-top">
                        <div className="flex gap-2">
                          {['Create', 'Update', 'Delete'].map((action) => (
                            <button key={action} type="button" disabled className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-500">
                              {action}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ) : null}
    </div>
  );
}
