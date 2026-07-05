import type { Metadata } from "next";
import { AdminGdprClient } from "@/components/admin/AdminGdprClient";

export const metadata: Metadata = {
  title: "GDPR | GIUVA Admin",
  description: "Internal GIUVA GDPR API-backed administration page."
};

export default function AdminGdprPage() {
  return <AdminGdprClient />;
}
