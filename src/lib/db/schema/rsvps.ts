import { sql } from "drizzle-orm";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

import { events } from "./events";

export const rsvps = table("rsvps", {
  id: t.int().primaryKey({ autoIncrement: true }),
  eventId: t
    .int()
    .notNull()
    .references(() => events.id),
  attendeeName: t.text().notNull(),
  registeredAt: t.text().notNull().default(sql`(current_timestamp)`),
});
