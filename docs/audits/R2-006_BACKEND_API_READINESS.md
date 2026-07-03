# R2-006 Backend API Readiness and Persistence Plan

Repository: `C:\GIUVA-PROJECTS\GIUVA-ROMANIA`  
Mode: Analysis and planning only  
Audit date: 2026-07-02  
Scope: Static inspection of backend architecture, API routes, schemas, models, configuration, database setup, Alembic, and GIUVA CORE v1.0 requirements. No source files, configuration files, API routes, SQLAlchemy models, migrations, database state, dependencies, or implementation code were modified.

## 1. Backend Architecture Overview

The backend is a FastAPI scaffold under `backend/app`. It has a recognizable modular structure:

- `backend/app/main.py`: FastAPI app factory, CORS middleware, API router registration, and `/health`.
- `backend/app/api/router.py`: API v1 router composition.
- `backend/app/api/routes/`: route modules for auth, volunteers, project pulse, journey, partners, and civil response.
- `backend/app/core/config.py`: Pydantic Settings configuration.
- `backend/app/core/security.py`: password hashing helpers and JWT creation.
- `backend/app/db/`: SQLAlchemy declarative base, UUID/timestamp mixins, async engine/session factory.
- `backend/app/models/`: SQLAlchemy domain models.
- `backend/app/schemas/`: Pydantic response/auth schemas.
- `backend/app/services/`: currently empty except `__init__.py`.
- `backend/alembic/`: Alembic environment and empty versions directory.

Architectural strengths:

- Clear backend folder separation exists.
- FastAPI app factory pattern is present.
- API version prefix is configurable through `api_v1_prefix`, defaulting to `/api/v1`.
- Router modules are separated by domain.
- Pydantic Settings is used for environment configuration.
- SQLAlchemy async engine/session setup exists.
- UUID primary keys and timestamp mixins are centralized.
- Alembic is configured to use SQLAlchemy metadata.
- PostgreSQL is explicitly targeted; SQLite is intentionally avoided.

Architectural limitations:

- Route handlers do not use dependency injection for database sessions.
- Service/repository layer is not implemented.
- No business logic layer exists.
- No real create/update/read persistence flow exists.
- Most endpoints return static dictionaries instead of database-backed responses.
- No application-level exception handling strategy exists.
- No logging, monitoring, or audit logging layer exists.
- No authorization dependencies exist.
- No production environment hardening exists for unsafe defaults.

## 2. Existing API Inventory

Total inspected endpoints: 7.

| Method | Path | Module | Current Behavior | Readiness |
| --- | --- | --- | --- | --- |
| GET | `/health` | `backend/app/main.py` | Returns `{"status": "ok", "service": settings.app_name}`. | Useful basic health check, but no DB readiness. |
| POST | `/api/v1/auth/login` | `auth.py` | Accepts `LoginRequest`, returns JWT for any non-empty email/password. | Not production-safe. |
| GET | `/api/v1/volunteers/schema` | `volunteers.py` | Returns planned volunteer module features/tables. | Placeholder/info endpoint. |
| GET | `/api/v1/project-pulse/dashboard` | `project_pulse.py` | Returns static metrics and tables. | Placeholder/static endpoint. |
| GET | `/api/v1/journey/schema` | `journey.py` | Returns planned content models/tables and `cms_ready`. | Placeholder/info endpoint. |
| GET | `/api/v1/partners/categories` | `partners.py` | Returns static partner categories. | Simple static endpoint. |
| GET | `/api/v1/civil-response/scope` | `civil_response.py` | Returns allowed/not-allowed civil response scope. | Useful safety-boundary endpoint. |

API design assessment:

- API versioning exists through `/api/v1`.
- Domain router organization is clear.
- Current route naming is mostly understandable.
- Only `/auth/login` uses a Pydantic request model and response model.
- Other endpoints return untyped dictionaries and do not declare response models.
- There are no create/update/delete endpoints.
- There is no pagination, filtering, sorting, or list/read-by-id pattern.
- There is no consistent error response model.
- There is no OpenAPI documentation customization beyond FastAPI defaults.
- There is no environment gating for `/docs` or OpenAPI exposure.
- There are no protected endpoints.
- REST consistency is not yet established because most endpoints are placeholders.

Request validation:

- `LoginRequest` validates email using `EmailStr`.
- Password has no length, complexity, or rate-limit enforcement.
- No other endpoint accepts request bodies.
- No create/update schemas exist for domain objects.

Response model readiness:

- `Token` is used for login.
- `VolunteerRead`, `TrainingRead`, `EventRead`, `CampaignRead`, `SponsorRead`, `StoryRead`, and `PartnerRead` exist but are not used by routes.
- No response models exist for static schema/dashboard/scope endpoints.
- No standardized envelope/error shape exists.

## 3. Persistence Layer Assessment

Persistence components:

- `Base`: SQLAlchemy declarative base.
- `UUIDPrimaryKeyMixin`: UUID primary keys with `uuid4`.
- `TimestampMixin`: timezone-aware `created_at` and `updated_at`.
- `engine`: async SQLAlchemy engine using `settings.database_url`.
- `AsyncSessionLocal`: async sessionmaker.
- `get_session`: async session dependency generator.
- Alembic metadata target: `Base.metadata`.

Declared SQLAlchemy tables:

| Table | Model | Purpose |
| --- | --- | --- |
| `users` | `User` | Auth/user identity with email, hashed password, role, active state. |
| `volunteers` | `Volunteer` | Volunteer profile/status/training level/QR code. |
| `trainings` | `Training` | Training records. |
| `events` | `Event` | Event participation metadata. |
| `campaigns` | `Campaign` | Project Pulse campaign metrics. |
| `sponsors` | `Sponsor` | Sponsor/contribution/visibility data. |
| `partners` | `Partner` | Partner metadata and visibility. |
| `stories` | `Story` | Journey story/content records. |
| `galleries` | `Gallery` | Journey gallery image/caption arrays. |
| `preparedness_resources` | `PreparednessResource` | Civil/preparedness resources. |
| `training_calendar_items` | `TrainingCalendarItem` | Civil/preparedness training calendar. |

Persistence strengths:

- Domain coverage is broad and aligned with GIUVA modules.
- PostgreSQL-specific types are intentionally used, including UUID and ARRAY.
- Unique/index constraints exist for user email, volunteer email, volunteer QR code, and story slug.
- Enum types define roles, volunteer status, campaign status, partner category, and visibility.
- Alembic is configured to autogenerate from imported model metadata.

Persistence gaps:

- Alembic `versions` directory is empty; no initial migration exists.
- No route uses `Depends(get_session)`.
- No queries, transactions, commits, rollbacks, or refreshes were found.
- No repository/service layer exists.
- No create/update Pydantic schemas exist.
- No validation constraints exist for many important fields beyond database string lengths.
- No ORM `relationship()` mappings were found.
- Foreign keys exist for `Volunteer.user_id` and `Gallery.story_id`, but relationships/cascades are not declared.
- `Training` and `Event` are not linked to volunteers through association tables or foreign keys.
- Campaigns and sponsors are not relationally linked.
- Partners and sponsors are separate without defined integration rules.
- Data retention, consent logging, deletion/export, and audit tables are absent.
- No transaction boundary pattern is documented.
- No database seed strategy exists.
- No migration runbook beyond basic Alembic commands exists.
- No database test harness exists.

Data consistency concerns:

- Public metrics could drift from persisted facts because dashboard endpoint is currently static.
- Duplicate email constraints exist for users and volunteers but no synchronization or identity-linking workflow is defined.
- Volunteer status, campaign status, and visibility enums are useful but no state-transition rules exist.
- Financial fields use `Numeric(12, 2)`, which is appropriate directionally, but no currency, audit trail, or immutable transaction model exists.
- Gallery images/captions use parallel arrays, which can become inconsistent without validation.

## 4. Production Readiness

Current production readiness is low.

Ready or partially ready:

- FastAPI app can be instantiated.
- Basic health endpoint exists.
- CORS is configurable.
- PostgreSQL is the intended database.
- Docker Compose can start local PostgreSQL.
- Alembic is present and pointed at model metadata.
- Pydantic Settings is used.
- Password hashing utilities exist.

Not production-ready:

- Authentication is unsafe and prototype-only.
- Authorization is absent.
- No protected endpoints exist.
- No migration exists.
- No database-backed endpoint exists.
- No persistence service/repository layer exists.
- No backend tests exist.
- No CI backend checks exist.
- No logging/monitoring/audit logging exists.
- No structured error handling exists.
- No rate limiting exists.
- No security headers or API exposure policy exists.
- No production secret enforcement exists.
- No OpenAPI/docs exposure policy exists.
- No GDPR production workflow exists.
- No backup/restore or migration rollback procedure exists.
- No deployment/runbook documentation exists.

Operational readiness by area:

| Area | Current State |
| --- | --- |
| Health endpoints | Basic process health only. |
| Database readiness | No DB health/readiness endpoint. |
| Logging | No application logger strategy found. |
| Monitoring | No metrics/tracing/readiness hooks found. |
| Error handling | FastAPI defaults only; no standardized errors. |
| Scalability | Async stack can scale later, but no real workload paths exist. |
| Performance | No query patterns yet; future indexes and pagination are undefined. |
| Microservice readiness | Domain modules are separated, but contracts/events/integration boundaries are not defined. |

## 5. Critical Gaps

1. Prototype authentication is unsafe.
   - `/auth/login` issues JWTs for any non-empty email/password.
   - This blocks public backend exposure.

2. Authorization does not exist.
   - No current-user dependency.
   - No route protection.
   - No permission policy.

3. Persistence is not integrated with the API.
   - Models exist, but routes do not query or mutate the database.
   - `get_session` exists but is unused.

4. No migrations exist.
   - Alembic is configured, but `backend/alembic/versions` is empty.
   - Production schema cannot be reproduced safely.

5. No backend tests exist.
   - Health, auth, route contracts, settings, database, and migrations are untested.

6. No production privacy workflow exists.
   - Consent, retention, export, deletion, and audit logging are absent.

7. No operational controls exist.
   - Logging, monitoring, structured errors, rate limiting, and readiness probes are missing.

8. No API contract strategy exists.
   - Response models are unused for most endpoints.
   - Write schemas are missing.
   - Error models and status code policy are missing.

## 6. GIUVA CORE Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| FastAPI structure | WARNING | Clear scaffold exists, but service/repository layers are empty. |
| Router organization | PASS | Domain routers are separated and mounted under `/api/v1`. |
| Dependency injection | WARNING | Settings and session dependency exist, but DB/auth dependencies are not used by routes. |
| Settings | WARNING | Pydantic Settings is present; unsafe production defaults remain. |
| Configuration management | WARNING | Env support exists, but no production validation/fail-fast. |
| Layer separation | WARNING | Folders exist, but business/data-access layers are not implemented. |
| Existing endpoints | WARNING | Endpoints exist, but most are static placeholders. |
| Endpoint consistency | WARNING | Router prefixes are consistent; response models and REST patterns are not. |
| Request validation | WARNING | Login email validation exists; domain create/update validation is absent. |
| Response models | WARNING | Token response model exists; platform read schemas are not wired to routes. |
| Error handling | FAIL | No standardized error model or handler strategy. |
| API versioning | PASS | `/api/v1` prefix is configurable and used. |
| REST consistency | WARNING | Current API is too placeholder-heavy to validate mature REST consistency. |
| Documentation readiness | WARNING | FastAPI docs exist by default; API contracts are not production documented. |
| JWT readiness | FAIL | JWT creation exists, but unsafe login/default secret make it non-production-ready. |
| Authorization readiness | FAIL | No route protection or permissions. |
| User model | WARNING | User model exists, but no persistence/auth workflow uses it. |
| Roles | WARNING | Role enum exists, but roles are not enforced. |
| Permissions | FAIL | No permission model or policy exists. |
| Protected endpoints | FAIL | No protected endpoints exist. |
| SQLAlchemy models | WARNING | Models exist and cover many domains, but relationships and constraints are incomplete. |
| Database schema | FAIL | No generated/applied migration proves schema readiness. |
| Relationships | WARNING | Some foreign keys exist; ORM relationships/cascades are missing. |
| Alembic readiness | WARNING | Alembic is configured, but no migrations exist. |
| Migration strategy | FAIL | No initial migration, rollback, or release migration process exists. |
| Transactions | FAIL | No transaction pattern is used or documented. |
| Repository pattern | FAIL | No repository/data-access layer exists. |
| Data consistency | WARNING | Some constraints exist; domain invariants/state transitions are undefined. |
| Health endpoints | WARNING | Basic `/health` exists; DB readiness is absent. |
| Logging | FAIL | No backend logging strategy found. |
| Monitoring readiness | FAIL | No metrics/tracing/readiness hooks found. |
| Scalability | WARNING | Async stack is a good base; pagination, indexing, caching, and workload design are missing. |
| Performance considerations | WARNING | No real queries yet; indexes/pagination need future design. |
| Future microservice readiness | WARNING | Domain modules exist; service boundaries/contracts are not mature. |
| `CORE-SECURITY-001` Authentication safety | FAIL | Login issues tokens without real credential verification. |
| `CORE-SECURITY-002` Secret management | FAIL | Default JWT secret and local DB password defaults remain. |
| `CORE-SECURITY-003` CORS/API exposure | WARNING | CORS configurable but broad methods/headers/credentials require hardening. |
| `CORE-BACKEND-001` API contract clarity | WARNING | Placeholder routes are labelled by behavior but production contracts are incomplete. |
| `CORE-BACKEND-002` Persistence readiness | FAIL | Models exist but no migrations or production data workflow. |
| `CORE-BACKEND-003` Operational health | WARNING | Basic health exists; DB readiness is absent. |
| `CORE-PRIVACY-003` Production data workflow | FAIL | No consent logging, retention, deletion/export, or audit tables/workflows. |
| `CORE-TEST-001` Baseline automated checks | FAIL | No backend test command or CI backend checks. |

Overall GIUVA CORE backend compliance: FAIL for production readiness. The backend is a useful scaffold but not a production API.

## 7. Backend Roadmap

### Critical

- Disable, protect, or replace prototype `/auth/login` before any public backend exposure.
- Define authentication and authorization dependencies.
- Create initial Alembic migration for approved active models.
- Add backend test baseline for health, auth, settings, and route contracts.
- Define production settings validation for JWT secret, database URL, CORS origins, and environment.
- Keep real data collection disabled until privacy/GDPR persistence is designed.

### High

- Define API contract standards: request schemas, response schemas, error model, status codes, pagination, filtering, and versioning policy.
- Implement service/repository boundaries before adding database-backed routes.
- Add create/read/update schemas for volunteers, contacts, partners, newsletter, stories, campaigns, and preparedness resources.
- Add database-backed volunteer/contact/partner workflows only after consent and audit requirements are defined.
- Add database readiness health check.
- Define migration runbook, rollback strategy, and release process.
- Add structured logging and PII redaction policy.
- Add authorization tests and route protection.

### Medium

- Add ORM relationships and cascade rules where domain relationships are real.
- Add domain state-transition rules for volunteer status, campaign status, partner visibility, and publication status.
- Add indexes for expected query paths.
- Add pagination and filtering for list endpoints.
- Add OpenAPI metadata, tags, examples, and operation IDs.
- Add rate limiting and abuse protection for public write endpoints.
- Add monitoring/metrics/tracing hooks.
- Add seed/dev data strategy for local development and tests.

### Low

- Add API changelog and deprecation policy.
- Add repository/service naming conventions.
- Add background job strategy for email/notifications/export tasks.
- Add future microservice boundary notes for content, volunteers, fundraising, and civil-preparedness modules.
- Add admin/API dashboard readiness notes.

## 8. Future Backend Tasks

- R2-006A: Backend API contract standard.
- R2-006B: Backend auth exposure control for prototype login.
- R2-006C: Authentication and authorization dependency design.
- R2-006D: Initial Alembic migration plan and schema review.
- R2-006E: Backend service/repository layer design.
- R2-006F: Volunteer/contact persistence workflow design.
- R2-006G: GDPR consent logging and retention schema design.
- R2-006H: Backend health/readiness endpoint design.
- R2-006I: Backend error model and exception handling design.
- R2-006J: Backend logging, audit logging, and PII redaction plan.
- R2-006K: Backend test baseline implementation plan.
- R2-006L: API pagination/filtering/versioning plan.
- R2-006M: Database relationship and constraint review.
- R2-006N: Project Pulse persistence and financial audit model plan.
- R2-006O: Journey/CMS persistence plan.
- R2-006P: Civil Response safety-boundary API plan.
- R2-006Q: Backend deployment and migration runbook.
- R2-006R: OpenAPI documentation hardening plan.

## 9. Backend Readiness Score

| Category | Score | Rationale |
| --- | ---: | --- |
| Architecture | 5/10 | Good folder structure and app/router/config/db separation, but service/repository/business layers are not implemented. |
| API Design | 3/10 | API versioning and domain routers exist, but endpoints are mostly placeholders and lack consistent contracts. |
| Persistence | 3/10 | SQLAlchemy models and async session exist, but routes do not use persistence and no repositories/services exist. |
| Authentication | 1/10 | JWT helper exists, but login is unsafe and does not verify credentials. |
| Authorization | 1/10 | Roles exist as enum values but are not enforced anywhere. |
| Database Readiness | 2/10 | PostgreSQL/Alembic are configured, but no migrations or DB-backed workflows exist. |
| Scalability | 4/10 | Async foundations help, but no pagination, query patterns, monitoring, or workload strategy exists. |
| Maintainability | 5/10 | The scaffold is understandable, but unused schemas/models and empty service layer create drift risk. |
| Overall Backend Readiness | 3/10 | Suitable as a prototype scaffold; not ready for production API exposure or real data collection. |

## 10. Final Recommendations

The backend should remain non-public or explicitly prototype-only until the critical gaps are resolved. The current structure is a reasonable starting point, but production readiness requires authentication hardening, authorization, migrations, database-backed workflows, tests, operational logging, privacy persistence, and API contract discipline.

Recommended immediate sequence:

1. Freeze public backend exposure until prototype auth is disabled or replaced.
2. Define API contract standards before adding new endpoints.
3. Create an approved persistence/migration plan before real data collection.
4. Add backend tests for health, settings, auth, and route contracts.
5. Add service/repository boundaries before implementing database-backed workflows.
6. Add GDPR consent/audit/retention design before enabling forms.
7. Add operational readiness: logging, error handling, readiness checks, monitoring, and deployment runbook.

No implementation was performed in R2-006. Approval is required before modifying routes, models, migrations, configuration, dependencies, database state, or production behavior.

