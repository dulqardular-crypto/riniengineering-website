import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    key: "locker-8-door",
    no: "01",
    name: "8 Door Locker Almirah",
    dimension: "6.5 ft × 3 ft × 1.5 ft",
    description:
      "Heavy-duty 8-compartment steel locker with individual key locks. Ideal for offices, schools, factories, and shared workspaces requiring secure personal storage.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/ftlwc3vk_IMG_7301.PNG",
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
    key: "locker-24-door",
    no: "03",
    name: "24 Door Locker Almirah",
    dimension: "6.5 ft × 3 ft × 1.5 ft",
    description:
      "High-density 24-compartment industrial locker with individual key locks. Built for factories, large workforces, schools, and high-traffic personal storage demands.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/04yf263q_IMG_7360.PNG",
  },
  {
    key: "hostel-bunk-cot",
    no: "04",
    name: "Hostel Bunk Cot",
    dimension: "6.25 ft × 2.5 ft × 5 ft",
    description:
      "Robust two-tier metal bunk bed with reinforced ladder and welded steel frame. Built for hostels, dormitories, and labour accommodations.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/1e088wwk_IMG_7306.JPG.jpeg",
  },
  {
    key: "folding-wall-table",
    no: "05",
    name: "Wall-Mount Folding Table",
    dimension: "Custom sizes available",
    description:
      "Space-saving wall-mounted folding table with heavy-duty steel brackets. Folds flat against the wall when not in use — ideal for compact homes, balconies, and workshops.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/cb7yg6no_image.png",
  },
  {
    key: "study-chair-tablet",
    no: "06",
    name: "Tablet-Arm Study Chair",
    dimension: "Standard institutional size",
    description:
      "Institutional study chair with perforated steel backrest, integrated wooden writing pad, and under-seat rack. Built for colleges, training centres, and classrooms.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/a9hmnuoq_image.png",
  },
  {
    key: "office-desk-single-pedestal",
    no: "07",
    name: "Single-Pedestal Office Desk",
    dimension: "Custom sizes available",
    description:
      "Premium office desk with walnut-finish work surface and welded steel frame. Features a lockable drawer and storage compartment for a clean, executive look.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/ehd9x9zx_image.png",
  },
  {
    key: "office-desk-heavy-duty",
    no: "08",
    name: "Heavy-Duty Office Desk",
    dimension: "Custom sizes available",
    description:
      "Full-size steel office desk with lockable cabinet on one side and triple-drawer pedestal on the other. Built for institutions, government offices, and managers.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/5zr0ejjs_image.png",
  },
  {
    key: "supermarket-billing-counter",
    no: "09",
    name: "Supermarket Billing Counter",
    dimension: "Custom sizes available",
    description:
      "Retail-grade billing counter with stainless-steel top, lockable cash drawer, and open under-shelf for bags & supplies. Built for supermarkets, kiosks, and checkout stations.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/6u1zi0s5_B64FF880-C71D-44C4-B86A-81BACFF0CE43.jpeg",
  },
  {
    key: "bunk-cot-with-locker",
    no: "10",
    name: "Bunk Cot with Locker",
    dimension: "Custom sizes available",
    description:
      "Single-tier hostel cot with integrated lockable storage boxes beneath. Combines sleeping space and secure personal storage — ideal for hostels and dormitories.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/dttvrb68_Photoroom_20260611_002013.jpeg",
  },
  {
    key: "industrial-trolley",
    no: "11",
    name: "Industrial Mesh Trolley",
    dimension: "Custom sizes available",
    description:
      "Heavy-duty four-wheel mesh trolley with pneumatic tyres and welded steel frame. Built for warehouses, factories, and goods movement in industrial sites.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/glz3wevn_Photoroom_20260611_002332.jpeg",
  },
  {
    key: "school-bench-desk",
    no: "12",
    name: "School Bench & Desk Set",
    dimension: "Custom sizes available",
    description:
      "Sturdy welded steel-frame bench and desk set with high-pressure laminate tops. Engineered for schools, dining halls, and training centres.",
    image:
      "https://customer-assets.emergentagent.com/job_precision-metals-5/artifacts/nfcqnzuz_Photoroom_20260611_002619.jpeg",
  },
];

const headerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Categories({ onQuote }) {
  return (
    <section
      id="products"
      data-testid="categories-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background grid + radial accent */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(0,71,255,0.10)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-20 grid md:grid-cols-12 gap-8 items-end"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div variants={headerItem} className="md:col-span-7">
            <div className="overline mb-5">— Our Products</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Manufactured
              <br />
              <span className="text-slate-400">in our workshop.</span>
            </h2>
          </motion.div>
          <motion.div
            variants={headerItem}
            className="md:col-span-5 md:pl-8 md:border-l md:border-white/10"
          >
            <p className="text-base text-slate-400 leading-relaxed">
              A selection of pieces we currently fabricate. Every unit is
              custom-built to your specified dimensions, color, and finish.
              Request a quote for bulk orders or modifications.
            </p>
          </motion.div>
        </motion.div>

        {/* Product grid — 4 cols on lg, 2 on sm */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.key}
              delay={(i % 4) * 0.08 + Math.floor(i / 4) * 0.05}
              y={48}
              duration={0.9}
            >
              <ProductCard product={p} onQuote={onQuote} total={PRODUCTS.length} />
            </Reveal>
          ))}
        </div>

        {/* Custom CTA bar */}
        <Reveal delay={0.2} y={28}>
          <div className="mt-px bg-[#14161A] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
            <motion.div
              aria-hidden
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#0047FF]/15 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="overline mb-2">Custom Orders</div>
              <h4 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight">
                Need something built to your exact spec?
              </h4>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                We manufacture steel furniture beyond this catalog — desks, racks,
                cupboards, custom frames. Send us your requirement.
              </p>
            </div>
            <motion.button
              data-testid="categories-custom-quote"
              onClick={() => onQuote("Custom / Bulk Order")}
              className="btn-accent rounded-sm inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold shrink-0 relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Custom Quote
              <ArrowUpRight size={14} />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
