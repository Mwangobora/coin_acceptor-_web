"use client";

import { Plus, RefreshCw, Search } from "lucide-react";

import ActionButton from "@/components/ui/action-button";
import { Input } from "@/components/ui/input";

export function ResourceToolbar(props: {
  search: string;
  canCreate: boolean;
  onSearch: (value: string) => void;
  onCreate: () => void;
  onRefresh: () => void;
}) {
  return (
    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search
          className="text-muted-foreground absolute top-3 left-3"
          size={16}
        />
        <Input
          className="pl-9"
          value={props.search}
          onChange={(event) => props.onSearch(event.target.value)}
        />
      </div>
      <ActionButton action="outline" onClick={props.onRefresh}>
        <RefreshCw size={16} />
        Refresh
      </ActionButton>
      {props.canCreate ? (
        <ActionButton onClick={props.onCreate}>
          <Plus size={16} />
          Create
        </ActionButton>
      ) : null}
    </div>
  );
}
