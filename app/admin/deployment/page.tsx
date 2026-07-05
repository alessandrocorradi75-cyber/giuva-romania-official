import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Deployment | GIUVA Admin",
  description: "Internal GIUVA deployment readiness placeholder page."
};

export default function AdminDeploymentPage() {
  return <AdminSectionPage {...adminSections.deployment} />;
}
