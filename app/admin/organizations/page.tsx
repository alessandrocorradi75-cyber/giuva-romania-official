import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";

export const metadata: Metadata = {
  title: "Organizations | GIUVA Admin",
  description: "Internal GIUVA organization administration placeholder page."
};

const summary = [
  { label: "Demo organizations", value: "5", detail: "Europe, country, region, city and community levels." },
  { label: "Hierarchy depth", value: "5", detail: "Matches the R3 organization model." },
  { label: "Data source", value: "Mock", detail: "No live organization records are queried." }
];

const columns = [
  { key: "name", label: "Organization" },
  { key: "type", label: "Type" },
  { key: "country", label: "Country" },
  { key: "owner", label: "Owner" },
  { key: "status", label: "Status" }
];

const rows = [
  { name: "GIUVA Europe", type: "Europe", country: "EU", owner: "Enterprise governance", status: "Ready" },
  { name: "GIUVA Romania", type: "Country", country: "RO", owner: "National coordination", status: "Active" },
  { name: "Bucharest Community", type: "City", country: "RO", owner: "Local coordination", status: "Draft" }
];

export default function AdminOrganizationsPage() {
  return (
    <AdminSectionPage
      title="Organizations"
      eyebrow="Tenant structure"
      description="Internal placeholder page for GIUVA Europe, national organizations, regions, cities and local communities."
      icon={Building2}
      summary={summary}
      columns={columns}
      rows={rows}
      emptyState="Organization management is not connected to live backend data yet. Future R4 tasks will add protected API integration and role-aware editing."
    />
  );
}
