import { motion } from "framer-motion";
import { Flame, Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Flame className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">
              Design<span className="text-gradient-forge">Forge</span>
            </span>
          </motion.div>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:hello@designforge.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@designforge.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DesignForge. All rights reserved. | 
            <span className="text-primary ml-1">Where ideas become brand assets.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
