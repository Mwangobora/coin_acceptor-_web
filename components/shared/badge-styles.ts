export const badgeBase =
  "inline-flex min-h-7 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium";

export const statusClasses = {
  online: "border-[var(--status-online)] text-[var(--status-online)]",
  offline: "border-[var(--status-offline)] text-[var(--status-offline)]",
  charging: "border-[var(--status-charging)] text-[var(--status-charging)]",
  idle: "border-[var(--status-idle)] text-[var(--status-idle)]",
  warning: "border-[var(--status-warning)] text-[var(--status-warning)]",
  maintenance: "border-[var(--status-maintenance)] text-[var(--status-maintenance)]",
  critical: "border-[var(--status-critical)] text-[var(--status-critical)]",
  completed: "border-[var(--status-online)] text-[var(--status-online)]",
  pending: "border-[var(--status-processing)] text-[var(--status-processing)]",
};

export const paymentClasses = {
  coin: "border-[var(--payment-coin)] text-[var(--payment-coin)]",
  qr: "border-[var(--payment-qr)] text-[var(--payment-qr)]",
};

export const powerClasses = {
  grid: "border-[var(--power-grid)] text-[var(--power-grid)]",
  backup: "border-[var(--power-backup)] text-[var(--power-backup)]",
  disconnected: "border-[var(--power-disconnected)] text-[var(--power-disconnected)]",
  failure: "border-[var(--power-failure)] text-[var(--power-failure)]",
};
