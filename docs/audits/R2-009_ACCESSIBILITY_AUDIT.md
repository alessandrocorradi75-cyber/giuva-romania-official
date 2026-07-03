# R2-009 - Accessibility Audit and Remediation Plan

## 1. Accessibility Overview

This audit reviewed the current frontend implementation for accessibility readiness against GIUVA CORE v1.0 expectations. The review was performed by static repository inspection only. No source files were modified, no styles were changed, no packages were installed, no tests were created, and no automated accessibility tools were run.

The frontend has a solid accessibility baseline in several important areas:

- A root skip link is present.
- The application uses a semantic `main` landmark.
- Header, navigation, footer, sections, articles, forms, labels, buttons, and links are generally used appropriately.
- Focus styles are globally defined with `:focus-visible`.
- Reduced motion preferences are handled globally.
- Images generally include `alt` text.
- Decorative icons are commonly marked with `aria-hidden="true"`.
- Form inputs are usually wrapped in labels.
- Status and error messages use `role="status"`, `role="alert"`, or `aria-live` in several places.

The main accessibility risks are not caused by a complete absence of accessibility structure. They are caused by incomplete interaction semantics, inconsistent field-level validation feedback, possible mobile menu limitations, uncertain screen reader behavior for the GIUVA AI widget, unverified color contrast, and lack of automated or manual accessibility test coverage.

## 2. Current Accessibility Strengths

### Semantic Structure

Status: PASS

The application uses a root layout with:

- `html lang="ro"`
- A skip link targeting `#main-content`
- A semantic `main` element
- A header with primary navigation
- A semantic footer

Most content components use appropriate structural elements such as `section`, `article`, `nav`, `footer`, `h1`, `h2`, and `h3`.

### Landmarks

Status: PASS

Observed landmarks include:

- Primary navigation in `components/Navbar.tsx`
- Footer navigation in `components/Footer.tsx`
- Breadcrumb navigation in `components/portal/Breadcrumbs.tsx`
- Main content landmark in `app/layout.tsx`
- GIUVA AI widget rendered as an `aside`

The current landmark structure gives screen reader users a reasonable page map.

### Skip Link

Status: PASS

`app/layout.tsx` includes a skip link:

- Target: `#main-content`
- The target `main` has `tabIndex={-1}`
- The skip link becomes visible on focus through CSS

This is a strong accessibility feature for keyboard and screen reader users.

### Focus States

Status: PASS

Global focus styling exists in `styles/globals.css`:

- `:focus-visible` defines a high-visibility outline.
- Form fields define additional focus styles.
- The brand/home link has explicit focus-visible styling.

This creates a better keyboard navigation baseline than default browser-only styling.

### Reduced Motion

Status: PASS

`styles/globals.css` includes a `prefers-reduced-motion: reduce` rule that disables or minimizes transitions and animations. The current `MotionShell` component is inert, which lowers motion risk.

### Buttons and Links

Status: PASS

Interactive elements are generally implemented with native controls:

- Links use `Link` or `a`.
- GIUVA AI controls use real `button` elements.
- Form submit controls use real `button` elements.
- No broad pattern of clickable `div` or `span` elements was identified.

### Forms and Labels

Status: WARNING

The main form pattern in `components/MockForm.tsx` wraps inputs in labels, which is a good baseline. Select and textarea fields passed as children are also wrapped in labels in the inspected pages.

Remaining gaps:

- Required fields do not consistently expose field-level error text.
- Invalid fields are not programmatically connected to specific errors with `aria-invalid` or `aria-describedby`.
- Form-level error messages exist, but screen reader users may not know which field failed.
- Required checkboxes have visual text labels, but no explicit error association.

### Images and Icons

Status: WARNING

Most Next.js `Image` usages include `alt` text, and most lucide icons are decorative with `aria-hidden="true"`.

Remaining gaps:

- Some icon usage in dense inline page code does not consistently include `aria-hidden="true"`.
- Some image alt text appears descriptive but may be overly generic or duplicate nearby visible text.
- Decorative visual panels use labels in some places, but should be reviewed to ensure they do not create unnecessary screen reader noise.

### Screen Reader Readiness

Status: WARNING

The application has a reasonable structure for screen reader navigation, but several interactive patterns need refinement before being considered production-ready:

- Mobile menu state is managed by native `details`/`summary`, but expanded/collapsed state and close behavior need manual verification.
- GIUVA AI widget open/close behavior does not manage focus or announce panel opening.
- Search results use `aria-live`, but result count and empty state behavior should be explicit.
- Form validation is not field-specific.

## 3. Accessibility Weaknesses

1. Mobile menu behavior needs stronger accessibility guarantees.

   The mobile menu uses native `details` and `summary`, which is keyboard-accessible by default. However, it lacks explicit controlled state, escape-key close handling, route-change close behavior, focus containment considerations, and a clear relationship between the summary control and the menu panel.

2. GIUVA AI widget lacks focus management.

   The GIUVA AI widget opens a fixed panel from a button, but the implementation does not move focus into the opened panel, return focus to the launcher when closed, or expose the panel relationship with `aria-controls`/`aria-expanded`.

3. Form validation is not field-specific.

   `MockForm` validates form input and shows a form-level alert. This is useful, but individual fields do not receive `aria-invalid`, field-specific error text, or error IDs connected with `aria-describedby`.

4. Required field communication is incomplete.

   Required text fields use `required` and sometimes `aria-required`, but select, textarea, checkbox, and newsletter inputs rely mostly on native `required`. This is acceptable as a baseline, but not fully consistent.

5. Color contrast is not verified.

   The UI uses many custom color combinations, including blue/green text, white text on dark backgrounds, slate text on light surfaces, yellow accents, and translucent overlays. No automated or documented contrast verification exists.

6. Heading hierarchy is mostly logical but not systematically enforced.

   Most pages have a `PageHero` or homepage `h1`, followed by `h2` and `h3` sections. Some dense pages and cards use repeated `h2` elements inside grids. This is not automatically wrong, but heading structure should be manually verified by page.

7. Search result accessibility is partial.

   The search box has a label and live region, but does not announce result count, no-results state, or current query context.

8. Decorative and informative media need a formal policy.

   Images generally have alt text, but there is no central rule defining when alt text should be descriptive, empty, or derived from content.

9. Accessibility testing is not defined.

   No accessibility test scripts, CI gates, axe checks, keyboard walkthrough checklist, screen reader checklist, or WCAG acceptance criteria are currently documented as executable validation.

## 4. Critical Accessibility Issues

No confirmed critical accessibility blocker was identified through static inspection alone.

However, the following items should be treated as high priority because they can materially affect keyboard and screen reader users:

- GIUVA AI widget focus management and state announcement.
- Mobile menu keyboard and screen reader behavior.
- Form validation error association.
- Color contrast verification across the current palette.

These should be validated manually before public production release.

## 5. Medium Accessibility Risks

1. Mobile navigation may be hard to operate predictably with keyboard and screen readers.

   Native `details`/`summary` is a reasonable baseline, but the fixed-position summary and absolute panel should be tested on mobile, desktop keyboard, and screen readers.

2. GIUVA AI widget may cause focus loss.

   Opening a floating assistant panel without moving focus can leave keyboard users outside the newly opened content.

3. Form-level errors may be insufficient.

   A screen reader user may hear that the form has an error without knowing exactly which field needs correction.

4. Color contrast may vary across cards, overlays, dark bands, badges, and status pills.

   The codebase uses many color utility combinations and translucent backgrounds that require measured contrast review.

5. Search results may not announce enough context.

   `aria-live` is present, but users should also receive clear result counts and no-result messages.

6. Page-level heading structure may drift.

   The repository has many pages and repeated card components. Without a heading policy, future pages may introduce skipped or confusing heading levels.

7. Language consistency is partial.

   The root document language is Romanian, while the `/en` page contains English content under the same root `html lang="ro"`. A route-level language strategy is needed for multilingual accessibility.

8. External links do not consistently indicate new-tab behavior.

   Social links open in a new tab with `target="_blank"`, but visible or screen-reader-only disclosure is not consistently provided.

## 6. Low Accessibility Risks

1. Some decorative icons may be exposed to assistive technology.

   Most icons are hidden correctly, but inline page code should be reviewed for consistency.

2. Card links may use repeated or generic link text.

   Some repeated CTAs such as "Vezi detalii" or "Vezi sectiunea" are understandable visually but may need additional context for screen reader link lists.

3. Placeholder text exists in the search and newsletter fields.

   Labels are present, so this is not a direct failure, but placeholder-only patterns should continue to be avoided.

4. The fixed header and fixed AI widget may overlap content or controls at small viewport sizes.

   Static inspection cannot confirm this. Manual mobile keyboard and zoom testing is needed.

5. The visual hero fallback uses CSS-generated text.

   CSS-generated content may not be reliably exposed to assistive technologies. If the text is meaningful, it should exist in markup.

## 7. GIUVA CORE Accessibility Compliance

| Area | Status | Explanation |
| --- | --- | --- |
| Semantic HTML | PASS | The app uses semantic landmarks, sections, articles, headings, forms, links, and buttons in most places. |
| Landmarks | PASS | Main, nav, header, footer, breadcrumb nav, and aside are present. |
| Headings | WARNING | Heading structure is generally usable, but not systematically validated across all pages. |
| Navigation | WARNING | Desktop navigation is strong; mobile menu needs manual verification and stronger state semantics. |
| Mobile menu | WARNING | Uses native `details`/`summary`, but lacks explicit expanded state, focus handling, and close behavior. |
| Keyboard accessibility | WARNING | Native controls are mostly used, but mobile menu and GIUVA AI widget require keyboard walkthroughs. |
| Focus states | PASS | Global `:focus-visible` styling and form focus styles exist. |
| Skip links | PASS | Skip link is implemented and targets focusable main content. |
| Buttons and links | PASS | Interactive controls generally use native elements. |
| Forms | WARNING | Labels exist, but field-level errors and invalid state are incomplete. |
| Labels | PASS | Inputs, selects, and textareas inspected are generally label-wrapped. |
| Error states | WARNING | Form-level alert exists, but field-specific errors are missing. |
| Consent checkboxes | WARNING | Consent checkboxes have visible labels and required attributes, but no field-level error association. |
| Images and alt text | WARNING | Alt text is broadly present; quality and decorative/informative classification need review. |
| Icons | WARNING | Most icons are hidden from assistive tech; some inline icon usage should be checked. |
| Color contrast | WARNING | Palette appears intentional, but contrast has not been measured. |
| Motion/reduced motion | PASS | Global reduced-motion handling exists and current motion wrapper is inert. |
| ARIA usage | WARNING | Helpful ARIA exists, but some interactive state relationships are missing. |
| Modals/widgets | WARNING | GIUVA AI widget is not a modal, but it still needs focus and state management. |
| GIUVA AI widget | WARNING | Uses buttons and labels, but lacks focus movement, return focus, and expanded state semantics. |
| Responsive accessibility | WARNING | Responsive layout exists, but fixed header/menu/widget behavior needs manual zoom and mobile keyboard review. |
| Screen reader readiness | WARNING | Good baseline structure, but interactive announcements and multilingual language handling need work. |
| Accessibility testing readiness | FAIL | No formal accessibility tests, checklists, CI gates, or documented manual testing process exist. |

## 8. Accessibility Remediation Roadmap

### Critical

- Perform a manual keyboard audit across all primary routes.
- Perform a manual screen reader audit for homepage, navigation, forms, search, and GIUVA AI widget.
- Verify color contrast for all primary UI states and text/background combinations.
- Define WCAG 2.2 AA as the minimum public accessibility target for GIUVA CORE frontend work.

### High

- Add explicit focus management for GIUVA AI widget open and close behavior.
- Add `aria-expanded`, `aria-controls`, and stable IDs to GIUVA AI launcher and panel.
- Strengthen mobile menu semantics and keyboard behavior.
- Add field-level form errors with `aria-invalid` and `aria-describedby`.
- Add explicit error handling for required consent checkboxes.
- Add result count and no-results announcements to portal search.
- Define route-level language handling for Romanian and English content.

### Medium

- Create a heading hierarchy policy for page templates and card grids.
- Review all image alt text and classify images as informative or decorative.
- Add screen-reader context to repeated CTA links where needed.
- Add new-tab disclosure for external links that open separate tabs.
- Review fixed header and fixed widget behavior at 200 percent zoom and small mobile widths.
- Document accessible naming conventions for icon-only buttons and social links.

### Low

- Standardize `aria-hidden="true"` on all decorative icons.
- Avoid meaningful CSS-generated text unless the same meaning exists in HTML.
- Add consistent helper text for demo-only forms.
- Document placeholder usage rules.
- Keep reduced-motion handling in the global stylesheet as animation features expand.

## 9. Future Accessibility Tasks

### R2-009A - Manual Keyboard Navigation Audit

Audit keyboard navigation across homepage, primary pages, navigation, forms, search, and GIUVA AI widget. Document tab order, focus visibility, traps, and unreachable controls.

### R2-009B - Mobile Menu Accessibility Remediation

Improve mobile menu state semantics, keyboard behavior, close behavior, and screen reader announcements.

### R2-009C - GIUVA AI Widget Accessibility Remediation

Add focus management, expanded/collapsed state, panel relationship semantics, and return-focus behavior for the GIUVA AI widget.

### R2-009D - Form Error Accessibility

Implement field-level validation feedback with `aria-invalid`, field-specific messages, and checkbox consent error handling.

### R2-009E - Color Contrast Verification

Measure contrast for global palette, buttons, cards, badges, dark bands, overlays, links, form states, and status messages. Adjust failing combinations only after approval.

### R2-009F - Image Alt Text Governance

Create and apply an alt text policy for content images, decorative images, logos, hero images, and repeated card images.

### R2-009G - Multilingual Language Strategy

Define how Romanian and English routes should expose correct document or section language for assistive technologies.

### R2-009H - Search Accessibility Improvements

Improve portal search announcements for result count, empty results, and query state.

### R2-009I - Accessibility Testing Baseline

Create a future testing plan for manual checks, automated accessibility checks, keyboard regression checks, and CI reporting.

### R2-009J - Link and External Navigation Review

Review repeated CTA text and external links for screen reader clarity and new-tab disclosure.

## 10. Accessibility Readiness Score

| Area | Score | Rationale |
| --- | ---: | --- |
| Semantic Structure | 8 / 10 | Strong use of layout landmarks, sections, articles, headings, forms, links, and buttons. |
| Keyboard Navigation | 6 / 10 | Native controls and focus styles exist, but mobile menu and GIUVA AI widget need verification and stronger focus handling. |
| Forms | 6 / 10 | Labels and status messages exist; field-level errors and consent error associations are incomplete. |
| Images | 7 / 10 | Alt text is broadly present; quality and decorative/informative policy need review. |
| Color Contrast | 5 / 10 | Palette appears considered, but contrast has not been measured or documented. |
| Motion | 8 / 10 | Reduced-motion handling exists, and current motion abstraction is low risk. |
| Screen Reader Readiness | 6 / 10 | Good structural baseline, but interactive state, form errors, search announcements, and language handling need work. |
| Mobile Accessibility | 6 / 10 | Responsive layout exists; fixed header, mobile menu, and fixed AI widget need manual testing. |
| Overall Accessibility | 6 / 10 | The frontend has a credible baseline, but it is not yet accessibility-release-ready under GIUVA CORE v1.0. |

## 11. Final Recommendations

The repository should be treated as partially accessible but not yet GIUVA CORE v1.0 compliant for accessibility readiness.

The highest-value next step is not visual redesign. It is interaction hardening:

1. Validate keyboard navigation manually.
2. Fix GIUVA AI widget focus and state semantics.
3. Strengthen mobile menu behavior.
4. Add field-level form error accessibility.
5. Verify color contrast with documented results.
6. Establish an accessibility test and release checklist.

No remediation should be implemented until an implementation task is approved.
