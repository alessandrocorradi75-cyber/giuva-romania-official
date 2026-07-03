# R3-002 - CI and Validation Baseline

## Purpose

R3-002 creates the first repeatable validation gate for the GIUVA Romania repository. The goal is to make future implementation work pass the same minimum checks locally and in GitHub Actions.

## Scope

Implemented scope:

- Reused existing frontend validation commands.
- Added `npm run validate` as a combined local quality gate.
- Added GitHub Actions CI for `main` pushes and pull requests.
- CI installs dependencies with `npm ci`.
- CI runs `npm run lint`.
- CI runs `npm run build`.

Out of scope:

- Backend tests.
- New testing frameworks.
- New dependencies.
- Runtime behavior changes.
- UI or content changes.

## Local Commands

```bash
npm run lint
npm run build
npm run validate
```

## CI Workflow

Workflow file:

```text
.github/workflows/ci.yml
```

Triggers:

- Pushes to `main`.
- Pull requests targeting `main`.

Validation job:

1. Checkout repository.
2. Setup Node.js 22.
3. Install dependencies with `npm ci`.
4. Run lint.
5. Run build.

## R3 Baseline Decision

This baseline is intentionally minimal. It establishes the first required validation gate without expanding scope into backend testing, Playwright, accessibility automation, dependency audit, or deployment checks.

Future R3 tasks should extend this baseline incrementally.
