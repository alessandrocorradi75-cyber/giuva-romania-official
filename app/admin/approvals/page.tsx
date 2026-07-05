import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Approvals | GIUVA Admin",
  description: "Internal GIUVA approvals administration placeholder page."
};

export default function AdminApprovalsPage() {
  return <AdminSectionPage {...adminSections.approvals} />;
}
