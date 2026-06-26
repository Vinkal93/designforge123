import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { getFeaturedServices, getPopularServices } from "@/data/services";

const FeaturedServicesSection = () => {
  const featured = getFeaturedServices();
  const popular = getPopularServices().slice(0, 8);

  return (
    <section className="py-20 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Sparkles className="w-4 h-4" /> Business Services Marketplace
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Your Business <span className="text-gradient-forge">Needs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            60+ services from branding to digital. Add to cart, get smart discounts, checkout via WhatsApp.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {featured.slice(0, 4).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>

        <h3 className="text-xl font-bold mb-5">Popular Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {popular.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="forge" size="lg">Browse All 60+ Services <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
