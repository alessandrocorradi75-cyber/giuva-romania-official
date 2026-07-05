"use client";

import { AdminResourceTable } from "@/components/admin/AdminResourceTable";
import { fetchAdminEvents, type ManagedEventRecord } from "@/lib/adminApi";

export function AdminEventsClient() {
  return (
    <AdminResourceTable<ManagedEventRecord>
      title="Events"
      eyebrow="Events integration"
      description="Real backend-backed event list for authenticated internal users. Mutations are disabled until scheduling forms and audit controls are approved."
      endpointLabel="/api/v1/events"
      sensitiveNotice="Internal-only event management. No public event registration or attendee data collection is enabled."
      emptyMessage="No events returned by the backend."
      mutationStatus="Backend supports CRUD; UI scheduling forms are intentionally not enabled in this block"
      loadRecords={fetchAdminEvents}
      getRecordId={(record) => record.id}
      getRecordStatus={(record) => record.status}
      columns={[
        { key: "title", label: "Title", render: (record) => record.title },
        { key: "type", label: "Type", render: (record) => record.event_type },
        { key: "starts", label: "Starts", render: (record) => record.starts_at },
        { key: "status", label: "Status", render: (record) => record.status }
      ]}
    />
  );
}
