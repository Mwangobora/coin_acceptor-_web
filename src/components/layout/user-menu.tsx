"use client";

import { User } from "lucide-react";

import ActionButton from "@/components/ui/action-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser, useLogout } from "@/features/auth/hooks/use-auth";

export function UserMenu() {
  const user = useCurrentUser();
  const logout = useLogout();
  const name = user.data?.fullName ?? "Admin Operator";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ActionButton
          type="button"
          action="outline"
          size="icon"
          aria-label="User menu"
        >
          <User size={18} aria-hidden="true" />
        </ActionButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border my-1 h-px" />
        <DropdownMenuItem>{user.data?.email ?? "Signed in"}</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => logout.mutate()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
