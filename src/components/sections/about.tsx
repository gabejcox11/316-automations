import Image from "next/image";
import { SectionHeader } from "@/components/shared/section-header";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 bg-bg-warm">
      <div className="max-w-[960px] mx-auto px-6">
        <SectionHeader label={ABOUT.label} title={ABOUT.title} />

        <div className="bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="w-full md:w-[300px] shrink-0">
              <div className="h-72 md:h-full">
                <Image
                  src="/assets/headshot7.jpg"
                  alt={ABOUT.imageAlt}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-[center_35%]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p className="text-xl font-heading font-bold text-black-warm mb-1">
                {ABOUT.name}
              </p>
              <p className="text-sm font-mono text-green-dark tracking-wide uppercase mb-5">
                {ABOUT.role}
              </p>
              <div className="w-10 h-[3px] bg-green-dark rounded-full mb-5" />
              {ABOUT.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[0.9375rem] text-gray-warm leading-[1.8] mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
