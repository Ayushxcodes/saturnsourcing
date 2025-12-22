import AccountingHero from "@/components/landing/AccountingHero";
import OurOfferingsSection from "@/components/landing/OurOffering";
import ProcessOutsourcingSection from "@/components/landing/ProceesOutsourcing";


export const metadata = {
  title: "Cloud Accounting & Tax Strategy | Saturn Sourcing",
  description:
    "Unlock your true potential with cloud accounting solutions that simplify finances, ensure precision, and fuel lasting growth for US businesses.",
};

export default function cloudAccountingAndTaxStrategyPage() {
  return (
    <main>
      <AccountingHero />
      <OurOfferingsSection />
      <ProcessOutsourcingSection/>
    </main>
  );
}
