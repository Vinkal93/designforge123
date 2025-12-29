import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Palette, TrendingUp, Crown } from "lucide-react";

const plans = [
  {
    name: "Creator Plan",
    price: "₹3,499",
    period: "/month",
    description: "Perfect for content creators & small brands",
    icon: Palette,
    features: [
      "8 Designs per month",
      "Batch delivery weekly",
      "Priority queue",
      "2 revisions per design",
      "Source files included",
    ],
    highlight: false,
  },
  {
    name: "Business Plus",
    price: "₹7,499",
    period: "/month",
    description: "For growing businesses with regular needs",
    icon: TrendingUp,
    features: [
      "20 Designs per month",
      "Logo tweaks included",
      "Weekly delivery batches",
      "Unlimited revisions",
      "All source files",
      "WhatsApp support",
    ],
    highlight: true,
  },
  {
    name: "Brand Partner",
    price: "₹14,999",
    period: "/month",
    description: "Unlimited creativity for serious brands",
    icon: Crown,
    features: [
      "Unlimited requests*",
      "Fair use policy",
      "Dedicated support",
      "Priority delivery",
      "Brand guidelines",
      "Monthly strategy call",
    ],
    highlight: false,
  },
];

const MonthlyPlans = () => {
  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Monthly Subscription
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-forge">Consistent design</span> for consistent growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perfect for brands needing design every month — saves cost & time
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] ${
                plan.highlight
                  ? "border-gradient-forge bg-gradient-card glow-forge scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-forge text-primary-foreground text-xs font-semibold rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                  <plan.icon className={`w-5 h-5 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-gradient-forge">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "forge" : "forgeOutline"}
                className="w-full"
              >
                Subscribe Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-medium text-foreground">Add-ons available:</span> Reel thumbnail packs • Festival posts • Bulk banner discounts
          </p>
          <p className="text-primary font-medium">
            "Consistent brand presence = consistent customer trust"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MonthlyPlans;
