"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  createAdminProgram,
  deleteAdminProgram,
  fetchAdminPrograms,
  updateAdminProgram,
  type ProgramMutationPayload,
  type ProgramRecord
} from "@/lib/adminApi";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

const initialForm: ProgramMutationPayload = {
  code: "",
  name: "",
  description: "",
  status: "draft",
  visibility: "private",
  country_availability: []
};

function toForm(record: ProgramRecord): ProgramMutationPayload {
  return {
    code: record.code,
    name: record.name,
    description: record.description ?? "",
    status: record.status,
    visibility: record.visibility,
    country_availability: record.country_availability
  };
}

export function AdminProgramsClient() {
  const { token, user } = useAdminAuth();
  const [records, setRecords] = useState<ProgramRecord[]>([]);
  const [form, setForm] = useState<ProgramMutationPayload>(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      setRecords(await fetchAdminPrograms(token));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to load programs");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  function resetForm() {
    setEditingId(null);
    setForm(initialForm);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const payload = { ...form, description: form.description || null };
      if (editingId) {
        await updateAdminProgram(token, editingId, payload);
        setSuccess("Program updated.");
      } else {
        await createAdminProgram(token, payload);
        setSuccess("Program created.");
      }
      resetForm();
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save program");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(record: ProgramRecord) {
    if (!token) return;
    const confirmed = window.confirm(`Delete program ${record.name}? This internal action cannot be undone.`);
    if (!confirmed) return;
    setError(null);
    setSuccess(null);
    try {
      await deleteAdminProgram(token, record.id);
      setSuccess("Program deleted.");
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to delete program");
    }
  }

  const canMutate = user?.role === "admin";

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Programs CRUD</p>
        <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">Programs</h1>
        <p className="m-0 mt-3 text-sm leading-6 text-slate-600">Internal API-backed program create, update and delete using existing admin-only backend endpoints.</p>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">Code<input required value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Status<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="draft">draft</option><option value="active">active</option><option value="paused">paused</option><option value="archived">archived</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Visibility<select value={form.visibility} onChange={(e) => setForm({ ...form, visibility: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="private">private</option><option value="public">public</option><option value="featured">featured</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 lg:col-span-2">Countries<input value={form.country_availability.join(", ")} onChange={(e) => setForm({ ...form, country_availability: e.target.value.split(",").map((item) => item.trim()).filter(Boolean) })} placeholder="RO, IT, ES" className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 lg:col-span-2">Description<textarea value={form.description ?? ""} onChange={(e) => setForm({ ...form, description: e.target.value })} className="min-h-24 rounded-md border border-slate-300 px-3 py-2" /></label>
        <div className="flex flex-wrap gap-2 lg:col-span-2">
          <button disabled={!canMutate || saving} type="submit" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:bg-slate-400">{saving ? "Saving..." : editingId ? "Update program" : "Create program"}</button>
          <button type="button" onClick={resetForm} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-black text-slate-700">Clear</button>
          {!canMutate ? <span className="self-center text-sm font-bold text-amber-700">Admin role required for mutations.</span> : null}
        </div>
      </form>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">{error}</div> : null}
      {success ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800" role="status">{success}</div> : null}
      {loading ? <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">Loading programs...</div> : null}

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[54rem] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500"><tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Code</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Visibility</th><th className="px-4 py-3">Actions</th></tr></thead><tbody>{records.map((record) => (<tr key={record.id} className="border-t border-slate-100"><td className="px-4 py-3 font-bold">{record.name}</td><td className="px-4 py-3">{record.code}</td><td className="px-4 py-3">{record.status}</td><td className="px-4 py-3">{record.visibility}</td><td className="px-4 py-3"><div className="flex gap-2"><button type="button" onClick={() => { setEditingId(record.id); setForm(toForm(record)); }} className="rounded-md border border-slate-300 px-2 py-1 text-xs font-black">Edit</button><button type="button" disabled={!canMutate} onClick={() => void handleDelete(record)} className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-black text-red-800 disabled:text-slate-400">Delete</button></div></td></tr>))}</tbody></table>
        </div>
        {!loading && records.length === 0 ? <p className="m-0 p-4 text-sm font-bold text-slate-600">No programs returned by backend.</p> : null}
      </section>
    </div>
  );
}
