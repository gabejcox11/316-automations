"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/shared/section-header";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const dotColors = {
  red: "bg-[#FEE2E2] border-[#DC2626]",
  amber: "bg-amber-light border-amber",
  blue: "bg-[#DBEAFE] border-[#2563EB]",
  green: "bg-green-light border-green-dark",
} as const;

export function Timeline() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          label={TIMELINE.label}
          title={TIMELINE.title}
          subtitle={TIMELINE.subtitle}
          align="left"
          className="mb-16"
        />

        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-border-light" />

          {TIMELINE.steps.map((step, i) => (
            <BlurFade key={step.time} delay={0.1 * i}>
              <div className="relative flex flex-col items-center text-center md:w-[180px]">
                <span className="font-mono text-sm font-medium text-text-light mb-2">
                  {step.time}
                </span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg mb-3 relative z-10",
                    dotColors[step.color]
                  )}
                >
                  {step.emoji}
                </div>
                <h3 className="font-heading text-base font-bold text-black-warm mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-warm leading-[1.5]">
                  {step.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
