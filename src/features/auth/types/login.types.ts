import type { z } from "zod";

import type { loginSchema } from "@/features/auth/schemas/login.schema";

export type LoginInput = z.infer<typeof loginSchema>;
