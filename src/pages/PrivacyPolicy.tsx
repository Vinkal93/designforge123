import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DesignForge</title>
        <meta name="description" content="DesignForge Privacy Policy - How we collect, use, and protect your personal information." />
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
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            </div>

            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you request a quote, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and project details.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our design services, 
                  communicate with you about your projects, send you updates about our services, 
                  and respond to your inquiries.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information only when required by law or to protect our rights.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">5. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:vinkal93041@gmail.com" className="text-primary hover:underline">
                    vinkal93041@gmail.com
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

export default PrivacyPolicy;
