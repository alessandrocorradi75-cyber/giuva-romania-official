import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Participation | GIUVA Admin",
  description: "Internal GIUVA participation administration placeholder page."
};

export default function AdminParticipationPage() {
  return <AdminSectionPage {...adminSections.participation} />;
}
