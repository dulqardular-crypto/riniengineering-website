import { motion } from "framer-motion";
import { MEDIA } from "../../lib/constants";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const STATS = [
  { v: 20, suffix: "+", l: "Years in Steel Fabrication" },
  { v: 1, suffix: "k+", l: "Custom Projects" },
  { v: 100, suffix: "%", l: "In-House Manufacturing" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image stack */}
          <Reveal className="lg:col-span-6 order-2 lg:order-1" y={36}>
            <div className="relative">
              <motion.div
                className="border border-white/10 overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <motion.img
                  src={MEDIA.heroWorkshop}
                  alt="Rini Engineering Works workshop"
                  className="w-full h-[420px] md:h-[520px] object-contain p-4 bg-white"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-60 border border-white/10 bg-[#0A0B0E]"
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-5">
                  <div className="overline mb-1">Workshop</div>
                  <div className="font-display text-lg font-semibold text-white">
                    Muppathadom
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Industrial Development Area, Kerala
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <div className="overline mb-5">— About Rini Engineering Works</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
                A workshop built
                <br />
                <span className="text-slate-400">on precision.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-base md:text-lg text-slate-400 leading-relaxed">
                Founded with a singular ambition — to engineer steel furniture
                that outlasts trends, generations, and abuse. From our fabrication
                floor in Muppathadom, we cut, weld, finish, and assemble every
                piece in-house. No outsourcing, no shortcuts.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                The result is furniture that engineers, contractors, and
                homeowners specify by name. Robust. Beautiful. Built once, built
                right.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-0 border-t border-white/10">
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    data-testid={`about-stat-${i}`}
                    className={`py-6 ${
                      i < STATS.length - 1 ? "border-r border-white/10" : ""
                    }`}
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-white">
                      <CountUp value={s.v} suffix={s.suffix} />
                    </div>
                    <div className="overline mt-1.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
