import type { Metadata } from "next";
import { AdminVolunteersClient } from "@/components/admin/AdminVolunteersClient";

export const metadata: Metadata = {
  title: "Volunteers | GIUVA Admin",
  description: "Internal GIUVA volunteers backend readiness page."
};

export default function AdminVolunteersPage() {
  return <AdminVolunteersClient />;
}
