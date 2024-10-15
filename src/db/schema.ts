import { int, sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const leadsTable = sqliteTable("leads_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull(),
  mobile: text().notNull(),
  postcode: integer().notNull(),
  service: text().notNull(),
});
