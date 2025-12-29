import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Flame className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold">
              Design<span className="text-gradient-forge">Forge</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#one-time" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              One-Time
            </a>
            <a href="#monthly" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Monthly
            </a>
            <a href="#salary" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Full-Time
            </a>
            <Button variant="forge" size="sm">
              Get a Quote
            </Button>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <a href="#one-time" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                One-Time Projects
              </a>
              <a href="#monthly" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Monthly Plans
              </a>
              <a href="#salary" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Full-Time Hiring
              </a>
              <Button variant="forge" size="sm" className="w-fit">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
