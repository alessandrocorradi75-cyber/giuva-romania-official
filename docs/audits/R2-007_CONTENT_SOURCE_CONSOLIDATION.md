# R2-007 Content Source Consolidation Audit

Repository: `C:\GIUVA-PROJECTS\GIUVA-ROMANIA`  
Mode: Analysis and planning only  
Audit date: 2026-07-02  
Scope: Static inspection of content sources, routes, shared components, assets, localization structure, CMS readiness, and GIUVA CORE v1.0 requirements. No source files, content files, assets, dependencies, names, moves, deletions, or translations were modified.

## 1. Current Content Architecture

The platform uses a hybrid static-content architecture:

- `data/site.ts` is the richest and most actively used central content source.
- Many public pages import selected arrays and objects from `data/site.ts`.
- Several pages define their own page metadata, hero copy, cards, local arrays, and route-specific content inline.
- Shared components contain reusable layout patterns, but some also contain hardcoded editorial strings.
- `public/brand` contains curated image and SVG assets used by pages and data records.
- Backend API content is not yet used as the source of truth; backend routes currently expose placeholder/schema/static responses.
- `lib/cms.ts` declares a future CMS direction with `ContentSource = "static" | "sanity" | "strapi"` and current source `"static"`.

The architecture is workable for a public prototype, but it is not yet consolidated enough for multi-country, multi-language, CMS-backed, or database-backed content operations.

Key architectural fact: `README.md` says public text, navigation, disciplines, news, form options, and SEO are in `data/site.ts`, but actual content is distributed across `data/site.ts`, page files, shared components, `lib/siteByHost.ts`, and legacy data files.

## 2. Existing Content Sources

### Central Data Files

| File | Role | Assessment |
| --- | --- | --- |
| `data/site.ts` | Main current content source for Romanian portal data, nav, disciplines, news, events, publications, downloads, FAQ, partners, forms, social links, resources, governance. | Strongest source, but very large and mixes many domains. |
| `data/site-romania.ts` | Older Romania content source imported by `lib/getSiteConfig.ts`. | Drift risk; appears less complete and contains mojibake/older wording. |
| `data/site.romania.backup.ts` | Backup copy of older Romania content. | Should not be a source of truth; drift risk. |
| `data/site-italia.ts` | File exists but appears empty from inspection. | Future locale placeholder without readiness. |

### Route/Page Content

The `app` directory contains many route-level hardcoded content blocks:

- Core Romanian pages: `/`, `/despre`, `/discipline`, `/voluntari`, `/deschide-o-sediu`, `/partner`, `/sustine`, `/news`, `/events`, `/transparenta`, `/guvernanta`, `/publicatii`, `/download-center`, `/faq`, `/contact`, `/privacy-policy`, `/cookie-policy`.
- Dynamic pages: `/discipline/[slug]`, `/news/[slug]`.
- Locale or alias pages: `/en`, `/ro`, `/chi-siamo`, `/contatti`, `/apri-una-sede`, `/dona`, `/diventa-volontario`.
- Several legacy aliases redirect to Romanian routes.

Hardcoded route-level content includes metadata, `PageHero` copy, local arrays for story cards, project steps, impact stats, support cards, contact departments, Riders Rescue sections, and English homepage copy.

### Shared Component Content

Shared components are split between purely structural components and content-bearing components.

Content-bearing shared components include:

- `components/Footer.tsx`
- `components/Navbar.tsx`
- `components/MockForm.tsx`
- `components/GiuvaAiWidget.tsx`
- `components/CommunitySection.tsx`
- `components/JourneyGallery.tsx`
- `components/ProjectPulseSection.tsx`
- `components/Partners.tsx`
- `components/Roadmap.tsx`
- `components/portal/NewsletterBox.tsx`
- `components/portal/Testimonial.tsx`
- `components/portal/TrustIndicators.tsx`
- `components/portal/EmptyState.tsx`

Some shared components contain Italian or English copy while being used in a Romanian platform context.

### Library Content

- `lib/getSiteConfig.ts` imports `@/data/site-romania`, not `@/data/site`.
- `lib/siteByHost.ts` contains hardcoded Romania, Italy, and Europe copy by host.
- `lib/cms.ts` defines static CMS status and future Sanity/Strapi intent.

### Assets

`public/brand` contains:

- 15 `.webp` files.
- 7 `.svg` files.

Assets are mostly brand/community/civic visuals. No PDFs, DOCX, XLSX, CSV, MDX, or JSON content collections were found beyond project/config/report files.

### Backend Content

Backend routes expose static content-like API responses:

- `journey/schema`: planned content models.
- `project-pulse/dashboard`: static zero metrics.
- `partners/categories`: static categories.
- `civil-response/scope`: allowed/not-allowed safety scope.
- `volunteers/schema`: planned volunteer module shape.

These are useful as placeholders but are not production content APIs.

## 3. Duplicate Content Analysis

### Duplicate Data Sources

The strongest duplication risk is between:

- `data/site.ts`
- `data/site-romania.ts`
- `data/site.romania.backup.ts`

The older Romania files repeat brand, legal boundary, navigation, disciplines, news, contact emails, form fields, roadmap, and operational pages. They also appear less complete than `data/site.ts`.

Observed risks:

- `data/site.ts` has richer discipline details, FAQ, documents, social channels, events, publications, resources, partner profiles, and portal search.
- `data/site-romania.ts` and backup contain older route assumptions such as direct `/riders-rescue` and `/community` operational paths.
- `data/site-romania.ts` and backup show mojibake in inspected output.
- `lib/getSiteConfig.ts` imports the older Romania file, creating ambiguity about which source future code should use.

### Repeated Legal/Safety Content

Non-emergency and no-fake-partnership language appears in:

- `data/site.ts`
- `README.md`
- `components/LegalNotice.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/partner/page.tsx`
- `app/riders-rescue/page.tsx`
- `app/transparenta/page.tsx`
- `app/resurse-institutionale/page.tsx`
- `app/giuva-network/page.tsx`

The repetition is positive for public safety visibility, but it should be governed by canonical legal phrases to avoid drift.

### Repeated Contact Information

Contact emails exist centrally in `data/site.ts`, but `app/contact/page.tsx`, `app/privacy-policy/page.tsx`, and `app/cookie-policy/page.tsx` hardcode contact emails and departments.

Risk: future email changes may miss legal/privacy pages or department cards.

### Repeated Roadmap/Future-State Language

Roadmap/future-state wording appears across data files, pages, and shared components. This is expected for GIUVA CORE, but it needs a controlled vocabulary.

Examples include:

- Roadmap countries and social channels.
- Future donation/fundraising states.
- Documents marked as future, under development, or coming soon.
- Mock form integration statements.
- Testimonials marked as placeholder.

### Repeated Page Card Data

Several pages define local arrays for cards rather than using central data:

- Homepage story cards, project steps, impact stats, partner cards, donation uses, and governance links.
- Contact department cards.
- Riders Rescue section cards.
- Support areas.
- English homepage steps/cards/stories.

This makes the homepage and secondary pages harder to translate or move to CMS.

## 4. Hardcoded Content Analysis

Hardcoded content is widespread in page and component files.

High-impact hardcoded content:

- `app/page.tsx`: large homepage story, project, partner, support, stats, and CTA content.
- `app/en/page.tsx`: entire English homepage is hardcoded.
- `app/contact/page.tsx`: department contact list is hardcoded.
- `app/privacy-policy/page.tsx` and `app/cookie-policy/page.tsx`: provisional legal content is hardcoded.
- `app/sustine/page.tsx`: support areas and transparency cards are hardcoded.
- `app/riders-rescue/page.tsx`: section cards are hardcoded.
- Several shared components contain fixed Italian/English/Romanian strings.

Benefits:

- Easy to inspect.
- Simple for prototype iteration.
- No runtime CMS dependency.

Risks:

- Content ownership is unclear.
- Translation is manual and inconsistent.
- Legal/brand copy can drift.
- Multi-country rollout will require significant refactoring.
- CMS migration will require extracting many scattered arrays and strings.
- Tests cannot easily validate complete content inventory because there is no canonical schema.

## 5. Localization Readiness

Current localization state:

- `data/site.ts` declares `defaultLocale: "ro"`, `supported: ["ro", "en"]`, and future `["it", "es", "hu", "de"]`.
- Romanian is the strongest content set.
- `/en` exists but is a hardcoded standalone English page, not a locale-driven rendering of shared content.
- Italian route aliases exist (`/chi-siamo`, `/contatti`, `/apri-una-sede`, `/dona`, `/diventa-volontario`) but redirect to Romanian pages.
- `lib/siteByHost.ts` contains hardcoded Italy/Europe/Romania host-specific copy.
- `data/site-italia.ts` exists but appears empty.
- Some shared components contain Italian copy even when used in the Romanian app.

Localization strengths:

- Locale roadmap exists.
- English public route exists.
- Future countries are labelled cautiously.
- GIUVA Network content avoids claiming legal entities/partnerships.

Localization gaps:

- No formal locale directory model exists beyond `/en` and redirects.
- No translation schema exists.
- No fallback policy exists.
- No per-locale content ownership exists.
- No hreflang/canonical localization strategy beyond basic root/en metadata.
- No translation completeness checks exist.
- Mixed-language content appears in shared components.
- Older Romania data files show encoding issues.

Localization readiness: WARNING for prototype, FAIL for scalable multilingual platform.

## 6. GIUVA CORE Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| Romanian-first public portal | PASS | Romanian content is broad and central to the site. |
| English secondary presence | WARNING | `/en` exists, but it is hardcoded and not integrated into a localization system. |
| Future multilingual readiness | WARNING | Locale roadmap exists, but locale data/schema/fallbacks are not implemented. |
| Development-stage transparency | PASS | Future/roadmap states are widely labelled. |
| Civic/non-emergency positioning | PASS | Safety boundaries are repeated across content. |
| No fake partnerships | PASS | Partner/network copy is generally cautious and avoids unauthorized claims. |
| No fake documents | PASS | Download/publication content marks unavailable documents as future, restricted, or roadmap. |
| Content source ownership | FAIL | No documented owner/reviewer/source-of-truth model exists. |
| Content centralization | WARNING | `data/site.ts` is strong, but many page/component strings remain hardcoded. |
| Duplicate content control | FAIL | `data/site-romania.ts` and `data/site.romania.backup.ts` duplicate older content. |
| Encoding integrity | WARNING | Main `data/site.ts` appears good, but older data/README/app inspection shows mojibake risks. |
| Legal/privacy consistency | WARNING | Legal/privacy pages exist but are provisional and hardcoded. |
| Contact information consistency | WARNING | Central contact emails exist, but some pages hardcode contact information. |
| Brand terminology consistency | WARNING | GIUVA naming is mostly consistent, but mixed English/Italian/Romanian labels appear. |
| CMS readiness | WARNING | `lib/cms.ts` declares future Sanity/Strapi intent, but no schema or fetcher architecture exists. |
| Database content readiness | WARNING | Backend models exist for some content domains, but no content API/persistence flow exists. |
| API content readiness | FAIL | Backend content endpoints are placeholder/static only. |
| Headless CMS readiness | WARNING | Concept exists, implementation plan and content model are missing. |
| Multi-country scalability | WARNING | Host/country roadmap exists, but data structure is not scalable yet. |

Overall GIUVA CORE content compliance: WARNING. The current content is safe enough for a Romanian public prototype, but content governance, canonical source ownership, localization, and CMS/API readiness are not release-grade for multi-country scale.

## 7. Content Consolidation Roadmap

### Critical

- Define the canonical content source policy: identify which file is authoritative for Romanian public content.
- Freeze `data/site-romania.ts` and `data/site.romania.backup.ts` as legacy/non-authoritative until a consolidation task is approved.
- Create a legal/safety phrase registry for non-emergency, no-fake-partnership, no-fake-document, mock-form, privacy, and roadmap disclaimers.
- Define content owner/reviewer roles for legal, privacy, governance, partner, event, publication, and metric content.
- Establish a translation/locale strategy before adding more country pages.

### High

- Inventory all hardcoded page arrays and decide which should move into canonical content data.
- Centralize contact departments, legal contact emails, and department labels.
- Centralize homepage story cards, project steps, impact stats, partner cards, donation uses, and governance cards.
- Centralize support areas, Riders Rescue sections, and contact areas.
- Replace mixed-language shared component copy with locale-aware content sources.
- Define schemas for disciplines, news, events, publications, downloads, partners, resources, FAQ, social channels, and governance roles.
- Define CMS migration boundaries for Sanity/Strapi or backend content API.

### Medium

- Add a content validation checklist for roadmap/future claims.
- Add translation completeness checks for Romanian/English.
- Add content status taxonomy: active, pilot, roadmap, planned, under development, restricted, coming soon.
- Add asset metadata inventory for image purpose, owner, alt text, replacement status, and licensing.
- Add editorial style guide for GIUVA terminology, capitalization, diacritics, Romanian/English naming, and public safety wording.
- Add API/CMS field mapping for future backend-backed content.

### Low

- Add docs for content editing workflow.
- Add changelog section for content updates.
- Add screenshot/visual QA policy for content changes.
- Add future country content templates.
- Add reusable SEO metadata content templates.
- Add content lint ideas for disallowed claims or unsupported partnership language.

## 8. Future Content Tasks

- R2-007A: Canonical content source decision record.
- R2-007B: Legacy data file audit for `site-romania` and backup content.
- R2-007C: Hardcoded homepage content extraction plan.
- R2-007D: Legal/safety phrase registry plan.
- R2-007E: Contact information centralization plan.
- R2-007F: Locale schema and translation strategy.
- R2-007G: English content parity audit.
- R2-007H: Mixed-language component audit and remediation plan.
- R2-007I: CMS content model design for disciplines/news/events/publications/FAQ.
- R2-007J: Backend content API mapping plan.
- R2-007K: Asset inventory and metadata plan.
- R2-007L: Editorial governance and approval workflow.
- R2-007M: Roadmap/future-state taxonomy.
- R2-007N: Legal/privacy content completion plan.
- R2-007O: Multi-country content scalability plan.

## 9. Content Readiness Score

| Category | Score | Rationale |
| --- | ---: | --- |
| Content Organization | 5/10 | Strong `data/site.ts` exists, but content remains spread across pages, components, legacy files, and host helpers. |
| Maintainability | 5/10 | Central data helps, but duplicate files and hardcoded arrays create drift risk. |
| Localization | 3/10 | Locale roadmap and `/en` exist, but no real translation architecture or completeness model exists. |
| Scalability | 4/10 | Static data can support prototype scale; multi-country/CMS scale requires consolidation. |
| Brand Consistency | 6/10 | GIUVA boundaries and identity are strong, but mixed-language strings and duplicate claims need governance. |
| Editorial Consistency | 5/10 | Public safety wording is cautious, but no editorial style guide or approval workflow exists. |
| Overall Content Readiness | 5/10 | Solid prototype content foundation; not yet consolidated or governed for Release 1.0 scale. |

## 10. Final Recommendations

The content system should be treated as partially centralized, not fully consolidated. `data/site.ts` is the best current foundation, but the repository still contains older duplicate data files, page-level arrays, mixed-language shared component copy, hardcoded legal/privacy/contact text, and a placeholder CMS direction.

Recommended sequence:

1. Decide and document the canonical source of truth for Romanian content.
2. Mark legacy data files as non-authoritative in a future approved cleanup task.
3. Define content schemas and ownership before moving content.
4. Centralize legal/safety/contact phrases before expanding forms, partner pages, or country pages.
5. Build a real locale strategy before adding more English/Italian/country content.
6. Create CMS/API mapping only after static content ownership is clear.

No consolidation, translation, deletion, rename, move, or content modification was performed in R2-007. Approval is required before any implementation.

