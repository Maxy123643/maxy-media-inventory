# MAXY Media Inventory — Pro Upgrade

## UI / UX
- Reworked the application visual system for a more restrained enterprise/SaaS appearance.
- MAXY branding now uses black, white, neutral gray and controlled red action accents.
- Improved navigation, cards, tables, forms, dialogs, mobile behavior and authentication screens.
- Reduced decorative effects and visual noise so operational data remains the focus.

## International readiness
- Added configurable currency to workspace settings.
- Monetary values now use `Intl.NumberFormat` instead of hard-coded `$` output.
- Included common currency options for multiple markets.

## Security / data isolation
- Added authenticated ownership to products, settings and stock movements.
- Product updates and deletes are now constrained to the signed-in owner's records.
- Stock movement operations verify product ownership before changing quantities.
- Legacy prototype records can be adopted by the first authenticated account during upgrade.

## Database
- Added owner indexes and a per-owner product/category/name uniqueness rule.
- Increased product price precision from 10,2 to 12,2.

## Important
The environment used to prepare this package could not access the public npm registry, so a full dependency installation and production build could not be executed here. The source-level changes were checked for structural consistency. Run `pnpm install`, typecheck and build locally/Replit before deploying.
