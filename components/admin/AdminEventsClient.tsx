"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  createAdminEvent,
  deleteAdminEvent,
  fetchAdminEvents,
  updateAdminEvent,
  type EventMutationPayload,
  type ManagedEventRecord
} from "@/lib/adminApi";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

const initialForm = {
  title: "",
  description: "",
  event_type: "community",
  status: "planned",
  visibility: "private",
  starts_at: "",
  ends_at: "",
  country_code: "",
  city: "",
  location: "",
  max_participants: ""
};

type EventForm = typeof initialForm;

function toDateTimeLocal(value: string | null) {
  if (!value) return "";
  return value.slice(0, 16);
}

function toForm(record: ManagedEventRecord): EventForm {
  return {
    title: record.title,
    description: record.description ?? "",
    event_type: record.event_type,
    status: record.status,
    visibility: record.visibility,
    starts_at: toDateTimeLocal(record.starts_at),
    ends_at: toDateTimeLocal(record.ends_at),
    country_code: record.country_code ?? "",
    city: record.city ?? "",
    location: record.location ?? "",
    max_participants: record.max_participants ? String(record.max_participants) : ""
  };
}

function toPayload(form: EventForm): EventMutationPayload {
  return {
    title: form.title,
    description: form.description || null,
    event_type: form.event_type,
    status: form.status,
    visibility: form.visibility,
    starts_at: new Date(form.starts_at).toISOString(),
    ends_at: form.ends_at ? new Date(form.ends_at).toISOString() : null,
    country_code: form.country_code || null,
    city: form.city || null,
    location: form.location || null,
    max_participants: form.max_participants ? Number(form.max_participants) : null
  };
}

export function AdminEventsClient() {
  const { token, user } = useAdminAuth();
  const [records, setRecords] = useState<ManagedEventRecord[]>([]);
  const [form, setForm] = useState<EventForm>(initialForm);
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
      setRecords(await fetchAdminEvents(token));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to load events");
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
      const payload = toPayload(form);
      if (editingId) {
        await updateAdminEvent(token, editingId, payload);
        setSuccess("Event updated.");
      } else {
        await createAdminEvent(token, payload);
        setSuccess("Event created.");
      }
      resetForm();
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save event");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(record: ManagedEventRecord) {
    if (!token) return;
    if (!window.confirm(`Delete event ${record.title}? This internal action cannot be undone.`)) return;
    setError(null);
    setSuccess(null);
    try {
      await deleteAdminEvent(token, record.id);
      setSuccess("Event deleted.");
      await load();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to delete event");
    }
  }

  const canMutate = user?.role === "admin";

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Events CRUD</p>
        <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">Events</h1>
        <p className="m-0 mt-3 text-sm leading-6 text-slate-600">Internal API-backed event create, update and delete. No public registration or attendee data collection is enabled.</p>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">Title<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Type<select value={form.event_type} onChange={(e) => setForm({ ...form, event_type: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="community">community</option><option value="training">training</option><option value="volunteering">volunteering</option><option value="partner">partner</option><option value="fundraising">fundraising</option><option value="governance">governance</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Status<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="draft">draft</option><option value="planned">planned</option><option value="active">active</option><option value="completed">completed</option><option value="cancelled">cancelled</option><option value="archived">archived</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Visibility<select value={form.visibility} onChange={(e) => setForm({ ...form, visibility: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3"><option value="private">private</option><option value="public">public</option><option value="featured">featured</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Starts<input required type="datetime-local" value={form.starts_at} onChange={(e) => setForm({ ...form, starts_at: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Ends<input type="datetime-local" value={form.ends_at} onChange={(e) => setForm({ ...form, ends_at: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Country<input value={form.country_code} onChange={(e) => setForm({ ...form, country_code: e.target.value.toUpperCase().slice(0, 2) })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">City<input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Location<input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Max participants<input type="number" min="1" value={form.max_participants} onChange={(e) => setForm({ ...form, max_participants: e.target.value })} className="h-10 rounded-md border border-slate-300 px-3" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 lg:col-span-2">Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="min-h-24 rounded-md border border-slate-300 px-3 py-2" /></label>
        <div className="flex flex-wrap gap-2 lg:col-span-2"><button disabled={!canMutate || saving} type="submit" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:bg-slate-400">{saving ? "Saving..." : editingId ? "Update event" : "Create event"}</button><button type="button" onClick={resetForm} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-black text-slate-700">Clear</button>{!canMutate ? <span className="self-center text-sm font-bold text-amber-700">Admin role required for mutations.</span> : null}</div>
      </form>

      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">{error}</div> : null}
      {success ? <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800" role="status">{success}</div> : null}
      {loading ? <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600">Loading events...</div> : null}

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[60rem] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500"><tr><th className="px-4 py-3">Title</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Starts</th><th className="px-4 py-3">Actions</th></tr></thead><tbody>{records.map((record) => (<tr key={record.id} className="border-t border-slate-100"><td className="px-4 py-3 font-bold">{record.title}</td><td className="px-4 py-3">{record.event_type}</td><td className="px-4 py-3">{record.status}</td><td className="px-4 py-3">{record.starts_at}</td><td className="px-4 py-3"><div className="flex gap-2"><button type="button" onClick={() => { setEditingId(record.id); setForm(toForm(record)); }} className="rounded-md border border-slate-300 px-2 py-1 text-xs font-black">Edit</button><button type="button" disabled={!canMutate} onClick={() => void handleDelete(record)} className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-black text-red-800 disabled:text-slate-400">Delete</button></div></td></tr>))}</tbody></table></div>{!loading && records.length === 0 ? <p className="m-0 p-4 text-sm font-bold text-slate-600">No events returned by backend.</p> : null}</section>
    </div>
  );
}
