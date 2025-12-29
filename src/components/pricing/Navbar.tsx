import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
  onQuoteClick: () => void;
}

const Navbar = ({ onMenuClick, onQuoteClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
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
            <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Calculator
            </a>
            <Button variant="forge" size="sm" onClick={onQuoteClick}>
              Get a Quote
            </Button>
          </motion.div>

          {/* Mobile Menu Button + CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="forge" size="sm" onClick={onQuoteClick}>
              Quote
            </Button>
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
