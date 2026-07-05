import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Audit Logs | GIUVA Admin",
  description: "Internal GIUVA audit logs administration placeholder page."
};

export default function AdminAuditLogsPage() {
  return <AdminSectionPage {...adminSections.auditLogs} />;
}
