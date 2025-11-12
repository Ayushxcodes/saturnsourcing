"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";

export default function AccountingHero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Accounting Outsourcing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Accounting Outsourcing helps businesses streamline finances,
              ensure compliance, and reduce costs by relying on expert
              professionals — allowing companies to focus on core operations and
              growth.
            </p>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-200">
              <Image
                src="/accountOutsourcing.png"
                alt="Foreign Enterprises Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
