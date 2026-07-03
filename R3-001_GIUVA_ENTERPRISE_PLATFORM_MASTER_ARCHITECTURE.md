# R3-001 - GIUVA Enterprise Platform Master Architecture

Repository: `C:\GIUVA\03-WEBSITES\GIUVA-ROMANIA`  
Mode: Architecture only. No implementation.  
Scope: Enterprise blueprint for the complete GIUVA ecosystem: GIUVA Romania, GIUVA Italia, GIUVA España, GIUVA Europe, and future country organizations.

## 1. Executive Vision

The GIUVA Enterprise Platform must become a multi-country civic technology platform, not a country-specific website. It must support local community action while preserving a unified European identity, governance model, compliance baseline, and operational standard.

The target platform should allow GIUVA Europe to coordinate strategy, standards, reporting, and compliance while each country organization manages its own communities, volunteers, programs, partners, sponsors, content, events, documents, and communications.

The platform must be designed for phased implementation. Romania can remain the first operational country instance, but the architecture must avoid Romania-only assumptions in identity, database schema, routing, authorization, content, reporting, or deployment.

Strategic goals:

- Build one shared enterprise platform for all GIUVA countries.
- Support country autonomy with European-level governance.
- Keep civic, educational, preventive, social, and community positioning clear.
- Avoid emergency-service, public-authority, or unauthorized partnership claims.
- Enable future expansion without re-architecting the platform.
- Protect personal data and volunteer records from day one.
- Create auditable workflows for trust, transparency, and compliance.

## 2. Architecture Principles

Core architecture principles:

- Multi-tenant by design: every major domain object must belong to an organization scope.
- Europe-first governance: GIUVA Europe defines shared standards, roles, compliance rules, and reporting models.
- Country-local execution: country teams manage local content, volunteers, programs, partners, and operations.
- Least privilege: users receive only the permissions needed for their role and scope.
- Auditability: sensitive actions must be logged with actor, timestamp, organization scope, before/after state, and reason where applicable.
- Privacy by design: personal data must be minimized, consented, retained only as needed, and exportable/deletable under GDPR rules.
- API-first: frontend, admin, partner portals, mobile apps, and future integrations must consume documented APIs.
- Modular monolith first: R3 should prefer a well-structured modular backend before microservices.
- Event-ready architecture: domain events should be introduced where future integrations need asynchronous processing.
- No hidden country assumptions: labels, languages, currencies, legal entities, and routes must be configurable by tenant/country.
- Safe civic language: the product must not imply public authority, emergency dispatch, medical/legal advice, or operational incident command.

## 3. Technology Stack

Recommended stack direction:

| Layer | Recommended Technology | Rationale |
| --- | --- | --- |
| Public frontend | Next.js, React, TypeScript | Existing project stack; strong routing, metadata, SSR/SSG support. |
| Admin frontend | Next.js or internal app route group | Shared components and auth integration. |
| Backend API | FastAPI, Python | Existing scaffold; good OpenAPI and async support. |
| Database | PostgreSQL | Strong relational modeling, JSONB, indexes, constraints, audit support. |
| ORM/migrations | SQLAlchemy, Alembic | Existing scaffold; migration discipline required. |
| Authentication | OIDC-compatible internal auth or managed identity provider | Must support MFA, SSO, role claims, and country scopes. |
| Authorization | Application RBAC/ABAC layer | Must enforce organization hierarchy and object ownership. |
| Storage | S3-compatible object storage | Media library, documents, certificates, exports. |
| Queue/events | Redis/RQ, Celery, or managed queue | Notifications, email, media processing, audit export. |
| Email | Transactional email provider | Verification, invitations, notifications, double opt-in. |
| Observability | Structured logs, metrics, tracing, error reporting | Production operations and incident response. |
| CI/CD | GitHub Actions or equivalent | Release gates, lint, tests, build, deploy checks. |

R3 should not start by adding unnecessary infrastructure. It should first stabilize app architecture, schema, auth, CI, and deployment documentation.

## 4. Application Layers

The platform should be organized into clear layers:

1. Public Web Layer
   - Country public websites.
   - GIUVA Europe public website.
   - SEO, content, events, programs, news, transparency pages.

2. Member and Volunteer Portal
   - Volunteer profile.
   - Applications.
   - Program participation.
   - Training records.
   - Certifications.
   - Documents.
   - Notifications.

3. Admin and Operations Portal
   - Country administrators.
   - Regional/city/community coordinators.
   - Program managers.
   - Partner/sponsor managers.
   - Document and content editors.

4. Backend API Layer
   - Versioned REST APIs.
   - OpenAPI documentation.
   - Authentication and authorization dependencies.
   - Validation and error models.

5. Domain Service Layer
   - Business workflows.
   - State transitions.
   - Consent, audit, membership, project, event, and training rules.

6. Persistence Layer
   - PostgreSQL schema.
   - Alembic migrations.
   - Repository/query services.
   - Transaction boundaries.

7. Integration Layer
   - Email.
   - Storage.
   - Payments/donations.
   - GKMS.
   - Future AI services.
   - Analytics/reporting exports.

## 5. Backend Modules

Recommended backend module structure:

- `identity`: users, profiles, credentials, MFA state, account status.
- `organizations`: Europe, countries, regions, cities, communities.
- `auth`: login, token/session management, invitations, password reset.
- `rbac`: roles, permissions, grants, scopes.
- `volunteers`: applications, lifecycle, status, profile, availability.
- `programs`: high-level GIUVA program areas.
- `disciplines`: discipline definitions and country availability.
- `projects`: civic initiatives, campaigns, workstreams, milestones.
- `events`: events, registrations, attendance, public/private visibility.
- `training`: courses, sessions, enrollment, completion.
- `certifications`: certificates, expiry, validation, revocation.
- `documents`: public/internal documents, versioning, approvals.
- `communications`: announcements, newsletters, templates.
- `notifications`: user notifications, email jobs, delivery status.
- `media`: assets, metadata, rights, storage references.
- `partners`: partner profiles, agreements, visibility, review status.
- `sponsors`: sponsorships, contributions, reporting, restrictions.
- `membership`: member status, dues if applicable, renewals.
- `donations`: donations, campaigns, receipts, payment status.
- `analytics`: metrics, dashboards, aggregates.
- `reporting`: official reports, exports, public transparency reports.
- `audit`: audit log, security events, privacy events.
- `gdpr`: consent, data requests, retention, erasure, export.
- `integrations`: GKMS, email, storage, payments, future AI.

## 6. Authentication Architecture

Authentication must support both public users and internal operators.

User types:

- Public visitor.
- Registered volunteer.
- Member.
- Community coordinator.
- City coordinator.
- Regional coordinator.
- Country administrator.
- Europe administrator.
- Content editor.
- Partner/sponsor contact.
- Auditor/compliance reviewer.

Authentication requirements:

- No production token may be issued without real credential verification.
- Passwords must be hashed with modern algorithms.
- MFA should be supported for privileged roles.
- Invitation-based onboarding should be available for staff/coordinators.
- Sessions/tokens must include subject, role claims, organization scope, expiry, and token ID.
- Refresh-token strategy must be explicit if used.
- Account states must include pending, active, suspended, deactivated, and deleted/anonymized.
- Authentication events must be audit logged.

R3 minimum:

- Disable prototype login or replace it with real credential verification.
- Add negative authentication tests.
- Add production secret validation.

## 7. Authorization and RBAC

Authorization must combine RBAC with organization scope.

Role examples:

- `EUROPE_SUPER_ADMIN`
- `EUROPE_COMPLIANCE_ADMIN`
- `COUNTRY_ADMIN`
- `COUNTRY_CONTENT_MANAGER`
- `REGION_COORDINATOR`
- `CITY_COORDINATOR`
- `COMMUNITY_LEADER`
- `PROGRAM_MANAGER`
- `TRAINING_MANAGER`
- `EVENT_MANAGER`
- `PARTNER_MANAGER`
- `SPONSOR_MANAGER`
- `VOLUNTEER`
- `MEMBER`
- `AUDITOR`

Permission examples:

- `organization.read`
- `organization.manage`
- `volunteer.read`
- `volunteer.approve`
- `volunteer.suspend`
- `event.create`
- `event.publish`
- `training.complete`
- `document.approve`
- `partner.publish`
- `donation.read`
- `report.export`
- `audit.read`
- `gdpr.request.process`

Scope rules:

- Europe roles may access all countries based on permission.
- Country roles may access only their country.
- Regional roles may access assigned regions.
- City roles may access assigned cities.
- Community roles may access assigned communities.
- Volunteers may access their own profile and assigned public/volunteer resources.

## 8. Organization Hierarchy: Europe, Country, Region, City, Community

Required hierarchy:

- GIUVA Europe
  - GIUVA Romania
    - Regions
      - Cities
        - Communities
  - GIUVA Italia
  - GIUVA España
  - Future countries

Core organization fields:

- ID.
- Parent organization ID.
- Type: Europe, country, region, city, community.
- Country code.
- Locale defaults.
- Timezone.
- Currency.
- Legal status.
- Public status.
- Contact details.
- Governance owner.
- Active/inactive state.

Design rule:

Every volunteer, event, project, training record, partner, sponsor, document, media asset, and report must be associated with an organization scope.

## 9. Volunteer Lifecycle

Volunteer lifecycle stages:

1. Visitor.
2. Interested contact.
3. Applicant.
4. Consent captured.
5. Pending review.
6. Approved volunteer.
7. Assigned to community/program.
8. Training in progress.
9. Active volunteer.
10. Temporarily inactive.
11. Suspended.
12. Archived.
13. Deleted/anonymized under GDPR where applicable.

Required lifecycle controls:

- Application source.
- Consent version.
- Review decision.
- Reviewer identity.
- Status history.
- Assigned organization scope.
- Discipline interests.
- Skills and availability.
- Training status.
- Certification status.
- Audit log for status changes.

## 10. Programs

Programs are high-level civic areas managed at Europe or country level.

Program examples:

- Civic Volunteering.
- Community & Social.
- Preparedness and Prevention.
- Academy and Training.
- Youth.
- Senior Network.
- Project Pulse.
- GIUVA Journey.
- European Cooperation.

Program fields:

- Name.
- Description.
- Owning organization.
- Countries where active.
- Status: draft, roadmap, pilot, active, paused, archived.
- Public visibility.
- Responsible manager.
- Related disciplines.
- KPIs.

## 11. Disciplines

Disciplines are structured operational tracks within programs.

Discipline principles:

- Defined globally when they represent GIUVA standards.
- Activated per country only when legally and operationally appropriate.
- Public wording must avoid emergency-service or public-authority claims.
- Each discipline can define training requirements and participation rules.

Discipline records should include:

- Global discipline ID.
- Localized names and descriptions.
- Country availability.
- Required training.
- Required certifications.
- Visibility status.
- Safety disclaimers.
- Content owner.

## 12. Projects

Projects are time-bound initiatives under a program, discipline, or community.

Project fields:

- Title.
- Organization scope.
- Program/discipline.
- Status: idea, review, approved, active, paused, completed, archived.
- Owner.
- Budget if applicable.
- Milestones.
- Volunteers assigned.
- Partners/sponsors linked.
- Public visibility.
- Impact metrics.
- Documents.
- Audit history.

Project governance:

- Projects must not imply public authority unless formally documented.
- Partnership and sponsor claims require approval.
- Public metrics must be evidence-based.

## 13. Events

Events support public, volunteer-only, partner-only, and internal formats.

Event fields:

- Title.
- Description.
- Organization scope.
- Event type.
- Location or online link.
- Start/end time.
- Timezone.
- Capacity.
- Registration policy.
- Attendance records.
- Visibility status.
- Safety notes.
- Required consent if collecting participant data.

Event workflows:

- Draft.
- Review.
- Published.
- Registration open.
- Completed.
- Attendance confirmed.
- Archived.

## 14. Training

Training module responsibilities:

- Course catalog.
- Training sessions.
- Enrollments.
- Completion tracking.
- Trainer assignments.
- Attendance.
- Materials.
- Assessments if applicable.

Training records must be scoped to organization and user. Completion should be audit logged when it affects eligibility for roles, disciplines, or certifications.

## 15. Certifications

Certification requirements:

- Certification type.
- Issuing organization.
- Holder user/volunteer.
- Issue date.
- Expiry date.
- Status: valid, expired, revoked, pending verification.
- Evidence document reference.
- Verification method.
- Audit log.

Public certificate validation should be optional and privacy-safe.

## 16. Documents

Document module must support:

- Public documents.
- Internal documents.
- Legal documents.
- Policies.
- Reports.
- Training materials.
- Partner/sponsor agreements.
- Templates.

Document controls:

- Versioning.
- Approval workflow.
- Owner.
- Organization scope.
- Visibility.
- Effective date.
- Expiry/review date.
- Storage reference.
- Audit trail.

## 17. Communications

Communications module should support:

- Announcements.
- Newsletters.
- Country updates.
- Community updates.
- Event communications.
- Volunteer lifecycle emails.
- Partner/sponsor communications.

Requirements:

- Template management.
- Localization.
- Consent-aware recipients.
- Delivery tracking.
- Unsubscribe handling.
- Approval workflow for public communications.

## 18. Notifications

Notification channels:

- In-app notifications.
- Email.
- Future SMS or messaging integrations only after approval.

Notification events:

- Application received.
- Application approved/rejected.
- Training assigned.
- Event registration confirmed.
- Certification expiring.
- Document requires approval.
- GDPR request status update.

Notifications must respect user preferences and legal consent.

## 19. Media Library

Media library features:

- Image storage.
- Video metadata, if video is added later.
- Document attachments.
- Alt text.
- Rights/license metadata.
- Country and organization scope.
- Public/private visibility.
- Usage references.
- Replacement history.

Storage should use object storage with database metadata. Public assets should have optimization policy and review workflow.

## 20. Partner Management

Partner records should include:

- Name.
- Type: institution, NGO, academic, corporate, media, community, international.
- Organization scope.
- Country.
- Contact persons.
- Agreement status.
- Public visibility.
- Logo permission.
- Start/end dates.
- Related projects/events.
- Review notes.
- Approval history.

No partner should be publicly displayed without verified authorization.

## 21. Sponsor Management

Sponsor management should be separate from partner management when money, goods, or services are involved.

Sponsor fields:

- Sponsor identity.
- Contribution type.
- Amount/value where applicable.
- Currency.
- Restrictions.
- Campaign/project link.
- Receipt/reporting status.
- Public visibility approval.
- Legal review status.

Sponsor claims must be transparent and auditable.

## 22. Membership

Membership must be configurable by country because legal models may differ.

Membership fields:

- Member profile.
- Organization scope.
- Membership type.
- Start/end date.
- Renewal status.
- Payment/dues status if applicable.
- Voting rights if applicable.
- Consent and policy acceptance.
- Suspension/termination history.

Membership must not be assumed identical across countries.

## 23. Donations

Donation architecture must support future controlled rollout.

Donation requirements:

- Payment provider abstraction.
- Country-specific legal configuration.
- Donor consent.
- Receipt generation.
- Campaign allocation.
- Refund tracking.
- Public reporting.
- Anti-fraud monitoring.
- Data retention policy.

R3 should not implement donations before legal, accounting, GDPR, and payment provider requirements are approved.

## 24. Analytics

Analytics should include operational and public transparency metrics.

Metric categories:

- Volunteer applications.
- Active volunteers.
- Training completion.
- Events created/completed.
- Attendance.
- Projects by status.
- Partner/sponsor counts.
- Donations by campaign, if enabled.
- Content/public engagement, privacy-safe.

Analytics must avoid exposing personal data in dashboards unless access-controlled and justified.

## 25. Reporting

Reporting module should support:

- Internal operational reports.
- Country-level reports.
- Europe-level consolidated reports.
- Public transparency reports.
- GDPR exports.
- Audit exports.
- Partner/sponsor reports.

Reports must be reproducible and tied to date ranges, scope, and filters.

## 26. Audit Log

Audit log is mandatory for enterprise readiness.

Audit events:

- Login success/failure.
- Permission changes.
- User/volunteer status changes.
- Consent changes.
- GDPR request actions.
- Document approvals.
- Partner/sponsor publication approvals.
- Donation changes.
- Training/certification changes.
- Data exports.

Audit fields:

- ID.
- Timestamp.
- Actor user ID.
- Organization scope.
- Entity type.
- Entity ID.
- Action.
- Before/after summary.
- IP/user agent where appropriate.
- Reason/comment where required.

## 27. GDPR

GDPR module must cover:

- Consent records.
- Consent versioning.
- Privacy policy acceptance.
- Data processing purpose.
- Data retention schedule.
- Data export requests.
- Data deletion/anonymization requests.
- Data rectification requests.
- Access logs for personal data.
- Breach/incident process support.

Personal data must be minimized. Public pages and forms must clearly state whether data is stored, emailed, processed, or local-only.

## 28. API Design

API principles:

- Versioned API path: `/api/v1`.
- Consistent resource naming.
- Pydantic request/response schemas.
- Standard error envelope.
- Pagination for lists.
- Filtering and sorting standards.
- Idempotency keys for critical write operations where needed.
- Auth dependency on protected routes.
- RBAC checks at service boundary.
- OpenAPI documentation gated by environment.

Example resource groups:

- `/organizations`
- `/volunteers`
- `/programs`
- `/disciplines`
- `/projects`
- `/events`
- `/training`
- `/certifications`
- `/documents`
- `/partners`
- `/sponsors`
- `/memberships`
- `/donations`
- `/reports`
- `/audit-log`
- `/gdpr`

## 29. Database Principles

Database principles:

- PostgreSQL as system of record.
- UUID primary keys.
- Timestamps on every core table.
- Organization scope on every domain table.
- Explicit foreign keys.
- Alembic migrations required for every schema change.
- No production schema without migration history.
- Soft delete or anonymization policy for personal data.
- Unique constraints for natural identifiers where required.
- Indexes for organization, status, dates, slug, and lookup fields.
- Audit log append-only.

Suggested foundational tables:

- `organizations`
- `users`
- `roles`
- `permissions`
- `role_assignments`
- `volunteer_profiles`
- `consents`
- `programs`
- `disciplines`
- `projects`
- `events`
- `training_courses`
- `training_sessions`
- `certifications`
- `documents`
- `partners`
- `sponsors`
- `memberships`
- `donations`
- `audit_log`
- `gdpr_requests`

## 30. Future AI Integration

AI integration must be future-only until governance exists.

Allowed future AI use cases:

- Portal navigation assistant.
- Internal content drafting helper.
- FAQ assistant based on approved GIUVA content.
- Volunteer onboarding guidance.
- Search and knowledge retrieval.

Restrictions:

- No medical advice.
- No legal advice.
- No emergency response guidance.
- No autonomous decision-making for volunteer approval, discipline assignment, certification, donations, or GDPR requests.
- No training on private user data unless explicitly approved and compliant.

AI must use approved knowledge sources and disclose limitations.

## 31. GKMS Integration

GKMS should be treated as a controlled external knowledge or governance management integration.

Possible integration goals:

- Central GIUVA knowledge base.
- Policy and governance repository.
- Approved public content source.
- Internal operating procedures.
- Training material references.
- AI retrieval source for approved content only.

Integration principles:

- API-based integration.
- Scoped access tokens.
- Audit logged synchronization.
- Content approval state respected.
- No direct publication without workflow.
- GDPR and confidentiality classification respected.

R3 should only define GKMS integration contracts unless the GKMS system is already approved and available.

## 32. Security Model

Security model requirements:

- Secure authentication.
- Scoped RBAC.
- MFA for privileged roles.
- Production secret enforcement.
- Environment-specific CORS.
- Security headers.
- CSP strategy.
- Rate limiting for auth and public forms.
- Input validation.
- Output encoding.
- File upload restrictions before media/document upload is enabled.
- Audit logging.
- Dependency scanning.
- CI security gates.
- Backup encryption.
- Least-privilege database credentials.

Security must be treated as a launch blocker, not a post-launch improvement.

## 33. Deployment Strategy

Recommended deployment phases:

1. Static/public frontend holding page.
2. Public frontend information portal.
3. Private backend staging environment.
4. Admin/auth staging environment.
5. Country pilot with Romania.
6. Europe-level reporting and governance.
7. Additional country rollout.

Deployment requirements:

- Separate environments: local, staging, production.
- Environment variable reference.
- Secret manager.
- CI/CD release gates.
- Database migration step.
- Rollback plan.
- Monitoring and alerting.
- Backup verification.

## 34. Scalability Strategy

Initial scalability approach:

- Modular monolith backend.
- Shared PostgreSQL with organization scoping.
- Clear indexes and query boundaries.
- Background jobs for email, reports, media processing.
- CDN/object storage for public assets.
- Cache read-heavy public content where safe.

Future scalability options:

- Split reporting/analytics workloads.
- Dedicated search service.
- Dedicated media processing service.
- Country-level read replicas if required.
- Event-driven integrations.

Do not introduce microservices before domain boundaries and operational maturity justify them.

## 35. Disaster Recovery

Disaster recovery requirements:

- Database backups.
- Object storage backups or versioning.
- Recovery time objective.
- Recovery point objective.
- Restore runbook.
- Restore test schedule.
- Secret rotation procedure.
- Incident communication plan.
- Access revocation process.
- Audit export retention.

No production database should be used without tested backup and restore procedures.

## 36. Roadmap R3

Recommended R3 focus: foundation implementation.

R3 priorities:

1. CI and release gate baseline.
2. Backend exposure lockdown.
3. Authentication hardening.
4. RBAC foundation.
5. Production secret enforcement.
6. Next.js configuration consolidation.
7. Database migration baseline.
8. API contract baseline.
9. Privacy/GDPR workflow design.
10. Deployment runbook.
11. Public route smoke tests.
12. Accessibility fixes for critical interactions.
13. SEO route matrix and URL centralization.
14. Documentation runbooks.

R3 should avoid donations, public backend launch, admin expansion, and AI features until foundations are stable.

## 37. Roadmap R4

Recommended R4 focus: controlled platform expansion.

R4 priorities:

1. Volunteer portal.
2. Admin portal.
3. Country organization management.
4. Programs and disciplines management.
5. Events and training workflows.
6. Document management.
7. Partner/sponsor workflows.
8. Reporting dashboards.
9. GDPR request workflows.
10. Media library.
11. Notifications.
12. GKMS integration proof of concept.
13. Future AI assistant proof of concept with approved content only.
14. Multi-country rollout plan.

## 38. Final Recommendations

Final recommendations:

- Treat GIUVA as a European enterprise platform from the architecture level, not as a Romania-only site.
- Keep Romania as the first pilot country, but avoid Romania-specific schema assumptions.
- Do not expose backend publicly until authentication, authorization, secrets, CI, migrations, and GDPR foundations are complete.
- Build R3 as a foundation phase, not a feature expansion phase.
- Make organization hierarchy and RBAC the center of the platform design.
- Implement audit logging and GDPR workflows before real personal-data processing.
- Keep donations, AI, and advanced integrations out of scope until core governance is production-safe.
- Use R4 for multi-country operational expansion after R3 foundations are validated.
