"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import {
  FileSpreadsheet,
  FileText,
  BookOpen,
  BarChart3,
  LineChart,
  CreditCard,
  FileChartColumn,
  Wallet,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const offerings = [
  {
    title: "VAT Return Preparation (US & UK)",
    description:
      "Preparation and submission of VAT/Sales Tax returns across both regions—VAT filings for the UK in compliance with HMRC regulations, and Sales Tax returns for applicable US states—ensuring accurate reporting and timely submissions.",
    icon: FileSpreadsheet,
  },
  {
    title: "Tax Preparation (US & UK)",
    description:
      "Comprehensive tax preparation services covering both US and UK requirements, including UK tax filings and US federal/state tax returns. Ensures full compliance with IRS, state authorities, and HMRC regulations while optimizing eligible financial benefits.",
    icon: FileText,
  },
  {
    title: "Bookkeeping",
    description:
      "Accurate and timely bookkeeping to keep your financial records organized and up-to-date.",
    icon: BookOpen,
  },
  {
    title: "Financial Planning and Analysis",
    description:
      "Strategic planning services to forecast future conditions and guide business decisions.",
    icon: BarChart3,
  },
  {
    title: "Budgeting and Forecasting",
    description:
      "Detailed budgeting and financial forecasts to help you plan for the future and allocate resources effectively.",
    icon: LineChart,
  },
  {
    title: "Payroll Processing",
    description:
      "Streamline payroll management with automated systems ensuring accuracy and compliance.",
    icon: CreditCard,
  },
  {
    title: "Financial Reporting",
    description:
      "Comprehensive reporting services to provide clear insights into your financial status, facilitating better business decisions.",
    icon: FileChartColumn,
  },
  {
    title: "Accounts Payable and Receivable",
    description:
      "Efficient management of your invoices and payments to maintain cash flow and vendor relationships.",
    icon: Wallet,
  },
  {
    title: "Compliance and Risk Management",
    description:
      "Ensure your business adheres to all regulatory requirements and minimize risks through proactive strategies.",
    icon: ShieldCheck,
  },
  {
    title: "Management Consulting",
    description:
      "Expert advice and consultation to enhance business operations, improve efficiency, and drive growth.",
    icon: Briefcase,
  },
];

export default function OurOfferingsSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      <Container className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Offerings
            </span>
          </h2>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white border-2 border-orange-200 rounded-2xl hover:shadow-lg transition-all hover:border-orange-400"
              >
                {/* Icon Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
