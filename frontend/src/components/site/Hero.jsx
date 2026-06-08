import { ArrowRight, ChevronDown } from "lucide-react";
import { MEDIA } from "../../lib/constants";

export default function Hero({ onQuote }) {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-[26rem] sm:pt-[34rem] md:pt-[40rem] pb-24 md:pb-32 overflow-hidden"
    >
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      {/* Faint texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url(${MEDIA.texture})`,
          backgroundSize: "cover",
        }}
      />
      {/* Radial spotlight */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(0,71,255,0.18)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 fade-up">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-white/[0.03] mb-8"
              data-testid="hero-eyebrow"
            >
              <span className="h-1.5 w-1.5 bg-[#0047FF]" />
              <span className="overline text-slate-300">
                Manufactured in Muppathadom, Kerala
              </span>
            </div>

            <h1
              data-testid="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tighter text-white"
            >
              Precision-Engineered
              <br />
              <span className="text-slate-400">Steel Furniture for</span>
              <br />
              Home <span className="text-[#0047FF]">&</span> Office.
            </h1>

            <p
              data-testid="hero-subheading"
              className="mt-8 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed"
            >
              Combining industrial-grade durability with elegant modern design.
              Reputed manufacturers trusted by businesses and homeowners alike —
              custom-built, powder-coated, and engineered to last a lifetime.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                data-testid="hero-explore-btn"
                className="btn-accent rounded-sm inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-tight"
              >
                Explore Our Collection
                <ArrowRight size={16} />
              </a>
              <button
                data-testid="hero-quote-btn"
                onClick={onQuote}
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 transition-colors rounded-sm px-6 py-3.5 text-sm font-semibold text-white tracking-tight"
              >
                View Catalog
                <ChevronDown size={16} />
              </button>
            </div>

            {/* mini stats */}
            <div
              className="mt-14 grid grid-cols-3 gap-0 max-w-md border-t border-white/10"
              data-testid="hero-stats"
            >
              {[
                { v: "20+", l: "Years Crafting Steel" },
                { v: "1000+", l: "Projects Delivered" },
                { v: "100%", l: "Custom Built" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`py-5 ${
                    i < 2 ? "border-r border-white/10" : ""
                  }`}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-white">
                    {s.v}
                  </div>
                  <div className="overline mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Split visuals */}
          <div className="lg:col-span-5 fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative h-[420px] sm:h-[540px] lg:h-[620px]">
              {/* main image (office) */}
              <div className="absolute top-0 right-0 w-[80%] h-[60%] border border-white/10 overflow-hidden">
                <img
                  src={MEDIA.heroOffice}
                  alt="Industrial steel office desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="overline text-white">Series 01 — Office</div>
                </div>
              </div>
              {/* secondary image (workshop) */}
              <div className="absolute bottom-0 left-0 w-[70%] h-[55%] border border-white/10 overflow-hidden">
                <img
                  src={MEDIA.heroWorkshop}
                  alt="Metal workshop manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="overline text-white">In-House Fabrication</div>
                </div>
              </div>
              {/* decorative tag */}
              <div className="absolute top-[58%] right-0 z-10 bg-[#0047FF] px-3 py-2">
                <div className="font-display font-bold text-xs tracking-wider text-white">
                  ISO-GRADE STEEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
