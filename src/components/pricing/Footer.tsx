import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Mail, Phone, Instagram, Linkedin, Globe, Code2, Shield, FileText, RotateCcw, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container px-4">
        {/* Top: 4 columns */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Design<span className="text-gradient-forge">Forge</span></span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Creative design & digital services that forge your brand identity.</p>
            <div className="flex items-center gap-2">
              <a href="https://webforge1.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-primary/20" title="WebForge">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">All Services</Link></li>
              <li><Link to="/services/branding" className="hover:text-primary">Branding</Link></li>
              <li><Link to="/services/digital-services" className="hover:text-primary">Digital Services</Link></li>
              <li><Link to="/services/marketing" className="hover:text-primary">Marketing</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:vinkal93041@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-3.5 h-3.5" />vinkal93041@gmail.com</a></li>
              <li><a href="tel:+919118245636" className="flex items-center gap-2 hover:text-primary"><Phone className="w-3.5 h-3.5" />+91 91182 45636</a></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        {/* WebForge banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-6">
          <a href="https://webforge1.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 group">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Need a website? Check out <span className="font-semibold text-primary group-hover:underline">WebForge</span></span>
          </a>
        </motion.div>

        {/* Policy links */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6">
            <Link to="/privacy-policy" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Shield className="w-4 h-4" />Privacy Policy</Link>
            <Link to="/terms-conditions" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><FileText className="w-4 h-4" />Terms and Conditions</Link>
            <Link to="/cancellation-refund" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><RotateCcw className="w-4 h-4" />Cancellation and Refund</Link>
            <Link to="/shipping-delivery" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Truck className="w-4 h-4" />Shipping and Delivery</Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 DesignForge. All rights reserved. | <span className="text-primary">Where ideas become brand assets.</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Developed by <span className="text-foreground font-medium">Vinkal Prajapati</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
