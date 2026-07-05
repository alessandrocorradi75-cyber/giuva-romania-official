# Functional Integration Block A

## Summary

This block implements the first real internal functional integration layer for the GIUVA admin platform.

## Implemented

- Added `/admin/login` for internal admin authentication.
- Added `lib/adminApi.ts` as the internal admin API client using `NEXT_PUBLIC_API_BASE_URL`.
- Integrated login with the existing backend `/auth/login` endpoint.
- Added browser-session token storage using `sessionStorage` for the internal admin session.
- Added current user fetch through `/auth/me`.
- Added client-side protection for admin routes.
- Added logout.
- Added current admin identity display in the admin header.
- Replaced the static organizations page with a real API-backed read view using `/organizations`.
- Replaced the static users page with a real API-backed read view using `/users`.
- Added loading, error and empty states.
- Preserved volunteers and all other modules as placeholders.

## Backend Capability Boundary

The current backend exposes real read endpoints for organizations and users, but it does not expose create, update or delete endpoints for those resources.

For that reason:

- Organization create/update/delete controls are shown as disabled.
- User create/update/delete controls are shown as disabled.
- No fake write behavior was implemented.
- No backend changes were made.

## Security Boundaries

- Public homepage was not modified.
- Public content was not modified.
- Backend was not exposed publicly.
- Public registration was not enabled.
- Password reset was not implemented.
- Email sending was not implemented.
- Payments were not integrated.
- Public personal data collection was not enabled.

## Configuration

The admin API client reads:

- `NEXT_PUBLIC_API_BASE_URL`

If it is not set, the client uses the local development fallback:

- `http://127.0.0.1:8000/api/v1`

## Remaining Work

- Add backend create/update/delete endpoints for organizations and users only after RBAC, audit logging and tenant-scoping rules are approved.
- Replace disabled write controls with real forms after backend write support exists.
- Add token refresh/session expiration handling if the backend adds refresh tokens.
- Add admin route protection at the server/proxy/deployment layer in addition to client-side protection.
- Add tests for login, protected route behavior, API errors and empty states.

## Validation Required

- `npm run lint`
- `npm run build`
