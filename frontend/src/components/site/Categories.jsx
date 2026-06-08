import { ArrowUpRight, Check } from "lucide-react";
import { MEDIA, OFFICE_ITEMS, HOME_ITEMS } from "../../lib/constants";

const CATEGORIES = [
  {
    key: "office",
    no: "01",
    title: "Office Furniture",
    blurb:
      "Engineered for productivity. Robust desks, filing systems, and modular racks designed for enterprises that demand longevity.",
    items: OFFICE_ITEMS,
    image: MEDIA.heroOffice,
  },
  {
    key: "home",
    no: "02",
    title: "Home Furniture",
    blurb:
      "Contemporary metal craftsmanship for the modern home. Cupboards, wardrobes, and bespoke steel frames built to your space.",
    items: HOME_ITEMS,
    image: MEDIA.catHome,
  },
];

export default function Categories({ onQuote }) {
  return (
    <section
      id="products"
      data-testid="categories-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 md:mb-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="overline mb-5">— Our Collection</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Two divisions.
              <br />
              <span className="text-slate-400">One standard of craftsmanship.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/10">
            <p className="text-base text-slate-400 leading-relaxed">
              Whether outfitting a corporate floor or finishing a private
              residence, every piece is fabricated in our Muppathadom workshop
              to the same uncompromising standard.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/10">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.key}
              data-testid={`category-card-${cat.key}`}
              className="cat-card group relative bg-[#0A0B0E] overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/40 to-transparent" />
                <div className="absolute top-5 left-5 overline text-white/80">
                  {cat.no} / 02
                </div>
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center justify-center h-10 w-10 border border-white/30 bg-white/[0.05] backdrop-blur group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-colors">
                    <ArrowUpRight size={18} className="text-white" />
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                  {cat.blurb}
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-y-2.5 gap-x-6">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check
                        size={14}
                        className="text-[#0047FF] mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    data-testid={`category-quote-${cat.key}`}
                    onClick={() => onQuote(cat.title)}
                    className="btn-accent rounded-sm inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
                  >
                    Request Quote
                    <ArrowUpRight size={14} />
                  </button>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-slate-300 hover:text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
