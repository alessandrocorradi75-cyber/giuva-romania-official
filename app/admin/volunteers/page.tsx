import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Volunteers | GIUVA Admin",
  description: "Internal GIUVA volunteers administration placeholder page."
};

export default function AdminVolunteersPage() {
  return <AdminSectionPage {...adminSections.volunteers} />;
}
