"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { ROI_CALCULATOR } from "@/lib/constants";

export function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(ROI_CALCULATOR.sliderDefault);

  const missedPerMonth = missedCalls * 4;
  const monthlyLost = missedPerMonth * ROI_CALCULATOR.avgJobValue;
  const monthlyRecovered = Math.round(
    missedPerMonth * ROI_CALCULATOR.recoveryRate * ROI_CALCULATOR.avgJobValue
  );
  const pct = Math.round(
    (missedCalls / ROI_CALCULATOR.assumedTotalCalls) * 100
  );
  const fillPct =
    ((missedCalls - ROI_CALCULATOR.sliderMin) /
      (ROI_CALCULATOR.sliderMax - ROI_CALCULATOR.sliderMin)) *
    100;

  return (
    <section id="pricing" className="py-24 bg-bg-warm">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] text-black-warm mb-4">
          {ROI_CALCULATOR.title}
        </h2>
        <p className="text-[1.0625rem] text-gray-warm leading-[1.7] mb-10">
          {ROI_CALCULATOR.subtitle}
        </p>

        <Card className="border-border-light">
          <CardContent className="p-8">
            {/* Slider */}
            <div className="mb-6">
              <label
                htmlFor="missed-calls"
                className="text-base font-semibold text-black-warm mb-3 block"
              >
                I miss about{" "}
                <span className="text-green-dark text-xl font-bold">
                  {missedCalls}
                </span>{" "}
                calls per week
              </label>
              <input
                type="range"
                id="missed-calls"
                min={ROI_CALCULATOR.sliderMin}
                max={ROI_CALCULATOR.sliderMax}
                value={missedCalls}
                onChange={(e) => setMissedCalls(parseInt(e.target.value, 10))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #166534 0%, #166534 ${fillPct}%, #E8E4DF ${fillPct}%, #E8E4DF 100%)`,
                }}
              />
              <p className="text-sm text-gray-warm mt-3">
                That&apos;s roughly <strong>~{pct}%</strong> of your calls going
                unanswered each week.
              </p>
            </div>

            <div className="h-px bg-border-light my-6" />

            <p className="text-sm text-gray-warm mb-4">
              With an average job value of ${ROI_CALCULATOR.avgJobValue},
              you&apos;re leaving{" "}
              <strong>${monthlyLost.toLocaleString()}/month</strong> on the
              table.
            </p>

            {/* Result box */}
            <div className="bg-green-light rounded-xl p-6 mb-4">
              <p className="text-sm font-medium text-gray-warm mb-1">
                {ROI_CALCULATOR.resultLabel}
              </p>
              <p className="text-3xl font-bold text-green-dark">
                $
                <NumberTicker value={monthlyRecovered} />
                /mo
              </p>
              <p className="text-xs text-text-light mt-1">
                {ROI_CALCULATOR.resultSub}
              </p>
            </div>

            <p className="text-xs text-text-light mb-6">
              {ROI_CALCULATOR.note}
            </p>

            <CalendlyButton size="lg" className="w-full md:w-auto">
              {ROI_CALCULATOR.cta}
            </CalendlyButton>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
