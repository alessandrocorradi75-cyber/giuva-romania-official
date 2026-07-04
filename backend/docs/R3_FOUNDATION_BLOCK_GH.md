# R3 Foundation Block G+H - Documents, Media, Communications, Notifications, Analytics, Reporting, Audit Log and GDPR

## Scope

This implementation covers:

- R3-026 Documents Foundation
- R3-027 Media Library Foundation
- R3-028 Communications Foundation
- R3-029 Notifications Foundation
- R3-030 Analytics Foundation
- R3-031 Reporting Foundation
- R3-032 Audit Log Foundation
- R3-033 GDPR Foundation

No frontend UI, public page, public content, real file upload, external storage, external analytics, email sending, notification sending, dependency change, or public backend exposure was added.

## Documents

Internal documents are represented by `InternalDocument` and support title, description, document type, status, visibility, organization, optional project, owner user, storage path placeholder, version, and standard metadata timestamps.

Protected route prefix:

- `/api/v1/documents`

## Media Library

Media assets are represented by `MediaAsset` and support title, description, media type, status, visibility, organization, owner user, storage path placeholder, alt text, and copyright/source notes.

Protected route prefix:

- `/api/v1/media-library`

## Communications

Communication campaigns are represented by `CommunicationCampaign` and support title, channel, audience, status, message body, organization, creator user, optional scheduled date, and optional sent date.

No email, SMS, or real delivery provider was integrated.

Protected route prefix:

- `/api/v1/communications`

## Notifications

Internal notifications are represented by `InternalNotification` and support recipient user, title, message, notification type, status, read timestamp, and optional organization relation.

No real notification delivery was added. Authenticated users may read their own notifications through:

- `GET /api/v1/notifications/me`

Protected route prefix:

- `/api/v1/notifications`

## Analytics

Analytics events are represented by `AnalyticsEvent` and support event name, event category, optional organization, optional user, JSON metadata, and event timestamp.

No external analytics provider was integrated.

Protected route prefix:

- `/api/v1/analytics-events`

## Reporting

Report records are represented by `ReportRecord` and support title, report type, status, organization, optional generating user, period start, period end, and storage path placeholder.

Protected route prefix:

- `/api/v1/reports`

## Audit Log

Audit logs are represented by `AuditLogEntry` and support optional actor user, optional organization, action, entity type, entity id, before JSON, after JSON, optional IP address, optional user agent, and timestamp.

Audit log read access is admin-only.

Protected route prefix:

- `/api/v1/audit-logs`

## GDPR

GDPR requests are represented by `GDPRRequestRecord` and support data subject email, request type, status, optional organization, requested date, optional completed date, notes, and optional handling user.

GDPR endpoints are admin-only and do not trigger automated data exports, deletion, emails, or external workflows.

Protected route prefix:

- `/api/v1/gdpr-requests`

## RBAC Policy

The endpoints use the existing authentication and RBAC foundation:

- Coordinator or higher can read operational records for documents, media, communications, notifications, analytics, and reports.
- Admin can create, update, and delete operational records.
- Audit log read and write endpoints require Admin.
- GDPR endpoints require Admin.
- Notification self-read requires only an active authenticated user and is scoped to the current user.

## Database Migration

A new Alembic migration was added:

- `backend/alembic/versions/20260704_0005_add_governance_foundation_gh.py`

It creates:

- `internal_documents`
- `media_assets`
- `communication_campaigns`
- `internal_notifications`
- `analytics_events`
- `report_records`
- `audit_log_entries`
- `gdpr_request_records`

It also creates supporting enums for document, media, communication, notification, analytics, report, and GDPR classifications. Existing `foundationstatus` and `visibility` enums are reused.

## Backend Layers Added

Models:

- `backend/app/models/governance_foundation.py`
- updated `backend/app/models/enums.py`
- updated `backend/app/models/__init__.py`

Schemas:

- `backend/app/schemas/governance_foundation.py`

Repositories:

- `backend/app/repositories/governance_foundation.py`

Services:

- `backend/app/services/governance_foundation.py`

Routes:

- `backend/app/api/routes/governance_foundation.py`
- updated `backend/app/api/router.py`

## Validation Notes

Validation performed for this block:

```bash
npm run lint
```

A backend Python syntax check was also run against the changed backend files.

Backend test scripts are not currently defined in `backend/pyproject.toml`, so no backend test command was available for this block.
