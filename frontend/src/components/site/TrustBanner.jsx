import { Star, Factory, Wrench, Award } from "lucide-react";

const BADGES = [
  { icon: Factory, label: "Premium Steel Grade" },
  { icon: Wrench, label: "Custom Manufacturing" },
  { icon: Award, label: "20+ Years Expertise" },
  { icon: Star, label: "4.9 / 5 Customer Rating" },
];

const MARQUEE_ITEMS = [
  "Steel Office Desks",
  "Filing Cabinets",
  "Slotted Angle Racks",
  "Metal Cupboards",
  "Custom Wardrobes",
  "Heavy-Duty Storage",
  "Locker Systems",
  "Modular Shelving",
];

export default function TrustBanner() {
  return (
    <section
      data-testid="trust-banner-section"
      className="relative border-y border-white/10 bg-[#14161A]/60 backdrop-blur"
    >
      {/* Top: Rating + badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Rating block */}
          <div className="lg:col-span-4 flex items-center gap-5 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#0047FF] text-[#0047FF]"
                  />
                ))}
              </div>
              <div className="mt-2">
                <span className="font-display text-3xl font-bold text-white">
                  4.9/5
                </span>
                <span className="ml-2 overline">Customer Rating</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Trusted by 1,000+ homes &amp; businesses
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {BADGES.map((b, i) => (
              <div
                key={i}
                data-testid={`trust-badge-${i}`}
                className="bg-[#0A0B0E] p-5 flex flex-col items-start gap-3 hover:bg-[#14161A] transition-colors"
              >
                <b.icon size={20} className="text-[#C0C5CE]" />
                <div className="text-sm font-semibold text-white leading-tight">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-white/10 overflow-hidden py-4 bg-[#0A0B0E]">
        <div className="flex marquee-track whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-6 overline text-slate-500"
            >
              <span>{m}</span>
              <span className="h-1 w-1 bg-[#0047FF]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
