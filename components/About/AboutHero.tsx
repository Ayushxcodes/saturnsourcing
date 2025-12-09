"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutHero() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full"
            >
              <span className="text-sm font-semibold text-orange-700 font-space-grotesk">
                About Saturn Sourcing
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 font-space-grotesk">
              Building Tomorrow&apos;s{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-space-grotesk">
              With a legacy of excellence and innovation, we&apos;ve been
              partnering with businesses globally to transform their operations
              and unlock unprecedented growth opportunities.
            </p>

            <div className="flex gap-4">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 font-space-grotesk"
                onClick={handleContactClick}
              >
                Learn More
                <ArrowRight size={20} weight="bold" />
              </button>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-200 text-orange-700 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 font-space-grotesk"
                onClick={handleContactClick}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-200">
              <Image
                src="/about_1.png"
                alt="Saturn Sourcing Team"
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
