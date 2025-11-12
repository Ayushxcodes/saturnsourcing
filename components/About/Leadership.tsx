"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import {
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

const leaders = [
  {
    id: 1,
    name: "Ayush Pandey",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years of tech industry experience",
    image: "👨‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ayush@saturnsourcing.com",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "Expert in cloud infrastructure and system architecture",
    image: "👩‍💻",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@saturnsourcing.com",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chief Operations Officer",
    bio: "Operations strategist focused on efficiency and growth",
    image: "👨‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@saturnsourcing.com",
    },
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Head of Business Development",
    bio: "Strategic partnerships specialist driving market expansion",
    image: "👩‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "elena@saturnsourcing.com",
    },
  },
];

export default function Leadership() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Our Leadership
          </h2>
          <p className="text-lg text-slate-600 font-space-grotesk">
            Meet the talented team driving innovation at Saturn Sourcing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 border border-orange-100 bg-gradient-to-br from-white to-orange-50">
                <div className="text-6xl mb-4 text-center">{leader.image}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1 font-space-grotesk">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-orange-600 mb-3 font-space-grotesk">
                  {leader.role}
                </p>
                <p className="text-slate-600 text-sm mb-6 flex-grow font-space-grotesk">
                  {leader.bio}
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={leader.social.linkedin}
                    className="p-2 rounded-full bg-orange-100 hover:bg-orange-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={18} weight="fill" />
                  </a>
                  <a
                    href={leader.social.twitter}
                    className="p-2 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogo size={18} weight="fill" />
                  </a>
                  <a
                    href={`mailto:${leader.social.email}`}
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
