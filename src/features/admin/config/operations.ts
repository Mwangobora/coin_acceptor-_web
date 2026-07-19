import type { FormField } from "../types/resource";

export const lockerFields: FormField[] = [
  {
    name: "lockerNumber",
    label: "Locker number",
    kind: "number",
    required: true,
  },
  { name: "label", label: "Label" },
];

export const portFields: FormField[] = [
  { name: "portNumber", label: "Port number", kind: "number", required: true },
  { name: "portType", label: "Port type", required: true },
  { name: "hardwareChannel", label: "Hardware channel" },
  { name: "maximumVoltage", label: "Maximum voltage" },
  { name: "maximumCurrentMa", label: "Maximum current mA", kind: "number" },
  { name: "maximumPowerWatts", label: "Maximum watts" },
];

export const credentialFields: FormField[] = [
  {
    name: "credentialType",
    label: "Credential type",
    kind: "select",
    options: ["api_key_hmac", "certificate"],
    required: true,
  },
  { name: "publicKeyPem", label: "Public key PEM", kind: "textarea" },
  { name: "expiresAt", label: "Expires at" },
];

export const commandFields: FormField[] = [
  {
    name: "commandType",
    label: "Command type",
    kind: "select",
    options: ["open_locker", "lock_locker", "restart_device", "sync_config"],
    required: true,
  },
  { name: "payload", label: "Payload", kind: "json", required: true },
  { name: "idempotencyKey", label: "Idempotency key" },
  { name: "expiresAt", label: "Expires at" },
  { name: "reason", label: "Reason" },
];

export const paymentRefundFields: FormField[] = [
  { name: "reason", label: "Reason", kind: "textarea", required: true },
];
