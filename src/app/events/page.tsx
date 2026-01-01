import Link from "next/link";

import { getEventList } from "@/feature/event/query-service";
import { fromIsoToLocalDateTime } from "@/shared/date";

export default async function EventsPage() {
  const events = await getEventList();

  if (events.length === 0) {
    return (
      <main className="grid gap-3 p-6 max-w-3xl">
        <h1>Events</h1>
        <p>No events yet.</p>
      </main>
    );
  }

  return (
    <main className="grid gap-3 p-6 max-w-3xl">
      <h1>Events</h1>

      <ul className="grid gap-2 pl-4">
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.title}</Link>
            <div className="text-sm opacity-75">
              {fromIsoToLocalDateTime(event.startsAt)}
              {event.location !== null && ` / ${event.location}`}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
