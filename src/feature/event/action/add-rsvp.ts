"use server";

import { insertRsvpSchema } from "@/feature/event/schema";
import { createRsvp } from "@/feature/event/usecase";
import { rsvpRepository } from "@/feature/event/infrastructure/repository";
import { revalidatePath } from "next/cache";

export async function addRsvpAction(eventId: number, formData: FormData) {
  const rawFormData = {
    attendeeName: formData.get("attendeeName"),
    eventId,
  };

  const parsedResult = insertRsvpSchema.safeParse(rawFormData);

  if (!parsedResult.success) {
    throw new Error("Invalid RSVP data", { cause: parsedResult.error });
  }

  await createRsvp(rsvpRepository, parsedResult.data);

  revalidatePath(`/events/${eventId}`);
}
