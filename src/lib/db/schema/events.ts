import { sql } from "drizzle-orm";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const events = table("events", {
  id: t.int().primaryKey({ autoIncrement: true }),
  title: t.text().notNull(),
  description: t.text(),
  startsAt: t.text().notNull(),
  location: t.text(),
  capacity: t.int(),
  createdAt: t.text().notNull().default(sql`(current_timestamp)`),
  updatedAt: t.text().notNull().default(sql`(current_timestamp)`),
});
