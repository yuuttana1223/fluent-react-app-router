import "server-only";

import type { CreateRsvpInput } from "@/feature/event/schema";

export type RsvpRepository = {
  insertRsvp(input: CreateRsvpInput): Promise<void>;
};

export async function createRsvp(
  repository: RsvpRepository,
  input: CreateRsvpInput
) {
  await repository.insertRsvp(input);
}
