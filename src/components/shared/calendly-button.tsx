"use client";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CalendlyButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function CalendlyButton({
  variant = "primary",
  size = "default",
  children,
  className,
}: CalendlyButtonProps) {
  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : "outline"}
      size={size}
      className={cn(
        "rounded-full font-semibold",
        variant === "primary" &&
          "bg-green-dark hover:bg-green-mid text-white shadow-[0_4px_24px_rgba(22,101,52,0.28)] hover:shadow-[0_6px_32px_rgba(22,101,52,0.36)]",
        variant === "secondary" &&
          "border-border-strong text-black-warm hover:border-green-dark hover:text-green-dark",
        className
      )}
    >
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
