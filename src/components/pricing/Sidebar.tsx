import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Globe, Sun, Moon, Code2, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 z-[70] w-80 bg-card border-r border-border shadow-2xl overflow-y-auto custom-scrollbar"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">
                  Design<span className="text-gradient-forge">Forge</span>
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                <a
                  href="#one-time"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>One-Time Projects</span>
                </a>
                <a
                  href="#monthly"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>Monthly Plans</span>
                </a>
                <a
                  href="#salary"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>Full-Time Hiring</span>
                </a>
                <a
                  href="#calculator"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>Price Calculator</span>
                </a>
              </nav>

              {/* Theme Toggle */}
              <div className="mb-8">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5 text-accent" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-primary" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* Developer Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">About Developer</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Hi! I'm <span className="text-foreground font-medium">Vinkal Prajapati</span>, 
                    a passionate designer & developer.
                  </p>
                  <a
                    href="mailto:vinkal93041@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    vinkal93041@gmail.com
                  </a>
                  <a
                    href="tel:+919118245636"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 91182 45636
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* WebForge Link */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Also Check Out
                </h3>
                <a
                  href="https://webforge1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-all border border-border hover:border-primary/50 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-forge flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">WebForge</p>
                      <p className="text-xs text-muted-foreground">Web Development Services</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <Button 
                variant="forge" 
                className="w-full" 
                onClick={() => {
                  window.open("https://forms.gle/KWdeXmA8D4mgWtXX7", "_blank");
                  onClose();
                }}
              >
                Book Now
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
