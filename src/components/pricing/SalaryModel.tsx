import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Laptop, Heart } from "lucide-react";

const models = [
  {
    name: "Part-Time Designer",
    price: "₹12,000 – ₹18,000",
    period: "/month",
    hours: "4 hrs daily",
    nature: "Contract",
    icon: Clock,
    description: "Perfect for small coaching centers & agencies",
    features: [
      "4 hours daily commitment",
      "Flexible working hours",
      "All source files",
      "Weekly video calls",
      "Invoice support",
    ],
  },
  {
    name: "Full-Time Designer",
    price: "₹20,000 – ₹35,000",
    period: "/month",
    hours: "8 hrs daily",
    nature: "Remote Salary",
    icon: Laptop,
    description: "For medium companies & growing startups",
    features: [
      "8 hours daily (Mon-Sat)",
      "Dedicated designer",
      "Priority deadlines",
      "Festival campaigns",
      "NDA & contract support",
      "Daily standup calls",
    ],
    popular: true,
  },
  {
    name: "Dedicated Creative Partner",
    price: "₹40,000 – ₹70,000",
    period: "/month",
    hours: "8+ hrs",
    nature: "Semi In-House",
    icon: Heart,
    description: "For brands needing daily creative excellence",
    features: [
      "Full-time + weekends optional",
      "Strategic brand partner",
      "Campaign planning",
      "Multi-channel designs",
      "Executive priority",
      "Monthly strategy sessions",
    ],
  },
];

const SalaryModel = () => {
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
          <span className="inline-block px-4 py-1 rounded-full bg-forge-coral/10 text-forge-coral text-sm font-medium mb-4">
            Full-Time Hiring
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-forge">Hire creativity</span> — just like an employee
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When you need a dedicated designer remotely, without HR headaches
          </p>
        </motion.div>

        {/* Model Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] ${
                model.popular
                  ? "border-gradient-forge bg-gradient-card glow-forge"
                  : "bg-card border border-border"
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-forge text-primary-foreground text-xs font-semibold rounded-full">
                    Most Chosen
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${model.popular ? "bg-primary/20" : "bg-secondary"}`}>
                  <model.icon className={`w-5 h-5 ${model.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{model.name}</h3>
                  <span className="text-xs text-muted-foreground">{model.nature}</span>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gradient-forge">{model.price}</span>
                <span className="text-muted-foreground text-sm">{model.period}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{model.hours}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{model.description}</p>

              <ul className="space-y-3 mb-6">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={model.popular ? "forge" : "forgeOutline"}
                className="w-full"
              >
                Book a Call
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h4 className="text-lg font-semibold mb-4 text-center">What's Included in Every Salary Model</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "All source files",
                "Video call meetings",
                "Priority deadlines",
                "Festival campaigns",
                "NDA support",
                "Invoice support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalaryModel;
