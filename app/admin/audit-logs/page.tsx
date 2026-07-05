import type { Metadata } from "next";
import { AdminAuditLogsClient } from "@/components/admin/AdminAuditLogsClient";

export const metadata: Metadata = {
  title: "Audit Logs | GIUVA Admin",
  description: "Internal GIUVA audit log API-backed administration page."
};

export default function AdminAuditLogsPage() {
  return <AdminAuditLogsClient />;
}
