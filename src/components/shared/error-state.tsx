import { TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

export function ErrorState({
  title = "Unable to load content",
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-card rounded-xl border p-6 shadow-sm", className)}
      role="alert"
    >
      <div className="flex gap-3">
        <TriangleAlert
          className="text-destructive mt-0.5"
          size={20}
          aria-hidden="true"
        />
        <div>
          <h2 className="text-card-foreground text-base font-semibold">
            {title}
          </h2>
          {description ? (
            <p className="text-muted-foreground mt-1 text-sm">{description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
