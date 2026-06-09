import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter — counts up from 0 to `value` once visible.
 * Use `suffix` and `prefix` for "+", "%", "k+", etc.
 */
export default function CountUp({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
