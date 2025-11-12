"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Container from "@/components/base/Container";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  return (
    <section className="relative  mt-44">
      {/* Background Gradients - Full width, not constrained by container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        {/* Mid Left Gradient - Blue (lighter) - responsive */}
        <div
          className="absolute top-[40%] md:top-[35%] left-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-2xl md:blur-3xl -translate-y-1/2 -translate-x-1/3 md:-translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, rgba(147, 197, 253, 0.05) 50%, transparent 100%)",
          }}
        />
        {/* Bottom Right Gradient - Yellow (lighter) - responsive */}
        <div
          className="absolute bottom-[20%] md:bottom-[15%] right-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-2xl md:blur-3xl translate-x-1/3 md:translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, rgba(253, 224, 71, 0.05) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Content wrapped in Container */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-gradient text-center"
          >
            Learn anything, <br />
            <span className="text-gradient">
              Track <span className="text-primary decoration-">anywhere</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs md:text-lg text-muted-foreground max-w-sm md:max-w-lg text-center"
          >
            Access high-quality educational resources from across the internet.
            We build plan and you track your progress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="default"
                  className="w-full sm:w-auto font-space-grotesk"
                >
                  Join the waitlist
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto font-space-grotesk"
                >
                  Learn more{" "}
                  <ArrowRightIcon weight="bold" className="size-4 ml-1" />
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-space-grotesk text-center">
                800+ people are already in the waitlist
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="flex items-center justify-center  relative z-10 mx-auto  rounded-2xl border bg-card/50 p-2 shadow-lg"
          >
            <img
              src="/hero.png"
              alt="Hero Section"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl md:rounded-2xl max-w-4xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
