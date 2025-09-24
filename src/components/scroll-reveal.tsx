"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

interface ScrollRevealProps {
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

export const ScrollReveal = ({
  delay = 0,
  className,
  as = "div",
  children,
}: PropsWithChildren<ScrollRevealProps>) => {
  const M = motion[as as keyof typeof motion] as any;
  return (
    <M
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </M>
  );
};

export default ScrollReveal;