"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import {
  ChalkboardTeacherIcon,
  BriefcaseIcon,
  SlidersIcon,
  TrophyIcon,
  UsersIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: ChalkboardTeacherIcon,
    title: "Expert Instructors",
    description:
      "Learn from certified teachers who focus on practical, real-world skills.",
  },
  {
    icon: BriefcaseIcon,
    title: "Real Practice",
    description:
      "Build confidence through hands-on projects and practical exercises.",
  },
  {
    icon: SlidersIcon,
    title: "Custom Learning",
    description:
      "Tailored courses for every level, from beginner basics to advanced mastery.",
  },
  {
    icon: TrophyIcon,
    title: "Proven Success",
    description:
      "5,000+ students improved their skills and achieved their learning goals.",
  },
  {
    icon: UsersIcon,
    title: "Community Support",
    description:
      "Connect with fellow learners, ask questions, and get helpful feedback.",
  },
  {
    icon: ClockIcon,
    title: "Anytime Access",
    description:
      "Study anytime, anywhere, with flexible lessons that fit your schedule.",
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
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="text-sm md:text-base font-medium font-space-grotesk text-primary bg-primary/10 px-4 py-2 rounded-full">
                We&apos;re Different
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight">
              The Better Way to <span className="text-primary">Learn</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-start gap-4"
                >
                  <div className="flex items-center justify-center size-12 md:size-14 rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6 md:size-7" weight="regular" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-space-grotesk text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-space-grotesk leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
