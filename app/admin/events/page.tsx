import type { Metadata } from "next";
import { AdminEventsClient } from "@/components/admin/AdminEventsClient";

export const metadata: Metadata = {
  title: "Events | GIUVA Admin",
  description: "Internal GIUVA events API-backed administration page."
};

export default function AdminEventsPage() {
  return <AdminEventsClient />;
}
