# R2-010 - Performance and Asset Audit

## 1. Performance Overview

This audit reviewed the GIUVA Romania frontend for performance and asset readiness according to GIUVA CORE v1.0. The review was performed by static repository inspection only. No source files were modified, no images were optimized, no assets were deleted or renamed, no configuration was changed, no packages were installed, no build command was run, and no performance tools were executed.

The frontend has a credible performance baseline:

- Most visual media is stored as WebP.
- SVG assets are small.
- Most rendered images use `next/image`.
- Hero images use explicit `priority` where they are likely above the fold.
- Next.js image output formats include AVIF and WebP.
- Client components are limited to interactive areas rather than the entire app.
- The GIUVA AI widget is lazy-loaded through a dynamic import after user interaction.
- CSS is centralized and moderate in size.
- Sitemap and robots are implemented through App Router metadata routes.

The main performance risks are related to repeated large image usage, lack of documented image dimensions and compression policy, duplicated Next.js configuration, Tailwind content-path drift, uncertain build output because build commands were not run, and the absence of Core Web Vitals measurement or CI performance gates.

## 2. Asset Inventory

### Public Asset Summary

| Asset Type | Count | Total Size |
| --- | ---: | ---: |
| WebP images | 15 | 3922.3 KB |
| SVG files | 7 | 15.8 KB |
| Total public files inspected | 22 | 3938.1 KB |

### Largest Public Assets

| Asset | Size |
| --- | ---: |
| `public/brand/journey-urban-3.webp` | 366.2 KB |
| `public/brand/giuva-romania-disciplines.webp` | 316.9 KB |
| `public/brand/giuva-romania-disciplines-flag.webp` | 316.9 KB |
| `public/brand/giuva-romania-disciplines-before-flag.webp` | 316.7 KB |
| `public/brand/community-manifesto-1.webp` | 302.3 KB |
| `public/brand/community-manifesto-2.webp` | 300.6 KB |
| `public/brand/community-manifesto-0.webp` | 283.4 KB |
| `public/brand/journey-urban-1.webp` | 274.6 KB |
| `public/brand/journey-urban-2.webp` | 238.0 KB |
| `public/brand/riders-rescue-support.webp` | 218.1 KB |
| `public/brand/civil-response-scene.webp` | 208.4 KB |
| `public/brand/civil-response-protocol.webp` | 202.9 KB |
| `public/brand/giuva-riders-rescue-banner.webp` | 201.3 KB |
| `public/brand/project-pulse-scene.webp` | 188.2 KB |
| `public/brand/community-manifesto-3.webp` | 187.9 KB |

### SVG Assets

SVG files are small and low risk from a transfer-size perspective:

- `public/brand/civic-resilience-visual.svg`
- `public/brand/riders-civic-availability.svg`
- `public/brand/project-pulse-clean.svg`
- `public/brand/civil-preparedness-visual.svg`
- `public/brand/giuva/GIUVA_white.svg`
- `public/brand/giuva-logo.svg`
- `public/favicon.svg`

### Asset Organization

All inspected public assets are organized under `public/brand` except the favicon. The structure is simple and understandable, but there is no documented policy for:

- Source image dimensions.
- Maximum file size per use case.
- Hero image compression targets.
- Thumbnail variants.
- Image naming lifecycle.
- Unused asset cleanup.
- Asset ownership and approval process.

## 3. Image Optimization Assessment

### Strengths

- The repository uses WebP for all raster assets in `public/brand`.
- Next.js configuration enables optimized output formats:
  - `image/avif`
  - `image/webp`
- Most app images use `next/image`.
- Many `Image` components include `sizes`.
- Hero images commonly use `priority`.
- SVG logos are small.
- Asset count is manageable.

### Risks

1. Several images are relatively large for repeated card or thumbnail usage.

   Multiple WebP files are between 250 KB and 366 KB. This is acceptable for a hero image in some contexts, but less ideal when repeated across grids, stories, or cards.

2. The homepage uses many images.

   `app/page.tsx` references multiple story images, discipline images, and hero images. Even with `next/image`, the page may carry high total visual complexity.

3. Some repeated images are reused across different contexts.

   Reusing assets is good for cache behavior, but the same large source can be used for both hero and small card contexts. Without smaller variants, the image optimizer must do more work at request time and the source asset inventory remains heavier than necessary.

4. The actual image dimensions were not documented in the repository.

   File size is visible from static inspection, but source pixel dimensions and compression settings are not documented.

5. Next.js configuration duplication reduces confidence.

   Both `next.config.ts` and `next.config.mjs` configure image formats, but only `next.config.ts` includes `outputFileTracingRoot`. This duplication was already identified in R2-008 and remains relevant to performance because the active config affects image optimization and deployment packaging.

6. No remote image policy is needed now, but future CMS usage will require one.

   Current images are local public assets. If a CMS or remote asset host is introduced, `images.remotePatterns` and cache strategy will be needed.

## 4. Frontend Performance Risks

### High Risks

- No build or production bundle validation has been run or documented in this audit.
- Duplicate Next.js configuration creates uncertainty over the authoritative production config.
- Tailwind config points to `./src/**/*.{ts,tsx}` while the app uses root-level `app/`, `components/`, `lib/`, and `data/`.
- Large WebP images are used repeatedly across image-heavy pages.
- No Core Web Vitals measurement baseline exists.

### Medium Risks

- Homepage visual density may affect Largest Contentful Paint and total page weight.
- Several above-the-fold sections use large hero imagery with `priority`; this is good when correct but harmful if overused.
- CSS includes many global utility-adjacent custom classes and visual effects; current size is moderate, but growth is unmanaged.
- The app depends on `lucide-react`; icon usage is convenient, but broad imports should continue to be component-level and tree-shakeable.
- Sitemap uses `new Date()` for `lastModified`, causing dynamic timestamps on generation and potentially unnecessary crawler churn.
- Production domain and metadata configuration are hardcoded, which can complicate preview/staging performance and SEO validation.

### Low Risks

- SVG asset size is low.
- The GIUVA AI widget is loaded lazily only after interaction.
- Client component count is limited.
- No large video, audio, or font assets were identified in `public`.

## 5. Bundle and Client Component Risks

### Client Components Identified

The repository has seven client components:

- `components/Navbar.tsx`
- `components/GiuvaAiLazy.tsx`
- `components/GiuvaAiWidget.tsx`
- `components/MockForm.tsx`
- `components/portal/SearchBox.tsx`
- `components/portal/NewsletterBox.tsx`
- `components/portal/FaqAccordion.tsx`

### Assessment

Status: WARNING

The client-component footprint is reasonable for the current app. Client rendering is used for interactive behavior:

- Active navigation state.
- Mobile menu behavior.
- GIUVA AI widget loading and open/close state.
- Local demo form validation.
- Portal search.
- Newsletter demo submission.
- FAQ accordion.

The strongest performance decision is `GiuvaAiLazy`, which defers loading the full widget until the user opens it.

Remaining risks:

- `Navbar` is a global client component and loads on every route.
- `MockForm`, `SearchBox`, and `NewsletterBox` are local state components; they are acceptable but should remain isolated.
- `FaqAccordion` uses native `details`, so it may not need much JavaScript beyond the current client boundary.
- No bundle analyzer or production build output is available, so actual bundle cost is unknown.

## 6. Core Web Vitals Readiness

### Largest Contentful Paint

Status: WARNING

Positive signals:

- Hero images use `priority` in several places.
- `sizes` attributes are present on many images.
- Local WebP assets reduce baseline transfer cost.

Risks:

- Large hero images may dominate LCP.
- Homepage uses a large full-viewport visual hero.
- Multiple pages use image-heavy hero components.
- Without a build and runtime measurement, LCP readiness is unknown.

### Cumulative Layout Shift

Status: WARNING

Positive signals:

- Many images use explicit `width` and `height`, or `fill` inside containers with defined dimensions.
- CSS contains stable dimensions for hero and card image panels in several places.

Risks:

- `fill` images rely on parent sizing; every parent must have stable dimensions.
- Fixed header and floating GIUVA AI widget may create viewport interaction issues.
- Dynamic widget loading can alter focus and perceived layout if not carefully managed.

### Interaction to Next Paint

Status: WARNING

Positive signals:

- Client state is limited to interactive components.
- No large client-side framework beyond React/Next is present.
- GIUVA AI widget is lazy-loaded.

Risks:

- Global client `Navbar` runs on every route.
- Portal search filters on each keystroke; current dataset is small, but growth could affect responsiveness.
- No runtime interaction profiling exists.

### First Contentful Paint and CSS Delivery

Status: WARNING

Positive signals:

- Global CSS is moderate in size: 368 lines, about 7.7K characters.
- Tailwind CSS 4 is used through PostCSS.
- No external web font files were found in `public`.

Risks:

- Tailwind content-path drift may affect CSS output expectations.
- Visual gradients, shadows, and large hero treatments are common.
- No production CSS size measurement exists.

## 7. GIUVA CORE Performance Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| Public assets | PASS | Asset count is small and organized mostly under `public/brand`. |
| Image formats | PASS | Raster assets are WebP and Next.js image formats include AVIF/WebP output. |
| Image size governance | WARNING | Several images are 200-366 KB and no documented size budget exists. |
| Next.js Image usage | PASS | Most rendered images use `next/image` with `sizes` and appropriate loading patterns. |
| Hero image strategy | WARNING | Hero images use `priority`, but there is no measured LCP baseline or priority policy. |
| SVG usage | PASS | SVG files are small and appropriate for logos/illustrations. |
| Icon usage | PASS | `lucide-react` is used through component imports; no large custom icon bundle was identified. |
| Fonts | PASS | No large local font files were identified; system font stack is used in CSS. |
| CSS size and structure | WARNING | CSS is moderate, but Tailwind content-path drift and unmanaged global growth create risk. |
| Client components | WARNING | Client component count is reasonable, but global `Navbar` and actual bundle size are unmeasured. |
| Lazy loading | PASS | GIUVA AI widget is lazy-loaded after user interaction. |
| Bundle risk | WARNING | No production bundle analysis or build output exists in this audit. |
| App Router performance | PASS | App Router is used with mostly server-rendered pages and localized client islands. |
| Metadata and SEO performance | WARNING | Metadata exists, but hardcoded URLs and dynamic sitemap timestamps need review. |
| Sitemap/robots impact | WARNING | Routes are generated simply, but `lastModified = new Date()` may create unnecessary freshness churn. |
| Responsive image strategy | WARNING | `sizes` exists broadly, but no asset variant policy or measurement baseline exists. |
| Caching assumptions | WARNING | Static public assets benefit from Next hosting, but explicit caching policy is undocumented. |
| Deployment performance readiness | WARNING | Deployment target, build output, cache headers, and runtime assumptions are not documented. |
| Core Web Vitals readiness | WARNING | Good structural baseline, but no measurement or thresholds are defined. |

## 8. Performance Remediation Roadmap

### Critical

- Establish a measured performance baseline after approval using production build and browser metrics.
- Resolve duplicate Next.js configuration so performance behavior is predictable.
- Define Core Web Vitals acceptance thresholds for GIUVA CORE v1.0.

### High

- Create an image budget policy for hero, card, thumbnail, logo, and social preview assets.
- Review all WebP assets above 250 KB and decide whether smaller variants are needed.
- Validate homepage LCP image selection and priority usage.
- Align Tailwind configuration with the actual app directory structure.
- Document deployment target, caching behavior, and build/runtime assumptions.

### Medium

- Add a future bundle analysis task to inspect client JavaScript by route.
- Review whether `FaqAccordion` must remain a client component.
- Add a policy for repeated image reuse across hero and card contexts.
- Review sitemap `lastModified` behavior for crawler efficiency.
- Add route-level performance smoke checks after CI exists.
- Document icon import conventions for `lucide-react`.

### Low

- Add asset ownership and naming conventions.
- Document preferred dimensions for Open Graph images.
- Keep SVGs small and avoid embedding unnecessary metadata.
- Keep GIUVA AI widget lazy-loaded as functionality expands.
- Track global CSS growth over time.

## 9. Future Performance Tasks

### R2-010A - Performance Baseline Measurement

Run approved production build and browser performance measurements to establish actual Core Web Vitals, route weight, and asset loading behavior.

### R2-010B - Asset Budget Policy

Define size, dimension, format, and naming budgets for hero images, card images, thumbnails, logos, Open Graph images, and SVGs.

### R2-010C - Large Image Review

Review WebP assets above 250 KB and determine whether approved compression or variant generation is needed.

### R2-010D - Homepage LCP Review

Measure and optimize the homepage LCP candidate, priority image usage, and initial viewport asset loading after approval.

### R2-010E - Next.js Configuration Cleanup

Complete the approved R2-008 consolidation so the active image optimization and tracing configuration is unambiguous.

### R2-010F - Tailwind Output Validation

Validate Tailwind CSS output against the actual `app/` and `components/` structure, then adjust configuration only in an approved implementation task.

### R2-010G - Bundle Analysis

Run an approved bundle analysis to identify route-level JavaScript cost, shared chunks, client component impact, and icon library contribution.

### R2-010H - Client Component Review

Review each client component to confirm it needs client-side JavaScript and cannot be reduced to a server component plus small interactive island.

### R2-010I - Deployment Caching Strategy

Document cache expectations for static assets, Next image optimization, metadata routes, sitemap, robots, and runtime pages.

### R2-010J - Core Web Vitals Release Gate

Create future release criteria for LCP, CLS, INP, total JS, image transfer size, and route-level performance budgets.

## 10. Performance Readiness Score

| Area | Score | Rationale |
| --- | ---: | --- |
| Image Optimization | 7 / 10 | Strong WebP and `next/image` usage, but no size budget or measured LCP baseline. |
| Asset Organization | 7 / 10 | Small, understandable asset tree; lacks governance and lifecycle policy. |
| Bundle Risk | 5 / 10 | Client footprint appears moderate, but actual bundle output is unmeasured. |
| Client Component Usage | 7 / 10 | Client components are limited and purposeful; global navbar and FAQ/client boundaries should be reviewed. |
| CSS Strategy | 6 / 10 | CSS is moderate and centralized, but Tailwind config drift and future growth are risks. |
| Core Web Vitals | 5 / 10 | Good structural choices exist, but no metrics, thresholds, or validation process exist. |
| Deployment Performance | 4 / 10 | Deployment target, caching, and production runtime behavior are not documented. |
| Overall Performance Readiness | 6 / 10 | The frontend is reasonably structured but not performance-release-ready under GIUVA CORE v1.0 until measured and governed. |

## 11. Final Recommendations

The project should not begin asset optimization blindly. The next approved step should be to establish a measured production performance baseline, then optimize only the assets and routes that materially affect Core Web Vitals.

Recommended order:

1. Resolve duplicate Next.js configuration.
2. Measure production performance after approval.
3. Define image and route budgets.
4. Review large WebP assets and homepage LCP.
5. Validate Tailwind output and CSS size.
6. Analyze client bundle cost.
7. Document deployment caching assumptions.

No performance fixes, image optimizations, asset deletions, or configuration changes should be implemented until a separate implementation task is approved.
