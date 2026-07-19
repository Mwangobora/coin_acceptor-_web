import type { LucideIcon } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
};

export function EmptyState({
  title,
  description,
  icon: Icon = LayoutDashboard,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 text-center shadow-sm", className)}>
      <Icon className="mx-auto text-muted-foreground" size={36} aria-hidden="true" />
      <h2 className="mt-4 text-base font-semibold text-card-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
