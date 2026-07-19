import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingState({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex min-h-32 items-center justify-center gap-2 text-sm", className)}
      role="status"
      aria-live="polite"
    >
      <LoaderCircle className="animate-spin text-primary" size={18} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
