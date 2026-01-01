import "server-only";

import {
  fetchEventById,
  fetchEvents,
} from "@/feature/event/infrastructure/query";
import type { EventId } from "@/feature/event/domain";
import type { EventDetail, EventListItem } from "@/feature/event/dto";

export async function getEventList(): Promise<EventListItem[]> {
  return fetchEvents();
}

export async function getEventDetail(
  eventId: EventId
): Promise<EventDetail | null> {
  return fetchEventById(eventId);
}
