"use client";

import { useState } from "react";
import { MailCheck } from "lucide-react";

export function NewsletterBox() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="card grid gap-4 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
      aria-labelledby="newsletter-title"
    >
      <MailCheck className="text-[#16825d]" size={28} aria-hidden="true" />
      <h2 id="newsletter-title" className="text-2xl font-black text-[#081f3a]">Newsletter GIUVA</h2>
      <p className="leading-7 text-slate-600">Primește actualizări despre voluntariat, academy, Project Pulse și rețeaua europeană. Double opt-in pregătit pentru integrare viitoare.</p>
      <label>
        <span className="field-label">Email</span>
        <input className="field" name="email" type="email" required placeholder="nume@email.ro" />
      </label>
      <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
        <input className="mt-1 h-4 w-4" type="checkbox" required />
        Accept politica de confidențialitate și confirm că voi valida abonarea prin double opt-in când integrarea va fi activă.
      </label>
      <button type="submit" className="btn btn-primary justify-self-start">Abonează-te</button>
      {sent ? <p className="rounded-md bg-emerald-50 p-4 font-bold text-emerald-800" aria-live="polite">Abonarea a fost validată local pentru demonstrația Release 1.0.</p> : null}
    </form>
  );
}
