# R3 Foundation Block C - Users, Organizations and Tenancy

## Scope

This implementation covers:

- R3-011 User Management Foundation
- R3-012 Organization / Tenant Foundation
- R3-013 Country / Region / City Structure
- R3-014 Membership and Volunteer Identity Foundation

No frontend UI, public page, public registration flow, email workflow, dependency change, or real user data collection was added.

## Organization and Tenant Structure

The backend now includes a hierarchical organization model that can represent the full GIUVA enterprise structure:

- GIUVA Europe
- national organizations such as GIUVA Romania, GIUVA Italia, and GIUVA Espana
- regional organizations
- city organizations
- local communities

The hierarchy is implemented through `Organization.parent_id`, allowing Europe, country, region, city, and community nodes to be linked without hardcoding one country into the platform.

## User Management Foundation

The existing `User` model remains the authentication identity source of truth. New protected internal user endpoints provide a management foundation without adding public registration or data collection:

- `GET /api/v1/users/` requires `ADMIN`
- `GET /api/v1/users/{user_id}` requires `ADMIN`
- `GET /api/v1/users/me/memberships` requires an active authenticated user
- `GET /api/v1/users/me/volunteer-identity` requires an active authenticated user

## Membership and Volunteer Identity

Two new foundation models support enterprise identity:

- `OrganizationMembership` links a user to an organization with role, status, title, and primary membership flag.
- `VolunteerIdentity` links a user to a volunteer profile code and optional primary organization.

This separates platform authentication from volunteer identity and organization membership, which keeps future R3 work flexible for staff, partners, coordinators, volunteers, and country-level governance.

## RBAC Protection

The new internal endpoints preserve the existing R3 Block B authentication and RBAC behavior:

- organization read endpoints require at least `COORDINATOR`;
- user management endpoints require `ADMIN`;
- self-service membership and volunteer identity endpoints require an active authenticated user.

No public endpoint was added for organization creation, user registration, or volunteer onboarding.

## Database Migration

A new Alembic migration was added:

- `backend/alembic/versions/20260704_0002_add_organizations_memberships.py`

It creates:

- `organizations`
- `organization_memberships`
- `volunteer_identities`
- `organizationtype` enum
- `membershipstatus` enum

Existing `userrole` and `volunteerstatus` enum types are reused.

## Backend Layers Added

Models:

- `backend/app/models/organization.py`
- updated `backend/app/models/enums.py`
- updated `backend/app/models/__init__.py`

Schemas:

- `backend/app/schemas/organization.py`
- `backend/app/schemas/users.py`

Repositories:

- `backend/app/repositories/organizations.py`
- updated `backend/app/repositories/users.py`

Services:

- `backend/app/services/organizations.py`
- `backend/app/services/users.py`

Routes:

- `backend/app/api/routes/organizations.py`
- `backend/app/api/routes/users.py`
- updated `backend/app/api/router.py`

## Validation Notes

Validation performed for this block:

```bash
npm run lint
```

A backend Python syntax check was also run against the changed backend files.

Backend test scripts are not currently defined in `backend/pyproject.toml`, so no backend test command was available for this block.
