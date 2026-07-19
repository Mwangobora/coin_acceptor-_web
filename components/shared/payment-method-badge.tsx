import { Coins, QrCode } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { badgeBase, paymentClasses } from "./badge-styles";

const paymentMethodBadgeVariants = cva(badgeBase, {
  variants: {
    variant: paymentClasses,
  },
  defaultVariants: {
    variant: "coin",
  },
});

type PaymentMethodBadgeProps = VariantProps<typeof paymentMethodBadgeVariants> & {
  className?: string;
};

export function PaymentMethodBadge({
  variant = "coin",
  className,
}: PaymentMethodBadgeProps) {
  const Icon = variant === "qr" ? QrCode : Coins;
  const label = variant === "qr" ? "QR payment" : "Coin payment";

  return (
    <span className={cn(paymentMethodBadgeVariants({ variant }), className)}>
      <Icon size={14} aria-hidden="true" />
      {label}
    </span>
  );
}
