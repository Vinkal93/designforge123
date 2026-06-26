import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Mail, Phone, Globe, Sun, Moon, User, Home, LayoutGrid, Briefcase, Info, MessageSquare, HelpCircle, Newspaper, Users as UsersIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/services", icon: LayoutGrid, label: "All Services" },
  { to: "/portfolio", icon: Briefcase, label: "Portfolio" },
  { to: "/about", icon: Info, label: "About Us" },
  { to: "/testimonials", icon: MessageSquare, label: "Testimonials" },
  { to: "/faq", icon: HelpCircle, label: "FAQ" },
  { to: "/blog", icon: Newspaper, label: "Blog" },
  { to: "/careers", icon: UsersIcon, label: "Careers" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 z-[70] w-80 bg-card border-r border-border shadow-2xl overflow-y-auto custom-scrollbar"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Design<span className="text-gradient-forge">Forge</span></h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary"><X className="w-5 h-5" /></button>
              </div>

              <nav className="space-y-1 mb-6">
                {navLinks.map((l) => (
                  <Link key={l.to} to={l.to} onClick={onClose} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary transition-colors text-sm">
                    <l.icon className="w-4 h-4 text-primary" />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </nav>

              <button onClick={toggleTheme} className="flex items-center gap-3 w-full p-3 rounded-lg bg-secondary hover:bg-secondary/80 mb-6">
                {theme === "dark" ? <><Sun className="w-5 h-5 text-accent" /><span>Light Mode</span></> : <><Moon className="w-5 h-5 text-primary" /><span>Dark Mode</span></>}
              </button>

              <div className="border-t border-border my-4" />

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">About Developer</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Hi! I'm <span className="text-foreground font-medium">Vinkal Prajapati</span>, designer & developer.
                  </p>
                  <a href="mailto:vinkal93041@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" />vinkal93041@gmail.com</a>
                  <a href="tel:+919118245636" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Phone className="w-4 h-4" />+91 91182 45636</a>
                </div>
              </div>

              <div className="border-t border-border my-4" />

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-primary" />Also Check Out</h3>
                <a href="https://webforge1.vercel.app/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-forge flex items-center justify-center"><Globe className="w-5 h-5 text-primary-foreground" /></div>
                    <div>
                      <p className="font-semibold group-hover:text-primary">WebForge</p>
                      <p className="text-xs text-muted-foreground">Web Development Services</p>
                    </div>
                  </div>
                </a>
              </div>

              <Button variant="forge" className="w-full" onClick={() => { window.open("https://forms.gle/KWdeXmA8D4mgWtXX7", "_blank"); onClose(); }}>
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
