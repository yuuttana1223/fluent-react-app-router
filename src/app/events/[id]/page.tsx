import Link from "next/link";
import { notFound } from "next/navigation";

import { addRsvpAction } from "@/feature/event/action/add-rsvp";
import { getEventDetail } from "@/feature/event/query-service";
import { fromIsoToLocalDateTime } from "@/shared/date";

type Props = { params: Promise<{ id: string }> };

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const eventId = Number(id);

  if (!Number.isInteger(eventId)) {
    notFound();
  }

  const event = await getEventDetail(eventId);

  if (event === null) {
    notFound();
  }

  return (
    <main className="grid gap-4 p-6 max-w-3xl">
      <Link href="/events">← Back</Link>

      <section className="grid gap-2">
        <h1>{event.title}</h1>

        <div className="text-sm opacity-75">
          {fromIsoToLocalDateTime(event.startsAt)}
          {event.location !== null && ` / ${event.location}`}
        </div>

        {event.description && <p>{event.description}</p>}

        <div className="text-sm opacity-75">
          capacity: {event.capacity ?? "-"}
        </div>
      </section>

      <section className="grid gap-2">
        <h2>RSVP</h2>
        <form action={addRsvpAction.bind(null, eventId)} className="flex gap-2">
          <input
            name="attendeeName"
            placeholder="Your name"
            required
            className="flex-1"
          />
          <button type="submit">Join</button>
        </form>
      </section>
    </main>
  );
}
