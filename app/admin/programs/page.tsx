import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Programs | GIUVA Admin",
  description: "Internal GIUVA programs administration placeholder page."
};

export default function AdminProgramsPage() {
  return <AdminSectionPage {...adminSections.programs} />;
}
