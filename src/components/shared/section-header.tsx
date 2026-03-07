import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        "mb-12",
        className
      )}
    >
      {label && (
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-text-light mb-4">
          {label}
        </p>
      )}
      <h2 className="font-heading font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] text-black-warm mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[1.0625rem] text-gray-warm leading-[1.7] max-w-[540px]",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
