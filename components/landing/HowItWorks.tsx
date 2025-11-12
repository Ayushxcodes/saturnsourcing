"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  PlusIcon,
  BookOpenIcon,
  TargetIcon,
  SparkleIcon,
  StarIcon,
  CertificateIcon,
  ChartLineUpIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";

const steps = [
  { label: "Fetching Resources", time: "10s", completed: true },
  { label: "Processing Content", time: "20s", completed: true },
  { label: "Building Curriculum", time: "30s", completed: true },
  { label: "Validating Path", time: "40s", completed: true },
  { label: "Generating Course", time: "50s", completed: false },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-gradient mb-4">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk max-w-2xl mx-auto">
              Transform your learning journey with AI-powered tools that adapt
              to your pace and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
            {/* First Card - Course Builder */}
            <div className="max-w-full mx-auto bg-muted/50 dark:bg-muted/30 rounded-lg rounded-tl-3xl rounded-bl-3xl">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div className="perspective-[4000px] rotate-z-15 -rotate-y-20 rotate-x-30 scale-[1.2] h-full w-full -translate-y-10 mask-radial-from-50 mask-r-from-50">
                  {/* Top Card */}
                  <div className="h-fit my-auto bg-background dark:bg-card mx-auto w-full p-3 rounded-2xl border border-border dark:border-border/50 shadow-2xl absolute bottom-0 left-12 max-w-[90%] z-30">
                    <div className="flex gap-3 items-center">
                      <BookOpenIcon
                        className="size-4 text-primary"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-normal font-space-grotesk text-foreground">
                        Course Builder
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-primary/10 dark:bg-primary/20 border-primary/30 text-primary">
                        <SparkleIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold font-space-grotesk">
                          AI Powered
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-light mt-3 font-space-grotesk">
                      Creates personalized learning paths using your goals,
                      skill level, and preferred learning style.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Web Dev
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        AI/ML
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Design
                      </div>
                    </div>
                  </div>

                  {/* Middle Card */}
                  <div className="max-w-[85%] h-fit my-auto bg-background dark:bg-card mx-auto w-full p-3 rounded-2xl border border-border dark:border-border/50 shadow-2xl absolute bottom-10 left-8 z-20">
                    <div className="flex gap-3 items-center">
                      <TargetIcon
                        className="size-4 text-primary"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-normal font-space-grotesk text-foreground">
                        Path Optimizer
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-green-300/10 dark:bg-green-500/10 border-green-300 dark:border-green-500 text-green-500">
                        <StarIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold font-space-grotesk">
                          Adaptive
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-light mt-3 font-space-grotesk">
                      Analyzes your progress and adjusts the curriculum to match
                      your learning pace.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Adaptive
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Smart
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card */}
                  <div className="h-fit my-auto bg-background dark:bg-card mx-auto w-full p-3 rounded-2xl border border-border dark:border-border/50 shadow-2xl absolute bottom-14 left-4 max-w-[80%] z-10">
                    <div className="flex gap-3 items-center">
                      <CheckCircleIcon
                        className="size-4 text-primary"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-normal font-space-grotesk text-foreground">
                        Content Curator
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-yellow-300/10 dark:bg-yellow-500/10 border-yellow-300 dark:border-yellow-500 text-yellow-500">
                        <BookOpenIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold font-space-grotesk">
                          Curated
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-light mt-3 font-space-grotesk">
                      Gathers high-quality resources from across the web
                      tailored to your learning goals.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Curated
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-muted dark:bg-muted/50 font-space-grotesk">
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold font-space-grotesk">
                  AI-Powered Course Creation
                </h3>
                <button className="size-5 md:size-10 shrink-0 rounded-full border border-border dark:border-border/50 flex items-center justify-center active:scale-[0.98] transition duration-200 hover:bg-muted">
                  <PlusIcon className="size-4 md:size-5" weight="bold" />
                </button>
              </div>
            </div>

            {/* Second Card - Progress Tracker */}
            <div className="max-w-full mx-auto bg-muted/50 dark:bg-muted/30 rounded-lg">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div
                  style={{
                    transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
                  }}
                  className="max-w-[85%] group h-full my-auto bg-muted dark:bg-card mx-auto w-full p-3 rounded-2xl border border-border dark:border-border/50 shadow-2xl flex flex-col mask-radial-from-50 mask-b-from-50 translate-x-10"
                >
                  <div className="flex gap-3 items-center">
                    <TargetIcon
                      className="size-4 text-primary"
                      weight="duotone"
                    />
                    <p className="text-sm font-normal font-space-grotesk text-foreground">
                      Progress Tracker
                    </p>
                  </div>
                  <div className="relative flex-1 bg-muted dark:bg-muted/50 mt-4 border border-border dark:border-border/50 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--color-foreground)_0,var(--color-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-5 dark:opacity-10"></div>
                    <div className="absolute rounded-2xl translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 inset-0 bg-background dark:bg-card h-full w-full">
                      {steps.map((step, index) => (
                        <div className="mt-2 mr-2" key={index}>
                          <div className="flex items-center justify-between px-4 py-2">
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  "size-4 flex items-center justify-center rounded-full",
                                  step.completed
                                    ? "bg-green-500"
                                    : "bg-yellow-500"
                                )}
                              >
                                {step.completed ? (
                                  <CheckCircleIcon
                                    className="size-3 text-white"
                                    weight="fill"
                                  />
                                ) : (
                                  <div className="size-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                              </div>
                              <p className="text-neutral-500 dark:text-muted-foreground font-medium text-xs md:text-sm font-space-grotesk">
                                {step.label}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <div className="size-1.5 rounded-full bg-current opacity-60"></div>
                              <p className="text-[10px] font-bold font-space-grotesk">
                                {step.time}
                              </p>
                            </div>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="h-px w-full bg-linear-to-r from-transparent via-border dark:via-border/50 to-transparent"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold font-space-grotesk">
                  Real-Time Progress Tracking
                </h3>
                <button className="size-5 md:size-10 shrink-0 rounded-full border border-border dark:border-border/50 flex items-center justify-center active:scale-[0.98] transition duration-200 hover:bg-muted">
                  <PlusIcon className="size-4 md:size-5" weight="bold" />
                </button>
              </div>
            </div>

            {/* Third Card - Certificate & Analytics */}
            <div className="max-w-full mx-auto bg-muted/50 dark:bg-muted/30 rounded-lg rounded-tr-3xl rounded-br-3xl">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Certificate Preview Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative z-30 w-full max-w-[85%] bg-background dark:bg-card border-2 border-primary/20 rounded-2xl p-4 md:p-6 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CertificateIcon
                          className="size-5 text-primary"
                          weight="duotone"
                        />
                        <p className="text-sm font-bold font-space-grotesk text-foreground">
                          Certificate of Completion
                        </p>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <StarIcon
                          className="size-3 text-primary"
                          weight="fill"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UserIcon
                            className="size-4 text-muted-foreground"
                            weight="duotone"
                          />
                          <p className="text-xs text-muted-foreground font-space-grotesk">
                            Student Name
                          </p>
                        </div>
                        <p className="text-xs font-semibold font-space-grotesk text-foreground">
                          John Doe
                        </p>
                      </div>

                      <div className="h-px bg-linear-to-r from-transparent via-border to-transparent"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpenIcon
                            className="size-4 text-muted-foreground"
                            weight="duotone"
                          />
                          <p className="text-xs text-muted-foreground font-space-grotesk">
                            Course
                          </p>
                        </div>
                        <p className="text-xs font-semibold font-space-grotesk text-foreground">
                          Full Stack Web Dev
                        </p>
                      </div>

                      <div className="h-px bg-linear-to-r from-transparent via-border to-transparent"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ChartLineUpIcon
                            className="size-4 text-muted-foreground"
                            weight="duotone"
                          />
                          <p className="text-xs text-muted-foreground font-space-grotesk">
                            Progress
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <p className="text-xs font-bold font-space-grotesk text-primary">
                            85%
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Background gradient effect */}
                  <div className="pointer-events-none mask-radial-to-70 mask-radial-at-center absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold font-space-grotesk">
                  Certificates & Detailed Analytics
                </h3>
                <button className="size-5 md:size-10 shrink-0 rounded-full border border-border dark:border-border/50 flex items-center justify-center active:scale-[0.98] transition duration-200 hover:bg-muted">
                  <PlusIcon className="size-4 md:size-5" weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
