import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "../../lib/constants";
import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <section
      id="location"
      data-testid="map-section"
      className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <Reveal className="md:col-span-7">
            <div className="overline mb-5">— Visit Us</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Find our
              <br />
              <span className="text-slate-400">workshop on the map.</span>
            </h2>
          </Reveal>
          <Reveal
            className="md:col-span-5 md:pl-8 md:border-l md:border-white/10"
            delay={0.15}
          >
            <p className="text-base text-slate-400 leading-relaxed">
              Drop by our fabrication floor in Muppathadom to see steel
              furniture being engineered first-hand, or place a custom order
              on the spot.
            </p>
          </Reveal>
        </div>

        {/* Map + Info card */}
        <Reveal y={36}>
          <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
            {/* Map */}
            <motion.div
              className="lg:col-span-8 relative bg-[#0A0B0E] aspect-[16/10] lg:aspect-auto lg:min-h-[480px] overflow-hidden"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                title="Rini Engineering Works — Map"
                src={BRAND.mapsEmbed}
                className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[1.05]"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="map-iframe"
              />
              {/* Top overlay corner */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-[#0A0B0E]/85 backdrop-blur border border-white/10">
                <span className="h-2 w-2 bg-[#0047FF] animate-pulse" />
                <span className="overline text-white">Rini Engineering Works</span>
              </div>
            </motion.div>

            {/* Info side */}
            <div className="lg:col-span-4 bg-[#0A0B0E] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="text-[#0047FF] shrink-0 mt-1" size={20} />
                  <div className="overline mt-1">Address</div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Rini Engineering Works
                </h3>
                <p className="mt-4 text-base text-slate-400 leading-relaxed">
                  Industrial Development Area,
                  <br />
                  Muppathadom, Kerala — 683110
                </p>

                <div className="mt-7 pt-6 border-t border-white/10 grid grid-cols-2 gap-5">
                  <div>
                    <div className="overline mb-2">Hours</div>
                    <div className="text-sm text-white font-medium">
                      Mon — Sat
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      9 AM – 6 PM
                    </div>
                  </div>
                  <div>
                    <div className="overline mb-2">Closed</div>
                    <div className="text-sm text-white font-medium">
                      Sunday
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      &amp; Public holidays
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <motion.a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="get-directions-btn"
                  className="btn-accent rounded-sm w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Navigation size={16} />
                  Get Directions
                </motion.a>
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href={`tel:${BRAND.phoneRaw}`}
                    data-testid="map-call-btn"
                    className="rounded-sm border border-white/15 hover:border-[#0047FF] hover:bg-white/5 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone size={14} />
                    Call
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="map-whatsapp-btn"
                    className="rounded-sm border border-white/15 hover:border-[#25D366] hover:bg-white/5 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
