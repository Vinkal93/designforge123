import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";

const reviews = [
  { name: "Rohit Sharma", role: "Founder, EduPro Coaching", review: "Vinkal designed our entire branding from logo to letterhead. The quality is amazing and delivery was super fast!", rating: 5 },
  { name: "Priya Patel", role: "Owner, Saree Hub", review: "Got my e-commerce website built in 20 days. Smooth communication and excellent design. Highly recommended!", rating: 5 },
  { name: "Amit Kumar", role: "CEO, TechStart", review: "Pitch deck quality is investor-grade. We closed our seed round with this deck. Worth every rupee.", rating: 5 },
  { name: "Sneha Verma", role: "Marketing Head, FitLife", review: "Monthly social media subscription has been a game-changer. Designs are on-brand and on-time.", rating: 5 },
  { name: "Vikas Singh", role: "Director, BuildCo", review: "Company profile turned out way better than expected. Print quality is top-notch.", rating: 5 },
  { name: "Anjali Mehta", role: "HR Manager, FinServ", review: "All our HR documents were standardized in a week. Professional and editable templates.", rating: 5 },
];

const Testimonials = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DesignForge Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.review,
    })),
  };

  return (
    <PageLayout>
      <SEO
        title="Testimonials | DesignForge Reviews from Happy Clients"
        description="Read what our clients say about DesignForge. 5-star reviews from startups, coaching institutes, e-commerce brands and more."
        canonical="/testimonials"
        jsonLd={jsonLd}
      />

      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient-forge">Testimonials</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real reviews from real businesses we've helped grow.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-foreground/90 mb-4 italic">"{r.review}"</p>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Testimonials;
