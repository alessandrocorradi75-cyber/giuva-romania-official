import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "GDPR | GIUVA Admin",
  description: "Internal GIUVA gdpr administration placeholder page."
};

export default function AdminGdprPage() {
  return <AdminSectionPage {...adminSections.gdpr} />;
}
