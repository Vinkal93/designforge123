import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, FileText, Megaphone, Users, Scale, Briefcase, Award, Code, ArrowRight } from "lucide-react";
import { categories, services } from "@/data/services";

const iconMap: Record<string, any> = { Palette, FileText, Megaphone, Users, Scale, Briefcase, Award, Code };

const CategoriesSection = () => (
  <section className="py-20 bg-secondary/20 border-y border-border">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Browse by <span className="text-gradient-forge">Category</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">8 categories, 60+ services — find exactly what you need.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c, i) => {
          const Icon = iconMap[c.icon] || Code;
          const count = services.filter((s) => s.categorySlug === c.slug).length;
          return (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/services/${c.slug}`} className="group block p-5 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-card transition-all h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{c.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{count} services</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
