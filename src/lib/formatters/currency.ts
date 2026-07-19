const tzsFormatter = new Intl.NumberFormat("en-TZ", {
  style: "currency",
  currency: "TZS",
  maximumFractionDigits: 0,
});

export function formatTanzaniaShilling(value?: number | null) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "TZS 0";
  }

  return tzsFormatter.format(value).replace("TZS", "TZS ");
}
