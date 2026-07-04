# R3 Foundation Block E+F - Events, Training, Certifications, Partners, Sponsors, Donations and Membership

## Scope

This implementation covers:

- R3-019 Events Foundation
- R3-020 Training Foundation
- R3-021 Certifications Foundation
- R3-022 Partner Management Foundation
- R3-023 Sponsor Management Foundation
- R3-024 Donations Foundation
- R3-025 Membership Foundation

No frontend UI, public page, public content, email workflow, payment processing, dependency change, or public backend exposure was added.

## Backward Compatibility

The repository already contained legacy prototype tables for `events`, `trainings`, `partners`, and `sponsors`. This block does not modify those tables. Enterprise foundations use distinct tables:

- `managed_events`
- `training_modules`
- `volunteer_certifications`
- `managed_partners`
- `managed_sponsors`
- `donation_records`
- `membership_records`

This preserves previous R3 behavior while adding production-oriented management modules.

## Events

Managed events may belong to an organization, program, or project.

Supported fields include title, description, event type, status, visibility, start/end date-time, country, city, location, max participants, organization owner, program relation, and project relation.

Protected route prefix:

- `/api/v1/events`

## Training

Training modules provide a reusable curriculum foundation.

Supported fields include title, description, category, level, status, duration, delivery mode, owner organization, and program relation.

Protected route prefix:

- `/api/v1/training-modules`

## Certifications

Volunteer certifications link volunteer identities to training modules and issuing organizations.

Supported fields include volunteer identity, training module, title, issue date, expiry date, status, and issuer organization.

Protected route prefix:

- `/api/v1/certifications`

## Partner Management

Managed partners support internal partner records without changing the existing legacy partner placeholder model.

Supported fields include name, type, country, city, website, contact email, status, visibility, and organization relation.

Protected route prefix:

- `/api/v1/partner-management`

## Sponsor Management

Managed sponsors support internal sponsor records without changing the existing Project Pulse sponsor table.

Supported fields include name, sponsor type, country, city, website, contact email, status, visibility, and organization relation.

Protected route prefix:

- `/api/v1/sponsor-management`

## Donations

Donation records are internal accounting placeholders only. No payment provider, payment capture, public donation form, transaction processing, or email sending was added.

Supported fields include optional donor name, optional donor email, amount, currency, status, purpose, organization relation, and optional project relation.

Protected route prefix:

- `/api/v1/donations`

## Membership

Membership records provide an internal organization membership foundation separate from authentication and from Block C organization memberships.

Supported fields include user, organization, membership type, status, start date, end date, and notes.

Protected route prefix:

- `/api/v1/membership-records`

The self-access endpoint allows authenticated users to read only their own membership records:

- `GET /api/v1/membership-records/me`

## RBAC Policy

The endpoints use the existing authentication and RBAC foundation:

- Coordinator or higher can read events, training, certifications, partners, and memberships.
- Admin can create, update, and delete events, training modules, certifications, partners, and memberships.
- Donations require Admin for read, create, update, and delete.
- Sponsor management requires Admin for read, create, update, and delete.
- Membership self-access requires an active authenticated user.

## Database Migration

A new Alembic migration was added:

- `backend/alembic/versions/20260704_0004_add_enterprise_foundation_ef.py`

It creates the seven enterprise tables and the supporting enums:

- `eventtype`
- `foundationstatus`
- `traininglevel`
- `deliverymode`
- `certificationstatus`
- `donationstatus`
- `membershiptype`

Existing `visibility` and `membershipstatus` enums are reused.

## Backend Layers Added

Models:

- `backend/app/models/enterprise_foundation.py`
- updated `backend/app/models/enums.py`
- updated `backend/app/models/__init__.py`

Schemas:

- `backend/app/schemas/enterprise_foundation.py`

Repositories:

- `backend/app/repositories/enterprise_foundation.py`

Services:

- `backend/app/services/enterprise_foundation.py`

Routes:

- `backend/app/api/routes/enterprise_foundation.py`
- updated `backend/app/api/router.py`

## Validation Notes

Validation performed for this block:

```bash
npm run lint
```

A backend Python syntax check was also run against the changed backend files.

Backend test scripts are not currently defined in `backend/pyproject.toml`, so no backend test command was available for this block.
