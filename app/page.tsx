import HeroSection from "@/components/landing/HeroSection";
import CourseCategory from "@/components/landing/CourseCategory";
import HowItWorks from "@/components/landing/HowItWorks";
import Comparison from "@/components/landing/Comparison";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCategory />
      <HowItWorks />
      <Features />
      <Comparison />
      <CTA />
      <FAQ />
    </>
  );
}
