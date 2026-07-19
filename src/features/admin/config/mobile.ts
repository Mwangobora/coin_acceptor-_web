import type { FormField } from "../types/resource";

export const deviceEventFields: FormField[] = [
  { name: "externalEventId", label: "External event ID", required: true },
  {
    name: "eventCategory",
    label: "Category",
    kind: "select",
    options: [
      "heartbeat",
      "telemetry",
      "locker",
      "charging_port",
      "payment",
      "command",
    ],
    required: true,
  },
  { name: "eventType", label: "Event type", required: true },
  { name: "sequenceNumber", label: "Sequence number", kind: "number" },
  { name: "occurredAt", label: "Occurred at", required: true },
  { name: "firmwareVersion", label: "Firmware version" },
  { name: "payload", label: "Payload", kind: "json", required: true },
];

export const devicePaymentFields: FormField[] = [
  {
    name: "paymentMethod",
    label: "Payment method",
    kind: "select",
    options: ["coin", "qr"],
    required: true,
  },
  { name: "chargingPackageId", label: "Charging package ID", required: true },
  { name: "idempotencyKey", label: "Idempotency key", required: true },
  { name: "metadata", label: "Metadata", kind: "json" },
];
