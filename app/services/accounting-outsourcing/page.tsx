import AccountingHero from "@/components/landing/AccountingHero";
import OurOfferingsSection from "@/components/landing/OurOffering";
import ProcessOutsourcingSection from "@/components/landing/ProceesOutsourcing";
import WhyPartnerSection from "@/components/landing/WhyPartner";


export const metadata = {
  title: "Accounting Outsourcing | Saturn Sourcing",
  description:
    "Comprehensive accounting and financial solutions tailored for international businesses operating in India.",
};

export default function ForeignEnterprisesPage() {
  return (
    <main>
      <AccountingHero />
      <OurOfferingsSection />
      <ProcessOutsourcingSection/>
      <WhyPartnerSection />
    </main>
  );
}
