import { sqliteTable, int } from "drizzle-orm/sqlite-core";

export const events = sqliteTable("events", {
  id: int().primaryKey({ autoIncrement: true }),
});
