import type { Metadata } from "next";
import { AdminSectionPage } from "@/components/admin/AdminSectionPage";
import { adminSections } from "@/components/admin/adminPageData";

export const metadata: Metadata = {
  title: "Analytics | GIUVA Admin",
  description: "Internal GIUVA analytics administration placeholder page."
};

export default function AdminAnalyticsPage() {
  return <AdminSectionPage {...adminSections.analytics} />;
}
