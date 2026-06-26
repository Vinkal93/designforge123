import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Filter, Palette, FileText, Megaphone, Users, Scale, Briefcase, Award, Code, ArrowRight } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";
import ServiceCard from "@/components/services/ServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { services, categories } from "@/data/services";

const iconMap: Record<string, any> = { Palette, FileText, Megaphone, Users, Scale, Briefcase, Award, Code };

const Services = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"popular" | "low" | "high" | "fast">("popular");

  const filtered = useMemo(() => {
    let list = activeCategory === "all" ? services : services.filter((s) => s.categorySlug === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
    }
    if (sortBy === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "fast") list = [...list].sort((a, b) => a.deliveryDays - b.deliveryDays);
    if (sortBy === "popular") list = [...list].sort((a, b) => Number(b.popular || false) - Number(a.popular || false));
    return list;
  }, [query, activeCategory, sortBy]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DesignForge Services",
    itemListElement: services.slice(0, 20).map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.name,
      description: s.description,
      offers: { "@type": "Offer", price: s.price, priceCurrency: "INR" },
    })),
  };

  return (
    <PageLayout>
      <SEO
        title="All Services & Pricing | DesignForge"
        description="Browse 60+ professional design and digital services — logos, websites, brochures, mobile apps, HR docs and more. Transparent pricing, fast delivery."
        canonical="/services"
        keywords="design services, logo design, website development, business cards, brochure design, mobile app"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            All <span className="text-gradient-forge">Services & Pricing</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything your business needs — design, documents, digital. Add to cart, get smart discounts, pay via WhatsApp.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="pl-11 h-12 bg-card"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === "all" ? "forge" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("all")}
            >
              All ({services.length})
            </Button>
            {categories.map((c) => {
              const Icon = iconMap[c.icon] || Code;
              const count = services.filter((s) => s.categorySlug === c.slug).length;
              return (
                <Button
                  key={c.slug}
                  variant={activeCategory === c.slug ? "forge" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(c.slug)}
                >
                  <Icon className="w-4 h-4" />
                  {c.name} ({count})
                </Button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Sort:</span>
            {(["popular", "low", "high", "fast"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${sortBy === s ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"}`}
              >
                {s === "low" ? "Price ↑" : s === "high" ? "Price ↓" : s === "fast" ? "Fastest" : "Popular"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container px-4">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} services found</p>
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No services match your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
