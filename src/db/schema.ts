import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leadsTable = sqliteTable("leads_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});
