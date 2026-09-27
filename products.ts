import { integer, numeric, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  ownerId: text("owner_id").notNull().default("legacy"),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: numeric("price", { precision: 12, scale: 2, mode: "number" }).notNull(),
  quantity: integer("quantity").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  ownerNameCategoryIdx: uniqueIndex("products_owner_name_category_idx").on(table.ownerId, table.name, table.category),
}));

export type Product = typeof productsTable.$inferSelect;
export type InsertProduct = Omit<Product, "id" | "createdAt" | "updatedAt">;
