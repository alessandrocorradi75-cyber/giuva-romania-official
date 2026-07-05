import type { Metadata } from "next";
import { AdminProgramsClient } from "@/components/admin/AdminProgramsClient";

export const metadata: Metadata = {
  title: "Programs | GIUVA Admin",
  description: "Internal GIUVA programs API-backed administration page."
};

export default function AdminProgramsPage() {
  return <AdminProgramsClient />;
}
