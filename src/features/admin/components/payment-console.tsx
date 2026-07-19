"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getApiErrorMessage } from "@/lib/api/api-error";

import { runAction } from "../api/admin-api";

export function PaymentConsole() {
  const [paymentId, setPaymentId] = useState("");
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);

  async function refund() {
    setBusy(true);
    try {
      await runAction(`/payments/${paymentId}/refund`, "post", { reason });
      toast.success("Refund requested");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageContainer>
      <PageHeader
        title="Payments"
        description="Run operational payment actions exposed by the backend."
      />
      <section className="bg-card max-w-xl rounded-lg border p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-md">
            <CreditCard size={18} />
          </span>
          <h2 className="font-semibold">Refund QR payment</h2>
        </div>
        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium">
            Payment ID
            <Input
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Reason
            <Textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </label>
          <Button disabled={busy || !paymentId || !reason} onClick={refund}>
            {busy ? "Submitting..." : "Submit refund"}
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
