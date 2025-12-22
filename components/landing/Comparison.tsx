"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI-Native Accounting Platform",
    description:
      "Our accounting workflows are automated end-to-end using AI—from transaction processing to reconciliations—reducing manual effort and errors.",
  },
  {
    title: "Built for US Standards",
    description:
      "Designed specifically for US GAAP, payroll, and tax-ready reporting—so your books are always compliant and audit-ready.",
  },
  {
    title: "Faster, Continuous Close",
    description:
      "No more month-end fire drills. Our systems operate continuously, delivering up-to-date financials without delays or follow-ups.",
  },
  {
    title: "Human Expertise Where It Counts",
    description:
      "AI handles scale and speed. Experienced accounting professionals focus on reviews, edge cases, and strategic insights.",
  },
  {
    title: "Clear, Decision-Ready Reporting",
    description:
      "Clean financial statements, real-time dashboards, and actionable insights—so you can move faster with confidence.",
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight mb-4">
              Why Choose{" "}
              <span className="text-primary">Saturn Consulting Group</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk max-w-2xl mx-auto">
              AI-powered accounting built for US businesses—combining intelligent
              automation with dependable financial expertise.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-neutral-300 shadow-custom overflow-hidden hover:shadow-lg transition-shadow p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex items-center justify-center size-10 rounded-full shrink-0 bg-primary/10"
                      )}
                    >
                      <CheckIcon
                        className="size-5 text-primary"
                        weight="bold"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground font-space-grotesk mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
