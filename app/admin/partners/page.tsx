import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Partners | GIUVA Admin",
  description: "Internal GIUVA partners administration placeholder page."
};

export default function AdminPartnersPage() {
  return <AdminSectionPage {...adminSections.partners} />;
}
