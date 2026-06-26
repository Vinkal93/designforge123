import { useState } from "react";
import Navbar from "@/components/pricing/Navbar";
import HeroSection from "@/components/pricing/HeroSection";
import OneTimeProjects from "@/components/pricing/OneTimeProjects";
import MonthlyPlans from "@/components/pricing/MonthlyPlans";
import SalaryModel from "@/components/pricing/SalaryModel";
import WhyMonthly from "@/components/pricing/WhyMonthly";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import TrustSection from "@/components/pricing/TrustSection";
import CTASection from "@/components/pricing/CTASection";
import PriceCalculator from "@/components/pricing/PriceCalculator";
import Footer from "@/components/pricing/Footer";
import Sidebar from "@/components/pricing/Sidebar";
import QuoteDialog from "@/components/pricing/QuoteDialog";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import SEO from "@/components/common/SEO";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const { openCart } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const openQuoteWithSubject = (subject: string) => {
    setQuoteSubject(subject);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <SEO
        title="DesignForge — Creative Design & Digital Services for Businesses"
        description="60+ design and digital services — branding, websites, mobile apps, marketing collateral, HR docs and more. Smart discounts. Fast delivery via WhatsApp."
        canonical="/"
        keywords="design services, logo design, website development, business cards, brochure, mobile app, branding agency India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DesignForge",
          url: "https://designforge123.lovable.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://designforge123.lovable.app/services?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CartDrawer />
      <QuoteDialog isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultSubject={quoteSubject} />

      <div className="min-h-screen bg-background">
        <Navbar
          onMenuClick={() => setIsSidebarOpen(true)}
          onQuoteClick={() => openQuoteWithSubject("General Quote Request")}
          onCartClick={openCart}
        />

        <main className="pt-16">
          <HeroSection
            onProjectClick={() => scrollToSection("one-time")}
            onMonthlyClick={() => scrollToSection("monthly")}
            onSalaryClick={() => scrollToSection("salary")}
          />

          <CategoriesSection />
          <FeaturedServicesSection />

          <div id="one-time"><OneTimeProjects /></div>
          <div id="monthly"><MonthlyPlans /></div>
          <div id="salary"><SalaryModel /></div>

          <WhyMonthly />
          <ComparisonTable />
          <PriceCalculator />
          <TrustSection />
          <CTASection
            onProjectClick={() => openQuoteWithSubject("One-Time Project Quote")}
            onMonthlyClick={() => openQuoteWithSubject("Monthly Plan Quote")}
            onSalaryClick={() => openQuoteWithSubject("Full-Time Salary Discussion")}
            onQuoteClick={() => openQuoteWithSubject("Quick Quote Request")}
          />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
