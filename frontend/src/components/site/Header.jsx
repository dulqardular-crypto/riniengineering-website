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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header-section"
      className={`fixed top-0 inset-x-0 z-50 ${
        scrolled
          ? "bg-[#0A0B0E]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        transition:
          "background-color 600ms cubic-bezier(0.65, 0, 0.35, 1), border-color 600ms cubic-bezier(0.65, 0, 0.35, 1), backdrop-filter 600ms",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered logo bar */}
        <div
          className="flex flex-col items-center overflow-hidden"
          style={{
            paddingTop: scrolled ? "8px" : "20px",
            paddingBottom: scrolled ? "8px" : "12px",
            transition: "padding 700ms cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          <a
            href="#home"
            data-testid="header-logo"
            className="flex flex-col items-center group"
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: scrolled ? "56px" : "min(32rem, 70vw)",
                height: scrolled ? "56px" : "min(32rem, 70vw)",
                transition: "width 700ms cubic-bezier(0.65, 0, 0.35, 1), height 700ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              <img
                src={BRAND.logo}
                alt="Rini Engineering Works"
                className="logo-blend w-full h-full object-contain"
              />
            </div>
            <div
              className="flex flex-col items-center leading-none overflow-hidden"
              style={{
                maxHeight: scrolled ? "0px" : "80px",
                marginTop: scrolled ? "0px" : "12px",
                opacity: scrolled ? 0 : 1,
                transition:
                  "max-height 700ms cubic-bezier(0.65, 0, 0.35, 1), margin-top 700ms cubic-bezier(0.65, 0, 0.35, 1), opacity 500ms ease",
              }}
            >
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white hidden sm:block">
                RINI
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.32em] text-slate-400 mt-1.5 hidden sm:block">
                Engineering Works
              </span>
            </div>
          </a>
        </div>

        {/* Divider when expanded */}
        <div
          className="hidden lg:block border-t -mx-4 sm:-mx-6 lg:-mx-8"
          style={{
            borderColor: scrolled ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.1)",
            transition: "border-color 600ms ease",
          }}
        />

        {/* Nav row */}
        <div
          className="flex items-center justify-between"
          style={{
            height: scrolled ? "48px" : "64px",
            transition: "height 700ms cubic-bezier(0.65, 0, 0.35, 1)",
          }}
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
