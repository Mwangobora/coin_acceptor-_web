import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { badgeBase, statusClasses } from "./badge-styles";

const statusBadgeVariants = cva(badgeBase, {
  variants: {
    variant: statusClasses,
  },
  defaultVariants: {
    variant: "idle",
  },
});

type StatusBadgeProps = VariantProps<typeof statusBadgeVariants> & {
  children?: string;
  className?: string;
};

const labels = {
  online: "Online",
  offline: "Offline",
  charging: "Charging",
  idle: "Idle",
  warning: "Warning",
  maintenance: "Maintenance",
  critical: "Critical",
  completed: "Completed",
  pending: "Pending",
};

export function StatusBadge({
  variant = "idle",
  children,
  className,
}: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ variant }), className)}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {children ?? labels[variant ?? "idle"]}
    </span>
  );
}
