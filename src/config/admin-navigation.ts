import {
  BatteryCharging,
  ChartNoAxesCombined,
  CreditCard,
  LayoutDashboard,
  MapPin,
  ScrollText,
  Settings,
  Timer,
  TriangleAlert,
  Users,
} from "lucide-react";

import type { AdminNavigationItem } from "@/types/navigation";

export const adminNavigation: AdminNavigationItem[] = [
  { title: "Overview", href: "/admin", icon: LayoutDashboard },
  { title: "Stations", href: null, icon: MapPin, disabled: true },
  {
    title: "Charging Units",
    href: null,
    icon: BatteryCharging,
    disabled: true,
  },
  { title: "Charging Sessions", href: null, icon: Timer, disabled: true },
  { title: "Payments", href: null, icon: CreditCard, disabled: true },
  { title: "Alerts", href: null, icon: TriangleAlert, disabled: true },
  { title: "Reports", href: null, icon: ChartNoAxesCombined, disabled: true },
  { title: "Audit Logs", href: null, icon: ScrollText, disabled: true },
  { title: "Users", href: null, icon: Users, disabled: true },
  { title: "Settings", href: null, icon: Settings, disabled: true },
];
