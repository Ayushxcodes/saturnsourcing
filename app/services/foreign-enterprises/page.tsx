import ForeignEnterprisesHero from "@/components/landing/ForeignEnterprisesHero";
import WhyIndiaSection from "@/components/landing/WhyIndiaSection";
import OurServicesSection from "@/components/landing/OurServicesSection";
import PreEntryServicesSection from "@/components/landing/PreEntryServicesSection";
import PostEntryServicesSection from "@/components/landing/PostIncoprationServicesSection";
import OutSourcingServicesSection from "@/components/landing/OutSourcingServices";

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
      <PostEntryServicesSection />
      <OutSourcingServicesSection />
    </main>
  );
}
