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
    title: "Core Accounting Services",
    description:
      "Foundational accounting services designed for U.S. businesses: Bookkeeping & General Ledger Management, Accounts Payable & Receivable Management, Bank Reconciliation & Cash Flow Monitoring, Multi-entity & multi-currency accounting (where applicable), Accurate Financial Reporting & Statement Preparation (GAAP compliant)",
    icon: FileSpreadsheet,
  },
  {
    title: "Tax & Compliance Services",
    description:
      "Stay compliant with federal, state, and local tax requirements: Federal and state business tax filings, Quarterly estimated tax payments, Entity-specific compliance (LLC, S-Corp, C-Corp, Partnerships), Audit preparation and representation, Ongoing tax planning & advisory",
    icon: FileText,
  },
  {
    title: "Financial Insights & Reporting",
    description:
      "Actionable financial insights to grow your business: Custom Financial Dashboards, Profit & Loss Analysis, Cash Flow Forecasting, Expense Tracking & Budgeting, Management Reports & KPI Monitoring",
    icon: BarChart3,
  },
  {
    title: "Automation & Cloud Integration",
    description:
      "Leverage technology to streamline accounting tasks: Automated Invoicing & Payment Reminders, Bank Feed Integration & Auto-Categorization, Integration with Payroll, CRM, and E-commerce Platforms, AI-driven Expense Categorization & Fraud Detection, Cloud-based Access & Secure Data Storage",
    icon: LineChart,
  },
  {
    title: "Consulting & Advisory Services",
    description:
      "Beyond compliance — strategic financial advice for U.S. businesses: Business & Financial Planning, Growth & Performance Analysis, Startup & Small Business Advisory, Technology & Cloud Accounting Implementation, Training & Support for In-house Teams",
    icon: Briefcase,
  },
  {
    title: "Sales Tax",
    description:
      "Manage multi-state and local sales tax compliance with confidence: Sales tax calculation & automated filing, Nexus tracking for multi-state compliance, Sales tax reports for e-commerce & retail, Exemption certificate management, Sales tax audit support",
    icon: CreditCard,
  },
  {
    title: "Income Tax",
    description:
      "Full-service federal and state income tax solutions: Preparation & filing of federal income tax returns, State-specific corporate & individual income tax compliance, Quarterly estimated tax planning, Maximizing allowable deductions & credits, IRS audit support & representation",
    icon: FileChartColumn,
  },
  {
    title: "Payroll & Employment Taxes",
    description:
      "Stay compliant with payroll tax laws and employment reporting: Payroll processing & tax withholding, FICA, FUTA, and state unemployment tax compliance, Quarterly & annual payroll tax returns, W-2 & 1099 preparation & filing, Multi-state employment tax compliance",
    icon: Wallet,
  },
  {
    title: "Other Business-Related Taxes",
    description:
      "Covering additional taxes common to U.S. businesses: Franchise Taxes (state-specific), Excise Taxes (federal & industry-based), Gross Receipts Taxes, Occupational & industry-specific compliance, Ongoing tax planning & advisory",
    icon: ShieldCheck,
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
