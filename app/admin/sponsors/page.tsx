import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Sponsors | GIUVA Admin",
  description: "Internal GIUVA sponsors administration placeholder page."
};

export default function AdminSponsorsPage() {
  return <AdminSectionPage {...adminSections.sponsors} />;
}
