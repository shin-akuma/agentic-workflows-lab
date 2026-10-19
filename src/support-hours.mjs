export function isSupportOpen(date, isPublicHoliday = false) {
  const weekday = date.getUTCDay();
  if (isPublicHoliday || weekday === 0 || weekday === 6) {
    return false;
  }

  const opening = new Date(date);
  opening.setUTCHours(8, 0, 0, 0);
  const closing = new Date(date);
  closing.setUTCHours(18, 0, 0, 0);

  return date >= opening && date < closing;
}