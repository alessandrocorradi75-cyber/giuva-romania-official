# R4 Application Block A - Admin Dashboard Shell

## Summary

R4 Application Block A creates the first internal admin application layer for the GIUVA Enterprise Platform.

The implementation adds a protected-platform visual shell under `/admin` with static placeholders only. It does not add frontend authentication, does not expose real backend records, does not modify public pages, and does not change public website content.

## Files Added

- `app/admin/layout.tsx`
- `app/admin/page.tsx`
- `components/admin/AdminShell.tsx`
- `components/admin/AdminNavigation.tsx`
- `docs/roadmap/R4_APPLICATION_BLOCK_A.md`

## Admin Areas Represented

The dashboard shell includes placeholder sections for:

- Organizations
- Users
- Volunteers
- Programs
- Projects
- Events
- Training
- Partners
- Donations
- Documents
- Reports
- GDPR

## Design Notes

The admin shell uses a distinct internal platform identity:

- Dark sidebar navigation
- White operational content area
- Dense dashboard cards
- Static status indicators
- Clear internal-preview messaging

The implementation avoids public claims and explicitly marks the page as a static internal shell.

## Backend Integration Status

The existing R3 backend foundation provides the API domains that this shell will later consume. This block intentionally does not bind UI components to live backend data.

Future R4 tasks should add:

- frontend authentication and session handling;
- protected route enforcement;
- backend data fetching per module;
- role-aware navigation;
- module-specific list/detail/edit screens.

## Validation

Required validation for this block:

```bash
npm run lint
npm run build
```
