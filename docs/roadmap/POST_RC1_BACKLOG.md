# Post-RC1 Backlog and Functional Integration Plan

## 1. RC1 Status

RC1 is a validated holding-page release candidate. The public site remains a temporary institutional holding page while GIUVA continues registration and platform preparation.

RC1 validation status:

- Public holding page: ready.
- `npm run lint`: passed.
- `npm run build`: passed.
- Backend Python syntax validation: passed.
- Backend/public API exposure: not enabled.
- Real user registration: not enabled.
- Real personal data collection: not enabled.

## 2. What Is Ready

Ready foundations:

- Temporary public holding page.
- Internal admin shell and placeholder admin domain pages.
- Backend domain foundation for organizations, users, volunteers, programs, projects, events, training, certifications, partners, sponsors, donations, memberships, documents, media, communications, notifications, analytics, reporting, audit logs, GDPR, AI and GKMS.
- Security hardening baseline for JWT, RBAC, CORS, host validation and production settings.
- CI and validation baseline.
- Roadmap, security, deployment, release and operational documentation foundations.

## 3. What Is Not Ready

Not ready for public release:

- Full operational public platform.
- Public backend API.
- Real authentication frontend.
- Public registration or pre-registration workflows.
- Real volunteer onboarding.
- Real payment or donation processing.
- Real email, notification or communication sending.
- Real AI assistant usage or GKMS indexing.
- Production monitoring, alerting and backup automation.
- Tenant-scoped authorization beyond the current role foundation.

## 4. What Must Remain Disabled

The following must remain disabled until explicitly approved:

- Public backend exposure.
- Public API documentation publishing.
- Real user registration.
- Real personal data collection.
- Real volunteer application forms connected to storage.
- Donation/payment processing.
- Email delivery.
- Notification delivery.
- AI provider calls.
- External search/vector indexing.
- Public partner, sponsor or authority claims not legally approved.

## 5. Functional Integration Roadmap

Recommended post-RC1 sequence:

1. Stabilize configuration and remove duplicate Next.js config ambiguity.
2. Add backend automated tests for auth, RBAC and route protection.
3. Define production deployment target and environment variables outside the repository.
4. Implement authenticated admin frontend login.
5. Connect admin pages to backend read-only APIs.
6. Add write workflows only after audit logging and tenant scoping are implemented.
7. Add GDPR-safe pre-registration policy and consent model.
8. Add public content restoration only after official approval.
9. Add controlled public API only after security, rate limiting and data classification gates.

## 6. Priority Order

Critical:

- Keep backend private.
- Keep personal data collection disabled.
- Confirm legal registration status before public-facing operational claims.
- Consolidate Next.js configuration.
- Add backend auth/RBAC tests.

High:

- Add admin login UI.
- Add tenant-scoped authorization checks.
- Add audit logging for administrative mutations.
- Define deployment target and production environment guide.
- Add staging deployment validation.

Medium:

- Connect admin read-only views to backend APIs.
- Add operational workflow states for volunteers, projects and events.
- Add media/document governance workflows.
- Add release notes and changelog process.

Low:

- Add dashboard refinements.
- Add advanced filtering/search.
- Add AI/GKMS integration experiments in non-production only.

## 7. Backend Integration Plan

Backend integration must proceed in controlled stages:

1. Test current auth, JWT and RBAC behavior.
2. Add route-level tests for admin-only and coordinator-only domains.
3. Implement tenant and organization scoping.
4. Add audit logging for create/update/delete operations.
5. Add migration validation in CI.
6. Add read-only admin API consumption.
7. Add mutation endpoints to UI only after audit and tenant controls are verified.
8. Keep public API disabled until a separate public API approval task.

## 8. Admin Platform Integration Plan

Admin integration sequence:

1. Add login screen and token handling.
2. Protect `/admin` routes on the frontend.
3. Add session state and logout.
4. Replace static data with read-only backend data per domain.
5. Add loading, error and empty states.
6. Add forms only for approved internal operators.
7. Add write actions domain by domain.
8. Require audit log entries for sensitive actions.
9. Add admin accessibility and workflow tests.

## 9. Security and GDPR Gates

Before any real data collection:

- Confirm legal basis for processing.
- Approve privacy notice and consent text.
- Define retention periods.
- Define data subject request workflow.
- Add audit logging.
- Add role and tenant scoping.
- Add backend tests for protected routes.
- Add rate limiting and abuse protection.
- Add secure production secret management.
- Add incident response ownership.

## 10. Pre-Registration Restrictions

Before official registration and privacy approval:

- Do not store applicant personal data.
- Do not accept volunteer registrations.
- Do not collect donor information.
- Do not enable public forms connected to backend persistence.
- Do not send automated emails.
- Do not claim official partnerships, sponsorships or public authority relationships unless formally approved.

Allowed pre-registration activity:

- Static holding page.
- Internal planning.
- Internal admin placeholders.
- Backend foundation development without real data.
- Documentation and validation work.

## 11. Post-Registration Activation Plan

After official registration and legal/privacy approval:

1. Approve public content and institutional wording.
2. Approve privacy policy, cookie policy and data retention model.
3. Configure production environment and secrets.
4. Deploy staging environment.
5. Run full validation suite.
6. Enable admin authentication.
7. Enable limited internal data entry.
8. Enable public informational pages.
9. Enable pre-registration only after consent and GDPR gates pass.
10. Enable public API only after separate security and rate-limit review.

## 12. Final Recommendation

Maintain RC1 as a validated holding-page release while continuing backend and admin integration privately. The next phase should focus on configuration cleanup, backend tests, admin authentication and GDPR/security gates before any public operational functionality is enabled.
