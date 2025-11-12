"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Briefcase,
  BookOpen,
  Calculator,
  Target,
  Users,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    id: 1,
    title: "Accounting Outsourcing",
    description:
      "Professional accounting services outsourced to our expert team",
    icon: Calculator,
    slug: "accounting-outsourcing",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Tax Consulting",
    description: "Expert tax planning and compliance services",
    icon: Briefcase,
    slug: "tax-consulting",
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Business Advisory",
    description: "Strategic business guidance and consulting",
    icon: Target,
    slug: "business-advisory",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "Financial Planning",
    description: "Comprehensive financial planning solutions",
    icon: Briefcase,
    slug: "financial-planning",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    title: "Training & Development",
    description: "Professional training programs for your team",
    icon: BookOpen,
    slug: "training-development",
    color: "from-red-500 to-red-600",
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 font-space-grotesk">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-space-grotesk">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className="p-8 border border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 h-full cursor-pointer group">
                      <div
                        className={`inline-block p-4 rounded-lg bg-gradient-to-b ${service.color} mb-6`}
                      >
                        <IconComponent
                          size={32}
                          weight="bold"
                          className="text-white"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-space-grotesk group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 font-space-grotesk mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-orange-600 font-semibold font-space-grotesk group-hover:gap-3 transition-all">
                        Learn More
                        <span>→</span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
