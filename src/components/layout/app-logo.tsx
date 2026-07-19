import { Zap } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function AppLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/admin"
      className="text-sidebar-foreground focus-visible:outline-ring flex min-h-11 items-center gap-3 rounded-md px-2 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md">
        <Zap size={18} aria-hidden="true" />
      </span>
      <span className={cn("min-w-0", compact && "sr-only")}>
        <span className="block truncate text-sm font-semibold">
          {siteConfig.name}
        </span>
        <span className="text-sidebar-foreground/70 block truncate text-xs">
          {siteConfig.operatorLabel}
        </span>
      </span>
    </Link>
  );
}
