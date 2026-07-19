"use client";

import { useState } from "react";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/api-error";

import { deviceRequest } from "../api/mobile-api";
import type { DeviceRequestMethod } from "../types/mobile.types";

export function useMobileConsole() {
  const [apiKey, setApiKey] = useState("");
  const [reference, setReference] = useState("");
  const [payload, setPayload] = useState("{}");
  const [result, setResult] = useState<unknown>(null);
  const [busy, setBusy] = useState(false);

  async function run(
    path: string,
    method: DeviceRequestMethod,
    body?: unknown,
  ) {
    setBusy(true);
    try {
      const data = await deviceRequest({ apiKey, path, method, body });
      setResult(data);
      toast.success("Device request completed");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    } finally {
      setBusy(false);
    }
  }

  return {
    apiKey,
    setApiKey,
    reference,
    setReference,
    payload,
    setPayload,
    result,
    busy,
    run,
  };
}
