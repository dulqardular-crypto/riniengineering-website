import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="relative border-t border-white/10 bg-[#0A0B0E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
              <div className="h-20 w-20 flex items-center justify-center bg-black border border-white/10">
                <img
                  src={BRAND.logo}
                  alt="Rini Engineering Works"
                  className="logo-blend h-16 w-16 object-contain"
                />
              </div>
              <div>
                <div className="font-display text-2xl font-bold tracking-tight text-white">
                  RINI
                </div>
                <div className="overline mt-1">Engineering Works</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Precision-engineered steel furniture for home and office.
              Crafted in our Muppathadom workshop, built to last a lifetime.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <div className="overline mb-5">Navigate</div>
            <ul className="space-y-3 text-sm">
              {[
                { l: "Home", h: "#home" },
                { l: "About Us", h: "#about" },
                { l: "Products", h: "#products" },
                { l: "Why Choose Us", h: "#why-us" },
                { l: "Contact", h: "#contact" },
              ].map((i) => (
                <li key={i.h}>
                  <a
                    href={i.h}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="overline mb-5">Reach Us</div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-slate-400">
                <MapPin size={16} className="text-[#0047FF] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-[#0047FF] shrink-0 mt-0.5" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-[#0047FF] shrink-0 mt-0.5" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex gap-3 text-slate-400 hover:text-white transition-colors break-all"
                >
                  <Mail size={16} className="text-[#0047FF] shrink-0 mt-0.5" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Watermark wordmark */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 border-t border-white/10">
          <div className="font-display font-bold tracking-tighter text-[20vw] leading-none text-white/[0.04] select-none whitespace-nowrap text-center mt-4">
            RINI
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Rini Engineering Works. All rights reserved.
          </div>
          <div className="overline text-slate-600">Engineered with precision</div>
        </div>
      </div>
    </footer>
  );
}
