"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import { Question, UsersThree } from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: "🎯",
    title: " Innovation",
    description:
      "We improve systems, not just tools. Our focus is on practical innovation—changes that remove friction and make accounting more reliable over time.",
  },
  {
    icon: "🤝 ",
    title: "Collaboration",
    description:
      "Accounting works best when it’s aligned. We work closely with our clients’ teams to ensure processes fit real workflows, not theoretical models.",
  },
  {
    icon: "📈",
    title: "Growth",
    description:
      "Designed for long-term scale. We build foundations that support growth without constant rework, process changes, or operational strain",
  },
  {
    icon: "✨",
    title: " Excellence",
    description:
      "Consistency over perfection. We prioritize repeatable accuracy, clear standards, and dependable outcomes—month after month.",
  },
];

const aboutPoints = [
  "Systems Over Tasks\nWe believe accounting should function as a system, not a series of manual activities. Every workflow is designed for consistency, traceability, and scale.",
  "Clarity Over Complexity\nFinancial data is only useful when it’s understandable. We prioritize clean structures, clear reporting, and numbers that teams can trust.",
  "Built for Change\nBusinesses evolve quickly. Our approach anticipates growth, new requirements, and increased volume—without forcing process resets.",
  "Judgment Where It Matters\nAutomation handles routine execution. Human expertise is applied where interpretation, context, and decisions are required.",
];

const mission = [
  "Turn accounting into a dependable operating foundation",
  "Remove noise so financial signals are easy to read",
  "Help teams move faster with confidence in their numbers",
];

export default function WhoAreWe() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <UsersThree size={48} weight="bold" className="text-orange-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
              Who Are We
            </h2>
          </div>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium font-space-grotesk">
            Saturn Consulting Group builds accounting infrastructure for growing
            US businesses. We focus on creating dependable financial systems that
            reduce friction, adapt as companies scale, and surface the
            information leaders need to make decisions.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium font-space-grotesk">
            Rather than relying on manual effort or traditional outsourcing
            models, we design accounting operations that are structured,
            repeatable, and built to run continuously.
          </p>

          {/* Small Heading */}
          <h3 className="text-xl font-semibold text-slate-900 mb-6 font-space-grotesk">
            How We Think
          </h3>

          {/* About Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="flex gap-3 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-orange-600 transition-colors"
                >
                  <Question size={16} weight="bold" className="text-white" />
                </motion.div>
                <p className="text-slate-600 leading-relaxed group-hover:text-orange-600 transition-colors duration-300 font-medium font-space-grotesk whitespace-pre-line">
                  -{point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8 mb-12"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6 font-space-grotesk">
              Our Aim
            </h3>
            <div className="space-y-3">
              {mission.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-slate-700 font-space-grotesk">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 border border-orange-100 bg-gradient-to-br from-white to-orange-50">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-space-grotesk">
                  {value.title}
                </h3>
                <p className="text-slate-600 font-space-grotesk">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
