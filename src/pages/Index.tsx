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
import Footer from "@/components/pricing/Footer";

const Index = () => {
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

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-16">
          <HeroSection />
          
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
          <TrustSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
