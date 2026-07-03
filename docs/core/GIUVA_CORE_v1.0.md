# GIUVA CORE v1.0 Requirements

Canonical requirements document for GIUVA Romania Release 1.0.

Version: 1.0  
Created: 2026-07-02  
Applies to: `C:\GIUVA-PROJECTS\GIUVA-ROMANIA`  
Purpose: define the minimum release, compliance, quality, and safety requirements for the GIUVA Romania public platform.

## 1. Release Status Model

Every requirement must be evaluated with one of these statuses:

- PASS: requirement is implemented, verified, and safe for the intended release scope.
- WARNING: requirement is partially implemented, acceptable only with documented limitations or a planned follow-up.
- FAIL: requirement is missing, unsafe, misleading, unverified, or blocks public release.
- NOT APPLICABLE: requirement does not apply to the current release scope and the reason is documented.

Release 1.0 may ship only when:

- No Critical requirement is FAIL.
- No Security, Privacy, Legal, or Public Safety requirement is FAIL.
- All WARNING items have explicit owner, limitation, and follow-up task.
- Build, lint, and required smoke checks pass.
- Public content has been reviewed for accuracy, legal caution, and no misleading claims.

## 2. GIUVA Public Identity

### CORE-IDENTITY-001: Official Project Name

Requirement: the platform must clearly identify the public project as GIUVA Romania.

Acceptance criteria:

- The homepage, metadata, navigation, and footer identify the site as GIUVA Romania.
- The full meaning of GIUVA is available in public content.
- Brand usage is consistent across core pages.

Release status: REQUIRED.

### CORE-IDENTITY-002: Civic Positioning

Requirement: GIUVA must be presented as a civic, educational, social, and community platform.

Acceptance criteria:

- Public copy does not imply public authority status.
- Public copy does not imply emergency-service status.
- Public copy explains the civic/community nature of the initiative.

Release status: REQUIRED.

### CORE-IDENTITY-003: Development Stage Transparency

Requirement: future, roadmap, pilot, and under-development states must be clearly labelled.

Acceptance criteria:

- Future communities, documents, events, social channels, partnerships, and programs are not presented as fully active unless verified.
- Public pages distinguish live content from roadmap content.
- Metrics use real numbers or cautious labels such as "in development", "roadmap", or "0 public".

Release status: REQUIRED.

## 3. Public Safety and Legal Boundaries

### CORE-SAFETY-001: Non-Emergency Disclaimer

Requirement: GIUVA must not be presented as a replacement for 112, SMURD, ambulance, police, firefighters, or any public emergency service.

Acceptance criteria:

- The non-emergency boundary is visible in public content.
- Emergency-adjacent programs such as Riders Rescue, Civil Response, Preparedness, and AED awareness use cautious wording.
- No page implies dispatch, autonomous intervention, emergency command, or public-safety authority.

Release status: CRITICAL.

### CORE-SAFETY-002: Civil Response Limits

Requirement: any civil-response or preparedness language must stay educational, civic, preventive, or support-oriented.

Acceptance criteria:

- No incident-response workflow is advertised as operational.
- No command/control feature is exposed.
- Cooperation with institutions is described only as future/formal/documented where applicable.

Release status: CRITICAL.

### CORE-SAFETY-003: Medical and Legal Advice Boundaries

Requirement: GIUVA public content and GIUVA AI surfaces must not provide medical, legal, or emergency advice.

Acceptance criteria:

- AI/helper copy states that it is informational/orientational only.
- Public health/AED/first-aid content avoids certification or medical-instruction claims unless backed by authorized partners.
- Legal/privacy/funding pages avoid giving individualized legal advice.

Release status: CRITICAL.

## 4. Public Information Architecture

### CORE-IA-001: Required Public Pages

Requirement: Release 1.0 must include core public pages.

Required pages:

- Home
- About / Who we are
- Programmes / Disciplines
- Volunteer / Get involved
- Partners
- Support / Donate or future support
- News / Updates
- Events or event roadmap
- Transparency
- Governance
- Publications or download center
- FAQ
- Contact
- Privacy Policy
- Cookie Policy

Acceptance criteria:

- Each required page exists or has a documented equivalent.
- Navigation or internal links make pages discoverable.
- Missing pages are documented as blockers unless intentionally out of scope.

Release status: REQUIRED.

### CORE-IA-002: Route Consistency

Requirement: public routes must be intentional, stable, and not misleading.

Acceptance criteria:

- Legacy aliases redirect or explain their purpose.
- Duplicate routes are documented or consolidated.
- Dynamic pages handle missing content safely.

Release status: REQUIRED.

### CORE-IA-003: Contact and Escalation Clarity

Requirement: contact pages must clarify what GIUVA can and cannot handle.

Acceptance criteria:

- Contact forms or emails do not imply emergency handling.
- Requests for volunteers, partners, press, community, and support are separated or clearly labelled.
- Operational response expectations are cautious.

Release status: REQUIRED.

## 5. Content Governance

### CORE-CONTENT-001: No Fake Partnerships

Requirement: the platform must not claim third-party partnerships, endorsements, logos, institutional cooperation, or sponsor status unless formally verified.

Acceptance criteria:

- No unauthorized logos are displayed.
- Partner pages use cautious language for future/roadmap partners.
- Public resources may link to institutions without implying partnership.

Release status: CRITICAL.

### CORE-CONTENT-002: No Fake Documents

Requirement: the platform must not publish fake statutes, legal documents, reports, certificates, policies, or institutional documents.

Acceptance criteria:

- Missing documents are labelled as future, coming soon, restricted, or available after formalization.
- Public documents are linked only when real and approved.
- Download center states document status clearly.

Release status: CRITICAL.

### CORE-CONTENT-003: Editorial Accuracy

Requirement: public claims must be accurate, cautious, and reviewable.

Acceptance criteria:

- News items have date, category, author/source, and controlled wording.
- Metrics and impact statements are either real or explicitly marked as pilot/roadmap.
- Content source ownership is documented.

Release status: REQUIRED.

### CORE-CONTENT-004: Localization Integrity

Requirement: Romanian must be the primary language, with English or future locales handled consistently.

Acceptance criteria:

- Romanian content is complete for core pages.
- English pages do not contradict Romanian public claims.
- Future language/country pages are marked as roadmap or development unless active.
- Text encoding must render correctly as UTF-8 in browsers and repository files.

Release status: REQUIRED.

## 6. Forms, Privacy, and Data Protection

### CORE-PRIVACY-001: Personal Data Transparency

Requirement: any form collecting personal data must explain what happens to the data.

Acceptance criteria:

- Forms disclose whether data is submitted, stored, emailed, or local-only.
- Consent text is visible before submission.
- Privacy Policy is linked or referenced from forms.

Release status: CRITICAL.

### CORE-PRIVACY-002: Mock Form Safety

Requirement: mock forms must not pretend to submit or store real data.

Acceptance criteria:

- Mock/local-only state is visible near the form.
- Success messages do not imply real backend receipt unless real integration exists.
- Frontend-only validation is labelled as such.

Release status: REQUIRED.

### CORE-PRIVACY-003: Production Data Workflow

Requirement: before enabling real form submission, the platform must define consent logging, retention, export, deletion, and access controls.

Acceptance criteria:

- Backend stores consent timestamp and consent scope.
- Data retention policy is documented.
- Admin access is protected.
- Deletion/export process is documented.

Release status: REQUIRED BEFORE REAL DATA COLLECTION.

## 7. Security

### CORE-SECURITY-001: Authentication Safety

Requirement: backend authentication must not issue valid tokens without real credential verification.

Acceptance criteria:

- Prototype login behavior is disabled, protected, or replaced before public backend exposure.
- Passwords are never accepted without verification against a user store.
- Roles and permissions are enforced server-side.

Release status: CRITICAL.

### CORE-SECURITY-002: Secret Management

Requirement: secrets must not be hardcoded for production use.

Acceptance criteria:

- Production secrets come from environment or secret manager.
- Default/example secrets are clearly marked as local-only.
- Startup fails or warns loudly when unsafe production secrets are used.

Release status: CRITICAL.

### CORE-SECURITY-003: CORS and API Exposure

Requirement: backend CORS and API exposure must match deployed origins and release scope.

Acceptance criteria:

- CORS origins are explicit per environment.
- Admin or internal endpoints are not publicly exposed without auth.
- API docs exposure is intentional for each environment.

Release status: REQUIRED.

### CORE-SECURITY-004: Dependency Hygiene

Requirement: dependencies must be auditable and kept within supported versions.

Acceptance criteria:

- Lockfiles are committed where applicable.
- Dependency audit process is documented.
- Critical/high vulnerabilities are reviewed before release.

Release status: REQUIRED.

## 8. Backend and Data Readiness

### CORE-BACKEND-001: API Contract Clarity

Requirement: backend endpoints must have documented purpose, input, output, status codes, and data behavior.

Acceptance criteria:

- Placeholder/schema-only routes are labelled as planned or disabled from production use.
- Real routes have schemas and validation.
- Frontend expectations match backend behavior.

Release status: REQUIRED.

### CORE-BACKEND-002: Persistence Readiness

Requirement: production persistence must be backed by migrations and documented database setup.

Acceptance criteria:

- Alembic migrations exist for active SQLAlchemy models.
- Database URL and setup instructions are documented.
- Migration runbook exists before production data use.

Release status: REQUIRED BEFORE REAL DATA COLLECTION.

### CORE-BACKEND-003: Operational Health

Requirement: backend must expose safe health/status checks.

Acceptance criteria:

- Health endpoint confirms service availability.
- Health endpoint does not leak secrets or sensitive configuration.
- Database readiness is checked where required by deployment.

Release status: REQUIRED.

## 9. Frontend Quality

### CORE-FRONTEND-001: Build Integrity

Requirement: frontend must build successfully for the target release.

Acceptance criteria:

- `npm run build` passes.
- TypeScript strict checks pass.
- No release-blocking lint errors.

Release status: CRITICAL.

### CORE-FRONTEND-002: Navigation and Routing

Requirement: public navigation must work across desktop and mobile.

Acceptance criteria:

- Main nav links resolve.
- Mobile menu is keyboard-usable.
- Active page state is clear.
- Broken links are reviewed before release.

Release status: REQUIRED.

### CORE-FRONTEND-003: Visual and Responsive Integrity

Requirement: core pages must render correctly on common mobile and desktop viewports.

Acceptance criteria:

- No major text overlap.
- No horizontal overflow on mobile.
- Hero sections and images remain readable.
- Cards/forms/buttons remain usable on small screens.

Release status: REQUIRED.

## 10. Accessibility

### CORE-A11Y-001: Keyboard Access

Requirement: all core navigation, forms, buttons, links, menus, and widgets must be keyboard accessible.

Acceptance criteria:

- Focus order is logical.
- Focus indicator is visible.
- No keyboard traps exist.
- Skip link works.

Release status: REQUIRED.

### CORE-A11Y-002: Semantic Structure

Requirement: pages must use semantic landmarks and meaningful labels.

Acceptance criteria:

- One main content landmark exists.
- Inputs have labels.
- Icon-only controls have accessible names.
- Images have meaningful or intentionally empty alt text.

Release status: REQUIRED.

### CORE-A11Y-003: Motion and Contrast

Requirement: motion and color choices must be accessible.

Acceptance criteria:

- Reduced motion preference is respected.
- Text contrast is acceptable for public content.
- Color is not the only way to communicate critical state.

Release status: REQUIRED.

## 11. SEO and Public Discoverability

### CORE-SEO-001: Metadata

Requirement: core pages must have appropriate metadata.

Acceptance criteria:

- Site title and description are set.
- Open Graph/Twitter metadata exists for main public entry points.
- Canonical URL policy is documented.

Release status: REQUIRED.

### CORE-SEO-002: Sitemap and Robots

Requirement: sitemap and robots configuration must reflect public route policy.

Acceptance criteria:

- Sitemap includes intended public routes.
- Robots policy is intentional.
- Non-public or placeholder-only routes are excluded or clearly reviewed.

Release status: REQUIRED.

### CORE-SEO-003: Multilingual SEO

Requirement: multilingual public routes must avoid conflicting canonical/hreflang signals.

Acceptance criteria:

- Romanian and English route alternates are intentional.
- Future locales are not advertised as active unless content is ready.
- Country/domain roadmap pages do not imply active legal entities.

Release status: WARNING ALLOWED WITH DOCUMENTED LIMITS.

## 12. Performance and Assets

### CORE-PERF-001: Image Discipline

Requirement: images must be optimized for public performance and accessibility.

Acceptance criteria:

- Large visual assets are compressed and appropriately sized.
- Critical images use responsive sizing.
- Decorative/generated assets are documented when temporary.

Release status: REQUIRED.

### CORE-PERF-002: Bundle and Runtime Budget

Requirement: frontend bundle and runtime behavior must be acceptable for public users.

Acceptance criteria:

- Major client components are justified.
- Heavy widgets are lazy-loaded where practical.
- Performance regressions are checked before release.

Release status: REQUIRED.

## 13. Repository Hygiene

### CORE-HYGIENE-001: Generated Artifacts

Requirement: generated files must not be committed unless explicitly required.

Acceptance criteria:

- `node_modules`, `.next`, Python bytecode, logs, coverage, and local screenshots are ignored.
- Existing generated artifacts are removed from version control.
- Visual QA artifacts are stored outside the main source tree or documented when retained.

Release status: REQUIRED.

### CORE-HYGIENE-002: Configuration Clarity

Requirement: each tool must have one authoritative configuration path unless duplication is intentional and documented.

Acceptance criteria:

- Next.js config ambiguity is resolved or documented.
- Content data sources are canonical per locale.
- Backup files are not used as hidden sources of truth.

Release status: REQUIRED.

### CORE-HYGIENE-003: Clean Working Tree for Release

Requirement: releases must be cut from a clean working tree.

Acceptance criteria:

- `git status --short` is empty before release.
- Generated local files are ignored.
- Release commit/tag references are documented.

Release status: CRITICAL.

## 14. Testing and CI

### CORE-TEST-001: Baseline Automated Checks

Requirement: the repository must provide repeatable automated checks.

Acceptance criteria:

- Frontend lint command exists and passes.
- Frontend build command exists and passes.
- Backend static/test command is defined before backend production use.
- CI runs required checks on pull requests or release branches.

Release status: CRITICAL.

### CORE-TEST-002: Public Route Smoke Tests

Requirement: core public routes must be smoke-tested.

Acceptance criteria:

- Homepage and required public pages return successful responses.
- Dynamic discipline/news routes handle valid and invalid slugs.
- Sitemap and robots routes work.

Release status: REQUIRED.

### CORE-TEST-003: Form and Privacy Tests

Requirement: forms must be tested for validation, consent, and mock/real behavior.

Acceptance criteria:

- Required fields block invalid submissions.
- Consent fields are required.
- Mock forms do not perform network submission.
- Real forms log consent and persist only approved fields.

Release status: REQUIRED.

## 15. Documentation

### CORE-DOCS-001: Development Setup

Requirement: local development instructions must be complete enough for a new contributor.

Acceptance criteria:

- Frontend setup and run commands are documented.
- Backend setup and run commands are documented.
- Required environment variables are documented.

Release status: REQUIRED.

### CORE-DOCS-002: Deployment Runbook

Requirement: release/deployment steps must be documented before production launch.

Acceptance criteria:

- Frontend deployment target is documented.
- Backend deployment target is documented if backend is used.
- Environment, database, CORS, domain, and rollback notes exist.

Release status: REQUIRED BEFORE PRODUCTION.

### CORE-DOCS-003: Governance and Content Ownership

Requirement: public content ownership and approval rules must be documented.

Acceptance criteria:

- Owner/reviewer roles are named by function.
- Updates to partner claims, documents, events, metrics, and legal pages require review.
- Roadmap/future-state wording rules are documented.

Release status: REQUIRED.

## 16. Release Gate Checklist

Before GIUVA CORE v1.0 release, complete this checklist:

- [ ] No Critical requirement is FAIL.
- [ ] No Security, Privacy, Legal, or Public Safety requirement is FAIL.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Backend prototype auth is disabled, protected, or production-safe.
- [ ] Production secrets are not default/example values.
- [ ] Public forms are either clearly mock/local-only or backed by approved privacy workflow.
- [ ] Public content has been reviewed for no fake partnerships, no fake documents, and no emergency-service claims.
- [ ] Core routes have been smoke-tested on desktop and mobile.
- [ ] Accessibility basics have been checked.
- [ ] Sitemap and robots have been reviewed.
- [ ] Repository hygiene check passes.
- [ ] Deployment/runbook notes exist for the actual release target.
- [ ] Open WARNING items are listed with owner and follow-up task.

## 17. Current Known Baseline From R2-001/R2-002

Known PASS areas:

- Romanian-first public portal exists.
- Civic/non-emergency positioning is strongly represented.
- Public information architecture is broad.
- Transparency, governance, privacy, cookie, FAQ, and contact surfaces exist.
- Repository hygiene has been improved by removing tracked generated artifacts and expanding `.gitignore`.

Known WARNING areas:

- English/multilingual strategy is partial.
- Accessibility is founded but not fully audited.
- SEO exists but needs multilingual/content governance hardening.
- Performance needs measurement and budget.
- Documentation is incomplete for production operations.
- Forms are safe as mock flows, but not ready for real data collection.

Known FAIL/blocking areas until resolved:

- Backend auth is prototype-level and unsafe for public production exposure.
- Backend persistence and migrations are not release-ready.
- No automated test/CI baseline has been established.
- Security and privacy production runbooks are missing.

## 18. Future Independent Tasks

- R2-004: Security hardening audit and remediation plan.
- R2-005: Test and CI baseline.
- R2-006: Backend API readiness and persistence plan.
- R2-007: Content source consolidation.
- R2-008: Next.js configuration consolidation.
- R2-009: Accessibility audit and remediation.
- R2-010: Performance and asset audit.
- R2-011: Documentation package.
- R2-012: Frontend/backend integration plan.
- R2-013: Multilingual and SEO strategy.
- R2-014: Legal/privacy implementation review.

