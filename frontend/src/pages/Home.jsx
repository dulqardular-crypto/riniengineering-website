import { useState } from "react";
import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import TrustBanner from "../components/site/TrustBanner";
import Categories from "../components/site/Categories";
import WhyChooseUs from "../components/site/WhyChooseUs";
import Testimonials from "../components/site/Testimonials";
import About from "../components/site/About";
import ContactQuote from "../components/site/ContactQuote";
import MapSection from "../components/site/MapSection";
import Footer from "../components/site/Footer";
import WhatsAppFAB from "../components/site/WhatsAppFAB";
import QuoteDialog from "../components/site/QuoteDialog";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [defaultInterest, setDefaultInterest] = useState("Office Furniture");

  const openQuote = (interest = "Office Furniture") => {
    setDefaultInterest(interest);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-slate-100 font-body" data-testid="home-page">
      <Header onQuote={() => openQuote("Office Furniture")} />
      <main>
        <Hero onQuote={() => openQuote("Office Furniture")} />
        <TrustBanner />
        <Categories onQuote={openQuote} />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <ContactQuote onOpenQuote={() => openQuote("Office Furniture")} />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFAB />
      <QuoteDialog
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultInterest={defaultInterest}
      />
    </div>
  );
}
