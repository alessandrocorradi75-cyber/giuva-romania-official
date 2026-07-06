# Functional Integration Block C - Safe Admin Mutations

## Summary

Functional Integration Block C adds safe internal mutation flows only for admin modules where the existing backend already exposes supported endpoints. The implementation keeps the public website unchanged, does not add public registration, does not collect public user data, and does not expose the backend publicly.

The admin application now supports API-backed create, update and delete flows for Programs, Projects and Events. Each enabled mutation path includes admin-role gating in the UI, loading states, error states, success states and delete confirmation prompts.

## Mutation Matrix

| Module | Backend Support Found | Admin UI Mutation Status | Decision |
| --- | --- | --- | --- |
| Organizations | Read and hierarchy endpoints only | Disabled | Kept read-only because create/update/delete endpoints are not exposed by the backend contract. |
| Users | Read and current-user endpoints only | Disabled | Kept read-only because safe admin user mutation endpoints are not exposed. |
| Volunteers | Schema/current identity foundation only | Disabled | Kept read-only because full volunteer CRUD/list mutation support is not present. |
| Programs | List, create, update, delete | Enabled | Safe internal CRUD enabled for admin users. |
| Projects | List, create, update, delete | Enabled | Safe internal CRUD enabled for admin users; project creation requires an existing program reference. |
| Events | List, create, update, delete | Enabled | Safe internal CRUD enabled for admin users. |
| Audit Logs | Backend operational records exist | Disabled | Mutation remains disabled by policy; audit records must not be editable from the admin UI. |
| GDPR Requests | Backend operational records exist | Disabled | Kept read-only for this block to avoid premature personal-data workflow mutation before explicit approval. |

## Implementation Notes

- Added admin API helper methods for supported Program, Project and Event mutations.
- Replaced read-only Program, Project and Event admin views with internal CRUD forms and API-backed tables.
- Added delete confirmation prompts before destructive internal actions.
- Added loading, error and success states for mutation flows.
- Kept role gating at the frontend layer using the current admin identity while preserving backend RBAC as the authoritative enforcement layer.
- Kept Organizations, Users, Volunteers, Audit Logs and GDPR mutation controls disabled because the requested safety criteria are not fully satisfied.

## Security Boundaries

- No public-facing route or content was changed.
- No public registration was introduced.
- No email, payment or external integration was added.
- No mutation UI was enabled where the backend contract was missing or operationally unsafe.
- Audit log mutation remains blocked.
- GDPR remains read-only until a dedicated, approved GDPR workflow is implemented.

## Validation Plan

Required validation for this block:

- `npm run lint`
- `npm run build`

## Remaining Work

- Add backend-supported organization mutation endpoints only after an explicit tenancy governance design is approved.
- Add safe user administration only after account lifecycle rules are finalized.
- Add volunteer mutation only after consent, membership and identity workflows are approved.
- Add GDPR status handling only as a dedicated workflow with audit logging and privacy review.
