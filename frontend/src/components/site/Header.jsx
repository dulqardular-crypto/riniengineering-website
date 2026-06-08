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
          ? "bg-[#0A0B0E]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            data-testid="header-logo"
            className="flex items-center gap-3 group"
          >
            <div className="h-16 w-16 sm:h-[72px] sm:w-[72px] flex items-center justify-center bg-white/[0.03] border border-white/10">
              <img
                src={BRAND.logo}
                alt="Rini Engineering Works"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                RINI
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 mt-1">
                Engineering Works
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
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

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
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
