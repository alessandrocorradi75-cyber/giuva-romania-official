import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Organizations | GIUVA Admin",
  description: "Internal GIUVA organizations administration placeholder page."
};

export default function AdminOrganizationsPage() {
  return <AdminSectionPage {...adminSections.organizations} />;
}
