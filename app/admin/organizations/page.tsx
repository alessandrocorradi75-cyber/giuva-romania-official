import type { Metadata } from "next";
import { AdminOrganizationsClient } from "@/components/admin/AdminOrganizationsClient";

export const metadata: Metadata = {
  title: "Organizations | GIUVA Admin",
  description: "Internal GIUVA organizations administration page backed by the internal API."
};

export default function AdminOrganizationsPage() {
  return <AdminOrganizationsClient />;
}
