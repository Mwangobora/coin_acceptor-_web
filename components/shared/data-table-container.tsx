import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DataTableContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-xl border bg-card shadow-sm", className)}>
      {children}
    </div>
  );
}
