import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Sparkles, Award } from "lucide-react";
import { VALUE_PROPS } from "../../lib/constants";
import Reveal from "./Reveal";

const ICONS = { Ruler, ShieldCheck, Sparkles, Award };

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-testid="why-choose-us-section"
      className="relative py-24 md:py-32 bg-[#14161A]/40 border-y border-white/10"
    >
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <Reveal className="md:col-span-7">
            <div className="overline mb-5">— Why Choose Rini</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Engineering principles,
              <br />
              <span className="text-slate-400">applied to furniture.</span>
            </h2>
          </Reveal>
          <Reveal
            className="md:col-span-5 md:pl-8 md:border-l md:border-white/10"
            delay={0.15}
          >
            <p className="text-base text-slate-400 leading-relaxed">
              We don&apos;t manufacture furniture — we engineer it. Every weld,
              every coat, every dimension serves a function. Here&apos;s what sets
              us apart.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {VALUE_PROPS.map((vp, i) => {
            const Icon = ICONS[vp.icon];
            return (
              <Reveal key={vp.n} delay={i * 0.1} y={36}>
                <motion.div
                  data-testid={`why-prop-${vp.n}`}
                  className="group bg-[#0A0B0E] p-7 md:p-8 hover:bg-[#14161A] transition-colors relative overflow-hidden h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className="h-12 w-12 flex items-center justify-center border border-white/10 group-hover:border-[#0047FF] group-hover:bg-[#0047FF]/10 transition-colors"
                      whileHover={{ rotate: 12, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <Icon size={20} className="text-[#C0C5CE]" />
                    </motion.div>
                    <div className="font-display text-2xl font-bold text-slate-700">
                      {vp.n}
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white mb-3">
                    {vp.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {vp.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0047FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
