import { Marquee } from "@/components/ui/marquee";
import { TRUST_BAR } from "@/lib/constants";

export function TrustBar() {
  return (
    <div className="bg-white border-y border-border-light py-7">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col items-center gap-5">
        <p className="font-mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-text-light">
          {TRUST_BAR.label}
        </p>

        <Marquee pauseOnHover className="[--duration:30s]">
          {TRUST_BAR.industries.map((industry) => (
            <div
              key={industry.name}
              className="inline-flex items-center gap-[7px] bg-bg-alt border border-border-light rounded-full px-4 py-[7px] text-sm font-semibold text-gray-warm whitespace-nowrap hover:border-border-strong hover:text-black-warm transition-colors mx-1.5"
            >
              {industry.emoji} {industry.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
