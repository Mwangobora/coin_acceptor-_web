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
    <div
      className={cn(
        "bg-card rounded-xl border p-6 text-center shadow-sm",
        className,
      )}
    >
      <Icon
        className="text-muted-foreground mx-auto"
        size={36}
        aria-hidden="true"
      />
      <h2 className="text-card-foreground mt-4 text-base font-semibold">
        {title}
      </h2>
      <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
        {description}
      </p>
    </div>
  );
}
