import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Projects | GIUVA Admin",
  description: "Internal GIUVA projects administration placeholder page."
};

export default function AdminProjectsPage() {
  return <AdminSectionPage {...adminSections.projects} />;
}
