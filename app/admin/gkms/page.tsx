import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "GKMS | GIUVA Admin",
  description: "Internal GIUVA gkms management placeholder page."
};

export default function AdminGkmsPage() {
  return <AdminSectionPage {...adminSections.gkms} />;
}
