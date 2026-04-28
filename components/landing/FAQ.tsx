"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/base/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Custom trigger component with morphing icons
const FAQTrigger = ({
  children,
  value,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  value: string;
}) => {
  const [isOpen, setIsOpen] = useState(value === "item-0");
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkState = () => {
      if (triggerRef.current) {
        // Check the parent AccordionItem's data-state
        const item = triggerRef.current.closest("[data-state]");
        const state = item?.getAttribute("data-state");
        setIsOpen(state === "open");
      }
    };

    // Check initial state after a small delay to ensure DOM is ready
    const timeout = setTimeout(checkState, 0);

    // Use MutationObserver to watch for state changes on the parent item
    const observer = new MutationObserver(checkState);
    if (triggerRef.current?.parentElement?.parentElement) {
      observer.observe(triggerRef.current.parentElement.parentElement, {
        attributes: true,
        attributeFilter: ["data-state"],
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 md:py-5 text-left text-base md:text-lg font-semibold font-space-grotesk transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 w-full group",
          className
        )}
        {...props}
      >
        <span className="text-left flex-1">{children}</span>
        <div className="relative size-5 shrink-0 mt-0.5 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isOpen ? (
                <MinusIcon className="size-5 text-primary" weight="bold" />
              ) : (
                <PlusIcon
                  className="size-5 text-muted-foreground group-hover:text-primary transition-colors"
                  weight="bold"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a comprehensive suite of accounting services including payroll processing, tax preparation, financial reporting, bookkeeping, cloud accounting solutions, and proactive tax strategy planning tailored to your business needs.",
  },
  {
    question: "How does cloud accounting work for US businesses?",
    answer:
      "We use secure, cloud-based accounting platforms that allow real-time access to your financial data from anywhere. Our team manages your books, reporting, and compliance while ensuring alignment with US accounting standards and IRS requirements.",
  },
  {
    question: "How can cloud accounting benefit my business?",
    answer:
      "Cloud accounting improves accuracy, provides real-time financial visibility, enhances collaboration, and reduces manual processes. It also enables better decision-making through up-to-date reports and seamless integration with other business tools.",
  },
  {
    question: "Do you provide US tax planning and tax strategy services?",
    answer:
      "Yes, we specialize in US tax planning and strategy. We proactively analyze your financial position to minimize tax liabilities, ensure IRS compliance, and identify opportunities such as deductions, credits, and entity structuring benefits.",
  },
  {
    question: "Is my data secure with your services?",
    answer:
      "Yes, data security is our top priority. We use advanced encryption, secure cloud infrastructure, and strict access controls. Our systems comply with US data protection standards and industry best practices to keep your information safe.",
  },
  {
    question: "How are your services priced?",
    answer:
      "We offer flexible pricing models tailored to your needs, including fixed monthly packages, hourly rates, or service-based pricing. Our pricing is transparent, with no hidden fees.",
  },
  {
    question: "Can your services scale with my business?",
    answer:
      "Absolutely. Our cloud-based systems and service structure are designed to scale as your business grows, whether you’re adding employees, expanding operations, or increasing transaction volume.",
  },
  {
    question: "Who will handle my accounts?",
    answer:
      "Your accounts will be managed by a dedicated team of qualified accountants and tax professionals experienced in US accounting standards, cloud platforms, and tax regulations.",
  },
  {
    question: "What do I need to get started with your services?",
    answer:
      "To get started, we need basic information about your business, prior financial records, and access to your accounting systems. Our onboarding team will guide you through every step for a smooth transition.",
  },
  {
    question:
      "What makes your cloud accounting and tax services unique?",
    answer:
      "We combine personalized client service with modern cloud technology and proactive tax strategy. Our solutions are customized to your business goals, ensuring compliance, efficiency, and long-term financial optimization.",
  },
  {
    question: "What happens if I am not satisfied with the service?",
    answer:
      "We are committed to your satisfaction. If you’re not happy with our service, we will address your concerns promptly and adjust our approach, including assigning a new team if necessary.",
  },
  {
    question: "How can I contact you for support?",
    answer:
      "Our support team is available via email, phone, and live chat. We typically respond to all inquiries within 24 hours.",
  },
];


export default function FAQ() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full space-y-4"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-neutral-300 rounded-lg px-4 md:px-6 bg-background shadow-custom hover:shadow-lg transition-shadow"
                  >
                    <FAQTrigger value={`item-${index}`}>
                      {faq.question}
                    </FAQTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground font-space-grotesk pb-4 md:pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
