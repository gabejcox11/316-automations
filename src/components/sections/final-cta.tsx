import { DotPattern } from "@/components/ui/dot-pattern";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative py-24 bg-black-warm overflow-hidden">
      <DotPattern className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />

      <div className="relative max-w-[700px] mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white mb-5 whitespace-pre-line">
          {FINAL_CTA.headline}
        </h2>
        <p className="text-lg text-[#8A8A85] leading-[1.7] mb-8">
          {FINAL_CTA.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyButton
            size="lg"
            className="text-lg px-8 py-4"
          >
            {FINAL_CTA.cta}
          </CalendlyButton>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold border border-[#3A3A35] text-white hover:bg-[#2A2A25] transition-colors"
          >
            {FINAL_CTA.ctaForm}
          </a>
        </div>
        <p className="text-sm text-[#5C5C58] mt-6">{FINAL_CTA.fine}</p>
      </div>
    </section>
  );
}
