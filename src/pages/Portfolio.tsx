import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";

const projects = [
  { title: "Coaching Institute Branding", category: "Branding", color: "from-orange-500 to-pink-500" },
  { title: "Restaurant Menu & Posters", category: "Marketing", color: "from-red-500 to-orange-500" },
  { title: "E-commerce Website", category: "Digital", color: "from-blue-500 to-cyan-500" },
  { title: "School ERP Software", category: "Digital", color: "from-green-500 to-emerald-500" },
  { title: "Real Estate Brochure", category: "Company Docs", color: "from-purple-500 to-pink-500" },
  { title: "Fitness App UI", category: "Digital", color: "from-indigo-500 to-blue-500" },
  { title: "Fashion Logo & Visiting Card", category: "Branding", color: "from-pink-500 to-rose-500" },
  { title: "Investor Pitch Deck", category: "Company Docs", color: "from-yellow-500 to-orange-500" },
  { title: "Social Media Campaign", category: "Marketing", color: "from-cyan-500 to-blue-500" },
];

const Portfolio = () => (
  <PageLayout>
    <SEO
      title="Portfolio | DesignForge — Our Work"
      description="Explore DesignForge's portfolio — branding, websites, mobile apps, marketing collateral and more for startups and businesses across India."
      canonical="/portfolio"
    />

    <section className="py-16 border-b border-border bg-secondary/20">
      <div className="container px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient-forge">Portfolio</span>
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse of our recent work across branding, marketing, and digital projects.</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                <Briefcase className="w-12 h-12 text-white/80" />
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <p className="text-xs text-primary mb-1">{p.category}</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Portfolio;
