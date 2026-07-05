import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Login | GIUVA Admin",
  description: "Internal GIUVA admin login."
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
