import { motion } from "framer-motion";
import { CreditCard, FileText, Clock, Shield, RefreshCcw, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: CreditCard,
    title: "Payment Terms",
    description: "50% Advance | Full payment before final files",
  },
  {
    icon: FileText,
    title: "Delivery Formats",
    description: "PNG, JPG, PDF, CDR, PSD, AI, SVG",
  },
  {
    icon: CreditCard,
    title: "Payment Modes",
    description: "UPI / Bank Transfer / PayPal",
  },
  {
    icon: RefreshCcw,
    title: "Revisions Policy",
    description: "Included based on your plan",
  },
  {
    icon: Shield,
    title: "Contracts Available",
    description: "For monthly & salary plans",
  },
  {
    icon: FileCheck,
    title: "NDA Support",
    description: "Available for all long-term clients",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 relative bg-secondary/30">
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
            <span className="text-gradient-forge">Clear process.</span> Clear pricing. Clear delivery.
          </h2>
          <p className="text-muted-foreground">Everything you need to know before we start</p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary/30 transition-all"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm md:text-base mb-1">{item.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="border-gradient-forge bg-card rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Bonus Benefits</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-sm">
                🎁 Free 15-min Consultation
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-sm">
                📅 Festival Design Calendar PDF
              </span>
              <span className="px-4 py-2 bg-forge-coral/10 rounded-full text-sm">
                💬 Priority WhatsApp Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
