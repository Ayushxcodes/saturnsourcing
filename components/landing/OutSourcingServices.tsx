"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";

const services = [
  {
    title: "Corporate Secretarial Services",
    points: [
      "Carrying out searches and preparing search reports.",
      "Undertaking a detailed secretarial audit of the company's records.",
      "Maintaining all statutory registers.",
      "Filing of forms under the Companies Act and LLP Act with MCA.",
      "Obtaining director identification number (DIN) and digital signature certificate (DSC).",
      "Assisting in AGM and EGM compliances.",
    ],
  },
  {
    title: "Payroll Processing",
    points: [
      "Advising and outsourcing of all the services related to Payroll processing.",
      "Depositing withholding tax on salaries as per the due date prescribed under Income Tax Laws.",
      "Depositing other dues such as PF, ESI, LWF, professional tax, etc. as per due dates of respective statutes.",
      "Maintaining employee-wise details for contribution to PF, ESI, LWF, professional tax, etc. as per respective statutes.",
    ],
  },
  {
    title: "Accounting & Compliance",
    points: [
      "Financial Statement Preparation Bookkeeping.",
      "Financial statements in compliance with accounting standards and GAAP.",
      "Advisory and Consulting.",
      "Financial statement conversion from Indian GAAP to IFRS or Ind AS.",
      "Financial Analysis and Reporting.",
      "Budgeting and Forecasting.",
      "Financial Software Implementation.",
    ],
  },
];

export default function OutSourcingServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Sticky Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24 self-start"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-200">
              <Image
                src="/outsourcing.png"
                alt="Corporate Services"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-8">
              Corporate{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pb-6 border-b border-orange-200 last:border-b-0"
                >
                  <h3 className="text-xl md:text-2xl font-bold font-space-grotesk text-foreground mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-foreground/70 leading-relaxed"
                      >
                        <span className="text-orange-600 font-bold mt-1">
                          ›
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
