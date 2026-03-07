import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { BeforeAfter } from "@/components/sections/before-after";
import { Timeline } from "@/components/sections/timeline";
import { IndustrySelector } from "@/components/sections/industry-selector";
import { HowItWorks } from "@/components/sections/how-it-works";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { PerformanceMetrics } from "@/components/sections/performance-metrics";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <Timeline />
      <IndustrySelector />
      <HowItWorks />
      <RoiCalculator />
      <PerformanceMetrics />
      <About />
      <Faq />
      <ContactForm />
      <FinalCta />
      <Footer />
    </>
  );
}
