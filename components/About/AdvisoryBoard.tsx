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

const advisors = [
  {
    id: 1,
    name: "Samir Kumar Biswas",
    role: "Strategic Advisor",
    expertise:
      "Chemical & Petrochemical Industry, Government Policy, Finance, Infrastructure, Textiles",
    image: "/samir.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "samir@example.com",
    },
    bio: "Former IAS Officer and Additional Secretary, Government of India. IIT Madras graduate with an MBA from IIM Bangalore. Extensive experience across chemical, petrochemical, finance, infrastructure, textiles, and governance, including 7 years as director in chemical companies."
  },
  {
    id: 2,
    name: "Anupam Shrivastava",
    role: "Telecom Advisor",
    expertise:
      "Telecommunications, BSNL Leadership, International Representation",
    image: "/anupam.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "anupam@example.com",
    },
    bio: "1981 batch ITS officer with 30+ years of telecom experience. Former Chairman & Managing Director of BSNL. Held key positions including Director (CM), Senior GM, and represented TCIL in Zimbabwe. Trained in India and Japan."
  },
  {
    id: 3,
    name: "Rakesh Kumar Srivastava",
    role: "Industry & Policy Advisor",
    expertise:
      "Government Regulations, Project Execution, Inter-Ministerial Coordination",
    image: "/rk.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rk@example.com",
    },
    bio: "M.Tech from IIT (ISM) Dhanbad with 38+ years of experience across multiple Government of India ministries. Former Executive Director Cum Secretary, National Design Centre (Ministry of Textiles). Deep expertise in regulatory frameworks and sectoral policy execution."
  },
  {
    id: 4,
    name: "Sumiran Chandra",
    role: "Business Development Manager",
    expertise:
      "Economics, Policy Research, Econometrics, International Development",
    image: "/sumiran.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sumiran@example.com",
    },
    location: "Netherlands",
    bio: "MS in Social and Applied Economics (Wright State University). Experience at IIFT and NCAER with contributions to Gates Foundation–supported projects. Currently specializing in Econometrics & Management Sciences at Erasmus University, with strengths in problem-solving and policy analysis."
  },
  {
    id: 5,
    name: "Nidhi Goenka",
    role: "Taxation and Audit Head",
    expertise: "Finance, Accounting, Indian Taxation Laws",
    image: "/nidhi.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nidhi@example.com",
    },
    bio: "Chartered Accountant with 10+ years of experience in finance, accounting, audits, and Indian taxation compliance."
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Our Advisory Board
          </h2>
          <p className="text-lg text-slate-600 font-space-grotesk">
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
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1 font-space-grotesk">
                  {advisor.name}
                </h3>
                <p className="text-sm font-medium text-orange-600 mb-2 font-space-grotesk">
                  {advisor.role}
                </p>
                <p className="text-xs text-slate-500 mb-4 font-medium font-space-grotesk">
                  {advisor.expertise}
                </p>
                <p className="text-slate-600 text-sm mb-6 flex-grow font-space-grotesk">
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
