import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "image" | "text";
}

export function Logo({
  className,
  width = 140,
  height = 40,
  variant = "image",
}: LogoProps) {
  if (variant === "text") {
    return (
      <span
        className={cn(
          "font-body font-bold text-xl tracking-[-0.02em]",
          className
        )}
      >
        <span className="text-green-dark">316</span>
        <span> Automations</span>
      </span>
    );
  }

  return (
    <Image
      src="/assets/logo.png"
      alt="316 Automations"
      width={width}
      height={height}
      className={cn("h-auto mix-blend-multiply", className)}
      priority
    />
  );
}
