import { beforeEach, describe, expect, it, vi } from "vitest";

import { addRsvpAction } from "./add-rsvp";
import { createRsvp } from "@/feature/event/usecase";
import { rsvpRepository } from "@/feature/event/infrastructure/repository";
import { revalidatePath } from "next/cache";

vi.mock("@/feature/event/usecase", () => ({
  createRsvp: vi.fn(),
}));

vi.mock("@/feature/event/infrastructure/repository", () => ({
  rsvpRepository: { insertRsvp: vi.fn() },
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

describe("addRsvpAction", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("入力が有効ならcreateRsvpとrevalidatePathを呼ぶ", async () => {
    const eventId = 123;
    const formData = new FormData();
    formData.set("attendeeName", "  Alice  ");

    await addRsvpAction(eventId, formData);

    expect(createRsvp).toHaveBeenCalledWith(rsvpRepository, {
      attendeeName: "Alice",
      eventId,
    });
    expect(revalidatePath).toHaveBeenCalledWith(`/events/${eventId}`);
  });

  it("入力が不正なら例外を投げる", async () => {
    const eventId = 123;
    const formData = new FormData();
    formData.set("attendeeName", "   ");

    await expect(addRsvpAction(eventId, formData)).rejects.toThrow(
      "Invalid RSVP data"
    );
  });
});
