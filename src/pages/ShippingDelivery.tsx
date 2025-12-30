import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShippingDelivery = () => {
  return (
    <>
      <Helmet>
        <title>Shipping and Delivery | DesignForge</title>
        <meta name="description" content="DesignForge Shipping and Delivery Policy - How we deliver your design files and assets." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="py-6 border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
          <div className="container px-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="container px-4 py-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-forge flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Shipping and Delivery</h1>
            </div>

            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">1. Digital Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All DesignForge deliverables are digital products. Files are delivered electronically 
                  via Google Drive, WeTransfer, or direct email attachment depending on file size.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">2. Delivery Formats</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong>Print-ready:</strong> PDF, PNG (300 DPI), TIFF</li>
                  <li>• <strong>Web/Digital:</strong> JPG, PNG, SVG, WebP</li>
                  <li>• <strong>Source Files:</strong> PSD, AI, CDR, Figma (as per package)</li>
                  <li>• <strong>Video/Animation:</strong> MP4, GIF, MOV</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">3. Delivery Timeline</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong>Starter Package:</strong> 1-2 business days</li>
                  <li>• <strong>Business Package:</strong> 2-4 business days</li>
                  <li>• <strong>Brand Launch:</strong> 5-7 business days</li>
                  <li>• <strong>Urgent Delivery:</strong> +50% fee for 24-48 hour delivery</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">4. Monthly Plans Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Monthly plan deliveries are scheduled based on your plan. Creator Plan delivers 
                  in batches, Business Plus delivers weekly, and Brand Partner receives priority 
                  same-day or next-day delivery.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">5. File Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain backup copies of your project files for 90 days after delivery. 
                  After this period, files may be deleted. Monthly and salary clients have 
                  extended file storage for the duration of their contract.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For delivery inquiries or file access issues, contact us at{" "}
                  <a href="mailto:vinkal93041@gmail.com" className="text-primary hover:underline">
                    vinkal93041@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+919118245636" className="text-primary hover:underline">
                    +91 91182 45636
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default ShippingDelivery;
