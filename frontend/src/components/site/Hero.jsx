import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MEDIA } from "../../lib/constants";
import CountUp from "./CountUp";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const STATS = [
  { v: 20, l: "Years Crafting Steel", suffix: "+" },
  { v: 1000, l: "Projects Delivered", suffix: "+" },
  { v: 100, l: "Custom Built", suffix: "%" },
];

export default function Hero({ onQuote }) {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-[26rem] sm:pt-[34rem] md:pt-[40rem] pb-24 md:pb-32 overflow-hidden"
    >
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url(${MEDIA.texture})`,
          backgroundSize: "cover",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(0,71,255,0.18)_0%,_transparent_70%)] pointer-events-none"
        animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-white/[0.03] mb-8"
              data-testid="hero-eyebrow"
            >
              <motion.span
                className="h-1.5 w-1.5 bg-[#0047FF]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="overline text-slate-300">
                Manufactured in Muppathadom, Kerala
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              data-testid="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tighter text-white"
            >
              Precision-Engineered
              <br />
              <span className="text-slate-400">Steel Furniture for</span>
              <br />
              Home <span className="text-[#0047FF]">&</span> Office.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              data-testid="hero-subheading"
              className="mt-8 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed"
            >
              Combining industrial-grade durability with elegant modern design.
              Reputed manufacturers trusted by businesses and homeowners alike —
              custom-built, powder-coated, and engineered to last a lifetime.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#products"
                data-testid="hero-explore-btn"
                className="btn-accent rounded-sm inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-tight"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Our Collection
                <ArrowRight size={16} />
              </motion.a>
              <motion.button
                data-testid="hero-quote-btn"
                onClick={onQuote}
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-sm px-6 py-3.5 text-sm font-semibold text-white tracking-tight"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Catalog
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>

            {/* mini stats */}
            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-3 gap-0 max-w-md border-t border-white/10"
              data-testid="hero-stats"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`py-5 ${i < 2 ? "border-r border-white/10" : ""}`}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-white">
                    <CountUp value={s.v} suffix={s.suffix} />
                  </div>
                  <div className="overline mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Split visuals */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-[420px] sm:h-[540px] lg:h-[620px]">
              {/* main image (office) */}
              <motion.div
                className="absolute top-0 right-0 w-[80%] h-[60%] border border-white/10 overflow-hidden"
                whileHover={{ y: -6, rotate: -0.4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                animate={{ y: [0, -6, 0] }}
                style={{ animationDelay: "0.4s" }}
              >
                <motion.img
                  src={MEDIA.heroOffice}
                  alt="Rini Engineering Works workshop floor"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="overline text-white">Workshop Floor · Muppathadom</div>
                </div>
              </motion.div>

              {/* secondary image (workshop) */}
              <motion.div
                className="absolute bottom-0 left-0 w-[70%] h-[55%] border border-white/10 overflow-hidden bg-white"
                whileHover={{ y: -6, rotate: 0.4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <motion.img
                  src={MEDIA.heroWorkshop}
                  alt="Modular steel kiosk"
                  className="w-full h-full object-contain p-2"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="overline text-white">Modular Steel Kiosk</div>
                </div>
              </motion.div>

              {/* decorative floating tag */}
              <motion.div
                className="absolute top-[58%] right-0 z-10 bg-[#0047FF] px-3 py-2 shadow-lg shadow-[#0047FF]/30"
                animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-display font-bold text-xs tracking-wider text-white">
                  ISO-GRADE STEEL
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
