import type { Metadata } from "next";
import { AdminUsersClient } from "@/components/admin/AdminUsersClient";

export const metadata: Metadata = {
  title: "Users | GIUVA Admin",
  description: "Internal GIUVA users administration page backed by the internal API."
};

export default function AdminUsersPage() {
  return <AdminUsersClient />;
}
