import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/shared/section-header";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          label={HOW_IT_WORKS.label}
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <BlurFade key={step.num} delay={0.1 * i}>
              <Card className="h-full border-border-light hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-medium text-text-light tracking-[0.1em]">
                      {step.num}
                    </span>
                    <span className="text-xl">{step.emoji}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-black-warm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-warm leading-[1.6]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
