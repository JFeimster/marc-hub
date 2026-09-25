# Marc Hub Architecture

## Current application

The repository root is the canonical Next.js application.

Public routes:

- `/`
- `/funding`
- `/equipment`
- `/resources`
- `/offers`
- `/tools`
- `/tools/funding-estimator`
- `/tools/equipment-budget`
- `/disclosures`

## Content source

`data/site.ts` is the initial source of truth for Marc's public profile, primary navigation cards, affiliate links, and tool registry.

This is deliberately simple. If the link inventory grows large, move the data into JSON, a CMS, Notion, Airtable, or another canonical registry without changing the public route structure.

## Future standalone applications

Reserved directories:

- `apps/funding-tool`
- `apps/equipment-site`
- `apps/calculator`

These are documentation-only placeholders today.

If a tool later deserves an independent Vercel project, build it inside its reserved directory and point that Vercel project's Root Directory there.

## Future shared packages

Reserved directories:

- `packages/ui`
- `packages/affiliate-data`
- `packages/tracking`

Do not extract shared packages until at least two deployable applications actually need the same code.
