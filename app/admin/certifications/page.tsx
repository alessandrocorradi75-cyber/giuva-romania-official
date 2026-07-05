import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Certifications | GIUVA Admin",
  description: "Internal GIUVA certifications administration placeholder page."
};

export default function AdminCertificationsPage() {
  return <AdminSectionPage {...adminSections.certifications} />;
}
