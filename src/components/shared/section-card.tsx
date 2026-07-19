import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionCard({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "bg-card rounded-xl border p-4 shadow-sm sm:p-6",
        className,
      )}
    >
      {title || description ? (
        <div className="mb-4">
          {title ? (
            <h2 className="text-card-foreground text-base font-semibold">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-muted-foreground mt-1 text-sm">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
