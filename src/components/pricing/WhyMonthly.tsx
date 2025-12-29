import { motion } from "framer-motion";
import { Repeat, DollarSign, Zap, Brain, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Repeat,
    title: "Consistent Brand Identity",
    description: "Same designer, same style, every single time. Your brand stays recognizable.",
  },
  {
    icon: DollarSign,
    title: "Predictable Costs",
    description: "No surprise bills. Know exactly what you're spending each month.",
  },
  {
    icon: Zap,
    title: "Fast Revisions",
    description: "Priority queue means your changes happen faster than one-time projects.",
  },
  {
    icon: Brain,
    title: "Deep Brand Understanding",
    description: "One designer learns your brand inside out — no re-briefing every time.",
  },
  {
    icon: Users,
    title: "No Freelancer Hunting",
    description: "Stop wasting time finding new designers. Focus on growing your business.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description: "Priority WhatsApp support and quick responses for all your design needs.",
  },
];

const WhyMonthly = () => {
  return (
    <section className="py-20 relative bg-card border-y border-border">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient-forge">Monthly / Salary</span> Model Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your brand shouldn't change designers every month — but designs should evolve continuously.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMonthly;
