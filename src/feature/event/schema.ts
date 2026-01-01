import { z } from "zod";

export const insertRsvpSchema = z
  .object({
    attendeeName: z.string().trim().min(1, "Name is required"),
    eventId: z.number().int().positive(),
  })
  .strict();

export type CreateRsvpInput = z.infer<typeof insertRsvpSchema>;
