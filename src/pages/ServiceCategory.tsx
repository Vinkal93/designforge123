import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";
import ServiceCard from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getServicesByCategory } from "@/data/services";

const ServiceCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : null;
  const items = slug ? getServicesByCategory(slug) : [];

  if (!category) return <Navigate to="/services" replace />;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://designforge123.lovable.app/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://designforge123.lovable.app/services" },
        { "@type": "ListItem", position: 3, name: category.name },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: category.name,
      itemListElement: items.map((s, i) => ({
        "@type": "Service",
        position: i + 1,
        name: s.name,
        description: s.description,
        offers: { "@type": "Offer", price: s.price, priceCurrency: "INR" },
      })),
    },
  ];

  return (
    <PageLayout>
      <SEO
        title={`${category.name} Services & Pricing | DesignForge`}
        description={`${category.description}. Browse ${items.length} ${category.name.toLowerCase()} services with transparent pricing.`}
        canonical={`/services/${category.slug}`}
        jsonLd={jsonLd}
      />

      <section className="py-12 border-b border-border bg-secondary/20">
        <div className="container px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{category.name}</span>
          </nav>
          <Link to="/services">
            <Button variant="ghost" size="sm" className="mb-4"><ArrowLeft className="w-4 h-4" /> All Services</Button>
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient-forge">{category.name}</span>
          </motion.h1>
          <p className="text-muted-foreground">{category.description} • {items.length} services available</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceCategory;
