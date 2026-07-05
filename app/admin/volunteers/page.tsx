import type { Metadata } from "next";
import { UserRoundCheck } from "lucide-react";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";

export const metadata: Metadata = {
  title: "Volunteers | GIUVA Admin",
  description: "Internal GIUVA volunteer administration placeholder page."
};

const summary = [
  { label: "Demo volunteers", value: "3", detail: "Static records for volunteer identity planning." },
  { label: "Participation mode", value: "Preview", detail: "No live project assignments are loaded." },
  { label: "Data source", value: "Mock", detail: "No personal data is collected or displayed." }
];

const columns = [
  { key: "name", label: "Volunteer" },
  { key: "code", label: "Volunteer code" },
  { key: "city", label: "City" },
  { key: "focus", label: "Focus area" },
  { key: "status", label: "Status" }
];

const rows = [
  { name: "Volunteer Alpha", code: "V-DEMO-001", city: "Bucharest", focus: "Community support", status: "Active" },
  { name: "Volunteer Beta", code: "V-DEMO-002", city: "Cluj", focus: "Training", status: "Review" },
  { name: "Volunteer Gamma", code: "V-DEMO-003", city: "Iasi", focus: "Projects", status: "Draft" }
];

export default function AdminVolunteersPage() {
  return (
    <AdminSectionPage
      title="Volunteers"
      eyebrow="Volunteer identity"
      description="Internal placeholder page for volunteer identity, membership context and future project participation workflows."
      icon={UserRoundCheck}
      summary={summary}
      columns={columns}
      rows={rows}
      emptyState="Volunteer data is demo-only. No onboarding form, personal data collection or backend mutation exists in this block."
    />
  );
}
