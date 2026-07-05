"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchAdminAuditLogs, type AuditLogRecord } from "@/lib/adminApi";

export function AdminAuditLogsClient() {
  return (
    <AdminResourceTable<AuditLogRecord>
      title="Audit Logs"
      eyebrow="Audit integration"
      description="Real backend-backed audit log list for authenticated admins. Audit mutations are disabled in the UI to preserve traceability."
      endpointLabel="/api/v1/audit-logs"
      sensitiveNotice="Admin-only governance view. Audit records can contain sensitive operational metadata and must not be exposed publicly."
      emptyMessage="No audit logs returned by the backend."
      mutationStatus="Read-only in UI by policy even though backend endpoints exist"
      loadRecords={fetchAdminAuditLogs}
      getRecordId={(record) => record.id}
      getRecordStatus={(record) => record.action}
      columns={[
        { key: "action", label: "Action", render: (record) => record.action },
        { key: "entity", label: "Entity", render: (record) => record.entity_type },
        { key: "entity_id", label: "Entity ID", render: (record) => record.entity_id ?? "" },
        { key: "occurred", label: "Occurred", render: (record) => record.occurred_at }
      ]}
    />
  );
}
