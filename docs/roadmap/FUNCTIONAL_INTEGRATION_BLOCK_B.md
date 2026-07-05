# Functional Integration Block B

## Summary

This block extends the internal admin integration layer to volunteers, programs, projects, events, audit logs and GDPR requests.

## Implemented

- Extended `lib/adminApi.ts` with typed helpers for:
  - volunteer portal schema
  - programs
  - projects
  - events
  - audit logs
  - GDPR requests
- Replaced static admin pages with real backend-backed internal views for:
  - `/admin/volunteers`
  - `/admin/programs`
  - `/admin/projects`
  - `/admin/events`
  - `/admin/audit-logs`
  - `/admin/gdpr`
- Added a reusable `AdminResourceTable` component for API-backed internal resource lists.
- Added loading, error and empty states.
- Added internal-only and sensitivity notices.
- Preserved login/session behavior from Functional Integration Block A.

## Backend Capability Boundary

Current backend support:

- Volunteers: schema/readiness endpoint only. No volunteer CRUD/list endpoint exists yet.
- Programs: backend supports list/create/read/update/delete.
- Projects: backend supports list/create/read/update/delete.
- Events: backend supports list/create/read/update/delete.
- Audit logs: backend supports list/create/read/update/delete, but UI is read-only by policy.
- GDPR requests: backend supports list/create/read/update/delete, but UI is read-only in this block to avoid personal-data collection or mutation.

## UI Mutation Policy

Create/update/delete controls are intentionally disabled in this block.

Reason:

- Program, project and event writes require reference-safe forms and approved audit behavior.
- Audit log writes should not be user-editable from a normal admin UI without a formal governance workflow.
- GDPR writes can involve personal data and require privacy workflow approval before enabling UI mutations.
- Volunteer CRUD is not available from the backend yet.

## Security Boundaries

- Public homepage was not modified.
- Public content was not modified.
- Backend was not exposed publicly.
- Public registration was not enabled.
- Public personal data collection was not enabled.
- Email sending was not implemented.
- Payments were not integrated.

## Remaining Work

- Add safe create/update forms for programs, projects and events after reference handling and audit logging are approved.
- Add real volunteer list/CRUD backend endpoints before replacing the schema readiness view.
- Add GDPR workflow forms only after privacy/legal approval.
- Add audit-log read filtering and export rules after governance approval.
- Add integration tests for protected frontend routes and API error handling.

## Validation Required

- `npm run lint`
- `npm run build`
