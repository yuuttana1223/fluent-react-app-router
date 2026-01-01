type DateTimeFormatOptions = {
  locale?: string;
  timeZone?: string;
};

export function fromIsoToLocalDateTime(
  isoString: string,
  options: DateTimeFormatOptions = {}
): string {
  return new Date(isoString).toLocaleString(options.locale, {
    timeZone: options.timeZone,
  });
}
