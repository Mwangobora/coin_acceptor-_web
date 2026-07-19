import type { FormField } from "../types/resource";

export const reasonField: FormField = {
  name: "reason",
  label: "Reason",
  kind: "textarea",
  required: true,
};

export const statusOptions = ["active", "inactive", "suspended", "locked"];

export const jsonPayloadField: FormField = {
  name: "payload",
  label: "JSON payload",
  kind: "json",
  required: true,
  placeholder: "{}",
};

export const stationFields: FormField[] = [
  { name: "code", label: "Code", required: true },
  { name: "name", label: "Name", required: true },
  { name: "stationType", label: "Type", required: true },
  { name: "region", label: "Region", required: true },
  { name: "district", label: "District", required: true },
  { name: "ward", label: "Ward" },
  { name: "address", label: "Address", kind: "textarea" },
  { name: "timezone", label: "Timezone", placeholder: "Africa/Dar_es_Salaam" },
];

export const deviceFields: FormField[] = [
  { name: "stationId", label: "Station ID", required: true },
  { name: "deviceCode", label: "Device code", required: true },
  { name: "serialNumber", label: "Serial number", required: true },
  { name: "name", label: "Name", required: true },
  { name: "manufacturer", label: "Manufacturer" },
  { name: "model", label: "Model" },
  { name: "firmwareVersion", label: "Firmware version" },
  { name: "hardwareVersion", label: "Hardware version" },
];

export const userFields: FormField[] = [
  { name: "fullName", label: "Full name", required: true },
  { name: "email", label: "Email", required: true },
  { name: "phoneNumber", label: "Phone number" },
  { name: "temporaryPassword", label: "Temporary password", required: true },
];
