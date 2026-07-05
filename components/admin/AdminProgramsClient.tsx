"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchAdminPrograms, type ProgramRecord } from "@/lib/adminApi";

export function AdminProgramsClient() {
  return (
    <AdminResourceTable<ProgramRecord>
      title="Programs"
      eyebrow="Programs integration"
      description="Real backend-backed program list for authenticated internal users. Mutations are disabled until approved forms and audit controls are added."
      endpointLabel="/api/v1/programs"
      sensitiveNotice="Internal-only program management. This page does not publish public program content."
      emptyMessage="No programs returned by the backend."
      mutationStatus="Backend supports CRUD; UI forms are intentionally not enabled in this block"
      loadRecords={fetchAdminPrograms}
      getRecordId={(record) => record.id}
      getRecordStatus={(record) => record.status}
      columns={[
        { key: "name", label: "Name", render: (record) => record.name },
        { key: "code", label: "Code", render: (record) => record.code },
        { key: "visibility", label: "Visibility", render: (record) => record.visibility },
        { key: "status", label: "Status", render: (record) => record.status }
      ]}
    />
  );
}
