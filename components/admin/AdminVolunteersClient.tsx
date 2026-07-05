"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchVolunteerPortalSchema, type VolunteerPortalSchema } from "@/lib/adminApi";

export function AdminVolunteersClient() {
  return (
    <AdminResourceTable<VolunteerPortalSchema>
      title="Volunteers"
      eyebrow="Volunteer foundation"
      description="Backend volunteer portal schema readiness. Real volunteer list storage is not exposed by the current backend module."
      endpointLabel="/api/v1/volunteers/schema"
      sensitiveNotice="Internal-only readiness view. No public volunteer registration or personal data collection is enabled."
      emptyMessage="No volunteer schema returned by the backend."
      mutationStatus="No volunteer CRUD backend endpoints exist yet"
      loadRecords={async (token) => [await fetchVolunteerPortalSchema(token)]}
      getRecordId={(record) => record.module}
      getRecordStatus={(record) => record.status}
      columns={[
        { key: "module", label: "Module", render: (record) => record.module },
        { key: "status", label: "Status", render: (record) => record.status },
        { key: "features", label: "Features", render: (record) => record.features.join(", ") },
        { key: "tables", label: "Tables", render: (record) => record.tables.join(", ") }
      ]}
    />
  );
}
