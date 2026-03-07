import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQ } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-bg-warm">
      <div className="max-w-[700px] mx-auto px-6">
        <SectionHeader label={FAQ.label} title={FAQ.title} />

        <Accordion type="single" collapsible className="w-full">
          {FAQ.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-border-light"
            >
              <AccordionTrigger className="text-left text-[0.9375rem] font-semibold text-black-warm hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-warm leading-[1.7]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
