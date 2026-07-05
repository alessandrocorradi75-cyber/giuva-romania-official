import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Public API | GIUVA Admin",
  description: "Internal GIUVA public API readiness placeholder page."
};

export default function AdminPublicApiPage() {
  return <AdminSectionPage {...adminSections.publicApi} />;
}
