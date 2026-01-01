import { describe, expect, it } from "vitest";

import { fromIsoToLocalDateTime } from "@/shared/date";

describe("fromIsoToLocalDateTime", () => {
  it("Asia/Tokyoのローカル時刻として表示される", () => {
    const iso = "2024-11-06T08:00:00.000Z";

    expect(
      fromIsoToLocalDateTime(iso, {
        locale: "ja-JP",
        timeZone: "Asia/Tokyo",
      })
    ).toBe("2024/11/06 17:00:00");
  });
});
