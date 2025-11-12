import ForeignEnterprisesHero from "@/components/landing/ForeignEnterprisesHero";
import WhyIndiaSection from "@/components/landing/WhyIndiaSection";
import OurServicesSection from "@/components/landing/OurServicesSection";
import PreEntryServicesSection from "@/components/landing/PreEntryServicesSection";

export const metadata = {
  title: "Services for Foreign Enterprises | Saturn Sourcing",
  description:
    "Comprehensive accounting and financial solutions tailored for international businesses operating in India.",
};

export default function ForeignEnterprisesPage() {
  return (
    <main>
      <ForeignEnterprisesHero />
      <WhyIndiaSection />
      <OurServicesSection />
      <PreEntryServicesSection />
    </main>
  );
}
