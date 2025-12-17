"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";
import { FileText, Headset, ShoppingCart, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Invoice to Cash Process",
    icon: FileText,
    description:
      "Comprehensive management of billing, invoicing, and collections to optimize cash flow and improve financial efficiency.",
  },
  {
    title: "Virtual Support Service",
    icon: Headset,
    description:
      "Providing professional virtual assistance for administrative, operational, and customer support tasks.",
  },
  {
    title: "Purchase To Pay Process",
    icon: ShoppingCart,
    description:
      "Streamlined procurement and payment management, from purchase orders to vendor payments, ensuring compliance and accuracy.",
  },
  {
    title: "Warranty Reconciliations & Verifications",
    icon: ShieldCheck,
    description:
      "Detailed verification and reconciliation of warranty claims to ensure transparency, accuracy, and cost efficiency.",
  },
];

export default function ProcessOutsourcingSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24 self-start"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-200">
              <Image
                src="/out2.png"
                alt="Process Outsourcing Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Text - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-8">
              Process{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Outsourcing
              </span>{" "}
              Services
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pb-6 border-b border-orange-200 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-space-grotesk text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
