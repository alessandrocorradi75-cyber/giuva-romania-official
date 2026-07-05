"use client";

import { RefreshCw, ShieldAlert } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { fetchAdminOrganizations, type Organization } from "@/lib/adminApi";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

function statusTone(active: boolean) {
  return active ? "border-emerald-100 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-100 text-slate-700";
}

export function AdminOrganizationsClient() {
  const { token } = useAdminAuth();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrganizations = useCallback(async () => {
    if (!token) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      setOrganizations(await fetchAdminOrganizations(token));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to load organizations");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void loadOrganizations();
  }, [loadOrganizations]);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Internal organizations</p>
            <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">Organizations</h1>
            <p className="m-0 mt-3 text-sm leading-6 text-slate-600">
              Real backend-backed organization list for authenticated internal users. Create, update and delete remain disabled because the current backend exposes read endpoints only.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadOrganizations()}
            className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw aria-hidden="true" size={16} /> Refresh
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3" aria-label="Organization summary">
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-slate-500">Loaded records</p>
          <p className="m-0 mt-2 text-3xl font-black text-slate-950">{organizations.length}</p>
          <p className="m-0 mt-1 text-sm text-slate-600">From `/api/v1/organizations`</p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-slate-500">Active</p>
          <p className="m-0 mt-2 text-3xl font-black text-slate-950">{organizations.filter((item) => item.is_active).length}</p>
          <p className="m-0 mt-1 text-sm text-slate-600">Backend status flag</p>
        </article>
        <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-sm">
          <p className="m-0 text-sm font-bold text-amber-800">Write operations</p>
          <p className="m-0 mt-2 text-3xl font-black text-amber-950">Disabled</p>
          <p className="m-0 mt-1 text-sm text-amber-900">No backend create/update/delete endpoints yet</p>
        </article>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        <div className="flex gap-3">
          <ShieldAlert aria-hidden="true" className="mt-1 shrink-0" size={18} />
          <p className="m-0">
            Internal-only integration. This page does not expose public data and does not collect new organization records.
          </p>
        </div>
      </section>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">{error}</div> : null}
      {loading ? <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">Loading organizations...</div> : null}

      {!loading && !error ? (
        <section className="rounded-lg border border-slate-200 bg-white shadow-sm" aria-label="Organization records">
          <div className="border-b border-slate-200 p-4">
            <h2 className="m-0 text-xl font-black text-slate-950">Backend records</h2>
            <p className="m-0 mt-1 text-sm text-slate-600">Read-only until backend write routes are approved.</p>
          </div>
          {organizations.length === 0 ? (
            <div className="p-4 text-sm font-bold text-slate-600">No organizations returned by the backend.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[58rem] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Name</th>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Type</th>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Code</th>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Location</th>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Status</th>
                    <th className="border-b border-slate-200 px-4 py-3 font-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {organizations.map((organization) => (
                    <tr key={organization.id} className="border-b border-slate-100 last:border-b-0">
                      <td className="px-4 py-4 font-bold text-slate-900">{organization.name}</td>
                      <td className="px-4 py-4 text-slate-700">{organization.type}</td>
                      <td className="px-4 py-4 text-slate-700">{organization.code}</td>
                      <td className="px-4 py-4 text-slate-700">{[organization.city, organization.region, organization.country_code].filter(Boolean).join(", ") || "-"}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-black ${statusTone(organization.is_active)}`}>
                          {organization.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
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
