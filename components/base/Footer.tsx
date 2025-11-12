"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Logo from "@/components/base/Logo";
import {
  TwitterLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#docs" },
    { label: "Help Center", href: "#help" },
    { label: "Community", href: "#community" },
    { label: "FAQs", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
};

const socialLinks = [
  {
    icon: TwitterLogoIcon,
    href: "#",
    label: "Twitter",
  },
  {
    icon: GithubLogoIcon,
    href: "#",
    label: "GitHub",
  },
  {
    icon: LinkedinLogoIcon,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: InstagramLogoIcon,
    href: "#",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <Logo />
              <p className="text-sm md:text-base text-muted-foreground font-space-grotesk mt-4 max-w-md">
                Learn anything, anywhere. Level Up Labs helps you master new
                skills with AI-guided paths, hands-on projects, and progress
                tracking.
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm font-semibold font-space-grotesk text-foreground mb-3">
                  Stay updated
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-background border-border/50"
                  />
                  <Button type="submit" size="default" className="shrink-0">
                    Subscribe
                    <ArrowRightIcon className="size-4 ml-2" weight="bold" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-sm font-bold font-space-grotesk text-foreground mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-sm font-bold font-space-grotesk text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-sm font-bold font-space-grotesk text-foreground mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm text-muted-foreground font-space-grotesk"
              >
                © {new Date().getFullYear()} Level Up Labs. All rights reserved.
              </motion.p>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
                {footerLinks.legal.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center size-10 rounded-lg bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <Icon className="size-5" weight="regular" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
