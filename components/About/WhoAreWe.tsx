"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import { Question, UsersThree } from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: "🎯",
    title: "Innovation",
    description: "Driving cutting-edge solutions for modern challenges",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Building strong partnerships with our community",
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "Empowering individuals and businesses to scale",
  },
  {
    icon: "✨",
    title: "Excellence",
    description: "Delivering quality in everything we do",
  },
];

const aboutPoints = [
  "A reputed Accounting Outsourcing firm based out of India with offices in the United States, backed by extensive multi-industry experience.",
  "Professionally managed by distinguished Chartered Accountants who are highly qualified intellectuals.",
  "Our specialist team includes Chartered Accountants, Certified Public Accountants, and Enrolled Agents, each bringing deep expertise in their respective areas.",
  "Our team is our single most important sustainable competitive advantage for future growth.",
];


const mission = [
  "Synthesise knowledge into value for the benefit of our clients",
  "Create opportunities for our people to grow and succeed",
  "Contribute positively to the community at large",
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
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium font-space-grotesk">
            Saturn Consulting Group is a reputed Accounting Outsourcing firm based out of India with offices in the United States, backed by extensive experience across multiple industries.
          </p>

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
                <p className="text-slate-600 leading-relaxed group-hover:text-orange-600 transition-colors duration-300 font-medium font-space-grotesk">
                  {point}
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

          {/* Closing Statement */}
          <p className="text-slate-600 leading-relaxed italic text-center font-space-grotesk">
            The firm has experience in rendering diverse professional services
            to an extensive base of national as well as international clients
            and is an established name in its field.
          </p>
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
