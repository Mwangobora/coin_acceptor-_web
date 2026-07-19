import type { LucideIcon } from "lucide-react";

export type AdminNavigationItem = {
  title: string;
  href: string | null;
  icon: LucideIcon;
  disabled?: boolean;
};
