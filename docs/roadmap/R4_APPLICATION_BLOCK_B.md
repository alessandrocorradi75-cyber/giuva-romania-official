# R4 Application Block B - Admin Organizations, Users and Volunteers Pages

## Summary

R4 Application Block B adds the first internal admin section pages for Organizations, Users and Volunteers.

The implementation preserves the existing `/admin` shell and adds static placeholder pages only. No public homepage, public page content, backend exposure, real login UI, data submission, registration flow, or real personal data collection was added.

## Files Added

- `app/admin/organizations/page.tsx`
- `app/admin/users/page.tsx`
- `app/admin/volunteers/page.tsx`
- `components/admin/AdminSectionPage.tsx`
- `docs/roadmap/R4_APPLICATION_BLOCK_B.md`

## Files Modified

- `components/admin/AdminShell.tsx`

## Pages Added

### `/admin/organizations`

Includes:

- page title;
- internal-only notice;
- summary cards;
- placeholder organization hierarchy table;
- status badges;
- demo-data notice.

### `/admin/users`

Includes:

- page title;
- internal-only notice;
- summary cards;
- placeholder user/RBAC table;
- status badges;
- no-real-account notice.

### `/admin/volunteers`

Includes:

- page title;
- internal-only notice;
- summary cards;
- placeholder volunteer identity table;
- status badges;
- no-personal-data notice.

## Navigation

The existing admin navigation now links directly to:

- `/admin/organizations`
- `/admin/users`
- `/admin/volunteers`

Other module links remain dashboard placeholders until future R4 blocks create their pages.

## Data Policy

All tables use static demo records with `.local` or demo identifiers. No backend data is fetched, no forms submit data, and no user information is collected.

## Validation

Required validation:

```bash
npm run lint
npm run build
```
