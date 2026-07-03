# R2-004 Security Hardening Audit and Remediation Plan

Repository: `C:\GIUVA-PROJECTS\GIUVA-ROMANIA`  
Mode: Analysis and planning only  
Audit date: 2026-07-02  
Scope: Static repository inspection against `GIUVA_CORE_v1.0.md`. No source files, configuration files, dependencies, or implementation code were modified.

## 1. Current Security Overview

The repository contains a public Next.js frontend and a FastAPI backend scaffold. The frontend is currently safer than the backend because public forms are local-only mock forms, no real data submission was found in inspected frontend code, and no unsafe HTML rendering patterns such as `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or `new Function` were found in `app`, `components`, `lib`, or `data`.

The backend is not production-safe. It includes authentication, JWT generation, CORS, database configuration, SQLAlchemy models, and placeholder API routes, but the authentication route issues a bearer token for any non-empty email/password. There is no real credential verification, no protected route dependency, no authorization enforcement, no rate limiting, no audit logging, no production secret enforcement, and no migration-backed production data workflow.

Current frontend data posture:

- Forms validate locally in the browser.
- Forms explicitly disclose that data is not sent by email or saved to a real database.
- Newsletter form is also local-only.
- Privacy and cookie pages are provisional and state that real collection/tracking requires future updates.

Current backend data posture:

- SQLAlchemy models exist for users, volunteers, events, campaigns, sponsors, stories, partners, and civil response data.
- Alembic is configured, but no migration versions were found.
- Public API routes are mostly read-only placeholder/status endpoints.
- `/api/v1/auth/login` is the only inspected route that creates security-sensitive output.

Current dependency posture:

- Frontend lockfile resolves `next` to `15.5.18`, `react` to `19.2.6`, and `react-dom` to `19.2.6`, while `package.json` allows broad compatible ranges.
- Backend dependencies are range-based in `backend/pyproject.toml`; no lockfile was found for Python dependencies.
- No automated dependency audit gate was found.
- No CI workflow was found.

## 2. Security Strengths

- `GIUVA_CORE_v1.0.md` now defines explicit security, privacy, safety, and release-gate requirements.
- Public-facing forms are intentionally mock/local-only and visibly disclose that no email/database submission occurs in this release state.
- Form UI requires consent checkboxes before local success state.
- Pydantic `EmailStr` is used for auth email schema validation.
- SQLAlchemy ORM models are used rather than ad hoc SQL strings in inspected backend code.
- Password hashing helpers use `passlib` with bcrypt, even though they are not yet integrated into real login.
- JWTs include an expiration claim.
- CORS origins are configurable through settings and `.env`.
- Health endpoint does not expose secrets.
- Public content includes strong non-emergency and public-safety boundary language.
- Repository hygiene was improved in R2-002, reducing accidental leakage of logs/cache/generated artifacts.
- No inspected frontend code used direct unsafe HTML injection patterns.
- No active file upload endpoint was found.
- No cookies or browser storage usage was found in inspected app/client code.

## 3. Security Weaknesses

- Authentication is prototype-only and unsafe: `/auth/login` accepts any non-empty credentials and returns a signed JWT.
- Authorization is absent: no route-level permission checks or authenticated dependencies were found.
- JWT secret defaults to `change-this-before-production`.
- Docker and backend examples include predictable local database credentials.
- Backend settings do not fail fast when unsafe secrets are used outside local development.
- CORS allows credentials and all methods/headers for configured origins; this is acceptable only after origins are tightly controlled per environment.
- FastAPI docs/OpenAPI exposure is not environment-gated.
- No CSRF strategy exists for future cookie/session-based flows.
- No rate limiting, brute-force protection, account lockout, or login throttling exists.
- No audit logging exists for auth, admin access, consent, privacy requests, or data changes.
- No structured security logging policy exists.
- No error-handling policy exists to prevent sensitive error leakage in production.
- No security headers are configured in Next.js or FastAPI.
- No Content Security Policy is defined.
- No HSTS/HTTPS enforcement is defined in repository configuration.
- No production cookie strategy exists because no real auth/session cookie flow exists yet.
- No backend persistence workflow is active, and no migrations exist for existing models.
- No GDPR production controls exist for consent logging, retention, deletion, export, data minimization, or access review.
- No automated security checks, dependency audits, or CI gates were found.
- Python backend dependencies are not locked, which reduces reproducibility and makes vulnerability management weaker.
- Duplicate Next config files remain, which can cause security header/config changes to be applied to the wrong file in a future task.

## 4. Critical Vulnerabilities

### CRITICAL-001: Prototype Login Issues Valid JWTs

Evidence: `backend/app/api/routes/auth.py`.

Risk: Any requester with any syntactically valid email and non-empty password receives a bearer token. If the backend is exposed publicly or if future protected routes trust these tokens, unauthorized users can gain access.

GIUVA CORE mapping:

- `CORE-SECURITY-001`: FAIL.
- `CORE-TEST-001`: FAIL until covered by tests.

Required remediation:

- Disable `/auth/login` in public environments until real auth exists, or replace it with real user lookup, password verification, active-user check, and server-side role enforcement.
- Add negative auth tests proving invalid credentials do not receive tokens.

### CRITICAL-002: Default JWT Secret

Evidence: `backend/app/core/config.py`, `backend/.env.example`.

Risk: JWTs signed with a known/default secret can be forged if the backend uses this value in a deployed environment.

GIUVA CORE mapping:

- `CORE-SECURITY-002`: FAIL.

Required remediation:

- Require a high-entropy secret from environment or secret manager.
- Fail startup outside local development when the default value is present.
- Document secret rotation.

### CRITICAL-003: No Authorization Boundary

Evidence: No route-level auth dependencies or role checks were found in inspected API routers.

Risk: Once data routes are implemented, sensitive records could be exposed or changed without enforced permissions.

GIUVA CORE mapping:

- `CORE-SECURITY-001`: FAIL.
- `CORE-BACKEND-001`: WARNING/FAIL depending on route exposure.

Required remediation:

- Define roles and permissions.
- Add reusable auth dependency for current user.
- Enforce authorization at every non-public endpoint.

### CRITICAL-004: No Production GDPR Workflow for Real Data

Evidence: frontend forms collect personal-data fields, but currently mock locally; backend consent logging and retention are not implemented.

Risk: If real submission is enabled before privacy controls exist, the platform could collect personal data without adequate consent logging, retention, deletion, export, or access controls.

GIUVA CORE mapping:

- `CORE-PRIVACY-001`: PASS for current mock disclosure.
- `CORE-PRIVACY-003`: FAIL before real collection.

Required remediation:

- Do not enable real form submission until consent, retention, deletion/export, admin access, and audit logging are implemented.

### CRITICAL-005: No Security/Test Gate

Evidence: no CI workflow or automated security test gate was found.

Risk: auth, dependency, privacy, and header regressions can be shipped unnoticed.

GIUVA CORE mapping:

- `CORE-TEST-001`: FAIL.
- `CORE-SECURITY-004`: WARNING/FAIL.

Required remediation:

- Add CI with lint/build/tests/dependency audit/security checks before any public production release.

## 5. Medium Risks

- CORS uses `allow_credentials=True` with broad methods and headers. Current origins are local examples, but production must be explicit and minimal.
- FastAPI app exposes default OpenAPI/docs behavior unless disabled by environment-specific configuration.
- Security headers are not configured: missing CSP, HSTS, X-Frame-Options/frame-ancestors, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- HTTPS is not enforced at application configuration level. This may be delegated to hosting, but it is not documented.
- No rate limiting exists for auth or future form endpoints.
- No request-size limits are defined for future form/file endpoints.
- `python-multipart` is included, but no file upload policy exists. This is a latent risk if uploads are later added.
- Backend dependencies are not locked in a reproducible lockfile.
- Dependency advisory review is manual; no `npm audit`, Python advisory scan, Dependabot/Renovate, or SBOM workflow is configured.
- No centralized error handling policy exists for FastAPI production mode.
- No structured logging policy exists for PII redaction.
- No audit trail exists for admin/auth/privacy actions.
- Duplicate `next.config.mjs` and `next.config.ts` create risk that future security headers are added to the wrong config file.
- Privacy and cookie policies are explicitly provisional and must be completed before real tracking or data collection.

## 6. Low Risks

- Public external links should consistently use `rel="noopener noreferrer"` when `target="_blank"` is used. Inspected navbar social links use `rel="noreferrer"`, but a full link audit should be part of future QA.
- `package.json` uses broad semver ranges. Lockfile pins current installs, but future installs may drift without a dependency update policy.
- Some README/app strings appear encoding-damaged in rendered inspection output. This is primarily content quality, but privacy/legal pages should be reviewed for exact legal wording after encoding cleanup.
- The frontend includes a fixed GIUVA AI widget; it appears informational only, but future AI integration would need prompt-safety, data-retention, abuse, and disclosure controls.
- No browser storage use was found, which is good now, but future analytics or personalization features must update cookie/privacy documentation before activation.

## 7. GIUVA CORE Security Compliance

| Requirement | Status | Evidence / Notes |
| --- | --- | --- |
| `CORE-SAFETY-001` Non-emergency disclaimer | PASS | Public content and civil-response endpoint state GIUVA is not an emergency operator. |
| `CORE-SAFETY-002` Civil response limits | PASS | Civil response route lists allowed and not-allowed scopes. |
| `CORE-SAFETY-003` Medical/legal advice boundaries | WARNING | Public copy is cautious; future AI or academy content needs formal review. |
| `CORE-PRIVACY-001` Personal data transparency | PASS for mock release | Forms disclose local-only behavior and visible consent. |
| `CORE-PRIVACY-002` Mock form safety | PASS | Forms prevent network submission and show local success state. |
| `CORE-PRIVACY-003` Production data workflow | FAIL before real collection | No consent logging, retention, deletion/export, or admin access controls exist. |
| `CORE-SECURITY-001` Authentication safety | FAIL | Login issues JWTs for any non-empty credentials. |
| `CORE-SECURITY-002` Secret management | FAIL | Default JWT secret and predictable DB credentials are present for local examples; no production fail-fast. |
| `CORE-SECURITY-003` CORS/API exposure | WARNING | CORS is configurable but credentials/all methods/all headers require environment hardening. Docs exposure is not gated. |
| `CORE-SECURITY-004` Dependency hygiene | WARNING | Lockfile exists for frontend, but no audit gate. Backend has no lockfile. |
| `CORE-BACKEND-001` API contract clarity | WARNING | Placeholder routes are simple and mostly safe, but production API contracts are not defined. |
| `CORE-BACKEND-002` Persistence readiness | FAIL before real data | Models exist but no migrations and no production data runbook. |
| `CORE-BACKEND-003` Operational health | WARNING | Health endpoint exists and is low-risk; database readiness is not checked. |
| `CORE-FRONTEND-001` Build integrity | WARNING | Build/lint scripts exist; this audit did not run them because task is analysis/report only. |
| `CORE-HYGIENE-001` Generated artifacts | PASS | R2-002 improved ignore rules and removed tracked generated artifacts. |
| `CORE-HYGIENE-002` Configuration clarity | WARNING | Duplicate Next config files remain. |
| `CORE-TEST-001` Baseline automated checks | FAIL | No CI/test baseline was found. |

Overall GIUVA CORE security compliance: FAIL for backend/public production readiness. WARNING for frontend-only mock public portal readiness.

## 8. Security Remediation Plan

### Phase 0: Exposure Control

Goal: prevent unsafe backend features from becoming public.

Actions:

- Keep backend auth endpoints private, disabled, or non-deployed until hardened.
- Document that frontend mock forms are the only acceptable public form behavior until R2 privacy/backend work is complete.
- Confirm deployment target does not expose FastAPI prototype routes unintentionally.

Acceptance criteria:

- Public deployment inventory lists whether backend is exposed.
- `/api/v1/auth/login` is not publicly usable in production until remediated.

### Phase 1: Authentication and Authorization

Goal: replace prototype authentication with a real security boundary.

Actions:

- Implement real user lookup and bcrypt password verification.
- Reject invalid credentials with generic errors.
- Enforce active-user checks.
- Add reusable authenticated-user dependency.
- Add role/permission checks for admin, volunteer, partner, and public scopes.
- Add auth tests for valid login, invalid login, inactive user, expired token, forged token, and role denial.

Acceptance criteria:

- Tokens are issued only after verified credentials.
- Protected endpoints reject missing/invalid tokens.
- Role checks are enforced server-side.

### Phase 2: JWT and Secret Hardening

Goal: make token signing and secret handling production-safe.

Actions:

- Require high-entropy JWT secret from environment/secret manager.
- Fail startup in non-local environments if default secret is used.
- Add issuer/audience claims if multiple clients or services are expected.
- Define access token lifetime and refresh strategy.
- Document secret rotation and emergency revocation.

Acceptance criteria:

- Default secret cannot be used outside local mode.
- Token validation checks expiration and expected claims.

### Phase 3: CORS, API Exposure, and Security Headers

Goal: reduce browser/API attack surface.

Actions:

- Define explicit production CORS origins.
- Avoid `allow_credentials=True` unless cookie/session auth requires it.
- Restrict methods and headers where practical.
- Gate OpenAPI/docs by environment.
- Add security headers at the hosting, Next.js, and/or FastAPI layer:
  - Content-Security-Policy
  - Strict-Transport-Security
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
  - frame-ancestors or X-Frame-Options
- Document HTTPS enforcement at deployment layer.

Acceptance criteria:

- Production response headers pass baseline security header review.
- API docs are intentionally public or disabled.
- CORS permits only approved origins.

### Phase 4: Forms, GDPR, and Audit Logging

Goal: enable real data collection safely.

Actions:

- Define data inventory for volunteer, contact, partner, newsletter, and funding forms.
- Add consent timestamp, consent text/version, source route, and purpose fields.
- Add retention policy and deletion/export workflow.
- Add admin access controls and audit logs.
- Redact PII from application logs.
- Add privacy request workflow for access, correction, deletion, and objection.

Acceptance criteria:

- Real forms cannot submit without consent.
- Consent and privacy events are auditable.
- Privacy Policy matches actual data flow before activation.

### Phase 5: Input Validation, Injection, and Abuse Controls

Goal: harden future write endpoints.

Actions:

- Add create/update schemas with field length limits, enums, email normalization, and strict validation.
- Use ORM parameterization only; prohibit raw SQL unless reviewed.
- Add request-size limits.
- Add rate limiting to auth and public forms.
- Add spam/bot mitigation for public forms.
- Add CSRF controls if cookie-based auth is introduced.

Acceptance criteria:

- Invalid input is rejected consistently.
- Write endpoints have tests for injection-like payloads and oversized inputs.
- Auth and public forms are rate-limited.

### Phase 6: File Upload Policy

Goal: prevent unsafe upload features from being added casually.

Actions:

- Keep uploads disabled until a formal upload policy exists.
- If uploads are required later, define allowlisted MIME types/extensions, max size, antivirus scanning, storage isolation, random object names, no direct execution, and signed download URLs.

Acceptance criteria:

- No upload endpoint ships without explicit security review.

### Phase 7: Dependency Security and CI

Goal: make security checks repeatable.

Actions:

- Add frontend dependency audit gate.
- Add Python dependency lockfile and advisory scan.
- Add Dependabot/Renovate policy.
- Add CI for lint, build, backend static checks, tests, and dependency audit.
- Track critical framework advisories, especially React/Next.js Server Components advisories.

Acceptance criteria:

- Critical/high dependency vulnerabilities block release unless documented and accepted.
- CI is required before merge/release.

## 9. Future Security Tasks

- R2-004A: Disable or protect prototype backend auth from public exposure.
- R2-004B: Replace prototype auth with verified credential flow and route authorization.
- R2-004C: Implement production secret validation and secret rotation documentation.
- R2-004D: Define production CORS, OpenAPI/docs exposure, and HTTPS policy.
- R2-004E: Add security headers to the authoritative Next/FastAPI/deployment layer.
- R2-004F: Create GDPR data-flow and consent logging design.
- R2-004G: Add backend audit logging and PII-safe structured logging.
- R2-004H: Add dependency audit workflow for npm and Python.
- R2-004I: Add auth, privacy, and API security tests.
- R2-004J: Define file upload policy before enabling uploads.
- R2-004K: Add rate limiting and abuse protection plan for auth and public forms.
- R2-004L: Complete privacy/cookie policy before activating real forms, analytics, tracking, or CRM/email integrations.

## 10. Security Readiness Score

Estimated scores from static inspection:

| Area | Score | Rationale |
| --- | ---: | --- |
| Frontend public security | 7/10 | Mock forms, no unsafe HTML patterns found, no real cookies/storage/tracking, but no headers or security QA gate. |
| Backend authentication | 1/10 | Prototype login issues JWTs for arbitrary non-empty credentials. |
| Backend authorization | 1/10 | No route-level authorization boundary found. |
| JWT and secrets | 2/10 | Expiring JWTs exist, but default secret and no production validation are blocking. |
| Privacy/GDPR readiness | 4/10 | Good mock disclosure; no production consent/retention/deletion/export workflow. |
| API exposure/CORS | 4/10 | Configurable CORS exists, but production exposure controls are incomplete. |
| Dependency security | 4/10 | Frontend lockfile exists; no audit gate and backend dependencies are not locked. |
| Logging/audit logging | 1/10 | No security/audit logging design found. |
| Security headers/HTTPS | 2/10 | HTTPS URL used in metadata; no explicit security headers or enforcement policy in repo. |
| Overall security readiness | 3/10 | Safe enough as a static/mock public prototype if backend is not exposed; not safe for production backend or real data collection. |

Final readiness conclusion:

GIUVA Romania should not expose the current FastAPI backend publicly and should not enable real form submission until the critical authentication, authorization, secret-management, privacy, logging, and CI controls are implemented. The frontend can remain a public mock/informational portal only if the backend remains non-public and all forms continue to disclose local-only behavior.

Implementation status: no remediation was implemented in this task. Approval is required before any source, configuration, dependency, or production behavior changes.

