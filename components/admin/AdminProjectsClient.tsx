"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchAdminProjects, type ProjectRecord } from "@/lib/adminApi";

export function AdminProjectsClient() {
  return (
    <AdminResourceTable<ProjectRecord>
      title="Projects"
      eyebrow="Projects integration"
      description="Real backend-backed project list for authenticated internal users. Mutations are disabled until reference-safe forms are approved."
      endpointLabel="/api/v1/projects"
      sensitiveNotice="Internal-only project management. No public project submission or data collection is enabled."
      emptyMessage="No projects returned by the backend."
      mutationStatus="Backend supports CRUD; UI forms require approved program/organization reference handling"
      loadRecords={fetchAdminProjects}
      getRecordId={(record) => record.id}
      getRecordStatus={(record) => record.status}
      columns={[
        { key: "title", label: "Title", render: (record) => record.title },
        { key: "code", label: "Code", render: (record) => record.code },
        { key: "location", label: "Location", render: (record) => [record.city, record.country_code].filter(Boolean).join(", ") },
        { key: "status", label: "Status", render: (record) => record.status }
      ]}
    />
  );
}
