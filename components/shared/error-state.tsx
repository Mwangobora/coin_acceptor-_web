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
    <div className={cn("rounded-xl border bg-card p-6 shadow-sm", className)} role="alert">
      <div className="flex gap-3">
        <TriangleAlert className="mt-0.5 text-destructive" size={20} aria-hidden="true" />
        <div>
          <h2 className="text-base font-semibold text-card-foreground">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
