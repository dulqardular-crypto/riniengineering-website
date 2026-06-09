import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reveal — fades + slides children into view when scrolled into the viewport.
 *
 * Props:
 *  - delay: number (seconds) before this child starts
 *  - y: vertical offset in px (default 32)
 *  - duration: animation duration (default 0.7)
 *  - once: whether to play only once (default true)
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.7,
  once = true,
  className = "",
  as = "div",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
