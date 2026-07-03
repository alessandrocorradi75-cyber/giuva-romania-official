# R3 Foundation Block A - Backend Foundation

## Scope

This implementation covers R3-003 through R3-006:

- R3-003 Backend Environment Hardening
- R3-004 Database Foundation
- R3-005 Backend Project Structure
- R3-006 Backend Configuration Baseline

No frontend UI, public page, public content, dependency, or runtime feature change is included.

## Configuration Baseline

Backend configuration is centralized in `backend/app/config/settings.py` and re-exported through `backend/app/core/config.py` for backward compatibility with existing imports.

Supported environments:

- `development`
- `testing`
- `production`

Selection is controlled by `ENVIRONMENT` or `APP_ENV`. The legacy value `local` is normalized to `development`.

Configuration is loaded from environment variables and the matching optional env file:

- `.env`
- `.env.development`
- `.env.testing`
- `.env.production`

Production settings require externally supplied secrets and database URLs. Placeholder JWT secrets and local CORS origins are rejected when `ENVIRONMENT=production`.

## Database Foundation

The SQLAlchemy foundation remains under `backend/app/db`:

- `base.py` defines the declarative base, timestamp mixin, and UUID primary key mixin.
- `session.py` creates the async engine and session factory from centralized settings.

Alembic is initialized and now contains a baseline migration for the existing platform models:

- `backend/alembic/versions/20260704_0001_initial_platform_schema.py`

The baseline captures the current model inventory without changing model behavior.

## Project Structure Baseline

The backend now exposes standard foundation packages for future R3 work:

- `backend/app/config`
- `backend/app/core`
- `backend/app/models`
- `backend/app/schemas`
- `backend/app/services`
- `backend/app/repositories`
- `backend/app/api`
- `backend/app/middleware`
- `backend/app/security`
- `backend/app/utils`

Empty packages are intentional placeholders for future implementation tasks and do not alter current application behavior.

## Secrets and Environment Policy

Secrets must be supplied through environment variables or private local env files that are not committed. Production must not rely on development defaults.

Required production variables include:

- `ENVIRONMENT=production`
- `DATABASE_URL`
- `JWT_SECRET_KEY`
- `BACKEND_CORS_ORIGINS`
- `ALLOWED_HOSTS`

## Validation Notes

Frontend validation remains available through:

```bash
npm run lint
```

Backend validation scripts are not yet defined in `backend/pyproject.toml`. Future R3 tasks should add explicit backend lint/typecheck/test commands after the backend tooling policy is finalized.
