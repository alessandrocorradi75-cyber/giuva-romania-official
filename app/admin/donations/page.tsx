import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Donations | GIUVA Admin",
  description: "Internal GIUVA donations administration placeholder page."
};

export default function AdminDonationsPage() {
  return <AdminSectionPage {...adminSections.donations} />;
}
