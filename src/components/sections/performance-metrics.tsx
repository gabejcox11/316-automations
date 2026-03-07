"use client";

import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/shared/section-header";
import { PERFORMANCE_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const cardVariants = {
  green: "border-t-4 border-t-green-dark",
  amber: "border-t-4 border-t-amber",
  navy: "border-t-4 border-t-black-warm",
} as const;

export function PerformanceMetrics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          label={PERFORMANCE_STATS.label}
          title={PERFORMANCE_STATS.title}
          subtitle={PERFORMANCE_STATS.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERFORMANCE_STATS.stats.map((stat) => (
            <Card
              key={stat.label}
              className={cn(
                "border-border-light",
                cardVariants[stat.variant]
              )}
            >
              <CardContent className="p-6 text-center">
                <span className="text-2xl mb-3 block">{stat.emoji}</span>
                <p className="text-4xl font-bold text-black-warm mb-1">
                  <NumberTicker value={stat.value} />
                  <span className="text-xl font-semibold">{stat.unit}</span>
                </p>
                <p className="text-sm font-semibold text-gray-warm uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-text-light leading-[1.6]">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
