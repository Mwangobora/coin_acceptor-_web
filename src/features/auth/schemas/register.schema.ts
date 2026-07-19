import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2).max(150),
  email: z.email(),
  phoneNumber: z.string().max(30).optional(),
  temporaryPassword: z.string().min(12),
  mustChangePassword: z.boolean().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
