"use client";

import { Smartphone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useMobileConsole } from "../hooks/use-mobile-console";
import { MobileActions } from "./mobile-actions";

export function MobileConsole() {
  const console = useMobileConsole();

  return (
    <PageContainer>
      <PageHeader
        title="Mobile Device APIs"
        description="Exercise device-facing package, payment, command, and event APIs."
      />
      <div className="grid gap-4 xl:grid-cols-[420px_1fr]">
        <section className="bg-card grid gap-4 rounded-xl border p-5">
          <Header />
          <label className="grid gap-2 text-sm font-medium">
            Device API key
            <Input
              value={console.apiKey}
              onChange={(event) => console.setApiKey(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Payment reference
            <Input
              value={console.reference}
              onChange={(event) => console.setReference(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            JSON payload
            <Textarea
              value={console.payload}
              onChange={(event) => console.setPayload(event.target.value)}
            />
          </label>
          <MobileActions
            busy={console.busy || !console.apiKey}
            run={console.run}
            reference={console.reference}
            payload={console.payload}
          />
        </section>
        <section className="bg-card rounded-xl border p-5">
          <h2 className="mb-3 font-semibold">Response</h2>
          <pre className="bg-muted max-h-[70dvh] overflow-auto rounded-md p-4 text-xs">
            {JSON.stringify(
              console.result ?? { status: "No request yet" },
              null,
              2,
            )}
          </pre>
        </section>
      </div>
    </PageContainer>
  );
}

function Header() {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-md">
        <Smartphone size={18} />
      </span>
      <h2 className="font-semibold">Device API console</h2>
    </div>
  );
}
