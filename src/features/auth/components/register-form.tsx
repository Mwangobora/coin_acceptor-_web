"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/components/ui/action-button";
import { Input } from "@/components/ui/input";

import { useRegisterUser } from "../hooks/use-auth";
import { type RegisterInput, registerSchema } from "../schemas/register.schema";

export function RegisterForm() {
  const registerUser = useRegisterUser();
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      temporaryPassword: "",
      mustChangePassword: true,
    },
  });

  return (
    <section className="bg-card w-full max-w-md rounded-xl border p-6 shadow-sm">
      <h1 className="text-card-foreground text-2xl font-semibold">
        Register operator
      </h1>
      <p className="text-muted-foreground mt-2 text-sm">
        Creates an operator through the protected users API.
      </p>
      <form
        className="mt-6 grid gap-4"
        onSubmit={form.handleSubmit((values) => registerUser.mutate(values))}
      >
        <Field
          label="Full name"
          error={form.formState.errors.fullName?.message}
        >
          <Input {...form.register("fullName")} autoComplete="name" />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input
            {...form.register("email")}
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone" error={form.formState.errors.phoneNumber?.message}>
          <Input {...form.register("phoneNumber")} autoComplete="tel" />
        </Field>
        <Field
          label="Temporary password"
          error={form.formState.errors.temporaryPassword?.message}
        >
          <Input
            {...form.register("temporaryPassword")}
            type="password"
            autoComplete="new-password"
          />
        </Field>
        <ActionButton disabled={registerUser.isPending}>
          {registerUser.isPending ? "Registering..." : "Register"}
        </ActionButton>
        <ActionButton asChild type="button" action="ghost">
          <Link href="/login">Back to sign in</Link>
        </ActionButton>
      </form>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      {children}
      {error ? <span className="text-destructive text-xs">{error}</span> : null}
    </label>
  );
}
