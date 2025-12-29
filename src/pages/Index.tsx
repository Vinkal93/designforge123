import { useState } from "react";
import { Helmet } from "react-helmet-async";
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

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openQuoteWithSubject = (subject: string) => {
    setQuoteSubject(subject);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>DesignForge - Pricing & Plans | Creative Design Services</title>
        <meta
          name="description"
          content="Transparent pricing for design services. One-time projects, monthly subscriptions, or hire a full-time designer. Perfect for startups, creators & businesses."
        />
        <meta name="keywords" content="graphic design, design services, monthly design, hire designer, brand design, social media design" />
      </Helmet>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <QuoteDialog 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        defaultSubject={quoteSubject}
      />

      <div className="min-h-screen bg-background">
        <Navbar 
          onMenuClick={() => setIsSidebarOpen(true)} 
          onQuoteClick={() => openQuoteWithSubject("General Quote Request")}
        />
        
        <main className="pt-16">
          <HeroSection 
            onProjectClick={() => scrollToSection("one-time")}
            onMonthlyClick={() => scrollToSection("monthly")}
            onSalaryClick={() => scrollToSection("salary")}
          />
          
          <div id="one-time">
            <OneTimeProjects />
          </div>
          
          <div id="monthly">
            <MonthlyPlans />
          </div>
          
          <div id="salary">
            <SalaryModel />
          </div>
          
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
      </div>
    </>
  );
};

export default Index;
