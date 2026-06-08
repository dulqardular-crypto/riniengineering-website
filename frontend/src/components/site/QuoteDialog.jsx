import { useEffect, useRef, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { PRODUCT_INTERESTS } from "../../lib/constants";
import { submitQuote } from "../../lib/api";

export default function QuoteDialog({ open, onOpenChange, defaultInterest = "Office Furniture" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product_interest: defaultInterest,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const lastInterestRef = useRef(defaultInterest);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (lastInterestRef.current !== defaultInterest) {
        lastInterestRef.current = defaultInterest;
        setForm((f) => ({ ...f, product_interest: defaultInterest }));
      } else {
        setForm((f) =>
          f.product_interest === defaultInterest
            ? f
            : { ...f, product_interest: defaultInterest }
        );
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, defaultInterest]);

  if (!open) return null;

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Name, email and phone are required.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote(form);
      toast.success("Quote request sent. We'll get back to you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        product_interest: defaultInterest,
        message: "",
      });
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error("Could not send. Please try WhatsApp or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      data-testid="quote-dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        data-testid="quote-dialog-backdrop"
      />
      <div className="relative w-full max-w-2xl bg-[#0A0B0E] border border-white/10 max-h-[90vh] overflow-y-auto fade-up">
        <button
          onClick={() => onOpenChange(false)}
          data-testid="quote-dialog-close"
          className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-7 md:p-10">
          <div className="overline mb-2">Quick Quote</div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Get a Free Quote
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Tell us what you need. We&apos;ll respond within 24 hours.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4" data-testid="quote-dialog-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                data-testid="dialog-quote-name"
                placeholder="Full Name *"
                value={form.name}
                onChange={onChange}
                required
                className="w-full bg-[#14161A] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-500 rounded-sm"
              />
              <input
                name="phone"
                data-testid="dialog-quote-phone"
                placeholder="Phone *"
                value={form.phone}
                onChange={onChange}
                required
                className="w-full bg-[#14161A] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-500 rounded-sm"
              />
            </div>
            <input
              name="email"
              type="email"
              data-testid="dialog-quote-email"
              placeholder="Email *"
              value={form.email}
              onChange={onChange}
              required
              className="w-full bg-[#14161A] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-500 rounded-sm"
            />
            <select
              name="product_interest"
              data-testid="dialog-quote-product"
              value={form.product_interest}
              onChange={onChange}
              className="w-full bg-[#14161A] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm rounded-sm appearance-none cursor-pointer"
            >
              {PRODUCT_INTERESTS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              data-testid="dialog-quote-message"
              rows={4}
              value={form.message}
              onChange={onChange}
              placeholder="Project details (dimensions, quantity, finish)..."
              className="w-full bg-[#14161A] border border-white/10 focus:border-[#0047FF] focus:outline-none focus:ring-1 focus:ring-[#0047FF] text-white px-4 py-3 text-sm placeholder:text-slate-500 rounded-sm resize-none"
            />
            <button
              type="submit"
              disabled={submitting}
              data-testid="dialog-quote-submit"
              className="w-full btn-accent rounded-sm inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-tight disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Quote Request"}
              {!submitting && <ArrowRight size={16} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
