# Marc Hub

A deploy-ready Next.js starter for Marc Lampert's public affiliate/resource hub.

The initial visual system intentionally borrows the **neo-brutalist framework** used on the existing Moonshine Capital partner site: oversized uppercase typography, thick black borders, flat high-contrast color blocks, hard shadows, numbered cards, compact utility navigation, and direct CTAs.

## What is included

- `/` — main link-in-bio style hub
- `/funding` — funding resources
- `/equipment` — equipment / expansion resources
- `/resources` — guides and reference content
- `/offers` — affiliate and partner offers
- `/tools` — tool directory
- `/tools/funding-estimator` — reserved future tool route
- `/tools/equipment-budget` — reserved future tool route
- `/disclosures` — affiliate and funding disclosure surface
- `data/site.ts` — single editable source for Marc's public links/content
- `apps/` — reserved boundary for future standalone Marc applications
- `packages/` — reserved boundary for shared UI/data/tracking modules

## Local development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Before publishing real affiliate links

Edit:

```text
data/site.ts
```

Add each confirmed link once and set `enabled: true`.

The affiliate disclosure page is intentionally a placeholder. Replace it with the final language required by the affiliate programs and financing relationships actually used.

## Architecture

Start new ideas as routes inside the main hub.

Only promote something into `apps/` when it genuinely needs its own deployment, domain, runtime, or independent product identity. That keeps the repo simple now without boxing it in later.
