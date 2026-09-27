# MAXY Media Inventory

MAXY Media Inventory is a grocery stock manager for tracking products, stock movements, alerts, reports, and store settings.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/maxy-inventory/src/App.tsx` — frontend routes, screens, and API-backed interactions
- `artifacts/maxy-inventory/src/index.css` — application theme and responsive styling
- `artifacts/api-server/src/routes/` — inventory API route handlers
- `lib/api-spec/openapi.yaml` — source of truth for API contracts
- `lib/db/src/schema/` — PostgreSQL schema for products, settings, and stock movements

## Architecture decisions

- Inventory data is stored in PostgreSQL rather than browser storage so changes persist across reloads and sessions.
- OpenAPI drives generated React Query hooks and server-side Zod validation.
- Stock movements update the product quantity and append an audit record in one database transaction.

## Product

The app provides a dashboard, product CRUD, stock movement recording, inventory reports, and shared store settings.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Run API codegen after changing `lib/api-spec/openapi.yaml`.
- Push development schema changes with `pnpm --filter @workspace/db run push`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
