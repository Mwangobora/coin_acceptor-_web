import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  helper?: string;
  icon?: LucideIcon;
  className?: string;
};

export function MetricCard({
  label,
  value,
  helper,
  icon: Icon,
  className,
}: MetricCardProps) {
  return (
    <section
      className={cn("bg-card rounded-xl border p-4 shadow-sm", className)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-muted-foreground truncate text-sm">{label}</p>
          <p className="text-card-foreground mt-2 text-2xl font-semibold">
            {value}
          </p>
        </div>
        {Icon ? (
          <span className="bg-accent text-accent-foreground flex size-10 shrink-0 items-center justify-center rounded-md">
            <Icon size={18} aria-hidden="true" />
          </span>
        ) : null}
      </div>
      {helper ? (
        <p className="text-muted-foreground mt-3 text-xs">{helper}</p>
      ) : null}
    </section>
  );
}
