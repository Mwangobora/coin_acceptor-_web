"use client";

import { Plus, RefreshCw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
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
      <Button variant="outline" onClick={props.onRefresh}>
        <RefreshCw size={16} />
        Refresh
      </Button>
      {props.canCreate ? (
        <Button onClick={props.onCreate}>
          <Plus size={16} />
          Create
        </Button>
      ) : null}
    </div>
  );
}
