import "server-only";

import type { RsvpRepository } from "@/feature/event/usecase";
import { db } from "@/lib/db";
import { rsvps } from "@/lib/db/schema";

export const rsvpRepository: RsvpRepository = {
  async insertRsvp(input) {
    await db.insert(rsvps).values(input);
  },
};
