import { describe, expect, it } from "vitest";

import { insertRsvpSchema } from "@/feature/event/schema";

describe("insertRsvpSchema", () => {
  it("有効な入力なら通る", () => {
    const result = insertRsvpSchema.safeParse({
      attendeeName: "Alice",
      eventId: 1,
    });

    expect(result.success).toBe(true);
  });

  it("空白だけのattendeeNameは失敗する", () => {
    const result = insertRsvpSchema.safeParse({
      attendeeName: "   ",
      eventId: 1,
    });

    expect(result.success).toBe(false);
  });

  it("eventIdが正の整数でないと失敗する", () => {
    // eventId must be positive.
    const result = insertRsvpSchema.safeParse({
      attendeeName: "Alice",
      eventId: 0,
    });

    expect(result.success).toBe(false);
  });

  it("registeredAtは入力に含めない", () => {
    const result = insertRsvpSchema.safeParse({
      attendeeName: "Alice",
      eventId: 1,
      registeredAt: "not-a-date",
    });

    expect(result.success).toBe(false);
  });
});
