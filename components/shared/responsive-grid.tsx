import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ResponsiveGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3", className)}
    >
      {children}
    </div>
  );
}
