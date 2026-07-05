import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Training | GIUVA Admin",
  description: "Internal GIUVA training administration placeholder page."
};

export default function AdminTrainingPage() {
  return <AdminSectionPage {...adminSections.training} />;
}
