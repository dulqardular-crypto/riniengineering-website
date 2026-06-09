import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Ruler } from "lucide-react";

/**
 * ProductCard — premium 3D-tilt card with:
 *  - Mouse-following spotlight glow
 *  - Subtle 3D rotation that follows cursor
 *  - Parallax image depth
 *  - Smooth spring physics
 *  - Animated arrow + sweep highlight
 */
export default function ProductCard({ product, onQuote, total = 8 }) {
  const ref = useRef(null);

  const x = useMotionValue(0); // 0..1 across card
  const y = useMotionValue(0); // 0..1 down card

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });
  const imgTx = useSpring(useTransform(x, [0, 1], [-12, 12]), {
    stiffness: 180,
    damping: 24,
  });
  const imgTy = useSpring(useTransform(y, [0, 1], [-8, 8]), {
    stiffness: 180,
    damping: 24,
  });
  const sx = useSpring(x, { stiffness: 200, damping: 25 });
  const sy = useSpring(y, { stiffness: 200, damping: 25 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-testid={`product-card-${product.key}`}
      className="group relative bg-[#0A0B0E] overflow-hidden flex flex-col h-full will-change-transform"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        {/* Parallax image */}
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-6 will-change-transform"
          style={{ x: imgTx, y: imgTy, scale: 1.04 }}
        />

        {/* Spotlight glow following cursor */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: useTransform(
              [sx, sy],
              ([px, py]) =>
                `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgba(0,71,255,0.18), transparent 55%)`
            ),
            transition: "opacity 400ms ease",
          }}
        />

        {/* Sweep highlight on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -inset-x-1/2 -top-1/2 h-[200%] w-1/3 rotate-12 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-[1100ms] ease-out" />
        </div>

        {/* Top badges */}
        <div className="absolute top-4 left-4 overline text-slate-600">
          {product.no} / {String(total).padStart(2, "0")}
        </div>
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ rotate: 45, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
        >
          <span className="inline-flex items-center justify-center h-9 w-9 border border-black/20 bg-white/85 backdrop-blur group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-colors">
            <ArrowUpRight
              size={16}
              className="text-black group-hover:text-white transition-colors"
            />
          </span>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold tracking-tight text-white leading-tight">
          {product.name}
        </h3>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400">
          <Ruler size={13} className="text-[#0047FF]" />
          <span className="font-medium tracking-wide">{product.dimension}</span>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">
          {product.description}
        </p>

        <motion.button
          data-testid={`product-quote-${product.key}`}
          onClick={() => onQuote(product.name)}
          className="mt-6 btn-accent rounded-sm inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold w-full"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Request Quote
          <ArrowUpRight size={14} />
        </motion.button>
      </div>

      {/* Animated border highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 border border-[#0047FF]/0 group-hover:border-[#0047FF]/40 transition-colors duration-500"
      />
    </motion.article>
  );
}
