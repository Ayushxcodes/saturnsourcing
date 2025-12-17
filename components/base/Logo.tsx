"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { EscalatorUpIcon } from "@phosphor-icons/react/dist/ssr";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="text-2xl font-bold font-space-grotesk flex items-center gap-2 group"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        
      </motion.div>
      <span className="group-hover:text-primary/80 transition-colors">
        Saturn Consulting Group
      </span>
    </Link>
  );
}
