import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "AI Assistant | GIUVA Admin",
  description: "Internal GIUVA ai assistant management placeholder page."
};

export default function AdminAiAssistantPage() {
  return <AdminSectionPage {...adminSections.aiAssistant} />;
}
