import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Media Center | GIUVA Admin",
  description: "Internal GIUVA media center readiness placeholder page."
};

export default function AdminMediaCenterPage() {
  return <AdminSectionPage {...adminSections.mediaCenter} />;
}
