"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import {
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const leaders = [
  {
    id: 1,
    name: "Nishant Khemani",
    role: "Managing Partner",
    bio: "Nishant is a Chartered Accountant with experience in Business Restructuring, Tax Advisory, and previous work at KPMG's International Taxation and Regulatory division.",
    image: "/nishant.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nishant@saturnsourcing.com",
    },
  },
  {
    id: 2,
    name: "Aman Aggarwal",
    role: "Partner",
    bio: "Aman Agarwal, a Chartered Accountant with an MBA in Finance, has over 10 years of consulting experience in Indian economic laws.",
    image: "/leadership2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@saturnsourcing.com",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 border border-orange-100 bg-gradient-to-br from-white to-orange-50 items-center text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
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
