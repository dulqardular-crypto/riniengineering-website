import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Animated number counter — counts up from 0 to `value` every time the
 * element scrolls into view. Uses a MotionValue so React doesn't
 * re-render on every tick.
 */
export default function CountUp({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) {
      mv.set(0);
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, mv]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
