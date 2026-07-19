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
    <section className={cn("rounded-xl border bg-card p-4 shadow-sm", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-card-foreground">{value}</p>
        </div>
        {Icon ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Icon size={18} aria-hidden="true" />
          </span>
        ) : null}
      </div>
      {helper ? <p className="mt-3 text-xs text-muted-foreground">{helper}</p> : null}
    </section>
  );
}
