import { BlurFade } from "@/components/ui/blur-fade";
import { BEFORE_AFTER } from "@/lib/constants";

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <BlurFade>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-black-warm text-center mb-10">
            {BEFORE_AFTER.title}
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="max-w-[800px] mx-auto bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Old Way */}
            <div className="p-8 bg-[#FFF8F5] border-t-4 border-t-[#DC2626] md:border-r border-r-border-light">
              <p className="text-sm font-bold tracking-[0.06em] uppercase text-[#DC2626] mb-6">
                {BEFORE_AFTER.oldWay.heading}
              </p>
              <ul>
                {BEFORE_AFTER.oldWay.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.55] text-black-warm py-2.5 border-b border-border-light last:border-b-0"
                  >
                    <span className="shrink-0 mt-0.5">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div className="p-8 bg-[#F0F7F2] border-t-4 border-t-green-dark">
              <p className="text-sm font-bold tracking-[0.06em] uppercase text-green-mid mb-6">
                {BEFORE_AFTER.newWay.heading}
              </p>
              <ul>
                {BEFORE_AFTER.newWay.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-[1.55] text-black-warm py-2.5 border-b border-border-light last:border-b-0"
                  >
                    <span className="shrink-0 mt-0.5 text-green-dark">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
