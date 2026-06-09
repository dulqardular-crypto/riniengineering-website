import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { BRAND, PRODUCT_INTERESTS } from "../../lib/constants";
import { submitQuote } from "../../lib/api";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  product_interest: "Office Furniture",
  message: "",
};

export default function ContactQuote() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email and phone.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote(form);
      toast.success(
        "Quote request received. We'll get back to you within 24 hours."
      );
      setForm(INITIAL);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try WhatsApp or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-quote-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: contact info */}
          <div className="lg:col-span-5">
            <div className="overline mb-5">— Get In Touch</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.02]">
              Let&apos;s build
              <br />
              <span className="text-slate-400">something steel.</span>
            </h2>
            <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-md">
              Share your requirement, drop by the workshop, or message us on
              WhatsApp. Quotes are typically returned within one business day.
            </p>

            <div className="mt-10 space-y-px bg-white/10">
              {/* Address */}
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-address"
                className="bg-[#0A0B0E] p-5 flex items-start gap-4 hover:bg-[#14161A] transition-colors group"
              >
                <MapPin className="text-[#0047FF] shrink-0 mt-1" size={20} />
                <div className="flex-1">
                  <div className="overline mb-1">Workshop & Office</div>
                  <div className="text-white font-medium leading-snug group-hover:text-[#0047FF] transition-colors">
                    Rini Engineering Works
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {BRAND.address}
                  </div>
                  <div className="text-xs text-[#0047FF] mt-2 font-semibold uppercase tracking-wider">
                    Get directions ↗
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </a>

              {/* Phone */}
              <a
                href={`tel:${BRAND.phoneRaw}`}
                data-testid="contact-phone"
                className="bg-[#0A0B0E] p-5 flex items-start gap-4 hover:bg-[#14161A] transition-colors group"
              >
                <Phone className="text-[#0047FF] shrink-0 mt-1" size={20} />
                <div className="flex-1">
                  <div className="overline mb-1">Call Us</div>
                  <div className="text-white font-medium group-hover:text-[#0047FF] transition-colors">
                    {BRAND.phone}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Mon–Sat, 9 AM – 6 PM
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                  "Hi Rini Engineering Works, I'd like to enquire about your steel furniture."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp"
                className="bg-[#0A0B0E] p-5 flex items-start gap-4 hover:bg-[#14161A] transition-colors group"
              >
                <MessageCircle className="text-[#0047FF] shrink-0 mt-1" size={20} />
                <div className="flex-1">
                  <div className="overline mb-1">WhatsApp</div>
                  <div className="text-white font-medium group-hover:text-[#0047FF] transition-colors">
                    Chat with us
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Fastest response
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="contact-email"
                className="bg-[#0A0B0E] p-5 flex items-start gap-4 hover:bg-[#14161A] transition-colors group"
              >
                <Mail className="text-[#0047FF] shrink-0 mt-1" size={20} />
                <div className="flex-1">
                  <div className="overline mb-1">Email</div>
                  <div className="text-white font-medium group-hover:text-[#0047FF] transition-colors break-all">
                    {BRAND.email}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              data-testid="quote-form"
              className="border border-white/10 bg-[#14161A] p-7 md:p-10"
            >
              <div className="overline mb-2">Quote Form</div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1">
                Request a Free Quote
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Tell us about your project. We&apos;ll reply within 24 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name *" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    data-testid="quote-name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0A0B0E] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-600 rounded-sm"
                  />
                </Field>
                <Field label="Phone *" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    data-testid="quote-phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                    placeholder="+91 ..."
                    className="w-full bg-[#0A0B0E] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-600 rounded-sm"
                  />
                </Field>
                <Field label="Email *" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    data-testid="quote-email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#0A0B0E] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-600 rounded-sm"
                  />
                </Field>
                <Field label="Product Interest" htmlFor="product_interest">
                  <select
                    id="product_interest"
                    name="product_interest"
                    data-testid="quote-product-interest"
                    value={form.product_interest}
                    onChange={onChange}
                    className="w-full bg-[#0A0B0E] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm rounded-sm appearance-none cursor-pointer"
                  >
                    {PRODUCT_INTERESTS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Project Details" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      data-testid="quote-message"
                      rows={4}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Dimensions, quantity, finish preferences, deadline..."
                      className="w-full bg-[#0A0B0E] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-600 rounded-sm resize-none"
                    />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="quote-submit"
                className="mt-8 w-full btn-accent rounded-sm inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-tight disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Request"}
                {!submitting && <ArrowRight size={16} />}
              </button>
              <p className="mt-4 text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted about your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs uppercase tracking-[0.18em] font-semibold text-slate-400 mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
