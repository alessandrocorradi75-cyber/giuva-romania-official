"use client";

import type { FormEvent, ReactNode } from "react";
import { useId, useState } from "react";
import { formReadiness } from "@/data/site";

type Field = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
};

export function MockForm({
  fields,
  children,
  submitLabel,
  successMessage,
  errorMessage = "Verifică datele introduse și acceptă consimțământul privacy înainte de trimitere."
}: {
  fields: Field[];
  children?: ReactNode;
  submitLabel: string;
  successMessage: string;
  errorMessage?: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const helpId = useId();
  const statusId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requiredTextIsValid = fields.every((field) => {
      if (!field.required) return true;
      const value = String(formData.get(field.name) ?? "").trim();
      return value.length >= 2;
    });

    if (!form.checkValidity() || !requiredTextIsValid) {
      setError(errorMessage);
      return;
    }

    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card grid gap-5 p-6 md:p-8" aria-describedby={`${helpId} ${statusId}`}>
      <div id={helpId} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
        Acest formular este pregătit pentru integrare viitoare. În această versiune publică, datele sunt validate local în browser și nu sunt trimise prin email sau salvate într-o bază de date reală.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name}>
            <span className="field-label">{field.label}{field.required ? <span aria-hidden="true"> *</span> : null}</span>
            <input className="field" name={field.name} type={field.type} required={field.required} minLength={field.required ? 2 : undefined} aria-required={field.required ? "true" : undefined} />
          </label>
        ))}
      </div>
      {children}
      <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
        <input name="privacy_consent" type="checkbox" required className="mt-1 h-4 w-4" />
        Accept prelucrarea datelor pentru analiza solicitării mele, conform politicii de confidențialitate GIUVA.
      </label>
      <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
        <input name="contact_consent" type="checkbox" required className="mt-1 h-4 w-4" />
        Autorizez secretariatul GIUVA să mă contacteze pentru acest mesaj după activarea fluxului oficial de comunicare.
      </label>
      <button type="submit" className="btn btn-primary justify-self-start">
        {submitLabel}
      </button>
      {error ? <p role="alert" className="rounded-md bg-red-50 p-4 font-bold text-red-800">{error}</p> : null}
      {sent ? <p role="status" className="rounded-md bg-emerald-50 p-4 font-bold text-emerald-800">{successMessage}</p> : null}
      <div id={statusId} className="rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <strong className="block text-slate-900">Stadiu formular</strong>
        <ul className="mt-2 grid gap-1">
          {formReadiness.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}
