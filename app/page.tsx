import { HeroSection } from "@/components/sections/section__hero";
import { ProblemSection } from "@/components/sections/section__problem-section";
import { HowItWorksSection } from "@/components/sections/section__howitworks";
import { CompatibilitySection } from "@/components/sections/section__compatibility";
import { StatsSection } from "@/components/sections/section__stats";
import { ProductDetailsSection } from "@/components/sections/section__platform";
import { IndustriesSection } from "@/components/sections/section__industries-section";
import { PricingSection } from "@/components/sections/section__pricing-section";
import { FAQSection } from "@/components/sections/section__faq-section";
import { FooterSection } from "@/components/sections/section__footer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <CompatibilitySection />
      <StatsSection />
      <ProductDetailsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
