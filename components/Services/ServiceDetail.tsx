"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const serviceDetails: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
  }
> = {
  "accounting-outsourcing": {
    title: "Accounting Outsourcing",
    description:
      "Professional accounting services outsourced to our expert team",
    fullDescription:
      "Our comprehensive accounting outsourcing services help businesses streamline their financial operations and reduce costs. We handle everything from bookkeeping to financial reporting.",
    features: [
      "Bookkeeping and record maintenance",
      "Accounts payable and receivable",
      "Payroll processing",
      "Financial statement preparation",
      "Tax compliance",
    ],
    benefits: [
      "Cost reduction",
      "Improved accuracy",
      "Dedicated expert team",
      "Scalable services",
      "Focus on core business",
    ],
  },
  "tax-consulting": {
    title: "Tax Consulting",
    description: "Expert tax planning and compliance services",
    fullDescription:
      "Navigate complex tax regulations with our expert tax consulting services. We provide strategic tax planning and ensure full compliance with regulations.",
    features: [
      "Tax planning and strategy",
      "Tax compliance and filing",
      "Audit support",
      "International tax services",
      "Tax optimization",
    ],
    benefits: [
      "Minimize tax liability",
      "Regulatory compliance",
      "Strategic planning",
      "Audit confidence",
      "Expert guidance",
    ],
  },
  "business-advisory": {
    title: "Business Advisory",
    description: "Strategic business guidance and consulting",
    fullDescription:
      "Our business advisory services help organizations make informed strategic decisions and achieve sustainable growth.",
    features: [
      "Strategic planning",
      "Market analysis",
      "Operational efficiency",
      "Risk management",
      "Growth strategies",
    ],
    benefits: [
      "Informed decision making",
      "Competitive advantage",
      "Risk mitigation",
      "Sustainable growth",
      "Operational excellence",
    ],
  },
  "financial-planning": {
    title: "Financial Planning",
    description: "Comprehensive financial planning solutions",
    fullDescription:
      "Develop comprehensive financial plans that align with your business objectives and ensure long-term financial success.",
    features: [
      "Financial forecasting",
      "Budget planning",
      "Cash flow management",
      "Investment planning",
      "Risk assessment",
    ],
    benefits: [
      "Clear financial roadmap",
      "Improved cash flow",
      "Better decision making",
      "Risk mitigation",
      "Sustainable growth",
    ],
  },
  "training-development": {
    title: "Training & Development",
    description: "Professional training programs for your team",
    fullDescription:
      "Enhance your team's skills and knowledge with our comprehensive training and development programs.",
    features: [
      "Accounting training",
      "Tax training",
      "Technical workshops",
      "Compliance training",
      "Custom programs",
    ],
    benefits: [
      "Skilled workforce",
      "Improved productivity",
      "Employee retention",
      "Industry best practices",
      "Competitive edge",
    ],
  },
};

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4 font-space-grotesk">
              Service Not Found
            </h1>
            <Link href="/services">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all font-space-grotesk">
                <ArrowLeft size={20} weight="bold" />
                Back to Services
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services">
              <button className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-orange-600 font-semibold hover:text-orange-700 font-space-grotesk">
                <ArrowLeft size={20} weight="bold" />
                Back to Services
              </button>
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 font-space-grotesk">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-space-grotesk max-w-2xl">
              {service.fullDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Features and Benefits */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-space-grotesk">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-slate-600 font-space-grotesk">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-space-grotesk">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <p className="text-slate-600 font-space-grotesk">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-space-grotesk">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-space-grotesk">
              Contact us today to discuss how we can help your business succeed
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-200 transition-all font-space-grotesk">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
