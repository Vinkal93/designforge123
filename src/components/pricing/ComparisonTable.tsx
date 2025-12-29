import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const comparisons = [
  { requirement: "Ek poster chahiye", bestOption: "Starter / Business" },
  { requirement: "Roz post daalna hai", bestOption: "Business Plus" },
  { requirement: "Har mahine marketing content", bestOption: "Creator Plan" },
  { requirement: "Daily design work — school/agency/shop", bestOption: "Full-Time Designer" },
  { requirement: "Monthly campaigns + festival boost", bestOption: "Brand Partner" },
  { requirement: "Complete brand overhaul", bestOption: "Brand Launch" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure which plan? <span className="text-gradient-forge">Let us help.</span>
          </h2>
          <p className="text-muted-foreground">Quick decision helper for your design needs</p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/50 border-b border-border">
              <span className="font-semibold text-sm md:text-base">Your Requirement</span>
              <span className="font-semibold text-sm md:text-base">Best Option</span>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={item.requirement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`grid grid-cols-2 gap-4 p-4 items-center hover:bg-secondary/30 transition-colors ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm md:text-base text-foreground/90">{item.requirement}</span>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm md:text-base font-medium text-primary">{item.bestOption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
