"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
