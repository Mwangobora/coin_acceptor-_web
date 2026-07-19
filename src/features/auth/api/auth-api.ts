import { apiClient } from "@/lib/api/api-client";

export type SafeUser = {
  id: string;
  email: string;
  fullName: string;
  status: string;
  mustChangePassword: boolean;
};

export type AuthSession = {
  id: string;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
  lastUsedAt: string | null;
  expiresAt: string;
  currentSession: boolean;
  revokedAt: string | null;
};

export type LoginPayload = { email: string; password: string };

export type RegisterPayload = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  temporaryPassword: string;
  mustChangePassword?: boolean;
};

export async function login(payload: LoginPayload) {
  const { data } = await apiClient.post<{ user: SafeUser }>(
    "/auth/login",
    payload,
  );
  return data.user;
}

export async function me() {
  const { data } = await apiClient.get<{ user: SafeUser } | SafeUser>(
    "/auth/me",
  );
  return "user" in data ? data.user : data;
}

export async function logout() {
  await apiClient.post("/auth/logout");
}

export async function listSessions() {
  const { data } = await apiClient.get<AuthSession[]>("/auth/sessions");
  return data;
}

export async function registerUser(payload: RegisterPayload) {
  const { data } = await apiClient.post<SafeUser>("/users", payload);
  return data;
}
