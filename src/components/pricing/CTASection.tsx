import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Briefcase, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient-forge">forge</span> your brand identity?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            From a single poster to full-time design support — we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="forge" size="xl" className="group">
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Start with a One-Time Project
            </Button>
            <Button variant="forgeOutline" size="xl">
              <Briefcase className="w-5 h-5" />
              Hire on Monthly Basis
            </Button>
            <Button variant="outline" size="xl">
              <Phone className="w-5 h-5" />
              Book a Call for Salary Model
            </Button>
          </div>

          {/* Quick Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button variant="ghost" size="lg" className="text-primary hover:text-accent">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get a Quote in 2 Minutes — Click Here
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
