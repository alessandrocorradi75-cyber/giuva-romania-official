import type { Metadata } from "next";
import { AdminProjectsClient } from "@/components/admin/AdminProjectsClient";

export const metadata: Metadata = {
  title: "Projects | GIUVA Admin",
  description: "Internal GIUVA projects API-backed administration page."
};

export default function AdminProjectsPage() {
  return <AdminProjectsClient />;
}
