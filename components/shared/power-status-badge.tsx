import { Battery, Cable, PlugZap, ZapOff } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { badgeBase, powerClasses } from "./badge-styles";

const powerStatusBadgeVariants = cva(badgeBase, {
  variants: {
    variant: powerClasses,
  },
  defaultVariants: {
    variant: "grid",
  },
});

type PowerStatusBadgeProps = VariantProps<typeof powerStatusBadgeVariants> & {
  className?: string;
};

const labels = {
  grid: "Grid power",
  backup: "Backup battery",
  disconnected: "Disconnected",
  failure: "Power failure",
};

const icons = {
  grid: PlugZap,
  backup: Battery,
  disconnected: Cable,
  failure: ZapOff,
};

export function PowerStatusBadge({ variant = "grid", className }: PowerStatusBadgeProps) {
  const Icon = icons[variant ?? "grid"];

  return (
    <span className={cn(powerStatusBadgeVariants({ variant }), className)}>
      <Icon size={14} aria-hidden="true" />
      {labels[variant ?? "grid"]}
    </span>
  );
}
