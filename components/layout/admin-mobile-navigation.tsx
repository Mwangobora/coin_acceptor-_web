"use client";

import { Menu } from "lucide-react";
import { adminNavigation } from "@/config/admin-navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppLogo } from "./app-logo";
import { SidebarNavigationItem } from "./sidebar-navigation-item";

export function AdminMobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="border-b border-sidebar-border p-4 pr-14">
          <AppLogo />
          <SheetTitle className="sr-only">Admin navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation for admin monitoring sections.
          </SheetDescription>
        </div>
        <nav aria-label="Mobile admin navigation" className="grid gap-1 p-3">
          {adminNavigation.map((item) => (
            <SidebarNavigationItem key={item.title} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
