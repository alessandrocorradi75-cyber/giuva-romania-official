import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "GIUVA Admin | Internal Platform",
  description: "Internal GIUVA Enterprise Platform administration shell."
};

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AdminShell>{children}</AdminShell>;
}
