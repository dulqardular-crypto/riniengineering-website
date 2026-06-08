import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../../lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header({ onQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header-section"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0B0E]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered logo bar */}
        <div
          className={`flex flex-col items-center transition-all duration-300 ${
            scrolled ? "py-2" : "pt-5 pb-3"
          }`}
        >
          <a
            href="#home"
            data-testid="header-logo"
            className="flex flex-col items-center group"
          >
            <div
              className={`flex items-center justify-center bg-white/[0.03] border border-white/10 transition-all duration-300 ${
                scrolled
                  ? "h-14 w-14 sm:h-16 sm:w-16"
                  : "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"
              }`}
            >
              <img
                src={BRAND.logo}
                alt="Rini Engineering Works"
                className={`object-contain transition-all duration-300 ${
                  scrolled
                    ? "h-12 w-12 sm:h-14 sm:w-14"
                    : "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
                }`}
              />
            </div>
            {!scrolled && (
              <div className="hidden sm:flex flex-col items-center leading-none mt-3">
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
                  RINI
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.32em] text-slate-400 mt-1.5">
                  Engineering Works
                </span>
              </div>
            )}
          </a>
        </div>

        {/* Divider when expanded */}
        {!scrolled && (
          <div className="hidden lg:block border-t border-white/10 -mx-4 sm:-mx-6 lg:-mx-8" />
        )}

        {/* Nav row */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-12" : "h-16"
          }`}
        >
          {/* Left CTA (call) */}
          <a
            href={`tel:${BRAND.phoneRaw}`}
            data-testid="header-call"
            className="hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
          >
            <span className="h-1.5 w-1.5 bg-[#0047FF]" />
            Call · {BRAND.phone}
          </a>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-9 mx-auto">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-[#0047FF] hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTA + mobile */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              data-testid="header-quote-btn"
              onClick={onQuote}
              className="hidden md:inline-flex items-center gap-2 btn-accent rounded-sm px-5 py-2.5 text-sm font-semibold tracking-tight"
            >
              Get a Free Quote
              <span className="h-1.5 w-1.5 bg-white/80" />
            </button>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-white/10 bg-[#0A0B0E]/95 backdrop-blur-xl"
        >
          <div className="px-4 py-6 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base text-slate-200 hover:text-white border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              className="mt-4 w-full btn-accent rounded-sm px-5 py-3 text-sm font-semibold"
              data-testid="mobile-quote-btn"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
