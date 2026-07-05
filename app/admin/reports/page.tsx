import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Reports | GIUVA Admin",
  description: "Internal GIUVA reports administration placeholder page."
};

export default function AdminReportsPage() {
  return <AdminSectionPage {...adminSections.reports} />;
}
