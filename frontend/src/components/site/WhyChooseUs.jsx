import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { VALUE_PROPS } from "../../lib/constants";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-testid="why-choose-us-section"
      className="relative py-24 md:py-32 bg-[#14161A]/40 border-y border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      {/* Background accent */}
      <motion.div
        aria-hidden
        className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,71,255,0.12)_0%,_transparent_70%)] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-14 md:mb-16 items-end">
          <Reveal className="lg:col-span-7">
            <div className="overline mb-5">— Why Choose Rini Steel Furniture</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Quality you can
              <br />
              <span className="text-slate-400">build a business on.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/10" delay={0.15}>
            <p className="text-base text-slate-400 leading-relaxed">
              Manufacturers of premium steel cupboards, cots, lockers, office
              tables, storage racks, and custom steel furniture in Kerala.
              Here&apos;s why our customers stay with us.
            </p>
          </Reveal>
        </div>

        {/* Checklist */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {VALUE_PROPS.map((vp, i) => (
            <Reveal key={vp.title} delay={(i % 3) * 0.08 + Math.floor(i / 3) * 0.05} y={24}>
              <motion.div
                data-testid={`why-prop-${i + 1}`}
                className="group bg-[#0A0B0E] p-6 md:p-7 hover:bg-[#14161A] transition-colors flex items-start gap-5 h-full relative overflow-hidden"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              >
                <motion.div
                  className="h-11 w-11 shrink-0 flex items-center justify-center bg-[#0047FF]/10 border border-[#0047FF]/30 group-hover:bg-[#0047FF] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Check
                    size={18}
                    className="text-[#0047FF] group-hover:text-white transition-colors"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="overline mb-2 text-slate-500">
                    {String(i + 1).padStart(2, "0")} / 07
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-white leading-tight">
                    {vp.title}
                  </h3>
                </div>
                {/* hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0047FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
