"use client";

import { Smartphone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getApiErrorMessage } from "@/lib/api/api-error";

import { deviceRequest } from "../api/device-api";
import { MobileActions } from "./mobile-actions";

export function MobileConsole() {
  const [apiKey, setApiKey] = useState("");
  const [reference, setReference] = useState("");
  const [payload, setPayload] = useState("{}");
  const [result, setResult] = useState<unknown>(null);
  const [busy, setBusy] = useState(false);

  async function run(path: string, method: "get" | "post", body?: unknown) {
    setBusy(true);
    try {
      const data = await deviceRequest({
        apiKey,
        path,
        method,
        body,
      });
      setResult(data);
      toast.success("Device request completed");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageContainer>
      <PageHeader
        title="Mobile Device APIs"
        description="Exercise device-facing package, payment, command, and event APIs."
      />
      <div className="grid gap-4 xl:grid-cols-[420px_1fr]">
        <section className="bg-card grid gap-4 rounded-lg border p-5">
          <Header />
          <label className="grid gap-2 text-sm font-medium">
            Device API key
            <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Payment reference
            <Input
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            JSON payload
            <Textarea
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
            />
          </label>
          <MobileActions
            busy={busy || !apiKey}
            run={run}
            reference={reference}
            payload={payload}
          />
        </section>
        <section className="bg-card rounded-lg border p-5">
          <h2 className="mb-3 font-semibold">Response</h2>
          <pre className="bg-muted max-h-[70dvh] overflow-auto rounded-md p-4 text-xs">
            {JSON.stringify(result ?? { status: "No request yet" }, null, 2)}
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
