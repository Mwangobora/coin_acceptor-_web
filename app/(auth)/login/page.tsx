import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <section className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <span className="mb-4 flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Zap size={20} aria-hidden="true" />
        </span>
        <h1 className="text-2xl font-semibold text-card-foreground">
          Admin sign in
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Access the monitoring console for charging-station operations.
        </p>
      </div>
      <form className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Email address
          <Input type="email" placeholder="operator@example.com" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Password
          <Input type="password" placeholder="Password" autoComplete="current-password" />
        </label>
        <Button asChild className="mt-2 w-full">
          <Link href="/admin">Continue to admin</Link>
        </Button>
      </form>
    </section>
  );
}
