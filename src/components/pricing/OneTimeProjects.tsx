import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Building2, Rocket } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "₹499 – ₹999",
    description: "Perfect for small ads & announcements",
    icon: Zap,
    features: [
      "1 Poster / Banner design",
      "1 revision included",
      "Commercial rights",
      "48-hour delivery",
    ],
    bestFor: "Small ads, quick announcements",
    popular: false,
  },
  {
    name: "Business",
    price: "₹1499 – ₹2999",
    description: "For social posts & coaching promotions",
    icon: Building2,
    features: [
      "3 Professional designs",
      "2 revisions per design",
      "Source files included",
      "Print-ready formats",
      "Commercial rights",
    ],
    bestFor: "Social posts, coaching institutes",
    popular: true,
  },
  {
    name: "Brand Launch",
    price: "₹4999 – ₹12999",
    description: "Complete branding for new businesses",
    icon: Rocket,
    features: [
      "Logo design + variations",
      "Banner design",
      "5 Social media ads",
      "Brand kit (colors, fonts)",
      "All source files",
      "Priority support",
    ],
    bestFor: "New business branding",
    popular: false,
  },
];

const OneTimeProjects = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            One-Time Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a quick design? <span className="text-gradient-forge">Start here.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For shops, institutes, YouTubers & events who need creative designs occasionally
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] ${
                pkg.popular
                  ? "border-gradient-forge bg-gradient-card glow-forge"
                  : "bg-card border border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-forge text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${pkg.popular ? "bg-primary/20" : "bg-secondary"}`}>
                  <pkg.icon className={`w-5 h-5 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-xl font-bold">{pkg.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-2xl md:text-3xl font-bold text-gradient-forge">{pkg.price}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-medium">Best for:</span> {pkg.bestFor}
                </p>
                <Button
                  variant={pkg.popular ? "forge" : "forgeOutline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* USP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ✨ All packages include: <span className="text-foreground">Commercial rights</span> • 
            <span className="text-foreground"> Print-ready files</span> • 
            <span className="text-foreground"> Fast delivery</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OneTimeProjects;
