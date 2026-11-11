"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { REVEAL_DISTANCE, REVEAL_DURATION } from "./utils/constants";

type Props = {
  children: React.ReactNode;
  /** seconds */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
  /**
   * For above-the-fold content: skips the JS-driven fade so the largest
   * contentful paint is not delayed until hydration. Uses a CSS rise instead.
   */
  eager?: boolean;
};

/** Fades and lifts its children into view the first time they scroll on screen. */
export function Reveal({ children, delay = 0, className, as = "div", eager = false }: Props) {
  const reduce = useReducedMotion();

  if (eager) {
    const Tag = as;
    return (
      <Tag className={`${reduce ? "" : "animate-rise"} ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </Tag>
    );
  }

  const Tag = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <Tag
        className={className}
        initial={reduce ? false : { opacity: 0, y: REVEAL_DISTANCE }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: REVEAL_DURATION, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Tag>
    </LazyMotion>
  );
}
