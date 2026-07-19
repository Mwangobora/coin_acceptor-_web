import { AdminMobileNavigation } from "./admin-mobile-navigation";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <AdminMobileNavigation />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Admin Monitoring</p>
          <p className="truncate text-xs text-muted-foreground">
            Charging station operations
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
