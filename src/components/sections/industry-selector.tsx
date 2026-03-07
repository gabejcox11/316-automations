"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/shared/section-header";
import { INDUSTRIES } from "@/lib/constants";

export function IndustrySelector() {
  return (
    <section id="for-your-trade" className="py-24 bg-bg-warm">
      <div className="max-w-[1160px] mx-auto px-6">
        <SectionHeader
          label={INDUSTRIES.label}
          title={INDUSTRIES.title}
          subtitle={INDUSTRIES.subtitle}
          align="left"
        />

        <BlurFade delay={0.2}>
          <Tabs defaultValue="hvac" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-8">
              {INDUSTRIES.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-full px-5 py-2.5 text-sm font-semibold border border-border-light bg-white text-gray-warm data-[state=active]:bg-green-dark data-[state=active]:text-white data-[state=active]:border-green-dark transition-colors"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {INDUSTRIES.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="bg-white rounded-2xl border border-border-light p-8 md:p-10">
                  <p className="text-lg md:text-xl leading-[1.7] text-black-warm italic mb-6">
                    &ldquo;{tab.quote}&rdquo;
                  </p>
                  <div className="inline-flex items-center gap-2 bg-green-light text-green-mid text-sm font-semibold px-4 py-2 rounded-full border border-[rgba(22,101,52,0.2)]">
                    {tab.stat}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </BlurFade>
      </div>
    </section>
  );
}
