"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";

const services = [
  {
    title: "Market Research",
    points: [
      "We provide valuable insights that drive informed decision-making, minimize risks, and maximize opportunities.",
      "We will help you understand the market dynamics and achieve sustainable growth in today's dynamic and highly competitive business environment.",
    ],
  },
  {
    title: "Setting up Manufacturing Facility",
    points: [
      "Selecting a desirable and optimal location.",
      "Locating suppliers of raw materials and machinery.",
      "Finding contractors for the development of the facility as per needs.",
      "Getting workforce for the plant.",
    ],
  },
  {
    title: "Company Incorporation",
    points: [
      "Company Name Reservation.",
      "Document Preparation- including the Memorandum of Association and Articles of Association.",
      "Filing with the Registrar of Companies.",
    ],
  },
  {
    title: "Customised Services",
    points: [
      "Connecting them with industry experts for guidance and support.",
      "Developing relationships with foreign business owners.",
      "Assisting in participation in world known exhibitions of various industries",
    ],
  },
  {
    title: "Regulatory Approvals",
    points: [
      "Obtaining approvals from multiple organizations for setting up the business.",
      "Obtaining licenses for a specific business.",
    ],
  },
];

export default function PreEntryServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-200">
              <Image
                src="/pre-entry.png"
                alt="Pre-entry Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-8">
              Pre-entry{" "}
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
