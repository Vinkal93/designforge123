import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Briefcase, UserCheck } from "lucide-react";

interface HeroSectionProps {
  onProjectClick: () => void;
  onMonthlyClick: () => void;
  onSalaryClick: () => void;
}

const HeroSection = ({ onProjectClick, onMonthlyClick, onSalaryClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Transparent Pricing • No Hidden Fees</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Choose the perfect plan —{" "}
            <span className="text-gradient-forge">from a single project</span>{" "}
            to full-time design support
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Transparent pricing tailored for startups, creators, businesses & agencies. 
            Your brand deserves designs that work every day — not just once.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="forge" size="xl" className="group" onClick={onProjectClick}>
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Start a Project
            </Button>
            <Button variant="forgeOutline" size="xl" className="group" onClick={onMonthlyClick}>
              <Briefcase className="w-5 h-5" />
              Hire Monthly
            </Button>
            <Button variant="outline" size="xl" className="group" onClick={onSalaryClick}>
              <UserCheck className="w-5 h-5" />
              Full-Time Salary Deal
            </Button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-sm text-muted-foreground italic"
          >
            "Designs that forge your identity — consistently, creatively, professionally."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
