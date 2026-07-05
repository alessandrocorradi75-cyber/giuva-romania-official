"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LockKeyhole } from "lucide-react";
import { getAdminApiBaseUrl } from "@/lib/adminApi";
import { useAdminAuth } from "@/components/admin/AdminAuthProvider";

export function AdminLoginForm() {
  const router = useRouter();
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await login(email, password);
      router.replace("/admin");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to sign in");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950" aria-label="GIUVA internal admin login">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md items-center">
        <div className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
            <LockKeyhole aria-hidden="true" size={24} />
          </div>
          <p className="m-0 mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-700">Internal admin only</p>
          <h1 className="m-0 mt-2 text-3xl font-black text-slate-950">GIUVA Admin Login</h1>
          <p className="m-0 mt-3 text-sm leading-6 text-slate-600">
            Use an existing internal backend account. Public registration, password reset and public data collection are not enabled.
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-extrabold text-slate-800">
              Email
              <input
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 rounded-md border border-slate-300 px-3 text-sm font-semibold outline-none focus:border-blue-700"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-slate-800">
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 rounded-md border border-slate-300 px-3 text-sm font-semibold outline-none focus:border-blue-700"
              />
            </label>

            {error ? (
              <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-800" role="alert">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="min-h-11 rounded-md bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="m-0 mt-5 text-xs leading-5 text-slate-500">
            API base: <span className="font-bold">{getAdminApiBaseUrl()}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
