import { format, formatDistanceToNow, isValid, parseISO } from "date-fns";

type DateInput = Date | string | number | null | undefined;

function toValidDate(value: DateInput) {
  if (!value) return null;
  const date = typeof value === "string" ? parseISO(value) : new Date(value);
  return isValid(date) ? date : null;
}

export function formatDate(value: DateInput) {
  const date = toValidDate(value);
  return date ? format(date, "dd MMM yyyy") : "Unavailable";
}

export function formatDateTime(value: DateInput) {
  const date = toValidDate(value);
  return date ? format(date, "dd MMM yyyy, HH:mm") : "Unavailable";
}

export function formatTime(value: DateInput) {
  const date = toValidDate(value);
  return date ? format(date, "HH:mm") : "Unavailable";
}

export function formatRelativeTime(value: DateInput) {
  const date = toValidDate(value);
  return date ? formatDistanceToNow(date, { addSuffix: true }) : "Unavailable";
}
