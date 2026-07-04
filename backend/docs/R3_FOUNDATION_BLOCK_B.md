# R3 Foundation Block B - Authentication and RBAC

## Scope

This implementation covers:

- R3-007 Authentication Foundation
- R3-008 User Identity Model
- R3-009 RBAC Foundation
- R3-010 Protected API Dependencies

No frontend UI, public pages, registration form, password reset flow, email sending, public backend exposure, dependency changes, or real user data collection were added.

## Authentication Changes

The previous prototype login issued a JWT for any non-empty email and password. That behavior has been replaced.

`POST /api/v1/auth/login` now:

- looks up the user by email in the database;
- verifies the submitted password against the stored password hash using Passlib;
- rejects invalid credentials with `401 Unauthorized`;
- rejects inactive users with `403 Forbidden`;
- issues a JWT only for an existing active user.

The JWT subject is the database user id. The token also includes the user's current role.

## Identity Model

The existing `User` SQLAlchemy model remains the source of truth:

- `id`
- `email`
- `hashed_password`
- `role`
- `is_active`

No model migration was required for this block.

## Protected Dependencies

New reusable dependencies are defined in `backend/app/security/dependencies.py`:

- `get_current_user`
- `get_current_active_user`

`get_current_user` validates the bearer token, parses the user id and role from the JWT, loads the user from the database, and rejects tokens whose role no longer matches the database role.

`GET /api/v1/auth/me` was added as a protected identity endpoint for backend validation and future authenticated clients.

## RBAC Foundation

Role rules are defined in `backend/app/security/rbac.py` using the existing `UserRole` enum:

- `PUBLIC`: level 0
- `VOLUNTEER`: level 10
- `COORDINATOR`: level 20
- `ADMIN`: level 30

Reusable authorization factories:

- `require_roles(...)`
- `require_minimum_role(...)`

These dependencies return the current active user when authorization succeeds and raise `403 Forbidden` when permissions are insufficient.

## Repository and Service Layer

Authentication now uses explicit backend layers:

- `backend/app/repositories/users.py`
- `backend/app/services/auth.py`

The repository layer owns database lookup logic. The service layer owns credential verification and token creation.

## Validation Notes

Validation performed for this block:

```bash
npm run lint
```

A Python syntax check was also run against the changed backend files.

Backend test scripts are not currently defined in `backend/pyproject.toml`, so no backend test command was available for this block.
