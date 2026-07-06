"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  createAdminProject,
  deleteAdminProject,
  fetchAdminPrograms,
  fetchAdminProjects,
  updateAdminProject,
  type ProgramRecord,
  type ProjectMutationPayload,
  type ProjectRecord
} from "@/lib/adminApi";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

const initialForm: ProjectMutationPayload = {
  program_id: "",
  code: "",
  title: "",
  description: "",
  status: "draft",
  visibility: "private",
  country_code: "",
  city: ""
};

function toForm(record: ProjectRecord): ProjectMutationPayload {
  return {
    program_id: record.program_id,
    code: record.code,
    title: record.title,
    description: record.description ?? "",
    status: record.status,
    visibility: record.visibility,
    country_code: record.country_code ?? "",
    city: record.city ?? ""
  };
}

export function AdminProjectsClient() {
  const { token, user } = useAdminAuth();
  const [records, setRecords] = useState<ProjectRecord[]>([]);
  const [programs, setPrograms] = useState<ProgramRecord[]>([]);
  const [form, setForm] = useState<ProjectMutationPayload>(initialForm);
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
      const [projectRecords, programRecords] = await Promise.all([fetchAdminProjects(token), fetchAdminPrograms(token)]);
      setRecords(projectRecords);
      setPrograms(programRecords);
      setForm((current) => current.program_id ? current : { ...current, program_id: programRecords[0]?.id ?? "" });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to load projects");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  function resetForm() {
    setEditingId(null);
    setForm({ ...initialForm, program_id: programs[0]?.id ?? "" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const payload = {
        ...form,
        description: form.description || null,
        country_code: form.country_code || null,
        city: form.city || null
      };
      if (editingId) {
        await updateAdminProject(token, editingId, payload);
        setSuccess("Project updated.");
      } else {
        await createAdminProject(token, payload);
        setSuccess("Project created.");
      }
      resetForm();
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save project");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(record: ProjectRecord) {
    if (!token) return;
    if (!window.confirm(`Delete project ${record.title}? This internal action cannot be undone.`)) return;
    setError(null);
    setSuccess(null);
    try {
      await deleteAdminProject(token, record.id);
      setSuccess("Project deleted.");
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to delete project");
    }
  }

  const canMutate = user?.role === "admin" && programs.length > 0;

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Projects CRUD</p>
        <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">Projects</h1>
        <p className="m-0 mt-3 text-sm leading-6 text-slate-600">Internal API-backed project create, update and delete. A backend program reference is required.</p>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">Program<select required value={form.program_id} onChange={(e) => setForm({ ...form, program_id: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3">{programs.map((program) => <option key={program.id} value={program.id}>{program.name}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Code<input required value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Title<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Status<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="draft">draft</option><option value="planned">planned</option><option value="active">active</option><option value="completed">completed</option><option value="cancelled">cancelled</option><option value="archived">archived</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Visibility<select value={form.visibility} onChange={(e) => setForm({ ...form, visibility: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="private">private</option><option value="public">public</option><option value="featured">featured</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Country<input value={form.country_code ?? ""} onChange={(e) => setForm({ ...form, country_code: e.target.value.toUpperCase().slice(0, 2) })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">City<input value={form.city ?? ""} onChange={(e) => setForm({ ...form, city: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 lg:col-span-2">Description<textarea value={form.description ?? ""} onChange={(e) => setForm({ ...form, description: e.target.value })} className="min-h-24 rounded-md border border-slate-300 px-3 py-2" /></label>
        <div className="flex flex-wrap gap-2 lg:col-span-2"><button disabled={!canMutate || saving} type="submit" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:bg-slate-400">{saving ? "Saving..." : editingId ? "Update project" : "Create project"}</button><button type="button" onClick={resetForm} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-black text-slate-700">Clear</button>{!canMutate ? <span className="self-center text-sm font-bold text-amber-700">Admin role and at least one program are required.</span> : null}</div>
      </form>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">{error}</div> : null}
      {success ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800" role="status">{success}</div> : null}
      {loading ? <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">Loading projects...</div> : null}

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[56rem] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500"><tr><th className="px-4 py-3">Title</th><th className="px-4 py-3">Code</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Location</th><th className="px-4 py-3">Actions</th></tr></thead><tbody>{records.map((record) => (<tr key={record.id} className="border-t border-slate-100"><td className="px-4 py-3 font-bold">{record.title}</td><td className="px-4 py-3">{record.code}</td><td className="px-4 py-3">{record.status}</td><td className="px-4 py-3">{[record.city, record.country_code].filter(Boolean).join(", ") || "-"}</td><td className="px-4 py-3"><div className="flex gap-2"><button type="button" onClick={() => { setEditingId(record.id); setForm(toForm(record)); }} className="rounded-md border border-slate-300 px-2 py-1 text-xs font-black">Edit</button><button type="button" disabled={user?.role !== "admin"} onClick={() => void handleDelete(record)} className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-black text-red-800 disabled:text-slate-400">Delete</button></div></td></tr>))}</tbody></table></div>{!loading && records.length === 0 ? <p className="m-0 p-4 text-sm font-bold text-slate-600">No projects returned by backend.</p> : null}</section>
    </div>
  );
}
