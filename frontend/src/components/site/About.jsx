import { MEDIA } from "../../lib/constants";

const STATS = [
  { v: "20+", l: "Years in Steel Fabrication" },
  { v: "1k+", l: "Custom Projects" },
  { v: "100%", l: "In-House Manufacturing" },
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
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="border border-white/10 overflow-hidden">
                <img
                  src={MEDIA.heroWorkshop}
                  alt="Rini Engineering Works workshop"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-60 border border-white/10 bg-[#0A0B0E]">
                <div className="p-5">
                  <div className="overline mb-1">Workshop</div>
                  <div className="font-display text-lg font-semibold text-white">
                    Muppathadom
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Industrial Development Area, Kerala
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="overline mb-5">— About Rini Engineering Works</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              A workshop built
              <br />
              <span className="text-slate-400">on precision.</span>
            </h2>
            <p className="mt-7 text-base md:text-lg text-slate-400 leading-relaxed">
              Founded with a singular ambition — to engineer steel furniture
              that outlasts trends, generations, and abuse. From our fabrication
              floor in Muppathadom, we cut, weld, finish, and assemble every
              piece in-house. No outsourcing, no shortcuts.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              The result is furniture that engineers, contractors, and
              homeowners specify by name. Robust. Beautiful. Built once, built
              right.
            </p>

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
                    {s.v}
                  </div>
                  <div className="overline mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
