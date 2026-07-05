"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchAdminGdprRequests, type GdprRequestRecord } from "@/lib/adminApi";

export function AdminGdprClient() {
  return (
    <AdminResourceTable<GdprRequestRecord>
      title="GDPR"
      eyebrow="GDPR integration"
      description="Real backend-backed GDPR request list for authenticated admins. Mutations are disabled to avoid collecting or changing personal data from the admin UI in this block."
      endpointLabel="/api/v1/gdpr-requests"
      sensitiveNotice="Admin-only privacy view. GDPR records can contain personal data and must remain internal."
      emptyMessage="No GDPR requests returned by the backend."
      mutationStatus="Disabled to avoid personal-data collection until privacy workflow approval"
      loadRecords={fetchAdminGdprRequests}
      getRecordId={(record) => record.id}
      getRecordStatus={(record) => record.status}
      columns={[
        { key: "type", label: "Type", render: (record) => record.request_type },
        { key: "email", label: "Data subject", render: (record) => record.data_subject_email },
        { key: "requested", label: "Requested", render: (record) => record.requested_at },
        { key: "status", label: "Status", render: (record) => record.status }
      ]}
    />
  );
}
