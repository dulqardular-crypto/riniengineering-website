import { ArrowUpRight, Ruler } from "lucide-react";

const PRODUCTS = [
  {
    key: "locker-8-door",
    no: "01",
    name: "8 Door Locker Almirah",
    dimension: "6.5 ft × 3 ft × 1.5 ft",
    description:
      "Heavy-duty 8-compartment steel locker with individual key locks. Ideal for offices, schools, factories, and shared workspaces requiring secure personal storage.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/qhfkj6np_IMG_7302.PNG",
  },
  {
    key: "locker-6-door",
    no: "02",
    name: "6 Door Locker Almirah",
    dimension: "6.5 ft × 3 ft × 1.5 ft",
    description:
      "Spacious 6-compartment vertical locker system with separate locks per door. Engineered for hostels, gyms, staff rooms, and institutional storage.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/45h3zt0g_IMG_7303.PNG",
  },
  {
    key: "hostel-bunk-cot",
    no: "03",
    name: "Hostel Bunk Cot",
    dimension: "6.25 ft × 2.5 ft × 5 ft",
    description:
      "Robust two-tier metal bunk bed with reinforced ladder and welded steel frame. Built for hostels, dormitories, and labour accommodations.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/1e088wwk_IMG_7306.JPG.jpeg",
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
            <div className="overline mb-5">— Our Products</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Manufactured
              <br />
              <span className="text-slate-400">in our workshop.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/10">
            <p className="text-base text-slate-400 leading-relaxed">
              A selection of pieces we currently fabricate. Every unit is
              custom-built to your specified dimensions, color, and finish.
              Request a quote for bulk orders or modifications.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {PRODUCTS.map((p) => (
            <article
              key={p.key}
              data-testid={`product-card-${p.key}`}
              className="cat-card group relative bg-[#0A0B0E] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute top-4 left-4 overline text-slate-600">
                  {p.no} / 03
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center justify-center h-9 w-9 border border-black/20 bg-white/80 backdrop-blur group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-colors">
                    <ArrowUpRight
                      size={16}
                      className="text-black group-hover:text-white transition-colors"
                    />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold tracking-tight text-white leading-tight">
                  {p.name}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400">
                  <Ruler size={13} className="text-[#0047FF]" />
                  <span className="font-medium tracking-wide">
                    {p.dimension}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">
                  {p.description}
                </p>

                <button
                  data-testid={`product-quote-${p.key}`}
                  onClick={() => onQuote(p.name)}
                  className="mt-6 btn-accent rounded-sm inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold w-full"
                >
                  Request Quote
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Custom CTA bar */}
        <div className="mt-px bg-[#14161A] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="overline mb-2">Custom Orders</div>
            <h4 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight">
              Need something built to your exact spec?
            </h4>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              We manufacture steel furniture beyond this catalog — desks, racks,
              cupboards, custom frames. Send us your requirement.
            </p>
          </div>
          <button
            data-testid="categories-custom-quote"
            onClick={() => onQuote("Custom / Bulk Order")}
            className="btn-accent rounded-sm inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold shrink-0"
          >
            Get a Custom Quote
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
