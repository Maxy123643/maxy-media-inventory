# MAXY Media Inventory — Run Locally

## 1. Install prerequisites

- Node.js 20+
- pnpm 10+
- PostgreSQL 14+

## 2. Environment

Create `.env` from the supplied example:

```bash
cp .env.example .env
```

Set:

```text
DATABASE_URL=...
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
VITE_CLERK_PUBLISHABLE_KEY=...
```

## 3. Install and prepare PostgreSQL

```bash
pnpm install
pnpm --filter @workspace/db run push
```

The schema includes per-account ownership for products, stock movements, and settings. When upgrading the original prototype database, the first authenticated account automatically adopts records that still carry the `legacy` owner marker.

## 4. Start the API

Terminal 1:

```bash
PORT=8080 pnpm --filter @workspace/api-server run dev
```

## 5. Start the frontend

Terminal 2:

```bash
PORT=22217 BASE_PATH=/ API_PORT=8080 pnpm --filter @workspace/maxy-inventory run dev
```

## 6. Open the application

```text
http://localhost:22217
```

## 7. Production notes

Do not commit `.env` or Clerk secret keys. Use a managed PostgreSQL database and HTTPS in production. Run database schema changes through a controlled deployment process rather than blindly applying development changes to production.

The application is currently user-isolated. For a larger international SaaS deployment, use Clerk Organizations as the tenant boundary and add organization roles/permissions before onboarding multiple companies into the same database.
