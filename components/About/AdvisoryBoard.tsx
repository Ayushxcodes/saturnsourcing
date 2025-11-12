"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import {
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

const advisors = [
  {
    id: 1,
    name: "Dr. James Mitchell",
    role: "Strategic Advisor",
    expertise: "Cloud Computing & AI",
    image: "👨‍🎓",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@example.com",
    },
  },
  {
    id: 2,
    name: "Lisa Wong",
    role: "Finance Advisor",
    expertise: "Venture Capital & Scaling",
    image: "👩‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@example.com",
    },
  },
  {
    id: 3,
    name: "David Okonkwo",
    role: "Industry Advisor",
    expertise: "Digital Transformation",
    image: "👨‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@example.com",
    },
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Legal Advisor",
    expertise: "Tech Law & Compliance",
    image: "👩‍⚖️",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emma@example.com",
    },
  },
  {
    id: 5,
    name: "Prof. Raj Patel",
    role: "Innovation Advisor",
    expertise: "Research & Development",
    image: "👨‍🔬",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "raj@example.com",
    },
  },
  {
    id: 6,
    name: "Catherine Laurent",
    role: "Marketing Advisor",
    expertise: "Brand Strategy & Growth",
    image: "👩‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "catherine@example.com",
    },
  },
];

export default function AdvisoryBoard() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Our Advisory Board
          </h2>
          <p className="text-lg text-slate-600">
            Guided by industry veterans and thought leaders shaping the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 border border-orange-100 bg-gradient-to-br from-white to-orange-50">
                <div className="text-6xl mb-4 text-center">{advisor.image}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {advisor.name}
                </h3>
                <p className="text-sm font-medium text-orange-600 mb-2">
                  {advisor.role}
                </p>
                <p className="text-xs text-slate-500 mb-4 font-medium">
                  {advisor.expertise}
                </p>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  Expert in {advisor.expertise.toLowerCase()} with a proven
                  track record of success.
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={advisor.social.linkedin}
                    className="p-2 rounded-full bg-orange-100 hover:bg-orange-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={18} weight="fill" />
                  </a>
                  <a
                    href={advisor.social.twitter}
                    className="p-2 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogo size={18} weight="fill" />
                  </a>
                  <a
                    href={`mailto:${advisor.social.email}`}
                    className="p-2 rounded-full bg-orange-100 hover:bg-orange-900 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <EnvelopeSimple size={18} weight="fill" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
