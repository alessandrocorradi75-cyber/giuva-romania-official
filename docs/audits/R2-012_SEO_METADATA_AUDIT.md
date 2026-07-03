# R2-012 - SEO & Metadata Audit

## 1. SEO Overview

This audit reviewed the GIUVA Romania frontend SEO and metadata implementation according to GIUVA CORE v1.0. The review was performed by static repository inspection only. No source files, metadata files, sitemap, robots, content, configuration, or dependencies were modified. No build command was run.

The repository has a solid SEO foundation:

- Root metadata exists in `app/layout.tsx`.
- Page-level metadata exists across most primary public routes.
- Dynamic metadata exists for discipline and news detail pages.
- Open Graph and Twitter metadata exist at the root layout level.
- `metadataBase` is configured.
- Canonical and language alternates are defined at the root level.
- `app/sitemap.ts` exists and includes static routes plus dynamic discipline/news routes.
- `app/robots.ts` exists and allows indexing.
- Brand naming is mostly consistent as `GIUVA Romania`.
- Public safety wording is generally cautious and avoids emergency-service claims.

The main SEO gaps are hardcoded production URLs, limited page-specific Open Graph/Twitter metadata, incomplete multilingual SEO strategy, no structured data, decentralized metadata conventions, possible duplicate route/indexing behavior for aliases and redirects, and no documented SEO validation workflow.

## 2. Metadata Inventory

### Root Metadata

File: `app/layout.tsx`

Current root metadata includes:

- `metadataBase: new URL("https://www.giuva.ro")`
- Default title: `GIUVA Romania | Nu o asociație. O comunitate.`
- Title template: `%s | GIUVA Romania`
- Site description from Romanian public positioning copy
- `keywords: seoKeywords`
- Canonical URL: `https://www.giuva.ro`
- Language alternates:
  - `ro: https://www.giuva.ro`
  - `en: https://www.giuva.ro/en`
- Open Graph metadata:
  - Title
  - Description
  - URL
  - Site name
  - Locale `ro_RO`
  - Type `website`
  - Image with dimensions and alt text
- Twitter metadata:
  - `summary_large_image`
  - Title
  - Description
  - Image
- Favicon

Assessment: PASS with warnings.

The root metadata is stronger than a minimal baseline. The issue is not absence of metadata; the issue is centralization and environment strategy. The production URL is hardcoded and repeated in other files.

### Static Page Metadata

Observed static routes with page-level metadata include:

- `/`
- `/en`
- `/despre`
- `/discipline`
- `/voluntari`
- `/deschide-o-sediu`
- `/partner`
- `/sustine`
- `/news`
- `/events`
- `/publicatii`
- `/download-center`
- `/faq`
- `/giuva-ai`
- `/giuva-network`
- `/resurse-institutionale`
- `/transparenta`
- `/guvernanta`
- `/riders-rescue`
- `/community`
- `/contact`
- `/privacy-policy`
- `/cookie-policy`

Assessment: PASS with warnings.

Most public pages have title and description metadata. However, metadata is manually defined page by page, and there is no shared helper or policy for title length, description length, canonical behavior, Open Graph images, Twitter images, or public safety wording review.

### Dynamic Metadata

Dynamic metadata exists for:

- `/discipline/[slug]`
- `/news/[slug]`

`/discipline/[slug]` uses the discipline name and description from `data/site.ts`.

`/news/[slug]` uses the article title and excerpt from `data/site.ts`.

Assessment: WARNING.

Dynamic metadata is present, which is positive. Remaining gaps:

- Dynamic pages do not define page-specific canonical URLs.
- Dynamic pages do not define page-specific Open Graph images.
- Dynamic pages do not define page-specific Twitter images.
- News detail pages do not appear to define article-specific Open Graph type, published date, author, or tags.
- Missing dynamic records fall back to generic metadata before `notFound()` behavior in page rendering.

### Redirect and Alias Routes

Observed redirect routes include:

- `/ro` redirects to `/`
- `/chi-siamo` redirects to `/despre`
- `/apri-una-sede` redirects to `/deschide-o-sediu`
- `/diventa-volontario` redirects to `/voluntari`
- `/dona` redirects to `/sustine`
- `/contatti` redirects to `/contact`
- `/partners` redirects to `/partner`
- `/media` redirects to `/news`
- `/journey` redirects to `/discipline`
- `/project-pulse` redirects to `/sustine`
- `/civil-response` redirects to `/discipline`

Assessment: WARNING.

Redirects are useful for legacy route compatibility, but SEO policy should define whether these routes should be indexed, excluded from sitemap, and permanently or temporarily redirected.

## 3. Sitemap and Robots Assessment

### Sitemap

File: `app/sitemap.ts`

The sitemap includes:

- Homepage
- `/ro`
- `/en`
- Core static public routes
- Dynamic discipline routes from `disciplines`
- Dynamic news routes from `newsCenter`

Strengths:

- Sitemap is implemented as a typed Next.js metadata route.
- Dynamic discipline and news route inclusion is data-driven.
- Core public pages are included.
- Priorities and change frequencies are defined.

Risks:

- `baseUrl` is hardcoded as `https://www.giuva.ro`.
- `lastModified` is set to `new Date()` for every route on generation, which can imply all pages changed every time the sitemap is generated.
- Some redirect/alias routes are included, such as `/ro`, while other redirect routes are excluded.
- Sitemap route policy is not documented.
- Placeholder or roadmap-heavy pages are included without an explicit indexability decision.
- No automated check confirms sitemap route coverage or valid responses.

Assessment: WARNING.

### Robots

File: `app/robots.ts`

Current behavior:

- Allows all user agents.
- Points to `https://www.giuva.ro/sitemap.xml`.
- Sets host to `https://www.giuva.ro`.

Strengths:

- Robots configuration exists.
- Sitemap URL is declared.
- Indexing is intentional at a broad level.

Risks:

- Host and sitemap URL are hardcoded.
- No environment-specific policy exists for staging or preview environments.
- No route-level noindex policy exists for future, placeholder, or redirected content.

Assessment: WARNING.

## 4. Route Coverage Assessment

### Public Routes Observed

The App Router contains the following page routes:

- `/`
- `/apri-una-sede`
- `/chi-siamo`
- `/civil-response`
- `/community`
- `/contact`
- `/contatti`
- `/cookie-policy`
- `/deschide-o-sediu`
- `/despre`
- `/discipline`
- `/discipline/[slug]`
- `/diventa-volontario`
- `/dona`
- `/download-center`
- `/en`
- `/events`
- `/faq`
- `/giuva-ai`
- `/giuva-network`
- `/guvernanta`
- `/journey`
- `/media`
- `/news`
- `/news/[slug]`
- `/partner`
- `/partners`
- `/privacy-policy`
- `/project-pulse`
- `/publicatii`
- `/resurse-institutionale`
- `/riders-rescue`
- `/ro`
- `/sustine`
- `/transparenta`
- `/voluntari`

### Coverage Strengths

- GIUVA CORE required public page categories are broadly represented.
- Legal/privacy pages exist.
- Transparency and governance pages exist.
- News, events, FAQ, contact, partner, volunteer, support, and resource pages exist.
- Dynamic discipline and news detail pages are included in the sitemap.

### Coverage Risks

- Some pages are direct content pages while related routes redirect to broader pages.
- The sitemap includes `/ro`, which redirects to `/`.
- Several redirect routes are not included, which may be intentional, but the policy is not documented.
- Some route names and metadata mix Romanian and English terms, such as `Partners`, `News Center`, `Download Center`, and `Events`.
- The English route exists only as `/en`; there is no full `/en/...` route tree.

Assessment: WARNING.

Route coverage is broad, but route indexing policy and multilingual route strategy need documentation and validation.

## 5. Multilingual SEO Readiness

Status: WARNING

Current multilingual signals:

- Root HTML language is `ro`.
- Root metadata declares language alternates for `ro` and `en`.
- `/en` page exists with English metadata.
- `data/site.ts` defines supported locales as `ro` and `en`, with future locales `it`, `es`, `hu`, and `de`.

Gaps:

- `/en` exists only as an English homepage, not a complete English route tree.
- Root `html lang="ro"` applies globally, including `/en`, unless overridden by route-specific layout behavior not found in this audit.
- No per-page hreflang mapping exists for Romanian/English equivalents beyond root-level alternates.
- Future country/language concepts exist in data, but there is no SEO policy for when they become indexable.
- Canonicals are not defined per localized route.

Risk:

Search engines may receive weak or incomplete language signals. The current approach is acceptable for a limited English landing page, but not for a mature multilingual SEO implementation.

## 6. SEO Risks

### Critical Risks

No immediate critical SEO issue was confirmed through static inspection alone.

### High Risks

- Hardcoded production URL appears in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `data/site.ts`.
- Multilingual SEO is partial and does not support a full localized route tree.
- Page-specific Open Graph and Twitter metadata are not consistently defined.
- Structured data is missing.
- Redirect/indexing policy is not documented.

### Medium Risks

- Dynamic news metadata lacks article-specific social metadata.
- Dynamic discipline metadata lacks canonical and social image metadata.
- Sitemap uses `new Date()` for all `lastModified` values.
- Sitemap includes `/ro`, which redirects to `/`.
- Metadata definitions are decentralized and may drift.
- Some titles are generic, such as `Partners`, `Events`, `News Center`, and `Download Center`.
- Social preview image defaults are root-level and may not fit every page.
- No SEO validation checklist or automated route metadata check exists.

### Low Risks

- Root keywords are present. Modern search engines do not rely heavily on keyword metadata, but this is not harmful if kept reasonable.
- Some CLI output shows Romanian text as mojibake; this may be terminal encoding rather than file corruption, but browser-rendered metadata should be verified.
- The brand name is mostly consistent, but the mix of Romanian and English route/page titles should be reviewed for editorial consistency.

## 7. GIUVA CORE SEO Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| Root metadata | PASS | Root title, description, metadata base, Open Graph, Twitter, favicon, keywords, canonical, and language alternates exist. |
| Page metadata | PASS | Most primary public pages define titles and descriptions. |
| Dynamic metadata | WARNING | Dynamic titles/descriptions exist, but canonical and social metadata are incomplete. |
| Titles | WARNING | Titles exist broadly, but some are generic or mixed-language. |
| Descriptions | WARNING | Descriptions exist broadly, but length, duplication, and safety wording are not centrally governed. |
| Open Graph | WARNING | Root Open Graph exists; page-specific Open Graph is not consistently implemented. |
| Twitter metadata | WARNING | Root Twitter metadata exists; page-specific Twitter metadata is not consistently implemented. |
| Canonical URLs | WARNING | Root canonical exists; per-route canonical policy is incomplete. |
| Sitemap | WARNING | Sitemap exists and is data-driven, but hardcoded URL, redirect inclusion, and `lastModified` policy need review. |
| Robots | WARNING | Robots exists and allows indexing, but environment-specific policy is missing. |
| Public route coverage | PASS | Public route coverage is broad and maps well to GIUVA CORE information architecture. |
| Multilingual SEO | WARNING | `/en` and root alternates exist, but full hreflang and localized route policy are incomplete. |
| Hardcoded URLs | FAIL | Production URL is duplicated across multiple files. |
| Structured data readiness | FAIL | No JSON-LD or structured data implementation was found. |
| Social preview readiness | WARNING | Root social preview exists; per-page preview readiness is incomplete. |
| Indexing risks | WARNING | Redirects, roadmap pages, and staging/preview behavior need an indexing policy. |
| Duplicate metadata | WARNING | Metadata is repeated manually and could drift. |
| SEO consistency | WARNING | Good baseline, but no central helper, route matrix, or validation process exists. |
| Public safety wording in metadata | PASS | Metadata generally uses cautious civic/community language and avoids emergency-service claims. |
| GIUVA brand consistency | PASS | `GIUVA Romania` is consistently present in metadata and content. |
| CORE-SEO-001 Metadata | WARNING | Required metadata exists, but canonical policy and page-specific social metadata are incomplete. |
| CORE-SEO-002 Sitemap and Robots | WARNING | Sitemap and robots exist, but route and environment policy need review. |
| CORE-SEO-003 Multilingual SEO | WARNING | Warning is acceptable with documented limits; current limits should be formalized. |

## 8. SEO Remediation Roadmap

### Critical

- Define canonical public domain and route indexing policy before production release.
- Verify rendered metadata in a browser or production build after approval.
- Decide whether redirect routes should be indexed, excluded, or permanently redirected.

### High

- Centralize site URL/domain configuration.
- Add a shared SEO metadata helper or metadata policy.
- Define per-route canonical URL generation.
- Add page-specific Open Graph and Twitter metadata for high-value pages.
- Add structured data strategy for Organization, WebSite, BreadcrumbList, Article, and FAQ where appropriate.
- Define multilingual SEO scope for `/en` and future locales.

### Medium

- Review all titles for clarity, language consistency, and brand inclusion.
- Review all descriptions for uniqueness, length, and public safety wording.
- Add article metadata conventions for news detail pages.
- Add discipline metadata conventions for dynamic discipline pages.
- Review sitemap `lastModified` strategy.
- Define robots behavior for staging, preview, and non-production deployments.
- Create an SEO route matrix mapping page, title, description, canonical, OG image, sitemap inclusion, and indexing status.

### Low

- Review `keywords` usage and keep it concise.
- Document social preview image dimensions and alt text conventions.
- Add a metadata QA checklist.
- Verify Romanian diacritics rendering in browser metadata previews.
- Keep roadmap/future-state wording cautious in metadata.

## 9. Future SEO Tasks

### R2-012A - SEO Route Matrix

Create a route-level matrix for every public page covering title, description, canonical URL, Open Graph image, Twitter image, sitemap inclusion, robots/indexing status, and language alternates.

### R2-012B - Central Site URL Configuration

Centralize the production site URL and reuse it across metadata, sitemap, robots, content, and future structured data.

### R2-012C - Metadata Helper Strategy

Create a shared metadata helper or policy to prevent duplicated title, description, canonical, Open Graph, and Twitter logic.

### R2-012D - Dynamic Page Social Metadata

Add approved page-specific Open Graph and Twitter metadata for news and discipline detail pages.

### R2-012E - Structured Data Plan

Define and implement structured data for Organization, WebSite, BreadcrumbList, Article, and FAQ only after approval.

### R2-012F - Multilingual SEO Plan

Define whether `/en` remains an English landing page or becomes a full localized route tree, then document hreflang and canonical rules.

### R2-012G - Sitemap Policy Review

Review sitemap inclusion for redirect routes, roadmap pages, placeholder pages, dynamic routes, and `lastModified` values.

### R2-012H - Robots and Environment Indexing Policy

Define robots behavior for production, staging, preview, and local deployments.

### R2-012I - Social Preview Governance

Define default and page-specific social preview image rules, dimensions, alt text, and fallback behavior.

### R2-012J - Public Safety Metadata Review

Review metadata for emergency-adjacent pages to ensure all titles and descriptions remain civic, educational, and non-operational.

## 10. SEO Readiness Score

| Area | Score | Rationale |
| --- | ---: | --- |
| Root Metadata | 8 / 10 | Strong root metadata baseline with canonical, Open Graph, Twitter, and language alternates. |
| Page Metadata | 7 / 10 | Most public pages have title and description metadata. |
| Dynamic Metadata | 6 / 10 | Dynamic titles/descriptions exist, but social and canonical metadata are incomplete. |
| Sitemap | 7 / 10 | Sitemap exists and includes static/dynamic routes, but route policy and lastModified need review. |
| Robots | 6 / 10 | Robots exists and allows indexing, but environment policy is missing. |
| Canonical Strategy | 4 / 10 | Root canonical exists, but route-level strategy is incomplete. |
| Multilingual SEO | 4 / 10 | `/en` exists, but full hreflang/localized route strategy is incomplete. |
| Structured Data | 1 / 10 | No structured data implementation was found. |
| Social Preview Readiness | 5 / 10 | Root previews exist, but page-specific previews are incomplete. |
| Brand and Safety Consistency | 8 / 10 | GIUVA Romania branding and cautious public safety language are strong. |
| Overall SEO Readiness | 6 / 10 | Solid baseline, but not yet GIUVA CORE v1.0 SEO-release-ready without consolidation and validation. |

## 11. Final Recommendations

The repository already has meaningful SEO foundations. The next approved SEO work should focus on governance and consistency rather than rewriting all metadata.

Recommended sequence:

1. Centralize the public site URL.
2. Create a route-level SEO matrix.
3. Define canonical and sitemap inclusion policy.
4. Add page-specific social metadata for priority pages.
5. Define multilingual SEO scope.
6. Add structured data only after the route and metadata policy is stable.
7. Validate rendered metadata, sitemap, and robots in a production-like environment after approval.

No SEO fixes should be implemented until a separate implementation task is approved.
