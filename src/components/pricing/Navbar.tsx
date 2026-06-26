import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface NavbarProps {
  onMenuClick: () => void;
  onQuoteClick?: () => void;
  onCartClick?: () => void;
}

const Navbar = ({ onMenuClick, onCartClick }: NavbarProps) => {
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="flex items-center gap-2">
              <Flame className="w-7 h-7 text-primary" />
              <span className="text-xl font-bold">
                Design<span className="text-gradient-forge">Forge</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors ${isActive(l.to) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={onCartClick || openCart}
              className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Button
              variant="forge"
              size="sm"
              onClick={() => window.open("https://forms.gle/KWdeXmA8D4mgWtXX7", "_blank")}
            >
              Book Now
            </Button>
          </motion.div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onCartClick || openCart}
              className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Button
              variant="forge"
              size="sm"
              onClick={() => window.open("https://forms.gle/KWdeXmA8D4mgWtXX7", "_blank")}
            >
              Book Now
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
