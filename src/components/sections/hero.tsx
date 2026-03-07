"use client";

import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const chipVariants = {
  amber: "bg-amber-light text-[#92400E] border-[rgba(245,158,11,0.25)]",
  green: "bg-green-light text-green-mid border-[rgba(22,101,52,0.2)]",
  navy: "bg-black-warm text-white border-transparent",
  gray: "bg-bg-alt text-gray-warm border-border-light",
} as const;

export function Hero() {
  return (
    <section className="relative py-24 md:py-[104px] bg-bg-warm overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#D4CFC9"
        staticity={80}
      />

      <div className="relative max-w-[1160px] mx-auto px-6 text-center flex flex-col items-center gap-7">
        <BlurFade delay={0.1}>
          <Badge
            variant="secondary"
            className="bg-green-light text-green-mid border border-[rgba(22,101,52,0.2)] rounded-full px-4 py-1.5 text-sm font-semibold"
          >
            <span className="mr-2">✓</span>
            {HERO.badge}
          </Badge>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="font-heading font-bold text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.08] tracking-[-0.02em] text-black-warm max-w-[820px]">
            You Will Never <span className="whitespace-nowrap">Lose a Job</span>
            <br />
            to a <span className="text-green-dark">Missed Call</span> Again.
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-[clamp(1rem,1.5vw,1.1875rem)] text-gray-warm max-w-[560px] leading-[1.7]">
            {HERO.subheadline}
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex items-center gap-3.5 flex-wrap justify-center">
            <CalendlyButton size="lg">
              {HERO.primaryCta}
            </CalendlyButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 font-semibold text-[1.0625rem] px-[26px] py-[13px] rounded-full border-[1.5px] border-border-strong text-black-warm hover:border-green-dark hover:text-green-dark transition-colors"
            >
              {HERO.secondaryCta}
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            {HERO.chips.map((chip) => (
              <span
                key={chip.label}
                className={cn(
                  "inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold px-3.5 py-1.5 rounded-full border",
                  chipVariants[chip.variant]
                )}
              >
                {chip.emoji} {chip.label}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
