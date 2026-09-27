import { integer, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const settingsTable = pgTable("inventory_settings", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  ownerId: text("owner_id").notNull().default("legacy"),
  businessName: text("business_name").notNull().default("MAXY Media"),
  currency: text("currency").notNull().default("USD"),
  lowStockThreshold: integer("low_stock_threshold").notNull().default(8),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  ownerIdx: uniqueIndex("inventory_settings_owner_idx").on(table.ownerId),
}));

export type Settings = typeof settingsTable.$inferSelect;
export type InsertSettings = Omit<Settings, "updatedAt">;
