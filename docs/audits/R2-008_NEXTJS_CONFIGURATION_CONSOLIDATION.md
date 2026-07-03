# R2-008 - Next.js Configuration Consolidation

## 1. Current Next.js Configuration Overview

The GIUVA Romania frontend is a Next.js 15 App Router application with React 19, TypeScript, ESLint flat configuration, Tailwind CSS 4, PostCSS, metadata exports, sitemap generation, and robots generation.

The repository currently has two Next.js configuration files:

- `next.config.ts`
- `next.config.mjs`

This is the most important configuration issue identified in this audit. Both files define image format optimization, but only `next.config.ts` defines `outputFileTracingRoot`. Keeping both files creates ambiguity about which file is authoritative and increases the risk that a production build or deployment environment uses a different configuration than expected.

The application has a functional baseline configuration, but configuration ownership is not fully consolidated. Production URL values are hardcoded in multiple places, Tailwind configuration appears misaligned with the actual source tree, deployment assumptions are not documented, and validation scripts are minimal.

No build, lint, dependency install, package update, or source modification was performed for this audit.

## 2. Existing Configuration Files

| File | Current Role | Assessment |
| --- | --- | --- |
| `next.config.ts` | Typed Next.js configuration. Defines `outputFileTracingRoot` and image formats. | Stronger candidate for the authoritative config because it is typed and contains the superset of current settings. |
| `next.config.mjs` | JavaScript/ESM Next.js configuration. Defines image formats only. | Duplicates `next.config.ts` and omits `outputFileTracingRoot`. Should not coexist with `next.config.ts` long term. |
| `package.json` | Defines project scripts and dependencies. | Includes `dev`, `build`, `start`, and strict `lint`; lacks dedicated `typecheck`, `test`, `ci`, and validation scripts. |
| `tsconfig.json` | TypeScript compiler configuration. | Uses strict mode, `noEmit`, App Router-compatible module resolution, and `@/*` path mapping. Good baseline. |
| `eslint.config.mjs` | ESLint flat config using Next.js rules. | Extends `next/core-web-vitals` and `next/typescript`; ignores backend and generated output. Good baseline, but not integrated into CI. |
| `tailwind.config.ts` | Tailwind theme extension and content scanning. | Defines GIUVA colors, but content path is limited to `./src/**/*.{ts,tsx}` while the app uses root-level `app/`, `components/`, `lib/`, and `data/`. |
| `postcss.config.mjs` | Tailwind CSS 4 PostCSS integration. | Uses `@tailwindcss/postcss`; appropriate for Tailwind CSS 4. |
| `.env.example` | Documents expected public API base URL. | Defines `NEXT_PUBLIC_API_BASE_URL`, but current frontend code does not appear to consume it. |
| `app/layout.tsx` | Root App Router layout, global metadata, viewport, fonts, analytics-like shell components. | Provides strong SEO baseline, but production URL is hardcoded. |
| `app/sitemap.ts` | Dynamic sitemap using static routes and data-driven discipline/news routes. | Useful SEO configuration, but production base URL is hardcoded. |
| `app/robots.ts` | Robots policy and sitemap reference. | Present and useful, but host and sitemap URL are hardcoded. |
| `.gitignore` | Repository hygiene and ignored build/runtime artifacts. | Covers `.next`, `out`, `build`, `.vercel`, environment files, logs, Python caches, and previous local artifact patterns. |

## 3. Duplicate or Conflicting Configuration

### Duplicate Next.js Configuration

Status: FAIL

The repository contains both `next.config.ts` and `next.config.mjs`.

Observed overlap:

- Both configure `images.formats` as `["image/avif", "image/webp"]`.

Observed difference:

- `next.config.ts` additionally configures `outputFileTracingRoot`.
- `next.config.mjs` does not include `outputFileTracingRoot`.

Risk:

- A developer or deployment platform may assume the wrong file is authoritative.
- Future changes may be added to one file and not the other.
- Production output tracing behavior may differ from local expectations.
- Debugging build behavior becomes harder because configuration intent is split.

Recommended authoritative file:

- Prefer `next.config.ts`, provided the deployment target fully supports TypeScript Next.js configuration for the current Next.js version and hosting platform.
- If the deployment target requires JavaScript configuration, then the authoritative file should be `next.config.mjs` and the missing `outputFileTracingRoot` behavior should be ported into it during an approved implementation task.

### Hardcoded Production URL Duplication

Status: WARNING

The production URL `https://www.giuva.ro` is repeated across:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `data/site.ts`

Risk:

- Preview, staging, and alternate domain deployments may generate incorrect canonical URLs, sitemap URLs, robots host values, or Open Graph metadata.
- Domain changes require edits in multiple places.
- Environment-specific behavior is not centralized.

### Tailwind Content Path Mismatch

Status: WARNING

`tailwind.config.ts` scans:

- `./src/**/*.{ts,tsx}`

The actual frontend structure uses root-level paths such as:

- `app/`
- `components/`
- `lib/`
- `data/`

Because the project uses Tailwind CSS 4 with `@tailwindcss/postcss`, this may not break all styling depending on how Tailwind is resolved, but the current config file does not accurately describe the repository structure.

Risk:

- If Tailwind relies on this config during production builds, utility classes outside `src/` may be missed.
- Future contributors may assume a `src/` directory exists.
- Theme extensions may be separated from the actual scan surface.

### Metadata Configuration Duplication

Status: WARNING

Metadata is present and relatively mature, but it is spread across root layout and multiple page files. Dynamic metadata exists for slug pages, while many static pages define their own metadata locally.

Risk:

- Repeated title, description, canonical, Open Graph, and keyword patterns may drift.
- Site-wide metadata changes require broad manual edits.
- Localized metadata conventions are not centrally enforced.

### Environment Variable Drift

Status: WARNING

`.env.example` defines:

- `NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api/v1`

No active frontend usage of this variable was identified during inspection.

Risk:

- Developers may believe a frontend/backend API integration exists when it is not currently wired.
- Deployment documentation may expose an environment variable that has no effect.
- Future API integration work may duplicate or rename the variable.

### Package Version and Lockfile Assumptions

Status: WARNING

`package.json` uses semver ranges such as `^15.3.2` for Next.js, while lockfile state may resolve a newer compatible version. This is normal Node package behavior, but production reproducibility depends on using the lockfile consistently.

Risk:

- Builds using `npm install` instead of a lockfile-respecting install can resolve newer versions.
- CI and deployment behavior should explicitly use the lockfile.

## 4. Build and Deployment Implications

No build command was run as part of this audit because the task explicitly prohibits build commands.

Identified implications:

- Duplicate Next.js configuration files make build behavior less predictable.
- The missing `outputFileTracingRoot` setting in `next.config.mjs` may affect deployment packaging if that file is used.
- There is no documented deployment target such as Vercel, standalone Node hosting, container hosting, static export, or custom server.
- `outputFileTracingRoot` suggests some deployment or tracing concern, but the reason is not documented.
- No `output: "standalone"` setting is present.
- No redirects, rewrites, security headers, cache headers, or image remote patterns are currently configured in Next.js config.
- Hardcoded production URLs reduce staging and preview deployment correctness.
- Sitemap and robots are generated, but their host values are production-specific.
- Package scripts are minimal and do not provide a single release validation command.
- CI readiness is incomplete because lint/build/typecheck/test gates are not centrally defined.

## 5. GIUVA CORE Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| Configuration clarity | FAIL | Two Next.js configuration files coexist with overlapping but non-identical settings. |
| Single source of truth | FAIL | Production domain, SEO configuration, and Next.js configuration are not fully centralized. |
| TypeScript configuration | PASS | `tsconfig.json` uses strict mode, `noEmit`, modern module resolution, and path aliases. |
| Next.js App Router structure | PASS | The project uses the App Router with root layout, route pages, sitemap, and robots configuration. |
| ESLint configuration | WARNING | Next.js ESLint rules are configured, but CI/release enforcement is not present in the repository. |
| Tailwind configuration | WARNING | Tailwind CSS 4 PostCSS integration exists, but `tailwind.config.ts` content paths do not match the actual app structure. |
| Metadata and SEO configuration | WARNING | Metadata, sitemap, and robots exist, but production URL and metadata conventions are duplicated. |
| Environment configuration | WARNING | `.env.example` exists, but documented API environment usage is not currently consumed by the frontend. |
| Build reproducibility | WARNING | Build script exists, but no CI command or documented lockfile-based install process is present. |
| Deployment readiness | WARNING | Deployment assumptions are implicit and not documented. |
| Security configuration | WARNING | No Next.js security headers or deployment-level security assumptions are configured here. |
| Maintainability | WARNING | Config baseline is workable, but duplication and drift create avoidable maintenance risk. |

## 6. Recommended Consolidation Strategy

1. Select one authoritative Next.js configuration file.

   Recommended default: `next.config.ts`.

   Rationale:

   - It is typed.
   - It already contains all settings present in `next.config.mjs`.
   - It includes the additional `outputFileTracingRoot` setting.

2. Confirm hosting support before implementation.

   Before removing or retiring either file, confirm whether the selected deployment target supports `next.config.ts` with the current Next.js version and deployment pipeline.

3. Remove configuration duplication in an approved implementation task.

   Do not keep both `next.config.ts` and `next.config.mjs` after consolidation. The non-authoritative file should be removed only after approval and validation.

4. Centralize public site URL configuration.

   Create a single source of truth for the public site URL and use it for:

   - Metadata base
   - Canonical URLs
   - Sitemap URLs
   - Robots host and sitemap URL
   - Brand/domain references where appropriate

5. Align Tailwind configuration with the real source tree.

   Update the implementation plan to decide whether the project should:

   - Keep `tailwind.config.ts` and correct content paths to include `app/`, `components/`, `lib/`, and other relevant files.
   - Or adopt a clearly documented Tailwind CSS 4 CSS-first configuration approach and remove stale assumptions in a controlled task.

6. Introduce shared SEO configuration conventions.

   Preserve page-specific metadata, but centralize repeated values such as:

   - Site name
   - Default title template
   - Default description
   - Base URL
   - Open Graph image defaults
   - Twitter card defaults
   - Locale defaults

7. Clarify environment variable ownership.

   Either wire `NEXT_PUBLIC_API_BASE_URL` into the frontend when backend integration is approved, or document that it is reserved for future backend integration.

8. Define release validation commands.

   Future implementation should add a documented validation path for:

   - Lint
   - Type checking
   - Build
   - Tests when available
   - Dependency audit when approved

9. Document deployment assumptions.

   Add a future deployment document or README section covering:

   - Hosting target
   - Node version
   - Install command
   - Build command
   - Start command
   - Required environment variables
   - Preview/staging domain behavior

## 7. Risk Assessment

### Critical Risks

None identified that require immediate source modification within this audit-only task.

### High Risks

- Duplicate `next.config.ts` and `next.config.mjs` may cause inconsistent build and deployment behavior.
- Tailwind content paths do not match the actual repository structure, creating styling risk during production optimization.
- No validated release command or CI gate is defined for configuration changes.

### Medium Risks

- Production URL is hardcoded in several files.
- Metadata configuration is useful but decentralized.
- Sitemap and robots configuration are tied directly to the production domain.
- `.env.example` documents an API base URL that the current frontend does not appear to use.
- Deployment target and output strategy are not documented.
- Security headers are not configured at the Next.js layer.

### Low Risks

- ESLint ignores backend paths, which is acceptable for frontend linting but should be documented as intentional.
- Package scripts are understandable but minimal.
- Image optimization formats are consistently configured across both Next.js config files, but duplication still creates maintenance overhead.

## 8. Future Implementation Tasks

### R2-008A - Decide Authoritative Next.js Configuration

Confirm whether `next.config.ts` or `next.config.mjs` should be the single supported configuration file based on the actual deployment target.

### R2-008B - Remove Duplicate Next.js Configuration

After approval, remove or retire the non-authoritative Next.js config file and validate that image settings and output tracing behavior remain intact.

### R2-008C - Tailwind Configuration Alignment

Audit Tailwind CSS 4 usage and update configuration strategy so content scanning and theme extension behavior match the actual app directory structure.

### R2-008D - Central Public Site URL Configuration

Create a single configuration source for `https://www.giuva.ro` and reuse it in layout metadata, sitemap, robots, and brand/domain references.

### R2-008E - SEO Metadata Consolidation

Introduce shared metadata helpers or constants for repeated title, description, Open Graph, Twitter, locale, and canonical behavior.

### R2-008F - Sitemap and Robots Environment Strategy

Make sitemap and robots generation compatible with production, staging, and preview deployments while preserving correct production SEO behavior.

### R2-008G - Deployment Documentation

Document hosting target, Node version, install command, build command, runtime command, environment variables, and expected artifact behavior.

### R2-008H - Next.js Security Header Planning

Define a future security header strategy for Content Security Policy, frame protection, content type sniffing protection, referrer policy, and permissions policy.

### R2-008I - Release Validation Command

Create a future repository-level validation command that can run lint, type checking, build, and tests once the test baseline is implemented.

### R2-008J - Environment Variable Cleanup

Either use `NEXT_PUBLIC_API_BASE_URL` in approved frontend/backend integration work or document it as reserved and inactive.

## 9. Configuration Readiness Score

| Area | Score | Rationale |
| --- | ---: | --- |
| Next.js Config Clarity | 3 / 10 | Duplicate config files create direct ambiguity. |
| TypeScript Config | 7 / 10 | Strict and modern baseline, but no standalone typecheck script. |
| ESLint Config | 7 / 10 | Good Next.js ESLint baseline, but no CI enforcement. |
| Tailwind Config | 4 / 10 | Tailwind integration exists, but content paths do not match the current repository structure. |
| Metadata/SEO Config | 6 / 10 | Metadata, sitemap, and robots exist, but domain and conventions are duplicated. |
| Deployment Readiness | 4 / 10 | Build/start scripts exist, but hosting assumptions, environment strategy, and validation gates are not documented. |
| Overall Configuration Readiness | 5 / 10 | The project has a workable baseline, but consolidation is needed before production configuration can be considered stable. |

## 10. Final Recommendations

The next approved implementation step should focus only on configuration consolidation, not feature work.

Recommended order:

1. Decide and document the authoritative Next.js config file.
2. Remove the duplicate Next.js config file in a controlled implementation task.
3. Validate the selected config with lint and build after approval.
4. Align Tailwind configuration with the real source tree.
5. Centralize production URL and SEO defaults.
6. Document deployment assumptions and environment variables.

The repository should not be considered GIUVA CORE v1.0 compliant for configuration readiness until the duplicate Next.js configuration is resolved and the production URL, Tailwind, SEO, and deployment assumptions are consolidated.
