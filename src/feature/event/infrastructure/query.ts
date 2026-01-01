import "server-only";

import { asc, eq } from "drizzle-orm";

import type { EventDetail, EventListItem } from "@/feature/event/dto";
import { db } from "@/lib/db";
import { events } from "@/lib/db/schema";
import type { EventId } from "@/feature/event/domain";

type EventRecord = typeof events.$inferSelect;

const toEventListItem = (record: EventRecord): EventListItem => ({
  id: record.id,
  title: record.title,
  startsAt: record.startsAt,
  location: record.location,
});

const toEventDetail = (record: EventRecord): EventDetail => ({
  id: record.id,
  title: record.title,
  description: record.description,
  startsAt: record.startsAt,
  location: record.location,
  capacity: record.capacity,
});

export async function fetchEvents(): Promise<EventListItem[]> {
  const records = await db.select().from(events).orderBy(asc(events.startsAt));
  return records.map(toEventListItem);
}

export async function fetchEventById(id: EventId): Promise<EventDetail | null> {
  const record = await db.select().from(events).where(eq(events.id, id)).get();

  if (record === undefined) {
    return null;
  }

  return toEventDetail(record);
}
