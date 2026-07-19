"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Zap } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/features/auth/schemas/login.schema";
import type { LoginInput } from "@/features/auth/types/login.types";

export function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <section className="bg-card w-full max-w-md rounded-xl border p-6 shadow-sm">
      <div className="mb-6">
        <span className="bg-primary text-primary-foreground mb-4 flex size-11 items-center justify-center rounded-md">
          <Zap size={20} aria-hidden="true" />
        </span>
        <h1 className="text-card-foreground text-2xl font-semibold">
          Admin sign in
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Access the monitoring console for charging-station operations.
        </p>
      </div>
      <form
        className="grid gap-4"
        onSubmit={form.handleSubmit(() => undefined)}
      >
        <label className="grid gap-2 text-sm font-medium">
          Email address
          <Input
            type="email"
            autoComplete="email"
            {...form.register("email")}
          />
          <FieldError message={form.formState.errors.email?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Password
          <Input
            type="password"
            autoComplete="current-password"
            {...form.register("password")}
          />
          <FieldError message={form.formState.errors.password?.message} />
        </label>
        <Button type="submit" className="mt-2 w-full">
          Sign in unavailable
        </Button>
      </form>
    </section>
  );
}

function FieldError({ message }: { message?: string }) {
  return message ? (
    <span className="text-destructive text-xs">{message}</span>
  ) : null;
}
