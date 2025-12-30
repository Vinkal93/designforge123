import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Mail, Phone, Instagram, Linkedin, Globe, Code2, Shield, FileText, RotateCcw, Truck } from "lucide-react";

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
            <a href="mailto:vinkal93041@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              vinkal93041@gmail.com
            </a>
            <a href="tel:+919118245636" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 91182 45636
            </a>
          </div>

          {/* Social & Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://webforge1.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              title="WebForge - Web Development"
            >
              <Globe className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* WebForge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://webforge1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 transition-all group"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm">
              Need a website? Check out <span className="font-semibold text-primary group-hover:underline">WebForge</span>
            </span>
          </a>
        </motion.div>

        {/* Policy Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link 
              to="/privacy-policy" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </Link>
            <Link 
              to="/terms-conditions" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4" />
              Terms and Conditions
            </Link>
            <Link 
              to="/cancellation-refund" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Cancellation and Refund
            </Link>
            <Link 
              to="/shipping-delivery" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Truck className="w-4 h-4" />
              Shipping and Delivery
            </Link>
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DesignForge. All rights reserved. |
            <span className="text-primary ml-1">Where ideas become brand assets.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Developed by <span className="text-foreground font-medium">Vinkal Prajapati</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
