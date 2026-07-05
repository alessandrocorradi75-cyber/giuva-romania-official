import type { Metadata } from "next";
import { Users } from "lucide-react";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";

export const metadata: Metadata = {
  title: "Users | GIUVA Admin",
  description: "Internal GIUVA user administration placeholder page."
};

const summary = [
  { label: "Demo users", value: "4", detail: "Static identities for interface planning." },
  { label: "RBAC roles", value: "4", detail: "Public, volunteer, coordinator and admin." },
  { label: "Data source", value: "Mock", detail: "No real accounts are displayed or collected." }
];

const columns = [
  { key: "name", label: "User" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "organization", label: "Organization" },
  { key: "status", label: "Status" }
];

const rows = [
  { name: "Admin Preview", email: "admin.preview@example.local", role: "Admin", organization: "GIUVA Europe", status: "Active" },
  { name: "Coordinator Preview", email: "coordinator.preview@example.local", role: "Coordinator", organization: "GIUVA Romania", status: "Review" },
  { name: "Volunteer Preview", email: "volunteer.preview@example.local", role: "Volunteer", organization: "Bucharest Community", status: "Draft" }
];

export default function AdminUsersPage() {
  return (
    <AdminSectionPage
      title="Users"
      eyebrow="Identity and RBAC"
      description="Internal placeholder page for user identity, role assignment and account status review."
      icon={Users}
      summary={summary}
      columns={columns}
      rows={rows}
      emptyState="User management is static in this block. No registration, login frontend, password reset or real account workflow is implemented."
    />
  );
}
