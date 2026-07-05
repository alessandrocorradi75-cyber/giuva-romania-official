# Release Checklist Placeholder

## Pre-Release Gates

- Confirm working tree is clean before release preparation.
- Run lint validation.
- Run build validation where possible.
- Run backend syntax and startup validation where supported.
- Review database migration chain.
- Confirm no secrets or local files are staged.
- Confirm public claims and public content have approval.
- Confirm deployment environment variables are configured outside the repository.

## Release Gates

- Create release commit.
- Push to remote.
- Create release tag.
- Verify deployment pipeline result.
- Run post-deployment smoke checks.
- Record release notes and operational observations.

## Rollback Gates

- Identify previous known-good tag.
- Confirm database migration rollback safety.
- Restore prior deployment artifact if needed.
- Record incident and follow-up actions.

## Current Status

This checklist is a placeholder and does not execute release, deployment or rollback commands.
