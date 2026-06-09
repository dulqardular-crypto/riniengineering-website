import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../../lib/constants";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[idx];

  const prev = () => {
    setDir(-1);
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = () => {
    setDir(1);
    setIdx((i) => (i + 1) % total);
  };

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-[#14161A]/40 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: header */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overline mb-5">— Customer Reviews</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
                Built to last.
                <br />
                <span className="text-slate-400">Reviewed to prove it.</span>
              </h2>
              <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-md">
                Don&apos;t take our word for it — hear from operations managers,
                designers, and homeowners who specify Rini by name.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex items-center gap-3">
                <motion.button
                  data-testid="testimonial-prev"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="h-12 w-12 border border-white/15 hover:bg-white/5 hover:border-[#0047FF] transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ArrowLeft size={18} />
                </motion.button>
                <motion.button
                  data-testid="testimonial-next"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="h-12 w-12 border border-white/15 hover:bg-white/5 hover:border-[#0047FF] transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ArrowRight size={18} />
                </motion.button>
                <div className="ml-4 overline text-slate-500">
                  {String(idx + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: current testimonial with slide animation */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[380px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  data-testid="testimonial-card"
                  className="relative border border-white/10 bg-[#0A0B0E] p-8 md:p-12"
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Quote
                    size={48}
                    className="text-[#0047FF]/30 absolute top-6 right-6"
                  />

                  <div className="flex items-center gap-1.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.2 + i * 0.07,
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        }}
                      >
                        <Star
                          size={16}
                          className="fill-[#0047FF] text-[#0047FF]"
                        />
                      </motion.span>
                    ))}
                  </div>

                  <blockquote className="font-display text-2xl md:text-3xl text-white leading-snug tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#0047FF]/10 border border-[#0047FF]/30 flex items-center justify-center font-display font-bold text-white">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  data-testid={`testimonial-dot-${i}`}
                  onClick={() => {
                    setDir(i > idx ? 1 : -1);
                    setIdx(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1 transition-all ${
                    i === idx
                      ? "w-10 bg-[#0047FF]"
                      : "w-6 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
