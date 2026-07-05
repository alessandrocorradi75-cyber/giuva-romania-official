import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Communications | GIUVA Admin",
  description: "Internal GIUVA communications administration placeholder page."
};

export default function AdminCommunicationsPage() {
  return <AdminSectionPage {...adminSections.communications} />;
}
