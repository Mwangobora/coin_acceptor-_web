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
    <div
      className={cn(
        "bg-card w-full overflow-x-auto rounded-xl border shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
