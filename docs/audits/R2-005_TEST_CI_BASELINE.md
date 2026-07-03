# R2-005 Test and CI Baseline

Repository: `C:\GIUVA-PROJECTS\GIUVA-ROMANIA`  
Mode: Analysis and planning only  
Audit date: 2026-07-02  
Scope: Static inspection of scripts, configuration, repository structure, and GIUVA CORE v1.0 requirements. No tests were created, no CI workflows were created, no packages were installed, and no source/configuration files were modified.

## 1. Current Test Strategy

The current repository has a minimal validation strategy centered on frontend linting and building:

- `npm run lint`: runs `eslint . --max-warnings=0`.
- `npm run build`: runs `next build`.
- TypeScript is configured with `strict: true` and `noEmit: true`; Next build is expected to perform type validation.
- ESLint extends `next/core-web-vitals` and `next/typescript`.
- Backend `pyproject.toml` includes Ruff and Pyright configuration sections, but no backend scripts, test framework, or CI command is defined.

No complete automated test strategy currently exists for:

- frontend components,
- public routes/pages,
- accessibility,
- forms,
- backend units,
- backend integration,
- API contracts,
- database behavior,
- authentication,
- validation,
- security regression,
- release smoke tests.

This means the repository currently depends on manual inspection, ad hoc local runs, and prior audit documents rather than repeatable quality gates.

## 2. Existing Test Coverage

No test files were found through repository inspection using test/spec filename searches.

Observed coverage by area:

| Area | Existing Coverage | Notes |
| --- | --- | --- |
| Frontend lint | Present | `npm run lint` exists and ESLint is configured. |
| Frontend TypeScript | Partial | `strict: true` exists; no standalone `typecheck` script exists. |
| Frontend build | Present | `npm run build` exists. |
| Component tests | None found | No Jest/Vitest/Testing Library setup found. |
| Page tests | None found | No route smoke or rendering tests found. |
| Accessibility tests | None found | No axe/Playwright accessibility setup found. |
| Backend unit tests | None found | No `tests/`, `backend/tests/`, or pytest setup found. |
| Backend integration tests | None found | No database/API integration test setup found. |
| API tests | None found | No FastAPI TestClient/httpx test suite found. |
| Authentication tests | None found | Prototype auth route is untested. |
| Database tests | None found | No migration/database test harness found. |
| Dependency audit | Historical/manual only | Prior audit notes mention npm audit issues, but no current automated gate exists. |
| CI/CD | None found | No repository-level `.github` directory or workflow was found. |

## 3. Missing Tests

### Frontend

- Homepage smoke test.
- Required public route smoke tests for about, disciplines, volunteer, partner, support, news, events, transparency, governance, FAQ, contact, privacy, and cookie pages.
- Dynamic route tests for `app/discipline/[slug]` and `app/news/[slug]`, including valid and invalid slugs.
- Navigation tests for desktop and mobile states.
- Form validation tests for `MockForm` and newsletter behavior.
- Consent checkbox tests.
- No-network-submission tests for mock forms.
- Metadata, sitemap, and robots tests.
- Component tests for shared portal components, cards, accordions, breadcrumbs, navbar, footer, and GIUVA AI widget.
- Accessibility tests for keyboard navigation, focus order, labels, skip link, reduced motion, and color contrast.
- Visual regression or screenshot smoke tests for core pages.
- Responsive layout tests for mobile and desktop.

### Backend

- Unit tests for `create_access_token`, password hashing, password verification, settings parsing, and CORS origin parsing.
- API tests for `/health`, `/api/v1/auth/login`, volunteer schema, project pulse dashboard, journey schema, partner categories, and civil response scope.
- Negative authentication tests proving invalid credentials do not receive tokens once auth is hardened.
- Authorization tests for future protected routes.
- Validation tests for Pydantic schemas, especially email, password, enum, and future input limits.
- Database session tests.
- SQLAlchemy model tests.
- Alembic migration tests after migrations are created.
- Integration tests with PostgreSQL or an approved isolated database strategy.
- Error-handling tests.
- Security regression tests for default secrets and unsafe production settings.

### Repository / Release

- CI workflow validation.
- Clean install reproducibility test.
- Dependency audit checks for npm and Python.
- Release checklist automation.
- Coverage reporting.
- Test artifacts policy.
- Required status checks for pull requests.

## 4. CI Readiness

Current CI readiness is low.

Findings:

- No repository-level `.github` directory was found.
- No GitHub Actions workflow was found.
- No test command exists in `package.json`.
- No standalone frontend `typecheck` command exists.
- No backend test command exists.
- No backend dependency lockfile was found.
- No Python test framework is configured.
- No CI cache strategy is documented.
- No matrix strategy is defined for Node/Python versions.
- No dependency audit gate exists.
- No release gate workflow exists.

Positive readiness factors:

- `package-lock.json` exists, enabling reproducible frontend installs with `npm ci`.
- Frontend lint and build scripts already exist.
- Backend `pyproject.toml` contains Ruff/Pyright configuration sections that can become CI checks later.
- Docker Compose defines PostgreSQL, which can support future backend integration tests.
- `.gitignore` already excludes common generated artifacts after R2-002.

Recommended future CI shape:

- Checkout.
- Setup Node.
- Run `npm ci`.
- Run frontend lint.
- Run frontend typecheck once a script exists.
- Run frontend build.
- Run frontend tests once a test suite exists.
- Setup Python.
- Install backend dependencies from a reproducible lock or constraints file.
- Run Ruff.
- Run Pyright.
- Run pytest.
- Start PostgreSQL service for backend integration/database tests.
- Run dependency audit.
- Upload coverage/test artifacts.

## 5. Release Validation Readiness

Release validation readiness is incomplete.

Current release-gate evidence:

- GIUVA CORE v1.0 defines release requirements and a checklist.
- Frontend has lint/build commands that can become release gates.
- Repository hygiene is improved from R2-002.

Current blockers:

- No CI enforces lint/build.
- No tests enforce public route behavior.
- No tests enforce frontend form mock safety.
- No tests enforce GIUVA non-emergency and no-fake-partnership boundaries.
- No tests enforce sitemap/robots/metadata.
- No tests enforce backend health/API behavior.
- No tests enforce backend auth security.
- No database/migration validation exists.
- No dependency audit gate exists.
- No accessibility verification exists.
- No documented release procedure ties GIUVA CORE v1.0 to automated checks.

Release validation should not be considered production-ready until the critical checks in this report are implemented and made mandatory.

## 6. GIUVA CORE Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| `CORE-FRONTEND-001` Build Integrity | WARNING | `npm run build` exists, but this task did not run it and CI does not enforce it. |
| Frontend ESLint | WARNING | `npm run lint` exists with zero-warning policy, but CI does not enforce it. |
| Frontend TypeScript | WARNING | Strict TypeScript is configured, but no standalone typecheck script exists. |
| Component testing readiness | FAIL | No component test framework or tests were found. |
| Page testing readiness | FAIL | No public route/page tests were found. |
| Accessibility testing readiness | FAIL | No automated accessibility test setup or manual accessibility report was found. |
| Backend unit testing | FAIL | No backend test framework or unit tests were found. |
| Backend integration testing | FAIL | No integration test harness exists. |
| API testing | FAIL | No API route tests exist. |
| Database testing | FAIL | No migrations or DB tests exist. |
| Authentication testing | FAIL | Prototype auth is untested and currently unsafe per R2-004. |
| Validation testing | FAIL | No schema/input validation tests exist. |
| Existing test structure | FAIL | No `tests/`, `backend/tests/`, or equivalent structure found. |
| Existing test commands | FAIL | No `test` command in `package.json`; no backend test command. |
| Existing CI configuration | FAIL | No repository-level GitHub Actions workflow found. |
| GitHub Actions readiness | WARNING | Tooling can support workflows, but workflow files and commands are absent. |
| Build reproducibility | WARNING | Frontend has lockfile; backend has no lockfile. |
| Dependency audit readiness | WARNING | npm audit can be run manually; no automated audit gate and no Python audit setup. |
| Release validation process | FAIL | GIUVA CORE checklist exists, but no automated release validation exists. |
| Smoke tests | FAIL | No smoke test suite found. |
| Regression testing | FAIL | No regression tests found. |
| Test coverage strategy | FAIL | No coverage tool, threshold, or strategy found. |
| `CORE-TEST-001` Baseline Automated Checks | FAIL | Repeatable automated checks are not complete and not CI-enforced. |
| `CORE-TEST-002` Public Route Smoke Tests | FAIL | No route smoke tests exist. |
| `CORE-TEST-003` Form and Privacy Tests | FAIL | No form/privacy tests exist. |

Overall GIUVA CORE test/CI compliance: FAIL.

## 7. Test Strategy Roadmap

### Critical

- Add CI workflow that runs at least frontend install, lint, and build.
- Add a `test` command contract for frontend and backend, even if initially minimal after approval.
- Add public route smoke tests for required GIUVA CORE pages.
- Add backend health and auth tests, especially invalid login behavior after auth hardening.
- Add dependency audit gate for npm and Python.
- Add release gate documentation that maps GIUVA CORE checklist items to automated checks.

### High

- Add frontend component test framework and tests for navbar, footer, mock forms, newsletter, FAQ accordion, breadcrumbs, cards, and GIUVA AI widget.
- Add form tests proving mock forms do not submit network requests and require consent.
- Add dynamic route tests for discipline and news slugs.
- Add FastAPI API tests for placeholder endpoints and future real endpoints.
- Add backend settings tests for environment parsing and unsafe production defaults.
- Add Python Ruff/Pyright commands and CI steps.
- Add database migration validation once migrations exist.

### Medium

- Add Playwright or equivalent browser smoke tests for desktop/mobile navigation.
- Add accessibility test suite using automated checks plus manual QA checklist.
- Add visual regression snapshots for key public pages.
- Add sitemap, robots, canonical, and metadata tests.
- Add coverage reporting and minimum thresholds.
- Add test fixtures for centralized content data.
- Add performance budget checks for build output and core route loading.

### Low

- Add PR templates requiring test evidence.
- Add release note checklist for manual QA.
- Add test naming conventions and test ownership documentation.
- Add local developer test guide.
- Add scheduled dependency audit workflow.
- Add optional nightly full browser regression workflow.

## 8. Future Test Tasks

- R2-005A: Define test command contract for frontend and backend.
- R2-005B: Create GitHub Actions baseline for install, lint, and build.
- R2-005C: Add frontend public route smoke tests.
- R2-005D: Add frontend component test framework and initial component tests.
- R2-005E: Add mock form and newsletter validation tests.
- R2-005F: Add accessibility test baseline and manual audit checklist.
- R2-005G: Add backend pytest setup and health endpoint tests.
- R2-005H: Add backend auth security tests after R2-004 auth remediation.
- R2-005I: Add API contract tests for all current FastAPI routes.
- R2-005J: Add database/migration test plan after R2-006 backend readiness.
- R2-005K: Add dependency audit workflow for npm and Python.
- R2-005L: Add GIUVA CORE release validation workflow.
- R2-005M: Add coverage reporting and minimum threshold policy.
- R2-005N: Add Playwright desktop/mobile smoke tests.
- R2-005O: Add visual regression policy for public pages.

## 9. Test & CI Readiness Score

| Category | Score | Rationale |
| --- | ---: | --- |
| Frontend Testing | 2/10 | Lint/build scripts exist, but no component, page, form, accessibility, or browser tests exist. |
| Backend Testing | 1/10 | Ruff/Pyright config exists, but no test framework, tests, or scripts exist. |
| API Testing | 1/10 | FastAPI routes exist, but no route tests or contract tests exist. |
| Build Validation | 5/10 | Frontend build command exists and lockfile supports reproducible installs; no CI enforcement and backend build/check command is absent. |
| Release Validation | 2/10 | GIUVA CORE checklist exists, but it is not automated or tied to required checks. |
| CI/CD Readiness | 1/10 | No repository CI workflow exists. |
| Overall Quality Assurance | 2/10 | Current QA depends mostly on manual inspection and ad hoc local commands. |

Overall test and CI readiness: 2/10.

## 10. Final Recommendations

The repository is not test/CI ready for a production release. It has the beginning of a frontend validation surface through lint and build scripts, but no automated test coverage and no CI enforcement. Backend quality assurance is essentially absent: there are no tests for health, auth, validation, API routes, database behavior, or migrations.

Recommended sequence:

1. Establish CI with current non-invasive checks: `npm ci`, `npm run lint`, and `npm run build`.
2. Define frontend and backend test command contracts.
3. Add route smoke tests for GIUVA CORE public pages.
4. Add backend health/API/auth tests.
5. Add form/privacy tests before any real data collection.
6. Add accessibility and browser smoke tests before public Release 1.0.
7. Add dependency audit and release validation gates.

No implementation was performed in R2-005. Approval is required before creating tests, workflows, commands, dependencies, or source/configuration changes.

