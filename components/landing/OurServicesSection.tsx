"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Pre-Entry Services",
    description:
      "Comprehensive guidance and support for planning your entry into the Indian market. We help navigate regulatory requirements and market preparation.",
    image: "/pes.png",
  },
  {
    title: "Post-Incorporation Services",
    description:
      "Full support after company establishment including compliance, taxation, and financial management to ensure smooth operations.",
    image: "/pis.png",
  },
  {
    title: "Outsourcing Services",
    description:
      "Dedicated accounting and financial management outsourcing services tailored to reduce operational costs and improve efficiency.",
    image: "/os.png",
  },
];

export default function OurServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-foreground">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden p-8 bg-white border-2 border-orange-200 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Service Image */}
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Card Number */}
              <div className="mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-space-grotesk opacity-30 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-bold font-space-grotesk text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Learn More Arrow */}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-orange-600 font-semibold font-space-grotesk hover:text-orange-700 transition-colors mt-auto"
              >
                Learn More
                <ArrowRight size={20} weight="bold" />
              </motion.div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
