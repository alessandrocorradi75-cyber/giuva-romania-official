import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Memberships | GIUVA Admin",
  description: "Internal GIUVA memberships administration placeholder page."
};

export default function AdminMembershipsPage() {
  return <AdminSectionPage {...adminSections.memberships} />;
}
