import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { productsTable } from "./products";

export const stockMovementsTable = pgTable("stock_movements", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  ownerId: text("owner_id").notNull().default("legacy"),
  productId: integer("product_id").notNull().references(() => productsTable.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type StockMovement = typeof stockMovementsTable.$inferSelect;
export type InsertStockMovement = Omit<StockMovement, "id" | "createdAt">;
