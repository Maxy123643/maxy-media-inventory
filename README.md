# MAXY Media Inventory

A production-minded inventory workspace for small businesses and growing teams. The current build provides product management, stock movements, low-stock monitoring, reporting, configurable currency, Clerk authentication, PostgreSQL persistence, and responsive desktop/mobile UI.

## Run locally

Requirements:
- Node.js 20+
- pnpm 10+
- PostgreSQL 14+

```bash
cp .env.example .env
pnpm install
pnpm --filter @workspace/db run push
PORT=8080 pnpm --filter @workspace/api-server run dev
PORT=22217 BASE_PATH=/ API_PORT=8080 pnpm --filter @workspace/maxy-inventory run dev
```

Open `http://localhost:22217`.

Required environment variables:
- `DATABASE_URL`
- `CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `VITE_CLERK_PUBLISHABLE_KEY`

## Production direction

The data layer now scopes inventory records to the authenticated Clerk user. This prevents one signed-in account from reading or changing another account's products, settings, or stock movements. A one-time `legacy` ownership path is included so an existing single-user prototype database can be adopted by its first authenticated account.

The settings model also stores an ISO-style three-letter currency code and the UI formats monetary values using `Intl.NumberFormat`, allowing the same application to be used in different markets.

For a full multi-company deployment, the next architectural step is to replace user ownership with Clerk Organizations (workspace/tenant IDs), then add organization roles, locations/warehouses, suppliers, purchase orders, audit logs, exports, and granular permissions.

## Design principles

- Operational clarity over decoration
- Fast scanning for stock decisions
- Restrained color use with MAXY red as the action/status accent
- Responsive layouts for desktop, tablet, and mobile
- Server-side validation and database transactions for stock changes
- No browser-only storage for inventory state
