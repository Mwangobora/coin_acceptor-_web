import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

if (!parsedEnv.success) {
  throw new Error("Invalid public environment configuration.");
}

export const env = parsedEnv.data;
