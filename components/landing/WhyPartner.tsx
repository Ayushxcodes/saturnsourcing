"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";
import {
  Briefcase,
  Users,
  PoundSterling,
  Cpu,
  BookOpen,
  Scale,
} from "lucide-react";

const features = [
  {
    title:
      "With years of experience serving UK-based accounting firms, we understand the nuances of the industry and deliver tailored solutions.",
    icon: Briefcase,
  },
  {
    title:
      "Our team is committed to providing personalised support, ensuring seamless communication and collaboration throughout the outsourcing process.",
    icon: Users,
  },
  {
    title:
      "Outsourcing to India offers significant cost savings for UK-based accounting firms due to lower labour and operational costs.",
    icon: PoundSterling,
  },
  {
    title:
      "Leveraging cutting-edge accounting software and tools, we streamline processes and enhance efficiency for our clients.",
    icon: Cpu,
  },
  {
    title:
      "Whether you need assistance with bookkeeping, support services, or process outsourcing, we offer flexible solutions tailored to your specific requirements.",
    icon: BookOpen,
  },
  {
    title:
      "Our transparent pricing structure eliminates hidden costs, providing clarity and confidence in our partnership.",
    icon: Scale,
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
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
            Why{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Partner
            </span>{" "}
            With Us
          </h2>
        </motion.div>

        {/* Layout: Content - Image - Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white border-2 border-orange-200 rounded-2xl hover:shadow-lg transition-all hover:border-orange-400"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm md:text-base text-foreground/80 leading-relaxed font-space-grotesk">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-50">
              <Image
                src="/indiagate.png"
                alt="Why Partner With Us"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(3, 6).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white border-2 border-orange-200 rounded-2xl hover:shadow-lg transition-all hover:border-orange-400"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm md:text-base text-foreground/80 leading-relaxed font-space-grotesk">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
